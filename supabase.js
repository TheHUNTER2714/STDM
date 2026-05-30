import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://yiqcquqlbiddbjrrttqs.supabase.co/rest/v1/'
const supabaseKey = 'sb_publishable_mTOOuF627y2qY3aMIA0aRw_1iRFb_2a'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)
