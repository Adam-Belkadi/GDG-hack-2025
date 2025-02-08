export default function RankClassment({ userRank, userAvatar, userName, userPoint }) {
  return (
    <>
      <div className="rankClassment">
        <h3>{userRank}</h3>
        <div className="userInfoRank">
          <img src={userAvatar} alt="" /> <h3>{userName}</h3>
        </div>
        <h3>{userPoint}</h3>
        <div>
          <img src="/icons/Menu Vertical.svg" alt="" />
        </div>
      </div>
    </>
  );
}
