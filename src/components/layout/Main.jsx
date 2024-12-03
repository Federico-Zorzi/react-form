import { useState } from "react";

import Article from "../Article";

import articles from "../../assets/data/articles";

export default function Main() {
  const [articleTitleInput, setArticleTitle] = useState("");
  const [articleContentInput, setArticleContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <div className="container">
        <form onSubmit={handleSubmit}>
          {/* INPUT FOR ARTICLE TITLE */}
          <div className="mb-3">
            <label htmlFor="articleTitle" className="form-label">
              Titolo articolo
            </label>
            <input
              type="text"
              className="form-control"
              id="articleTitle"
              value={articleTitleInput}
              onChange={(e) => {
                setArticleTitle(e.target.value);
              }}
            />
          </div>

          {/* INPUT FOR ARTICLE CONTENT */}
          <div className="mb-3">
            <label htmlFor="articleContent" className="form-label">
              Contenuto articolo
            </label>
            <input
              type="text"
              className="form-control"
              id="articleContent"
              value={articleContentInput}
              onChange={(e) => {
                setArticleContent(e.target.value);
              }}
            />
          </div>

          {/* BUTTON FOR SUBMIT */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        <Article></Article>
      </div>
    </main>
  );
}
