import React, { useState } from "react";

//create your first component
export function trafficLight() {
    const [color, setColor] = useState("green");

    return (<React.Fragment>
        <div className="trafficTop"></div>
        <div className="trafficLight">
            <div onClick={() => setColor("red")} className={"Light red" + (color === "red" ? " glowred" : "")}></div>
            <div onClick={() => setColor("yellow")} className={"Light yellow" + (color === "yellow" ? " glowyellow" : "")}></div>
            <div onClick={() => setColor("green")} className={"Light green" + (color === "green" ? " glowgreen" : "")}></div>
        </div>
    </React.Fragment>
    );
};

export default trafficLight;
