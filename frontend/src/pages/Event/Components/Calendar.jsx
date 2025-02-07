export default function Calendar() {
    return(
        <>
            <div className="calendar">
                <div className="sideBarCalendar"></div>
                <div className="mainCalendar">
                    <div className="headerCalendar"></div>
                    <div className="bodyCalendar">
                        <DayCalendar></DayCalendar>
                        <DayCalendar></DayCalendar>
                        <DayCalendar></DayCalendar>
                        <DayCalendar></DayCalendar>
                        <DayCalendar></DayCalendar>
                        <DayCalendar></DayCalendar>
                        <DayCalendar></DayCalendar>
                    </div>
                </div>
            </div>
        </>
    )
}