import {codeforcesProfile} from "../../config";

//collect
const getCodeforcesSubmissions = async ()=>{
    const res = await (await fetch(`https://codeforces.com/api/user.status?handle=${codeforcesProfile}`)).json();
    if(!res||res.status!=="OK"){
        throw new Error(res.comment??"codeforces status couldn't be loaded");
    }
    return res.result;
}

//aggregate
const aggregate = (submissions: {
    creationTimeSeconds: number,
}[],map: Map<string,number>)=>{
    for(const s of submissions){
        const key = new Date(s.creationTimeSeconds*1000).toISOString().substring(0,10);
        map.set(key,(map.get(key)??0)+1);
    }
    return map;
}

export const getCodeforcesActivity=async(map: Map<string,number>)=>{
    const submissions = await getCodeforcesSubmissions();
    return aggregate(submissions,map);
}