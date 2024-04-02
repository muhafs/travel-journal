/* eslint-disable react/prop-types */
import './style.css'

import PinIcon from '../../assets/pin.png'

export default function Tile(props) {
	return (
		<>
			<div className="tile">
				<img className="tile--cover" src={props.data.imageUrl} alt="tile cover" />

				<section className="tile--text">
					<div className="tile--location">
						<img className="tile--location_pin" src={PinIcon} alt="pin icon" />
						<p className="tile--location_name">{props.data.location.toUpperCase()}</p>

						<a className="tile--map" href={props.data.googleMapsUrl}>
							View on Google Maps
						</a>
					</div>

					<h2 className="tile--title">{props.data.title}</h2>

					<p className="tile--time">
						{props.data.startDate} - {props.data.endDate}
					</p>

					<p className="tile--desc">{props.data.description}</p>
				</section>
			</div>
		</>
	)
}
