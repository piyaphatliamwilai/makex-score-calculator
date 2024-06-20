"use client"

import { useState } from "react"

export default function Timer() {
    const [countdown, setCountdown] = useState(10)
    const [timer, setTimer] = useState(0)
    const [width, setWidth] = useState(100)
    const [startTime, setStartTime] = useState(10)

    function StartTimer() {
        clearTimeout(timer)
        clearInterval(timer)
        setTimer(setInterval(Timer, 1000))
    }

    function Timer() {
        setCountdown((current) => {
                let val = current - 1
                if (current == 0) {
                    ResetTimer()
                } else {
                    setWidth((num) => {
                        console.log((val / startTime) * 100)
                        return (val / startTime) * 100
                    })
                }
                return val;
            }
        )
    }

    function ResetTimer() {
        console.log('resetting')
        clearTimeout(timer)
        clearInterval(timer)
    }

    return(
        <main className="min-h-screen p-24 bg-stone-950 space-y-5">
            <div className="flex space-x-2">
                <h1 className="text-5xl">MakeX Timer Countdown</h1>
                <h1 className="text-xl">2024-25 Edition</h1>
            </div>
            <div className="flex space-x-4">
                <button onClick={StartTimer} className="p-2 bg-green-700 outline outline-1 outline-green-900 rounded-sm">Start Timer</button>
              <button onClick={ResetTimer} className="p-2 bg-red-700 outline outline-1 outline-red-900 rounded-sm">Stop Timer</button>
            </div>
            <div className="min-h-max bg-black bg-opacity-40 outline outline-stone-900 outline-1 px-8 py-8 space-y-8">
                <h1 className="text-6xl">Time Remaining: {countdown} seconds left.</h1>
                <div className={"flex h-4 bg-opacity-10 bg-white rounded-sm"}>
                    <div className={"h-4 bg-green-800 rounded-sm"} style={{width: width + '%'}}></div>
                </div>
            </div>
        </main>
    )
}