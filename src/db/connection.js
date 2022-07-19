require('dotenv').config();
// const mysql = require('mysql2/promise');

// const connection = mysql.createPool({
//   host: process.env.MYSQL_HOST,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE || 'HomeBroker',
// });

// module.exports = connection;

const { createClient } = require('@supabase/supabase-js')

const supabase = createClient('https://kkpccdjmfjkjvsptctxl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrcGNjZGptZmpranZzcHRjdHhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgwMzk5ODksImV4cCI6MTk3MzYxNTk4OX0.-tDaiQWIl2BTV0wiLAf9lVC1tKFZ4vV76Z-Uwh0iZPw')

module.exports = supabase;

'https://kkpccdjmfjkjvsptctxl.supabase.co'
'https://kkpccdjmfjkjvsptctxl.supabase.co'

'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrcGNjZGptZmpranZzcHRjdHhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgwMzk5ODksImV4cCI6MTk3MzYxNTk4OX0.-tDaiQWIl2BTV0wiLAf9lVC1tKFZ4vV76Z-Uwh0iZPw'

'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrcGNjZGptZmpranZzcHRjdHhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgwMzk5ODksImV4cCI6MTk3MzYxNTk4OX0.-tDaiQWIl2BTV0wiLAf9lVC1tKFZ4vV76Z-Uwh0iZPw'