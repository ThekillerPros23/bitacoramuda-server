import express from "express"
import { insert_post } from "../controller/app_controller_insert_post.js"
import { get_post } from "../controller/app_controller_get_post.js"

export const router = express.Router()
router.post("/insert_post", insert_post)
router.get("/get_post", get_post)