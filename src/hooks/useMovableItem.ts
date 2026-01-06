import { useEffect, useState } from "react"

export const useMovableItem = (itemLength=40, offsetMultiplier=3)=>{ // itemlength and offsetMultiplier to define how far out to the edge the item can move.
    const [position, setPosition] = useState({x:0,y:0});
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const setSafePosition = (x: number,y: number)=>{
        const width = window.innerWidth;
        const height = window.innerHeight;
        const offset = itemLength/2;
        if(x<offset*offsetMultiplier){
            x = offset*offsetMultiplier;
        }else if(x>width-(offsetMultiplier-1)*offset){
            x = width-(offsetMultiplier-1)*offset;
        }
        if(y<offset*offsetMultiplier){
            y = offset*offsetMultiplier;
        }else if(y>height-(offsetMultiplier-1)*offset){
            y = height-(offsetMultiplier-1)*offset;
        }
        setPosition({x,y});
    }
    const handlePointerUp = ()=>{
        const width = window.innerWidth;
        const horizontalMidpoint = width / 2;
        const isMiddleRegion = position.x>0.3*width&&position.x<0.7*width;
        const isPastMidpoint = position.x<horizontalMidpoint;
        if(isMiddleRegion) setPosition(prev => ({
            ...prev, // current y.
            x: isPastMidpoint ? 0.2*width : width*0.8 
        }));
        setIsDragging(false);
    };
    const handlePointerDown = (e: React.MouseEvent)=>{
        setDragStart({x: e.clientX, y: e.clientY});
    };
    const handlePointerMove = (e: React.MouseEvent)=>{
        if(Math.abs(e.clientX-dragStart.x)+Math.abs(e.clientY-dragStart.y)>5) setIsDragging(true);
        if(isDragging) setSafePosition(e.clientX, e.clientY);
    };
    useEffect(()=>{
        setPosition({x:window.innerWidth-itemLength*2, y:window.innerHeight-itemLength*2});
    },[]);
    return {
        position, isDragging, handlePointerDown, handlePointerUp, handlePointerMove 
    }
}