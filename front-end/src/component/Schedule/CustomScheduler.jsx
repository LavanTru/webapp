import React from 'react';
import { format } from "date-fns";

// This component renders the scheduler for Washee to select the schedule from Washer's available schedules
const CustomScheduler = (props) => {

    const startDate = new Date(props.startDate);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
    startDate.setMilliseconds(0);

    const rows = [];

    // Loop from 8AM to 22PM to generate rows for the schedule
    for (let hour = 8; hour <= 22; hour++) {
        let time = new Date(startDate);
        time.setHours(hour);

        // Loop through days to generate columns that fill the row
        const column = [];
        for (let day = 0; day <= 2; day++) {
            const dateTime = addDays(new Date(time), day);

            //Check cell against the availableHours of the washer
            const availableCell = (props.schedule.find(item => {
                const itemTime = new Date(item).getTime()
                return itemTime == dateTime.getTime()
            })) ? true : false;
            const color = (availableCell)? "greenBackground" : "pinkBackground";
            // prefix "data-" allows defining custom attributes that are available on the element. For example onClick acceses it via event.target.dataset
            column.push(<td key={dateTime} id={dateTime} className={"box " + color} data-availableCell={availableCell}></td>);
        }

        rows.push(
            <tr key={time}>
                {/* //"h a"formats as "8 AM" */}
                <td className="time">{format(time, "h a")}</td>
                {column}
            </tr>
        )
    }

    return (
        <table onClick={props.onClick} className="schedule">
            <thead>
                <tr>
                    <th></th>
                    <th>{format(addDays(startDate, 0), props.dateFormat)}</th>
                    <th>{format(addDays(startDate, 1), props.dateFormat)}</th>
                    <th>{format(addDays(startDate, 2), props.dateFormat)}</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>

        </table>
    );

};
export default CustomScheduler;

function addDays(date, days) {
    let newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
}