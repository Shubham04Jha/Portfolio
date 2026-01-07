import { useCallback, useEffect, useRef, useState } from "react"

export const useDrag = (itemLength=40, offsetMultiplier=3)=>{ // itemlength and offsetMultiplier to define how far out to the edge the item can move.
    const [position, setPosition] = useState({x:0,y:0});
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const wasDraggingRef = useRef(false);
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
    
    const handlePointerDown = (e: React.MouseEvent)=>{
        setDragStart({x: e.clientX, y: e.clientY});
    };
    const handlePointerMove = (e: React.MouseEvent)=>{
        if(Math.abs(e.clientX-dragStart.x)+Math.abs(e.clientY-dragStart.y)>5){ 
            setIsDragging(true);
            setSafePosition(e.clientX, e.clientY);
            wasDraggingRef.current = true;
        }
    };
    const handlePointerUp = ()=>{
        const width = window.innerWidth;
        const horizontalMidpoint = width / 2;
        const isMiddleRegion = position.x>0.3*width&&position.x<0.7*width;
        const isPastMidpoint = position.x<horizontalMidpoint;
        if(isMiddleRegion) setPosition(prev => ({
            ...prev, // current y.
            x: isPastMidpoint ? 0.2*width : width*0.8 
        }));
        // setIsDragging(false);
    };
    const handleClick = (e: React.MouseEvent)=>{
        if (wasDraggingRef.current) {
            e.preventDefault();
            e.stopPropagation();
            wasDraggingRef.current = false; // Reset AFTER the click is blocked
            setIsDragging(false);
            return;
        }
    }
    const onOpenChange = (requestedOpenState: boolean)=>{
        if(!isDragging) setIsOpen(requestedOpenState);
    }
    useEffect(()=>{
        setPosition({x:window.innerWidth-itemLength*2, y:window.innerHeight-itemLength*2});
    },[]);
    return {
        position,isOpen,  isDragging, onOpenChange,  dragHandlers: {

        }
    }
}

export function useDrag2(initialPosition = { x: 0, y: 0 }) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  
  // Refs to track movement without triggering re-renders during the calculation
  const dragRef = useRef({
    startX: 0,
    startY: 0,
    originalX: initialPosition.x,
    originalY: initialPosition.y,
  });

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    // 1. Record where the pointer started
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      originalX: position.x,
      originalY: position.y,
    };

    // 2. Define the move handler
    const handlePointerMove = (moveEvent: PointerEvent) => {
      const deltaX = moveEvent.clientX - dragRef.current.startX;
      const deltaY = moveEvent.clientY - dragRef.current.startY;

      // 3. THRESHOLD CHECK: Only consider it a "drag" if moved > 5px
      // This allows for slight movement during a normal click.
      if (Math.hypot(deltaX, deltaY) > 5) {
        setIsDragging(true);
      }

      setPosition({
        x: dragRef.current.originalX + deltaX,
        y: dragRef.current.originalY + deltaY,
      });
    };

    // 4. Define the up handler (Cleanup)
    const handlePointerUp = () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);

      // 5. Reset dragging state slightly later
      // We use setTimeout(..., 0) to push this to the end of the event loop.
      // This ensures 'onClick' or 'onOpenChange' fires *before* isDragging becomes false.
      setTimeout(() => {
        setIsDragging(false);
      }, 0);
    };

    // Attach listeners to window so dragging continues even if cursor leaves the button
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  }, [position]);

  return {
    position,
    isDragging,
    dragHandlers: {
      onPointerDown: handlePointerDown,
    },
  };
}

export const useDrag3 = ()=>{
    const offset = 80;
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({x:0,y: 0});
    const [isDragging, setIsDragging] = useState(false);
    const dragStartRef = useRef({startX:0, startY:0});
    // const clickBlockerRef = useRef(false);

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
        dragStartRef.current = ({startX: e.clientX, startY: e.clientY});
        // console.log('onPointerDown');
        // clickBlockerRef.current = false;
    }
    const onPointerMove = (e: React.MouseEvent)=>{
        // console.log('onPointerMove')
        const deltaX = dragStartRef.current.startX-e.clientX;
        const deltaY = dragStartRef.current.startY-e.clientY;
        const dist = Math.hypot(deltaX,deltaY);
        if(dist>5){
            setIsDragging(true);
            setSafePosition(e.clientX,e.clientY);
            // clickBlockerRef.current = true;
            // setIsOpen(false);
        }
    }
    const onPointerUp = (e: React.MouseEvent)=>{
        // console.log('onPointerUp');
        if(isDragging){
            handleSnap();
        }
        // else{
        //     // setIsOpen(isOpen=>!isOpen);
        // }
        // console.log('setIsDragging will become false now');
        if(isDragging)setIsOpen(false);
        setIsDragging(false);
    }
    // const onClickCapture = (e: React.MouseEvent)=>{
    //     console.log('onClick Capture running, HBD to you.');
    //     // if(!isDragging) setIsOpen(isOpen=>!isOpen);
    // }
    useEffect(()=>{
        setPosition({x: window.innerWidth-offset,y: innerHeight-offset})
    },[])
    return{
        isOpen, position, isDragging, setIsOpen,
        dragHandlers:{
            onPointerDown, onPointerMove, onPointerUp, 
            //onClickCapture
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

