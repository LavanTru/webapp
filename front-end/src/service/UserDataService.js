import Axios from 'axios'

const LAVANTRU_API_URL = 'http://localhost:8080'
const USER_API_URL = `${LAVANTRU_API_URL}/api/users`

// Class to hold methods related to interacting with UserController API in the back-end

class UserDataService {

    login(email,password){
        var payload = {
            "email": email,
            "password": password
          };
          return Axios.post(USER_API_URL + '/login', payload);
    }

}

export default new UserDataService()
