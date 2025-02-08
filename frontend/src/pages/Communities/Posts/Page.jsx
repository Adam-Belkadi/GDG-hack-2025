import { useParams } from "react-router-dom";
import SideBar from "../Components/SideBar";
export default function PostsInC() {
  const { communityId } = useParams();
  return (
    <>
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
    </>
  );
}
