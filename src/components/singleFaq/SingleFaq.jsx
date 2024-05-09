import React, { useState } from "react";

function SingleFaq({question, answer}) {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="rounded-[10px] px-[20px] pb-[10px] flex flex-col bg-[#27272A] ">
      <div className="flex items-center justify-between">
        <h1>{question}</h1>
        <span
          onClick={() => setShowAnswer((prev) => !prev)}
          className=" cursor-pointer text-right text-[45px] transition-all duration-1000"
        >
          {showAnswer ? "-" : "+"}
        </span>
      </div>
      <p
        className={
          showAnswer
            ? " font-[400] flex items-center text-[16px] leading-[21px] opacity-[1] h-[100px] transition-all duration-1000"
            : "h-0 flex items-center font-[400] text-[16px] leading-[21px] transition-all duration-1000 opacity-0 "
        }
      >
        {answer}
      </p>
    </div>
  );
}

export default SingleFaq;
