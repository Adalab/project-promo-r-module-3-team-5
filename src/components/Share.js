const Share = (props) => {
  return (
    <fieldset className="form">
      <legend className="form-legend">
        <span className="form-nodes">
          <i className="icon-form fa-sharp fa-solid fa-share-nodes"></i>
        </span>
        <span className="form-title--share">Comparte </span>
        <div className="js-eventShare">
          <i
            className="js-share-down form-arrow fa-solid fa-wand-sparkles"
            onClick={props.handleShare}
          ></i>
        </div>
      </legend>

      {props.collapsable === 'Share' ? (
        <div className="share-div js-share">
          {/* AÑADIMOS CLASE HIDDEN PARA COLAPSABLES*/}
          <button
            className="create-btn js-create-button"
            onClick={props.handleCreateCard}
          >
            <i className="fa-solid fa-address-card"></i>Crear tarjeta
          </button>
        </div>
      ) : null}
      <div className="line"></div>
      {props.dataResult !== undefined ? (
        <div className="card-created-success js-created-success">
          {/* Hemos quitado la clase hidden para enseñar el boton de twitter  y en share.scss, hemos comentado la línea : height: 0, para ver entera la sección;  */}
          <div className="card-created js-card-created">
            <h3 className="card-created-title js-created-title">
              La tarjeta ha sido creada:
            </h3>
            <a
              className="card-created-url js-link-share"
              target="_blank"
              href={props.dataResult.cardURL}
              rel="noreferrer"
            >
              {props.dataResult.success
                ? props.dataResult.cardURL
                : 'Debes rellenar todos los campos'}
            </a>
          </div>

          <div className="share-twitter">
            <a
              className="share-twitter-tweet js-twitter-button"
              href={`https://twitter.com/intent/tweet?text=%C2%A1Mira%20la%20m%C3%A1gica%20tarjeta%20que%20he%20creado!!&url=${props.dataResult.cardURL}`}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-twitter twitter-share-button-icon"></i>
              Compartir en twitter
            </a>
          </div>
          <div className="line"></div>
        </div>
      ) : null}
    </fieldset>
  );
};

export default Share;
