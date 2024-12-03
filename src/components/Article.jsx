export default function Article({
  index,
  title,
  content,
  author,
  deleteFunction,
}) {
  return (
    <article>
      <div className="card my-3">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-semibold">{title}</h5>
          <p className="card-text">{content}</p>
          <span className="fst-italic">{author}</span>

          <button
            className="btn btn-danger ms-auto"
            type="button"
            onClick={() => deleteFunction(index)}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </article>
  );
}
