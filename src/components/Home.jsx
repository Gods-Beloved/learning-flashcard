import Categories from "./Categories";
import HeaderLogo from "./HeaderLogo";
import ".././App.css";
import questions from "../data.js";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { FlashCards } from "../components/FlashCards";
import { useState } from "react";

function Home() {
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

export default Home;
