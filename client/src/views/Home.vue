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
  font-size: 20px;
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
    };
  },
  methods : {

  },

  computed: {

  }

}

</script>