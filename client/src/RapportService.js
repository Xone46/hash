import axios from 'axios'

class RapportService {
    // Created Rapport
    static insertRapport(adminId, file, clientIdupload, referenceRapport, designation, dateIntervention, responsableClient, dateProductionControle, category) {
        return new Promise((resolve, reject) => {
            var formData = new FormData();
            formData.append('adminId', adminId);
            formData.append('file', file);
            formData.append('clientId', clientIdupload);
            formData.append('referenceRapport',referenceRapport);
            formData.append('designation',designation);
            formData.append('dateIntervention',dateIntervention);
            formData.append('responsableClient',responsableClient);
            formData.append('dateProductionControle',dateProductionControle);
            formData.append('category',category);

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
            axios.post(`${process.env.VUE_APP_API_BASE_URL_DEV}/files/update`, formData, {
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
    // Show All Rapport
    static show() {
        return new Promise((resolve, reject) => {
            axios.get(`${process.env.VUE_APP_API_BASE_URL_DEV}/files/pdf`)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error.response.data);
                });

        })
    }

    static showRapportWithYear(year) {
        return new Promise((resolve, reject) => {
            axios.get(`${process.env.VUE_APP_API_BASE_URL_DEV}/files/pdf/year/${year}`)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error.response.data);
                });

        })
    }

    static deleteRapport(filename){

        return new Promise((resolve, reject) => {
            axios.delete(`${process.env.VUE_APP_API_BASE_URL_DEV}/files/pdf/${filename}`)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error.response.data);
                });

        })
    }


        // Send Message Email about validated Rapport 
        static validerRapport(clientId, rapportId) {
            return new Promise((resolve, reject) => {
                axios.put(`${process.env.VUE_APP_API_BASE_URL_DEV}/files/pdf/validated/${clientId}/${rapportId}`)
                    .then(response => {
                        resolve(response.data);
                    })
                    .catch(error => {
                        reject(error.response.data);
                    });
    
            })
        }
}





export default RapportService;