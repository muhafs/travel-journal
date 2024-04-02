import './style.css'
import Icon from '../../assets/globe.png'

export default function Navbar() {
	return (
		<>
			<nav className="nav">
				<img className="nav--logo" src={Icon} alt="logo icon" />
				<h1 className="nav--text">Travel Journal</h1>
			</nav>
		</>
	)
}
