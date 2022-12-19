import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import alohomoraLogo from '../images/card.png';
import adalabLogo from '../images/adalab.png';
//STYLES
import '../styles/main.scss';
//COMPONENTS
import Api from '../services/Api';
import Card from './Card';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import ls from '../services/LocalStorage';

function App() {
  const [avatar, setAvatar] = useState('');
  const updateAvatar = (avatar) => {
    setUserData({
      ...userData,
      photo: avatar,
    });
    setAvatar(avatar);
  };

  const [userData, setUserData] = useState(
    ls.get('userDataLs', {
      palette: '1',
      name: '',
      job: '',
      photo: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
    })
  );

  const [dataResult, setDataResult] = useState('');

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

  useEffect(() => {
    console.log(userData.photo);
    ls.set('userDataLs', userData);
  }, [userData]);

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
    setAvatar('');
    setDataResult('');
  };

  const handleCreateCard = () => {
    Api(userData).then((data) => {
      setDataResult(data);
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
              updateAvatar={updateAvatar}
              avatar={avatar}
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
