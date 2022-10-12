import React from "react";

import "../App.scss";
import Hint from "./Hint";

const Hints = ({ data, isLoading, isError }) => {
  return (
    <div className="hints">
      {isError && <span>При загрузке данных произошла ошибка :(</span>}
      {isLoading ? (
        <span>Загрузка...</span>
      ) : data.length > 0 ? (
        data.map((el) => <Hint el={el} />)
      ) : (
        <span>Нет данных</span>
      )}
    </div>
  );
};

export default Hints;
