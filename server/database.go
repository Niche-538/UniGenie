package main

// import (
// 	"gorm.io/driver/sqlite"
// 	"gorm.io/gorm"
// )

// func setDatabase() {
// 	db, err := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
// 	if err != nil {
// 		panic("failed to connect database")
// 	}

// 	// Migrate the schema
// 	db.AutoMigrate(&University{})
// 	db.AutoMigrate(&User{})
// 	db.AutoMigrate(&OfferedCourse{})

// 	var unis = []University{{Name: "University of Florida", Ranking: 1, Country: "USA"},
// 		{Name: "University of Texas, Dallas", Ranking: 2, Country: "USA"},
// 		{Name: "Stony Brook", Ranking: 3, Country: "USA"}}

// 	db.Create(&unis)
// }
