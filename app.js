import express from "express"
import cors from "cors"
import { router } from "./router/app_router.js"
import "dotenv/config"

const app = express()

app.listen(4000, ()=>{
    console.log("Server is running in port", 4000)
})

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use("/api", router)