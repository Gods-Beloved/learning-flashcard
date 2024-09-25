/* eslint-disable react/prop-types */
import { useState } from "react";

import "./App.css";
import questions from "./data";
import Categories from "./components/Categories";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import HeaderLogo from "./components/HeaderLogo";
import { FlashCards } from "./components/FlashCards";

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

export default App;
