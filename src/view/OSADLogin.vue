<script>
import bg from "../components/Background.vue"

export default{
    name: 'OSADLogin',
    components: {bg},
    methods: {
    auth(){
      var email = document.getElementById("email").value
      var password = document.getElementById("password").value;
      if(email == "admin@gmail.com" && password === "admin123" ){
        window.location.assign('OSAD');
        alert("Login Sucessfully")
      }
      else{
        alert("Invalid Information");
        return;
      }
    }
  }
};
</script>
<template>
<bg/>
<div id="container">
  <div id="box">
    <img src="../assets/logo2.png" id="logo" />
  </div>
  <div id="forms">
    <div class="form-group">
      <label for="email">Email: </label>
      <input type="text" id="email" class="size" pattern="^[a-zA-Z0-9]+@gmail\.com$" required/>
    </div>
    <div class="form-group">
      <label for="password">Password: </label>
      <input type="password" id="password" class="size"/>
    </div>
    <div id="signup">
      <p>Don't have an account? <a href="SignUpSecurity">Sign Up</a></p>
    </div>
  </div>
  <button id="login" class="raise" @click = "auth()">LOG IN</button>
</div>
</template>

<style scoped>
#container {
  width: 100%; 
  height: 700px; 
  background-color: #0D0D0D;
  color: white;
  position: absolute;
  top: 50%; 
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center; 
}
#signup, p{
  position: relative;
  text-align: center;
}
#box h1{
  font-size: 50px;
}
#forms {
  display: flex;
  flex-direction: column; 
  margin-bottom: 20px; 
  
}

.form-group {
  margin-bottom: 10px; 
  display: flex;
  flex-direction: column;
}

#login {
  position: relative;
  top: 5%;
  border-radius: 7px;
}
.raise:hover,
.raise:focus {
  box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
  transform: translateY(-0.25em);
}
.raise {
  --color: #F2D8E4;
  --hover: #f763a8;
}
button {  
  color: var(--color);
  transition: 0.25s;
  background: none;
  border: 2px solid;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
}

button:hover,
button:focus { 
  border-color: var(--hover);
  color: #fff;
}

.size {
  width: 250px;
  height: 40px;
  border-radius: 7px;
}
</style>
