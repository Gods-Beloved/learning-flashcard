/* eslint-disable react/prop-types */
import { useState } from "react";

import "./App.css";
import questions from "./data";
import CardItem from "./components/CardItem";
import Categories from "./components/Categories";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import HeaderLogo from "./components/HeaderLogo";

function App() {
  const cardQuestions = questions;

  const [mainCategory, setMainCategory] = useState(["geo"]);

  function handleSetCategory(questionCategory) {
    setMainCategory(questionCategory);
  }

  return (
    <div>
      <HeaderLogo />
      <Categories
        categories={mainCategory}
        onSetMainCategory={handleSetCategory}
      />
      <FlashCards questionList={cardQuestions} categories={mainCategory} />
    </div>
  );
}

function FlashCards({ questionList, categories }) {
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

export default App;
