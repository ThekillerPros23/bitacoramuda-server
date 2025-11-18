import { supabase } from "../modules/app_module.js";

export async function insert_post(req, res) {
  try {
    const title = req.body.title;
    const description = req.body.description;
    const createBy = req.body.createBy;
    const timeCreated = req.body.timeCreated;
   
    console.log(title, description, createBy, timeCreated);
    const { error } = await supabase.from("noticias").insert({
      title: title,
      description: description,
      createby: createBy,
      timecreated: timeCreated,
    })
    
  } catch {
    res.status(400).send("Los datos ingresados estan erroneos");
  }
}
