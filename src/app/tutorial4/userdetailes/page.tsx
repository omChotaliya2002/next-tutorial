"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { JSX } from "react/jsx-runtime";

type Geolocation = {
    code : number;
    message : string;
};


export default function Page(): JSX.Element {

    const [latitude, setLatitude] = useState<number | null>(null);
    const [longitude, setLongitude] = useState<number | null>(null)
    const [error, setError] = useState<string | null>(null);



    useEffect(() => {
        
        if("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition(
                (position : GeolocationPosition) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },

                (err : GeolocationPositionError) => {
                    setError(`Error(${err.code}) : ${err.message}`)
                }
            );
        }
        else{
            setError("Geolocation is not supported on this browser.");
        } 
    
    }, [])
    


        return(

            <div id="demo" className="flex flex-col items-center justify-center mt-[75px]">

                    <Script src="/location.js" strategy="afterInteractive"/>

                    <h1 className="text-[26px] font-semibold underline underline-offset-[5px]"> User current location :  </h1>

                    {error && <p className="text-[15px] text-red-500"> {error} </p>}

                    {latitude !== null && longitude !== null ? (
                            <div className="mt-[20px] space-y-2"> 
                                <p className="text-xl">Latitude : <strong> {latitude} </strong></p>
                                <p className="text-xl"> Longitude : <strong> {longitude} </strong> </p>
                            </div> 
                    ) : !error ? (
                        <p></p>
                    ) : null}
            </div>
        );
}