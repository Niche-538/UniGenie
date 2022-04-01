package database

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DBConn *gorm.DB

// func SetDatabase() {
// 	DBConn, err := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
// 	if err != nil {
// 		panic("failed to connect database")
// 	}

// 	// Migrate the schema
// 	DBConn.AutoMigrate(&models.University{})
// 	DBConn.AutoMigrate(&models.User{})
// 	DBConn.AutoMigrate(&models.Program{})
// 	DBConn.AutoMigrate(&models.OfferedCourse{})
// 	DBConn.AutoMigrate(&models.StudentDetails{})
// }

func SetDatabaseTest() (err error) {
	DBConn, err := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	if err != nil {
		return err
	}

	DBConn.Name()
	return nil
}
