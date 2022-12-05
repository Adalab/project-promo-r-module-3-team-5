/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import alohomoraLogo from '../images/card.png';
import adalabLogo from '../images/adalab.png';
//STYLES
// import "../styles/core/_reset.scss";
import '../styles/main.scss';
//COMPONENTS
import Api from '../services/Api';
import Card from './Card';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';

function App() {
  const [userData, setUserData] = useState({
    palette: '1',
    name: '',
    job: '',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Stray_calico_cat_near_Sagami_River-01.jpg/640px-Stray_calico_cat_near_Sagami_River-01.jpg',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
  });
  //Nueva variable estado para guardar dataResult
  const [dataResult, setDataResult] = useState(undefined);
  //Variable estado para los collapsables
  const [collapsable, setCollapsable] = useState('Design');

  // hago click en form y las demas tienen que ocultarse. Cambiamos su variable estado.
  const handleForm = () => {
    setCollapsable('Form');
  };

  const handleDesign = () => {
    setCollapsable('Design');
  };

  const handleShare = () => {
    setCollapsable('Share');
  };

  const handleInput = (input, value) => {
    setUserData({
      ...userData,
      [input]: value,
    });
  };

  //FALTA CONECTAR CON FUNCIÓN HANDLEDRAFT EN RESET.JS
  const handleReset = () => {
    setUserData({
      name: '',
      palette: '1',
      job: '',
      photo: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
    });
  };

  const handleCreateCard = () => {
    Api(userData).then((data) => {
      setDataResult(data);
      // La respuesta del servidor. Necesitamos guardarla en una variable estado para luego pintarla html.
    });
  };

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
              dataResult={dataResult}
              collapsable={collapsable}
            />
          }
        />
      </Routes>
      <Footer image={adalabLogo}></Footer>
    </div>
  );
}

export default App;
