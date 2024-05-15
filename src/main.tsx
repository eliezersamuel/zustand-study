import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AppProvider } from "./context/index.tsx";
import {useBearStore} from './store';

useBearStore.subscribe(state => console.log('new state:', state));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppProvider>
    <App />
  </AppProvider>
);
