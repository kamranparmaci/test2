import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckIsAuthenticated = (): boolean => {
  const token = localStorage.getItem("password");
  return !!token;
};

export { CheckIsAuthenticated };
