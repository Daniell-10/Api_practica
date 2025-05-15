// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mmrwrczzcazdewkawlmc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tcndyY3p6Y2F6ZGV3a2F3bG1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNzA1ODcsImV4cCI6MjA2Mjg0NjU4N30.VF4sX3VJw7IY5caFtKQr3HDZV3nvxN9tdiGMSmpiGyM';
export const supabase = createClient(supabaseUrl, supabaseKey);
