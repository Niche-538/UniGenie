package models

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func GetUniversities(c *gin.Context) {
	db, err := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	universities := []University{}

	db.Find(&universities)
	c.JSON(http.StatusOK, &universities)

}

func GetUsers(c *gin.Context) {
	db, err := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	users := []User{}

	db.Find(&users)
	c.JSON(http.StatusOK, &users)

}

// POST Functions

func PostUsers(c *gin.Context) {
	var newUser User
	if err := c.ShouldBindJSON(&newUser); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	db, sht := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	if sht != nil {
		panic("failed to connect database")
	}

	user := User{FirstName: newUser.FirstName, LastName: newUser.LastName, Email: newUser.Email, Password: newUser.Password}
	db.Create(&user)

	c.JSON(http.StatusOK, gin.H{"data": user})

}

func PostUniversities(c *gin.Context) {
	var newUniv University
	if err := c.ShouldBindJSON(&newUniv); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	db, sht := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	if sht != nil {
		panic("failed to connect database")
	}

	univ := University{Name: newUniv.Name,
		Website: newUniv.Website,
		Address: newUniv.Address,
		City:    newUniv.City,
		State:   newUniv.State,
		Zip:     newUniv.Zip,
		Country: newUniv.Country}
	db.Create(&univ)

	c.JSON(http.StatusOK, gin.H{"data": univ})
}

func PostStudentDetails(c *gin.Context) {
	var studetails StudentDetails
	if err := c.ShouldBindJSON(&studetails); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	db, sht := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	if sht != nil {
		panic("failed to connect database")
	}

	detailsStudent := StudentDetails{FirstName: 			studetails.FirstName,
		LastName: 			studetails.LastName,
		Email: 				studetails.Email,
		AddressLine1: 		studetails.AddressLine1,
		AddressLine2: 		studetails.AddressLine2,
		City: 				studetails.City,
		State: 				studetails.State,
		ZipCode: 			studetails.ZipCode,
		Country: 			studetails.Country,
		InstituteName: 		studetails.InstituteName,
		InstituteCity: 		studetails.InstituteCity,
		InstituteState: 	studetails.InstituteState,
		Degree: 			studetails.Degree,
		Major: 				studetails.Major,
		CGPA: 				studetails.CGPA,
		CGPAScale: 			studetails.CGPAScale,
		GRE: 				studetails.GRE,
		GREVerbal: 			studetails.GREVerbal,
		GREQuant: 			studetails.GREQuant,
		GREAWM: 			studetails.GREAWM,
		TOEFL: 				studetails.TOEFL,
		TOEFLRead: 			studetails.TOEFLRead,
		TOEFLListen: 		studetails.TOEFLListen,
		TOEFLSpeak: 		studetails.TOEFLSpeak,
		TOEFLWrite: 		studetails.TOEFLWrite,
		IELTS: 				studetails.IELTS,
		IELTSRead: 			studetails.IELTSRead,
		IELTSListen: 		studetails.IELTSListen,
		IELTSSpeak: 		studetails.IELTSSpeak,
		IELTSWrite: 		studetails.IELTSWrite}
	db.Create(&detailsStudent)

	c.JSON(http.StatusOK, gin.H{"data": detailsStudent})
}
