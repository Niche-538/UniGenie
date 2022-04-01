package models

import (
	"os"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestHashPassword(t *testing.T) {
	user := User{
		Password: "secret",
	}

	err := user.HashPassword(user.Password)
	assert.NoError(t, err)

	os.Setenv("passwordHash", user.Password)
}

// func TestCreateUserRecord(t *testing.T) {
// 	var userResult User

// 	err := database.SetDatabaseTest()
// 	if err != nil {
// 		t.Error(err)
// 	}

// 	err = database.DBConn.AutoMigrate(&User{})
// 	assert.NoError(t, err)

// 	user := User{
// 		FirstName: "Test User",
// 		LastName:  "Lname",
// 		Email:     "test@email.com",
// 		Password:  os.Getenv("passwordHash"),
// 	}

// 	err = user.CreateUserRecord()
// 	assert.NoError(t, err)

// 	database.DBConn.Where("email = ?", user.Email).Find(&userResult)

// 	database.DBConn.Unscoped().Delete(&user)

// 	assert.Equal(t, "Test User", userResult.FirstName)
// 	assert.Equal(t, "test@email.com", userResult.Email)

// }

func TestCheckPassword(t *testing.T) {
	hash := os.Getenv("passwordHash")

	user := User{
		Password: hash,
	}

	err := user.CheckPassword("secret")
	assert.NoError(t, err)
}
