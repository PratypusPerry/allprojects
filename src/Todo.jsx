import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const Todo = (props) => {
	return (
		<>
			<div className="eachTask" key={props.elem.id}>
				<p>{props.elem.name}</p>
				<EditIcon
					className="editItems"
					onClick={() => props.editEach(props.elem.id)}
				/>
				<DeleteIcon
					className="delItem"
					onClick={() => props.deleteEach(props.elem.id)}
				/>
			</div>
		</>
	);
};

export default Todo;
