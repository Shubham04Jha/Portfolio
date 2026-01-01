import { useRef } from "react"
import { useStarField } from "../hooks/useStarField";

export const Background = ()=>{
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useStarField(canvasRef);
    return <canvas className="fixed -z-1 bg-background-950 top-0 left-0" ref={canvasRef} >
        Starry Background
    </canvas>
}