import { Route, useParams,useNavigate  } from "react-router-dom";
import SideBar from "../Components/SideBar";
import SectionButton from "../Components/SectionButton";
import AddPost from "../Components/AddPost";
import PostItem from "../Components/PostItem";
export default function PostsInC() {
  const { communityId } = useParams();
  const navigate = useNavigate();

  const postsList = [
    {
      userAvatar: "/icons/small cat.svg",
      userName: "DekuDz",
      postMetaD: "08-02-2025",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien.",
    },
    {
      userAvatar: "/icons/small cat.svg",
      userName: "TenshiX",
      postMetaD: "07-02-2025",
      postContent:
        "Nulla facilisi. Sed mollis consequat orci, in interdum elit volutpat ac. Vivamus vel dui ac odio gravida aliquet.",
    },
    {
      userAvatar: "/icons/small cat.svg",
      userName: "CyberMaverick",
      postMetaD: "06-02-2025",
      postContent:
        "Curabitur quis nulla vitae risus aliquam dapibus. Nunc tincidunt, orci et efficitur egestas, risus magna malesuada ligula, vel suscipit metus sapien id felis.",
    },
    {
      userAvatar: "/icons/small cat.svg",
      userName: "WebDevGuru",
      postMetaD: "05-02-2025",
      postContent:
        "Donec sollicitudin leo felis, nec vulputate metus volutpat eget. Integer at dolor enim. Etiam gravida tristique odio, a interdum nisi volutpat sed.",
    },
    {
      userAvatar: "/icons/small cat.svg",
      userName: "AiEnthusiast99",
      postMetaD: "04-02-2025",
      postContent:
        "Integer euismod lectus vitae ante tempus, ut pharetra nulla venenatis. Nam volutpat eu urna eget ultricies. Aenean tincidunt eros ut erat eleifend, vel auctor felis dignissim.",
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
              clicked={true}
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
              onClick={() => {
                navigate(`/communities/${communityId}/Ranking`); // Use navigate to handle route
              }}
            />
          </div>

          <div className="postsContainer">
          {postsList?.map((post, index) => (
        <PostItem
          key={index}
          userAvatar={post.userAvatar}
          userName={post.userName}
          postMetaD={post.postMetaD}
          postContent={post.postContent}
        />
      ))}          </div>
          <AddPost></AddPost>
        
        </div>
        
      </div>
    </>
  );
}
