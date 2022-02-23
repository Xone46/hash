import axios from 'axios'


class ClientService {


    // update Client 
    static update(clientIdupdate, nom, prenom, email ,password , adresse, ville, pays, telephone, refClient, nomSociete) {
        return new Promise((resolve, reject) => {

            axios.put(`${process.env.VUE_APP_API_BASE_URL_DEV}/clients/update/${clientIdupdate}`, {
                nom : nom,
                prenom : prenom,
                email: email,
                password : password,
                adresse : adresse,
                ville : ville,
                pays : pays,
                telephone : telephone,
                refClient : refClient,
                nomSociete : nomSociete
              })
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error.response.data);
                });

        })
    }


    // desactive Client 
    static desactive(clientId) {
        return new Promise((resolve, reject) => {

            axios.put(`${process.env.VUE_APP_API_BASE_URL_DEV}/clients/desactive/${clientId}`)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error.response.data);
                });

        })
    }
  
    // active Client 
    static active(clientId) {
        return new Promise((resolve, reject) => {

            axios.put(`${process.env.VUE_APP_API_BASE_URL_DEV}/clients/active/${clientId}`)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error.response.data);
                });

        })
    }
  
    // login Client

    static login(email, password) {
        return new Promise((resolve, reject) => {

            axios.post(`${process.env.VUE_APP_API_BASE_URL_DEV}/clients/login`,  {
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
    // Read Clients
    static show() {
        return new Promise((resolve, reject) => {

            
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json',
                }
              };

            axios.get(`${process.env.VUE_APP_API_BASE_URL_DEV}/clients/show`, axiosConfig)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });

        })
    }
    // create Client 
    static register(nom, prenom, email, password, adresse, ville, pays, telephone, refClient, nomSociete, token) {
        return new Promise((resolve, reject) => {

            axios.post(`${process.env.VUE_APP_API_BASE_URL_DEV}/clients/register`, {
                nom : nom,
                prenom : prenom,
                email: email,
                password: password,
                adresse : adresse,
                ville : ville,
                pays : pays,
                telephone : telephone,
                refClient : refClient,
                nomSociete : nomSociete,
                token : token
              })
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });

        })
    }

    static profile(clientId){
        return new Promise((resolve, reject) => {

            
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json',
                }
              };

            axios.get(`${process.env.VUE_APP_API_BASE_URL_DEV}/clients/profile/${clientId}`, axiosConfig)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });

        })
    }

    // send Observation

    static send(clientId, message) {
        return new Promise((resolve, reject) => {

            axios.post(`${process.env.VUE_APP_API_BASE_URL_DEV}/clients/send`, {
                clientId : clientId,
                message : message
              })
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });

        })
    }

    static observations() {
        return new Promise((resolve, reject) => {

            
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json',
                }
              };

            axios.get(`${process.env.VUE_APP_API_BASE_URL_DEV}/clients/observations`, axiosConfig)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });

        })
    }
    static lu(observationId) {
        return new Promise((resolve, reject) => {

            axios.put(`${process.env.VUE_APP_API_BASE_URL_DEV}/clients/observations/update/${observationId}`)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error.response.data);
                });

        })
    }


}

export default ClientService;