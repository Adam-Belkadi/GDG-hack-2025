import { Route, useParams,useNavigate  } from "react-router-dom";
import SideBar from "../Components/SideBar";
import SectionButton from "../Components/SectionButton";
import RankingDashboard from "../../../ComponenetsBody/RankingDashboard";
export default function RankingInC(){
    const { communityId } = useParams();
    const navigate = useNavigate();
    const userList = [
        { userName: "DekuDz", userAvatar: "/icons/small cat.svg", userRank: 1, userPoint: 2500 },
        { userName: "Alice", userAvatar: "/icons/small cat.svg", userRank: 2, userPoint: 2300 },
        { userName: "Moh Hmidou", userAvatar: "/icons/small cat.svg", userRank: 3, userPoint: 2100 },
        { userName: "Yanis", userAvatar: "/icons/small cat.svg", userRank: 4, userPoint: 1900 },
        { userName: "Ramzi", userAvatar: "/icons/small cat.svg", userRank: 5, userPoint: 1800 },
        { userName: "Nour", userAvatar: "/icons/small cat.svg", userRank: 6, userPoint: 1750 },
        { userName: "Amine", userAvatar: "/icons/small cat.svg", userRank: 7, userPoint: 1600 },
        { userName: "Sami", userAvatar: "/icons/small cat.svg", userRank: 8, userPoint: 1500 },
        { userName: "Rania", userAvatar: "/icons/small cat.svg", userRank: 9, userPoint: 1400 },
        { userName: "Karim", userAvatar: "/icons/small cat.svg", userRank: 10, userPoint: 1300 },
        { userName: "Lina", userAvatar: "/icons/small cat.svg", userRank: 11, userPoint: 1200 },
        { userName: "Omar", userAvatar: "/icons/small cat.svg", userRank: 12, userPoint: 1100 },
        { userName: "Sofia", userAvatar: "/icons/small cat.svg", userRank: 13, userPoint: 1000 },
        { userName: "Hakim", userAvatar: "/icons/small cat.svg", userRank: 14, userPoint: 900 },
        { userName: "Meriem", userAvatar: "/icons/small cat.svg", userRank: 15, userPoint: 800 }
      ];

    return(
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
              onClick={() => {
                navigate(`/communities/${communityId}/Events`); // Use navigate to handle route
              }}
            />
            <SectionButton
              sectionName={"Ranking"}
              clicked={true}
              onClick={() => {
                navigate(`/communities/${communityId}/Ranking`); // Use navigate to handle route
              }}
            />
          </div>

          <div className="postsContainer2">
            <RankingDashboard userList={userList}></RankingDashboard>
          </div>
        </div>
      </div>
        </>
    )
}