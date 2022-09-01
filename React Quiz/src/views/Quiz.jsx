function Quiz() {
  return (
    <div className="w-full h-screen bg-blue-50 flex items-center flex-col justify-center">
      <h1 className="text-xl mb-2">Question 1 of 6</h1>
      <h1 className="text-sm mb-2">Timer : 1 minute 12 seconds</h1>
      <div className="bg-white md:w-1/2 w-full px-4 h-96">
        <h1 className="text-2xl font-black text-center mt-6">
          What is the capital of India?
        </h1>
        <ul>
          <li className="text-sm font-black text-center">
            <button className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-lg text-lg focus:outline-1 outline-blue-300 hover:bg-slate-400">
              Delhi
            </button>
          </li>
          <li className="text-sm font-black text-center">
            <button className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-lg text-lg focus:outline-1 outline-blue-300 hover:bg-slate-400">
              Mumbai
            </button>
          </li>
        </ul>

        <div className="flex gap-4 items-center justify-center mt-32">
          <button className="w-24 bg-teal-500 py-2 text-center">Next</button>
          <button className="w-24 bg-blue-500 py-2 text-center text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
