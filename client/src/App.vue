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
            <ul class="main-nav">
              <li>
                  <a href="#gthconsult">GTH consult</a>
              </li>
              <li>
                  <a href="#prestations">Nos prestations</a>
              </li>
              <li>
                  <a href="#solutions">Nos solutions</a>
              </li>
              <li>
                <router-link to="/client">
                  <a href="">Espace Clients</a>
                </router-link>
              </li>
              <li>
                  <a href="#car">Carrières</a>
              </li>
              <li>
                  <a href="#contacter">Nous contacter</a>
              </li>
            </ul>
            <!-- End Navbar -->

        </div>
        <!-- end bootom Header -->
      </div>
    </div>

    <!-- End Header General -->

    <router-view/>

   
  </div>
</template>

<style scoped>
.header{
  position: fixed;
  width: 100%;
  z-index: 2;
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

</style>
