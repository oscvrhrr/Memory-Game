

import { useState, useEffect } from "react"



export default function Dashboard () {
    const [background, setBackground] = useState('');

    useEffect( () => {
        fetch('https://api.giphy.com/v1/gifs/cYWZAIhRC3t0wMix6h?api_key=7bZKJfkZhko9vxkfiw7X1pdYKE1GBXCS', {mode: 'cors'})
        .then(response => response.json())
        .then(data => {
            console.log(data)
           const ImageUrl = data.data.images.original.url;
            setBackground(ImageUrl)
        })
        .catch(error => console.log(`${error} error fetching data from api` ))

    },[])

    return (
        <>
            <div className="bg-orange-100 h-screen">
                <img className="" src={background} alt="" />
            </div>
        </>
    )
}