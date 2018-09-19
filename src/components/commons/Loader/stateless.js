import React from 'react';
import PropTypes from 'prop-types';
import LoaderLib from 'react-loaders';

import './style.scss';

const Loader = ({ customStyle }) => (
  <div className={'loader-overlay ' + customStyle}>
    <LoaderLib type={'pacman'}></LoaderLib>
  </div>
);

Loader.propTypes = {
  customStyle: PropTypes.string
};

export default Loader;
