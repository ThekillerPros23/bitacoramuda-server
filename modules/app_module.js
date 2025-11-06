import { createClient } from '@supabase/supabase-js'
import "dotenv/config"
const supabaseUrl = 'https://ytqwuwhkkttmcytqwqyd.supabase.co'
const supabaseKey = process.env.supabase_key
export const supabase = createClient(supabaseUrl, supabaseKey)