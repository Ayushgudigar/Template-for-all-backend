import express from "express"
import cors from "cors"
import healthcheck from "./routes/Healthcheck.routers.js"


const app=express()
// -------------------------
// Request body parsers
// -------------------------
// Limit JSON and URL-encoded payload sizes to protect the server from
// very large requests and accidental OOM crashes. 16kb is intentionally
// small for this example; increase if you need to accept larger bodies.
//Basic Configaration
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))

// -------------------------
// CORS configuration
// -------------------------
// Allow requests from origins specified in the CORS_ORIGIN env var (comma
// separated). If not provided, allow localhost:5173 (useful for local dev).
// We also whitelist common HTTP methods and headers used by the API.
//cors configaration
app.use(cors({
    origin:process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    methods:["GET",'POST','PUT','DELETE','PATCH','OPTIONS'],
    allowedHeaders:["Content-Type","Authorization"],
    credentials:true,
}))

// -------------------------
// Routes
// -------------------------
// Mount the healthcheck router under the API versioned path. The router
// file should export an Express Router that handles health-related endpoints.
//import the healthcheck router
app.use("/api/v1/healthcare",healthcheck)

app.get('/',(req,res)=>
{
    res.send("Hello world from express app")
})

app.get('/insta',(req,res)=>
{
console.log("Insta route called")
})

export default app