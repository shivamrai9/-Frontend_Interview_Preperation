import React, { useState } from "react";

const ChipsInput = () => {
  const [chipInput, setChipInput] = useState("");
  const [chips, setChips] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && chipInput.trim() !== "") {
      setChips((prev) => [chipInput,...prev]);
      setChipInput("");
    }
  };

  const handleDeleteChip = (index) => {
    const copyChips = [...chips];

    copyChips.splice(index, 1);

    setChips(copyChips);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4">
      <h1 className="text-2xl font-semibold mb-4">Add Your Tags</h1>

      <input
        type="text"
        value={chipInput}
        onChange={(e) => setChipInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type and press Enter..."
        className="w-full max-w-xl p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 outline-none border border-gray-600 focus:ring-2 focus:ring-blue-500 transition mb-6"
      />

      <ul className="flex flex-wrap gap-3 p-4 w-full max-w-xl min-h-[120px] max-h-[300px] overflow-y-auto bg-gray-800 rounded-xl shadow-lg border border-gray-700">
        {chips.map((chip, index) => (
          <li
            key={index}
            className="bg-gray-700 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium text-white shadow-sm hover:shadow-md transition self-start"
          >
            {chip}
            <span
              onClick={() => handleDeleteChip(index)}
              className="cursor-pointer bg-red-500 hover:bg-red-600 text-white h-5 w-5 flex items-center justify-center rounded-full text-xs font-bold transition"
            >
              ×
            </span>
          </li>
        ))}
        
        {chips.length === 0 && (
          <p className="text-gray-400 text-sm">No tags added yet.</p>
        )}
      </ul>
    </div>
  );
};

export default ChipsInput;
