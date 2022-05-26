import { IonApp, setupIonicReact } from "@ionic/react";
import { app } from "./Firebase/FirebaseConfig.js";

import 'tachyons'
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Pages */
import MainPage from './pages/NavPage/MainPage';
setupIonicReact();

const App = () => (
  <IonApp>
    <MainPage/>
  </IonApp>
);

export default App;
