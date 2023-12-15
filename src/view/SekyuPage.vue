<script>
import { ref } from 'vue';
import bg from "../components/Background.vue";

export default {
  name: 'SekyuPage',
  components: { bg },
  data() {
    return {
      name: ref('Jazmine Rose Quitoras'),
      section: ref('BSIT-2B'),
      studentID: ref(''),
      timeInput: ref(''),
      dateInput: ref(''),
      violationInput: ref(''),
      tableData: ref([]),
    };
  },
  methods: {
    addViolation() {
      if (this.validateInputs()) {
        this.tableData.push({
          name: this.name,
          section: this.section,
          studentID: this.studentID,
          time: this.timeInput,
          date: this.dateInput,
          violation: this.violationInput,
        });
        this.clearInputs();
      }
    },
    addViolation2() {
      if (this.validateInputs()) {
        this.tableData.pop();
        this.tableData.push({
          name: this.name,
          section: this.section,
          studentID: this.studentID,
          time: this.timeInput,
          date: this.dateInput,
          violation: this.violationInput,
        });
      }
    },
    clearInputs() {
      this.name = '';
      this.section = '';
      this.studentID = '';
      this.timeInput = '';
      this.dateInput = '';
      this.violationInput = '';
    },
    togglePopup1() {
      if (this.validateInputs(true)) {
        document.getElementById("popup-1").classList.toggle("active");
        this.addViolation2();
      }
    },
    togglePopup2() {
      const popupElement1 = document.getElementById("popup-1");
      document.getElementById("popup-2").classList.toggle("active");
      popupElement1.classList.remove("active");
      this.clearInputs();
    },
    closePopup() {
      const popupElement1 = document.getElementById("popup-1");
      const popupElement2 = document.getElementById("popup-2");
      if (popupElement1.classList.contains("active")) {
        popupElement1.classList.remove("active");
      } else {
        popupElement2.classList.remove("active");
      }
    },
    validateInputs() {
      if (!this.name.trim()) {
        alert('Please enter a name.');
        return false;
      }

      if (!this.section.trim()) {
        alert('Please enter a section.');
        return false;
      }
      if (!this.studentID.trim()) {
        alert('Please enter Student ID.');
        return false;
      }

      if (!this.timeInput.trim()) {
        alert('Please enter Time.');
        return false;
      }

      if (!this.dateInput.trim()) {
        alert('Please enter Date.');
        return false;
      }

      if (!this.violationInput.trim()) {
        alert('Please enter Violation.');
        return false;
      }
      return true;
    },
  },
};
</script>

<template>
<bg/>
<div id="transparent"></div>
<div id="sekyu">
  <h1>SECURITY</h1>
</div>
<div id="container1">
  <div id = "id">
  <div id="image"></div>
  <div id="name">
    <h2 class="info">Jazmine Rose Quitoras</h2>
  </div>
  <div id="section">
    <h3 class="'info'">BSIT-2B</h3>
  </div>
</div>
<div id="container-content">
  <div id="header">
    <h2 id = "first">Student ID</h2>
    <h2 id = "second">Time</h2>
    <h2 id = "third">Date</h2>
    <h2 id = "fourth">Violation</h2>
    <div id="fields">
      <div class="form-outline">
        <input v-model="studentID" type="text" class="form-control" />
        <label class="form-label" for="form1"></label>
      </div>
      <div class="cs-form">
        <input v-model="timeInput" type="time" class="form-control" />
      </div>
      <div class="md-form md-outline input-with-post-icon datepicker">
        <input v-model="dateInput" placeholder="Select date" type="date" id="example" class="form-control">
        <label for="example"></label>
      </div>
    </div>
    <div id="below-input">
      <input v-model="violationInput" type="text" class="form-control" />
      <label class="form-label" for="form4"></label>
    </div>
  </div>
</div>
<div id="buttons">
  <button type="button" @click="clearInputs()" id = "option1" class="btn btn-danger">Clear</button>
  <button type="button" @click="togglePopup1()"  id = "option2" class="btn btn-success">Send</button>
