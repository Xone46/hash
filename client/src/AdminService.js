import axios from 'axios'


class AdminService {
  
    // login Client

    static login(email, password) {
        return new Promise((resolve, reject) => {

            axios.post(`${process.env.VUE_APP_API_BASE_URL_DEV}/admins/login`,  {
                email: email,
                password: password
              })
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error.response.data);
                });

        })
    }
    // Read Client
    // static getClients() {
    //     return new Promise((resolve, reject) => {

    //         axios.get(`${process.env.VUE_APP_API_BASE_URL_DEV}/clients/show`)
    //             .then(response => {
    //                 resolve(response.data);
    //             })
    //             .catch(error => {
    //                 reject(error);
    //             });

    //     })
    // }
    // create Client 
    // update Client
    // Delete Client


}

export default AdminService;