import Article from "../Article";

export default function Main() {
  return (
    <main>
      <div className="container">
        <form>
          {/* INPUT FOR ARTICLE TITLE */}
          <div class="mb-3">
            <label for="articleTitle" class="form-label">
              Titolo articolo
            </label>
            <input type="text" class="form-control" id="articleTitle" />
          </div>

          {/* INPUT FOR ARTICLE CONTENT */}
          <div class="mb-3">
            <label for="articleContent" class="form-label">
              Contenuto articolo
            </label>
            <input type="text" class="form-control" id="articleContent" />
          </div>

          {/* BUTTON FOR SUBMIT */}
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>

        <Article></Article>
      </div>
    </main>
  );
}
