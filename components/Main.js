import React from 'react'

export default function Main(props){
    console.log("props from main componnt" ,props)
    return(
        
        
    <div className="item-container">
        <div className="image-container">
            <img src={props.imageUrl} width="200" />
        </div>
        <div className="content-container">
            <div className="location-weblink-container">
                <i class="fa-solid fa-location-dot"></i>{props.location}
                <a href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h1 className="title">{props.title}</h1>
            <p className="start-end-date">{props.startDate} - {props.endDate}</p>
            <p className="description" >{props.description}</p>
        </div>
    </div>
    )
}