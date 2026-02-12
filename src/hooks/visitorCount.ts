import { useEffect, useState } from "react";
import { Counter } from "counterapi";

export const useVisitorCount = () => {
    const [count, setCount] = useState<number|null>(null);

    useEffect(() => {
        const counter = new Counter({ workspace: "shubham-jha-portfolio-website" });
        const hasVisited = sessionStorage.getItem("hasVisited");
        if(!hasVisited) {
            sessionStorage.setItem('hasVisited','yes');
            counter.up("counterviews")
            .then((result: any) => {
            setCount(result.data.up_count);
            sessionStorage.setItem("hasVisited", "true"); // mark as visited
            })
            .catch(err => console.error(err));
        }else{
            counter.get("countviews")
            .then((result: any) => setCount(result.data.up_count))
            .catch(err => console.error(err));
        }
    }, []);
    return { count }
};
