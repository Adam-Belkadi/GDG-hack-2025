export default function EventItem({ eventName , eventDescription }) {
    return(<>
        <div className="eventItemInC">
            <div className="eventInfoInC">
                <h2>{eventName}</h2>
                <div className="eventDescriptionInC">
                    <p>{eventDescription}</p>
                </div>
            </div>
            <div className="bottom_bar">
                <button className="star">
                    <img src="/icons/star.svg" alt="" />
                    <p>Star</p>
                </button>
                <button className="append">
                    <img src="/icons/add.svg" alt="" />
                    <p>Append</p>
                </button>
            </div>
        </div>
    </>)
}