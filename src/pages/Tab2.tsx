import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Backups</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Backups</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="List of Backups to Storj (S3) or iCloud goes here" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
