import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../utils/supabase'

export default async function fetchNotes(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data, error } = await supabase
    .from('notes')
    .select('*')
    .order('created_at', { ascending: true })
  if (error) return res.status(401).json(`${error.message}: ${error.details}`)
  return res.status(200).json(data)
}
