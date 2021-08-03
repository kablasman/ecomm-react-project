import React from 'react';
import logo from 'img/booknook_logo.svg'
import menuToggle from 'img/menu-toggle.svg'

const Header = () => {

    return (
      <header className="page-header">
			<div className="logo">
				<a href="index.html"> <img src={logo} alt="book logo" width="120" /></a>
			</div>

			<nav aria-label="Primary" className="navigation">
				<div className="menu-toggle">
					<a href="#"><img src={menuToggle} alt="toggle menu" width="31" /></a>
				</div>
				<ul className="menu">
					<li><a href="index.html">Home</a></li>
					<li><a href="#">Books</a>
						<ul className="submenu">
							<li><a href="#">Shop All</a></li>
							<li><a href="#">New/Hot</a></li>
							<li><a href="#">Bestsellers</a></li>
							<li><a href="#">By Author</a></li>
							<li><a href="#">Employee Picks</a></li>
							<li><a href="#">Sale</a></li>
						</ul>
					</li>
					<li><a href="#">About</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
			</nav>
		
			<ul className="your-products">
				<li><a href="#" className="fav"><span className="material-icons" aria-label="Favourites">favorite</span></a></li>
				<li className="cart"><a href="#" className="bag"><div className="material-icons" aria-label="Add to bag">shopping_bag</div><span>0</span></a></li>
			</ul>
		</header>
	)
}

export default Header