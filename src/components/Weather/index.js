import React,{useState, useEffect} from "react";

function Weather() {
    const [Temp,setTemp] = useState('');
    const [description,setDescription] = useState('');
    const [main,setMain] = useState('');
    const [cityname,setCityname]= useState('');
    var arrNumber = (window.location.href).split('/');
    var cityLocationName = arrNumber[arrNumber.length - 1];
    var targetUrl = 'http://localhost:88/weather-service/weathers?cityName=' + cityLocationName;
    useEffect(()=> {
fetch(targetUrl)
.then(res=>res.json()) 
.then(data=>{
    console.log(data);
    setCityname(data.name);
    setTemp(Math.floor(data.main.temp - 273.15));
    setDescription(data.weather[0].description);
    setMain(data.weather[0].main);
    setCityname(data.weather[0].cityname);
  })
},[])
return (
    <ul>
    <li>City name: {cityLocationName}</li>
    <li>Temperature: {Temp} </li>
    <li>Weather:{main}</li>
    <li>Description: {description}</li>
    </ul>
)
}
export default Weather;;