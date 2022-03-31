import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import { Todos } from "./Todos";

export function Home() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>App Prova</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Todos />
      </IonContent>
    </IonPage>
  );
}
