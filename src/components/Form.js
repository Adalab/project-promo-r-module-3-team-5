const Form = (props) => {
    return (
        <fieldset className="form">
        <legend className="form-legend">
          <span className="form-keyboard">
            <i className="icon-form fa-regular fa-keyboard"></i>
          </span>
          <span className="form-title">Rellena </span>
          <div className="js-eventFill">
            <i className="form-arrow js-fill-down fa-solid fa-wand-sparkles"></i>
          </div>
        </legend>
        <div className="form-container transition js-fill">
          <p className="form-label">Los campos con * son obligatorios</p>
          <label className="form-label" htmlFor="name">
            Nombre completo*
          </label>

          <input
            className="form-input js-input-name"
            type="text"
            placeholder="Ej: Maricarmen"
            id="name"
            name="name"
            required=""
            onChange={handleInput}
            value={props.name}
          />

          <label className="form-label" htmlFor="position">
            Puesto*
          </label>
          <input
            className="form-input js-input-job"
            type="text"
            placeholder="Ej: Front-end unicorn"
            id="position"
            name="position"
            required=""
            onChange={handleInput}
            value={props.position}
          />

          <label className="form-label" htmlFor="">
            Imagen de perfil*
          </label>

          <div className="form-add-image">
            <label className="form-button" htmlFor="addImage">
              Añadir imagen
            </label>

            <input
              className="js__profile-upload-btn"
              type="file"
              id="addImage"
              name="addImage"
              accept="image/*"
              hidden="hidden"
              required=""
              onChange={handleInput}
            />
            <div className="form-checkbox js__profile-preview"></div>
          </div>

          <label className="form-label" htmlFor="email">
            Email*
          </label>
          <input
            className="form-input js-input-email"
            type="email"
            placeholder="Ej: maricarmen@gmail.com"
            id="email"
            name="email"
            href=""
            required=""
            onChange={handleInput}
            value={props.email}
          />

          <label className="form-label" htmlFor="phone">
            Teléfono
          </label>
          <input
            className="form-input js-input-phone"
            type="tel"
            placeholder="Ej:66687879"
            id="phone"
            name="phone"
            pattern="[0-9]{9}"
            onChange={handleInput}
            value={props.phone}
          />

          <label className="form-label" htmlFor="linkedin">
            LinkedIn*
          </label>

          <input
            className="form-input js-input-linkedin"
            type="text"
            placeholder="Ej: https://www.linkedin.com/in/mari-carmen/"
            id="linkedin"
            name="linkedin"
            required=""
            onChange={handleInput}
            value={props.linkedin}
          />

          <label className="form-label" htmlFor="github">
            Github*
          </label>
          <input
            className="form-input js-input-github"
            type="text"
            placeholder="Ej: maricarmen"
            id="github"
            name="github"
            required=""
            onChange={handleInput}
            value={props.github}
          />
        </div>
        <div className="line"></div>
      </fieldset>
    )
}

export default Form;