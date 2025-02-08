import Categories from "../Event/Components/Categories";
import EventItem from "./Components/EventItem";

export default function Event() {
    const eventList = [
        {
          eventImageUrl: "/icons/bigcat.svg",
          eventTitle: "Web Developers Hub",
          eventDescription: "A place for web developers to share ideas and projects.",
        },
        {
          eventImageUrl: "/icons/bigcat.svg",
          eventTitle: "AI & Machine Learning",
          eventDescription: "Discuss the latest advancements in AI and ML.",
        },
        {
          eventImageUrl: "/icons/bigcat.svg",
          eventTitle: "Cyber Security Network",
          eventDescription: "Learn about cybersecurity threats and defenses.",
        },
        {
          eventImageUrl: "/icons/bigcat.svg",
          eventTitle: "Open Source Enthusiasts",
          eventDescription: "A community for open-source contributors and maintainers.",
        },
        {
          eventImageUrl: "/icons/bigcat.svg",
          eventTitle: "Cloud Computing & DevOps",
          eventDescription: "Discuss cloud platforms, CI/CD, and DevOps strategies.",
        },
        {
            eventImageUrl: "/icons/bigcat.svg",
            eventTitle: "Web Developers Hub",
            eventDescription: "A place for web developers to share ideas and projects.",
          },
          {
            eventImageUrl: "/icons/bigcat.svg",
            eventTitle: "AI & Machine Learning",
            eventDescription: "Discuss the latest advancements in AI and ML.",
          },
          {
            eventImageUrl: "/icons/bigcat.svg",
            eventTitle: "Cyber Security Network",
            eventDescription: "Learn about cybersecurity threats and defenses.",
          },
          {
            eventImageUrl: "/icons/bigcat.svg",
            eventTitle: "Open Source Enthusiasts",
            eventDescription: "A community for open-source contributors and maintainers.",
          },
          {
            eventImageUrl: "/icons/bigcat.svg",
            eventTitle: "Cloud Computing & DevOps",
            eventDescription: "Discuss cloud platforms, CI/CD, and DevOps strategies.",
          },
          {
            eventImageUrl: "/icons/bigcat.svg",
            eventTitle: "Web Developers Hub",
            eventDescription: "A place for web developers to share ideas and projects.",
          },
          {
            eventImageUrl: "/icons/bigcat.svg",
            eventTitle: "AI & Machine Learning",
            eventDescription: "Discuss the latest advancements in AI and ML.",
          },
          {
            eventImageUrl: "/icons/bigcat.svg",
            eventTitle: "Cyber Security Network",
            eventDescription: "Learn about cybersecurity threats and defenses.",
          },
          {
            eventImageUrl: "/icons/bigcat.svg",
            eventTitle: "Open Source Enthusiasts",
            eventDescription: "A community for open-source contributors and maintainers.",
          },
          {
            eventImageUrl: "/icons/bigcat.svg",
            eventTitle: "Cloud Computing & DevOps",
            eventDescription: "Discuss cloud platforms, CI/CD, and DevOps strategies.",
          },
          {
            eventImageUrl: "/icons/bigcat.svg",
            eventTitle: "Web Developers Hub",
            eventDescription: "A place for web developers to share ideas and projects.",
          },
          {
            eventImageUrl: "/icons/bigcat.svg",
            eventTitle: "AI & Machine Learning",
            eventDescription: "Discuss the latest advancements in AI and ML.",
          },
          {
            eventImageUrl: "/icons/bigcat.svg",
            eventTitle: "Cyber Security Network",
            eventDescription: "Learn about cybersecurity threats and defenses.",
          },
          {
            eventImageUrl: "/icons/bigcat.svg",
            eventTitle: "Open Source Enthusiasts",
            eventDescription: "A community for open-source contributors and maintainers.",
          },
          {
            eventImageUrl: "/icons/bigcat.svg",
            eventTitle: "Cloud Computing & DevOps",
            eventDescription: "Discuss cloud platforms, CI/CD, and DevOps strategies.",
          },
          {
            eventImageUrl: "/icons/bigcat.svg",
            eventTitle: "Web Developers Hub",
            eventDescription: "A place for web developers to share ideas and projects.",
          },
          {
            eventImageUrl: "/icons/bigcat.svg",
            eventTitle: "AI & Machine Learning",
            eventDescription: "Discuss the latest advancements in AI and ML.",
          },
          {
            eventImageUrl: "/icons/bigcat.svg",
            eventTitle: "Cyber Security Network",
            eventDescription: "Learn about cybersecurity threats and defenses.",
          },
          {
            eventImageUrl: "/icons/bigcat.svg",
            eventTitle: "Open Source Enthusiasts",
            eventDescription: "A community for open-source contributors and maintainers.",
          },
          {
            eventImageUrl: "/icons/bigcat.svg",
            eventTitle: "Cloud Computing & DevOps",
            eventDescription: "Discuss cloud platforms, CI/CD, and DevOps strategies.",
          },
      ];
      

  return (
    <>
      <div className="communitiesSection">
        <div className="communitiesHeader">
          <h1>Event Wall</h1>
          <div className="viewToggle">
            <div className="viewToggleItem Clicked">
              <img src="/icons/grid-view.svg" alt="icon view" />
            </div>
            <div className="viewToggleItem">
              <img src="/icons/calendar.svg" alt="icon view" />
            </div>
          </div>
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
              { categoryName: "CS" },
              { categoryName: "UI/UX" },
              { categoryName: "Cloud" },
              { categoryName: "CS" },
              { categoryName: "UI/UX" },
              { categoryName: "Cloud" },
              { categoryName: "CS" },
              { categoryName: "UI/UX" },
              { categoryName: "Cloud" },
            ]}
          />
        </div>
        <div className="communitiesContainer">
          {eventList?.map((event, index) => (
            <EventItem
              key={index}
              eventImageUrl={event.eventImageUrl}
              eventTitle={event.eventTitle}
              eventDescription={event.eventDescription}
            />
          ))}
        </div>
      </div>
    </>
  );
}
