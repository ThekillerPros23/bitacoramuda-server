import { supabase } from "../modules/app_module.js"

export async function get_username(req, res){
    const email = req.query["email"]
    const {data,error}  = await supabase.from("usuario").select("username").eq("email",email)
    res.send(data)
}