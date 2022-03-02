<template>
<div>


          <!-- start landing -->
          <div class="landing">
              <div class="container">

                <div class="image" v-bind:class="{ 'cover1': cover1, 'cover2': cover2, 'cover3': cover3 }">
                    <div class="text">
                      <div class="content">
                        <h1>GTH Consult <br>Pour le respect de vos obligations réglementaires et volontaires</h1>
                        <p>Vérifications Réglementaires ou volontaires des installations techniques et des risques au travail</p>
                      </div>
                    </div>
                    <a @click="slider('left')"><i  class="fas fa-angle-left change-background fa-2x"></i></a>
                    <a @click="slider('right')"><i class="fas fa-angle-right change-background fa-2x"></i></a>
                    <ul class="bullets">
                      <li @mouseover="selectSlider(1)"></li>
                      <li @mouseover="selectSlider(2)" class="active"></li>
                      <li @mouseover="selectSlider(3)"></li>
                    </ul>
                </div>
              </div>
          </div>
          <!-- End Landing  -->
  
          <!-- Start gthconsult -->
          <div class="gthconsult" id="gthconsult">
            <h1>Notre objectif est de répondre à vos obligations réglementaires et volontaires</h1>
            <div class="blogs">
              <div class="blogOne">
                <div class="card">
                  <img src="../assets/risk.png"  class="risk" alt="risk">
                    <h1>Maîtrise des risques</h1>
                    <span> 
                        Accompagner les chefs d’établissements et les
                        exploitants pour répondre à leurs obligations
                        réglementaires ou volontaires en matière de gestion
                        des risques professionnels, protection des personnes
                        et des biens ainsi que de l’environnement.
                    </span>
                </div>
              </div>
              <div class="blogTow">
                <div class="card">
                    <img src="../assets/know.png"  class="know" alt="know">
                    <h1>Partage du savoir</h1>
                    <span>
                      Notre capital est notre savoir-faire, nos compétences
                      et le respect de la réglementation. Notre vocation de
                      tierce partie indépendante nous impose le partage de
                      ces compétences et de ces savoirs entre nos
                      collaborateurs, avec nos clients et les institutions.
                    </span>
                </div>
              </div>
              <div class="blogTree">
                <div class="card">
                    <img src="../assets/quality.png"  class="quality" alt="quality">
                    <h1>Interlocuteur privilégié</h1>
                    <span>
                      Mettre à la disposition de notre client un interlocuteur
                      unique habilité à prendre toute décisions pour
                      garantir la qualité de nos prestations, le respect de
                      nos engagements et notre disponibilité pour nos
                      clients.

                    </span>
                </div>
              </div>
              <div class="blogFour">
                <div class="card">
                    <img src="../assets/help.png"  class="help" alt="help">
                    <h1>Nos valeurs</h1>
                    <ul>
                      <li> • Qualité de la prestation</li>
                      <li> • Veille réglementaire</li>
                      <li> • Respect de la réglementation</li>
                      <li> • Répondre aux besoins clients</li>
                      <li> • Sécurité de nos collaborateurs</li>
                      <li> • Innovation et performance</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- End Gthconsult -->

          <!-- start prestation -->
          <div class="prestation" id="prestation">
            <h1>Nos prestations</h1>
            <div class="container">

                <div class="titre">
                            <div class="titreBox" @mouseover="Image(1)">
                                <h1>Contrôles réglementaires des installations techniques</h1>
                            </div>

                            <div class="titreBox" @mouseover="Image(2)">
                                <h1>Formations réglementaires et techniques</h1> 
                            </div>

                            <div class="titreBox" @mouseover="Image(3)">
                                <h1>Audits et assistance technique</h1> 
                            </div>

                            <div class="titreBox" @mouseover="Image(4)">
                                <h1>Contrôles risques travailleurs</h1>
                            </div>
                            
                            <div class="titreBox" @mouseover="Image(5)">
                                <h1>Contrôles environnementaux</h1> 
                            </div>
                </div>

                <div v-bind:class="{ 'images1': images1, 'images2': images2, 'images3': images3, 'images4': images4, 'images5': images5 }"></div>
            </div>
          </div>
          <!-- end prestation -->

          <!-- Start solutions -->
              <div class="solutions" id="solutions">
                <div class="container">
                  <h1>Nos solutions</h1>
                  <h1>{{ pub }}</h1>
                </div>
              </div>
          <!-- End Solutions -->

          <!-- start contact -->
          <div class="contacter" id="contacter">
            <h1>Nous contacter</h1>
            <div class="container">
              <div class="contact">
                <div class="info">
                  <h2>Informations de contact</h2>
                  <ul>
                    <li><span><i class="fa-solid fa-location-dot"></i> Bd Mohammed 6 Lot Al massira 3<sup>ème</sup> Étage Appartement N<sup>o</sup> 09 Mohammédia, Maroc</span></li>
                    <li><span><i class="fa-solid fa-phone"></i>  +212 5 23 27 27 74 </span></li>
                    <li><span><i class="fa-solid fa-print"></i>  +212 5 23 27 29 79 </span></li>
                    <li><span><i class="fa-solid fa-at"></i>  services@gthconsult.ma</span></li>
                  </ul>
                </div>
                <div class="contactForm">
                    <h2>Envoyer votre message</h2>
                    <div class="formBox">

                      <div class="inputBox w50">
                        <input type="text" name=""  placeholder="Nom, Prénom" required >
                      </div>

                      <div class="inputBox w50">
                        <input type="text" name=""  placeholder="Téléphone" required>
                      </div>

                      <div class="inputBox w100">
                        <textarea name="" required placeholder="Message"></textarea>
                      </div>

                      <div class="inputBox w100">
                        <input type="submit" value="send">
                      </div>

                    </div>

                  </div>
              </div>
            </div>

          </div>
          <!-- end contact -->




