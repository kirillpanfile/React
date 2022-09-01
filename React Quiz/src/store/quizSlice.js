import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quiz: [],
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuizData(state, { payload }) {
      console.log("payload", payload);
      state.quiz = payload;
    },
  },
});

export const { setQuizData } = quizSlice.actions;
export default quizSlice.reducer;
