/* eslint-disable react/prop-types */
import { useState } from "react";
import CardItem from "./CardItem";

export function FlashCards({ questionList, categories }) {
  const [selectedId, setSelected] = useState(null);

  const filteredQuestions = questionList.filter((question) =>
    categories.includes(question.category)
  );

  questionList.filter((question) => categories.includes(question.category));

  function handleOnItemClick(id) {
    setSelected(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {filteredQuestions.map((question) => (
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
