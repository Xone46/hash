import axios from 'axios'


class ClientService {


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
    // Read Client
    static show() {
        return new Promise((resolve, reject) => {

            
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json',
                }
              };

            axios.get(`http://localhost:3000/api/clients/show`, axiosConfig)
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
    // update Client
    // Delete Client


}

export default ClientService;