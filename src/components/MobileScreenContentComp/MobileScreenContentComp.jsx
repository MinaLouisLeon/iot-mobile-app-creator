import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
} from "@ionic/react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Responsive, WidthProvider } from "react-grid-layout";
import styled from "styled-components";
import { SizeMe } from "react-sizeme";
import { setGridLayouts } from "../../Slices/gridItemsSlice";
import { setOpenProperties } from "../../Slices/creatorViewSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
const ResponsiveGridLayout = WidthProvider(Responsive);
const ContentContainer = styled.div`
  position: absolute;
  top: ${(props) => props.topValue};
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;

const GridContainer = styled.div`
  overflow: auto;
  height: 100%;
  width: ${(props) => props.widthValue.toString() + "px"};
`;

const MobileScreenContentComp = () => {
  const dispatch = useDispatch();
  const [contextMenu, setContextMenu] = useState(null);
  const [contextMenuKey, setContextMenuKey] = useState(null);
  const gridLayouts = useSelector((state) => state.gridItemsSlice.gridLayouts);
  const buttons = useSelector((state) => state.gridItemsSlice.buttons);
  const displays = useSelector((state) => state.gridItemsSlice.displays);
  const isHeaderEnabled = useSelector(
    (state) => state.gridItemsSlice.isHeaderEnabled
  );
  const headerTitle = useSelector((state) => state.gridItemsSlice.headerTitle);
  const headerTopValue = useSelector(
    (state) => state.gridItemsSlice.headerTopValue
  );
  const handleContextMenu = (event, key) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : null
    );
    setContextMenuKey(key);
  };
  const handleCloseContextMenu = () => {
    setContextMenu(null);
    setContextMenuKey(null);
  };
  const handleRemoveItem = () => {
    //   TODO handle remove item function from responsive grid
    handleCloseContextMenu();
  };
  const handleOpenItemProperties = () => {
    dispatch(setOpenProperties(contextMenuKey));
    handleCloseContextMenu();
  };
  return (
    <IonPage>
      <SizeMe>
        {({ size }) => (
          <>
            {isHeaderEnabled && (
              <IonHeader
                onContextMenu={(event) => handleContextMenu(event, "Header")}
              >
                <IonToolbar>
                  <IonTitle>{headerTitle}</IonTitle>
                </IonToolbar>
              </IonHeader>
            )}
            <ContentContainer topValue={headerTopValue}>
              <GridContainer widthValue={size.width}>
                <ResponsiveGridLayout
                  className="layout"
                  layouts={gridLayouts}
                  //   width={(size.width) - 30}
                  breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                  cols={{ lg: 5, md: 5, sm: 5, xs: 5, xxs: 5 }}
                  rowHeight={35}
                  compactType="none"
                  autoSize={false}
                  onLayoutChange={(event) => {
                    dispatch(setGridLayouts(event));
                  }}
                >
                  {Object.keys(buttons).map((index) => {
                    return (
                      <IonButton
                        onContextMenu={(event) =>
                          handleContextMenu(event, buttons[index].key)
                        }
                        key={buttons[index].key}
                        color={buttons[index].color}
                      >
                        {buttons[index].name}
                      </IonButton>
                    );
                  })}
                  {Object.keys(displays).map((index) => {
                    return (
                      <div key={displays[index].key} className="shadow-1 br2 mt2 mb2"
                        onContextMenu={(event) => 
                          handleContextMenu(event,displays[index].key)
                        }
                      >
                        <div className="pa1 fw6 f4 tc shadow-1">{displays[index].header}</div>
                      </div>
                    );
                  })}
                </ResponsiveGridLayout>
              </GridContainer>
            </ContentContainer>
          </>
        )}
      </SizeMe>
      <Menu
        open={contextMenu !== null}
        onClose={handleCloseContextMenu}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? {
                top: contextMenu.mouseY,
                left: contextMenu.mouseX,
              }
            : undefined
        }
      >
        <MenuItem onClick={handleOpenItemProperties}>
          open {contextMenuKey} Properties
        </MenuItem>
        <MenuItem onClick={handleRemoveItem}>Remove {contextMenuKey}</MenuItem>
      </Menu>
    </IonPage>
  );
};

export default MobileScreenContentComp;
