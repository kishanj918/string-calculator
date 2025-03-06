import React, { useState } from "react";
import add from "../utils/add";

const CalculatorUI: React.FC = () => {
  const [input, setInput] = useState("");
  const [total, setTotal] = useState<number | null>(null);

  const handleCalculate = () => {
    try {
      setTotal(add(input));
    } catch (e) {
      setTotal(null);
    }
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers..."
      />
      <button onClick={handleCalculate}>Calculate</button>
      {total !== null && <p>Result: {total}</p>}
    </div>
  );
};

export default CalculatorUI;
