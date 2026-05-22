import { NextResponse } from 'next/server'

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbz0mcRkqaj_3ZAbpRyGkBAb7AQzzTF5Eg9OxeC2Hn8EOLldXHuKrqth1Uv36AoW4815Lg/exec'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const upstreamResponse = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      cache: 'no-store',
    })

    const responseText = await upstreamResponse.text()

    let payload: { success?: boolean; error?: string } = {}

    try {
      payload = JSON.parse(responseText)
    } catch {
      payload = upstreamResponse.ok
        ? { success: true }
        : { success: false, error: 'Invalid response from form service' }
    }

    if (!upstreamResponse.ok || !payload.success) {
      return NextResponse.json(
        {
          success: false,
          error: payload.error || 'Failed to submit contact form',
        },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unexpected error',
      },
      { status: 500 }
    )
  }
}
