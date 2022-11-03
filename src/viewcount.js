import React from "react";

function ViewComponent() {
  const [view, setView] = React.useState(0);
  console.log("조회");
  function updateView() {
    setView(view + 1);
  }
  return (
    <div>
      <h4>{view}번 조회했어요!</h4>
      <button onClick={updateView}>구경하기</button>
    </div>
  );
}

export default ViewComponent;
