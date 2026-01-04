import { useCodingActivity } from "../../hooks/useCodingActivity"
import { CodingActivity } from "./ActivityCalendar";



export const About = ()=>{
    const {data,loading,error} = useCodingActivity();
    if(error){
        console.log(error);
    }
    return(
        <div className="flex justify-center items-center">
            {!loading&&<CodingActivity data={data}/>}
        </div>
    )
}