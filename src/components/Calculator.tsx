import React, { useState } from "react";

const CalculatorUI: React.FC = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers..."
      />
      <button>Calculate</button>
    </div>
  );
};

export default CalculatorUI;
