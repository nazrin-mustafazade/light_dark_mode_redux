import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  toggleDarkMode  from './store';

const ToggleSwitch = () => {
  const isDarkMode = useSelector((state) => state.isDarkMode);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <button onClick={handleToggle}>
      {isDarkMode ? 'Dark mode' : 'Light mode'}
    </button>
  );
};

export default ToggleSwitch;
