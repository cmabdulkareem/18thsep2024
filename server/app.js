import express from "express";
import { configDotenv } from "dotenv";
import cors from 'cors'
const app = express()
configDotenv()

const PORT = process.env.PORT

const corsoptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, HEAD, PUT, PATCH, DELETE",
    credentials: true,
    allowedHeaders : "Content-Type, Authorization"
}

app.use(express.json())
app.use(cors(corsoptions))

app.post('/register', (req, res)=>{
    return res.status(400).json("Data not received")
})


app.listen(PORT, ()=>{
    console.log(`connected to http://localhost:${PORT}`)
})