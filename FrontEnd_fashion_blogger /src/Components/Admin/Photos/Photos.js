import React, { Component } from "react";

class Photos extends Component {
	state = {
		files: [],
		formData:null
	};

	onChangeHandler = (event) => {
		console.log(event.target.files);

		let filesArray = Object.values(event.target.files);
		// filesArray.splice(filesArray.length-1,1);

		this.setState({
			files: filesArray,
		});
	};

	submitHandler = () => {
		// TODO: post request to send photos to database
		alert("upload clicked");
	};

	render() {
		let files = this.state.files;
		console.log(files);

		if (files.length > 0) {
			files = files.map((file, index) => {
				return (
					<li
						key={index}
						className="card m-2"
						style={{ width: "18rem" }}
					>
						<img
							className="card-img-top"
							src={URL.createObjectURL(file)}
							alt="here img shown"
						/>
						<div className="card-body"></div>
					</li>
				);
			});
		}

		return (
			<div className="container">
				<div className="form-file">
					<input
						type="file"
						className="form-file-input"
						id="customFile"
						name="photo"
						onChange={this.onChangeHandler}
						multiple
					/>
					<label className="form-file-label" htmlFor="customFile">
						<span className="form-file-text">Choose file...</span>
						<span className="form-file-button">Browse</span>
					</label>
				</div>

				<ul
					className="d-flex flex-row justify-content-start flex-wrap"
					style={{ listStyle: "none" }}
				>
					{files}
				</ul>
				<button className="btn btn-success m-2" onClick={this.submitHandler}>Upload</button>
			</div>
		);
	}
}

export default Photos;
