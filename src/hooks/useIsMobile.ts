import { useEffect, useState } from "react"

const QUERY = "(max-width: 767px)";


export const useIsMobile = ()=>{
    const [isMobile, setIsMobile] = useState<boolean>(()=>false);
    useEffect(()=>{
        const media = window.matchMedia(QUERY);
        setIsMobile(media.matches)
        const handler = (event: MediaQueryListEvent)=>{
            setIsMobile(event.matches);
        }
        media.addEventListener('change',handler);
        return ()=>{
            media.removeEventListener('change',handler);
        }
    },[])
    return {
        isMobile
    }
}