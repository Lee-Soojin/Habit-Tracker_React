import React, { memo } from "react";

const Input = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();
  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    //this.inputRef.current.value = "";
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className="Input" onSubmit={onSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Write your habit"
        ref={inputRef}
      ></input>
      <button className="BtnAdd">Add</button>
    </form>
  );
});

export default Input;
