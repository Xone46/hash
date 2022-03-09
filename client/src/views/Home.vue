<template>
  <div class="home">
    <!-- Start Landing -->
    <div class="landing">
      <div class="container">
        <div
          class="photo"
          v-bind:class="{
            images1: images1,
            images2: images2,
            images3: images3,
            images4: images4,
            images5: images5,
          }"
        >
          <div class="slogan">
            <img src="../assets/logogth.png" alt="" />
            <h1>
              Pour le respect de vos obligations réglementaires et volontaires
            </h1>
            <p>
              Vérifications Réglementaires ou volontaires des installations
              techniques et des risques au travail
            </p>
            <ul>
              <li @click="pictureSlider(1)"></li>
              <li @click="pictureSlider(2)"></li>
              <li @click="pictureSlider(3)"></li>
              <li @click="pictureSlider(4)"></li>
              <li @click="pictureSlider(5)"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- End Landing     -->

    <!-- start Gthconsult -->
    <div class="gthconsult" id="gthconsult">
      <div class="container">
        <div class="board">
          <h1>
            Notre objectif est de répondre à vos obligations réglementaires et
            volontaires
          </h1>
          <h1>GTHCONSULT</h1>
        </div>
        <div class="tab">
          <div class="sum">
            <img src="../assets/risk.png" alt="Maîtrise des risques" />
            <h1>Maîtrise des risques</h1>
            <span
              >Accompagner les chefs d’établissements <br />et les exploitants
              pour répondre à leurs obligations réglementaires ou volontaires en
              matière de gestion des risques professionnels, protection des
              personnes et des biens ainsi que de l’environnement .</span
            >
          </div>
          <div class="sum">
            <img src="../assets/know.png" alt="Maîtrise des risques" />
            <h1>Partage du savoir</h1>
            <span
              >Notre capital est notre savoir-faire, nos compétences et le
              respect de la réglementation. Notre vocation de tierce partie
              indépendante nous impose le partage de ces compétences et de ces
              savoirs entre nos collaborateurs, avec nos clients et les
              institutions.</span
            >
          </div>
          <div class="sum">
            <img src="../assets/quality.png" alt="Interlocuteur privilégié" />
            <h1>Interlocuteur privilégié</h1>
            <span
              >Mettre à la disposition de notre client <br />un interlocuteur
              unique habilité à prendre toute décisions pour garantir la qualité
              <br />
              de nos prestations, le respect de nos engagements et notre
              disponibilité pour nos clients.</span
            >
          </div>
          <div class="sum">
            <h1>Nos valeurs</h1>
            <img src="../assets/valeur.png" alt="Nos valeurs" />
          </div>
        </div>
      </div>
    </div>
    <!-- end gthconsult -->

    <!-- start métier -->
    <div class="metier" id="metier">
      <h1>Le leader des Bureau de Contrôle</h1>
      <h1>Notre métier</h1>
      <div class="container">
        <p>
          <span>GTHCONSULT </span> est un bureau de contrôle créé par deux
          ingénieurs agréés et pluridisciplinaires. Sa mission est d’accompagner
          les chefs d’établissements et les exploitants pour répondre à leurs
          obligations réglementaires ou volontaires en matière de contrôles
          réglementaires des installations techniques, gestion des risques
          professionnels, protection des personnes, des biens et de
          l’environnement.
        </p>
      </div>
    </div>

    <!-- end métier -->

    <!-- start prestation -->
    <div class="prestation" id="prestation">
      <h1 alt="GTHCONSULT La confiance et l'efficacité"> GTHCONSULT La confiance et l'efficacité</h1>
      <h1>Nos prestations</h1>
      <div class="container">
        <ul>
          <li
            @click="
              () => {
                this.flagOne = !this.flagOne;
              }
            "
          >
            <span>Contrôles réglementaires des installations techniques</span
            ><img
              src="../assets/bottom.png"
              alt="Contrôles réglementaires des installations techniques"
            />
            <ul v-if="flagOne">
              <li>
                <img src="../assets/left-direction.png" alt="" /> Contrôle
                réglementaire des machines et engin de chantiers (référentiel
                Marocain)
              </li>
              <li>
                <img src="../assets/left-direction.png" alt="" />Contrôle de la
                conformité CE et risques machines (référentiel européen)
              </li>
              <li>
                <img src="../assets/left-direction.png" alt="" />Contrôle
                réglementaire des installations électriques
              </li>
              <li>
                <img src="../assets/left-direction.png" alt="" />Contrôle par
                thermographie infrarouge
              </li>
              <li>
                <img src="../assets/left-direction.png" alt="" />Contrôle par
                thermographie infrarouge avec délivrance attestation Q19
              </li>
              <li>
                <img src="../assets/left-direction.png" alt="" />Contrôle
                réglementaire des accessoires et appareils et de levage
              </li>
              <li>
                <img src="../assets/left-direction.png" alt="" />Contrôle
                réglementairedes installation d’ascenseurs et monte-charges
                accompagnés
              </li>
              <li>
                <img src="../assets/left-direction.png" alt="" />Contrôle des
                Éoliennes (inspecteurs certifiés GWO)
              </li>
              <li>
                <img src="../assets/left-direction.png" alt="" />Contrôle
                réglementaire des dispositifs incendie, désenfumage, sprinklage
                et grande cuisines
              </li>
              <li>
                <img src="../assets/left-direction.png" alt="" />Contrôle
                réglementaires des appareil à pression de gaz et vapeur
              </li>
              <li>
                <img src="../assets/left-direction.png" alt="" />Contrôle
                réglementaires : Rayonnage, portes et portails, quais niveleurs
                et lignes de vie
              </li>
            </ul>
          </li>
          <li
            @click="
              () => {
                this.flagTow = !this.flagTow;
              }
            "
          >
            <span>Contrôles risques travailleurs</span
            ><img src="../assets/bottom.png" alt="" />
            <ul v-if="flagTow">
              <li>
                <img src="../assets/left-direction.png" alt="" />Mesures des
                doses de bruits absorbées par les travailleurs
              </li>
              <li>
                <img src="../assets/left-direction.png" alt="" />Mesures des
                taux d’éclairement aux postes de travail
              </li>
              <li>
                <img src="../assets/left-direction.png" alt="" />Contrôles de la
                qualité de l’air intérieur
              </li>
              <li>
                <img src="../assets/left-direction.png" alt="" />Mesures des
                taux de vibrations absorbés par les travailleurs
              </li>
              <li>
                <img src="../assets/left-direction.png" alt="" />Contrôle de la
                légionnelle
              </li>
              <li>
                <img src="../assets/left-direction.png" alt="" />Contrôle de la
                potabilité de l’eau
              </li>
            </ul>
          </li>
          <li
            @click="
              () => {
                this.flagTree = !this.flagTree;
              }
            "
          >
            <span>Contrôles environnementaux</span
            ><img src="../assets/bottom.png" alt="" />
            <ul v-if="flagTree">
              <li>
                <img src="../assets/left-direction.png" alt="" />Contrôle des
                rejets atmosphériques
              </li>
              <li>
                <img src="../assets/left-direction.png" alt="" />Contrôle des
                rejets liquides
              </li>
              <li>
                <img src="../assets/left-direction.png" alt="" />Contrôle de la
                nuisance sonore
              </li>
            </ul>
          </li>
          <li
            @click="
              () => {
                this.flagFour = !this.flagFour;
              }
            "
          >
            <span>Audits et assistances techniques </span
            ><img src="../assets/bottom.png" alt="" />
            <ul v-if="flagFour">
              <li>
                <img src="../assets/hand.png" />Audits et assistances techniques
                pour l’élaboration des besoins, validation des plans et notes de
                calculs<br />
                suivi des travaux d’exécutions concernant les installations
                techniques :
                <ul>
                  <li>
                    <img
                      src="../assets/left-direction.png"
                      alt=""
                    />installations électriques
                  </li>
                  <li>
                    <img
                      src="../assets/left-direction.png"
                      alt=""
                    />Installation d’ascenseur et monte-charges
                  </li>
                  <li>
                    <img src="../assets/left-direction.png" alt="" />Appareils
                    de levage et lignes de vie
                  </li>
                  <li>
                    <img src="../assets/left-direction.png" alt="" />Rayonnage,
                  </li>
                </ul>
              </li>
              <li>
                <img src="../assets/hand.png" />Machines CE :
                <ul>
                  <li>
                    <img src="../assets/left-direction.png" alt="" />Analyse des
                    risque
                  </li>
                  <li>
                    <img src="../assets/left-direction.png" alt="" />Validation
                    du dossier technique
                  </li>
                  <li>
                    <img src="../assets/left-direction.png" alt="" />Validation
                    de la notice d’instruction
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li
            @click="
              () => {
                this.flagFive = !this.flagFive;
              }
            "
          >
            <span>Formations réglementaires et techniques</span
            ><img src="../assets/bottom.png" alt="" />
            <ul v-if="flagFive">
              <li>
                <img src="../assets/hand.png" />Habilitation électriques :
                <ul>
                  <li>
                    <img src="../assets/left-direction.png" alt="" />Personnel
                    électricien et non électricien
                  </li>
                  <li>
                    <img src="../assets/left-direction.png" alt="" />Formation
                    initiale et recyclage
                  </li>
                  <li>
                    <img src="../assets/left-direction.png" alt="" />Maintenance
                    des installations ATEX
                  </li>
                  <li>
                    <img src="../assets/left-direction.png" alt="" />Différents
                    types d’habilitation électrique
                  </li>
                </ul>
              </li>
              <li>
                <img src="../assets/hand.png" />Autorisation de conduite ou
                CACES :
                <ul>
                  <li>
                    <img src="../assets/left-direction.png" alt="" />Chariot
                    automoteur
                  </li>
                  <li>
                    <img src="../assets/left-direction.png" alt="" />Pont
                    roulant
                  </li>
                  <li>
                    <img src="../assets/left-direction.png" alt="" />Nacelle
                  </li>
                  <li><img src="../assets/left-direction.png" alt="" />PEMP</li>
                  <li>
                    <img src="../assets/left-direction.png" alt="" />Engins de
                    chantier
                  </li>
                </ul>
              </li>
              <li>
                <img src="../assets/hand.png" />Formation incendie :
                <ul>
                  <li>
                    <img src="../assets/left-direction.png" alt="" />Evacuation
                    : guide-files et serre-files, exercices d’évacuation
                  </li>
                  <li>
                    <img src="../assets/left-direction.png" alt="" />Equipier de
                    première intervention
                  </li>
                  <li>
                    <img src="../assets/left-direction.png" alt="" />Equipier de
                    second intervention
                  </li>
                </ul>
              </li>
              <li>
                <img src="../assets/hand.png" />Sauveteurs secouristes du
                travail
              </li>
              <li><img src="../assets/hand.png" />Travail en hauteur</li>
              <li><img src="../assets/hand.png" />Gestes et postures</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <!-- end prestation -->



     <!-- Start Realistaion  -->



    <div class="realisations">
      <h1>PROJETS ACHEVÉS</h1>
      <div class="container">
        <div class="left">
          <div><img src="../assets/left.png" alt="" @click="leftPicture()"></div>
        </div>
        <div class="slider">
          <div class="photo" v-bind:class="{ imageProject1: imageProject1, imageProject2: imageProject2, imageProject3: imageProject3, imageProject4: imageProject4, imageProject5: imageProject5 }"></div>
        </div>
        <div class="right">
           <div><img src="../assets/right.png" alt="" @click="rightPicture()"></div>
        </div>
      </div>
    </div>





    <!-- End Realisation -->









    <!-- start contacter -->
    <div class="contact" id="contact">
      <h1>Nous sommes à votre service</h1>
      <h1>Contactez-nous</h1>
      <div class="container">
        <div class="form">
          <p v-if="status != null">{{ msg }}</p>
          <form action="">
            <input type="text" placeholder="Nom" v-model="nom" />
            <input type="text" placeholder="Prénom" v-model="prenom" />
            <input type="text" placeholder="Téléphone" v-model="telephone" />
            <input type="text" placeholder="E-mail" v-model="email" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="écrivez votre message ici"
              v-model="message"
            ></textarea>
            <input
              type="button"
              value="Envoyer"
              class="button"
              @click="envoyer()"
            />
          </form>
        </div>

        <div class="adresse">
          <h3>Informations de contact</h3>
          <ul>
            <li>
              <i class="fa-solid fa-location-dot"></i
              ><span>
                Bd Mohammed 6 Lot Al massira 3<sup>ème</sup> Étage Appartement
                N<sup>o</sup> 09, Mohammédia, Maroc</span
              >
            </li>
            <li>
              <i class="fa-solid fa-phone"></i><span> +212 5 23 27 27 74</span>
            </li>
            <li>
              <i class="fa-solid fa-print"></i><span> +212 5 23 27 29 79</span>
            </li>
            <li>
              <span> Website : www.gthconsult.ma | www.gthconsult.com</span>
            </li>
          </ul>
          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13277.758576351749!2d-7.3662913!3d33.697571!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3e969925cc12ea26!2sGTH%20Consult!5e0!3m2!1sar!2sma!4v1646570156563!5m2!1sar!2sma"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div class="footer" id="footer">
        <div class="container">
          <div class="left">
            <img src="../assets/logo-footer.png" alt="logo gthconsult" />
            <span
              >Bureau Gthconsult recherche sans cesse de nouveaux talents et
              compétences : contrôleur technique, coordonnateur SPS,
              diagnostiqueur immobilier, technicien... Découvrez nos
              opportunitésde carrière !</span
            >
            <ul>
              <li>© 2022 Bureau GTHCONSULT</li>
              <li>Plan du site</li>
              <li>Mentions légales</li>
              <li>Politique de confidentialité</li>
              <li>Politique Cookies</li>
            </ul>
          </div>
          <div class="right">
            <ul>
              <li>
                <a href=""><i class="fa-brands fa-facebook"></i></a>
              </li>
              <li>
                <a href=""><i class="fa-brands fa-youtube"></i></a>
              </li>
              <li>
                <a href=""><i class="fa-brands fa-twitter"></i></a>
              </li>
              <li>
                <a href=""><i class="fa-brands fa-linkedin"></i></a>
              </li>
              <li>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- end contact -->

    <!-- <div class="container">
        <div class="sum">
            <img src="../assets/logo.png" alt="logo gthconsult">
            <span>Le Groupe Gthconsult recherchesans cesse de nouveaux talents etcompétences : contrôleur technique, coordonnateurSPS, diagnostiqueur immobilier, technicien... Découvreznos opportunités de carrière !</span>
            <ul>

            </ul>
        </div>
        <div class="social"></div>
        div
      </div> -->
  </div>
