import React from "react";

export default function Button({ text }) {
  return (
    <button className="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-slate-900 font-semibold rounded-lg shadow-md transition-colors duration-200">
      {text}
    </button>
  );
}
