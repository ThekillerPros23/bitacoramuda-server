import { supabase } from "../modules/app_module.js";

export async function get_post(req, res) {
  try {
    const { data, error } = await supabase
      .from("noticias")
      .select("title, description");
    res.send(data);
  } catch {
    res.status(400).send("El servidor no se encuentra");
  }
}
