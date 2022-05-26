import QRCode from "react-qr-code";
import { useSelector, useDispatch } from "react-redux";
import { IonButton, IonPopover } from "@ionic/react";
import { closeQrCode } from "../../Slices/creatorViewSlice";
import styled from "styled-components";

const QrCodeComp = () => {
  
  const QrCodeValue = useSelector(
    (state) => state.creatorViewSlice.QrCodeValue
  );
  console.log(QrCodeValue);
  return (
    <>
        <div style={{ background: "white", padding: "16px" }}>
          <QRCode value={QrCodeValue} />
        </div>
    </>
  );
};

export default QrCodeComp;
