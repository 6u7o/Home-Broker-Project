require('dotenv').config();

const { createClient } = require('@supabase/supabase-js')

const { DB_LINK, DB_KEY } = process.env;

const supabase = createClient(DB_LINK, DB_KEY)

module.exports = supabase;
