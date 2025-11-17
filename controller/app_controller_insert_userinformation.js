import { supabase } from "../modules/app_module.js"

export async function insert_user(req, res){
    const username = req.body.username
    const email = req.body.email
    const {error} = await supabase.from("usuario").insert({email:email, username:username})
}