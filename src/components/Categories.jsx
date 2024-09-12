/* eslint-disable react/prop-types */
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

function Categories({ categories }) {
  return (
    <header>
      <div className="category-container">
        <ToggleMultipleCategories categories={categories} />
      </div>
    </header>
  );
}

function ToggleMultipleCategories({ categories }) {
  const [category, setCategory] = useState([...categories]);

  const handleCategory = (event, newCategory) => {
    console.log(newCategory);
    setCategory(newCategory);
  };

  return (
    <ToggleButtonGroup value={category} onChange={handleCategory}>
      <ToggleButton value="world">World</ToggleButton>
      <ToggleButton value="tech">Technology</ToggleButton>
      <ToggleButton value="sci">Science</ToggleButton>
      <ToggleButton value="art">Arts</ToggleButton>
      <ToggleButton value="sports">Sports</ToggleButton>
      <ToggleButton value="health">Health</ToggleButton>
      {/* <ToggleButton value="TRAVEL">Travel</ToggleButton> */}
      <ToggleButton value="ent">Entertainment</ToggleButton>
      {/* <ToggleButton value="NEWS">News</ToggleButton> */}
      {/* <ToggleButton value="BUSINESS">Business</ToggleButton> */}
      {/* <ToggleButton value="POLITICS">Politics</ToggleButton> */}
      {/* <ToggleButton value="EDUCATION">Education</ToggleButton> */}
      {/* <ToggleButton value="PARENTING">Parenting</ToggleButton> */}
      {/* <ToggleButton value="OTHER">Other</ToggleButton> */}
    </ToggleButtonGroup>
  );
}

export default Categories;
