import { useEffect, type RefObject } from "react";

interface Star{
    x: number,
    y: number,
    speed: number,
    size: number,
    xDir: number,
    yDir: number,
}

export const useStarField = (canvasRef: RefObject<HTMLCanvasElement|null>)=>{
    useEffect(()=>{
        const canvas = canvasRef.current;
        if(!canvas) return;
        const ctx = canvas.getContext("2d");
        if(!ctx) return;
        let stars: Star[];
        let animationFrameId: number;

        const init = ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            stars = Array.from({length: 100},()=>({
                x: Math.random()*canvas.width,
                y: Math.random()*canvas.height,
                size: Math.random()*2,
                speed: Math.random()*0.1 + 0.001, // not zero.
                xDir: Math.random()>0.5?1:-1,
                yDir: Math.random()>0.5?1:-1,
            })); // Array.from array like non-iterable object {length: 100}
        }
        const draw = ()=>{
            ctx.clearRect(0,0,canvas.width,canvas.height); // clears initial drawing...
            ctx.fillStyle = 'white';
            stars.forEach((star)=>{
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI*2);
                ctx.fill();
                star.y+=star.yDir*star.speed;
                star.x+=star.xDir*star.speed;
                if(star.x<0||star.x>canvas.width||star.y<0||star.y>canvas.height){
                    if(star.x<0) star.x = canvas.width;
                    if(star.y<0) star.y = canvas.height;
                    if(star.x>canvas.width) star.x =0;
                    if(star.y>canvas.height) star.y =0;
                }
            })
            animationFrameId = requestAnimationFrame(draw); // this is new...
        }
        init();
        draw();
        return ()=>{
            cancelAnimationFrame(animationFrameId);
        }
    },[canvasRef])
}