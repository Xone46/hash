<template>
<div class="dash">
     <div class="container">
        <div class="menu">
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
        <div class="table">
            askjdasdui
        </div>
     </div>
</div>
  
</template>

<script>
import DashboardService from "../DashboardService";

export default {
  data() {
    return {

      isActive: true,
      adresse:  null,
      date:  null,
      email:  null,
      nom:  null,
      nomSociete: null,
      pays:  null,
      prenom:  null,
      refClient:  null,
      telephone: null ,
      ville:  null,
      id : null
    }
  },

  methods : {
    // deconnecter Compte
      deconnecter() {

              sessionStorage.removeItem('token');
              this.$router.push("/").catch(()=>{});
        },
    // Afficher les rapport & Show Rapport  
    showRapport() {

        DashboardService.showRapport(this.id)
          .then((data) => {
            if(data) {
                console.log(data);
            }
          
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
                this.id = data.client._id
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
  align-items: center;

}
.dash .container .menu{
    width: 45%;
    margin-left: 10px;

}
.dash .container .table{

width:75%;

}




</style>