import { useState } from "react";

import "./App.css";
import questions from "./questions";
import CardItem from "./components/CardItem";

function App() {
  return (
    <div>
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  const [selectedId, setSelected] = useState(null);

  function handleOnItemClick(id) {
    setSelected(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <CardItem
          question={question}
          key={question.id}
          id={selectedId}
          onItemClick={handleOnItemClick}
        />
      ))}
    </div>
  );
}

export default App;
