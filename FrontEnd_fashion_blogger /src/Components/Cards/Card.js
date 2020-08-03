import React, { Component } from "react";

class Card extends Component {
	 state = {
		 clicked:false
	 }
	render() {
		const clickHandler = ()=>{
			console.log('photo clicked!!');
			this.setState({clicked:!this.state.clicked});
		}
		console.log('card rerenderd!!');
		return (
				<div
					className="card shadow m-1 bg-white rounded"
					style={{ width: "60px" }}
					onClick={clickHandler}
				>
					<img
						src={`https://picsum.photos/600/${700+this.props.num}/?random`}
						className="card-img-top rounded-lg"
						alt="..."
					/>
				{	this.state.clicked ? <div className="card-body"> 
					   photo clicked!!
					</div> : null}
				</div>
			
		);
	}
}
export default Card;
