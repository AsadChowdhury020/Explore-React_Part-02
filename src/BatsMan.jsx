import { useState } from "react"

export default function BatsMan(){
    const [runs, setRuns] = useState(0) ;
    const [sixes, setSixes] = useState(0) ;

    const handleSingles = () => {
        const updatedRuns = runs + 1 ;
        setRuns(updatedRuns) ;
    }
    const handleDoubles = () => {
        const updatedRuns = runs + 2 ;
        setRuns(updatedRuns) ;
    }
    const handleTriples = () => {
        const updatedRuns = runs + 3 ;
        setRuns(updatedRuns) ;
    }
    const handleFours = () => {
        const updatedRuns = runs + 4 ;
        setRuns(updatedRuns) ;
    }
    const handleSixes = () => {
        const updatedRuns = runs + 6 ;
        const updateSixes = sixes + 1 ;
        setRuns(updatedRuns) ;
        setSixes(updateSixes)
    }
    return (
        <div>
            <h3>Player : Bangladeshi Batsman</h3>
            {
                runs > 50 && <p>Y score 50, Congratulations</p>
            }
            <p>Score : {runs} </p>
            <p>Total Sixes : {sixes}</p>
            <button onClick={handleSingles} >Single</button>
            <button onClick={handleDoubles} >Double</button>
            <button onClick={handleTriples} >Triple</button>
            <button onClick={handleFours} >Four</button>
            <button onClick={handleSixes} >Six</button>
        </div>
    )
}