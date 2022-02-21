<template>
  <div class="dash">
    <div class="container">

<!-- Star Menu       -->
      <div class="menuParent">
        <b-menu>
          <b-menu-list label="Menu">
            <b-menu-item icon="information-outline" label="Clients">
              <b-menu-item label="Ajouter un client" @click="(event) => {
                this.flagRegistre = true
                this.flagShowTableClients = false
                this.flagUpdate = false 
                this.flagUpdate = false
                this.flagSucces = false
                this.flagEchec = false
                this.falgShowRapport = false
                this.flagProfileAdmin = false
                this.flagShowTableAdmins= false
                this.flagRegistreAdmin = false
                this.nom = ''
                this.prenom = ''
                this.email = ''
                this.password = Math.random().toString(36).slice(-8)
                this.adresse = ''
                this.ville = ''
                this.pays = ''
                this.telephone = ''
                this.refClient = ''
                this.nomSociete =''
                }">
              </b-menu-item>
              <b-menu-item label="Aperçu" @click="(event) => {this.flagRegistre = false; this.flagShowTableClients = true; this.flagUpdate = false; this.flagSucces = false; this.flagEchec = false ; this.flagUpload = false; this.falgShowRapport= false; this.flagProfileAdmin = false; this.flagShowTableAdmins= false; this.flagRegistreAdmin = false; }"></b-menu-item>
              <b-menu-item label="Les rapports" @click="(event) => { this.falgShowRapport= true ;this.flagRegistre = false; this.flagShowTableClients = false; this.flagUpdate = false; this.flagSucces = false; this.flagEchec = false; this.flagUpload = false; this.flagProfileAdmin = false; this.flagShowTableAdmins= false; this.flagRegistreAdmin =false }"></b-menu-item>  
            </b-menu-item>

            <b-menu-item icon="information-outline" label="Des employés">
              <b-menu-item label="Aperçu" @click="(event) => { this.flagShowTableAdmins=true; this.flagRegistre = false; this.flagShowTableClients = false; this.flagUpdate = false; this.flagSucces = false; this.flagEchec = false ; this.flagUpload = false; this.falgShowRapport= false; this.flagProfileAdmin = false; this.flagRegistreAdmin= false }"></b-menu-item>
              <b-menu-item label="Ajouter un admin" @click="(event) => { this.flagRegistreAdmin = true; this.flagShowTableAdmins=false; this.flagRegistre = false; this.flagShowTableClients = false; this.flagUpdate = false; this.flagSucces = false; this.flagEchec = false ; this.flagUpload = false; this.falgShowRapport= false; this.flagProfileAdmin = false; this.nom = ''; this.prenom = ''; this.email = ''; this.password = Math.random().toString(36).slice(-8); this.refEmp = ''; this.status = '' }"></b-menu-item>
            </b-menu-item>

            <b-menu-item icon="account" label="Mon Compte" @click="profile()">
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
<!-- End Menu -->




<!-- Start flag Success         -->
        <b-message
          class="ml-5"
          title="Success"
          type="is-success"
          aria-close-label="Close message"
          v-if="flagSucces">
          {{ msg }} 
        </b-message>
<!-- End flag Success         -->


<!-- Start flag Echec -->
        <b-message
          class="ml-5"
          title="Success"
          type="is-danger"
          aria-close-label="Close message"
          v-if="flagEchec">
          {{ msg }}
        </b-message>
<!-- End flag Echec -->



