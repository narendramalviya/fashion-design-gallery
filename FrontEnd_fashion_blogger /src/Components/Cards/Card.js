import React, { Component } from "react";

class Card extends Component {
	render() {
		return (
			
				<div
					class="card shadow m-2 bg-white rounded"
					style={{ width: "18rem" }}
				>
					<img
						src={`https://picsum.photos/600/${700+this.props.num}/?random`}
						className="card-img-top rounded-lg"
						alt="..."
					/>
					{/* <div className="card-body">
					
					</div> */}
				</div>
			
		);
	}
}
export default Card;
