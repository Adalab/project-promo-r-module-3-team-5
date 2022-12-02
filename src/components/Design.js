import "../styles/components/Design.scss";

const Design = (props) => {
  const handleChange = (ev) => {
    props.handleInput(ev.target.name, ev.target.value);
  };

  return (
    <fieldset className="design form" name="clicked">
      <legend className="form-legend">
        <span className="form-keyboard">
          <i className="icon-form fa-solid fa-object-ungroup"></i>
        </span>

        <span className="form-title--design">Diseña</span>
        <div className="js-event">
          <i
            className={`form-arrow js-design-down fa-solid fa-wand-sparkles ${
              props.collapsable === "Design" ? "rotate" : null
            } `}
            onClick={props.handleDesign}
          ></i>
        </div>
      </legend>

      {props.collapsable === "Design" ? (
        <div className="palette-container js-design ">
          <div className="colorpalete">
            <h2 className="colors">Colores</h2>

            <input
              type="radio"
              name="palette"
              className="colors1 js-paletteOne radio"
              value="1"
              id="paymentmethod1"
              onChange={handleChange}
              checked={props.palette === "1"}
            />
            <section className="palete">
              <div className="colors1__green"></div>
              <div className="colors1__blueD"></div>
              <div className="colors1__blueL"></div>
            </section>
          </div>

          <div className="colorpalete">
            <input
              type="radio"
              name="palette"
              className="colors2 js-paletteTwo radio"
              value="2"
              id="paymentmethod2"
              onChange={handleChange}
              checked={props.palette === "2"}
            />
            <section className="palete">
              <div className="colors2__blood"></div>
              <div className="colors2__rusty"></div>
              <div className="colors2__tomato"></div>
            </section>
          </div>

          <div className="colorpalete">
            <input
              type="radio"
              name="palette"
              className="colosr3 js-paletteThree radio"
              value="3"
              id="paymentmethod3"
              onChange={handleChange}
              checked={props.palette === "3"}
            />
            <section className="palete">
              <div className="colors3__slate"></div>
              <div className="colors3__orange"></div>
              <div className="colors3__greyBlue"></div>
            </section>
          </div>
        </div>
      ) : null}
      <div className="line"></div>
    </fieldset>
  );
};

export default Design;
