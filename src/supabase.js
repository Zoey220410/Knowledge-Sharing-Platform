import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iuqkaxsnxrdjqqabmtyj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1cWtheHNueHJkanFxYWJtdHlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1OTcyMTgsImV4cCI6MjAwOTE3MzIxOH0.H7wcxl1r8I3uErIDc2aUIKzOBpsjaiGNEUL3-OODC-0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
