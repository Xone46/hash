<template>


  <div class="landing">
      <div class="container">

        <div class="image">
            <div class="text">
              <div class="content">
                <h1>GTH Consult <br>Pour le respect de vos obligations réglementaires et volontaires</h1>
                <p>Vérifications Réglementaires ou volontaires des installations techniques et des risques au travail</p>
              </div>
            </div>
            <i class="fas fa-angle-left change-background fa-2x"></i>
            <i class="fas fa-angle-right change-background fa-2x"></i>
            <ul class="bullets">
              <li></li>
              <li class="active"></li>
              <li></li>
            </ul>
        </div>
      </div>

      <div class="gthconsult" id="gthconsult">
        <h1>Notre objectif est de répondre à vos obligations réglementaires et volontaires</h1>
        <div class="blogs">
          <div class="blogOne">
            <div class="card">
              <img src="../assets/risk.png"  class="risk" alt="risk">
                <h1>Maîtrise des risques</h1>
                <p> Accompagner les chefs d’établissements et les
                    exploitants pour répondre à leurs obligations
                    réglementaires ou volontaires en matière de gestion
                    des risques professionnels, protection des personnes
                    et des biens ainsi que de l’environnement.
                </p>
            </div>
          </div>
          <div class="blogTow">
            <div class="card">
                <img src="../assets/know.png"  class="know" alt="know">
                <h1>Partage du savoir</h1>
                <p>
                  Notre capital est notre savoir-faire, nos compétences
                  et le respect de la réglementation. Notre vocation de
                  tierce partie indépendante nous impose le partage de
                  ces compétences et de ces savoirs entre nos
                  collaborateurs, avec nos clients et les institutions.
                </p>
            </div>
          </div>
          <div class="blogTree">
            <div class="card">
                <img src="../assets/quality.png"  class="quality" alt="quality">
                <h1>Interlocuteur privilégié</h1>
                <p>
                  Mettre à la disposition de notre client un interlocuteur
                  unique habilité à prendre toute décisions pour
                  garantir la qualité de nos prestations, le respect de
                  nos engagements et notre disponibilité pour nos
                  clients.

                </p>
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

            <div class="images" v-bind:style="{ 'background-image': 'url(../assets/2.jpg)' }">
            </div>

        </div>
      </div>

      <div class="contacter" id="contacter">
        <h1>Nous contacter</h1>
        <div class="container">
          <div class="contact">
            <div class="info">
              <h2>Informations de contact</h2>
              <ul>
                <li><span><i class="fa-solid fa-location-dot"></i>  3<sup>ème</sup> Étage Appartement N<sup>o</sup> 09 Mohammédia, Maroc</span></li>
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


      <div class="footer">
        <div class="container">
          <div class="all">

              <div class="merge">
                <div class="img">
                  <img src="@/assets/logo.png" alt="">
                </div>
                <div class="desc">
                  <h1> GTH consult</h1>
                  <p>
                  Le Groupe Gthconsult recherche <br>
                  sans cesse de nouveaux talents et <br> 
                  compétences : contrôleur technique, coordonnateur <br>
                  SPS, diagnostiqueur immobilier, technicien... Découvrez <br>
                  nos opportunités de carrière !</p>
                </div>
              </div>

              <ul>
                <li><a href="">© 2022 Bureau GTHconsult |</a></li>
                <li><a href="">Plan du site |</a> </li>
                <li><a href="">Mentions légales |</a></li>
                <li><a href="">Politique de confidentialité |</a></li>
                <li><a href="">Politique Cookies </a></li>
              </ul>

          </div>
          <div class="social">
            <ul>
              <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
              <li><a href=""><i class="fa-brands fa-youtube"></i></a></li>
              <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
              <li><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
              <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
            </ul>
          </div>            
        </div>
      </div>
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
  background-image: url('../assets/1.jpg');
  background-size: cover;
  position: relative;
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
.card p {
    text-align: center;
    padding-top: 28px;
    letter-spacing: 1px;
}
.card ul {
   margin-left: 65px;
   padding-top: 28px;
}




/* end gthconsult */

/* start prestation */
.prestation {
  width: 100%;
  margin-top: 40px;
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
    width: 50%;
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


.prestation .container .images {
    width: 50%;
}

.prestation .container .images {
    width: 50%;
    position: relative;
  
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
  background-image: url('../assets/circle.svg');
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 50px;
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
   background-color: #d01f1f;
    height: 300px;
    width: 280px;
    border-radius: 0px 60px 0px 60px;
    left: -60px;
    top: 60px;
 }

 .contacter .container .contact .info h2 {
    color: white;
    text-align: center;
    font-size: 20px;
    margin-top: 25px;
 }
 .contacter .container .contact .info ul{
  padding-top: 30px;

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
   color: #8714b8;
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


/* Start footer */
.footer{
  width: 100%;
  padding: 0;
}

.footer .container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  height: 150px;
  background: rgb(208,31,31);
  background: linear-gradient(90deg, rgba(208,31,31,1) 0%, rgba(135,20,184,1) 100%); 
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.footer .container .all{
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.footer .container .all .merge{
  height: 100%;
  display: flex;
  flex-direction: row;
}
.footer .container .all .merge desc{
  height: 100%;
}
.footer .container .all .merge .desc h1{
    color: white;
    font-size: 18px;
    margin-left: 20px;
}
.footer .container .all .merge .desc p{
    color: white;
    color: white;
    font-size: 12px;
    margin-left: 20px;
}

.footer .container .all ul{
  height: 100%;
  display: flex;
}
.footer .container .all li{
  height: 100%;
  padding: 5px;
}
.footer .container .all li a{
  height: 100%;
  padding: 5px;
  color: white;
}


.footer .container .social{
  height: 100%;
  padding: 0;
}

.footer .container .social ul{
  height: 100%;
  padding: 0;
  display: flex;
  align-items: center;
}

.footer .container .social ul li{
  padding: 20px;
}
.footer .container .social ul li:hover{
  padding: 20px;
  transform: translateY(-10px);
  transition: 0.7s;
}

.footer .container .social ul li a{
  font-size: 35px;
  color: white;
}







/* End Footer */




 



/* End contacter */








</style>

<script>
// const arr = [1,2,3]

// function handelSlider() {

// const value = arr[(Math.random() * arr.length) | 0];
 
//     setTimeout(()=> {
//       handelSlider()} ,10000)
//     }

//   handelSlider()

export default {
  name: "Home",
  data() {
    return {
      image : null,
    };
  },
  methods : {

    Image(value) {
      this.image = `../assets/${value}.jpg`
    }
  },

  computed: {

  }

}

</script>