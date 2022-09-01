import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuizData } from "../store/quizSlice.js";

function Home() {
  const dispatch = useDispatch();
  const { quiz } = useSelector((state) => state.quiz);

  useEffect(() => {
    const getQuizData = async () => {
      const response = await fetch("/api/quiz");
      const data = await response.json();
      dispatch(setQuizData(data));
      console.log(quiz);
    };
    getQuizData();
  }, []);

  return (
    <div className="w-full h-screen bg-blue-50 flex items-center flex-col justify-center">
      <h1 className="text-2xl font-black">Welocme to the Quiz App</h1>
      <button className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-lg text-lg focus:outline-1 outline-blue-300 hover:bg-slate-400">
        Take the quiz!
      </button>
    </div>
  );
}

export default Home;
