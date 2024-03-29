import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ todo, setTodo }: Props) => {
  return (
    <form className="input">
      <input
        type="input"
        placeholder="Vad behöver du göra?"
        className="input__box"
      />
      <button className="input__submit" type="submit">
        +
      </button>
    </form>
  );
};

export default InputField;
