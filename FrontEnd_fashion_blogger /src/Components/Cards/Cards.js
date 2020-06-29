import React, { Component, Fragment } from "react";
import Card from "./Card";
import Modal from "../UI/Modal/Modal";

class Cards extends Component {
    state = {
        showModal:true,
    }
    // method for click action on photo
    modalHandler = (photoId)=>{
          this.setState({showModal:true})
    }
    // shouldComponentUpdate(){
    //     return false;
    // }
  
	render() {
        let cards = [];      
		for (let i = 0; i < 20; i++) {
			cards.push(i);
        }  
		const allMappedCards = cards.map((val, index) => (
			<li key={index}>
			
				<Card num={index} />{" "}
			</li>
        ));
        
		return (
			<div className="jumbotron bg-white ">
				<Fragment>
                   { this.state.showModal ? <Modal /> : null}
					<ul
						className="d-flex flex-row justify-content-start flex-wrap"
						style={{ listStyle: "none" }}
					>
						{allMappedCards}
					</ul>
				</Fragment>
			</div>
		);
	}
}
export default Cards;
