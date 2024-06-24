"use client"

import Link from "next/link"
import { useState } from "react"

export default function Timer() {
    const [countdown, setCountdown] = useState(30)
    const [timer, setTimer] = useState(0)
    const [width, setWidth] = useState(100)
    const [startTime, setStartTime] = useState(30)
    const [stage, setStage] = useState("Automatic")
    const [status, setStatus] = useState("00:30")

    function StartTimer() {
        clearTimeout(timer)
        clearInterval(timer)
        Timer()
        setTimer(setInterval(Timer, 1000))
    }

    function Timer() {
        setCountdown((current) => {
                let val = current - 1
                if (current == 0) {
                    UpdateStatus(current)
                    return current
                } else {
                    setWidth((num) => {
                        console.log((val / startTime) * 100)
                        return (val / startTime) * 100
                    })
                }
                UpdateStatus(current)
                return val;
            }
        )
    }

    function UpdateStatus(min) {
        let seconds = String(min % 60).padStart(2, '0')
        let minute =  String(Math.floor(min / 60)).padStart(2, '0')
        setStatus(minute + ":" + seconds)
    }

    function ResetTimer() {
        console.log('resetting')
        clearTimeout(timer)
        clearInterval(timer)
    }

    function ChangeStage(num) {
        if (num == 0) {
            // Automatic Stage
            setCountdown(30)
            setStartTime(30)
            setStage("Automatic")
            UpdateStatus(30)
        } else if (num == 1) {
            setCountdown(100)
            setStartTime(100)
            setStage("Manual")
            UpdateStatus(100)
        } else if (num == 2) {
            setCountdown(60)
            setStartTime(60)
            setStage("Modify")
            UpdateStatus(60)
        } else if (num == 3) {
            setCountdown(90)
            setStartTime(90)
            setStage("Final")
            UpdateStatus(90)
        }
        ResetTimer()
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
                <h1 className="text-9xl">{status}</h1>
                <h1 className="text-3xl">Current stage: {stage} stage.</h1>
                <div className={"flex h-4 bg-opacity-10 bg-white rounded-sm"}>
                    <div className={"h-4 bg-green-800 rounded-sm"} style={{width: width + '%'}}></div>
                </div>
                <div className="flex space-x-2">
                    <button onClick={() => {ChangeStage(0)}} className="p-2 bg-green-700 outline outline-1 outline-green-900 rounded-sm">Automatic Stage</button>
                    <button onClick={() => {ChangeStage(1)}} className="p-2 bg-green-700 outline outline-1 outline-green-900 rounded-sm">Manual Stage</button>
                    <button onClick={() => {ChangeStage(2)}} className="p-2 bg-green-700 outline outline-1 outline-green-900 rounded-sm">Modify Stage</button>
                    <button onClick={() => {ChangeStage(3)}} className="p-2 bg-green-700 outline outline-1 outline-green-900 rounded-sm">Final Stage</button>
                    <Link href={"/score"}>
                        <button className="p-2 bg-green-700 outline outline-1 outline-green-900 rounded-sm">Calculate Score</button>
                    </Link>
                </div>
                </div>
        </main>
    )
}