</div>
</div>
<div class="popup" id="popup-1">
  <div class="overlay"></div>
    <div class="content">
      <p>
        Are you sure do you want to submit this report to the OSAD? 
        Kindly check the details before submitting the report.
      </p>
      <table>
        <thead>
          <tr>
            <th>Student's Name</th>
            <th>Section</th>
            <th>Student ID</th>
            <th>Time</th>
            <th>Date</th>
            <th>Violation</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(entry, index) in tableData" :key="index">
            <td>{{ entry.name }}</td>
            <td>{{ entry.section }}</td>
            <td>{{ entry.studentID }}</td>
            <td>{{ entry.time }}</td>
            <td>{{ entry.date }}</td>
            <td>{{ entry.violation }}</td>
          </tr>
        </tbody>
      </table>
      <div id="options">
        <button type="button" @click="closePopup" id = "option1" class="btn btn-danger">Back</button>
        <button type="button" @click="togglePopup2" id = "option2" class="btn btn-success">Confirm</button>
      </div>
    </div>
  </div>
  <div class="popup" id="popup-2">
    <div class="overlay"></div>
    <div class="content">
      <p>
        The report has been sent to the OSAD.
      </p>
      <button type="button" @click="closePopup" class="btn btn-danger">Back</button>
    </div>
    </div>
</template>
<style scoped>
*{
  overflow: hidden;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
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
#sekyu{
  color: #FFF;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 100em;
  font-style: normal;
  font-weight: 300;
  position: absolute;
  top: 6.5%;
  left: 4%;
}
#container1 {
  width: 100%; 
  height: 73%; 
  background-color: #0D0D0D;
  color: white;
  position: absolute;
  top: 55.5%; 
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
#container-content{
  width: 56.5%; 
  height: 46%;
  top: 17%;
  left: 37%;
  background-color: white;
  position: absolute;
  border-radius: 20px;
}
#header{
  height: 100%;
}

#header h2{
  display: inline;
  color: white;
  background-color: #262626;
  padding: 0.156em 0.625em;
  margin: 1.563em;   
  border-radius: 5px;
}
#header #first{   
    position: relative;
    top: 0.938em;
    left: 7.2%;
}
#header #second{   
    position: relative;
    top: 0.938em;
    left: 14.7%;
}
#header #third{   
    position: relative;
    top: 0.938em;
    left: 25.7%;
}
#header #fourth{   
    position: relative;
    top: 5.763em;
    left: -24.5%;
}
#fields{
    position: absolute;
    top: 30%;
    left: 4.7%;
    width: 90%;
    display: flex;
    flex-direction: row;
    height: 10.5%;
}
#fields .form-outline{
  position: relative;
  border: rgb(189, 175, 175) 1px solid;  
  width: 70%;
  border-radius: 5px;
  margin: 0 1%;

}
#fields .cs-form{
    position: relative;
    margin: 0 1%;
    width: 70%;
    border-radius: 5px;
}
#fields .md-form {
    position: relative;  
    margin: 0 1%;
    width: 70%;
    border-radius: 5px;
}
#image{
    background: rgb(255, 255, 255);
    border-radius: 50%;
    width: 22%;
    height: 55%;
    position: fixed;
    top: 10%;
    left: 7%;
}
#below-input{
    position: absolute;
    height: 13%;
    width: 63%;
    top: 73%;
    left: 19%;
    border:rgb(189, 175, 175) 1px solid;  
    border-radius: 5px;
    display: inline-flex;
}
#buttons{
  position: absolute;
  top: 70%;
}
#buttons #option1{
    position: fixed;
    left: 45%;
    width: 300px;
}
#option2{
    position: fixed;
    left: 70%;
    width: 300px;   
}
#label h3{
    color:white;
    padding: 10px;
    text-align: center;
}
#name{
    width: 640px;
    height: 40px;
    position: absolute;
    top:520px;
    display: flex;
    align-items: center;
    justify-content: center;
}
#id{
    width: 500px;
}
#section{
    width: 640px;
    height: 30px;  
    position: absolute;
    top:560px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.info {
    margin-bottom: 10px; 
}
.popup .overlay{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
    display: none;
}
.popup .content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) scale(0);
    background: #fff ;
    width: 700px;
    height: 250px;
    z-index: 2;
    text-align:center;
    padding: 20px;
    box-sizing: border-box;
    color: black;
    border-radius: 30px;
    transition: all 300ms ease-in-out;
}
.popup.active .overlay{
    display: block;
}
.popup.active .content{
    transition: all 300ms ease-in-out;
    transform: translate(-50%,-50%) scale(1);
}
.content th{
    position: relative;
    left: 20px;
    padding-right: 40px;
    align-items: center;
}
#options{
    position: relative;
    top: 20px; 
    align-items: center;
    margin: 10px;
}
#options #option1{
  width: 120px;
  height: 35px;
  position: fixed;
  left: 10%;
}
#options #option2{
  width: 120px;
  height: 35px;
  position: fixed;
}
#popup-2 .content{
    width: 500px;
    height: 130px;
}
table{
  border: #0D0D0D 1px solid;
}
.popup-1{
  width: auto;
  height: auto;
}
</style>