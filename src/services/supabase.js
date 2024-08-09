import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://txbszlrhonyklqtqqhgv.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4YnN6bHJob255a2xxdHFxaGd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY3MDcwMjAsImV4cCI6MjAzMjI4MzAyMH0.piSTmIiwnxfjISN6obo-07aVq7bOGaau_UYtHkL9LSk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
