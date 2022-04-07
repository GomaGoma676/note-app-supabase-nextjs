import { NextRequest, NextResponse } from 'next/server'

export const middleware = (req: NextRequest) => {
  return NextResponse.rewrite(`${req.url}/${req.ua?.browser.name}`)
}
