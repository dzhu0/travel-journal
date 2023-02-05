import React from 'react'
import pin from '../images/pin.png'

function Card(props) {
    props = props.item

    return (
        <div className="Card">
            <img src={props.imageUrl} alt={props.title} />
            <div>
                <div className="card-header">
                    <img src={pin} alt="Pin symbol" />
                    <text className="location">{props.location}</text>
                    <a className="map-link" href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h1 className="title">{props.title}</h1>
                <b className="date">{props.startDate} - {props.endDate}</b>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}

export default Card
