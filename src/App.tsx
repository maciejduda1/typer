import './App.css'
import ProtectedRouterProvider from "./router/ProtectedRouterProvider";
import {Provider} from "react-redux";
import store, {persistor} from "./store";
import {PersistGate} from "redux-persist/integration/react";

function App() {

  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ProtectedRouterProvider />
        </PersistGate>
      </Provider>
  )
}

export default App
