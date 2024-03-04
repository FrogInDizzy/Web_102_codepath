import React from "react";

const Event = (props) => {
    // Use inline style to set the background color of the event
    const style = { backgroundColor: props.color };

    return (
        <td className="Event" style={style}>
            <h5>{props.event}</h5>
        </td>
    );
};

export default Event;
