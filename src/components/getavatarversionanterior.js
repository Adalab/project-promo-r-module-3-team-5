import React from "react";
import PropTypes from "prop-types";
import defaultAvatar from "../images/giphy.harry.gif";

function GetAvatar(props) {
  const fr = new FileReader();
  const myFileField = React.createRef();
  const uploadImage = (ev) => {
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];
      fr.addEventListener("load", getImage);
      fr.readAsDataURL(myFile);
    }
  };

  const getImage = () => {
    const image = fr.result;
    props.updateAvatar(image);
  };

  const avatar = props.avatar === "" ? defaultAvatar : props.avatar;
  return (
    <>
      <div className="form__fill__boxThree--1">
        <label className="form-button" htmlFor="photo">
          Añadir imagen
        </label>
        <input
          className="js__profile-upload-btn"
          type="file"
          id="photo"
          name="photo"
          accept=".png, .svg, .webp, .jpg, .jpeg, .jfif, .pjpeg, .pjp"
          hidden="hidden"
          required=""
          onChange={uploadImage}
          ref={myFileField}
        />
        <div className="form-checkbox js__profile-preview"></div>
      </div>

      <div
        className="form__fill__boxThree--2"
        style={{ backgroundImage: `url(${avatar})` }}
      ></div>
    </>
  );
}

GetAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired,
};

export default GetAvatar;
