import { Slide, Dialog, DialogActions } from "@material-ui/core";
import "./overwrite.css";

import {
  DialogMedia,
  DialogContainer,
  DialogCard,
  DialogContent,
  DialogMediaWrapper,
  DialogTextContent,
} from "./DecisionDialog.element";

import { LinkButton, Button } from "../../Resources/Styles/global";

import React, { forwardRef, useState } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const DecisionDialog = ({ btnText, actionText, primary, small, big }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const toRoute = (txt) => txt.split(" ").join("-").toLowerCase();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="root">
      <Button
        onClick={handleClickOpen}
        primary={primary}
        big={big}
        small={small}
      >
        {btnText}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        style={{
          background: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <DialogContainer>
          <DialogCard>
            <DialogContent>
              <DialogMediaWrapper>
                <DialogMedia src="https://i.postimg.cc/DZqKmp8k/highway-truck.jpg" />
              </DialogMediaWrapper>
              <DialogTextContent>Join the driving community</DialogTextContent>
            </DialogContent>
            <DialogActions>
              <LinkButton
                onClick={handleClose}
                to={`driver/${toRoute(actionText)}`}
              >
                {actionText} to Drive
              </LinkButton>
            </DialogActions>
          </DialogCard>
          <DialogCard>
            <DialogContent>
              <DialogMediaWrapper>
                <DialogMedia src="https://i.postimg.cc/4yDjR3G8/packing-boxes.jpg" />
              </DialogMediaWrapper>
              <DialogTextContent>Haul with translify</DialogTextContent>
            </DialogContent>
            <DialogActions>
              <LinkButton
                onClick={handleClose}
                to={`/client/${toRoute(actionText)}`}
              >
                {actionText} to Ship
              </LinkButton>
            </DialogActions>
          </DialogCard>
        </DialogContainer>
      </Dialog>
    </div>
  );
};

export default DecisionDialog;
