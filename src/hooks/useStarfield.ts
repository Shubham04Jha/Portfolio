import { useEffect, type RefObject } from "react";

interface Star{
    x: number,
    y: number,
    vx: number,
    vy: number,
    size: number,
    opacity: number,
    phase: number,
    twinkleSpeed: number
}

export const useStarField = (canvasRef: RefObject<HTMLCanvasElement|null>,starNumber?: number)=>{
    if(!starNumber){
        starNumber=80
    }
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
            stars = Array.from({length: starNumber},()=>{
                let vx = 0.1*Math.random();
                let vy = 0.1*Math.random();
                return{
                    x: Math.random()*canvas.width,
                    y: Math.random()*canvas.height,
                    size: Math.random()*2,
                    vx,
                    vy,
                    phase: Math.random(),
                    opacity: Math.random(),
                    twinkleSpeed: Math.random()*0.005
                };
            }); // Array.from array like non-iterable object {length: 100}
        }
        const draw = ()=>{
            ctx.clearRect(0,0,canvas.width,canvas.height); // clears initial drawing...
            ctx.fillStyle = 'white';
            stars.forEach((star)=>{
                star.phase += star.twinkleSpeed;
                const currentOpacity = 0.2 + Math.abs(Math.sin(star.phase)) * 0.8; 

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI*2);

                ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;

                ctx.fill();

                star.x+=star.vx;
                star.y+=star.vy;
                if(star.x<0||star.x>canvas.width){ 
                    star.y=Math.random()*canvas.height;
                    star.x = star.x<0?canvas.width:0; 
                    star.size=Math.random()*2;
                }
                if(star.y<0||star.y>canvas.height){ 
                    star.x=Math.random()*canvas.width;
                    star.y = star.y<0?canvas.height:0; 
                    star.size=Math.random()*2;
                }
                const maxDistance = 100; // Only draw lines if stars are closer than 100px
                for (let i = 0; i < stars.length; i++) {
                    if(stars[i].size<0.1) continue;
                    for (let j = i + 1; j < stars.length; j++) {
                        if(stars[j].size<0.1) continue;
                        const dx = stars[i].x - stars[j].x;
                        const dy = stars[i].y - stars[j].y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        if (distance < maxDistance&&Math.abs(stars[i].size-stars[j].size)<0.8) {
                            const opacity = 1 - distance / maxDistance;
                            ctx.strokeStyle = `rgba(235, 250, 250, ${opacity * 0.01})`;
                            ctx.lineWidth = 0.5;
                            ctx.beginPath();
                            ctx.moveTo(stars[i].x, stars[i].y);
                            ctx.lineTo(stars[j].x, stars[j].y);
                            ctx.stroke();
                        }
                    }
                }
            })
            animationFrameId = requestAnimationFrame(draw); // this is new...
        }
        init();
        draw();
        const handleResize = () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;

            const scaleX = newWidth / canvas.width;
            const scaleY = newHeight / canvas.height;

            canvas.width = newWidth;
            canvas.height = newHeight;

            stars.forEach(star => {
                star.x *= scaleX;
                star.y *= scaleY;
            });
        };
        window.addEventListener('resize', handleResize);
        return ()=>{
            window.removeEventListener('resize', init);
            cancelAnimationFrame(animationFrameId);
        }
    },[canvasRef])
}