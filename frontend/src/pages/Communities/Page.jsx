import CommunityItem from "./Components/CommunityItem";
import Category from "../Event/Components/Category";
import Categories from "../Event/Components/Categories";
export default function Communities() {
  const communitiesList = [
    {
      communityName: "Web Developers Hub",
      communityDescription:
        "A place for web developers to share ideas and projects.",
      communityBanniereImageUrl: "/icons/bigcat.svg",
      communityIconImageUrl: "/icons/small cat.svg",
      membersNumber: 1200,
    },
    {
      communityName: "AI & Machine Learning",
      communityDescription: "Discuss the latest advancements in AI and ML.",
      communityBanniereImageUrl: "/icons/bigcat.svg",
      communityIconImageUrl: "/icons/small cat.svg",
      membersNumber: 950,
    },
    {
      communityName: "Cyber Security Network",
      communityDescription: "Learn about cybersecurity threats and defenses.",
      communityBanniereImageUrl: "/icons/bigcat.svg",
      communityIconImageUrl: "/icons/small cat.svg",
      membersNumber: 750,
    },{
        communityName: "AI & Machine Learning",
        communityDescription: "Discuss the latest advancements in AI and ML.",
        communityBanniereImageUrl: "/icons/bigcat.svg",
        communityIconImageUrl: "/icons/small cat.svg",
        membersNumber: 950,
      },
      {
        communityName: "Cyber Security Network",
        communityDescription: "Learn about cybersecurity threats and defenses.",
        communityBanniereImageUrl: "/icons/bigcat.svg",
        communityIconImageUrl: "/icons/small cat.svg",
        membersNumber: 750,
      },{
        communityName: "AI & Machine Learning",
        communityDescription: "Discuss the latest advancements in AI and ML.",
        communityBanniereImageUrl: "/icons/bigcat.svg",
        communityIconImageUrl: "/icons/small cat.svg",
        membersNumber: 950,
      },
      {
        communityName: "Cyber Security Network",
        communityDescription: "Learn about cybersecurity threats and defenses.",
        communityBanniereImageUrl: "/icons/bigcat.svg",
        communityIconImageUrl: "/icons/small cat.svg",
        membersNumber: 750,
      },{
        communityName: "AI & Machine Learning",
        communityDescription: "Discuss the latest advancements in AI and ML.",
        communityBanniereImageUrl: "/icons/bigcat.svg",
        communityIconImageUrl: "/icons/small cat.svg",
        membersNumber: 950,
      },{
        communityName: "AI & Machine Learning",
        communityDescription: "Discuss the latest advancements in AI and ML.",
        communityBanniereImageUrl: "/icons/bigcat.svg",
        communityIconImageUrl: "/icons/small cat.svg",
        membersNumber: 950,
      },
      {
        communityName: "Cyber Security Network",
        communityDescription: "Learn about cybersecurity threats and defenses.",
        communityBanniereImageUrl: "/icons/bigcat.svg",
        communityIconImageUrl: "/icons/small cat.svg",
        membersNumber: 750,
      },{
        communityName: "AI & Machine Learning",
        communityDescription: "Discuss the latest advancements in AI and ML.",
        communityBanniereImageUrl: "/icons/bigcat.svg",
        communityIconImageUrl: "/icons/small cat.svg",
        membersNumber: 950,
      },
      {
        communityName: "Cyber Security Network",
        communityDescription: "Learn about cybersecurity threats and defenses.",
        communityBanniereImageUrl: "/icons/bigcat.svg",
        communityIconImageUrl: "/icons/small cat.svg",
        membersNumber: 750,
      },
      {
        communityName: "Cyber Security Network",
        communityDescription: "Learn about cybersecurity threats and defenses.",
        communityBanniereImageUrl: "/icons/bigcat.svg",
        communityIconImageUrl: "/icons/small cat.svg",
        membersNumber: 750,
      },
    {
      communityName: "Open Source Enthusiasts",
      communityDescription:
        "A community for open-source contributors and maintainers.",
      communityBanniereImageUrl: "/icons/bigcat.svg",
      communityIconImageUrl: "/icons/small cat.svg",
      membersNumber: 1800,
    },
    {
      communityName: "Cloud Computing & DevOps",
      communityDescription:
        "Discuss cloud platforms, CI/CD, and DevOps strategies.",
      communityBanniereImageUrl: "/icons/bigcat.svg",
      communityIconImageUrl: "/icons/small cat.svg",
      membersNumber: 1350,
    },
  ];

  return (
    <>
      <div className="communitiesSection">
        <div className="communitiesHeader">
          <h1>
            Discover Communities <br />
            or <span>create your own</span>{" "}
          </h1>
        </div>
        <div className="communityCategories">
        <Categories
          categoriesList={[
            { categoryName: "Tech" },
            { categoryName: "AI" },
            { categoryName: "Web" },
            { categoryName: "Mobile" },
            { categoryName: "Game" },
            { categoryName: "Design" },
            { categoryName: "Mobile" },
            { categoryName: "Game" },
            { categoryName: "Design" },
          ]}
        />

        </div>
        <div className="communitiesContainer">
          {communitiesList?.map((community, index) => (
            <CommunityItem
              key={index}
              communityBanniereImageUrl={community.communityBanniereImageUrl}
              communityDescription={community.communityDescription}
              membersNumber={community.membersNumber}
              communityName={community.communityName}
              communityIconImageUrl={community.communityIconImageUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
}
