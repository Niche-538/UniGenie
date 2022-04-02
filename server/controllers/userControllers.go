package controllers

import (
	"fmt"
	"log"
	"net/http"
	"unigenie/auth"
	"unigenie/database"
	models "unigenie/models"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

// Signup creates a user in db
func Signup(c *gin.Context) {
	var newUser models.User
	if err := c.ShouldBindJSON(&newUser); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	db, sht := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	if sht != nil {
		panic("failed to connect database")
	}

	fmt.Println("Password Signup: ", newUser.Password, "\t\t Type: %T", newUser.Password)

	err, pwd := newUser.HashPassword(newUser.Password)
	if err != nil {
		panic("failed to create a hash")
	} else {
		fmt.Println("Hash Password: ", pwd)
	}

	user := models.User{FirstName: newUser.FirstName, LastName: newUser.LastName, Email: newUser.Email, Password: pwd}
	db.Create(&user)

	c.JSON(http.StatusOK, gin.H{"data": user})
}

type LoginPayload struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

// LoginResponse token response
type LoginResponse struct {
	Token string `json:"token"`
}

func Login(c *gin.Context) {

	var payload LoginPayload
	var user models.User

	err := c.ShouldBindJSON(&payload)
	if err != nil {
		c.JSON(400, gin.H{
			"msg": "invalid json",
		})
		c.Abort()
		return
	}

	fmt.Print("#########\n\n")
	fmt.Println(payload.Email, "\t\t", payload.Password)
	fmt.Print("\n\n #########\n")

	result := database.ReturnDatabase().Where("email = ?", payload.Email).First(&user)

	fmt.Print("#########\n\n")
	fmt.Println(result)
	fmt.Print("\n\n #########\n")

	if result.Error == gorm.ErrRecordNotFound {
		c.JSON(401, gin.H{
			"msg": "invalid user credentials",
		})
		c.Abort()
		return
	}

	err = user.CheckPassword(payload.Password)
	if err != nil {
		log.Println(err)
		c.JSON(401, gin.H{
			"msg": "invalid user credentials",
		})
		c.Abort()
		return
	}

	jwtWrapper := auth.JwtWrapper{
		SecretKey:       "verysecretkey",
		Issuer:          "AuthService",
		ExpirationHours: 24,
	}

	signedToken, err := jwtWrapper.GenerateToken(user.Email)
	if err != nil {
		log.Println(err)
		c.JSON(500, gin.H{
			"msg": "error signing token",
		})
		c.Abort()
		return
	}

	tokenResponse := LoginResponse{
		Token: signedToken,
	}

	c.JSON(200, tokenResponse)

}
