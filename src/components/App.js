import alohomoraLogo from '../images/card.png';
import adalabLogo from '../images/adalab.png';
import "../styles/main.scss";

function App() {
  return (
    <div className="App">
    <header className="header">
      <a href="index.html"><img className="header-image" src={alohomoraLogo}/></a>
    </header>
    <main className="main-background">
      <div className="main-container">
        <section className="mainCreate__card card js-preview">
          <div className="snitch-container" id="container">
            <div id="the-div">
              {/* <!--Inspiration https://dribbble.com/shots/4155133-Snitch-Animation -->
              <!--and https://dribbble.com/shots/2493071-Wizarding-World-Icons --> */}
              <input type="checkbox" name="checkbox" id="animate" hidden="hidden"/>
              <label htmlFor="animate">
                <div className="snitch js-snitch">
                  <div className="obj">
                    <div className="body">
                      <div className="flourish"></div>
                      <div className="flourish"></div>
                      <div className="flourish"></div>
                      <div className="flourish">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                      </div>
                      <div className="flourish">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                      </div>
                    </div>
                    <div className="l joint"></div>
                    <div className="l wing">
                      <div className="feather"></div>
                      <div className="feather"></div>
                      <div className="feather"></div>
                    </div>
                    <div className="r joint"></div>
                    <div className="r wing">
                      <div className="feather"></div>
                      <div className="feather"></div>
                      <div className="feather"></div>
                    </div>
                  </div>
                </div>
              </label>
              <div className="shadow"></div>
            </div>
          </div>
          <button className="card__button js-reset-btn" title="Reset" name="Reset" type="button"><i className="far fa-trash-alt" aria-hidden="true"></i> Reset</button>
          <article className="card__article colorsPalette-1">
            <div className="card__article--data preview-header">
              <h2 className="name js-preview-name">Nombre Apellidos</h2>
              <p className="text js-preview-job">Front-end developer</p>
            </div>
            <div className="card__article--photo js__profile-image"></div>
            <nav className="card__article--links">
              <a href="" className="preview-icon js-preview-phone"><i className="fa-solid fa-mobile-screen-button icon"></i></a>
              <a href="" className="preview-icon js-preview-email"><i className="fa-regular fa-envelope icon"></i></a>
              <a href="" className="preview-icon js-preview-linkedin"><i className="fa-brands fa-linkedin-in icon"></i></a>
              <a href="" className="preview-icon js-preview-github"><i className="fa-brands fa-github-alt icon"></i></a>
            </nav>
          </article>
        </section>


        <form action="" className="section-form js-form">
          <section>
            <fieldset className="design form">
              <legend className="form-legend">
                <span className="form-keyboard"><i className="icon-form fa-solid fa-object-ungroup"></i></span>

                <span className="form-title--design">Diseña </span>
                <div className="js-event">
                  <i className="form-arrow js-design-down fa-solid fa-wand-sparkles"></i>
                </div>
              </legend>
              <div className="palette-container js-design">
                <div className="colorpalete">
                  <h2 className="colors">Colores</h2>

                  <input type="radio" name="palete" className="colors1 js-paletteOne radio" value="1" id="paymentmethod1"/>
                  <section className="palete">
                    <div className="colors1__green"></div>
                    <div className="colors1__blueD"></div>
                    <div className="colors1__blueL"></div>
                  </section>
                </div>

                <div className="colorpalete">
                  <input type="radio" name="palete" className="colors2 js-paletteTwo radio" value="2" id="paymentmethod2"/>
                  <section className="palete">
                    <div className="colors2__blood"></div>
                    <div className="colors2__rusty"></div>
                    <div className="colors2__tomato"></div>
                  </section>
                </div>

                <div className="colorpalete">
                  <input type="radio" name="palete" className="colosr3 js-paletteThree radio" value="3" id="paymentmethod3"/>
                  <section className="palete">
                    <div className="colors3__slate"></div>
                    <div className="colors3__orange"></div>
                    <div className="colors3__greyBlue"></div>
                  </section>
                </div>
              </div>

              <div className="line"></div>
            </fieldset>

            <fieldset className="form">
              <legend className="form-legend">
                <span className="form-keyboard"><i className="icon-form fa-regular fa-keyboard"></i></span>
                <span className="form-title">Rellena </span>
                <div className="js-eventFill">
                  <i className="form-arrow js-fill-down fa-solid fa-wand-sparkles"></i>
                </div>
              </legend>
              <div className="form-container transition hidden js-fill">
                <p className="form-label">Los campos con * son obligatorios</p>
                <label className="form-label" htmlFor="completeName">Nombre completo*</label>

                <input className="form-input js-input-name" type="text" placeholder="Ej: Maricarmen" id="completeName" name="completeName" required=""/>

                <label className="form-label" htmlFor="position">Puesto*</label>
                <input className="form-input js-input-job" type="text" placeholder="Ej: Front-end unicorn" id="position" name="position" required=""/>

                <label className="form-label" htmlFor="">Imagen de perfil*</label>

                <div className="form-add-image">
                  <label className="form-button" htmlFor="addImage">Añadir imagen</label>

                  <input className="js__profile-upload-btn" type="file" id="addImage" name="addImage" accept="image/*" hidden="" required=""/>
                  <div className="form-checkbox js__profile-preview"></div>
                </div>

                <label className="form-label" htmlFor="email">Email*</label>
                <input className="form-input js-input-email" type="email" placeholder="Ej: maricarmen@gmail.com" id="email" name="email" href="" required=""/>

                <label className="form-label" htmlFor="phone">Teléfono</label>
                <input className="form-input js-input-phone" type="tel" placeholder="Ej:66687879" id="phone" name="phone" pattern="[0-9]{9}"/>

                <label className="form-label" htmlFor="linkedin">LinkedIn*</label>

                <input className="form-input js-input-linkedin" type="text" placeholder="Ej: https://www.linkedin.com/in/mari-carmen/" id="linkedin" name="linkedin" required=""/>

                <label className="form-label" htmlFor="github">Github*</label>
                <input className="form-input js-input-github" type="text" placeholder="Ej: maricarmen" id="github" name="github" required=""/>
              </div>
              <div className="line"></div>
            </fieldset>

            <fieldset className="form">
              <legend className="form-legend">
                <span className="form-nodes"><i className="icon-form fa-sharp fa-solid fa-share-nodes"></i></span>
                <span className="form-title--share">Comparte </span>
                <div className="js-eventShare">
                  <i className="js-share-down form-arrow fa-solid fa-wand-sparkles"></i>
                </div>
              </legend>
              <div className="share-div hidden js-share">
                <button className="create-btn js-create-button"><i className="fa-solid fa-address-card"></i>Crear tarjeta</button>
              </div>
              <div className="line"></div>
              <div className="card-created-success js-created-success hidden">
                <div className="card-created js-card-created">
                  <h3 className="card-created-title js-created-title">La tarjeta ha sido creada:</h3>
                  <p className="card-created-url js-link-share"></p>
                </div>

                <div className="share-twitter">
                  <a className="share-twitter-tweet js-twitter-button" href="" target="_blank">
                    <i className="fa-brands fa-twitter twitter-share-button-icon"></i>
                    Compartir en twitter
                  </a>
                </div>
                <div className="line"></div>
              </div>
            </fieldset>

          </section>
        </form>
      </div>
    </main>

    <div className="line-footer"></div>
    <footer className="footer">
      <small className="footer-copy">Alohomora Cards © 2022 </small>
      <img className="footer-img" src={adalabLogo} alt="adalab" title="Logo de Adalab"/>
    </footer>

    </div>
  );
}

export default App;
