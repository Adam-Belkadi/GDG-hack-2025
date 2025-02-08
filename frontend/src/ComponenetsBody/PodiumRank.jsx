export default function PodiumRank({ userName, userAvatar, userRank, userPoint }) {
    return (
        <>
                <div className="firstRank">
          <div className="rankInfo">
            <img src={userAvatar} alt="" />
            <h2>{userName}</h2>
            <h1>{userRank}</h1>
          </div>
          <div className="rankBadges">
            <img src="/icons/Html 5.svg" alt="" />
            <img src="/icons/Chipping.svg" alt="" />
            <img src="/icons/Security Shield.svg" alt="" />
          </div>
          <h4>{userPoint} Points</h4>
        </div>

        </>
    )
}