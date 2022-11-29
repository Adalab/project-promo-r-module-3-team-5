/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import alohomoraLogo from '../images/card.png';
import adalabLogo from '../images/adalab.png';
import '../styles/main.scss';
import Api from '../services/Api';
import CardPreview from './CardPreview';
import Form from './Form';
import Header from './Header';
import Footer from './Footer';
import Reset from './Reset';

function App() {
  const [userData, setUserData] = useState({
    palete: '1',
    name: '',
    position: '',
    // addImage: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
  });

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    setUserData({ ...userData, [inputName]: inputValue });
  };

  const handleReset = (ev) => {
    setUserData({
      name: '',
      palete: '1',
      position: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
    });
  };

  //TERMINAR EL FETCH (FALTA URL + CREAR VARIABLE ESTADO )
  const handleCreateCard = (ev) => {
    ev.preventDefault();
    Api(userData).then((data) => {
      console.log(data); // La respuesta del servidor. Necesitamos guardarla en una variable estado para luego pintarla html.
    });
  };

  return (
    <div className="App">
      <Header image={alohomoraLogo}></Header>
      <main className="main-background">
        <div className="main-container">
          <section className="mainCreate__card card js-preview">
            <div className="snitch-container" id="container">
              <div id="the-div">
                {/* <!--Inspiration https://dribbble.com/shots/4155133-Snitch-Animation -->
              <!--and https://dribbble.com/shots/2493071-Wizarding-World-Icons --> */}
                <input
                  type="checkbox"
                  name="checkbox"
                  id="animate"
                  hidden="hidden"
                />
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
            <Reset resetFunction={handleReset}></Reset>
            <CardPreview
              // userData={userData} - PODRÍAMOS CREAR UN OBJETO USERDATA QUE ENGLOBE TODAS LAS PROPIEDADES (POR SI TENEMOS MUCHAS. EN CARDPREVIEW.JS, "PROPS.PALETE" PASARÍA A SER "PROPS.USERDATA.PALETE")
              palete={userData.palete}
              name={userData.name}
              position={userData.position}
              phone={userData.phone}
              email={userData.email}
              linkedin={userData.linkedin}
              github={userData.github}
            ></CardPreview>
          </section>
          <form action="" className="section-form js-form">
            <fieldset className="design form">
              <legend className="form-legend">
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
                    name="palete"
                    className="colors1 js-paletteOne radio"
                    value="1"
                    id="paymentmethod1"
                    onChange={handleInput}
                    checked={userData.palete === '1'}
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
                    name="palete"
                    className="colors2 js-paletteTwo radio"
                    value="2"
                    id="paymentmethod2"
                    onChange={handleInput}
                    checked={userData.palete === '2'}
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
                    name="palete"
                    className="colosr3 js-paletteThree radio"
                    value="3"
                    id="paymentmethod3"
                    onChange={handleInput}
                    checked={userData.palete === '3'}
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

            <Form></Form>

            <fieldset className="form">
              <legend className="form-legend">
                <span className="form-nodes">
                  <i className="icon-form fa-sharp fa-solid fa-share-nodes"></i>
                </span>
                <span className="form-title--share">Comparte </span>
                <div className="js-eventShare">
                  <i className="js-share-down form-arrow fa-solid fa-wand-sparkles"></i>
                </div>
              </legend>
              <div className="share-div js-share">
                {/* Hemos quitado la clase hidden para enseñar botón share */}
                <button
                  className="create-btn js-create-button"
                  onClick={handleCreateCard}
                >
                  <i className="fa-solid fa-address-card"></i>Crear tarjeta
                </button>
              </div>
              <div className="line"></div>
              <div className="card-created-success js-created-success">
                {/* Hemos quitado la clase hidden para enseñar el boton de twitter  y en share.scss, hemos comentado la línea : height: 0, para ver entera la sección;  */}
                <div className="card-created js-card-created">
                  <h3 className="card-created-title js-created-title">
                    La tarjeta ha sido creada:
                  </h3>
                  <p className="card-created-url js-link-share"></p>
                  {/* CAMBIAR PARRAFO POR UN LINK + AÑADIR LINK API */}
                </div>

                <div className="share-twitter">
                  <a
                    className="share-twitter-tweet js-twitter-button"
                    href="https://twitter.com/intent/tweet?text=%C2%A1Mira%20la%20m%C3%A1gica%20tarjeta%20que%20he%20creado!!&url=" //FALTA LA URL DE LA API
                    target="_blank"
                  >
                    <i className="fa-brands fa-twitter twitter-share-button-icon"></i>
                    Compartir en twitter
                  </a>
                </div>
                <div className="line"></div>
              </div>
            </fieldset>
          </form>
        </div>
      </main>

      <div className="line-footer"></div>
      <Footer image={adalabLogo}></Footer>
    </div>
  );
}

export default App;
