import React, { useState } from "react";

const WordCounter = () => {
  const [numberOfWords, setNumberOfWords] = useState(0);

  const countWords = (paragraph) => {
    return paragraph.split(" ").length;
  };

  const handleParagraphChange = (event) => {
    setNumberOfWords(countWords(event.target.value));
  };

  return (
    <div style={{"height":"70vh","text-align":"center","margin-top":"2rem"}}>
      <textarea style={{"height":"100%","width":"80%","max-width":"700px","font-size":"18px","max-height":"600px"}}
        onChange={handleParagraphChange}
        placeholder="Enter a paragraph..."
      />

      <div className="d-flex align-items-center justify-content-center">
        <span className="px-3 py-1 rounded bg-light  fs-3"> Word Count : 
        <span className=" fw-bold "> {numberOfWords}</span>   </span> 
      </div>
      
    </div>
  );
};

export default WordCounter;