</div>

</template>

<style scoped>

/* Start Landing */
.landing{
  width: 100%;
}

.landing .container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}

.landing .container .image {
  min-height: 100vh;
  background-size: cover;
  position: relative;
}

.landing .container .cover1 {
  background-image: url('../assets/1.jpg');
}
.landing .container .cover2 {
  background-image: url('../assets/2.jpg');
}
.landing .container .cover3 {
  background-image: url('../assets/3.jpg');
}

.landing .container .image .text {
  position: absolute;
  left:0;
  top: 30%;
  transform: translateY(50%);
  background-color: #31438fa1;
  color: white;
  padding-left: 60px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 20px;
  border-radius: 0px 100px 0px 0px;
  border-bottom: solid 5px #f7000094;

}

.landing .container .image .text .content h1 {

  color: white;
  font-size: 30px;
  line-height: 1;

}

.landing .container .image .text .content p {
  text-align: center;
  font-size: 18px;
}

.landing .container .image .change-background {
  color:#ddd;
  position: absolute;
  top: 60%;
  transform: translateY(60);
}

.landing .container .image .fa-angle-left {
  left: 30px;
}

.landing .container .image .fa-angle-right {
  right: 30px;
}

.landing .container .image .fa-angle-right {
  right: 30px;
}

.landing .container .image .bullets {
 
    position: absolute;
    left:50%;
    transform: translateY(-50%);
    bottom: 30px;
    display: flex;

 }

.landing .container .image .bullets li {
 
    width:20px;
    height: 20px;
    border: 1px solid white;
    border-radius: 50%;
    margin-right: 10px;
    outline: 1px solid #31438fa1 ;

 }

 .landing .container .image .bullets li:hover {
 
    border: 1px solid #31438fa1;
    background-color: #31438fa1;

 }

/* end landing */

/* start gthconsult */
.gthconsult {
    height: 600px;
}
.gthconsult h1:nth-child(1){

    text-align: center;
    padding-top: 50px;
    font-size: 50px;
    font-style: oblique;
    font-weight: 900;
    opacity: 0.5;
    }

.blogs {
  margin: 0;
  display: flex; 
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;

}

.blogOne , .blogTow , .blogTree , .blogFour  {
  width: calc(100% / 2);
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.blogOne .card {
  height: 80%;
  width: 60%;
  background-color: white;
  border: 0px;
  box-shadow: 3px 8px #374173;
  position: relative;
  border-radius: 20px;
}
.blogTow .card {
  height: 80%;
  width: 60%;
  background-color:white;
  border: 0px;
  box-shadow: 3px 8px #374173;
  position: relative;
  border-radius: 20px;


}
.blogTree .card {
  height: 80%;
  width: 60%;
  background-color: white;
  border: 0px;
  box-shadow: 3px 8px #374173;
  position: relative;
  border-radius: 20px;


}
.blogFour .card {
  height: 80%;
  width: 60%;
  background-color: white;
  border: 0px;
  box-shadow: 3px 8px #374173;
  position: relative;
  border-radius: 20px;


}

.risk , .know , .quality , .help {
    
    position: absolute;
    left: -20px;
    height: auto;
    max-width: 25%;
}

.gthconsult h1 {
  color: #374173;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 10px;
  font-weight: 800;
  font-size: 25px;
  letter-spacing: normal;
}
.card span {
    padding-top: 18px;
    letter-spacing: 1px;
    font-size: 15px;
    padding-left: 75px;
}
.card ul {
   margin-left: 65px;
   padding-top: 28px;
}




/* end gthconsult */

/* start prestation */
.prestation {
  width: 100%;
  margin-top: 200px;
  padding: 0px;
}

.prestation > h1 {
  color: #374173;
  text-align: center;
  margin-bottom: 40px;
  font-weight: 800;
  font-size: 25px;
  letter-spacing: normal;
}

.prestation .container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
 }

