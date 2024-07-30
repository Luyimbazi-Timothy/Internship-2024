import { useMemo, React, useContext } from 'react'
import {
  MaterialReactTable,
  MRT_ActionMenuItem
} from 'material-react-table'
import { Edit, Delete } from '@mui/icons-material'
import { Context } from '../ControlPanel'

function TableData() {
    const [columnHeader, tableData, setFormOpen , setEditData, setIsPreview, setRowToDelete, setAlertOpen ] = useContext(Context)

    const columns = useMemo(
        () => [
          {
            accessorKey: 'field',
            header: columnHeader,
            size: 150,
          },
        ],
        [columnHeader],
      )

      const handleEdit = (row) => {
        setFormOpen(true)
        setIsPreview(true)
        setEditData(row.original)
      }

      const handleDelete = (row) => {
        setRowToDelete(row)
        setAlertOpen(true)
      }

    return (
    <>
            <MaterialReactTable
              columns={columns}
              data={tableData}
              enableRowActions
              renderRowActionMenuItems={({ row, table }) => [
                // eslint-disable-next-line react/jsx-pascal-case
                <MRT_ActionMenuItem
                  icon={<Edit />}
                  key="edit"
                  label="Edit"
                  onClick={() => handleEdit(row)}
                  table={table}
                />,
                // eslint-disable-next-line react/jsx-pascal-case
                <MRT_ActionMenuItem
                  icon={<Delete />}
                  key="delete"
                  label="Delete"
                  onClick={() => handleDelete(row)}
                  table={table}
                />,
              ]}
            />
    </>
  )
}

export default TableData