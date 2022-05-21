import { IonContent, IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { firebase } from "../../Firebase/FirebaseConfig";
import styled from "styled-components";

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};
const LoginPage = ({ isSignedIn, setIsSignedIn }) => {
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  if (!isSignedIn) {
    return (
      <IonPage>
        <IonContent>
          <LoginContainer>
            <div>
              <h1>My App</h1>
              <p>Please sign-in:</p>
              <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </div>
          </LoginContainer>
        </IonContent>
      </IonPage>
    );
  }
  return (
    <IonPage>
      <IonContent>
        <LoginContainer>
          <div>
            <h1>IOT PWA Creator</h1>
            <p>
              Welcome {firebase.auth().currentUser.displayName}! You are now
              signed-in!
            </p>
            <a
              style={{ cursor: "pointer" }}
              onClick={() => firebase.auth().signOut()}
            >
              Sign-out
            </a>
          </div>
        </LoginContainer>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
