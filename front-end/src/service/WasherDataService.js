import axios from 'axios'

const LAVANTRU_API_URL = 'http://localhost:8080'

const WASHER_API_URL = `${LAVANTRU_API_URL}/api/washer`

class WasherDataService {
    
    retrieveWasher(id) {
        return axios.get(`${WASHER_API_URL}/${id}`);
    }

    updateWasherJobCapabilities(id, washerCapabilities){
        return axios.put(`${WASHER_API_URL}/services/${id}`, washerCapabilities);
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
        return axios.post(WASHER_API_URL + '/register', payload);
    }
}

export default new WasherDataService()