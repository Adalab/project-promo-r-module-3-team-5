import Snitch from "./Snitch";
import Reset from "./Reset";
import CardPreview from "./CardPreview";
import Design from "./Design";
import Form from "./Form";
import Share from "./Share";

const Card = (props) => {
  return (
    <main className="main-background">
      <div className="main-container">
        <section className="mainCreate__card card js-preview">
          <Snitch></Snitch>
          <Reset handleReset={props.handleReset}></Reset>
          <CardPreview
            // userData={userData} - PODRÍAMOS CREAR UN OBJETO USERDATA QUE ENGLOBE TODAS LAS PROPIEDADES (POR SI TENEMOS MUCHAS. EN CARDPREVIEW.JS, "PROPS.PALETE" PASARÍA A SER "PROPS.USERDATA.PALETE")
            palette={props.userData.palette}
            name={props.userData.name}
            job={props.userData.job}
            phone={props.userData.phone}
            email={props.userData.email}
            linkedin={props.userData.linkedin}
            github={props.userData.github}
          ></CardPreview>
        </section>
        <form action="" className="section-form js-form">
          <Design
            handleInput={props.handleInput}
            handleDesign={props.handleDesign}
            // handleShowCollapsable={handleShowCollapsable}
            collapsable={props.collapsable}
            palette={props.userData.palette}
          ></Design>

          <Form
            handleInput={props.handleInput}
            handleForm={props.handleForm}
            // handleShowCollapsable={handleShowCollapsable}
            collapsable={props.collapsable}
            name={props.userData.name}
            position={props.userData.position}
            phone={props.userData.phone}
            email={props.userData.email}
            linkedin={props.userData.linkedin}
            github={props.userData.github}
          ></Form>

          <Share
            handleCreateCard={props.handleCreateCard}
            handleShare={props.handleShare}
            collapsable={props.collapsable}
            dataResult={props.dataResult}
          ></Share>
        </form>
      </div>
    </main>
  );
};

export default Card;
