import { useEffect, useState } from "react";
import { getCodeforcesActivity } from "./utils/getCodeforces";

export interface CalendarData{
    date: string;
    count: number;
    level: number;
}

const getCalendarFormat = (activityMap: Map<string,number>)=>{
    const data:CalendarData[] = [];
    const d = new Date();
    d.setUTCHours(0, 0, 0, 0);
    const todayKey = d.toISOString().slice(0,10);
    d.setUTCDate(d.getUTCDate()-365); // 1 year back
    const prevYearKey = d.toISOString().substring(0,10);

    activityMap.set(todayKey,activityMap.get(todayKey)??0);
    activityMap.set(prevYearKey,activityMap.get(prevYearKey)??0);
    for(const activity of activityMap){
        if(prevYearKey.localeCompare(activity[0])<=0) data.push({
            date: activity[0],
            count: activity[1],
            level: getLevel(activity[1]),
        })
    }
    data.sort((a,b)=>a.date.localeCompare(b.date));
    return data;
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
                const map = new Map<string,number>();
                const activityMap = await getCodeforcesActivity(map);
                setData(getCalendarFormat(activityMap));
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