.prestation .container .titre {
    width: 100%;
    position: relative;

}

.prestation .container .titre .titreBox {
    margin-top: 50px;
    box-shadow: 0px 5px 15px rgb(0, 0, 0, .07);
    border-radius: 10px;
    width: 80%;
}

.prestation .container .titre .titreBox:hover {
    margin-top: 50px;
    box-shadow: 0px 5px 15px rgb(0, 0, 0, .01);
    border-radius: 10px;
    background-color: #374173;
    transition: 0.8s;
    width: 80%;
}

.prestation .container .titre .titreBox h1 {

  color: #374173;
  text-align: center;
  font-weight: 800;
  font-size: 18px;
  letter-spacing: normal;

}

.prestation .container .titre .titreBox h1:hover {

  font-size: 23px;
  transition: 0.8s;
  color: white;
}

.prestation .container .images1 {
    padding: 0;
    width: 100%;
    position: relative;
    background-image: url('../assets/prestation/1.jpg');
    background-size: cover;
    height: 60vh;
}

.prestation .container .images2 {
    padding: 0;
    width: 100%;
    position: relative;
    background-image: url('../assets/prestation/2.jpg');
    background-size: cover;
    height: 60vh;
}
.prestation .container .images3 {
    padding: 0;
    width: 100%;
    position: relative;
    background-image: url('../assets/prestation/3.jpg');
    background-size: cover;
    height: 60vh;
}
.prestation .container .images4 {
    padding: 0;
    width: 100%;
    position: relative;
    background-image: url('../assets/prestation/4.jpg');
    background-size: cover;
    height: 60vh;
}
.prestation .container .images5 {
    padding: 0;
    width: 100%;
    position: relative;
    background-image: url('../assets/prestation/5.jpg');
    background-size: cover;
    height: 60vh;
}


/* end prestation */


/* Start Contacter */

.contacter {
  width: 100%;
  margin-top: 40px;
 
}
.contacter h1 {
  color: #374173;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 10px;
  font-weight: 800;
  font-size: 25px;
  letter-spacing: normal;
}

.contacter .container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  background: white; 
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 50px 50px 0px 0px;
 }
.contacter .container .contact {
    background-color: white;
    height: 400px;
    width: 65%;
    border-radius: 100px;
    position: relative;
 }

 .contacter .container .contact .info {
   position: absolute;
     background: rgb(208,31,31);
  background: linear-gradient(90deg, rgba(208,31,31,1) 0%, rgba(135,20,184,1) 100%); 
    height: 300px;
    width: 280px;
    border-radius: 0px 60px 0px 60px;
    left: 10px;
    top: 60px;
 }

 .contacter .container .contact .info h2 {
    color: white;
    text-align: center;
    font-size: 20px;
    margin-top: 25px;
 }
 .contacter .container .contact .info ul{
  padding-top: 10px;

 }

 .contacter .container .contact .info li{
  padding-top: 15px;
  padding-left: 10px;
 }

.contacter .container .contact .info li span {
    color: white;
    text-align: center;
    opacity: 0.9;
 }

 .contacter .container .contact .info li span:hover {
    color: white;
    text-align: center;
    opacity: 2;
 }
 .contacter .container .contact .info li span .fa-solid {
    font-size: 30px;
    margin-right:10px ;
}


 .contacter .container .contact .contactForm {
   position: absolute;
   background-color: #fff;
   margin-left: 350px;
 }

  .contacter .container .contact .contactForm h2 {
   color: #374173;
   font-size: 25px;
   margin-top: 15px;
   text-align: center;
 }

   .contacter .container .contact .contactForm .formBox {
     margin-top: 13px;
     display: flex;
     flex-direction: column;
     align-items: center;
    }

    .contacter .container .contact .contactForm .formBox input {
      margin-top: 10px;
      width: 400px;
      height: 45px;
      border: 0px;
      border-bottom: 1px solid #374173;
    }

    .contacter .container .contact .contactForm .formBox input:hover {
      margin-top: 10px;
      width: 400px;
      height: 45px;
      border: 0px;
      color: #374173;
      outline: 0px;
    }

    .contacter .container .contact .contactForm .formBox textarea {
     margin-top: 15px;
     height: 45px;
     width: 400px;
     height: 150px;
     border: 0px;
     border-bottom: 1px solid #374173;
     color: #374173;
    }

    .contacter .container .contact .contactForm .formBox textarea:hover {
     margin-top: 15px;
     height: 45px;
     width: 400px;
     height: 150px;
     border: 0px;
     color: #374173;
      outline: 0px;
    }

    .contacter .container .contact .contactForm .formBox input[type = 'submit']{
      border: 0;
      outline: 0;
      background-color: #8714b8;
      color: white;
      font-size: 20px;
    }
