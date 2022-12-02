import "../styles/components/Snitch.scss";

const Snitch = () => {
  return (
    <div className="snitch-container" id="container">
      <div id="the-div">
        {/* <!--Inspiration https://dribbble.com/shots/4155133-Snitch-Animation -->
              <!--and https://dribbble.com/shots/2493071-Wizarding-World-Icons --> */}
        <input type="checkbox" name="checkbox" id="animate" hidden="hidden" />
        <label htmlFor="animate">
          <div className="snitch js-snitch">
            <div className="obj">
              <div className="body">
                <div className="flourish"></div>
                <div className="flourish"></div>
                <div className="flourish"></div>
                <div className="flourish">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
                <div className="flourish">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
              </div>
              <div className="l joint"></div>
              <div className="l wing">
                <div className="feather"></div>
                <div className="feather"></div>
                <div className="feather"></div>
              </div>
              <div className="r joint"></div>
              <div className="r wing">
                <div className="feather"></div>
                <div className="feather"></div>
                <div className="feather"></div>
              </div>
            </div>
          </div>
        </label>
        <div className="shadow"></div>
      </div>
    </div>
  );
};

export default Snitch;
