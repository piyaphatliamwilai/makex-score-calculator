"use client"

import Link from "next/link"

export default function Home() {
  return (
    <main>
      <div className="p-32 flex-row min-h-screen space-y-8">
        <h1>CS6th / Gemini</h1>
        <h1>Please wait.. the website is in construction.</h1>
        <h1>While you wait, check out some of our stuff would you?</h1>
        <Link href={"/score"}>
          <h1>Score Calculator</h1>
        </Link>
        <Link href={"/timer"}>
          <h1>MakeX Timer</h1>
        </Link>
      </div>
    </main>
  )
}
