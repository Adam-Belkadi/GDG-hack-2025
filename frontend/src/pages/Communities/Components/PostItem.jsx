export default function PostItem({userAvatar , userName ,postMetaD, postContent, imageList}){
    return(<>
        <div className="postItem">
            <div className="postHeader">
                <img src={userAvatar} alt="user avatar" />
                <div className="postHeaderInfo">
                    <h3>{userName}</h3>
                    <p>{postMetaD}</p>
                </div>
            </div>
            <div className="postContent">
                <div>
                    <p>{postContent}</p>
                </div>
                {imageList?.size > 0 && <div className="postImage">
                    {imageList?.map((image, index) => {
                        return <img key={index} src={image} alt="post image" />
                    })}
                    </div>}
            </div>
            <div className="postBottom">
            <button className="star">
                    <img src="/icons/star.svg" alt="" />
                    <p>Star</p>
                </button>
                <button className="report">
                    <img src="/icons/report.svg" alt="" />
                    <p>Report</p>
                </button>
            </div>
        </div>
    </>)
}