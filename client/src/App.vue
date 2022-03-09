<template>
  <div id="app">
    
    <!-- Start Header General -->
  <div class="header">
    <div class="container">
          <div class="top">
            <ul>
              <li> GTHCONSULT Bureau de contrôle agréé par l’état</li>
              <li><i class="fa-solid fa-location-dot"></i><span> Bd Mohammed 6 Lot Al massira 3<sup>ème</sup> Étage Appartement N<sup>o</sup> 09, Mohammédia, Maroc</span></li>
              <li><i class="fa-solid fa-phone"></i><span> +212 5 23 27 27 74</span> <i class="fa-solid fa-print"></i><span> +212 5 23 27 29 79</span></li>
            </ul>
          </div>
          <div class="bottom">
              <div class="logo">
                <img src="./assets/logogth.png" alt="logo gthconsult" href="/">
              </div>
              <div class="nav">
                <ul>
                  <li><a href="/#gthconsult">GTHCONSULT</a></li>
                  <li><a href="/#prestation"> Nos prestations</a></li>
                  <li><a href="/#solutions"> Nos solutions</a></li>
                  <li><a href="/#Realisations"> Réalisations</a></li>
                  <li><a href="/#contact"> Contacter</a></li>
                  <li><a> <router-link to="/client">Clients </router-link></a></li>             
                </ul>
              </div>
          </div>
    </div>

  </div>

    <!-- End Header General -->
     
    <!-- Start page  -->
    <router-view/>
    <!-- End page -->
    </div> 
</template>
<script>

export default {

    data() {
        return  {

        }
    },

    methods: {

             
    },

    mounted() {

    }

}
</script>

<style scoped>
#app {
  padding: 0;
  height: 100%;
  width: 100%;
}
.header{
    position: fixed;
    z-index: 1;
    width: 100%;
    padding: 0;
}
.header .container {
  padding-left:15px;
  padding-right: 15px;
  padding-top: 0;
  padding-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  border: 0px;
  height: 130px;
}

.header .container .top {
  padding: 0;
  height: 40px;
  background-color: #07134a;
  margin: 0;
  position: relative;
}




.header .container .top ul {
  height: 100%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  
}

.header .container .top ul li {
  color: #ffffffd4;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 12px;
}

.header .container .bottom {
  padding: 0;
  height: 60px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-radius: 0px 0px 40px 0px;
  background-color: white;
}

.header .container .bottom .logo {
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
}

.header .container .bottom .logo img {
    width: 130px;
    padding: 10px;
}

.header .container .bottom .nav{
  padding: 0;
  height: 100%;
}

.header .container .bottom .nav ul{
    padding: 0;
    height: 100%;
    display: flex;
    align-items: center;
}


.header .container .bottom .nav ul li{
  padding-left: 20px;
  padding-right: 20px;
  height: 100%;
  display: flex;
  align-items: center;
}

.header .container .bottom .nav ul li a{
  color: #07134a;
}
.header .container .bottom .nav ul li:nth-child(6) a{
  color: white;
}



.header .container .bottom .nav ul li:hover{
    border-bottom: 4px solid #d01f1f;
    transition: 0.15s;
    color :#d01f1f;
    font-weight: bold;

}

.header .container .bottom .nav ul li:nth-child(6) a:hover{
    color :#d01f1f;
}



.header .container .bottom .nav ul li:nth-child(6){
   background-color: #d01f1f;
   font-size: 20px;
   font-weight: bold;
   color: white;
   height: 100%;
   border-radius: 40px 0px 40px 0px;
}

.header .container .bottom .nav ul li:nth-child(6):hover{
   background-color: white;
   color: #d01f1f;
   font-weight: bold;
   height: 100%;
   transition: 0.7s;
   
}




</style>
