package api

import (
	"net/http"
	models "unigenie/models"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func GetUniversities(c *gin.Context) {
	db, err := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	universities := []models.University{}

	db.Find(&universities)
	c.JSON(http.StatusOK, &universities)

}

func PostUniversities(c *gin.Context) {
	var newUniv models.University
	if err := c.ShouldBindJSON(&newUniv); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	db, sht := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	if sht != nil {
		panic("failed to connect database")
	}

	univ := models.University{Name: newUniv.Name,
		Website: newUniv.Website,
		Address: newUniv.Address,
		City:    newUniv.City,
		State:   newUniv.State,
		Zip:     newUniv.Zip,
		Country: newUniv.Country}
	db.Create(&univ)

	c.JSON(http.StatusOK, gin.H{"data": univ})
}
