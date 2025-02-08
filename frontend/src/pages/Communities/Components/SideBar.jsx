export default function SideBar({
  communityImageUrl,
  communityName,
  communityDescrtiption,
  ownerAvatar,
  ownerName,
  adminList,
}) {
  return (
    <>
      <div className="sideBar">
        <div className="sideBar_Image">
          <img src={communityImageUrl} alt="community image" />
        </div>
        <div className="sideBar_Info">
          <div className="communityInfo">
            <h3>{communityName}</h3>
            <p>{communityDescrtiption}</p>
          </div>
          <div className="ownerInfo">
            <h3>Owner</h3>
            <div>
              <img src={ownerAvatar} alt="" />
              <p>{ownerName}</p>
            </div>
          </div>
          <div className="adminInfo">
            <h3>Admin</h3>
            <div className="adminList">
              {adminList?.map((admin, index) => {
                return (
                  <>
                    <div className="adminItem">
                      <img src={admin.adminAvatar} alt="admin avatar" />
                      <p>{admin.adminName}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
