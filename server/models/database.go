package models

// import (
// 	"gorm.io/driver/sqlite"
// 	"gorm.io/gorm"
// )

// func SetDatabase() {
// 	db, err := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
// 	if err != nil {
// 		panic("failed to connect database")
// 	}

// 	// Migrate the schema
// 	db.AutoMigrate(&University{})
// 	db.AutoMigrate(&User{})
// 	db.AutoMigrate(&Program{})
// 	db.AutoMigrate(&OfferedCourse{})
// 	db.AutoMigrate(&StudentDetails{})
// 	db.AutoMigrate(&UserPreferences{})
// 	db.AutoMigrate(&UserUniversityApplication{})
// }
