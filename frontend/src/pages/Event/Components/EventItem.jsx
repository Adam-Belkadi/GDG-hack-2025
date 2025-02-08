export default function EventItem({eventImageUrl , eventTitle , eventDescription }) {
    return (
        <>
            <div className="eventItem">
                <div className="eventImage">
                    <img src={eventImageUrl} alt="event Image" />
                </div>
                <div className="eventInfo">
                    <h2>{eventTitle}</h2>
                    <p>{eventDescription}</p>
                    <button>See More</button>
                </div>
            </div>
        </>
    )
}