const Footer = (props) => {
    return(
    <footer className="footer">
        <small className="footer-copy">Alohomora Cards © 2022 </small>
        <img
          className="footer-img"
          src={props.image}
          alt="adalab"
          title="Logo de Adalab"
        />
      </footer> 
    )
}
export default Footer;