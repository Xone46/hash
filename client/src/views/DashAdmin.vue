<template>
  <div class="dash">
    <div class="container">
      <div class="menuParent">
        <b-menu>
          <b-menu-list label="Menu">
            <b-menu-item icon="information-outline" label="Clients">
              <b-menu-item label="Ajouter un client" @click="flagRegistre = !flagRegistre"></b-menu-item>
              <b-menu-item label="Aperçu" @click="flagShowTableClients = !flagShowTableClients"></b-menu-item>
            </b-menu-item>

            <b-menu-item
              icon="information-outline"
              label="Des employés"
            ></b-menu-item>

            <b-menu-item icon="account" label="Mon Compte">
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

          <b-menu-list label="Actions">
            <b-menu-item
              label="Se déconnecter"
              @click="deconnecter"
            ></b-menu-item>
          </b-menu-list>
        </b-menu>
      </div>
      <div class="tableParent">
        <b-message
          class="ml-5"
          title="Success"
          type="is-success"
          aria-close-label="Close message"
          v-if="flagSucces">
          {{ msg }}
        </b-message>

        <b-message
          class="ml-5"
          title="Success"
          type="is-danger"
          aria-close-label="Close message"
          v-if="flagEchec">
          {{ msg }}
        </b-message>

        <!-- Start table Show Client -->
          <table class="table ml-3" v-if="flagShowTableClients">
            <thead>
              <tr>
                <th scope="col">Nom et Prénom </th>
                <th scope="col">Email</th>
                <th scope="col">Société</th>
                <th scope="col">Référence</th>
                <th scope="col">téléphone</th>
                <th scope="col">Adresses</th>
                <th scope="col">Cas</th>
                <th scope="col">ACTIONS</th>

              </tr>
            </thead>
            <tbody>
              <tr v-for="element in dataClients" :key="element._id">
                <td>{{element.nom+' '+element.prenom}}</td>
                <td>{{element.email}}</td>
                <td>{{element.nomSociete}}</td>
                <td>{{element.refClient}}</td>
                <td>{{element.telephone}}</td>
                <td>{{element.cas}}</td>
                <td>{{element.adresse+' '+element.ville+' '+element.pays }}</td>
                <td><a @click="active(element._id)"><i class="fa-solid fa-check"></i></a> <a @click="desactive(element._id)"><i class="fa-solid fa-xmark"></i> </a> <i class="fa-solid fa-pencil" ></i> </td>
              </tr>
            </tbody>
          </table>
        <!-- End Table Show Clients -->

        <div class="registre" v-if="flagRegistre">
          <div class="form-floating mb-3 ml-3 col-10">
            <h1>Ajouter un client</h1>
          </div>
          <div class="form-floating mb-3 ml-3 col-10">
            <input
              type="text"
              class="form-control"
              v-model="nom"
              placeholder="Nom"
            />
            <label for="nom">Nom</label>
          </div>
          <div class="form-floating mb-3 ml-3 col-10">
            <input
              type="text"
              class="form-control"
              v-model="prenom"
              placeholder="Prénom"
            />
            <label for="prenom">Prénom </label>
          </div>
          <div class="form-floating col-10 mb-3 ml-3">
            <input
              type="email"
              class="form-control"
              v-model="email"
              placeholder="E-mail"
            />
            <label for="email">E-mail </label>
          </div>
          <div class="form-floating col-10 mb-3 ml-3">
            <input
              type="text"
              class="form-control"
              v-model="password"
              placeholder="Mot de pass"
            />
            <label for="password">Mot de Pass</label>
          </div>

          <div class="form-floating col-10 mb-3 ml-3">
            <input
              type="text"
              class="form-control"
              v-model="adresse"
              placeholder="Adresse"
            />
            <label for="adresse">Adresse</label>
          </div>

          <div class="form-floating col-10 mb-3 ml-3">
            <input
              type="text"
              class="form-control"
              v-model="ville"
              placeholder="Ville"
            />
            <label for="ville">Ville</label>
          </div>

          <div class="form-floating col-10 mb-3 ml-3">
            <input
              type="text"
              class="form-control"
              v-model="pays"
              placeholder="Pays"
            />
            <label for="pays">Pays</label>
          </div>

          <div class="form-floating col-10 mb-3 ml-3">
            <input
              type="text"
              class="form-control"
              v-model="telephone"
              placeholder="Téléphone"
            />
            <label for="telephone">Téléphone</label>
          </div>

          <div class="form-floating col-10 mb-3 ml-3">
            <input
              type="text"
              class="form-control"
              v-model="refClient"
              placeholder="Référence client"
            />
            <label for="refClient">Référence client </label>
          </div>

          <div class="form-floating col-10 mb-3 ml-3">
            <input
              type="text"
              class="form-control"
              v-model="nomSociete"
              placeholder="Nom de société"
            />
            <label for="nomSociete">Nom de société</label>
          </div>

          <button
            type="button"
            class="btn btn-danger mb-3 ml-3"
            @click="register"
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardService from "../DashboardService";
import RapportService from "../RapportService";
import ClientService from "../ClientService";

