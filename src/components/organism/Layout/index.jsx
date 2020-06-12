import React from "react";
import PropTypes from "prop-types";

import '../../../styles/styles.scss'

export const Layout = ({ children }) => {
  return <main>{children}</main>;
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};
