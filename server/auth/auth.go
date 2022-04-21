package auth

import (
	"errors"
	"fmt"
	"log"
	"os"
	"time"
	"unigenie/models"

	jwt "github.com/dgrijalva/jwt-go"
	"github.com/joho/godotenv"
)

// JwtWrapper wraps the signing key and the issuer
type JwtWrapper struct {
	SecretKey       string
	Issuer          string
	ExpirationHours int64
}

// JwtClaim adds email as a claim to the token
type JwtClaim struct {
	Email string
	jwt.StandardClaims
}

// GenerateToken generates a jwt token
func (j *JwtWrapper) GenerateToken(email string) (signedToken string, err error) {
	claims := &JwtClaim{
		Email: email,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: time.Now().Local().Add(time.Hour * time.Duration(j.ExpirationHours)).Unix(),
			Issuer:    j.Issuer,
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	signedToken, err = token.SignedString([]byte(j.SecretKey))
	if err != nil {
		return
	}

	return
}

//ValidateToken validates the jwt token
func (j *JwtWrapper) ValidateToken(signedToken string) (claims *JwtClaim, err error) {
	token, err := jwt.ParseWithClaims(
		signedToken,
		&JwtClaim{},
		func(token *jwt.Token) (interface{}, error) {
			return []byte(j.SecretKey), nil
		},
	)

	if err != nil {
		return
	}

	claims, ok := token.Claims.(*JwtClaim)
	if !ok {
		err = errors.New("couldn't parse claims")
		return
	}

	if claims.ExpiresAt < time.Now().Local().Unix() {
		err = errors.New("JWT is expired")
		return
	}

	return

}

///// New Auth Functions

var secretKey []byte

type AuthClaim struct {
	Email string
	jwt.StandardClaims
}

func TokenGeneration(user *models.User) (string, error) {
	userEmail := user.Email
	// fmt.Print("\n\n In token generation function: ", userEmail, "\n\n\n")
	claim := AuthClaim{
		Email: userEmail,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: time.Now().Add(24 * time.Hour).Unix(),
			// Issuer:    j.Issuer, // can be commented remove the pointer reference (j *JwtWrapper)
		},
	}

	// fmt.Print("\n\n In token generation: claim variable: ", claim, "\n\n\n")

	token := jwt.NewWithClaims(jwt.SigningMethodHS512, claim)

	fmt.Print("\n\n In token generation function: token: ", token, "\n\n\n")

	// Get secret key
	godotenv.Load(".env")
	err := godotenv.Load(".env")

	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	secretKey := []byte(os.Getenv("SECRET_KEY"))
	fmt.Print("\n\n In token generation function: secretKey: ", secretKey, "\n\n\n")
	//////////////

	tokenString, err := token.SignedString(secretKey)

	fmt.Print("\n\n In token generation function: tokenstring: ", tokenString, "\n\n\n")

	if err != nil {
		return "", err
	}
	return tokenString, nil
}

func TokenValidation(tokenString string) (string, error) {
	var claims AuthClaim
	token, err := jwt.ParseWithClaims(tokenString, &claims, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return secretKey, nil
	})
	if err != nil {
		return "", err
	}
	if !token.Valid {
		return "", errors.New("invalid token")
	}
	email := claims.Email
	return email, nil
}
