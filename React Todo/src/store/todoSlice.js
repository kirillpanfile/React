import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	list: [{ id: 1, text: "Learn React", completed: false }],
};

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const newTodo = { id: state.list.length + 1, text: action.payload, completed: false };
			state.list.push(newTodo);
		},
		removeTodo: (state, action) => {
			state.list = state.list.filter((todo) => todo.id !== action.payload);
		},
		toggleTodo: (state, action) => {
			state.list = state.list.map((todo) => {
				if (todo.id === action.payload) todo.completed = !todo.completed;
				return todo;
			});
		},
	},
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

const todoReducer = todoSlice.reducer;
export default todoReducer;
