import { useState, React, createContext, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TableData from "./widgets/TableData";
import DeleteDialogBox from "./widgets/DeleteDialogBox";
import SelectModal from "./widgets/SelectModal";
import AddModal from "./widgets/AddModal";
import axios from "axios";
import urlConfig from "../../services/Urls";

export const Context = createContext();

const ControlPanel = () => {
  const [columnHeader, setColumnHeader] = useState("Field");
  const [isPreview, setIsPreview] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [alertOpen, setAlertOpen] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [showTableData, setShowTableData] = useState(false);
  const [addBtnLabel, setAddBtnLabel] = useState("");
  const [noOfNewUpdates, setNoOfNewUpdates] = useState(0);

  const [dataSets, setDataSets] = useState({
    1: [],
    2: [],
    3: []
  });

  const fetchData = async () => {
    const objectives = await axios.get(`${urlConfig.allSsmartaObjectiveUrl}`);
    const initiatives = await axios.get(`${urlConfig.allInitiativesUrl}`);
    const activities = await axios.get(`${urlConfig.allMeasurableActivitiesUrl}`);

    axios
      .all([objectives, initiatives, activities])
      .then(
        axios.spread(
          (objectives, initiatives, activities) => {
            const updatedDataSets = {
              1: [],
              2: [],
              3: [],
            };
            objectives.data.forEach((item) => {
              updatedDataSets[1].push({
                field: item.fieldDescription,
                id: item.itemId,
              });
            });
            initiatives.data.forEach((item) => {
              updatedDataSets[2].push({
                field: item.fieldDescription,
                id: item.itemId,
              });
            });
            activities.data.forEach((item) => {
              updatedDataSets[3].push({
                field: item.fieldDescription,
                id: item.itemId,
              });
            });
            setDataSets(updatedDataSets);
          }
        )
      )
      .catch((errors) => {
        console.error(errors);
      });
  };

  useEffect(() => {
    fetchData();
  }, [noOfNewUpdates]);

  const handleAdd = () => {
    setFormOpen(true);
    setIsPreview(false);
    setEditData(null);
  };

  return (
    <>
      <div>
        <Grid container spacing={1}>
          {/* Select Field to configure  */}
          <Grid item xs={12}>
            <Context.Provider
              value={{
                setShowTableData,
                setColumnHeader,
                setTableData,
                dataSets,
              }}
            >
              <SelectModal setAddBtnLabel={setAddBtnLabel} />
            </Context.Provider>
          </Grid>
          {/* Add / Edit Modal  */}
          <Context.Provider
            value={{
              formOpen,
              setFormOpen,
              setTableData,
              editData,
              setEditData,
              addBtnLabel,
              setNoOfNewUpdates,
            }}
          >
            <AddModal isPreview={isPreview} />
          </Context.Provider>
          {/* Delete dialog box  */}
          <Context.Provider
            value={{
              alertOpen,
              setTableData,
              setAlertOpen,
              editData,
              addBtnLabel,
              setNoOfNewUpdates,
            }}
          >
            <DeleteDialogBox />
          </Context.Provider>

          {showTableData && (
            <Grid item xs={12}>
              {/* table data  */}
              <Context.Provider
                value={{
                  columnHeader,
                  tableData,
                  setFormOpen,
                  setEditData,
                  setIsPreview,
                  setRowToDelete,
                  setAlertOpen,
                }}
              >
                <TableData handleAdd={handleAdd} addBtnLabel={addBtnLabel} />
              </Context.Provider>
            </Grid>
          )}
        </Grid>
      </div>
    </>
  );
};

export default ControlPanel;
