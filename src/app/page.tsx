"use client"
import { useState } from "react";

export default function Home() {
  // Toggle State
  const [toggleState, setToggleState] = useState(1)
  // Scores
  const [redScore, setRedScore] = useState(0)
  const [blueScore, setBlueScore] = useState(0)
  // Red Data
  const [redDisc, setRedDisc] = useState(0)
  const [redPin, setRedPin] = useState(0)
  const [redReverseFlag, setRedReverseFlag] = useState(0)
  const [redCube, setRedCube] = useState(0)
  const [redOwnSideFlag, setRedOwnSideFlag] = useState(false)
  const [redOpponentFlag, setRedOpponentFlag] = useState(false)
  const [redPenalty, setRedPenalty] = useState(0)
  // Blue Data
  const [blueDisc, setBlueDisc] = useState(0)
  const [bluePin, setBluePin] = useState(0)
  const [blueReverseFlag, setBlueReverseFlag] = useState(0)
  const [blueCube, setBlueCube] = useState(0)
  const [blueOwnSideFlag, setBlueOwnSideFlag] = useState(false)
  const [blueOpponentFlag, setBlueOpponentFlag] = useState(false)
  const [bluePenalty, setBluePenalty] = useState(0)
  // Status
  const [status, setStatus] = useState("")

  function UpdateRedScore() {
    var current_score = redDisc * 20
    current_score += redPin * 20
    current_score += redReverseFlag * 20
    current_score += redCube * 50
    current_score += (redOwnSideFlag ? 30 : 0)
    current_score += (redOpponentFlag ? 50 : 0)
    current_score = (current_score - (redPenalty * 20))
    setRedScore(current_score)
    console.log(current_score)
  }

  function UpdateBlueScore() {
    var current_score = blueDisc * 20
    current_score += bluePin * 20
    current_score += blueReverseFlag * 20
    current_score += blueCube * 50
    current_score += (blueOwnSideFlag ? 30 : 0)
    current_score += (blueOpponentFlag ? 50 : 0)
    current_score = (current_score - (bluePenalty * 20))
    setBlueScore(current_score)
    console.log(current_score)
  }

  function UpdateStatus() {
    if (blueScore === redScore) {
      setStatus("It's a tie.")
    } else if (blueScore > redScore) {
      setStatus("Blue won, by " + (blueScore - redScore) + " points.")
    } else {
      setStatus("Red won, by " + (redScore - blueScore) + " points.")
    }
  }

  function UpdateResult() {
    UpdateRedScore()
    UpdateBlueScore()
    UpdateStatus()
  }
  
  return (
    <main className="min-h-screen p-24 bg-stone-950 space-y-5 text-white">
      <div className="flex space-x-2">
        <h1 className="text-5xl">MakeX Score Calculator</h1>
        <h1 className="text-xl">2024-25 Edition</h1>
      </div>

      <div className="flex space-x-8">
        <button className={toggleState === 1 ? " text-white underline hover:text-blue-600" : " text-zinc-400 hover:text-blue-600"} onClick={() => setToggleState(1)}>Red Team</button>
        <button className={toggleState === 2 ? " text-white underline hover:text-blue-600" : " text-zinc-400 hover:text-blue-600"} onClick={() => setToggleState(2)}>Blue Team</button>
        <button className={toggleState === 3 ? " text-white underline hover:text-blue-600" : " text-zinc-400 hover:text-blue-600"} onClick={() => setToggleState(3)}>Calculate</button>
      </div>

      <div className={toggleState === 1 ? "" : "hidden"}>
        <div className="min-h-max bg-black bg-opacity-40 outline outline-stone-900 outline-1 p-4 space-y-8">
          <h1 className="text-red-500 text-4xl">Red Team</h1>
          <div className="space-y-8 text-lg">
            <div className="flex space-x-6">
              <h2>Discs (20 pts/each)</h2>            
              <input type="number" defaultValue={0} min={0} max={10} id="red-disc" onChange={(value) => setRedDisc(value.target.valueAsNumber)} className="outline-1 bg-opacity-60 bg-black rounded-sm outline outline-zinc-700 px-2 text-lg"/>
            </div>
            <div className="flex space-x-6">
              <h1>Pins (20 pts/each)</h1>
              <input type="number" defaultValue={0} min={0} max={10} id="red-pins" onChange={(value) => setRedPin(value.target.valueAsNumber)} className="outline-1 bg-opacity-60 bg-black rounded-sm outline outline-zinc-700 px-2 text-lg"/>
            </div>
            <div className="flex space-x-6 items-center">
              <h1>Reverse Flag (20 pts/each)</h1>
              <input type="number" defaultValue={0} min={0} max={10} id="red-reverse-flag" onChange={(value) => setRedReverseFlag(value.target.valueAsNumber)} className="outline-1 bg-opacity-60 bg-black rounded-sm outline outline-zinc-700 px-2 text-lg"/>
            </div>
            <div className="flex space-x-6">
              <h1>Cube or Cone (50 pts/each)</h1>
              <input type="number" defaultValue={0} min={0} max={10} id="red-cubes" onChange={(value) => setRedCube(value.target.valueAsNumber)} className="outline-1 bg-opacity-60 bg-black rounded-sm outline outline-zinc-700 px-2 text-lg"/>
            </div>
            <div className="flex space-x-6">
              <h1>Own side flag (30 pts)</h1>
              <input type="checkbox" defaultValue={0} min={0} max={10} id="red-self-flag" onChange={(value) => setRedOwnSideFlag(value.target.checked)} className="scale-150 bg-zinc-100"/>
            </div>
            <div className="flex space-x-6">
              <h1>Opponent side flag (50 pts)</h1>
              <input type="checkbox" defaultValue={0} min={0} max={1} id="red-opponent-flag" onChange={(value) => setRedOpponentFlag(value.target.checked)} className="scale-150 bg-zinc-100"/>
            </div>
            <div className="flex space-x-6">
              <h1>Penalty (-20 pts/each)</h1>
              <input type="number" defaultValue={0} min={0} max={10} onChange={(value) => setRedPenalty(value.target.valueAsNumber)} className="outline-1 bg-opacity-60 bg-black rounded-sm outline outline-zinc-700 px-2 text-lg"/>
            </div>  
          </div>
        </div>
      </div>

      <div className={toggleState === 2 ? "" : "hidden"}>
        <div className="min-h-max bg-black bg-opacity-40 outline outline-stone-900 outline-1 p-4 space-y-8">
          <h1 className="text-blue-500 text-4xl">Blue Team</h1>
          <div className="space-y-8 text-lg">
            <div className="flex space-x-6">
              <h2>Discs (20 pts/each)</h2>            
              <input type="number" defaultValue={0} min={0} max={10} id="blue-disc" onChange={(value) => setBlueDisc(value.target.valueAsNumber)} className="outline-1 bg-opacity-60 bg-black rounded-sm outline outline-zinc-700 px-2 text-lg"/>
            </div>
            <div className="flex space-x-6">
              <h1>Pins (20 pts/each)</h1>
              <input type="number" defaultValue={0} min={0} max={10} id="blue-pins" onChange={(value) => setBluePin(value.target.valueAsNumber)} className="outline-1 bg-opacity-60 bg-black rounded-sm outline outline-zinc-700 px-2 text-lg"/>
            </div>
            <div className="flex space-x-6 items-center">
              <h1>Reverse Flag (20 pts/each)</h1>
              <input type="number" defaultValue={0} min={0} max={10} id="blue-reverse-flag" onChange={(value) => setBlueReverseFlag(value.target.valueAsNumber)} className="outline-1 bg-opacity-60 bg-black rounded-sm outline outline-zinc-700 px-2 text-lg"/>
            </div>
            <div className="flex space-x-6">
              <h1>Cube or Cone (50 pts/each)</h1>
              <input type="number" defaultValue={0} min={0} max={10} id="blue-cubes" onChange={(value) => setBlueCube(value.target.valueAsNumber)} className="outline-1 bg-opacity-60 bg-black rounded-sm outline outline-zinc-700 px-2 text-lg"/>
            </div>
            <div className="flex space-x-6">
              <h1>Own side flag (30 pts)</h1>
              <input type="checkbox" defaultValue={0} min={0} max={10} id="blue-self-flag" onChange={(value) => setBlueOwnSideFlag(value.target.checked)} className="scale-150 bg-zinc-100"/>
            </div>
            <div className="flex space-x-6">
              <h1>Opponent side flag (50 pts)</h1>
              <input type="checkbox" defaultValue={0} min={0} max={10} id="blue-opponent-flag" onChange={(value) => setBlueOpponentFlag(value.target.checked)} className="scale-150 bg-zinc-100"/>
            </div>
            <div className="flex space-x-6">
              <h1>Penalty (-20 pts/each)</h1>
              <input type="number" defaultValue={0} min={0} max={10} id="blue-penalty" onChange={(value) => setBluePenalty(value.target.valueAsNumber)} className="outline-1 bg-opacity-60 bg-black rounded-sm outline outline-zinc-700 px-2 text-lg"/>
            </div>
          </div>
        </div>
      </div>
      <div className={toggleState === 3 ? "flex-row space-y-8 text-3xl" : "hidden"}>
          <button onClick={UpdateResult} className="p-4 bg-green-700 outline outline-1 outline-green-900 rounded-sm">Calculate Score</button>
          <div className={redScore !== 0  || blueScore !== 0 ? "space-y-4" : "hidden"}>
            <h1>{status}</h1>
            <h1 className="text-2xl">Red Score - {redScore}</h1>
            <h1 className="text-2xl">Blue Score - {blueScore}</h1>
          </div>
        </div>
    </main>
  );
}
