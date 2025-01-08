import React from "react";

const StudentPage = () => {
  const testSeries = [
    {
      title: "UPSC",
      duration: "2 Hours",
      maxMarks: 200,
      totalQuestions: 100,
    },
    {
      title: "BPSC",
      duration: "2 Hours",
      maxMarks: 150,
      totalQuestions: 75,
    },
    {
      title: "UPPSC",
      duration: "3 Hours",
      maxMarks: 300,
      totalQuestions: 150,
    },
    {
      title: "SSC",
      duration: "1.5 Hours",
      maxMarks: 150,
      totalQuestions: 75,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Student Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl">
        {testSeries.map((test, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-md rounded-lg border border-gray-300 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              {test.title}
            </h2>
            <p className="text-lg mb-2">
              <span className="font-bold">Time Duration:</span> {test.duration}
            </p>
            <p className="text-lg mb-2">
              <span className="font-bold">Max Marks:</span> {test.maxMarks}
            </p>
            <p className="text-lg">
              <span className="font-bold">Total Questions:</span>{" "}
              {test.totalQuestions}
            </p>
            <button
              className="mt-4 py-2 px-6 text-white bg-blue-600 font-medium rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
            >
              Take Test
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentPage;
