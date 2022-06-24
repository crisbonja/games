import { createClient } from '@supabase/supabase-js'

const URL_API = 'https://ozuygrtocdubmsatevyd.supabase.co'
const TOKEN_API = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96dXlncnRvY2R1Ym1zYXRldnlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM2MDkyNDEsImV4cCI6MTk2OTE4NTI0MX0.AsJwHChGz3Z67-gNl5_KMoNV9NaArGTx01uOAfd8ZXo';

const PERSONS_API = createClient(URL_API, TOKEN_API)

export default PERSONS_API;
