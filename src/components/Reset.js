const Reset = (props) => {
  return (
    <>
      <button
        className="card__button js-reset-btn"
        title="Reset"
        name="Reset"
        type="button"
        onClick={props.resetFunction}
      >
        <i className="far fa-trash-alt" aria-hidden="true"></i> Reset
      </button>
    </>
  );
};

export default Reset;
