<template>
  <div class="dash">
    <div class="container">

<!-- Star Menu       -->
      <div class="menuParent">
        <b-menu>
          <b-menu-list label="Menu">
            <b-menu-item icon="information-outline" label="Clients" v-if="statusAdmin">
              <b-menu-item label="Aperçu" @click="(event) => {this.flagRegistre = false; this.flagShowTableClients = true; this.flagUpdate = false; this.flagSucces = false; this.flagEchec = false ; this.flagUpload = false; this.falgShowRapport= false; this.flagProfileAdmin = false; this.flagShowTableAdmins= false; this.flagRegistreAdmin = false; this.flagHandlerObservation = false; }"></b-menu-item>
              <b-menu-item label="Ajouter un client"  @click="(event) => { this.flagRegistre = true; this.flagShowTableClients = false; this.flagUpdate = false; this.flagUpdate = false; this.flagSucces = false; this.flagEchec = false; this.falgShowRapport = false; this.flagProfileAdmin = false; this.flagShowTableAdmins= false; this.flagRegistreAdmin = false; this.flagHandlerObservation = false; this.nom = ''; this.prenom = ''; this.email = ''; this.password = Math.random().toString(36).slice(-8); this.adresse = ''; this.ville = ''; this.pays = ''; this.telephone = ''; this.refClient = ''; this.nomSociete ='' }"></b-menu-item>
              <b-menu-item label="Les rapports" @click="(event) => { this.falgShowRapport= true ;this.flagRegistre = false; this.flagShowTableClients = false; this.flagUpdate = false; this.flagSucces = false; this.flagEchec = false; this.flagUpload = false; this.flagProfileAdmin = false; this.flagShowTableAdmins= false; this.flagRegistreAdmin =false; this.flagHandlerObservation = false }"> 
                <select  v-model="year" @change="showRapportWithYear">
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2019">2019</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                </select>
              </b-menu-item> 
            </b-menu-item>

            <b-menu-item icon="information-outline" label="Des employés" v-if="statusAdmin">
              <b-menu-item label="Aperçu" @click="(event) => { this.flagShowTableAdmins=true; this.flagRegistre = false; this.flagShowTableClients = false; this.flagUpdate = false; this.flagSucces = false; this.flagEchec = false ; this.flagUpload = false; this.falgShowRapport= false; this.flagProfileAdmin = false; this.flagRegistreAdmin= false; this.flagHandlerObservation = false }"></b-menu-item>
              <b-menu-item label="Ajouter un admin" @click="(event) => { this.flagRegistreAdmin = true; this.flagShowTableAdmins=false; this.flagRegistre = false; this.flagShowTableClients = false; this.flagUpdate = false; this.flagSucces = false; this.flagEchec = false ; this.flagUpload = false; this.falgShowRapport= false; this.flagProfileAdmin = false; this.nom = ''; this.prenom = ''; this.email = ''; this.password = Math.random().toString(36).slice(-8); this.refEmp = ''; this.status = ''; this.flagHandlerObservation = false }"></b-menu-item>
            </b-menu-item>

            <b-menu-item icon="account" label="Observation" @click="handelObservation()">
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
                <th>Référence Rapport</th>
                <th>Désignation</th>
                <th>Responsable Client</th>
                <th>Date Production Contrôle</th>
                <th>Date d'intervention</th>
                <th>Type Rapport</th>
                <th>Actions</th>
                <th v-if="statusAdmin">Confirmation</th>
                
              </tr>
            </thead>
            <tbody>
              <tr v-for="rapport in clientRapports" :key="rapport._id">
                  <td>{{ rapport.referenceRapport }}</td>
                  <td>{{ rapport.designation }}</td>
                  <td>{{ rapport.responsableClient }}</td>
                  <td>{{ rapport.dateProductionControle }}</td>
                  <td>{{ rapport.dateIntervention }}</td>
                  <td>{{ rapport.category }}</td>
                  <td>
                    <ul class="list-group">
                      <li class="list-group-item">{{rapport.filename}} <a @click="getRapport(rapport.filename)"> <i class="fa-solid fa-download"></i></a> <a @click="deleteRapport(rapport.filename)"> <i class="fa-solid fa-trash"></i></a>  </li>
                    </ul>
                  </td>
                  <td v-if="statusAdmin"> <button type="button" class="btn btn-primary btn-sm" v-if="rapport.confirmation == 0" @click="validerRapport(rapport.clientId, rapport._id)"> valider </button> <h6 v-if="rapport.confirmation == 1">déjà validé</h6> </td>
                  
              </tr>
            </tbody>
          </table>

<!-- End Table Show Rapport -->

<!-- Start table Show Observation -->
          <table class="table ml-3" v-if="flagHandlerObservation">
            <thead>
              <tr>
                <th scope="col">Email</th>
                <th scope="col">téléphone</th>
                <th scope="col">Message</th>
                <th scope="col">ACTIONS</th>

              </tr>
            </thead>
            <tbody>
              <tr v-for="element in dataObservations" :key="element._id">
                <td>{{element.email}}</td>
                <td>{{element.telephone}}</td>
                <td>{{element.message}}</td>
                <td><a @click="lu(element._id)"><i class="fa-solid fa-check"></i></a> </td>
              </tr>
            </tbody>
          </table>

