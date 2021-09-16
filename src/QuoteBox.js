import React, { useState, useEffect } from "react";
import axios from "axios";

const QuoteBox = ({ color, colors, getRandomColor }) => {
  const [quote, setQuote] = useState({});

  const getRandomQuote = async () => {
    const res = await axios.get("https://api.quotable.io/random");
    const newQuote = res.data;
    setQuote(newQuote);
  };

  useEffect(() => {
    document.title = "FCC: Random Quote Machine";

    getRandomQuote();
    getRandomColor(colors);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { author, content } = quote;

  return (
    <>
      <div
        id="quote-box"
        className={`card border-0 p-3 mb-3 text-${color}`}
        style={{ width: "55%" }}
      >
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p id="author" className="fs-2 mb-4">
              <i className="fas fa-quote-left"></i> {content}
            </p>
            <footer
              id="text"
              className={`blockquote-footer  text-${color} float-end`}
            >
              {author}
            </footer>
          </blockquote>
        </div>
        <div
          className="card-footer border-top-0 d-flex justify-content-between align-items-center"
          style={{ backgroundColor: "#fff" }}
        >
          <a
            href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${content}" -${author}.`}
            target="_blank"
            rel="noreferrer"
            title="Tweet this quote!"
            id="tweet-quote"
          >
            <i className={`fab fa-3x fa-twitter-square text-${color}`}></i>
          </a>
          <button
            id="new-quote"
            className={`btn btn-${color} text-light`}
            onClick={() => {
              getRandomQuote();
              getRandomColor(colors);
            }}
          >
            New quote
          </button>
        </div>
      </div>
      <p className="text-light" style={{ fontSize: "0.8rem" }}>
        by Thomas ROBERT
      </p>
    </>
  );
};

export default QuoteBox;
