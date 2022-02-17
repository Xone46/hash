<template>
<div class="dash">
     <div class="container">
        <div class="menuParent">
            <b-menu>
                <b-menu-list label="Menu">
                <b-menu-item icon="information-outline" label="Informations"></b-menu-item>
                <b-menu-item icon="settings" :active="isActive" expanded>
                    <template #label="props">
                    Administration
                    <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'"></b-icon>
                    </template>
                    <b-menu-item icon="account" label="Votre compte"></b-menu-item>
                    <b-menu-item icon="cellphone-link">
                    <template #label>
                        Services
                        <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
                            <template #trigger>
                                <b-icon icon="dots-vertical"></b-icon>
                            </template>
                            <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
                            <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
                            <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
                        </b-dropdown>
                    </template>
                    </b-menu-item>
                    <b-menu-item icon="cash-multiple" label="Payments" disabled></b-menu-item>
                </b-menu-item>
                <b-menu-item icon="account" label="Mon compte">
                    <b-menu-item label="Les données de compte"></b-menu-item>
                    <b-menu-item label="Nom et Prénom"></b-menu-item>
                    <b-menu-item label="Adresses"></b-menu-item>
                    <b-menu-item label="Email"></b-menu-item>
                    <b-menu-item label="Telephone"></b-menu-item>
                    <b-menu-item label="Adresses"></b-menu-item>
                    <b-menu-item label="Nom de société"></b-menu-item>
                    <b-menu-item label=" Référence client"></b-menu-item>
                </b-menu-item>
                </b-menu-list>
                <b-menu-list label="pdf">
                <b-menu-item label="Mes Rapport" @click="showRapport"></b-menu-item>
                </b-menu-list>
                <b-menu-list label="Actions">
                <b-menu-item label="Se déconnecter" @click="deconnecter"></b-menu-item>
                </b-menu-list>
            </b-menu>
        </div>   
        <div class="tableParent" v-if="tableTrue">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Titre</th>
                <th scope="col">Description</th>
                <th scope="col">Date</th>
                 <th scope="col">Télécharger Pdf</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="element in data" :key="element._id">
                <th>{{element._id}}</th>
                <td>{{element.titre}}</td>
                <td>{{element.description}}</td>
                <td>{{Date(element.date)}}</td>
                <td @click="download(element.filename)"> <i class="fa-solid fa-download" ></i> </td>
              </tr>
            </tbody>
          </table>
        </div>
     </div>
</div>
  
</template>

<script>
import DashboardService from "../DashboardService";
import RapportService from "../RapportService";


export default {
  data() {
    return {

      isActive: true,
      adresse:  null,
      date:  null,
      id : null,
      email:  null,
      nom:  null,
      nomSociete: null,
      pays:  null,
      prenom:  null,
      refClient:  null,
      telephone: null ,
      ville:  null,
      data :[],
      filename: null,
      tableTrue: false,
    }
  },

  methods : {
    // deconnecter Compte
    deconnecter() {

              sessionStorage.removeItem('token');
              sessionStorage.removeItem('id');
              sessionStorage.removeItem('user');
              this.$router.push("/").catch(()=>{});
        },
    // Afficher les rapport & Show Rapport  
    showRapport() {
        this.tableTrue = !this.tableTrue 
        if(this.tableTrue == false) {
            this.data = []
        }
        if(this.tableTrue == true) {
          this.id = sessionStorage.getItem('id');
          DashboardService.showRapport(this.id)
          .then((data) => {
            if(data) {
              data.rapports.forEach(e => {
                this.data.push(e);
              });       
            }
          })
          .catch((error) => {
            console.error(`HTTP error: ${error.name} => ${error.message}`);
            throw "fail request at: GET /refreshtime";
          })
        }
    },

    // download pdf with client
    download(filename) {
        this.filename = filename
        RapportService.getRapport(this.filename)
          .then((data) => {
            console.log(data)
          })
          .catch((error) => {
            console.error(`HTTP error: ${error.name} => ${error.message}`);
            throw "fail request at: GET /refreshtime";
          })
    }
  },
  mounted() {
       const token = sessionStorage.getItem("token");
         DashboardService.getClient(token)
          .then((data) => {
            if(data) {
                this.nom = data.client.nom,
                this.prenom = data.client.prenom
                sessionStorage.setItem('id', data.client._id);
            }
          
          })
          .catch((error) => {
            console.error(`HTTP error: ${error.name} => ${error.message}`);
            throw "fail request at: GET /refreshtime";
          })
        }
       
}

</script>

<style>

.dash {
  height: 100%;
  margin-top: 20px;
}

.dash .container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.dash .container .menuParent{
    width: 25%;

}
.dash .container .tableParent{
   width:100%;
}
.dash .container .tableParent table{
   width:100%;
}

</style>