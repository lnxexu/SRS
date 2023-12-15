<template>
  <div id="OSADcontainer">
    <div id="logoStack">
      <img src="../assets/logo.png" alt="logo" />
      <img src="../assets/logo.png" alt="logo" />
      <img src="../assets/logo.png" alt="logo" />
    </div>
  </div>
<div id="transparent"></div>
<div id="OSAD">
  <h1>OSAD</h1>
</div>
<div class="navigation">
  <div class="overlay"></div>
  <button class = "hamburger" @click="show()">
    <div id="bar1" class="bar"></div>
    <div id="bar2" class="bar"></div>
    <div id="bar3" class="bar"></div>
  </button>
  <div id = "user">
    <img src="../assets/user.png" id = "userIcon">
    <span>USERNAME</span>
  </div>
  <nav>
    <hr>    
    <ul>
      <li><img src="../assets/bell.png" class = "icon4">
        <a @click = "showReports()">Reports</a>
      </li>
      <li><img src="../assets/homepage.png" class = "icon1"> <a @click = "">Home Page</a></li>
      <li><img src="../assets/securityAccount.png" class = "icon2">
        <a @click = "showSecurityAccounts()">Security Accounts</a>
      </li>
      <li><img src="../assets/clock.png" class = "icon3">
        <a @click="showViolations()">Violation Tracker</a>
      </li>
      <li><img src="../assets/logout.png" class = "icon5"><a @click="() => TogglePopup('buttonTrigger')">Log Out</a>
        <popup v-if="popupTriggers.buttonTrigger" :TogglePopup="() => TogglePopup('buttonTrigger')">
        </popup>
      </li>
    </ul>
  </nav>
</div>
<div v-if="violations">
  <Violations />
</div>
<div v-if="SecurityAccounts">
  <SecurityAccounts />
</div>
<div v-if="Reports">
  <Reports />
</div>

<bg/>
</template>

<script>
import bg from "../components/Background.vue";
import popup from '../components/Popup.vue';
import Violations from '../components/Violations.vue';
import SecurityAccounts from "../components/SecurityAccounts.vue";
import Reports from "../components/Reports.vue";
import { ref } from 'vue';



export default {
  name: 'OSAD',
  components: { bg, popup, Violations, SecurityAccounts, Reports },
  data() {
    return{
      violations: false,
      SecurityAccounts: false,
      Reports: false
    }
  },
  methods: {
    show() {
      document.querySelector('.hamburger').classList.toggle('open')
      document.querySelector('.navigation').classList.toggle('active')
      document.querySelector('.container').classList.toggle('open')
    },
    showViolations(){
      this.violations = true;
    },
    showSecurityAccounts(){
      this.SecurityAccounts = true;
    },
    showReports(){
      this.Reports = true;
    }
  },
  setup(){
    const popupTriggers = ref({
      buttonTrigger: false
    });
    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    }
    return{
      popup, popupTriggers, TogglePopup
    }
  }
};
</script>

<style scoped>
*{
      overflow: hidden;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    #OSAD{
        color: #FFF;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 100em;
        font-style: normal;
        font-weight: 300;
        position: absolute;
        top: 6.5%;
        left: 5.5%;
    }
    #transparent {
      width: 100%; 
      height: 10%; 
      background-color: #0D0D0D;
      position: absolute;
      top: 9.3%; 
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      opacity: 40%;
    }
    #OSADcontainer {
      width: 100%; 
      height: 73%; 
      background-color:black;
      position: absolute;
      top: 55.5%; 
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center; 
    
    }
    #logoStack{
      display: flex;
      height: 100%;
      width: auto;
      opacity: 50%;
    }
    button {
  cursor: pointer;
  color: white;
  text-decoration: none;
}

nav {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
}

nav ul li {
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
}

nav ul li img {
  margin-right: 10px;
}

nav ul li a {
  color: #FFF;
  text-decoration: none;
  font-size: 18px;
  position: relative;
}

nav ul li a::after {
  content: '';
  width: 0;
  height: 2px;
  background: #F2D8E4;
  position: absolute;
  left: 0;
  bottom: -6px;
  transition: 0.5s;
}

nav ul li a:hover::after {
  width: 100%;
}

.navigation {
  position: fixed;
  left: -500px;
  width: 20%;
  height: 100%;
  background-color: black;
  transition: 0.5s;
}

#user {
  position: relative;
  top: 17%;
}

#userIcon {
  position: relative;
  left: 12%;
}

span {
  position: relative;
  left: 17%;
  color: #FFF;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 30px;
  font-style: normal;
}

.navigation ul li {
  color: white;
  text-transform: uppercase;
  list-style-type: none;
  padding: 1.5em 2em;
  border-bottom: 1pt solid #252525;
}

.hamburger,
.bar {
  position: fixed;
}

.hamburger {
  display: block;
  top: 5.5%;
  left: 0;
  width: 40px;
  height: 4%;
  transform: translateY(50%);
  border: 0;
  background: 0 0;
}

.bar {
  top: 3px;
  background: #F2D8E4;
  width: 100%;
  height: 4px;
  transition: all 0.3s ease-in;
  border: black 1px solid;
}

#bar2 {
  top: 11px;
}

#bar3 {
  top: 19px;
}

.navigation.active {
  left: 0;
}

.hamburger.open #bar1 {
  background-color: white;
  transform: rotate(45deg) translate(6px, 5px);
}

.hamburger.open #bar2 {
  opacity: 0;
}

.hamburger.open #bar3 {
  background-color: white;
  transform: rotate(-45deg) translate(6px, -5px);
}


</style>

