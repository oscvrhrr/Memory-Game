
import { useState, useEffect } from "react"
import Card from "./Card";

export default function CardContainer () {
    const [mexico, setMexico] = useState('');
    const [germany, setGermany] = useState('');
    const [brasil, setBrasil] = useState('');
    const [usa, setUsa] = useState('');

    const flags = [
        mexico,
        germany,
        brasil,
        usa
    ]


    useEffect(() => {
        fetch('https://api.giphy.com/v1/gifs/3oEjHBXZDb9zzBZSRa?api_key=7bZKJfkZhko9vxkfiw7X1pdYKE1GBXCS', {mode: 'cors'})
        .then((response) => response.json())
        .then((response) => {
            const mexImg = response.data.images.original.url;
            setMexico(mexImg);
        })
        .catch(error => console.log(`${error} error fetching data from api`, error ));
        fetch('https://api.giphy.com/v1/gifs/VN7qpUiqxl6UHGD1RB?api_key=7bZKJfkZhko9vxkfiw7X1pdYKE1GBXCS', {mode: 'cors'})
        .then(response => response.json())
        .then(response => {
            const germanyImg = response.data.images.original.url;
            setGermany(germanyImg);
        })
        .catch(error => console.log(`${error} error fetching data from api`, error ));
        fetch('https://api.giphy.com/v1/gifs/3oEjHRTJLJVfJgUhk4?api_key=7bZKJfkZhko9vxkfiw7X1pdYKE1GBXCS', {mode: 'cors'})
        .then(response => response.json())
        .then(response => {
            const brasilImg = response.data.images.original.url;
            setBrasil(brasilImg);
        })
        .catch(error => console.log(`${error} error fetching data from api`, error ));
        fetch('https://api.giphy.com/v1/gifs/fXE68iKhU1wBifN1s8?api_key=7bZKJfkZhko9vxkfiw7X1pdYKE1GBXCS', {mode: 'cors'})
        .then(response => response.json())
        .then(response => {
            const usaImg = response.data.images.original.url;
            setUsa(usaImg);
        })
        .catch(error => console.log(`${error} error fetching data from api`, error ));
    }, [])


    return (
       <div className="flex flex-wrap justify-center opacity-80 w-10/12 h-3/5 absolute bg-green-400  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-white">
            {
                flags.map((flag, index) => (
                    <Card key={index} image={flag}/>
                ))


            }
       </div>
    )
}