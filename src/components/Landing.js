const Landing = (props) => {
  return (
    <main class="main">
      <img
        class="image"
        src={props.alohomoraLogo}
        alt="logo"
        title="Alohomora Cards logo"
      />
      <h1 class="title-create">Crea tu tarjeta de visita</h1>
      <h2 class="subtitle-create">
        Crea mejores contactos profesionales de forma fácil y cómoda
      </h2>
      <div class="box-images">
        <div class="steps">
          <i class="fa-solid fa-object-ungroup icon-begin"> </i>
          <p class="text-step">Diseña</p>
        </div>
        <div class="steps">
          <i class="fa-regular fa-keyboard icon-begin"></i>
          <p class="text-step">Rellena</p>
        </div>
        <div class="steps">
          <i class="fa-sharp fa-solid fa-share-nodes icon-begin"></i>
          <p class="text-step">Comparte</p>
        </div>
      </div>
      <a class="button-start" href="./Card.js">
        Comenzar
      </a>
    </main>
  );
};

export default Landing;
