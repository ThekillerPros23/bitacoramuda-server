import { supabase } from "../modules/app_module.js";

export async function insert_post(req, res) {
  const title = req.body.title;
  const description = req.body.description;
  console.log(title, description)
  const {error } = await supabase
    .from("noticias")
    .insert({ title: title, description: description });
}
