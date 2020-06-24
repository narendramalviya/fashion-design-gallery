import React, { Component } from "react";

class Photos extends Component {
	render() {
		return (
			<div className="form-file">
				<input
					type="file"
					className="form-file-input"
					id="customFile"
				/>
				<label className="form-file-label" for="customFile">
					<span className="form-file-text">Choose file...</span>
					<span className="form-file-button">Browse</span>
				</label>
			</div>
		);
	}
}

export default Photos;
