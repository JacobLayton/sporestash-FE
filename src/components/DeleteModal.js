import React, { useState, useEffect, forwardRef } from "react";
import { Dialog } from "@mui/material";
import { Slide } from "@mui/material";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/edit-item.css";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function DeleteModal(props) {
  const { open, handleClose, handleDelete } = props;
  const [deleteClicked, setDeleteClicked] = useState(false);

  return (
    <Dialog onClose={handleClose} open={open} TransitionComponent={Transition}>
      <div className="delete-modal-elements">
        <FontAwesomeIcon
          icon={["fas", "x"]}
          className="delete-modal-x"
          onClick={handleClose}
        />
        <h4>Are you sure you want to delete this item?</h4>
        <div className="delete-modal-buttons">
          <Button
            variant="outlined"
            color="error"
            id="delete-modal-button"
            onClick={handleDelete}
          >
            Delete this trash!
          </Button>
          <div className="form-spacer" />
          <Button
            variant="outlined"
            color="primary"
            id="delete-cancel-button"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Dialog>
  );
}

export default DeleteModal;
