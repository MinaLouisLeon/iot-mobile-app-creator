import { IonIcon } from "@ionic/react";
import { caretBackOutline, caretForwardOutline } from "ionicons/icons";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import MobileViewComp from "./MobileViewComp/MobileViewComp";
import ControlViewComp from "./ControlViewComp/ControlViewComp";
import PropertiesViewComp from "./PropertiesViewComp/PropertiesViewComp";
import {
  ToggleIsControlOpen,
  ToggleIsPropertiesOpen,
} from "../../Slices/creatorViewSlice";

const DevContainer = styled.div`
  position: absolute;
  top: 9vh;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
`;

const DevControlContainer = styled.div`
  width: ${(props) => props.controlWidth};
  overflow: auto;
  position: relative;
  /* flex-grow: 1; */
`;

const ToggleControlViewContainer = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  z-index: 10;
`;

const DevDisplayContainer = styled.div`
  width: ${(props) => props.mobileViewWidth};
  /* flex-grow: 3; */
  border-right: solid;
  border-left: solid;
  border-width: thin;
  border-color: gray;
  overflow: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const DevPropertiesContainer = styled.div`
  width: ${(props) => props.propertiesWidth};
  /* flex-grow: 2; */
  overflow: auto;
  position: relative;
`;

const TogglePropertiesViewContainer = styled.span`
  position: absolute;
  top: 0;
  /* right: 0; */
  left: 0;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  z-index: 10;
`;

const ZoomContainer = styled.div`
  zoom: ${(props) => props.zoomLevel};
`;

const DeviceComp = ({ children }) => {
  const dispatch = useDispatch(null);
  const zoomLevel = useSelector((state) => state.creatorViewSlice.zoomLevel);
  const isControlOpen = useSelector(
    (state) => state.creatorViewSlice.isControlOpen
  );
  const controlWidth = useSelector(
    (state) => state.creatorViewSlice.controlWidth
  );
  const isPropertiesOpen = useSelector(
    (state) => state.creatorViewSlice.isPropertiesOpen
  );
  const propertiesWidth = useSelector(
    (state) => state.creatorViewSlice.propertiesWidth
  );
  const mobileViewWidth = useSelector(
    (state) => state.creatorViewSlice.mobileViewWidth
  );
  return (
    <>
      <DevContainer>
        <DevControlContainer controlWidth={controlWidth}>
          <ToggleControlViewContainer
            onClick={() => dispatch(ToggleIsControlOpen())}
          >
            {isControlOpen ? (
              <IonIcon icon={caretBackOutline} />
            ) : (
              <IonIcon icon={caretForwardOutline} />
            )}
          </ToggleControlViewContainer>
          <ControlViewComp />
        </DevControlContainer>
        <DevDisplayContainer mobileViewWidth={mobileViewWidth}>
          <ZoomContainer zoomLevel={zoomLevel}>
            <MobileViewComp>{children}</MobileViewComp>
          </ZoomContainer>
        </DevDisplayContainer>
        <DevPropertiesContainer propertiesWidth={propertiesWidth}>
          <TogglePropertiesViewContainer
            onClick={() => dispatch(ToggleIsPropertiesOpen())}
          >
            {isPropertiesOpen ? (
              <IonIcon icon={caretForwardOutline} />
            ) : (
              <IonIcon icon={caretBackOutline} />
            )}
          </TogglePropertiesViewContainer>
          <PropertiesViewComp />
        </DevPropertiesContainer>
      </DevContainer>
    </>
  );
};

export default DeviceComp;
