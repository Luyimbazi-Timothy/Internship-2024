import React, { useState, useEffect } from 'react';
import TableComponent from './TableComponent';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import urlConfig from '../../../services/Urls';

function TableHandler({ quartileFilter, toggleDashBoardBtnDisplay }) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const configItemEndpoint = urlConfig.configItemEndpoint;
  const measurableActivityImplementationsEndpoint = urlConfig.measurableActivityImplementationsEndpoint;

  useEffect(() => {
    const getData = async () => {
      try {
        const url = urlConfig.allMeasurableActivitiesPropertiesUrl;
        const response = await axios.get(url);
        const records = response.data;

        const formattedRecords = await Promise.all(
          records.map(async (record) => {
            const [
              activityResponse,
              periodResponse,
              perspectiveResponse,
              initiativeResponse,
              ssMartaObjectivesResponse,
              implementationsResponse,
            ] = await Promise.all([
              axios.get(configItemEndpoint + record.activityId),
              axios.get(configItemEndpoint + record.periodId),
              axios.get(configItemEndpoint + record.perspectiveId),
              axios.get(configItemEndpoint + record.initiativeId),
              axios.get(configItemEndpoint + record.ssMartaObjectivesId),
              axios.get(
                measurableActivityImplementationsEndpoint +
                record.measurableActivityId
              ),
            ]);

            const activity = activityResponse.data.fieldDescription;
            const period = periodResponse.data.fieldDescription;
            const perspective = perspectiveResponse.data.fieldDescription;
            const initiative = initiativeResponse.data.fieldDescription;
            const ssMartaObjectives =
              ssMartaObjectivesResponse.data.fieldDescription;
            const implementations = implementationsResponse.data.map(
              (impl) => ({
                id: impl.implementationId,
                description: impl.description,
                comment: impl.comment,
                stakeholder: impl.stakeholder,
                evidence: impl.evidenceFileName,
                date: impl.date,
              })
            );

            // Constructing the measurable activity object
            return {
              id: record.measurableActivityId,
              measurableActivity: {
                activity: activity,
                period: period,
                perspective: perspective,
                ssMartaObjectives: ssMartaObjectives,
                initiative: initiative,
                implementations: implementations,
              },
            };
          })
        );
        setData(formattedRecords);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    getData();
  }, [configItemEndpoint, measurableActivityImplementationsEndpoint]);

  useEffect(() => {
    const filterData = () => {
      const filtered = data.filter(
        (row) => row.measurableActivity.period === quartileFilter
      );
      setFilteredData(filtered);
    };
    filterData();
  }, [quartileFilter, data]);

  const handleRowClick = (measurableActivityId, index) => {
    navigateTo(measurableActivityId, filteredData[index]);
  };

  const navigateTo = (measurableActivityId, rowData) => {
    navigate("/appraisal-details", {
      state: { activityId: measurableActivityId, data: rowData },
    });
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "end", alignItems: "end" }}
      >
        <Link to="/create-new-activity">
          <Button className="btn btn-primary mb-1">Add New</Button>
        </Link>
      </div>
      <TableComponent data={filteredData} onRowClick={handleRowClick} />
    </div>
  );
}

export default TableHandler;
