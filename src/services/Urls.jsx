const loggedInId = localStorage.getItem('loggedInId');

const loginUrl = 'http://localhost:5003/api/User/login';
const allMeasurableActivitiesUrl = "http://localhost:5003/api/Activity/all-activity-items/" + loggedInId;
const allPeriodsUrl = "http://localhost:5003/api/Period/all-period-items/" + loggedInId;
const allPerspectivesUrl = "http://localhost:5003/api/Perspective/get-all-perspectives/" + loggedInId;
const allSsmartaObjectiveUrl = "http://localhost:5003/api/ssmarta-objective/all-objective-items/" + loggedInId;
const allInitiativesUrl = "http://localhost:5003/api/Initiative/get-all-initiatives/" + loggedInId;
const createMeasurableActivityPropertiesUrl = "http://localhost:5003/api/Measurable-Activities/add-measurable-activity";
const allMeasurableActivitiesPropertiesUrl = "http://localhost:5003/api/Measurable-Activities/get-all-measurable-activities/" + loggedInId;
const configItemEndpoint = "http://localhost:5003/api/configurables/get-a-config-item/";
const measurableActivityImplementationsEndpoint = "http://localhost:5003/api/Implementations/all-implementations-for-single-activity/"
const deleteAnImplementationEndpoint = "http://localhost:5003/api/Implementations/delete-an-implementation?Id="
const downloadEvidenceEndpoint = "http://localhost:5003/api/Implementations/get-evidence-file?id="
const updateAnImplementation = 'http://localhost:5003/api/Implementations/update-an-implementation?id=';




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
    updateAnImplementation
}

export default urlConfig;