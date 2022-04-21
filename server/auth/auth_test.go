package auth

import (
	"log"
	"os"
	"testing"
	"unigenie/models"

	"github.com/joho/godotenv"
	"github.com/stretchr/testify/assert"
)

func TestGenerateToken(t *testing.T) {
	var testuser models.User

	err := godotenv.Load("../.env")

	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	testuser.Email = "jwt@email.com"
	// jwtWrapper := JwtWrapper{
	// 	SecretKey:       "Secretkey",
	// 	Issuer:          "AuthService",
	// 	ExpirationHours: 24,
	// }

	// generatedToken, err := jwtWrapper.GenerateToken("jwt@email.com")
	testToken, err := TokenGeneration(&testuser)
	assert.NoError(t, err)

	os.Setenv("TestToken", testToken)
}

func TestValidateToken(t *testing.T) {
	encodedToken := os.Getenv("testToken")

	jwtWrapper := JwtWrapper{
		SecretKey: "Secretkey",
		Issuer:    "AuthService",
	}

	claims, err := jwtWrapper.ValidateToken(encodedToken)
	assert.NoError(t, err)

	assert.Equal(t, "jwt@email.com", claims.Email)
	assert.Equal(t, "AuthService", claims.Issuer)
}
