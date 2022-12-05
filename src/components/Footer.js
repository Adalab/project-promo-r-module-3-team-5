import '../styles/components/Footer.scss';

const Footer = (props) => {
  return (
    <>
      <div className="line-footer"></div>
      <footer className="footer">
        <small className="footer-copy">Alohomora Cards © 2022 </small>
        <a href="https://adalab.es/" target="_blank" rel="noreferrer">
          <img
            className="footer-img"
            src={props.image}
            alt="adalab"
            title="Logo de Adalab"
          />
        </a>
      </footer>
    </>
  );
};
export default Footer;
