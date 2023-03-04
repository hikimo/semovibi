import React from "react";
import { Provider as StoreProvider } from "react-redux";
import { Provider as PaperProvider } from 'react-native-paper';

import AppRoutes from "./src/app/routes";
import store from "./src/app/store";
import theme from "./src/app/theme";

function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <AppRoutes />
      </PaperProvider>
    </StoreProvider>
  );
}

export default App;