import { useParams } from "react-router-dom";
export default function PostsInC(){
    const { communityId } = useParams();
    return(
        <>
            <h1>Posts Page in communities {communityId}</h1>
        </>
    )
}