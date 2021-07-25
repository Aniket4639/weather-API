import React,{useState,useEffect} from 'react';
import { TextField, Typography } from '@material-ui/core';
export const Temperature = () => {
    const [first,setfirst]=useState(null);
    const [location,setlocation]=useState('');
    useEffect(() => {
        const fetchApi=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=de00ee51328fb8a011693682115005d8`;
            const res=await fetch(url);
            const resjson=await res.json();
            console.log(resjson);
            setfirst(resjson.main);
            console.log(location);
        };
       fetchApi();
    }, [location])
    return (
        
        <div >   
            <div>
            <Typography variant="h4">Enter the city name</Typography>
            <TextField search="text" variant="outlined" color="secondary" onChange={(e)=>{setlocation(e.target.value)}}/>
            </div>
            {
               !first?(<Typography variant="h5">No data found</Typography>):(
                    <div><Typography variant="h5">{location.toUpperCase()}</Typography><div></div>
                        <Typography variant="h6">{first.temp}°Celcius</Typography></div>
                ) 
            }
        </div>
    )
}
export default Temperature