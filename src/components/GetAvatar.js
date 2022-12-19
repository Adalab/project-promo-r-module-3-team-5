import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../images/giphy.harry.gif';

function GetAvatar(props) {
  // creamos una propiedad de la clase que es la que vamos a usar en varios métodos para cargar la imagen
  // esto es un manejador de ficheros
  const fr = new FileReader();

  // creamos un React.createRef porque React no gestiona los <input type="file" /> por ello tenemos que gestionarlo por nuestra cuenta
  const myFileField = React.createRef();

  const uploadImage = (ev) => {
    // compruebo si la usuaria ha elegido al menos un fichero
    if (ev.currentTarget.files.length > 0) {
      // guardo el primer fichero en myFile
      const myFile = ev.currentTarget.files[0];

      // añado un evento load al manejador de ficheros
      // por qué añado un evento, pues porque esto es una acción asíncrona, imaginemos que el fichero pesa 5 Gb, el navegador puede tardar unos cuantos segundos en cargar y procesar el fichero, por eso le decimos "navegador, cuando termines de cargar el fichero me ejecutas el método  image"
      fr.addEventListener('load', getImage);

      // le digo al manejador de ficheros que maneje, que cargue el fichero
      fr.readAsDataURL(myFile);
    }
    // si la usuaria no ha elegido ningún fichero y ha puslado en cerrar la ventana de nuestro ordenador, no hago nada
  };

  const getImage = () => {
    const image = fr.result;

    // aquí hago lifting con los datos del fichero
    // lo que haga el componente madre con esta información es otro problema diferente
    props.updateAvatar(image);
  };

  const avatar = props.avatar === '' ? defaultAvatar : props.avatar;
  return (
    <div className="form-add-image">
      <label className="form-button" htmlFor="addImage">
        Añadir imagen
      </label>

      <input
        className="js__profile-upload-btn"
        type="file"
        ref={myFileField}
        id="addImage"
        name="photo"
        accept="image/*"
        hidden="hidden"
        required=""
        onChange={uploadImage}
      />
      <div
        className="form-checkbox js__profile-preview"
        style={{ backgroundImage: `url(${avatar})` }}
      ></div>
    </div>
  );
}

GetAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired,
};

export default GetAvatar;
