import { useParams } from "react-router-dom";

export default function RankingInC(){
    const { communityId } = useParams();
    return(
        <>
            <h1>Ranking Page in communities {communityId}</h1>
        </>
    )
}