import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/main.css";


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h5>Save&Go</h5>
			<nav ref={navRef}>

           <Link to="/homepage">Home</Link> 
           <Link to="/listpage">List</Link>
		   <Link to="/flightspage">Flights</Link>
		   <Link to="/hotelspage">Hotels</Link>
		   <Link to="/community">Community</Link>


				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes/>
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;