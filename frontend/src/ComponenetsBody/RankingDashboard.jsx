import RankClassment from "./RankClassment";
import PodiumRank from "./PodiumRank";

export default function RankingDashboard({ userList }) {
  return (
    <>
      <div className="rankingDashboard">
        <div className="personnalRank">
          <div className="rank">
            <h1>343</h1>
            <p>Your Rank</p>
          </div>
          <div className="point">
            <h1>34333434</h1>
            <p>Your Point</p>
          </div>
          <div className="badges">
            <img src="/icons/Html 5.svg" alt="HTML Badge" />
            <img src="/icons/Chipping.svg" alt="Chipping Badge" />
            <img src="/icons/Security Shield.svg" alt="Security Badge" />
          </div>
        </div>
        <div className="otherRank">
          {/* Podium (Top 3) */}
          <div className="otherRankPodium">
            {userList?.slice(0, 3).map((user, index) => (
              <PodiumRank
                key={index}
                userName={user.userName}
                userAvatar={user.userAvatar}
                userRank={user.userRank}
                userPoint={user.userPoint}
              />
            ))}
          </div>

          {/* Classement normal (4ème place et plus) */}
          <div className="otherRankRankList">
            {userList?.slice(3).map((user, index) => (
              <RankClassment
                key={index + 3} // Pour éviter les clés en double
                userRank={user.userRank}
                userAvatar={user.userAvatar}
                userName={user.userName}
                userPoint={user.userPoint}
              />
            ))}
          </div>
        </div>{" "}
      </div>
    </>
  );
}