/* End Contact */




/* start solutions */

.solutions {
  width: 100%;
  padding: 0;
  margin-top: 40px;
}
.solutions .container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}
.solutions .container h1:nth-child(1) {

  color: #374173;
  text-align: center;
  font-weight: 800;
  font-size: 25px;
  letter-spacing: normal;
}
.solutions .container h1:nth-child(2) {

    text-align: center;
    padding-top: 50px;
    font-size: 50px;
    font-style: oblique;
    font-weight: 900;
    opacity: 0.5;

}
/* end solutions */








 











</style>

<script>

export default {
  name: "Home",
  data() {
    return {
      images1: true,
      images2: false,
      images3: false,
      images4: false,
      images5: false,
      cover1 : true,
      cover2 : false,
      cover3 : false,
      pub : "LE LEADER DES BUREAU DE CONTROLE À MAROC",
    }
  },
  methods : {

    slider(value) {

      if(value == "right") {

        const arr = new Array();
        arr[1] = this.cover1
        arr[2] = this.cover2
        arr[3] = this.cover3
        const index = arr.findIndex((n) => n == true)
        
        switch(index) {
          case 1:
             this.cover1 = false
             this.cover2 = true
            break;
          case 2:
             this.cover2 = false
             this.cover3 = true
            break;
          case 3:
             this.cover3 = false
             this.cover1 = true
            break;  
        }
      }
        
      if(value == "left") {

        const arr = new Array();
        arr[1] = this.cover1
        arr[2] = this.cover2
        arr[3] = this.cover3
        const index = arr.findIndex((n) => n == true)
        
        switch(index) {
          case 1:
             this.cover1 = false
             this.cover3 = true
            break;
          case 2:
             this.cover2 = false
             this.cover1 = true
            break;
          case 3:
             this.cover3 = false
             this.cover2 = true
            break;  
        }

      }

    },

    selectSlider(value) {
      
        if(value == 1) {
           this.cover1 = true
           this.cover2 = false
           this.cover3 = false
        }
        if(value == 2) {
           this.cover1 = false
           this.cover2 = true
           this.cover3 = false
        }
        if(value == 3) {
           this.cover1 = false
           this.cover2 = false
           this.cover3 = true     
          }
    },

    Image(value) {

      if(value == 1) {
        this.images1 = true
        this.images2 = false,
        this.images3 = false,
        this.images4 = false,
        this.images5 = false
      }

      if(value == 2) {
        this.images1 = false
        this.images2 = true,
        this.images3 = false,
        this.images4 = false,
        this.images5 = false
      }
      if(value == 3) {
        this.images1 = false
        this.images2 = false,
        this.images3 = true,
        this.images4 = false,
        this.images5 = false
      }
      if(value == 4) {
        this.images1 = false
        this.images2 = false,
        this.images3 = false,
        this.images4 = true,
        this.images5 = false
      }
      if(value == 5) {
        this.images1 = false
        this.images2 = false,
        this.images3 = false,
        this.images4 = false,
        this.images5 = true
      }

    },
    sliderRepetitionOne() {
      setTimeout(()=> {

        const tab = new Array();
        tab[1] = this.cover1
        tab[2] = this.cover2
        tab[3] = this.cover3
        const index = tab.findIndex((n) => n == true)

        switch(index) {
          case 1:
             this.cover1 = false
             this.cover3 = true
            break;
          case 2:
             this.cover2 = false
             this.cover1 = true
            break;
          case 3:
             this.cover3 = false
             this.cover2 = true
            break;  
        }
        this.sliderRepetitionTow()
      },5000)


    },
    
    sliderRepetitionTow() {
      this.sliderRepetitionOne()
    },

  },

  computed: {

  },

  mounted(){
    this.sliderRepetitionOne()
    this.publiciteOne()
  },

}

</script>