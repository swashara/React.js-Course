// import { useState, useRef } from "react";
import { useState } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  // const nameInputRef = useRef();
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
    }

    console.log(enteredName);
    setEnteredName("");
  };
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    // const enteredNameRef = nameInputRef.current.value;
    // console.log("Input Ref:", enteredNameRef);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {!enteredNameIsValid && <p>Entered name must not be empty.</p>}
      </div>

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
