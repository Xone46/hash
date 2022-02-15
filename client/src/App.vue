<template>
  <div id="app">
    <div id="header" class="header">
      <div class="container">
        <img alt="" src="@/assets/logo.png" class="logo">
        <ul class="main-nav">
          <li><a href="">La société</a></li>
          <li><a href="">Nos métiers</a></li>
          <li><a href="">Carrières</a></li>
          <li><a href="">Espace Clients</a></li>
        </ul>
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> -->
      </div>
    </div>
    <router-view/>

    <div id="footer" class="footer">
      <div class="container">
        <div class="wave">
          <img src="@/assets/wave.png" alt="">
        </div>
        <div class="social">
          <ul>
              <li><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
              <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
              <li><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
              <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
          </ul>
        </div>
        <div class="info">
          <div class="col">
            <img src="@/assets/logo.png" alt="">
            <p>blablablav blavvblabla bla blavbla v blablabla blabla vbla bla blabla blabla vv vbla blabla bla bla bla bla blablabla</p>
          </div>
          <div class="col">
            <h3>Office</h3>
            <p><i class="fa-solid fa-map-location"></i> Adresse : Bd Mohammed VI, Imm FB08, n°9, 28820</p>
            <p><i class="fa-solid fa-at"></i> Email : service@gthconsult.com</p>
            <p><i class="fa-solid fa-phone"></i> Telephone : +2125232-72774</p>
            <p><i class="fa-solid fa-browser"></i> Website : www.gthconsult.com </p>
          </div>
          <div class="col">
            <h3>Liens</h3>
            <p><a href="#"> société</a></p>
            <p> <a href="#">Nos métiers</a></p>
            <p> <a href="#">Carrières</a></p>
            <p> <a href="#">Espace Clients</a></p>
          </div>
          <div class="col">
            <h3>Découvrir les nouvelle</h3>
            <form> 
              <a href="#"><i class="fa-solid fa-envelope"></i></a>
              <input type="text" placeholder="Email adresse" required>
              <button type="submit"><i class="fa-solid fa-arrow-right"></i></button>
            </form>
          </div>
        </div>
      </div>
      
    </div>

  </div>
</template>

<style scoped>
/* start header */
#header {
  background-color: white;
  -webkit-box-shadow: 0 0 10px 0 #ddd;
  -moz-box-shadow: 0 0 10px 0 #ddd;
  box-shadow: 0 0 10px 0 #ddd;
}

#header .container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
}

#header .logo {
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
} 


#header .main-nav {
 display: flex;
} 



#header .main-nav > li > a {
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

#header .main-nav > li > a::before {
  content :"";
  position: absolute;
  background-color: var(--main-color);
  width : 100%;
  height: 5px;
  bottom: 0;
  left :-100%;
  transition: var(--main-transition);

} 

#header .main-nav > li > a::after {
  content :"";
  position: absolute;
  background-color: var(--main-color);
  width : 100%;
  height: 5px;
  top: 0;
  left :-100%;
  transition: var(--main-transition);

} 


#header .main-nav > li > a:hover {
  color: var(--main-color);
  background-color: #fafafa;
} 

#header .main-nav > li > a:hover::before {
left :0;
}

#header .main-nav > li > a:hover::after {
left :0;
}
/* end Header */


/* start footer */

#footer {
margin-top: 10px;  
}

#footer .container {
  position: relative;
}
#footer .container .wave {
  overflow: hidden;
}
#footer .container .social {
  background: var(--alt-main-color);
  height: 80px;
}

#footer .container .social ul {
    display: flex;
    justify-content: center;
    align-items: center;  
    height: 80px;
}
#footer .container .social ul li {
  margin-top:20 ;
  padding: 20px;
}
#footer .container .social ul li:hover {
 transform: translateY(-10px);
 transition: var(--main-transition);
}

#footer .container .social ul li a {
color :white;
font-size: 2em;
}

#footer .container .info {
  background: var(--alt-main-color);
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
}

#footer .container .info .col {
 flex-basis: 25%;
 padding: 10px;
}

#footer .container .info .col img {
    width:50px;
} 

#footer .container .info .col p {
color: white;
font-size: 10px;
}

#footer .container .info .col h3 {
color: white;
}
#footer .container .info .col a {
color: white;
}

form {
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  margin-bottom: 50px;
}
form a{
  color:white;
}
form input{
  color:white;
  background: transparent;
  color:white;
  border: 0;
  outline: none;
}

form button {
  background: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
}
form button .fa-arrow-right{
  color:white;
}


 


/* end footer */

</style>
