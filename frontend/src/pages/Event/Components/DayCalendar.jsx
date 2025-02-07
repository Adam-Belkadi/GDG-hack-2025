export default function DayCalendar(){
    return(<>
        <div className="dayInfo">
            <h3>{dayName}</h3>
            <h3>{dayNumber}</h3>
        </div>
        <EventList></EventList>
    </>)
}