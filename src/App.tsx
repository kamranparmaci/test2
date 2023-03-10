import Theme from "./themes";
import MainRoutes from "./routes";
import AppContainer from "./AppContainer";

function App() {
  return (
    <Theme>
      <AppContainer>
        <MainRoutes />
      </AppContainer>
    </Theme>
  );
}

export default App;
