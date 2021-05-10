import React, { useState } from "react";

function CreateArea(props) {
  const [userInput, setNewUserInput] = useState({
    title: "",
    content: "",
  });
  function handleChange(e) {
    e.preventDefault();
    props.addNewNote(userInput);
    setNewUserInput({
      title: "",
      content: "",
    });
  }

  function handleInputChange(e) {
    const { value, name } = e.target;
    setNewUserInput((prev) => {
      if (name === "title") {
        return {
          title: value,
          content: prev.content,
        };
      } else if (name === "content") {
        return {
          title: prev.title,
          content: value,
        };
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleChange}>
        <input
          onChange={handleInputChange}
          value={userInput.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleInputChange}
          value={userInput.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
