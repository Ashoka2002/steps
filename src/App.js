import React, { useState } from "react";

const messages = ["Learn React ⚛️", "Apply for jobs 💼", "Invest your new income 🤑"];

function App() {
  const bgColor = { backgroundColor: "#7950f2", color: "#fff" };
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className="active">1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button onClick={() => setStep(step - 1)} disabled={step <= 1 ? true : false} style={bgColor}>
              Previous
            </button>
            <button onClick={() => setStep(step + 1)} disabled={step >= 3 ? true : false} style={bgColor}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
