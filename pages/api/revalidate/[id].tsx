import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  revalidated: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('Revalidating detail page...')
  const {
    query: { id },
  } = req
  let revalidated = false
  try {
    await res.unstable_revalidate(`/note/${id}`)
    revalidated = true
  } catch (err) {
    console.log(err)
  }
  res.json({
    revalidated,
  })
}
