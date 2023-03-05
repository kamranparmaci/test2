import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckIsAuthenticated = (): boolean => {
  const token = localStorage.getItem('token');
  return !!token;
};

export { CheckIsAuthenticated };
