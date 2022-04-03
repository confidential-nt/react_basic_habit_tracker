import React, { memo } from "react";

const HabitAddForm = memo((props) => {
  const inputRef = React.createRef();
  const formRef = React.createRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    // inputRef.current.value = "";
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        type="text"
        className="add-input"
        placeholder="Habit"
        ref={inputRef}
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
});

export default HabitAddForm;
