<template>
<!-- Navbar (sit on top) -->
<div class="w3-top">
  <div class="w3-bar w3-white w3-card" id="myNavbar">
    <a href="#home" class="w3-bar-item w3-button w3-wide" >University Violation Tracker</a>
    <!-- Right-sided navbar links -->
    <div class="w3-right w3-hide-small">
      
      
    </div>
    <!-- Hide right-floated links on small screens and replace them with a menu icon -->

    <a href="javascript:void(0)" class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="w3_open()">
      <i class="fa fa-bars"></i>
    </a>
  </div>
</div>

<!-- Header with full-height image -->
<header class="w3-display-container w3-grayscale-min" id="bgimg-1">
  <div class="w3-display-left w3-text-white" style="padding:48px">
    <span class="w3-jumbo w3-hide-small">Start something that matters</span><br>
    <span class="w3-xxlarge w3-hide-large w3-hide-medium">Start something that matters</span><br>
    <span class="w3-large">Stop wasting valuable time with projects that just isn't you.</span>
    <p><a href="#" class="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">Security Login</a></p>
    <p><a href="#" class="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">Security Signup</a></p>
    <p><a href="#" class="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">OSAD Login</a></p>
    <p><a href="#" class="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">OSAD Signup</a></p>
  </div> 
  <div class="w3-display-bottomleft w3-text-grey w3-large" style="padding:24px 48px">
    
    <i ><img src="https://scontent.fcrk4-1.fna.fbcdn.net/v/t1.15752-9/386863743_1025693781934609_5964617655279449116_n.png?_nc_cat=109&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=bRBhaN_0pwsAX9c4bmS&_nc_ht=scontent.fcrk4-1.fna&oh=03_AdSPB3tLflTpmR05RAiWjgtToCkahzYCwPhDfDToQCA5bg&oe=659F8B82" class="center"></i>
  </div>
</header>
<!-- About Section -->
<div class="w3-container" style="padding:128px 16px" id="about">
  <h3 class="w3-center">ABOUT THE UNIVERSITY VIOLATION TRACKER</h3>
  <p class="w3-center w3-large">Key features of our System</p>
  <div class="w3-row-padding w3-center" style="margin-top:64px">
    <div class="w3-quarter">
      <i class="fa fa-desktop w3-margin-bottom w3-jumbo w3-center"></i>
      <p class="w3-large">DESCRIPOTION</p>
      <p>The Student Violation Management System assists the institution in making processes easier, reducing paperwork, and speeding up transactions between students and authorized persons in terms of processing student violations. Using this system, the authorized person can monitor the students' violations in order to prevent them from happening again. </p>
    </div>
    <div class="w3-quarter">
      <i class="fa fa-heart w3-margin-bottom w3-jumbo"></i>
      <p class="w3-large">Passion</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    </div>
    <div class="w3-quarter">
      <i class="fa fa-diamond w3-margin-bottom w3-jumbo"></i>
      <p class="w3-large">Design</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    </div>
    <div class="w3-quarter">
      <i class="fa fa-cog w3-margin-bottom w3-jumbo"></i>
      <p class="w3-large">Support</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    </div>
    
  </div>
</div>
<!-- Footer -->
<footer class="w3-center w3-black w3-padding-64">
  <a href="#home" class="w3-button w3-light-grey"><i class="fa fa-arrow-up w3-margin-right"></i>To the top</a>\
  <p>Created by: <a href="https://sites.google.com/uic.edu.ph/uvt/home" title="W3.CSS" target="_blank" class="w3-hover-text-green">Group 12</a></p>
</footer>
</template>

<script>
export default {
  name: 'OSAD',
};
</script>

<style>
 @import url('https://www.w3schools.com/w3css/4/w3.css');
 @import url('https://fonts.googleapis.com/css?family=Raleway');
 @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

body,h1,h2,h3,h4,h5,h6 {font-family: "Raleway", sans-serif}

body {
  height: 100%;
  line-height: 1.8;
}

/* Full height image header */
header{
  background-position: center;
  background-size: cover;
  background-image: url('../assets/a.png');
  min-height: 100%;
}

.w3-bar .w3-button {
  padding: 16px;
}
.center {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 5vh; /* Optional: This will center the image vertically within the viewport */
      width: "30";
      height: "50";
      margin-left: -20%;
    
}
</style>