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
import Snitch from "./Snitch";

function App() {
  const [userData, setUserData] = useState({
    palette: "1",
    name: "",
    job: "",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Stray_calico_cat_near_Sagami_River-01.jpg/640px-Stray_calico_cat_near_Sagami_River-01.jpg",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
  });
  //Nueva variable estado para guardar dataResult
  const [dataResult, setDataResult] = useState(undefined);

  const [collapsable, setCollapsable] = useState('Design');

  // hago click en form y las demas que ocultarse. Cambiamos su variable estado.
  const handleForm = () => {
    setCollapsable('Form');
  };
  
  const handleDesign= () => {
    setCollapsable('Design');
  };

  const handleShare =()=>{
    setCollapsable('Share');
  }

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    setUserData({ ...userData, [inputName]: inputValue });
  };

  const handleReset = (ev) => {
    setUserData({
      name: "",
      palette: "1",
      job: "",
      photo: "",
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
      setDataResult(data);
      // La respuesta del servidor. Necesitamos guardarla en una variable estado para luego pintarla html.
    });
  };

  return (
    <div className="App">
      <Header image={alohomoraLogo}></Header>
      <main className="main-background">
        <div className="main-container">
          <section className="mainCreate__card card js-preview">
            <Snitch></Snitch>
            <Reset handleReset={handleReset}></Reset>
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
              handleInput={handleInput}
              // handleShowCollapsable={handleShowCollapsable}
              collapsable= {collapsable}
              handleDesign = {handleDesign}
              palette={userData.palette}
            ></Design>

            <Form
              handleInput={handleInput}
              // handleShowCollapsable={handleShowCollapsable}
              handleForm={handleForm}
              collapsable= {collapsable}
              name={userData.name}
              position={userData.position}
              phone={userData.phone}
              email={userData.email}
              linkedin={userData.linkedin}
              github={userData.github}
            ></Form>

            <Share
              handleCreateCard={handleCreateCard}
              collapsable= {collapsable}
              handleShare = {handleShare}
              dataResult={dataResult}
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
