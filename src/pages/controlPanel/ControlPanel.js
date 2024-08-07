import { useState, React, createContext, useEffect } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TableData from './widgets/TableData'
import DeleteDialogBox from './widgets/DeleteDialogBox'
import SelectModal from './widgets/SelectModal'
import AddModal from './widgets/AddModal'
import axios from 'axios'

export const Context = createContext()

const ControlPanel = () => {


  const [columnHeader, setColumnHeader] = useState('Field')
  const [isPreview, setIsPreview] = useState(false)
  const [formOpen, setFormOpen] = useState(false)
  const [editData, setEditData] = useState(null)
  const [alertOpen, setAlertOpen] = useState(false)
  const [rowToDelete, setRowToDelete] = useState(null)
  const [tableData, setTableData] = useState([])
  const [showTableData, setShowTableData] = useState(false)
  const [addBtnLabel, setAddBtnLabel] = useState("")


  const [dataSets, setDataSets] = useState({
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
  });

  
const userId = "5d61e6ab-00f3-45b2-bddd-cedb7edeaaf7"

  useEffect(() => {

    const fetchData = async (userId) => {
    const periods = await axios.get(`http://localhost:5003/api/Period/all-period-items/${userId}`);
    const perspectives = await axios.get(`http://localhost:5003/api/Perspective/get-all-perspectives/${userId}`);
    const objectives = await axios.get(`http://localhost:5003/api/ssmarta-objective/all-objective-items/${userId}`);
    const initiatives = await axios.get(`http://localhost:5003/api/Initiative/get-all-initiatives/${userId}`);
    const activities = await axios.get(`http://localhost:5003/api/Activity/all-activity-items/${userId}`);


    
    axios.all([periods, perspectives, objectives, initiatives, activities]).then(axios.spread((periods, perspectives, objectives, initiatives, activities) => {
        const updatedDataSets = { ...dataSets };
              periods.data.forEach(item => {
              updatedDataSets[1].push({ field: item.fieldDescription , id: item.itemId});
              });
              perspectives.data.forEach(item => {
              updatedDataSets[2].push({ field: item.fieldDescription , id: item.itemId});
              });
              objectives.data.forEach(item => {
              updatedDataSets[3].push({ field: item.fieldDescription , id: item.itemId});
                });
              initiatives.data.forEach(item => {
              updatedDataSets[4].push({ field: item.fieldDescription , id: item.itemId});
              });
              activities.data.forEach(item => {
              updatedDataSets[5].push({ field: item.fieldDescription , id: item.itemId});
              });

              setDataSets(updatedDataSets);


    })).catch(errors => {
        console.error(errors);
    });
  }
  fetchData(userId)
    

  },[] ); 


  const handleAdd = () => {
    setFormOpen(true)
    setIsPreview(false)
    setEditData(null)
  }



  return (
    <>
      <Container minWidth="sm">
        <Grid container spacing={1}>

          {/* Select Field to configure  */}
          <Grid item xs={12}>
            <Context.Provider value={{setShowTableData, setColumnHeader, setTableData, dataSets}}>
              <SelectModal setAddBtnLabel={setAddBtnLabel}/>
            </Context.Provider>
          </Grid>
          {/* Add / Edit Modal  */}
          <Context.Provider value={{isPreview, formOpen, setFormOpen, tableData, setTableData, editData, setEditData, addBtnLabel, userId}}>
            <AddModal />
          </Context.Provider>
          {/* Delete dialog box  */}
          <Context.Provider value={{rowToDelete, tableData, alertOpen, setTableData, setAlertOpen, editData, addBtnLabel}}>
            <DeleteDialogBox />
          </Context.Provider>
          {showTableData &&
            <Grid item xs={12}>
              {/* table data  */}
              <Context.Provider value={{columnHeader, tableData, setFormOpen, setEditData, setIsPreview, setRowToDelete, setAlertOpen}}>
                <TableData handleAdd={handleAdd} addBtnLabel={addBtnLabel}/>
              </Context.Provider>
            </Grid>
          }
        </Grid>
      </Container>
    </>
  )

}

export default ControlPanel
