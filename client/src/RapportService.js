import axios from 'axios'

class RapportService {
    // Created Rapport
    static insertRapport(file, clientId) {
        return new Promise((resolve, reject) => {
            var formData = new FormData();
            formData.append('file', file);
            formData.append('clientId', clientId);
            axios.post(`${process.env.VUE_APP_API_BASE_URL_DEV}/files/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }})
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error.response.data);
                });

        })

    }
    // get Rapport
    static getRapport(filename) {
        return new Promise((resolve, reject) => {
            axios.get(`${process.env.VUE_APP_API_BASE_URL_DEV}/files/pdf/${filename}`, {
                headers: this.headers,
                responseType: 'blob',
            })
                .then(response => {
                    resolve(window.open(URL.createObjectURL(response.data)));
                })
                .catch(error => {
                    reject(error.response.data);
                });

        })
    }
    // update Rapport

    static updateRapport(file, clientId) {

        return new Promise((resolve, reject) => {
            var formData = new FormData();
            formData.append('file', file);
            formData.append('clientId', clientId);
            axios.post(`${process.env.VUE_APP_API_BASE_URL_PRO}/rapports/files/update`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }})
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error.response.data);
                });

        })

    }
    // Delete Rapport
}





export default RapportService;