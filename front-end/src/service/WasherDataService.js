import axios from 'axios'

const LAVANTRU_API_URL = 'http://localhost:8080'

// THIS CONSTANT SHOULD BE MOVED TO A USER DATA SERVICE
const USER_API_URL = `${LAVANTRU_API_URL}/api/users/`
const WASHER_API_URL = `${LAVANTRU_API_URL}/api/washer/`

class WasherDataService {

    // THIS METHOD SHOULD BE MOVED TO A USER DATA SERVICE
    retrieveUser(id) {
        return axios.get(`${USER_API_URL}/${id}`);
    }

    updateWasherLndryJobCapabilities(id, washerCapabilities) {
        return axios.put(`${USER_API_URL}addWasherCapabilities/${id}`, washerCapabilities);
    }

    register(firstName, lastName, email, password,phoneNo,accountType,companyName,acceptsMarketingEmails,payoutBankDetails,addresses) {
        var payload = {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password,
            // "matchingPassword": matchingPassword,
            "phoneNo": phoneNo,
            "accountType": accountType,
            "companyName": companyName,
            "acceptsMarketingEmails": acceptsMarketingEmails,
            "payoutBankDetails": payoutBankDetails,
            "addresses": addresses
        };
        console.log(payload);
        return axios.post(WASHER_API_URL + 'register', payload);
    }
}

export default new WasherDataService()