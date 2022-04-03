package routes

// import (
// 	controller "unigenie/controllers"
// 	middleware "unigenie/middleware"

// 	"github.com/gin-gonic/gin"
// )

// func UserRoutes(incomingRoutes *gin.Engine) {
// 	// routes here require middleware as they are protected routes.
// 	// This means that the users must have a token for accessing these routes.
// 	// User must not be able to use protected routes without logging in the system (i.e, token is required).
// 	incomingRoutes.Use(middleware.Authenticate())
// 	incomingRoutes.GET("/users", controller.GetUsers())
// 	// incomingRoutes.GET("/users/:user_id", controller.GetUser())
// 	incomingRoutes.GET("/universities", controller.GetUniversities())
// 	// incomingRoutes.GET("/universities/:university_id", controller.GetUniversity())
// }