<!-- Start table Show Rapport -->
          <table class="table ml-3" v-if="falgShowRapport">
            <thead>
              <tr>
                <th scope="col">Titre</th>
                <th scope="col">Description</th>
                <th scope="col">Nom et Prenom</th>
                <th scope="col">Référence</th>
                <th scope="col">téléphone</th>
                <th scope="col">Société</th>
                <th scope="col">Rapports</th>

              </tr>
            </thead>
            <tbody>
              <tr v-for="client in clientRapports" :key="client._id">
                <td>{{ client.titre }}</td>
                <td>{{client.description}}</td>
                <td>{{client.nom+' '+client.prenom}}</td>
                <td>{{client.refClient}}</td>
                <td>{{client.telephone}}</td>
                <td>{{ client.nomSociete }}</td>
                <td>
                  <ul class="list-group" v-for="rapport in rapports" :key="rapport._id">
                     <li class="list-group-item" v-if="client._id == rapport.clientId">{{rapport.filename}} <a @click="getRapport(rapport.filename)"> <i class="fa-solid fa-download"></i></a> <a @click="deleteRapport(rapport.filename)"> <i class="fa-solid fa-trash"></i></a> </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

<!-- End Table Show Rapport -->




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
                <td><a @click="active(element._id)"><i class="fa-solid fa-check"></i></a> <a @click="desactive(element._id)"><i class="fa-solid fa-xmark"></i> </a><a @click="handelUpdate(element._id)"> <i class="fa-solid fa-pencil" ></i></a><a @click="handelUpload(element._id)"> <i class="fa-solid fa-download"></i></a> </td>
              </tr>
            </tbody>
          </table>

<!-- End Table Show Clients -->



<!-- Start form Upload -->

          <div class="form-floating mb-3 ml-3 col-10" v-if="flagUpload">
            <h1>Ajouter une Pdf</h1><br>
            <input type="file" class="custom-file-input" id="validatedCustomFile" ref="file" @change="previewFiles" required>
            <button type="button" class="btn btn-primary" @click="upload">Ajouter Pdf</button>
            <input type="hidden" v-model="clientIdupload"/>
          </div> 

<!-- End form Upload -->



<!-- Start update client -->
      <div class="registre" v-if="flagUpdate">
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
              type="password"
              class="form-control"
              v-model="password"
              placeholder="Mot de pass"
              disabled
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
          <input
              type="hidden"
              class="form-control"
              v-model="clientIdupdate"
              placeholder="Nom de société"
            />

          <button
            type="button"
            class="btn btn-danger mb-3 ml-3"
            @click="update"
          >
            Modifier 
          </button>
        </div>



<!-- End update Client -->



<!-- Start Form  Register Admin -->

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
            class="btn btn-success mb-3 ml-3"
            @click="register"
          >
            Ajouter
          </button>
        </div>
        <!-- End Form Register Client -->


        <!-- Profile Admin -->
            <ul class="list-group ml-3" v-if="flagProfileAdmin">
              <li class="list-group-item active" aria-current="true">Nom et Prénom : {{ nom+" "+prenom}}</li>
              <li class="list-group-item"> Email : {{email}}</li>
              <li class="list-group-item"> Référence employeur : {{refEmp}}</li>

            </ul>
          <!-- Profile Admin -->


          <!-- Start Table Admin -->
               <table class="table ml-3" v-if="flagShowTableAdmins">
                <thead>
                  <tr>
                    <th scope="col">Nom et Prénom </th>
                    <th scope="col">Email</th>
                    <th scope="col">Référence</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="element in dataAdmins" :key="element._id">
                    <td>{{element.nom+' '+element.prenom}}</td>
                    <td>{{element.email}}</td>
                    <td>{{element.refEmp}}</td>
                    <td>{{ element.status == 1 ? 'Active' : 'Desctive' }}</td>
                    <td><a @click="activeAdmin(element._id)"><i class="fa-solid fa-check"></i></a> <a @click="desactiveAdmin(element._id)"><i class="fa-solid fa-xmark"></i> </a><a @click="handelUpdateAdmin(element._id)"> <i class="fa-solid fa-pencil" ></i></a> </td>
                  </tr>
                </tbody>
              </table>
          <!-- End Table Admin -->

          <!-- Start Ajouter un Admin -->
                  <div class="registre" v-if="flagRegistreAdmin">
                    <div class="form-floating mb-3 ml-3 col-10">
                      <h1>Ajouter un Admin</h1>
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
                        v-model="refEmp"
                        placeholder="Référence employeur"
                      />
                      <label for="Référence employeur">Référence employeur</label>
                    </div>
                    <div class="form-floating col-10 mb-3 ml-3">
                      <select class="form-control" id="exampleFormControlSelect1" v-model="status">
                        <option value="1">Active</option>
                        <option value="0">Desactive</option>
                      </select>
                      <label for="Status employeur">Status employeur</label>
                    </div>

                    <div class="form-floating col-10 mb-3 ml-3">
                      <input
                        type="password"
                        class="form-control"
                        v-model="code"
                        placeholder="code"
                      />
                      <label for="code">Code Authentification</label>
                    </div>

                    <button
                      type="button"
                      class="btn btn-success mb-3 ml-3"
                      @click="registerAdmin"
                    >
                      Ajouter un Admin
                    </button>
                  </div>
                    <!-- End Ajouter Admin -->


                </div>
               </div>

    



  </div>
