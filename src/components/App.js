/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import alohomoraLogo from "../images/card.png";
import adalabLogo from "../images/adalab.png";
import "../styles/main.scss";
import Api from "../services/Api";
import CardPreview from "./CardPreview";
import Form from "./Form";
import Header from "./Header";
import Footer from "./Footer";
import Reset from "./Reset";
import Design from "./Design";
import Share from "./Share";

function App() {
  const [userData, setUserData] = useState({
    palette: "1",
    name: "",
    // position: "",
    job: "",
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Stray_calico_cat_near_Sagami_River-01.jpg/640px-Stray_calico_cat_near_Sagami_River-01.jpg',
    email: "",
    phone: "",
    linkedin: "",
    github: "",
  });
  //Nueva variable estado para guardar dataResult
  const [dataResult, setDataResult] = useState({});

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    setUserData({ ...userData, [inputName]: inputValue });
  };

  const handleReset = (ev) => {
    setUserData({
      name: "",
      palette: "1",
      // position: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
    });
  };

  //TERMINAR EL FETCH (FALTA URL + CREAR VARIABLE ESTADO )
  const handleCreateCard = (ev) => {
    ev.preventDefault();
    Api(userData).then((data) => {
      // console.log(data);
      setDataResult(data);
      console.log(dataResult);
       // La respuesta del servidor. Necesitamos guardarla en una variable estado para luego pintarla html.
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
              palette={userData.palette}
              name={userData.name}
              job={userData.job}
              phone={userData.phone}
              email={userData.email}
              linkedin={userData.linkedin}
              github={userData.github}
            ></CardPreview>
          </section>
          <form action="" className="section-form js-form">
            <Design
              inputFunction={handleInput}
              palette={userData.palette}
            ></Design>

            <Form
              inputFunction={handleInput}
              name={userData.name}
              position={userData.position}
              phone={userData.phone}
              email={userData.email}
              linkedin={userData.linkedin}
              github={userData.github}
            ></Form>

            <Share 
            handleCreateCard={handleCreateCard}
            dataResult = {dataResult}
            ></Share>
          </form>
        </div>
      </main>

      <div className="line-footer"></div>
      <Footer image={adalabLogo}></Footer>
    </div>
  );
}

export default App;
