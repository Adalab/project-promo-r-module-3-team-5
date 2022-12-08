import Snitch from "./Snitch";
import ButtonReset from "./ButtonReset";
import CardPreview from "./CardPreview";
import Design from "./Design";
import Form from "./Form";
import Share from "./Share";

import "../styles/pages/Card.scss";
import "../styles/layout/_fill.scss";

const Card = (props) => {
  return (
    <main className="main-background">
      <div className="main-container">
        <section className="mainCreate__card card js-preview">
          <Snitch></Snitch>
          <ButtonReset handleReset={props.handleReset}></ButtonReset>
          <CardPreview
            // userData={userData} - PODRÍAMOS CREAR UN OBJETO USERDATA QUE ENGLOBE TODAS LAS PROPIEDADES (POR SI TENEMOS MUCHAS. EN CARDPREVIEW.JS, "PROPS.PALETE" PASARÍA A SER "PROPS.USERDATA.PALETE")
            palette={props.userData.palette}
            name={props.userData.name}
            job={props.userData.job}
            phone={props.userData.phone}
            email={props.userData.email}
            linkedin={props.userData.linkedin}
            github={props.userData.github}
            avatar={props.avatar}
          ></CardPreview>
        </section>
        <form action="" className="section-form js-form">
          <Design
            handleInput={props.handleInput}
            handleDesign={props.handleDesign}
            collapsDesign={props.collapsDesign}
            palette={props.userData.palette}
            rotateWand={props.rotateWand}
          ></Design>

          <Form
            handleInput={props.handleInput}
            handleForm={props.handleForm}
            handleAvatar={props.handleAvatar}
            updateAvatar={props.updateAvatar}
            avatar={props.avatar}
            collapsForm={props.collapsForm}
            name={props.userData.name}
            job={props.userData.job}
            phone={props.userData.phone}
            email={props.userData.email}
            linkedin={props.userData.linkedin}
            github={props.userData.github}
          ></Form>

          <Share
            handleCreateCard={props.handleCreateCard}
            handleShare={props.handleShare}
            collapsShare={props.collapsShare}
            dataResult={props.dataResult}
          ></Share>
        </form>
      </div>
    </main>
  );
};

export default Card;
