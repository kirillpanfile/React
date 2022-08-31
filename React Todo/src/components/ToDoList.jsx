import { useSelector, useDispatch } from "react-redux";
import ToDoItem from "./ToDoItem";
import { addTodo } from "../store/todoSlice";
import { useState } from "react";

export default function ToDoList() {
	const { list } = useSelector((state) => state.list);
	const dispatch = useDispatch();

	const [text, setText] = useState("");

	const addItem = () => dispatch(addTodo(text.trim()));

	const handleSubmit = (e) => {
		if (e.key === "Enter" && text.trim()) addItem(), setText(""), (e.target.value = "");
	};

	return (
		<div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
			<div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
				<div className="mb-4">
					<h1 className="text-grey-darkest">Todo List</h1>
					<div className="flex mt-4">
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
							onInput={(event) => setText(event.target.value)}
							onKeyDown={handleSubmit}
							placeholder="Add Todo"
						/>
						<button
							onClick={addItem.bind(null)}
							className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal-600"
						>
							Add
						</button>
					</div>
				</div>
				{list.map((item) => {
					return <ToDoItem key={item.id} id={item.id} text={item.text} completed={item.completed} />;
				})}
			</div>
		</div>
	);
}
