import { useReducer } from 'react';

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT':
      return { value: action.value };

    case 'BLUR':
      return { value: action.value };

    default:
      return { value: action.value };
  }
};

const useInput = initialValue => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    { value: initialValue }
  );

  const valueChangeHandler = event => {
    if (event.target) {
      dispatch({ type: 'INPUT', value: event.target.value });
    } else {
      const value = event;

      dispatch({ type: 'INPUT', value });
    }
  };

  const inputBlurHandler = event => {
    let value = event.target.value;

    if (value < 0) {
      value = -value;
    }

    if (value > 1000) {
      value = 1000;
    }

    dispatch({ type: 'Blur', value });
  };

  return {
    value: inputState.value,
    valueChangeHandler,
    inputBlurHandler
  };
};

export default useInput;