</template>

<script>
import DashboardService from "../DashboardService";
import RapportService from "../RapportService";
import ClientService from "../ClientService";
import AdminService from "../AdminService";

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
      flagUpdate: false,
      flagUpload : false,
      falgShowRapport :false,
      flagProfileAdmin : false,
      clientIdupdate: null,
      clientIdupload: null,
      file : null,
      clientRapports: [],
      rapports: [],
      adminId: null,
      refEmp: null,
      flagShowTableAdmins : false,
      dataAdmins : [],
      flagRegistreAdmin: false,
      code : null,
      status: null,
    };
  },

  methods: {


     // register Admin 
     registerAdmin() {
       console.log(this.nom + ' '+ this.prenom + ' '+ this.email + ' '+ this.password + ' '+ this.refEmp + ' '+ this.status + ' '+ this.code)
      AdminService.register(this.nom, this.prenom, this.email, this.password, this.refEmp, this.status, this.code)
        .then((data) => {
          if (data) {

              this.msg = data.msg;
              this.flagSucces = true
              this.flagEchec = false
              this.falgShowRapport = false
              this.flagShowTableClients = false
              this.flagUpload = false
              this.flagUpdate = false
              this.flagRegistre = false
              this.flagProfileAdmin = false
              this.flagShowTableAdmins = false
              this.flagRegistreAdmin = false
              
          setTimeout(() => {
                 this.$router.go(this.$router.currentRoute)
              }, 3000);    
            
          }
        })
        .catch((error) => {
          console.error(`HTTP error: ${error.name} => ${error.message}`);
          throw "fail request at: GET /refreshtime";
        });

     },

    // delete pdf
    deleteRapport(filename)
    {
      this.filename = filename
       RapportService.deleteRapport(this.filename)
       .then((data) => {
             this.flagSucces = true
             this.flagEchec = false
             this.falgShowRapport = false
             this.flagShowTableClients = false
             this.flagUpload = false
             this.flagUpdate = false
             this.flagRegistre = false
             this.flagShowTableAdmins = false
             this.msg = data.msg
             setTimeout(() => {
                 this.$router.go(this.$router.currentRoute)
              }, 3000); 
          })
          .catch((error) => {
            console.error(`HTTP error: ${error.name} => ${error.message}`);
            throw "fail request at: GET /refreshtime";
          })
    },
    // get pdf 
    getRapport(filename){
      this.filename = filename
        RapportService.getRapport(this.filename)
          .then((data) => {
            console.log(data)
          })
          .catch((error) => {
            console.error(`HTTP error: ${error.name} => ${error.message}`);
            throw "fail request at: GET /refreshtime";
          })
    },

     // previewFiles(pdf)"
    previewFiles() {
       this.file = this.$refs.file.files[0];
    },
      
    // upload file pdf
    upload() {
        RapportService.insertRapport(this.file, this.clientIdupload)
        .then((data) => {
             this.msg = data.msg
             this.flagSucces = true
             this.flagEchec = false
             this.falgShowRapport = false
             this.flagShowTableClients = false
             this.flagUpload = false
             this.flagUpdate = false
             this.flagRegistre = false
             this.flagProfileAdmin = false
             this.flagShowTableAdmins = false
             this.flagRegistreAdmin = false

             
             setTimeout(() => {
                 this.$router.go(this.$router.currentRoute)
              }, 3000); 
        })
        .catch((error) => {
              console.error(`HTTP error: ${error.name} => ${error.message}`);
              throw "fail request at: GET /refreshtime";
        });
    },
    //Handel for Upload
      handelUpload(e) {

        this.clientIdupload = e
        this.flagUpload = true
        this.flagEchec = false
        this.flagSucces = false
        this.falgShowRapport = false
        this.flagShowTableClients = false
        this.flagUpdate = false
        this.flagRegistre = false
        this.flagProfileAdmin = false
        this.flagShowTableAdmins = false
        this.flagRegistreAdmin = false



      },
    // handel Form Update
    handelUpdate(clientId) {
      ClientService.profile(clientId)
      .then((data) => {
        this.clientIdupdate = data.client._id
        this.nom = data.client.nom
        this.prenom = data.client.prenom
        this.email = data.client.email
        this.password = data.client.password
        this.adresse = data.client.adresse
        this.ville = data.client.ville
        this.pays = data.client.pays
        this.telephone = data.client.telephone
        this.refClient = data.client.refClient
        this.nomSociete = data.client.nomSociete
      })
      .catch((error) => {
              console.error(`HTTP error: ${error.name} => ${error.message}`);
              throw "fail request at: GET /refreshtime";
       });
      
     this.flagRegistre = false
     this.flagShowTableClients = false
     this.flagProfileAdmin = false
     this.flagUpdate = true

    },
    // get Admin (profile Admin)
    profile() {
        this.adminId = sessionStorage.getItem("id");
        AdminService.profile(this.adminId)
        .then((data) => {
              this.flagSucces = false
              this.flagEchec = false
              this.falgShowRapport = false
              this.flagShowTableClients = false
              this.flagUpload = false
              this.flagUpdate = false
              this.flagRegistre = false
              this.flagShowTableAdmins = false
              this.flagRegistreAdmin = false
              this.flagProfileAdmin = true
              this.nom = data.admin.nom
              this.prenom = data.admin.prenom
              this.email = data.admin.email
              this.refEmp = data.admin.refEmp
            
        })
        .catch((error) => {
              console.error(`HTTP error: ${error.name} => ${error.message}`);
              throw "fail request at: GET /refreshtime";
        });
    },

   // active Admin  
    activeAdmin(adminId) {
          AdminService.activeAdmin(adminId)  
          .then((data) => {
             this.flagSucces = true
             this.msg = data.msg
             this.flagEchec = false
             this.falgShowRapport = false
             this.flagShowTableClients = false
             this.flagUpload = false
             this.flagUpdate = false
             this.flagRegistre = false 
             this.flagProfileAdmin = false 
             this.flagShowTableAdmins = false
             this.flagRegistreAdmin = false

             setTimeout(() => {
                 this.$router.go(this.$router.currentRoute)
              }, 3000); 
          })
          .catch((error) => {
              console.error(`HTTP error: ${error.name} => ${error.message}`);
              throw "fail request at: GET /refreshtime";
            });
    },

   // Desactive Admin  
    desactiveAdmin(adminId) {
          AdminService.desactiveAdmin(adminId)  
          .then((data) => {
             this.flagEchec = true
             this.msg = data.msg
             this.flagSucces = false
             this.falgShowRapport = false
             this.flagShowTableClients = false
             this.flagUpload = false
             this.flagUpdate = false
             this.flagRegistre = false 
             this.flagProfileAdmin = false 
             this.flagShowTableAdmins = false
             this.flagRegistreAdmin = false

             setTimeout(() => {
                 this.$router.go(this.$router.currentRoute)
              }, 3000); 
          })
          .catch((error) => {
              console.error(`HTTP error: ${error.name} => ${error.message}`);
              throw "fail request at: GET /refreshtime";
            });
    },



   // Update Client
    update(){
       ClientService.update(this.clientIdupdate, this.nom, this.prenom, this.email, this.password, this.adresse, this.ville, this.pays, this.telephone, this.refClient, this.nomSociete)
          .then((data) => {
             this.flagSucces = true
             this.flagEchec = false
             this.falgShowRapport = false
             this.flagShowTableClients = false
             this.flagUpload = false
             this.flagUpdate = false
             this.flagRegistre = false
             this.flagProfileAdmin = false
             this.flagShowTableAdmins = false
             this.flagRegistreAdmin = false

             this.msg = data.msg
             setTimeout(() => {
                 this.$router.go(this.$router.currentRoute)
              }, 3000); 
          })
          .catch((error) => {
              console.error(`HTTP error: ${error.name} => ${error.message}`);
              throw "fail request at: GET /refreshtime";
            });
    },
    
    //Active Account client
    desactive(clientId) {
          ClientService.desactive(clientId)  
          .then((data) => {
             this.flagEchec = true
             this.msg = data.msg
             this.flagSucces = false
             this.falgShowRapport = false
             this.flagShowTableClients = false
             this.flagUpload = false
             this.flagUpdate = false
             this.flagRegistre = false
             this.flagProfileAdmin = false
             this.flagShowTableAdmins = false
             this.flagRegistreAdmin = false

             setTimeout(() => {
                 this.$router.go(this.$router.currentRoute)
              }, 3000); 
          })
          .catch((error) => {
              console.error(`HTTP error: ${error.name} => ${error.message}`);
              throw "fail request at: GET /refreshtime";
            });
    },
    //Active Account client
    active(clientId) {
          ClientService.active(clientId)  
          .then((data) => {
             this.flagSucces = true
             this.msg = data.msg
            this.flagEchec = false
             this.falgShowRapport = false
             this.flagShowTableClients = false
             this.flagUpload = false
             this.flagUpdate = false
             this.flagRegistre = false 
             this.flagProfileAdmin = false 
             this.flagShowTableAdmins = false
             this.flagRegistreAdmin = false

             setTimeout(() => {
                 this.$router.go(this.$router.currentRoute)
              }, 3000); 
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
              this.flagSucces = true
              this.flagEchec = false
              this.falgShowRapport = false
              this.flagShowTableClients = false
              this.flagUpload = false
              this.flagUpdate = false
              this.flagRegistre = false
              this.flagProfileAdmin = false
              
          setTimeout(() => {
                 this.$router.go(this.$router.currentRoute)
              }, 3000);    
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

    //Show All admins
      AdminService.show()      
      .then((data) => {

              data.admin.forEach(e => {
                this.dataAdmins.push(e)
              });  
      })
      .catch((error) => {
        console.error(`HTTP error: ${error.name} => ${error.message}`);
        throw "fail request at: GET /refreshtime";
      });

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



    // Show All rapport
      RapportService.show()
      .then((data) => {
        if (data) {
          data.rapports.forEach(e => {
            this.clientRapports.push(e)
          })

          for(let i = 0 ; i < this.clientRapports.length ; i++ )
          {
               for(let j = 0; j < this.clientRapports[i].rapports.length; j++)
               {
                      this.rapports.push(this.clientRapports[i].rapports[j])
               }
              
          }

        }
      })
      .catch((error) => {
        console.error(`HTTP error: ${error.name} => ${error.message}`);
        throw "fail request at: GET /refreshtime";
      });
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