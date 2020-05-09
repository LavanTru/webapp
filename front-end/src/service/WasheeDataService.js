import axios from 'axios'

const LAVANTRU_API_URL = 'http://localhost:8080'

const WASHEE_API_URL = `${LAVANTRU_API_URL}/api/washee`

class WasheeDataService {
    
    getWasheeById(id) {
        return axios.get(`${WASHEE_API_URL}/${id}`);
    }

    getAllWashees() {
        return axios.get(`${WASHEE_API_URL}`);
    }


    register(firstName, lastName, email, password, phoneNo, accountType, companyName, acceptsMarketingEmails, payoutBankDetails, addresses, aboutMe) {
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
            "addresses": addresses,
            "aboutMe": aboutMe,
            "jobCapabilities": jobCapabilities
        };
        console.log(payload);
        return axios.post(WASHEE_API_URL + '/register', payload);
    }
}

export default new WasheeDataService()