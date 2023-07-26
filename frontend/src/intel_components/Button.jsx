import React from 'react';
import '../../../frontend/src/dist/css/dlux.css'; // dlux-intel css file
import PropTypes from 'prop-types';

const Button = ({ text, type, btn_type, onClick }) => {
  return (
    <>
      {/* btn_type can be primary, secondary, success, danger, warning, info, light, dark */}
      <button
        type={type}
        className={`btn btn-${btn_type} me-1`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

// PropTypes definition
Button.propTypes = {
  btn_type: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  // default type prop is button
};

Button.defaultPorops = {
  btn_type: 'primary',
  type: 'button',
};

export default Button;
