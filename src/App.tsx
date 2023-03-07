import React from "react";
import Theme from "./themes";
import MainRoutes from "./routes";
import AppContainer from "./AppContainer";

function App() {
  return (
    <AppContainer>
      <Theme>
        <MainRoutes />
      </Theme>
    </AppContainer>
  );
}

export default App;
