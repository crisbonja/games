import { createClient } from '@supabase/supabase-js'

const URL_API = process.env.SUPABASE_URL;
const TOKEN_API = process.env.SUPABASE_TOKEN;

const PERSONS_API = createClient(URL_API, TOKEN_API)

export default PERSONS_API;
