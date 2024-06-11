/* eslint-disable react/prop-types */




export default function Card ({image, text}) {
    








    return (
            <div className="h-40 w-40 bg-slate-600 m-3 ">
                <img src={image} alt="" />
                <p>{text}</p>

            </div>
    )
}