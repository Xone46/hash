<template>
  <div id="app">
    


    <!-- Start Header General -->

    <div id="header" class="header">
      <div class="container">

         <!--  start top Header -->
        <div class="top-header">
          <p>GTH consult Bureau de contrôle agréé par l’état</p>
          <p> <i class="fa-solid fa-location-dot"></i> 3<sup>ème</sup> Étage Appartement N<sup>o</sup> 09, Mohammédia, Maroc</p>
          <p> <i class="fa-solid fa-phone"></i> +212 5 23 27 27 74 <i class="fa-solid fa-print"></i> +212 5 23 27 29 79</p>
        </div>
        <!-- end top header -->
  


        <!-- start bootom Header -->
        <div class="bottom-header">
           <!--  start logo -->
            <img alt="" src="@/assets/logo.png" class="logo">
           <!-- end logo -->

           <!-- Start Navbar -->
            <ul class="main-nav" v-if="!$route.path.match('/dashadmin')">
              <li v-if="$route.path.match('/client') || $route.path.match('/admin')">
                  <a href="/">Accueil</a>
              </li>
              <li v-if="!$route.path.match('/client') && !$route.path.match('/admin')">
                  <a href="#gthconsult">GTH consult</a>
              </li>
              <li v-if="!$route.path.match('/client') && !$route.path.match('/admin')">
                  <a href="#prestation">Nos prestations</a>
              </li>
              <li v-if="!$route.path.match('/client') && !$route.path.match('/admin')">
                  <a href="#solutions">Nos solutions</a>
              </li>
              <li v-if="!$route.path.match('/client') && !$route.path.match('/admin')">
                <router-link to="/client">
                  <a href="">Espace Clients</a>
                </router-link>
              </li>
              <li v-if="!$route.path.match('/client') && !$route.path.match('/admin')">
                  <a href="#contacter">Nous contacter</a>
              </li>
            </ul>
            <!-- End Navbar -->

        </div>
        <!-- end bootom Header -->
      </div>
    </div>

    <!-- End Header General -->
     

    <!-- Start page  -->
    <router-view/>
    <!-- End page -->
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
#app {
  height: 100%;
}
.header{
  position: fixed;
  width: 100%;
  z-index: 1000;
}

.header .container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}

.header .container .top-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
}
.header .container .top-header p {
  color :#cfcbcb;
  font-size: 13px;
}

.header .container .bottom-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:white;
}
.header .container .bottom-header .logo {
  width: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header .container .bottom-header .main-nav {
  display: flex;
}
.header .container .bottom-header .main-nav > li > a  {

  display: flex;
  justify-content: center;
  align-items: center;
  height: 72px;
  position: relative;
  padding: 0 10px;
  color : var(--alt-main-color);
  transition: var(--main-transition);
  overflow: hidden;

}

.header .container .bottom-header .main-nav > li > a::before  {

  content :"";
  position: absolute;
  background-color: var(--main-color);
  width : 100%;
  height: 5px;
  bottom: 0;
  left :-100%;
  transition: var(--main-transition);

}

.header .container .bottom-header .main-nav > li > a::after  {

  content :"";
  position: absolute;
  background-color: var(--main-color);
  width : 100%;
  height: 5px;
  top: 0;
  left :-100%;
  transition: var(--main-transition);

}

.header .container .bottom-header .main-nav > li > a:hover  {

  color: var(--main-color);
  background-color: #fafafa;

}

.header .container .bottom-header .main-nav > li > a:hover::before  {
 left: 0;
}

.header .container .bottom-header .main-nav > li > a:hover::after  {
 left: 0;
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
/* End footer */

</style>
