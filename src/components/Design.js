const Design = (props) => {
  return (
    <fieldset className="design form" name="clicked">
      <legend className="form-legend" onClick={props.handleShowCollapsable}>
        <span className="form-keyboard">
          <i className="icon-form fa-solid fa-object-ungroup"></i>
        </span>

        <span className="form-title--design">Diseña</span>
        <div className="js-event">
          <i className="form-arrow js-design-down fa-solid fa-wand-sparkles"></i>
        </div>
      </legend>
      <div className="palette-container js-design">
        <div className="colorpalete">
          <h2 className="colors">Colores</h2>

          <input
            type="radio"
            name="palette"
            className="colors1 js-paletteOne radio"
            value="1"
            id="paymentmethod1"
            onChange={props.handleInput}
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
            onChange={props.handleInput}
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
            onChange={props.handleInput}
            checked={props.palette === "3"}
          />
          <section className="palete">
            <div className="colors3__slate"></div>
            <div className="colors3__orange"></div>
            <div className="colors3__greyBlue"></div>
          </section>
        </div>
      </div>

      <div className="line"></div>
    </fieldset>
  );
};

export default Design;
