import React from 'react';
import Loader from 'react-loader-spinner'

const loaderStyle = {
  textAlign: 'center',
  position: 'absolute',
  top: '0',
  right: '0',
  left: '0',
  bottom: '0',
  margin: 'auto',
  width: '140px',
  height: '0px',
  zIndex: '2'
};

export const CradleLoader = <Loader type="CradleLoader" color="#00BFFF" height="100" width="100" style={loaderStyle}/>
