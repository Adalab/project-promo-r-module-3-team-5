const Landing = (props) => {
  return (
    <main className="main">
      <img
        className="image"
        src={props.alohomoraLogo}
        alt="logo"
        title="Alohomora Cards logo"
      />
      <h1 className="title-create">Crea tu tarjeta de visita</h1>
      <h2 className="subtitle-create">
        Crea mejores contactos profesionales de forma fácil y cómoda
      </h2>
      <div className="box-images">
        <div className="steps">
          <i className="fa-solid fa-object-ungroup icon-begin"> </i>
          <p className="text-step">Diseña</p>
        </div>
        <div className="steps">
          <i className="fa-regular fa-keyboard icon-begin"></i>
          <p className="text-step">Rellena</p>
        </div>
        <div className="steps">
          <i className="fa-sharp fa-solid fa-share-nodes icon-begin"></i>
          <p className="text-step">Comparte</p>
        </div>
      </div>
      <a className="button-start" href="./Card.js">
        Comenzar
      </a>
    </main>
  );
};

export default Landing;
