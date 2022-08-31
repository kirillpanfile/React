import { removeTodo, toggleTodo } from "../store/todoSlice";
import { useDispatch } from "react-redux";
export default function ToDoItem({ text, completed, id }) {
	const dispatch = useDispatch();

	const removeItem = () => dispatch(removeTodo(id));
	const toggleCompleted = () => dispatch(toggleTodo(id));

	return (
		<div>
			<div className="flex mb-4 items-center">
				<p className={"w-full text-grey-darkest" + " " + (completed && "line-through")}>{text}</p>
				<button
					onClick={toggleCompleted.bind(null)}
					className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded  hover:text-white text-green border-green hover:bg-green-500"
				>
					{completed ? "Undone" : "Done"}
				</button>
				<button
					onClick={removeItem.bind(null)}
					className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red-500"
				>
					Remove
				</button>
			</div>
		</div>
	);
}
