import { supabase } from "../modules/app_module.js";

export async function get_post(req, res) {
  const { data, error } = await supabase
    .from("noticias")
    .select("title, description");
    console.log(data)
  res.send(data);
}
