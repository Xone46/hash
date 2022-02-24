import axios from 'axios'


class AdminService {
  
    // login Admin
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
    // Register Admin
    static register(nom, prenom, email, password, refEmp, status, code) {
        return new Promise((resolve, reject) => {

            axios.post(`${process.env.VUE_APP_API_BASE_URL_DEV}/admins/register`,  {
                nom: nom,
                prenom : prenom,
                email: email,
                password: password,
                refEmp: refEmp,
                status: status,
                code : code,
              })
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error.response.data);
                });

        })
    }

    // Get Admin
    static profile(adminId) {

        return new Promise((resolve, reject) => {
            axios.get(`${process.env.VUE_APP_API_BASE_URL_DEV}/admins/profile/${adminId}`)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error.response.data);
                });

        })
    }

    static show() {
    // Read Admins
        return new Promise((resolve, reject) => {
            axios.get(`${process.env.VUE_APP_API_BASE_URL_DEV}/admins/show`)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error.response.data);
                });

        })
    }
    // active Admin 
        static activeAdmin(adminId) {
            return new Promise((resolve, reject) => {
    
                axios.put(`${process.env.VUE_APP_API_BASE_URL_DEV}/admins/active/${adminId}`)
                    .then(response => {
                        resolve(response.data);
                    })
                    .catch(error => {
                        reject(error.response.data);
                    });
    
            })
        }
      
    // desactive  Admin
    
    static desactiveAdmin(adminId) {
        return new Promise((resolve, reject) => {

            axios.put(`${process.env.VUE_APP_API_BASE_URL_DEV}/admins/desactive/${adminId}`)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error.response.data);
                });

        })
    }



}

export default AdminService;