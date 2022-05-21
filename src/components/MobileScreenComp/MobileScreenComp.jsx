import { useSelector, useDispatch } from "react-redux";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
} from "@ionic/react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import RGL, { Responsive, WidthProvider } from "react-grid-layout";
import styled from "styled-components";
import { setGridLayouts } from "../../Slices/gridItemsSlice";
import { setOpenProperties } from "../../Slices/creatorViewSlice";
import { styled as styledMUI } from "@mui/material/styles";
const ResponsiveGridLayout = WidthProvider(RGL);

const GridContainer = styled.div`
  overflow: auto;
  /* background-color: gray; */
  width: 330px;
  height: 100%;
`;

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

const CustomButton = styledMUI(Button)`
  background-color: red;
  &:hover {
    background-color : green;
  }
`;

const MobileDevScreenComp = () => {
  const dispatch = useDispatch(null);
  const buttons = useSelector((state) => state.gridItemsSlice.buttons);
  console.log(typeof buttons);
  const gridLayouts = useSelector((state) => state.gridItemsSlice.gridLayouts);
  const isHeaderEnabled = useSelector(
    (state) => state.gridItemsSlice.isHeaderEnabled
  );
  const headerMode = useSelector((state) => state.gridItemsSlice.headerMode);
  const headerTitle = useSelector((state) => state.gridItemsSlice.headerTitle);
  const headerTopValue = useSelector(
    (state) => state.gridItemsSlice.headerTopValue
  );
  const [contextMenu, setContextMenu] = useState(null);
  const [contextMenuKey, setContextMenuKey] = useState(null);
  const handleContextMenu = (event, key) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
          // Other native context menus might behave different.
          // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
          null
    );
    setContextMenuKey(key);
  };
  const handleRemoveItem = () => {
    // TODO handle remove item from responsive grid
    handleCloseContextMenu();
  };
  const handleOpenItemProperties = () => {
    dispatch(setOpenProperties(contextMenuKey));
    handleCloseContextMenu();
  };
  const handleCloseContextMenu = () => {
    setContextMenu(null);
    setContextMenuKey(null);
  };
  return (
    <IonPage>
      <>
        {isHeaderEnabled && (
          <IonHeader onContextMenu={(e) => handleContextMenu(e, "Header")}>
            <IonToolbar mode={headerMode}>
              <IonTitle>{headerTitle}</IonTitle>
            </IonToolbar>
          </IonHeader>
        )}
        <ContentContainer topValue={headerTopValue}>
          <GridContainer>
            <ResponsiveGridLayout
              className="layout"
              layouts={gridLayouts}
              width={360}
              rowHeight={35}
              verticalCompact={false}
              autoSize={true}
              onLayoutChange={(e) => {
                dispatch(setGridLayouts(e));
              }}
            >
              {Object.keys(buttons).map((index) => {
                {
                  /* return (
                  <CustomButton
                    variant="contained"
                    key={buttons[index].key}
                    onContextMenu={(e) =>
                      handleContextMenu(e, buttons[index].key)
                    }
                  >
                    {buttons[index].name}
                  </CustomButton>
                ); */
                }
                return (
                  <IonButton
                    color={buttons[index].color}
                    key={buttons[index].key}
                    onContextMenu={(e) =>
                      handleContextMenu(e, buttons[index].key)
                    }
                  >
                    {buttons[index].name}
                  </IonButton>
                );
              })}
            </ResponsiveGridLayout>
          </GridContainer>
        </ContentContainer>
        {/* context menu  */}
        <Menu
          open={contextMenu !== null}
          onClose={handleCloseContextMenu}
          anchorReference="anchorPosition"
          anchorPosition={
            contextMenu !== null
              ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
              : undefined
          }
        >
          <MenuItem onClick={handleOpenItemProperties}>
            Open {contextMenuKey} Properties
          </MenuItem>
          <MenuItem onClick={handleRemoveItem}>
            Remove {contextMenuKey}{" "}
          </MenuItem>
        </Menu>
      </>
    </IonPage>
  );
};

export default MobileDevScreenComp;
