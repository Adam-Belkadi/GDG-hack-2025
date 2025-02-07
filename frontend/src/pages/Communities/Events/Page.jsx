import { useParams } from "react-router-dom";
export default function EventsInC(){
    const { communityId } = useParams();
    return(
        <>
            <h1>Events Page in communities {communityId}</h1>
        </>
    )
}