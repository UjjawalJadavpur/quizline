'use client'
import React from "react";
import LoginPage from "./loginPage/Page";

export default function Home() {
  return (
    <div className="justify-items-center min-h-screen p-8 pb-20 gap-16 m-5">
      <h3 className="font-bold text-2xl mb-5">Welcome to QuizLine</h3>
      
      <LoginPage/>
    </div>
  );
}
