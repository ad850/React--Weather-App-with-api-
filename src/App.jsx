import React from 'react';
import { useState, useEffect } from 'react';

const App = () => {
    const [city, setcity] = useState("")
    const [state, setstate] = useState("jaipur")
    const [sec, setsec] = useState("jaipur");

    const fin = () => {
        setsec(state);


    }


    useEffect(() => {

        const getdata = async () => {

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${state}&units=metric&appid=0ac73d9620f2db642aebdf83bebddead`;

            const resp = await fetch(url)
            const data = await resp.json();

            setcity(data.main)
            console.log(data.main)

        };

        getdata();

    }, [sec]);

    return (
        <div id="main">
            <h1>Weather-APP</h1>
            <div id="center">

                <div id="card">
                    <input type="text" placeholder="⛈️location" id="inp"
                        onChange={(event) => setstate(event.target.value)} autocomplete="off"  /> <button id="butt" onClick={fin} >Search</button><br />
                    {!city ? (

                        <p>"No data found 😥"</p>) : (<>

                            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="google" id="im" />
                            <h2>{sec}</h2>

                            <h3>{city.temp} °Cel </h3>


                            <p>Min:{city.temp_min} °C | Max:{city.temp_max} °C</p>
                        </>)}
                </div>
            </div>

        </div>
    )
}

export default App
