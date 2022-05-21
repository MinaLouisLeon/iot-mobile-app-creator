import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../Slices/userInfoSlice";
import { IonButton } from "@ionic/react";
const LoginContainer = styled.div`
  margin: 20px;
`;
// Configure FirebaseUI.
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

const LoginComp = ({ setIsSignedInValue,setIsOpen }) => {
  const dispatch = useDispatch(null);
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        dispatch(setUserInfo(user));

        setIsSignedIn(!!user);
        setIsSignedInValue(!!user);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  if (!isSignedIn) {
    return (
      <LoginContainer>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </LoginContainer>
    );
  }
  return (
    <LoginContainer>
      <p>
        Welcome {firebase.auth().currentUser.displayName}! You are now
        signed-in!
      </p>
      <div className="tc">
      <IonButton size="small" color="danger" onClick={() => {
        firebase.auth().signOut();
        setIsOpen(false);
        setIsSignedInValue(false);
      }}>
        Logout
      </IonButton>
      </div>
    </LoginContainer>
  );
};

export default LoginComp;
