import axios from 'axios'


class ClientService {

    // select Client
    // Read Client
    static getClients() {
        return new Promise((resolve, reject) => {

            axios.get(`${process.env.VUE_APP_API_BASE_URL_PRO}/clients/show`)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });

        })
    }
    // create Client 
    // update Client
    // Delete Client


}

export default ClientService;