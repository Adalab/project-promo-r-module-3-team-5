/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import alohomoraLogo from "../images/card.png";
import adalabLogo from "../images/adalab.png";
//STYLES
import "../styles/main.scss";
//COMPONENTS
import Api from "../services/Api";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing";
import ls from "../services/LocalStorage";

function App() {
  //_______________________________________________________________________
  //Variable estado para getAvatar
  const [avatar, setAvatar] = useState("");
  const updateAvatar = (avatar) => {
    setUserData({
      ...userData,
      photo: avatar,
    });
    setAvatar(avatar);
  };
  console.log(`tu foto seleccionada es ${avatar}`);
  // Añadir la funcionalidad de que el objeto se rellene con la imagen por defecto?? o que le diga que debe rellenar los campos
  //_______________________________________________________________________
  // Con esta línea le estamos diciendo que nos muestre lo guardado en el LocalStorage,'userDataLs'(lo he guardado en unas líneas más abajo en un useEffect). Si tiene algo guardado en el LocalStorage, que lo enseñe, en cambio, si está vacío, nos muestre nuestro valor inicial, que es nuestro objeto vacío.
  const [userData, setUserData] = useState(
    // para mostrar lo guardado en el localStorage.Lo comento porque sino no coge bien el objeto.
    ls.get("userDataLs", {
      palette: "1",
      name: "",
      job: "",
      photo: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
    })
  );
  console.log(userData);

  //Nueva variable estado para guardar dataResult
  const [dataResult, setDataResult] = useState(undefined);

  // Collapsables.
  // Cuando es true la sección está abierta, si es false, permanece cerrada.
  const [collapsDesign, setCollapsDesign] = useState(true);
  const handleDesign = () => {
    setCollapsDesign(!collapsDesign);
    setCollapsForm(false);
    setCollapsShare(false);
  };
  const [collapsForm, setCollapsForm] = useState(false);
  const handleForm = () => {
    setCollapsForm(!collapsForm);
    setCollapsDesign(false);
    setCollapsShare(false);
  };
  const [collapsShare, setCollapsShare] = useState(false);
  const handleShare = () => {
    setCollapsShare(!collapsShare);
    setCollapsForm(false);
    setCollapsDesign(false);
  };

  const handleInput = (input, value) => {
    setUserData({
      ...userData,
      [input]: value,
    });
  };

  //  USE EFFECT PARA EL LOCAL STORAGE

  // Usamos useEffect para guardar los datos en el local storage
  // Cuando React renderice y pinte el HTML en la página ejecutará este useEffect
  useEffect(() => {
    // Guardamos objeto data en el local storage.
    ls.set("userDataLs", userData);
    // Aquí estamos llamando a nuestra función del fichero LocalStorage.Le estamos pasando como parámetro nuestro userData:
    /*
        const set = (key, value) => {
        const localStorageData = JSON.stringify(value);
        localStorage.setItem(key, localStorageData);
  };*/
    // Se ejecuta cuando nuestra varible estado se modifica. Por eso lo metemos en estos corchetes.
  }, [userData]);

  //FALTA CONECTAR CON FUNCIÓN HANDLEDRAFT EN RESET.JS
  const handleReset = () => {
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
    setAvatar("");
  };

  const handleCreateCard = () => {
    Api(userData).then((data) => {
      setDataResult(data);
      console.log(data);
      // La respuesta del servidor. Necesitamos guardarla en una variable estado para luego pintarla html.
    });
  };

  // const updateAvatar = (avatar) => {
  //   setAvatar(avatar);
  // };

  return (
    <div className="App">
      <Header image={alohomoraLogo}></Header>
      <Routes>
        <Route path="/" element={<Landing alohomoraLogo={alohomoraLogo} />} />
        <Route
          path="/card"
          element={
            <Card
              handleReset={handleReset}
              handleInput={handleInput}
              handleDesign={handleDesign}
              handleForm={handleForm}
              handleCreateCard={handleCreateCard}
              handleShare={handleShare}
              userData={userData}
              avatar={avatar}
              updateAvatar={updateAvatar}
              dataResult={dataResult}
              collapsDesign={collapsDesign}
              collapsForm={collapsForm}
              collapsShare={collapsShare}
            />
          }
        />
      </Routes>
      <Footer image={adalabLogo}></Footer>
    </div>
  );
}

export default App;
