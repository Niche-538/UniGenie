package api

import (
	"fmt"
	"net/http"
	models "unigenie/models"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func GetUsers(c *gin.Context) {
	db, err := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	users := []models.User{}

	db.Find(&users)
	c.JSON(http.StatusOK, &users)

}

func PostUsers(c *gin.Context) {
	var newUser models.User
	if err := c.ShouldBindJSON(&newUser); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	fmt.Println("##################")
	fmt.Println(newUser.Password)
	fmt.Println("##################")

	db, sht := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	if sht != nil {
		panic("failed to connect database")
	}

	user := models.User{FirstName: newUser.FirstName, LastName: newUser.LastName, Email: newUser.Email, Password: newUser.Password}
	db.Create(&user)

	c.JSON(http.StatusOK, gin.H{"data": user})

}

func PostStudentDetails(c *gin.Context) {
	var studetails models.StudentDetails
	if err := c.ShouldBindJSON(&studetails); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	db, sht := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	if sht != nil {
		panic("failed to connect database")
	}

	detailsStudent := models.StudentDetails{FirstName: studetails.FirstName,
		LastName:       studetails.LastName,
		Email:          studetails.Email,
		AddressLine1:   studetails.AddressLine1,
		AddressLine2:   studetails.AddressLine2,
		City:           studetails.City,
		State:          studetails.State,
		ZipCode:        studetails.ZipCode,
		Country:        studetails.Country,
		InstituteName:  studetails.InstituteName,
		InstituteCity:  studetails.InstituteCity,
		InstituteState: studetails.InstituteState,
		Degree:         studetails.Degree,
		Major:          studetails.Major,
		CGPA:           studetails.CGPA,
		CGPAScale:      studetails.CGPAScale,
		GRE:            studetails.GRE,
		GREVerbal:      studetails.GREVerbal,
		GREQuant:       studetails.GREQuant,
		GREAWM:         studetails.GREAWM,
		TOEFL:          studetails.TOEFL,
		TOEFLRead:      studetails.TOEFLRead,
		TOEFLListen:    studetails.TOEFLListen,
		TOEFLSpeak:     studetails.TOEFLSpeak,
		TOEFLWrite:     studetails.TOEFLWrite,
		IELTS:          studetails.IELTS,
		IELTSRead:      studetails.IELTSRead,
		IELTSListen:    studetails.IELTSListen,
		IELTSSpeak:     studetails.IELTSSpeak,
		IELTSWrite:     studetails.IELTSWrite}
	db.Create(&detailsStudent)

	c.JSON(http.StatusOK, gin.H{"data": detailsStudent})
}

func PostUserPreferences(c *gin.Context) {
	var newUserPreferences models.UserPreferences
	if err := c.ShouldBindJSON(&newUserPreferences); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	db, sht := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	if sht != nil {
		panic("failed to connect database")
	}

	userPreferences := models.UserPreferences{
		UserID:            newUserPreferences.UserID,
		CoursePreference:  newUserPreferences.CoursePreference,
		CountryPreference: newUserPreferences.CountryPreference,
	}
	db.Create(&userPreferences)
	c.JSON(http.StatusOK, gin.H{"data": userPreferences})
}

func PostUserUniversityApplication(c *gin.Context) {
	var newUserUniversityApplication models.UserUniversityApplication
	if err := c.ShouldBindJSON(&newUserUniversityApplication); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	db, sht := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	if sht != nil {
		panic("failed to connect database")
	}

	userUniversityApplication := models.UserUniversityApplication{
		UserID:                    newUserUniversityApplication.UserID,
		UniversityApplicationLink: newUserUniversityApplication.UniversityApplicationLink,
		TranscriptUploaded:        newUserUniversityApplication.TranscriptUploaded,
		LOR1:                      newUserUniversityApplication.LOR1,
		LOR2:                      newUserUniversityApplication.LOR2,
		LOR3:                      newUserUniversityApplication.LOR3,
	}
	db.Create(&userUniversityApplication)
	c.JSON(http.StatusOK, gin.H{"data": userUniversityApplication})
}
