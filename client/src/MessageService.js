import axios from 'axios'

class MessageService {
 

static envoyer(nom, prenom, email, telephone, message) {
    return new Promise((resolve, reject) => {
        var postData = {
            nom : nom,
            prenom : prenom,
            email: email,
            telephone : telephone,
            message : message,
          };
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
            }
          };

        axios.post(`${process.env.VUE_APP_API_BASE_URL_DEV}/message/envoyer`, postData, axiosConfig)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    })
 }



}





export default MessageService;