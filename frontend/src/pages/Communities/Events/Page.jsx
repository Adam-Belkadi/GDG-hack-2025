import { Route, useParams, useNavigate } from "react-router-dom";
import SideBar from "../Components/SideBar";
import SectionButton from "../Components/SectionButton";
import AddPost from "../Components/AddPost";
import PostItem from "../Components/PostItem";
import EventItem from "../Components/EventItem";
export default function PostsInC() {
  const { communityId } = useParams();
  const navigate = useNavigate();

  const eventList = [
    {
      eventName: "Web Development Conference 2025",
      eventDescription:
        "A conference for web developers to learn about new trends and technologies.",
      eventImageUrl: "/icons/bigcat1.svg",
    },
    {
      eventName: "AI & Machine Learning Summit",
      eventDescription:
        "A summit focused on the future of AI and machine learning.",
      eventImageUrl: "/icons/bigcat1.svg",
    },
    {
      eventName: "Cyber Security Awareness Week",
      eventDescription:
        "A week dedicated to raising awareness about cybersecurity threats and defenses.",
      eventImageUrl: "/icons/bigcat1.svg",
    },
    {
      eventName: "Open Source Hackathon",
      eventDescription:
        "A hackathon for developers to contribute to open source projects and collaborate.",
      eventImageUrl: "/icons/bigcat1.svg",
    },
    {
      eventName: "Cloud Computing & DevOps Workshop",
      eventDescription:
        "A workshop on cloud platforms, CI/CD, and DevOps practices.",
      eventImageUrl: "/icons/bigcat1.svg",
    },
  ];
  return (
    <>
      <div className="postsSection">
        <SideBar
          communityImageUrl={"/icons/bigcat.svg"}
          communityName={"GDG"}
          communityDescrtiption={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien."
          }
          ownerName={"Yanis Boudjelida"}
          adminList={[
            { adminName: "Moh Hmidou", adminAvatar: "/icons/small cat.svg" },
            { adminName: "Alice", adminAvatar: "/icons/small cat.svg" },
          ]}
          ownerAvatar={"/icons/small cat.svg"}
        ></SideBar>
        <div className="postsContent">
          <div className="sectionButtonContainer">
            <SectionButton
              sectionName={"Posts"}
              onClick={() => {
                navigate(`/communities/${communityId}/Posts`); // Use navigate to handle route
              }}
            />
            <SectionButton
              sectionName={"Events"}
              clicked={true}
              onClick={() => {
                navigate(`/communities/${communityId}/Events`); // Use navigate to handle route
              }}
            />
            <SectionButton
              sectionName={"Ranking"}
              onClick={() => {
                navigate(`/communities/${communityId}/Ranking`); // Use navigate to handle route
              }}
            />
          </div>
              <div className="eventCommHead">
              <div className="viewToggle">
            <div className="viewToggleItem Clicked">
              <img src="/icons/grid-view.svg" alt="icon view" />
            </div>
            <div className="viewToggleItem">
              <img src="/icons/calendar.svg" alt="icon view" />
            </div>
          </div>


              </div>
          <div className="postsContainer">
            {eventList?.map((event, index) => (
              <EventItem
                key={index}
                eventName={event.eventName}
                eventDescription={event.eventDescription}
                eventImageUrl={event.eventImageUrl}
              />
            ))}{" "}
          </div>
        </div>
      </div>
    </>
  );
}
