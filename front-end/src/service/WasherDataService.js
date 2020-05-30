import axios from 'axios'
import JobDataService from "../service/JobDataService";

const LAVANTRU_API_URL = 'http://localhost:8080'

const WASHER_API_URL = `${LAVANTRU_API_URL}/api/washer`

class WasherDataService {
    
    retrieveWasher(id) {
        return axios.get(`${WASHER_API_URL}/${id}`);
    }

    retrieveAllWashers() {
        return axios.get(`${WASHER_API_URL}`);
    }

    updateWasherJobCapabilities(id, washerCapabilities){
        return axios.put(`${WASHER_API_URL}/services/${id}`, washerCapabilities);
    }

    getActiveJobs(id) {
        return axios.get(`${WASHER_API_URL}/active-services/${id}`);
    }

    async register(firstName, lastName, email, password, phoneNo, accountType, companyName, acceptsMarketingEmails, payoutBankDetails, addresses, aboutMe) {
        let jobCapabilities;
        const response = await JobDataService.retrieveAllJobs();
        jobCapabilities = response.data;
        jobCapabilities.map(washerJob => {
            washerJob.active = false;
        });
        var payload = {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password,
            // "matchingPassword": matchingPassword,
            "phoneNo": phoneNo,
            "accountType": accountType,
            "companyName": companyName,
            "userType":"WASHER",
            "acceptsMarketingEmails": acceptsMarketingEmails,
            "payoutBankDetails": payoutBankDetails,
            "addresses": addresses,
            "aboutMe": aboutMe,
            "jobCapabilities": jobCapabilities,
            "image":"https://cdn0.iconfinder.com/data/icons/basic-ui-1-line/64/Artboard_18-512.png"
        };
        return axios.post(WASHER_API_URL + '/register', payload);
    }
    updateWasherSchedule(id, availableHours){
        return axios.put(`${WASHER_API_URL}/schedule/${id}`, availableHours);
    }

}

export default new WasherDataService()