import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  // React is declarative Not impertive  # never touch the DOM in our code
  // const[test]=useState({name:"mohammad"}); Bad PRACTIC
  // const [test, setTest] = useState({ name: "Mohammad" }); true

  const [isOpen, setIsOpen] = useState(true);
  // const [isOpenEmoji, setisOpenEmoji] = useState("❌");

  function handelNext() {
    if (step < 3) setStep((s) => s + 1); //change on step
    // test.name="Ali"    Bad PRACTIC
    // setTest({ name: "Ali" }); true
  }
  function handelPrevious() {
    if (step > 1) setStep((s) => s - 1); //change on step
    // setTest({ name: "Mohammad" }); true
  }
  // function handelIsOpen() {
  //   if (isOpen === true) {
  //     setIsOpen(false);
  //     setisOpenEmoji("🔽");
  //   } else {
  //     setIsOpen(true);
  //     setisOpenEmoji("❌");
  //   }
  // }
  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        x
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColor={"#e7e7e7"}
                textColor={"#333"}
                onClick={() => alert(`learn how ${messages[step - 1]}`)}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>
          {/* <p className="message">
            Step {step}: {messages[step - 1]}
          </p> */}

          <div className="buttons">
            <Button
              textColor={"#fff"}
              bgColor={"#7950f2"}
              onClick={handelPrevious}
            >
              <span>👈</span>Previous
            </Button>
            <Button
              textColor={"#fff"}
              bgColor={"#7950f2"}
              onClick={handelNext}
              // text={"Next"}
              // emoji={"👉"}
            >
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  //children is the #element# between <Button>#element#</Button>
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
      {/* <span>{text === "Previous" && emoji}</span>
      {text}
      <span>{text === "Next" && emoji}</span> */}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step{step}</h3>
      {children}
    </div>
  );
}
