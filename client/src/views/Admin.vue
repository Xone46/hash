<template>
<div class="client">
     <div class="container">
        <div class="col">
            <img src="@/assets/security.svg" alt="">
        </div>
        <div class="col">
                 <h3>Espace Admin</h3>
                <section>
                    <b-message v-if="error" title="Danger"  type="is-danger" aria-close-label="Close message">
                        {{message}}
                    </b-message>
                    <b-field label="Email"  type="" message="">
                        <b-input type="email" value="" maxlength="30" v-model="email" ></b-input>
                    </b-field>
                    <b-field label="Mot de pass" type="" message="">
                        <b-input type="password" value="" minlength="6" v-model="password"></b-input>
                    </b-field>
                
                    <div class="buttons">
                        <b-button type="is-primary" expanded @click="login">Se connecter</b-button>
                    </div>
                   

                </section>

        </div>
     </div>
</div>
  
</template>

<script>
import AdminService from "../AdminService";

export default {

    data() {
        return  {
            email : null,
            password : null,
            error : null
        }
    },

    methods: {

        login() {

        AdminService.login(this.email, this.password)
          .then((data) => {

            if(data.token) {

                sessionStorage.setItem("token", data.token);
                sessionStorage.setItem("user", 'admin');
                this.$router.push("/dashadmin").catch(()=>{});
                 
            }else {
                this.message = data.msg
                this.error = 'true'
            }
          
          })
          .catch((error) => {
            console.error(`HTTP error: ${error.name} => ${error.message}`);
            throw "fail request at: GET /refreshtime";
          })
   
        }
             
    },
    mounted() {

        if(sessionStorage.getItem("token") && sessionStorage.getItem("user") === 'admin') {
                this.$router.push("/dashadmin").catch(()=>{});
        }
   
    }
}
</script>

<style>
.client {
  height: 100%;
  margin-top: 0px;
  padding: 0;
}
.client .container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.client .container .col{

    width:calc((100%-30px)/2);
    padding: 90px;
    margin-top: 100px;


}
.client .container .col h3{

    font-size: 30px;
    color: var(--alt-main-color);
    margin-bottom: 20px;

}
.client .container .col section .buttons {
    margin-top: 15px;
    color: var(--alt-main-color);
}


</style>