</template>

<script>
import MessageService from "../MessageService";
export default {
  data() {
    return {
      flagOne: false,
      flagTow: false,
      flagTree: false,
      flagFour: false,
      flagFive: false,
      nom: null,
      prenom: null,
      telephone: null,
      email: null,
      message: null,
      msg: null,
      status: null,
      images1: true,
      images2: false,
      images3: false,
      images4: false,
      images5: false,
      imageProject1 : true,
      imageProject2 : false,
      imageProject3 : false,
      imageProject4 : false,
      imageProject5 : false,
      indexProject : null,
    };
  },
  methods: {

    // Realistaion 

    leftPicture(){

      const arr = new Array();
      arr[1] = this.imageProject1
      arr[2] = this.imageProject2
      arr[3] = this.imageProject3
      arr[4] = this.imageProject4
      arr[5] = this.imageProject5

      arr.forEach((index,element) => {
           if(index == true)
           {
                this.indexProject = element
               
           }
      })

      if(this.indexProject == 1)
      {

              this.imageProject1  =  false
              this.imageProject2  =  false
              this.imageProject3  =  false
              this.imageProject4  =  false
              this.imageProject5  =  true

      }

      
      if(this.indexProject == 2)
      {

              this.imageProject1  =  true
              this.imageProject2  =  false
              this.imageProject3  =  false
              this.imageProject4  =  false
              this.imageProject5  =  false

      }

      if(this.indexProject == 3)
      {

              this.imageProject1  =  false
              this.imageProject2  =  true
              this.imageProject3  =  false
              this.imageProject4  =  false
              this.imageProject5  =  false

      }


      if(this.indexProject == 4)
      {

              this.imageProject1  =  false
              this.imageProject2  =  false
              this.imageProject3  =  true
              this.imageProject4  =  false
              this.imageProject5  =  false

      }

      if(this.indexProject == 5)
      {

              this.imageProject1  =  false
              this.imageProject2  =  false
              this.imageProject3  =  false
              this.imageProject4  =  true
              this.imageProject5  =  false
      }

    },


     rightPicture(){

      const arr = new Array();
      arr[1] = this.imageProject1
      arr[2] = this.imageProject2
      arr[3] = this.imageProject3
      arr[4] = this.imageProject4
      arr[5] = this.imageProject5

      arr.forEach((index,element) => {
           if(index == true)
           {
                this.indexProject = element
               
           }
      })

      if(this.indexProject == 1)
      {

              this.imageProject1  =  false
              this.imageProject2  =  true
              this.imageProject3  =  false
              this.imageProject4  =  false
              this.imageProject5  =  false

      }

      
      if(this.indexProject == 2)
      {

              this.imageProject1  =  false
              this.imageProject2  =  false
              this.imageProject3  =  true
              this.imageProject4  =  false
              this.imageProject5  =  false

      }

      if(this.indexProject == 3)
      {

              this.imageProject1  =  false
              this.imageProject2  =  false
              this.imageProject3  =  false
              this.imageProject4  =  true
              this.imageProject5  =  false

      }


      if(this.indexProject == 4)
      {

              this.imageProject1  =  false
              this.imageProject2  =  false
              this.imageProject3  =  false
              this.imageProject4  =  false
              this.imageProject5  =  true

      }

      if(this.indexProject == 5)
      {

              this.imageProject1  =  true
              this.imageProject2  =  false
              this.imageProject3  =  false
              this.imageProject4  =  false
              this.imageProject5  =  false
      }
     },
    // slider Picture
    //one picture
    pictureSlider(value) {
      if (value == 1) {
          this.images1 = true
          this.images2 = false
          this.images3 = false
          this.images4 = false
          this.images5 = false
      }
      if (value == 2) {
          this.images1 = false
          this.images2 = true
          this.images3 = false
          this.images4 = false
          this.images5 = false
      }
      if (value == 3) {
          this.images1 = false
          this.images2 = false
          this.images3 = true
          this.images4 = false
          this.images5 = false
      }
      if (value == 4) {
           this.images1 = false
           this.images2 = false
           this.images3 = false
           this.images4 = true
           this.images5 = false
      }
      if (value == 5) {

          this.images1 = false;
          this.images2 = false
          this.images3 = false
          this.images4 = false
          this.images5 = true

      }
    },

    // Envoyer Message
    envoyer() {
      MessageService.envoyer(
        this.nom,
        this.prenom,
        this.email,
        this.telephone,
        this.message
      )
        .then((data) => {
          this.msg = data.msg;
          this.status = data.status;
          this.nom = null;
          this.prenom = null;
          this.email = null;
          this.telephone = null;
          this.message = null;
        })
        .catch((error) => {
          this.msg = error;
        });
    },
  },
};
</script>

