<template>
  <div class="home">
    <div id="landing">
      <div class="container">
        <div class="slideshow-item">
          <img src="@/assets/1.jpg" alt="">
          <div class="slideshow-item-text">
            <h5>New Yourk City</h5>
          </div>
        </div>
      </div>
    </div>


    <div id="activites">
      <div class="container">
        <div class="one">
          <h1>Nos métiers</h1>
          <p>Découvrez nos services dans les secteurs de la construction, de l'immobilier, du tertiaire et de l'industrie.</p>
        </div>
        <div class="tow">
          <img src="@/assets/2.jpg" alt="">
        </div>
        <div class="tree">
          <img src="@/assets/3.jpg" alt="">
        </div>
        <div class="four">
          <img src="@/assets/4.jpg" alt="">
        </div>
        <div class="five">
          <img src="@/assets/5.jpg" alt="">
        </div>
        <div class="six">
          <img src="@/assets/6.jpg" alt="">
        </div>
      </div>
    </div>


  </div>
</template>

<style scoped>
.home {
  height: 100%;
}
/* start linding */
#landing {
  margin-top: 5px;
}

#landing .container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}

#landing .container .slideshow-item {
  height: 400px;
  position: relative;
}

#landing .container .slideshow-item  img{
  width: 100%;
  height: 400px;
  position: absolute;
}



/* end landing */


/* start activites */

#activites {
  margin-top: 30px;
}

#activites .container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}
#activites .container > .one, .tow, .tree, .four, .five, .six {
  width :calc((100%-30px) / 3);
  height: 300px;
  overflow: hidden;
}



#activites .container > .one > h1 {
  margin-top: 20px;
  color :var(--alt-main-color);
  margin-left: 10px;
}

#activites .container > .one > p {
    font-size: 15px;
    margin-top: 20px;
    margin-left: 10px;
    width: 90%;
    line-height: 25px;
}


#activites .container > .one > img {

    display: block;
    max-width: 100%;
    max-height: 100%;
}

/* end activites */

</style>

<script>
// import ClientService from "../ClientService";
// import RapportService from "../RapportService";
// export default {
//   name: "Home",
//   data() {
//     return {
//       clients: [],
//       error: "",
//       file : null,
//       titre : null,
//       description : null,
//       clientId : '',
//       filename : ''

//     };
//   },
//   components: {},
//   methods: {

//     getPdf() {
//         RapportService.getRapport(this.filename)
//           .then((data) => {
//             console.log(data)
//           })
//           .catch((error) => {
//             console.error(`HTTP error: ${error.name} => ${error.message}`);
//             throw "fail request at: GET /refreshtime";
//           })
//     },

//     selectFile() {

//          this.file = this.$refs.file.files[0];
         
//     },
//     sendFile() {
//         RapportService.insertRapport(this.file, this.clientId)
//           .then((data) => {
//             console.log(data)
//           })
//           .catch((error) => {
//             console.error(`HTTP error: ${error.name} => ${error.message}`);
//             throw "fail request at: GET /refreshtime";
//           });
//     },
//     updateFile() {
//         RapportService.updateRapport(this.file, this.clientId)
//           .then((data) => {
//             console.log(data)
//           })
//           .catch((error) => {
//             console.error(`HTTP error: ${error.name} => ${error.message}`);
//             throw "fail request at: GET /refreshtime";
//           });
//     }
//   },



//   async mounted() {
//     ClientService.getClients()
//       .then((data) => {
//         this.clients = data.client;
//       })
//       .catch((error) => {
//         console.error(`HTTP error: ${error.name} => ${error.message}`);
//         throw "fail request at: GET /refreshtime";
//       });
//   },
// };
</script>