import { useRef } from "react";
import "./start.css";

export default function Start({ setUserName }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUserName(inputRef.current.value);
  };
  return (
    <div className="start">
      <input
        type="text"
        placeholder="Enter your name"
        className="start-input"
        ref={inputRef}
      />
      <button className="start-button" onClick={handleClick}>
        Start
      </button>
    </div>
  );
}
