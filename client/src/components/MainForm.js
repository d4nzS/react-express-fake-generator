import useInput from '../hooks/use-input';

const MainForm = props => {
  const {
    value: enteredRegion,
    valueChangeHandler: regionChangedHandler,
  } = useInput('ua');

  const {
    value: enteredSeem,
    valueChangeHandler: seemChangedHandler,
    inputBlurHandler: seemBlurHandler
  } = useInput(0);

  const {
    value: enteredError,
    valueChangeHandler: errorChangedHandler,
    inputBlurHandler: errorBlurHandler
  } = useInput(0);

  const submitHandler = event => {
    event.preventDefault();

    props.onSubmitForm({
      region: enteredRegion,
      seed: enteredSeem,
      errors: enteredError
    });
  };

  const clickHandler = () => {
    props.onExportCSV();
  };

  return (
    <div className="container mt-3 mb-5">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-8 col-10">
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label htmlFor="region" className="form-label">Region</label>
              <select
                className="form-select"
                id="region"
                value={enteredRegion}
                onChange={regionChangedHandler}
              >
                <option value="ua">ua</option>
                <option value="ru">ru</option>
                <option value="us">us</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="error" className="form-label">Error</label>

              <input
                type="number"
                id="error"
                required
                className="form-control mb-3"
                onChange={errorChangedHandler}
                onBlur={errorBlurHandler}
                value={enteredError}
              />

              <input type="range" className="form-range" onChange={errorChangedHandler} value={enteredError} max="10"/>
            </div>

            <div className="mb-3">
              <label htmlFor="title" className="form-label">Seed</label>
              <input
                type="number"
                id="seed"
                min="0"
                max="1000"
                required
                className="form-control mb-3"
                onChange={seemChangedHandler}
                onBlur={seemBlurHandler}
                value={enteredSeem}
              />

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => seemChangedHandler((Math.random() * 1000).toFixed())}
              >Random Seem</button>
            </div>


            <button
              type="submit"
              className="btn btn-primary mb-1"
            >Get Result</button> | <button
              type="submit"
              className="btn btn-success mb-1"
              onClick={clickHandler}
            >Export to CSV</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainForm;
