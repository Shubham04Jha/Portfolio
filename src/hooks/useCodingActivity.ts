import { useEffect, useState } from "react";
import { codingActivity, portfolioBackend } from "../config";

const URL = portfolioBackend+codingActivity;

export interface CalendarData{
    date: string;
    count: number;
    level: number;
}

const getCalendarFormat = (data: {date: string, count: number}[]): CalendarData[]=>{
    return data.map((d)=>{
        return {
            ...d,
            level : getLevel(d.count)
        }
    })
}

const levels = [0,1,1,2,2,2,3,3,3,4];

const getLevel = (count: number)=>{
    const idx = Math.min(levels.length-1,Math.max(0,count));
    return levels[idx];
}

export const useCodingActivity = ()=>{
    const [data,setData] = useState<CalendarData[]>([]);
    const [error,setError] = useState<string|null>(null);
    const [loading,setLoading] = useState<boolean>(true);
    useEffect(()=>{
        (async ()=>{
            try {
                const res = await fetch(URL);
                const data = await res.json();
                setData(getCalendarFormat(data.data));
            } catch (error) {
                setError(error instanceof(Error)?error.message??"Error occurred while getting coding activity":"Unknown Error");
            }finally{
                setLoading(false);
            }
        })()
    },[])
    return(
        {data,error,loading}
    )
}