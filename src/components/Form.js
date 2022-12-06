import GetAvatar from "./GetAvatar";
import "../styles/components/Form.scss";

const Form = (props) => {
  const handleChange = (ev) => {
    props.handleInput(ev.target.name, ev.target.value);
  };
  // const handleAvatar = () => {
  //   handleAvatar();
  // };
  return (
    <fieldset className="form">
      <legend className="form-legend">
        <span className="form-keyboard">
          <i className="icon-form fa-regular fa-keyboard"></i>
        </span>
        <span className="form-title">Rellena</span>
        <div className="js-eventFill">
          <i
            className={`form-arrow js-fill-down fa-solid fa-wand-sparkles ${
              props.collapsForm ? "rotate" : null
            } `}
            onClick={props.handleForm}
          ></i>
        </div>
      </legend>

      {props.collapsForm ? (
        <div className="form-container transition js-fill ">
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
            onChange={handleChange}
            value={props.name}
          />
          <label className="form-label" htmlFor="job">
            Puesto*
          </label>
          <input
            className="form-input js-input-job"
            type="text"
            placeholder="Ej: Front-end unicorn"
            id="job"
            name="job"
            required=""
            onChange={handleChange}
            value={props.job}
          />

          <label className="form-label" htmlFor="">
            Imagen de perfil*
          </label>

          <div className="form-add-image">
            <GetAvatar
              avatar={props.avatar}
              updateAvatar={props.updateAvatar}
            ></GetAvatar>
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
            onChange={handleChange}
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
            onChange={handleChange}
            value={props.phone}
          />

          <label className="form-label" htmlFor="linkedin">
            LinkedIn*
          </label>

          <input
            className="form-input js-input-linkedin"
            type="text"
            placeholder="Ej: maricarmen"
            id="linkedin"
            name="linkedin"
            required=""
            onChange={handleChange}
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
            onChange={handleChange}
            value={props.github}
          />
        </div>
      ) : null}
      <div className="line"></div>
    </fieldset>
  );
};

export default Form;
