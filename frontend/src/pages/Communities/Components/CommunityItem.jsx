export default function CommunityItem({
  communityIconImageUrl,
  communityBanniereImageUrl,
  communityName,
  communityDescription,
  membersNumber,
}) {
  return (
    <>
      <div className="eventItem">
        <div className="eventImage">
          <img src={communityBanniereImageUrl} alt="community Image" />
        </div>
        <div className="eventInfo">
          <div className="commnityInfo">
            <img src={communityIconImageUrl} alt="community Avatar" />
            <h3>{communityName}</h3>
          </div>
          <p>{communityDescription}</p>
          <div className="membersNumber">
            {membersNumber >= 1000
              ? (membersNumber / 1000).toFixed(1) + "K"
              : membersNumber}
            <span> Members</span>
          </div>
        </div>
      </div>
    </>
  );
}
