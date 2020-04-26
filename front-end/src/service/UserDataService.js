import Axios from 'axios'

const LAVANTRU_API_URL = 'http://localhost:8080'
const USER_API_URL = `${LAVANTRU_API_URL}/api/users`

class UserDataService {

    login(email,password){
        var payload = {
            "email": email,
            "password": password
          };
          return Axios.post(USER_API_URL + '/login', payload);
    }


    getUserByEmail(email){
        return Axios.get(USER_API_URL, {
            params: {
                email: email
            }
        });
    }

}

export default new UserDataService()
