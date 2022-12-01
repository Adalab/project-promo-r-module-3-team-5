const CardPreview = (props) => {
  return (
    <article className={`card__article colorsPalette-${props.palette}`}>
      <div className="card__article--data preview-header">
        <h2 className="name js-preview-name">
          {props.name === "" ? "Nombre y Apellidos" : props.name}
        </h2>
        <p className="text js-preview-job">
          {props.job === "" ? "Front-end developer" : props.job}
        </p>
      </div>
      <div className="card__article--photo js__profile-image"></div>
      <nav className="card__article--links">
        <a
          href={`tel:${props.phone}`}
          className="preview-icon js-preview-phone"
        >
          <i className="fa-solid fa-mobile-screen-button icon"></i>
        </a>
        <a
          href={`mailto:${props.email}`}
          className="preview-icon js-preview-email"
        >
          <i className="fa-regular fa-envelope icon"></i>
        </a>
        <a
          href={`https://www.linkedin.com/in/${props.linkedin}`}
          className="preview-icon js-preview-linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin-in icon"></i>
        </a>
        <a
          href={`https://github.com/${props.github}`}
          className="preview-icon js-preview-github"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github-alt icon"></i>
        </a>
      </nav>
    </article>
  );
};

export default CardPreview;
