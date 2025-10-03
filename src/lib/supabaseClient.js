// src/lib/supabaseClient.js
// Supabase deshabilitado para esta landing.
// Evitamos importar '@supabase/supabase-js' para que compile en Vercel.
export const supabase = null;

// Si en alguna parte del código hay algo como supabase?.from(...),
// no va a romper (pero obviamente no hará nada).
