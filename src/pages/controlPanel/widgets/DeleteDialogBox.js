import { React, useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Context } from "../ControlPanel";
import Swal from "sweetalert2";
import axios from "axios";
import urlConfig from "../../../services/Urls";

function DeleteDialogBox() {
  const {
    rowToDelete,
    tableData,
    alertOpen,
    setTableData,
    setAlertOpen,
    editData,
    addBtnLabel,
    setNoOfNewUpdates,
  } = useContext(Context);

  const handleFormDelete = () => {
    setTableData(tableData.filter((item) => item !== rowToDelete.original));
    setAlertOpen(false);

    if (addBtnLabel === "Perspectives") {
      axios.delete(`${urlConfig.deletePerspectiveUrl}/${editData?.id}`);
    } else if (addBtnLabel === "Initiatives") {
      axios.delete(`${urlConfig.deleteInitiativeUrl}/${editData?.id}`);
    } else if (addBtnLabel === "Periods") {
      axios.delete(`${urlConfig.deletePeriodUrl}/${editData?.id}`);
    } else if (addBtnLabel === "Ssmarta Objectives") {
      axios.delete(`${urlConfig.deleteSsmartaObjectiveUrl}/${editData?.id}`);
    } else if (addBtnLabel === "Activities") {
      axios.delete(`${urlConfig.deleteActivityUrl}/${editData?.id}`);
    }

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Record has been deleted successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    setNoOfNewUpdates((_prev) => _prev + 1);
  };

  const handleClose = () => {
    setAlertOpen(false);
  };

  return (
    <>
      <Dialog
        open={alertOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you'd like to delete this record?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action can't be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleFormDelete} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DeleteDialogBox;