<!-- End Table Show Observation -->


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

        <div class="registre" v-if="flagUpload">
          <div class="form-floating mb-3 ml-3 col-10">
            <h1>Ajouter un fichier Pdf</h1>
          </div>

          <input type="hidden" v-model="clientIdupload"/>

          <div class="form-floating mb-3 ml-3 col-10">
            <input
              type="text"
              class="form-control"
              v-model="referenceRapport"
              placeholder="Référence de Rapport"
            />
            <label for="Référence de Rapport">Référence de Rapport</label>
          </div>

          <div class="form-floating mb-3 ml-3 col-10">
            <input
              type="text"
              class="form-control"
              v-model="designation"
              placeholder="Désignation"
            />
            <label for="Désignation">Désignation</label>
          </div>

          <div class="form-floating col-10 mb-3 ml-3">
            <input
              type="date"
              class="form-control"
              v-model="dateIntervention"
              placeholder="Date d'intervention "
            />
            <label for="Date d'intervention ">Date d'intervention </label>
          </div>

          <div class="form-floating col-10 mb-3 ml-3">
            <input
              type="text"
              class="form-control"
              v-model="responsableClient"
              placeholder="responsable clientèle"
              
            />
            <label for="responsable clientèle">Responsable clientèle</label>
          </div>

          <div class="form-floating col-10 mb-3 ml-3">
            <input
              type="date"
              class="form-control"
              v-model="dateProductionControle"
              placeholder="Date Production Contrôle"
            />
            <label for="Date Production Contrôle">Date Production Contrôle</label>
          </div>

          <div class="form-floating col-10 mb-3 ml-3">
            <select class="form-select" aria-label="Default select example" v-model="category" placeholder="Catégorie" @change="handelFlagConroleReglInsTech()">
              <option value="Contrôle réglementations installations techniques" >Contrôle réglementations installations techniques</option>
              <option value="Contrôle des risques travailleur">Contrôle des risques travailleur</option>
              <option value="Contrôle environnement de taux">Contrôle environnement de taux</option>
              <option value="Formation reglementaires">Formation reglementaires</option>
            </select>
          </div>

          <div class="form-floating col-10 mb-3 ml-3" v-if="!flagConroleReglInsTech">
            <input type="file" class="form-control" placeholder="Fichier PDF" ref="file" @change="previewFiles"/>
            <label for="Fichier PDF">Fichier PDF</label>
          </div>

          <div class="form-floating col-10 mb-3 ml-3" v-if="flagConroleReglInsTech">
            <input type="file" class="form-control" placeholder="Fichier PDF"  ref="one" @change="previewFilesOne"/>
            <label for="Fichier PDF">Contrôle installations ascenseurs</label>
          </div>

          <div class="form-floating col-10 mb-3 ml-3" v-if="flagConroleReglInsTech">
            <input type="file" class="form-control" placeholder="Fichier PDF" ref="tow"  @change="previewFilesTow"/>
            <label for="Fichier PDF"> Contrôle accessoires et appareil de l'usage </label>
          </div>

          <div class="form-floating col-10 mb-3 ml-3" v-if="flagConroleReglInsTech">
            <input type="file" class="form-control" placeholder="Fichier PDF" ref="tree" @change="previewFilesTree"/>
            <label for="Fichier PDF">Contrôle dispositif incendie</label>
          </div>

          <div class="form-floating col-10 mb-3 ml-3" v-if="flagConroleReglInsTech">
            <input type="file" class="form-control" placeholder="Fichier PDF" ref="four" @change="previewFilesFour"/>
            <label for="Fichier PDF">Contrôle appareil à pression</label>
          </div>

          <div class="form-floating col-10 mb-3 ml-3" v-if="flagConroleReglInsTech">
            <input type="file" class="form-control" placeholder="Fichier PDF" ref="five" @change="previewFilesFive"/>
            <label for="Fichier PDF">Autre contrôle</label>
          </div>

          <button
            type="button"
            class="btn btn-danger mb-3 ml-3"
            @click="upload"
          >
            Enregistrer 
          </button>

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



