import axios from 'axios'

class DashboardService {
 

static getClient(token) {
    return new Promise((resolve, reject) => {
        var postData = {
            token: token,
          };
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
            }
          };

        axios.post(`${process.env.VUE_APP_API_BASE_URL_DEV}/dashboard`, postData, axiosConfig)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    })
 }

static showRapport(id) {
    return new Promise((resolve, reject) => {

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
            }
          };

        axios.get(`${process.env.VUE_APP_API_BASE_URL_DEV}/files/clients/${id}`, axiosConfig)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    })
 }


}





export default DashboardService;