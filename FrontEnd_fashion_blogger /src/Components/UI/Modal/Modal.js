import React from "react";

const Modal = () => {
	return (
		<div>
			<button
				type="button"
				className="btn btn-primary"
				data-toggle="modal"
				data-target="#exampleModalLong"
			>
				Launch demo modal
			</button>

			<div
				className="modal fade"
				id="exampleModalLong"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="exampleModalLongTitle"
				aria-hidden="true"
			>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<h1>hi</h1>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Modal;
