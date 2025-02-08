import AddPost from "../Components/AddPost";
import EventItem from "../Components/EventItem";
import { useParams } from "react-router-dom";
export default function EventsInC(){
    const { communityId } = useParams();
    return(
        <>
            {/* <h1>Events Page in communities {communityId}</h1> */}
            <EventItem eventName={"GDG Hack"}  eventDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien."}></EventItem>
            <AddPost></AddPost>
        </>
    )
}