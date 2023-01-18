import { useEffect, useState } from "react";
import Button from "../Button/button";
import "./card.css";

function Card({ data, handleDataFromChild,selectedQuestion }) {
  return (
    <div className="container p-3 card_wrapper">
      <div className="row">
        <div className="col-12">
          <p className="text-white fw-bold">{data.question}</p>
          <div className="row align-items-center">
            <div className="col-6 col-md-4 col-lg-3 my-1">
              <Button
                data={data}
                handleDataFromChild={handleDataFromChild}
                text={data.option1}
                disabled={selectedQuestion ? true : false}              />
            </div>
            <div className="col-6 col-md-4 col-lg-3 my-1">
              <Button
                data={data}
                handleDataFromChild={handleDataFromChild}
                text={data.option2}
                disabled={selectedQuestion ? true : false}
              />
            </div>
            <div className="col-6 col-md-4 col-lg-3 my-1">
              <Button
                data={data}
                handleDataFromChild={handleDataFromChild}
                text={data.option3}
                disabled={selectedQuestion ? true : false}
              />
            </div>
            <div className="col-6 col-md-4 col-lg-3 my-1">
              <Button
                data={data}
                handleDataFromChild={handleDataFromChild}
                text={data.option4}
                disabled={selectedQuestion ? true : false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
