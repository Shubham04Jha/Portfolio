import { useEffect, type RefObject } from "react";

interface Star {
    x: number,
    y: number,
    vx: number,
    vy: number,
    size: number,
    opacity: number,
    phase: number,
    twinkleSpeed: number,
    isTemporary?: boolean,
    createdAt?: number,
    lifetime?: number, 
}

const MAX_STAR_SIZE=2;

const createInitialStars = (count: number, width: number, height: number): Star[] =>{
    return Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.random() * 0.1,
        vy: Math.random() * 0.1,
        size: 0.2 + Math.random() * MAX_STAR_SIZE,
        opacity: 1,
        phase: Math.random(),
        twinkleSpeed: Math.random() * 0.005,
    }));
}

const addTemporaryStar=(stars: Star[], x: number, y: number)=>{
    stars.push({
        x,y, vx: 0, vy: 0, size: 0.4+Math.random()*MAX_STAR_SIZE, // adding 0.4 for occasionally bigger stars.
        phase: 0, opacity: 1, twinkleSpeed: 0, // these are not used
        isTemporary: true,
        createdAt: Date.now(),
        lifetime: 5000+Math.random()*5000,
    })
}

const updateStarLifetime = (stars: Star[],maxWidth: number, maxHeight: number, ctx: CanvasRenderingContext2D) => {
    const now = Date.now();
    stars.forEach(star => {
        if (!star.isTemporary){ 
            star.phase += star.twinkleSpeed;
            star.opacity= 0.2 + Math.abs(Math.sin(star.phase)) * 0.8;
            return star;
        }
        const elapsed = now - (star.createdAt ?? 0);
        const progress = elapsed / (star.lifetime ?? 1);
        star.opacity = Math.max(0, 1 - progress);
        return star;
    }); 
    stars.forEach((star)=>{
        if(!star.isTemporary){
            star.x+=star.vx;
            star.y+=star.vy;
            if(star.x<0||star.x>maxWidth){ 
                star.y=Math.random()*maxHeight;
                star.x = star.x<0?maxWidth:0; 
                star.size=Math.random()*2;
            }
            if(star.y<0||star.y>maxHeight){ 
                star.x=Math.random()*maxWidth;
                star.y = star.y<0?maxHeight:0; 
                star.size=Math.random()*2;
            }
        }
        if(star.opacity>0){
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI*2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
            ctx.fill();
        }
    })

    return stars;
};

const drawConstellationLines=(ctx: CanvasRenderingContext2D,stars: Star[],maxWidth?: number, maxHeight?: number,)=>{
    // const base = 
    let maxDistance=120;
    if(maxWidth&&maxHeight){
        const base = Math.min(maxWidth,maxHeight);
        maxDistance = Math.min(Math.max(base*0.15,100),220);
    }
    for (let i = 0; i < stars.length; i++) {
        if(stars[i].size<0.25||stars[i].opacity==0) continue;
        for (let j = i + 1; j < stars.length; j++) {
            if(stars[j].size<0.25||stars[j].opacity==0) continue;
            if(Math.abs(stars[i].x-stars[j].x)>maxDistance&&Math.abs(stars[i].y-stars[j].y)>maxDistance) continue;
            const dx = stars[i].x - stars[j].x;
            const dy = stars[i].y - stars[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < maxDistance) {
                const opacity = 1 - distance / maxDistance;
                const factorStrength = (Math.min(stars[i].size,stars[j].size)/MAX_STAR_SIZE)*Math.min(stars[i].opacity, stars[j].opacity);
                const factor = 1.5;
                ctx.strokeStyle = `rgba(235, 250, 250, ${opacity*factor*factorStrength})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(stars[i].x, stars[i].y);
                ctx.lineTo(stars[j].x, stars[j].y);
                ctx.stroke();
            }
        }
    }
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
            const area = canvas.width*canvas.height;
            const starNumber = 20+area/10000; // one star per 10k sq px
            stars = createInitialStars(starNumber, canvas.width, canvas.height);
        }
        const draw = ()=>{
            ctx.clearRect(0,0,canvas.width,canvas.height); // clears initial drawing...
            ctx.fillStyle = 'white';
            stars = updateStarLifetime(stars, canvas.width, canvas.height,ctx);
            drawConstellationLines(ctx,stars,canvas.width, canvas.height);
            animationFrameId = requestAnimationFrame(draw);
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
        const placeRandomStar = (x: number, y: number)=>{
            addTemporaryStar(stars,x,y);
        }
        // const handleTouch = (e: TouchEvent)=>placeRandomStar(e.touches[0].clientX,e.touches[0].clientY);
        const handleMouse = (e: MouseEvent)=>placeRandomStar(e.clientX,e.clientY);
        window.addEventListener('click',handleMouse);
        // window.addEventListener('touchmove',handleTouch);
        return ()=>{
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            // window.removeEventListener('touchmove',handleTouch);
            window.removeEventListener('click',handleMouse);
        }
    },[canvasRef])
}