<!-- Start Form  Register Client -->

      <div class="registre" v-if="flagRegistre">
          <div class="form-floating mb-3 ml-3 col-10">
            <h1>Ajouter un client</h1>
          </div>
          <div class="form-floating mb-3 ml-3 col-10">
            <input
              type="text"
              class="form-control"
              v-model="nom"
              placeholder="Nom ,Admin"
            />
            <label for="Nom, Admin">Nom</label>
          </div>
          <div class="form-floating mb-3 ml-3 col-10">
            <input
              type="text"
              class="form-control"
              v-model="prenom"
              placeholder="Prénom, Admin"
            />
            <label for="Prénom, Admin">Prénom </label>
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
              placeholder="Société"
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
                        <option value="1">Super Admin</option>
                        <option value="0">Sub Admin</option>
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
      file: null,
      clientRapports: [],
      clients: [],
      adminId: null,
      refEmp: null,
      flagShowTableAdmins : false,
      dataAdmins : [],
      flagRegistreAdmin: false,
      code : null,
      status: null,
      flagHandlerObservation : false,
      dataObservations : [],
      category : null,
      dateProductionControle: null,
      responsableClient : null,
      dateIntervention : null,
      designation : null,
      referenceRapport : null,
      flagConroleReglInsTech : false,
      year : null,
      statusAdmin : false
      
    };
  },

  methods: {

    // valider Rapport by Admin
    validerRapport(clientId, rapportId) {

      RapportService.validerRapport(clientId, rapportId)
      .then((data) => {
          this.flagSucces = true
          this.msg = data.msg
          setTimeout(() => {
                 this.$router.go(this.$router.currentRoute);
            },300)
      })
      .catch((error) => {
          console.error(`HTTP error: ${error.name} => ${error.message}`);
          throw "fail request at: GET /refreshtime";
      })
      
    },
    // show Rapport with year 
    showRapportWithYear() {
      this.clientRapports = [];
      RapportService.showRapportWithYear(this.year)
      .then((data) => {
        if(data) {
          data.rapport.forEach(e => {
             this.clientRapports.push(e)
          })
        }
      })
      .catch((error) => {
        console.log(error)
      });
    },
    // handel Cntrole Regle Installation Tech
    handelFlagConroleReglInsTech() {
      if(this.category == "Contrôle réglementations installations techniques"){
       this.flagConroleReglInsTech = true
      } else {
        this.flagConroleReglInsTech = false
      }
    },
    // lu message 
    lu(observationId) {
       ClientService.lu(observationId)
       .then((data) => {
            this.flagSucces = true
            this.msg = data.msg
            setTimeout(() => {
                 this.$router.go(this.$router.currentRoute);
            },300)
       })
       .catch((error) => {
            console.log(error)
       })
    },
    // handler Observation 
      handelObservation() {

              this.flagSucces = false
              this.flagEchec = false
              this.falgShowRapport = false
              this.flagShowTableClients = false
              this.flagUpload = false
              this.flagUpdate = false
              this.flagRegistre = false
              this.flagProfileAdmin = false
              this.flagShowTableAdmins = false
              this.flagRegistreAdmin = false
              this.flagHandlerObservation = true

      },
     // register Admin 
     registerAdmin() {
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
              this.flagHandlerObservation = false
              
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
             this.flagHandlerObservation = false
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

    previewFilesOne() {
      
       this.file = this.$refs.one.files[0];
    },

    previewFilesTow() {
       this.file = this.$refs.tow.files[0];
    },

    previewFilesTree() {
       this.file = this.$refs.tree.files[0];
    },

    previewFilesFour() {
       this.file = this.$refs.four.files[0];
    },

    previewFilesFive() {
       this.file = this.$refs.five.files[0];
    },

 
    // upload file pdf
    upload() {

        const adminId = sessionStorage.getItem("id");
        RapportService.insertRapport(adminId, this.file, this.clientIdupload, this.referenceRapport, this.designation, this.dateIntervention, this.responsableClient, this.dateProductionControle, this.category)
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
             this.flagHandlerObservation = false

             
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
        this.flagHandlerObservation = false



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
              this.flagHandlerObservation = false
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
             this.flagHandlerObservation = false

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
             this.flagHandlerObservation = false

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
             this.flagHandlerObservation = false

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
             this.flagHandlerObservation = false

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
             this.flagHandlerObservation = false

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
              this.flagHandlerObservation = false
              
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
      if(sessionStorage.getItem('status'))
      {
          sessionStorage.removeItem("status");
      }
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

    if(!token)
    {
            this.$router.push('/admin');
    }

      // Get Auth Account Admin
      DashboardService.getAdmin(token)
      .then((data) => {
        if (data) {
          sessionStorage.setItem("id", data.admin._id);
          if(data.admin.status == 1)
          {
            this.statusAdmin = true
          }
        } else {
            this.$router.push('/admin');
        }
      })
      .catch((error) => {
        console.error(`HTTP error: ${error.name} => ${error.message}`);
      });

    // show all Observations
      ClientService.observations()      
      .then((data) => {
          //  data.observation.filter((e) => {
          //    ths.dataObservations.push(e);
          //  })
            data.observation.filter((e) => {
              if(e.lu == false)
               {
                 this.dataObservations.push(e);
               }
           })

           
      })
      .catch((error) => {
        console.error(`HTTP error: ${error.name} => ${error.message}`);
        throw "fail request at: GET /refreshtime";
      });

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
  height: 100vh;
}
.dash .container .menuParent {
  width: 25%;
  margin-top: 90px;

}
.dash .container .tableParent {

  width: 100%;
  margin-top: 100px;

}
.dash .container .tableParent .table {
  width: 100%;
  font-size: 11px;
}
</style>