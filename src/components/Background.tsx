import { useRef } from "react"
import { useStarField } from "../hooks/useStarfield";

export const Background = ()=>{
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useStarField(canvasRef);
    return <canvas className="-z-10 fixed inset-0 bg-background-950 block" ref={canvasRef} >
        Starry Background
    </canvas>
}