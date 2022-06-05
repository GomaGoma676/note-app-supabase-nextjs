import { NextRequest, NextResponse } from 'next/server'
//import { supabase } from '../../../utils/supabase'

export const middleware = async (req: NextRequest, res: NextResponse) => {
  //Original
  // const { data, error } = await supabase
  //   .from('notes')
  //   .select('*')
  //   .order('created_at', { ascending: true })

  // if (error) return NextResponse.json({ message: 'Fetch error' })
  // return NextResponse.json(data)

  //After modification to direct fetch to REST API end point (Supabase)
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/notes?select=*`,
    {
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_API_KEY!,
      },
    }
  )
  const notes = await response.json()
  return NextResponse.json(notes)
}
