const loggedInId = localStorage.getItem("loggedInId");

const loginUrl = "http://localhost:5003/api/User/login";
const allMeasurableActivitiesUrl =
  "http://localhost:5003/api/Activity/all-activity-items/" + loggedInId;
const allPeriodsUrl =
  "http://localhost:5003/api/Period/all-period-items/" + loggedInId;
const allPerspectivesUrl =
  "http://localhost:5003/api/Perspective/get-all-perspectives/" + loggedInId;
const allSsmartaObjectiveUrl =
  "http://localhost:5003/api/ssmarta-objective/all-objective-items/" +
  loggedInId;
const allInitiativesUrl =
  "http://localhost:5003/api/Initiative/get-all-initiatives/" + loggedInId;
const createMeasurableActivityPropertiesUrl =
  "http://localhost:5003/api/Measurable-Activities/add-measurable-activity";
const allMeasurableActivitiesPropertiesUrl =
  "http://localhost:5003/api/Measurable-Activities/get-all-measurable-activities/" +
  loggedInId;
const configItemEndpoint =
  "http://localhost:5003/api/configurables/get-a-config-item/";
const measurableActivityImplementationsEndpoint =
  "http://localhost:5003/api/Implementations/all-implementations-for-single-activity/";
const deleteAnImplementationEndpoint =
  "http://localhost:5003/api/Implementations/delete-an-implementation?Id=";
const downloadEvidenceEndpoint =
  "http://localhost:5003/api/Implementations/get-evidence-file?id=";
const updateAnImplementation =
  "http://localhost:5003/api/Implementations/update-an-implementation?id=";
const createAnImplementation =
  "http://localhost:5003/api/Implementations/create-an-implementation";

const addPerspectiveUrl =
  "http://localhost:5003/api/Perspective/add-a-perspective";
const updatePerspectiveUrl =
  "http://localhost:5003/api/Perspective/update-a-perspective";
const deletePerspectiveUrl =
  "http://localhost:5003/api/Perspective/delete-a-perspective";

const addPeriodUrl = "http://localhost:5003/api/Period/create-period-item";
const updatePeriodUrl = "http://localhost:5003/api/Period/update-period-item";
const deletePeriodUrl = "http://localhost:5003/api/Period/delete-period-item";

const addInitiativeUrl =
  "http://localhost:5003/api/Initiative/add-an-initiative";
const updateInitiativeUrl =
  "http://localhost:5003/api/Initiative/update-an-initiative";
const deleteInitiativeUrl =
  "http://localhost:5003/api/Initiative/delete-an-initiative";

const addSsmartaObjectiveUrl =
  "http://localhost:5003/api/ssmarta-objective/create-objective-item";
const updateSsmartaObjectiveUrl =
  "http://localhost:5003/api/ssmarta-objective/update-objective-item";
const deleteSsmartaObjectiveUrl =
  "http://localhost:5003/api/ssmarta-objective/delete-objective-item";

const addActivityUrl =
  "http://localhost:5003/api/Activity/create-activity-item";
const updateActivityUrl =
  "http://localhost:5003/api/Activity/update-activity-item";
const deleteActivityUrl =
  "http://localhost:5003/api/Activity/delete-activity-item";

const urlConfig = {
  loggedInId,
  loginUrl,
  allMeasurableActivitiesUrl,
  allPeriodsUrl,
  allPerspectivesUrl,
  allSsmartaObjectiveUrl,
  allInitiativesUrl,
  createMeasurableActivityPropertiesUrl,
  allMeasurableActivitiesPropertiesUrl,
  configItemEndpoint,
  measurableActivityImplementationsEndpoint,
  deleteAnImplementationEndpoint,
  downloadEvidenceEndpoint,
  updateAnImplementation,
  createAnImplementation,
  addPerspectiveUrl,
  addActivityUrl,
  addInitiativeUrl,
  addPeriodUrl,
  addSsmartaObjectiveUrl,
  updateActivityUrl,
  updateInitiativeUrl,
  updatePeriodUrl,
  updateSsmartaObjectiveUrl,
  updatePerspectiveUrl,
  deleteActivityUrl,
  deleteInitiativeUrl,
  deletePeriodUrl,
  deletePerspectiveUrl,
  deleteSsmartaObjectiveUrl,
};

export default urlConfig;
