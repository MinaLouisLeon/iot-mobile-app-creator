import "./devices.css";
import styled from "styled-components";

const DeviceContainer = styled.div`
  /* transform: rotate(90deg); */
`;


const MobileViewComp = ({ children }) => {
  return (
    <DeviceContainer>
      <div className="device device-google-pixel-2-xl">
        <div className="device-stripe"></div>
        <div className="device-header"></div>
        <div className="device-sensors"></div>
        <div className="device-btns"></div>
        <div className="device-power"></div>
        <div className="device-frame">
          <div className="device-content">{children}</div>
        </div>
      </div>
    </DeviceContainer>
  );
};

export default MobileViewComp;
