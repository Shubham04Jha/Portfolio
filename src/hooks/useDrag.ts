import {useEffect, useRef, useState } from "react"
export const useDrag = ()=>{
    const offset = 80;
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({x:0,y: 0});
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    const setSafePosition = (x: number,y: number)=>{
        const width = window.innerWidth;
        const height = window.innerHeight;
        if(x<offset/2){
            x = offset/2;
        }else if(x>width-offset/2){
            x = width-offset/2;
        }
        if(y<offset/2){
            y = offset/2;
        }else if(y>height-offset/2){
            y = height-offset/2;
        }
        setPosition({x,y});
    }
    const handleSnap = ()=>{
        let x = position.x;
        const width = window.innerWidth;
        if(width*0.3<x&&x<width*0.7){
            if(x<=0.5*width){
                x = width*0.2;
            }else{
                x = width*0.8;
            }
        }
        setPosition(prev=>({...prev, x}));
    }
    const onPointerDown = (e: React.MouseEvent)=>{
        setDragStart({x: e.clientX, y: e.clientY});
    };
    const onPointerMove = (e: React.MouseEvent)=>{
        if(Math.abs(e.clientX-dragStart.x)+Math.abs(e.clientY-dragStart.y)>5){ 
            setIsDragging(true);
            setSafePosition(e.clientX, e.clientY);
        }
    }
    const onOpenChange=(val: boolean)=>{
        if(!val) setIsOpen(false); // only used to close the menu.
    }
    const onPointerUp = (e: React.MouseEvent)=>{
        if(isDragging){
            handleSnap();
        }
        if(isDragging) setIsOpen(false);
        else setIsOpen(true);
        setIsDragging(false);
    }
    useEffect(()=>{
        setPosition({x: window.innerWidth-offset,y: innerHeight-offset})
    },[])
    return{
        isOpen, position, isDragging, onOpenChange,
        dragHandlers:{
            onPointerMove, onPointerUp,onPointerDown 
        }
    }
}

export const useDrag4 = () => {
    const offset = 80;
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    
    const dragStartRef = useRef({ startX: 0, startY: 0 });
    const clickBlockerRef = useRef(false);

    // ... (Keeping your helper functions the same) ...
    const setSafePosition = (x: number,y: number)=>{ /* ... */ }
    const handleSnap = ()=>{ /* ... */ }

    // 1. LOG: When the pointer first touches
    const onPointerDown = (e: React.PointerEvent) => {
        console.log('🛑 1. Pointer Down');
        // IMPORTANT: This keeps the events firing even if your mouse slips off the element
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
        
        dragStartRef.current = { startX: e.clientX, startY: e.clientY };
        clickBlockerRef.current = false;
    };

    // 2. LOG: When the pointer moves
    const onPointerMove = (e: React.PointerEvent) => {
        // Prevent moves if no button is held (fixes hover bugs)
        if (e.buttons === 0) return;

        const deltaX = dragStartRef.current.startX - e.clientX;
        const deltaY = dragStartRef.current.startY - e.clientY;
        const dist = Math.hypot(deltaX, deltaY);

        if (dist > 5) {
            if (!clickBlockerRef.current) {
                console.log('🚗 2. Drag Threshold Passed -> BLOCKER ACTIVE');
                setIsDragging(true);
                clickBlockerRef.current = true;
            }
            setSafePosition(e.clientX, e.clientY);
        }
    };

    // 3. LOG: When the pointer releases
    const onPointerUp = (e: React.PointerEvent) => {
        console.log('🚀 3. Pointer Up | Blocker is:', clickBlockerRef.current);
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);

        if (isDragging) {
            handleSnap();
        }

        // We delay clearing the blocker to ensure it survives until the Click event fires
        setTimeout(() => {
            console.log('⏱️ 5. Resetting State (Timeout)');
            setIsDragging(false);
            clickBlockerRef.current = false;
        }, 100); 
    };

    // 4. LOG: The Capture Phase (Should happen BEFORE the menu toggle)
    const onClickCapture = (e: React.MouseEvent) => {
        console.log('🛡️ 4. Click Capture | Block?', clickBlockerRef.current);
        
        if (clickBlockerRef.current) {
            console.log('⛔ CLICK BLOCKED');
            e.preventDefault();
            e.stopPropagation();
            // NATIVE BLOCK: Sometimes React propagation isn't enough
            e.nativeEvent.stopImmediatePropagation(); 
        } else {
            console.log('✅ Click Allowed');
        }
    };

    // Initial position setup
    useEffect(() => {
        setPosition({ x: window.innerWidth - offset, y: window.innerHeight - offset });
    }, []);

    return {
        isOpen, position, isDragging, setIsOpen,
        dragHandlers: {
            onPointerDown, onPointerMove, onPointerUp, onClickCapture
        }
    };
};

