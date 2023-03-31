import React from "react";

const scaleNames = {
    c: 'Celcius',
    f: 'Farenheit'
}

export default function TemperatureInput ({temperature, scale, onTemperatureChange}){
        return(
            <>
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}: </legend>
                <input type="text" value={temperature} onChange={onTemperatureChange}/>
            </fieldset>
            </>
        )
}