Features (one sentence each)

Express-based HTTP server with ES module imports and an exported app instance for use by a starter script or server.
Body parsing for JSON and URL-encoded payloads with a 16kb limit to protect against large request bodies.
Static file hosting from the public directory for assets like images and frontend files.
CORS configuration allowing origins from the CORS_ORIGIN env var (comma-separated) or defaulting to http://localhost:5173, with common methods and headers whitelisted.
Versioned routing with a mounted healthcheck router at /api/v1/healthcare for service status endpoints.
Small example routes (/ and /insta) for quick manual checks of server responsiveness.
Project layout separated into logical folders (controllers, routes, middlewares, models, utils, validation, db) to keep concerns modular.
Utility modules for standardized API responses and errors (utils/api-responce.js, utils/api-error.js) and a centralized database connection in db/database.js.
