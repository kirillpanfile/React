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
    <h1>
      {quiz.map((question) => {
        return (
          <div key={question.id}>
            <h2>{question.question}</h2>
          </div>
        );
      })}
    </h1>
  );
}

export default Home;
