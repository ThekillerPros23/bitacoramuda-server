import express from "express"
import { insert_post } from "../controller/app_controller_insert_post_noticias.js" 
import { get_post } from "../controller/app_controller_get_post_noticias.js" 
import { insert_user } from "../controller/app_controller_insert_userinformation.js" 
import { get_username } from "../controller/app_controller_get_username.js"

export const router = express.Router()
router.post("/insert_post", insert_post)
router.get("/get_post", get_post)
router.post("/insertUser", insert_user)
router.get("/get_username", get_username)