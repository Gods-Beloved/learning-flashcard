// eslint-disable-next-line react/prop-types
function CardItem({ question, id, onItemClick }) {
  const singleQuestion = question;

  console.log(id);
  console.log(singleQuestion.id);

  function handleOnItemPressed() {
    if (singleQuestion.id === id) {
      onItemClick(0);
    }
    onItemClick(singleQuestion.id);
  }

  return (
    <div
      className={singleQuestion.id === id ? "selected" : ""}
      onClick={handleOnItemPressed}
    >
      <p>
        {singleQuestion.id === id
          ? singleQuestion.answer
          : singleQuestion.question}
      </p>
    </div>
  );
}

export default CardItem;
