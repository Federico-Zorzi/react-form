import { useState } from "react";

import Article from "../Article";

import articles from "../../assets/data/articles";

export default function Main() {
  const [articleTitleInput, setArticleTitleInput] = useState("");
  const [articleContentInput, setArticleContentInput] = useState("");

  const [articlesList, setArticlesList] = useState(articles);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!articleTitleInput || !articleContentInput) {
      alert("Completa tutti i campi per creare il nuovo articolo");
      return;
    }

    const updatedList = [
      ...articlesList,
      { title: articleTitleInput, content: articleContentInput },
    ];
    setArticlesList(updatedList);
  };

  const deleteArticle = (index) => {
    const updatedList = articlesList.filter((article, i) => i !== index);

    setArticlesList(updatedList);
  };

  return (
    <main>
      <div className="container">
        {/* FORM SECTION */}
        <section className="form-section">
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
                  setArticleTitleInput(e.target.value);
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
                  setArticleContentInput(e.target.value);
                }}
              />
            </div>

            {/* BUTTON FOR SUBMIT */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </section>

        {/* ARTICLE SECTION */}
        <section className="article-section">
          {articlesList.map((article, index) => (
            <Article
              key={index}
              index={index}
              title={article.title}
              content={article.content}
              deleteFunction={deleteArticle}
            ></Article>
          ))}
        </section>
      </div>
    </main>
  );
}
