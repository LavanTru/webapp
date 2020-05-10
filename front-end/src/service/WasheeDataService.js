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


    register(firstName, lastName, email, password, phoneNo, accountType, companyName, acceptsMarketingEmails, addresses, aboutMe, image, paymentMethods) {
        var payload = {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password,
            "phoneNo": phoneNo,
            "accountType": accountType,
            "companyName": companyName,
            "userType":"WASHEE",
            "acceptsMarketingEmails": acceptsMarketingEmails,
            "addresses": addresses,
            "aboutMe": aboutMe,
            "image":image,
            "paymentMethods":paymentMethods,
            "image":"https://cdn0.iconfinder.com/data/icons/basic-ui-1-line/64/Artboard_18-512.png"
        };
        // console.log(payload);
        return axios.post(WASHEE_API_URL + '/register', payload);
    }
}

export default new WasheeDataService()