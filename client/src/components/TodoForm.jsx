import { useState } from "react";

const TodoForm = () => {
  const [text, setText] = useState("");
  const handleSubmit = () => {
    
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Enter new todo..."
        className="input"
        onChange={handleChange}
      />
    </form>
  );
};

export default TodoForm;