<style>
.home {
  margin-top: 0px;
  padding: 0;
  width: 100%;
  border: 0;
}

/* start gthconsult */
.landing {
  width: 100%;
  padding: 0px;
  border: 0px;
  height: 100%;
}

.landing .container {
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 0;
  padding-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  border: 0px;
  height: 100vh;
}

.landing .container .photo {
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}

.images1 {
  height: 100%;
  background-image: url("../assets/landing/1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.images2 {
  height: 100%;
  background-image: url("../assets/landing/2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.images3 {
  height: 100%;
  background-image: url("../assets/landing/3.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.images4 {
  height: 100%;
  background-image: url("../assets/landing/4.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.images5 {
  height: 100%;
  background-image: url("../assets/landing/5.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.landing .container .photo .slogan {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
}
.landing .container .photo .slogan h1 {
  color: white;
  font-size: 30px;
  font-weight: 300;
  background-color: #243064;
  opacity: 0.8;
  margin: 0px;
  padding: 10px;
  border-radius: 0px 50px 0px 0px;
}
.landing .container .photo .slogan p {
  color: white;
  font-size: 20px;
  font-weight: 600;
  background-color: #d01f1f;
  opacity: 0.8;
  margin: 0px;
  padding: 10px;
  border-radius: 0px 40px 0px 0px;
}

.landing .container .photo .slogan img {
  height: 20%;
  width: 25%;
  background-color: white;
  padding: 15px;
  border-radius: 40px 40px 0px 0px;
  margin-left: 120px;
}

.landing .container .photo .slogan ul {
  position: absolute;
  bottom: 5%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  left: 50%;
}

.landing .container .photo .slogan ul li {
  height: 20px;
  width: 20px;
  border: 4px solid white;
  border-radius: 50%;
  margin-left: 5px;
  margin-right: 5px;
  opacity: 0.4;
  cursor: pointer;
}
.landing .container .photo .slogan ul li:hover {
  background-color: white;
  opacity: 0.4;
}


.gthconsult {
  width: 100%;
  padding: 0px;
  border: 0px;
}
.gthconsult .container {
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 0;
  padding-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  border: 0px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: nowrap;
  position: relative;
}

.gthconsult .container .board {
  position: relative;
  border: 0px;
  width: 100%;
  padding: 0px;
  background: white;
}
.gthconsult .container .board h1:nth-child(1) {
  text-align: center;
  margin-top: 40px;
  font-weight: 900;
  font-size: 46px;
  color: #09154c;
  align-items: center;
  opacity: 0.3;
  padding-bottom: 10px;
}

.gthconsult .container .board h1:nth-child(2) {
  text-align: center;
  font-size: 35px;
  color: #37416d;
  font-weight: bold;
  background: white;
  border: 1px solid #37419a;
  padding-top: 10px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  inline-size: fit-content;
}

.gthconsult .container .tab {
  margin-top: 40px;
  width: 100%;
  padding: 0px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}

.gthconsult .container .tab .sum {
  width: 40%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 60px;
  position: relative;
  border-left: 5px solid #07134a;
  border-radius: 40px 0 0 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 5px solid #07134a;
}
.gthconsult .container .tab .sum:nth-child(4) img {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  margin-top: auto;
  width: 500px;
}

.gthconsult .container .tab .sum:nth-child(1):before {
  position: absolute;
  content: "1";
  top: -30px;
  right: -30px;
  background-color: #07134a;
  border-radius: 50px;
  height: 60px;
  width: 60px;
  opacity: 0.8;
  color: white;
  font-size: 30px;
  margin: auto;
  font-weight: bold;
  padding-left: 17px;
}

.gthconsult .container .tab .sum:nth-child(2):before {
  position: absolute;
  content: "2";
  top: -30px;
  right: -30px;
  background-color: #07134a;
  border-radius: 50px;
  height: 60px;
  width: 60px;
  opacity: 0.8;
  color: white;
  font-size: 30px;
  margin: auto;
  font-weight: bold;
  padding-left: 17px;
}

.gthconsult .container .tab .sum:nth-child(3):before {
  position: absolute;
  content: "3";
  top: -30px;
  right: -30px;
  background-color: #07134a;
  border-radius: 50px;
  height: 60px;
  width: 60px;
  opacity: 0.8;
  color: white;
  font-size: 30px;
  margin: auto;
  font-weight: bold;
  padding-left: 17px;
}

.gthconsult .container .tab .sum:nth-child(4):before {
  position: absolute;
  content: "4";
  top: -30px;
  right: -30px;
  background-color: #07134a;
  border-radius: 50px;
  height: 60px;
  width: 60px;
  opacity: 0.8;
  color: white;
  font-size: 30px;
  margin: auto;
  font-weight: bold;
  padding-left: 17px;
}
.gthconsult .container .tab .sum img {
  width: 120px;
}

.gthconsult .container .tab .sum h1 {
  font-size: 35px;
  color: #37416d;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
}

.gthconsult .container .tab .sum span {
  margin-top: 30px;
  margin-bottom: 0px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 50px;
  font-size: 20px;
  line-height: 30px;
}

/* end gthconsult */

/* start metier  */
.metier {
  margin-top: 60px;
  width: 100%;
  padding: 0px;
  border: 0px;
  height: 100%;
}

.metier .container {
  margin-top: 40px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 0px;
  background-color: white;
  border-left: #07134a 5px solid;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 50px;
}

.metier h1:nth-child(1) {
  text-align: center;
  margin-top: 40px;
  font-weight: 900;
  font-size: 46px;
  color: #09154c;
  align-items: center;
  opacity: 0.3;
  padding-bottom: 10px;
}

.metier h1:nth-child(2) {
  text-align: center;
  font-size: 35px;
  color: #37416d;
  font-weight: bold;
  background: white;
  border: 1px solid #37419a;
  padding-top: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  padding: 15px;
  inline-size: fit-content;
}
.metier .container p {
  color: #07134a;
  height: 100%;
  margin-top: 20px;
  font-size: 23px;
  padding: 15px;
  letter-spacing: 1px;
}
.metier .container p span {
  color: #d01f1f;
  font-size: 30px;
  font-weight: bold;
}
/* end metier */

/* start prestation */
.prestation {
  margin-top: 60px;
  width: 100%;
  padding: 0px;
  border: 0px;
  height: 100%;
}

.prestation .container {
  padding-left: 0px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  border: 0px;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  height: 100%;
  position: relative;
  border-left: 3px solid #07134a;
  padding-top: 40px;
  padding-bottom: 40px;
  border-radius: 50px 0px 0px 50px;
}
.prestation .container ul {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
}

.prestation .container ul li {
  position: relative;
  left: 60px;
  color: #07134a;
  list-style: none;
  margin: 4px 0px;
  border-left: 5px solid #d01f1f;
  transition: 0.5s;
  cursor: pointer;
  font-size: 32px;
}

.prestation .container ul li img {
  width: 30px;
}

.prestation .container ul li span {
  padding-left: 15px;
}

.prestation .container ul li ul li {
  border-left: 0px solid;
  font-size: 20px;
}

.prestation .container ul li ul li img {
  width: 30px;
}

.prestation h1:nth-child(1) {
    text-align: center;
    margin-top: 40px;
    font-weight: 900;
    font-size: 46px;
    color: #09154c;
    align-items: center;
    opacity: 0.3;
    padding-bottom: 10px;
}

.prestation h1:nth-child(2) {
  text-align: center;
  font-size: 35px;
  color: #37416d;
  font-weight: bold;
  background: white;
  border: 1px solid #37419a;
  padding-top: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  margin-top: 40px;
  padding: 15px;
  inline-size: fit-content;
}
/* end Prestation */

/* start contact */

.contact {
  margin-top: 60px;
  width: 100%;
  padding: 0px;
  border: 0px;
  height: 100%;
}

.contact .container {
  padding-left: 0px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  border: 0px;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
}

.contact .container .form {
  margin-top: 60px;
  width: 50%;
}

.contact .container .adresse {
  width: 50%;
  height: 100%;
  padding: 0px;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  background-color: #07134a;
  border-radius: 50px 0px 0px 0px;
  border-top: 3px solid #d01f1f;
  opacity: 0.96;
}

.contact .container .adresse .map {
  display: flex;
  justify-content: center;
  padding-bottom: 0px;
}

.contact .container .adresse ul li {
  color: #ffffffd4;
  padding-left: 25px;
  padding-bottom: 15px;
}

.contact .container .adresse h3 {
  color: #ffffffd4;
  font-size: 30px;
  padding-left: 60px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.contact .container .form form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contact .container .form p {
  text-align: center;
  color: #07134a;
  margin-bottom: 10px;
  font-weight: 200;
}

.contact .container .form form input {
  width: 80%;
  height: 60px;
  border: 0px;
  border-bottom: 2px solid #37416d;
  margin-bottom: 15px;
  color: #37416d;
  font-size: 20px;
  outline: 0px;
}

.contact .container .form form .button {
  background-color: #07134a;
  color: white;
  font-weight: 200;
}

.contact .container .form form textarea {
  width: 80%;
  border: 0px;
  border-bottom: 2px solid #37416d;
  margin-bottom: 15px;
  color: #37416d;
  font-size: 20px;
  outline: 0px;
}

.contact h1:nth-child(1) {
  text-align: center;
  margin-top: 40px;
  font-weight: 900;
  font-size: 46px;
  color: #09154c;
  align-items: center;
  opacity: 0.3;
  padding-bottom: 10px;
}

.contact h1:nth-child(2) {
  text-align: center;
  font-size: 35px;
  color: #37416d;
  font-weight: bold;
  background: white;
  border: 1px solid #37419a;
  padding-top: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  padding: 15px;
  inline-size: fit-content;
  margin-bottom: 40px;
}
/* end contact */

/* start realisations */

.realisations {
  width: 100%;
  background: white;
  padding: 0;
  margin-top: 60px;
  padding-bottom: 40px;
}
.realisations h1 {
    text-align: center;
    font-size: 35px;
    color: #37416d;
    font-weight: bold;
    background: white;
    border: 1px solid #37419a;
    padding-top: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    margin-top: 40px;
    padding: 15px;
    inline-size: fit-content;
}

.realisations .container {
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 0px;
  background-color: white;
  border-left: #07134a 5px solid;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 500px;
}

.realisations .container .slider {
    
    padding-top: 20px;
    padding-bottom: 20px;
    height: 100%;
    width: 100%;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;

}

.realisations .container .slider .photo {

  padding: 0px;
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-size: cover;
  height: inherit;
  width: inherit;

}

.imageProject1 {
  background-image: url('../assets/project/1.jpg');
}
.imageProject2 {
  background-image: url('../assets/project/2.jpg');
}
.imageProject3 {
  background-image: url('../assets/project/3.jpg');
}
.imageProject4 {
  background-image: url('../assets/project/1.jpg');
}
.imageProject5 {
  background-image: url('../assets/project/1.jpg');
}


.realisations .container .right {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
}

.realisations .container .right div {
    height: 70px;
    width: 70px;
    border: 8px solid #d01f1f;
    border-radius: 50px;
    cursor: pointer;
}


.realisations .container .right div:hover {
    border: 8px solid #07134a;
    transition: 0.6s;
}


.realisations .container .left {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
}


.realisations .container .left div {
    height: 70px;
    width: 70px;
    border: 8px solid #d01f1f;
    border-radius: 50px;
 
}


.realisations .container .left div:hover {
    border: 8px solid #07134a;
    transition: 0.6s;
}


/* end realisations */

/* start footer */
.contact .footer {
  width: 100%;
  background: white;
  padding: 0;
  margin-top: 20px;
}

.contact .footer .container {
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 0;
  padding-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  border: 0px;
  background-color: #07134a;
  height: 200px;
  opacity: 0.96;
}

.contact .footer .container .left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.contact .footer .container .left span {
  margin-top: 20px;
  color: aliceblue;
}

.contact .footer .container .left ul {
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0px;
}

.contact .footer .container .left ul li {
  color: aliceblue;
  padding-left: 15px;
}
.contact .footer .container .left img {
  width: 150px;
  margin-top: 20px;
  margin-bottom: 5px;
}

.contact .footer .container .right {
  width: 50%;
  padding: 0px;
}
.contact .footer .container .right ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0px;
}

.contact .footer .container .right ul li {
  padding-left: 20px;
  padding-right: 20px;
  font-size: 40px;
}

.contact .footer .container .right ul li:hover {
  transition: 0.9s;
  transform: translateY(-10px);
}

.contact .footer .container .right ul a {
  color: white;
}
</style>