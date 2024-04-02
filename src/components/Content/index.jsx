import Tile from '../Tile'
import './style.css'

import data from '../../data'

export default function Content() {
	const tiles = data.map((tile) => <Tile key={tile.id} data={tile} />)
	return (
		<>
			<div className="container">{tiles}</div>
		</>
	)
}