export default {
  data() {
    return {
      msg: null,
      isActive: true,
      date: null,
      id: null,
      email: null,
      nom: null,
      prenom: null,
      password: null,
      adresse: null,
      nomSociete: null,
      pays: null,
      refClient: null,
      telephone: null,
      ville: null,
      dataClients: [],
      filename: null,
      tableTrue: false,
      flagRegistre: false,
      flagSucces: false,
      flagEchec: false,
      flagShowTableClients: false,
    };
  },

  methods: {

    //Active Account
    desactive(clientId) {
          ClientService.desactive(clientId)  
          .then((data) => {
             this.flagEchec = true
             this.msg = data.msg
          })
          .catch((error) => {
              console.error(`HTTP error: ${error.name} => ${error.message}`);
              throw "fail request at: GET /refreshtime";
            });
    },
    //Active Account
    active(clientId) {
          ClientService.active(clientId)  
          .then((data) => {
             this.flagSucces = true
             this.msg = data.msg
          })
          .catch((error) => {
              console.error(`HTTP error: ${error.name} => ${error.message}`);
              throw "fail request at: GET /refreshtime";
            });
    },
    
    // register client
    register() {
      const token = sessionStorage.getItem("token");
      ClientService.register(
        this.nom,
        this.prenom,
        this.email,
        this.password,
        this.adresse,
        this.ville,
        this.pays,
        this.telephone,
        this.refClient,
        this.nomSociete,
        token
      )
        .then((data) => {
          if (data) {
            this.msg = data.msg;

            if (data.status == "succes") {
              this.flagRegistre = false
              this.flagSucces = true
              this.flagEchec = false
            }

            if (data.status == "echec") {
              this.flagEchec = true
              this.flagSucces = false
            }
          }
        })
        .catch((error) => {
          console.error(`HTTP error: ${error.name} => ${error.message}`);
          throw "fail request at: GET /refreshtime";
        });
    },
    // deconnecter Compte
    deconnecter() {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("id");
      sessionStorage.removeItem("user");
      this.$router.push("/").catch(() => {});
    },
    // Afficher les rapport & Show Rapport
    showRapport() {
      this.tableTrue = !this.tableTrue;
      if (this.tableTrue == false) {
        this.data = [];
      }
      if (this.tableTrue == true) {
        this.id = sessionStorage.getItem("id");
        DashboardService.showRapport(this.id)
          .then((data) => {
            if (data) {
              data.rapports.forEach((e) => {
                this.data.push(e);
              });
            }
          })
          .catch((error) => {
            console.error(`HTTP error: ${error.name} => ${error.message}`);
            throw "fail request at: GET /refreshtime";
          });
      }
    },

    // download pdf with client
    download(filename) {
      this.filename = filename;
      RapportService.getRapport(this.filename)
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(`HTTP error: ${error.name} => ${error.message}`);
          throw "fail request at: GET /refreshtime";
        });
    },
  },

  mounted() {

    const token = sessionStorage.getItem("token");

    // Get Auth Account Admin
      DashboardService.getAdmin(token)
      .then((data) => {
        if (data) {
          sessionStorage.setItem("id", data.admin._id);
        }
      })
      .catch((error) => {
        console.error(`HTTP error: ${error.name} => ${error.message}`);
        throw "fail request at: GET /refreshtime";
      });

      // Get All Clients
      ClientService.show()      
      .then((data) => {
              data.client.forEach(e => {
                this.dataClients.push(e);
              });  
      })
      .catch((error) => {
        console.error(`HTTP error: ${error.name} => ${error.message}`);
        throw "fail request at: GET /refreshtime";
      });

    // Generate password auto
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i <= 8; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      this.password += chars.substring(randomNumber, randomNumber + 1);
    }
  },
  created() {

  }
};
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
.dash .container .menuParent {
  width: 25%;
}
.dash .container .tableParent {
  width: 100%;
}
.dash .container .tableParent .table {
  width: 100%;
  font-size: 11px;
}
</style>