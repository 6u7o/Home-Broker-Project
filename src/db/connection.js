require('dotenv').config();

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient('https://kkpccdjmfjkjvsptctxl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrcGNjZGptZmpranZzcHRjdHhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgwMzk5ODksImV4cCI6MTk3MzYxNTk4OX0.-tDaiQWIl2BTV0wiLAf9lVC1tKFZ4vV76Z-Uwh0iZPw')

module.exports = supabase;
