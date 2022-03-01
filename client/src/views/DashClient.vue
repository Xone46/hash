<template>
  <div class="dash">
    <div class="container">
      <!-- Start Menu -->
      <div class="menuParent">
        <b-menu>
          <b-menu-list label="Pdf">
            <b-menu-item label="Mes Rapport" @click="showRapport"></b-menu-item>
          </b-menu-list>
          <b-menu-list label="Services">
            <b-menu-item
              label="Observation"
              @click="handelObservation"
            ></b-menu-item>
          </b-menu-list>
          <b-menu-list label="Actions">
            <b-menu-item
              label="Se déconnecter"
              @click="deconnecter"
            ></b-menu-item>
          </b-menu-list>
        </b-menu>
      </div>
      <!-- End Menu -->

      <div class="tableParent">
        <!-- Start flag Success         -->
        <b-message
          class="ml-5"
          title="Success"
          type="is-success"
          aria-close-label="Close message"
          v-if="flagSucces"
        >
          {{ msg }}
        </b-message>
        <!-- End flag Success         -->

        <!-- Start flag Echec -->
        <b-message
          class="ml-5"
          title="Success"
          type="is-danger"
          aria-close-label="Close message"
          v-if="flagEchec"
        >
          {{ msg }}
        </b-message>
        <!-- End flag Echec -->

        <!-- Table Rapports client  -->
        <table class="table" v-if="tableTrue">
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
              <th>{{ element._id }}</th>
              <td>{{ element.titre }}</td>
              <td>{{ element.description }}</td>
              <td>{{ Date(element.date) }}</td>
              <td @click="download(element.filename)">
                <i class="fa-solid fa-download"></i>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- End Table Rapports Client -->

        <!-- Start Form Observation  -->
        <div class="registre ml-3" v-if="flagObservation">
          <div class="form-floating mb-3 ml-3 col-10">
            <h1>Observation</h1>
          </div>

          <div class="form-group">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
              cols="50"
              v-model="message"
            ></textarea>
          </div>

          <button
            type="button"
            class="btn btn-success mt-3 ml-3"
            @click="observation"
          >
            Envoyer
          </button>
        </div>
        <!-- End Form Observation -->
      </div>
    </div>
  </div>
</template>

<script>
import ClientService from "../ClientService";
import DashboardService from "../DashboardService";
import RapportService from "../RapportService";

export default {
  data() {
    return {
      isActive: true,
      adresse: null,
      date: null,
      id: null,
      email: null,
      nom: null,
      nomSociete: null,
      pays: null,
      prenom: null,
      refClient: null,
      telephone: null,
      ville: null,
      data: [],
      filename: null,
      tableTrue: false,
      flagObservation: false,
      message: null,
      msg: null,
      clientId: null,
      flagSucces: false,
      flagEchec: false,
    };
  },

  computed: {},

  methods: {
    // handel Observation
    handelObservation() {
      this.data = [];
      this.flagObservation = true;
      this.tableTrue = false;
    },
    // observation

    observation() {
      this.clientId = sessionStorage.getItem("id");

      ClientService.send(this.clientId, this.message)
        .then((data) => {
          if (data.status == "succes") {
            this.msg = data.msg;
            this.flagSucces = true;
            this.flagObservation = false;
          } else {
            this.msg = data.msg;
            this.flagEchec = true;
            this.flagObservation = false;
          }
        })
        .catch((error) => {
          console.log(error);
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
      this.flagObservation = false;
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

    if (!token) {
      this.$router.push("/client").catch(() => {});
    }
   //Auth Client and get Auth
    DashboardService.getClient(token)
      .then((data) => {
        if (data) {
          this.nom = data.client.nom, 
          this.prenom = data.client.prenom;
          sessionStorage.setItem("id", data.client._id);
        } else {
               this.$router.push("/client").catch(() => {});
        }
      })
      .catch((error) => {
        console.error(`HTTP error: ${error.name} => ${error.message}`);
        throw "fail request at: GET /refreshtime";
      });
  },
};
</script>

<style>
.dash {
  height: 100%;
  margin-top: 0px;
  padding: 0;
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
.dash .container .tableParent table {
  width: 100%;
}
.registre {
  width: 100%;
}
</style>