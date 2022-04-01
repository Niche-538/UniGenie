package database

import (
	"unigenie/models"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

// var dbConn *gorm.DB

func SetDatabase() {
	dbConn, err := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	// Migrate the schema
	dbConn.AutoMigrate(&models.University{})
	dbConn.AutoMigrate(&models.User{})
	dbConn.AutoMigrate(&models.Program{})
	dbConn.AutoMigrate(&models.OfferedCourse{})
	dbConn.AutoMigrate(&models.StudentDetails{})
}

func SetDatabaseTest() (err error) {
	dbConn, err := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	if err != nil {
		return err
	}

	dbConn.DB()

	return
}
