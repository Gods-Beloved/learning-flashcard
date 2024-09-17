/* eslint-disable react/prop-types */
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

function Categories({ categories, onSetMainCategory }) {
  return (
    <div>
      <div className="category-container">
        <ToggleMultipleCategories
          categories={categories}
          onSetMainCategory={onSetMainCategory}
        />
      </div>
    </div>
  );
}

function ToggleMultipleCategories({ categories, onSetMainCategory }) {
  const [category, setCategory] = useState([...categories]);

  const handleCategory = (event, newCategory) => {
    console.log(newCategory);
    setCategory(newCategory);
    onSetMainCategory(newCategory);
  };

  return (
    <ToggleButtonGroup
      value={category}
      onChange={handleCategory}
      color="secondary"
    >
      <ToggleButton value="geo">Geography</ToggleButton>
      <ToggleButton value="sports">Sports</ToggleButton>
      <ToggleButton value="arts">Arts</ToggleButton>
      <ToggleButton value="wild">Wildlife</ToggleButton>
      <ToggleButton value="music">Music</ToggleButton>
      <ToggleButton value="people">People</ToggleButton>
      <ToggleButton value="astro">Astronomy</ToggleButton>

      {/* <ToggleButton value="tech">Technology</ToggleButton> */}

      {/* <ToggleButton value="TRAVEL">Travel</ToggleButton> */}
      {/* <ToggleButton value="BUSINESS">Business</ToggleButton> */}
      {/* <ToggleButton value="POLITICS">Politics</ToggleButton> */}
      {/* <ToggleButton value="EDUCATION">Education</ToggleButton> */}
      {/* <ToggleButton value="PARENTING">Parenting</ToggleButton> */}
      {/* <ToggleButton value="OTHER">Other</ToggleButton> */}
    </ToggleButtonGroup>
  );
}

export default Categories;
