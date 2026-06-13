import React from "react";
import Button from "./components/Button";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white gap-4">
      <h1 className="text-4xl font-bold text-teal-400">Pikup Frontend</h1>
      <p className="text-gray-400 text-lg">
        Tailwind CSS and folder structure are perfectly configured!
      </p>
      <Button text="Get Started" />
    </div>
  );
}

export default App;
