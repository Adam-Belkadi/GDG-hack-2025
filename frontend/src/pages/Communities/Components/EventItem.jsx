export default function EventItem({ eventName, eventDescription, eventImageUrl }) {
    return (
      <>
        <div
          className="eventItemInC"
          style={{
            backgroundImage: `url(${eventImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="eventInfoInC">
            <h2>{eventName}</h2>
            <div className="eventDescriptionInC">
              <p>{eventDescription}</p>
            </div>
          </div>
          <div className="bottom_bar">
            <button className="star">
              <img src="/icons/star.svg" alt="star" />
              <p>Star</p>
            </button>
            <button className="append">
              <img src="/icons/add.svg" alt="append" />
              <p>Append</p>
            </button>
          </div>
        </div>
      </>
    );
  }
  