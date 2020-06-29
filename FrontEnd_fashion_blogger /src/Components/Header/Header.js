import React, { Component } from "react";
import {Link, NavLink } from "react-router-dom";


class Header extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
					<a className="navbar-brand" href="/">
						Navbar
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link to="/" ClassName="selected">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<NavLink to="/admin" activeClassName="selected">
									Admin
								</NavLink>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/">
									Features
								</a>
							</li>
							
							<li className="nav-item">
								<a
									className="nav-link disabled"
									href="/"
									tabIndex="-1"
									aria-disabled="true"
								>
									Disabled
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Header;
