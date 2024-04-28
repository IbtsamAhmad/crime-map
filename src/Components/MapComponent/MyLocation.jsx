import React, { useEffect, useState } from "react";

function LatLon(){
    const [lat,setLat]=useState()
    const [lon,setLon]=useState()

    useEffect(()=>{
        navigator?.geolocation?.getCurrentPosition((position)=>{
            setLat(position.coords.latitude)
            setLon(position.coords.longitude)
        })
    })

    return(
        <div>
            <h1>My Location {lat}, {lon}</h1>
        </div>
    );
}
export default LatLon;
