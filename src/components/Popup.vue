<template>
    <div class="popup">
        <div class="popup-inner">
            <p>Are you sure you want to log out?</p>
            <div id="buttons">
                <button class="btn btn-danger" @click="TogglePopup()">Back</button>
            <button class="btn btn-success" @click="ToggleLogout()">Logout</button>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props: ['TogglePopup']
}
</script>

<style scoped>
.popup{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;

    .popup-inner{
        background:rgb(255, 255, 255);
        padding: 32px;
        border-radius: 5%;
        width: 25%;

    }
    .popup-inner p{
        color: black;
        display: flex;
        justify-content: center;
    }

}
#buttons{
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    position: relative;
    top: 51.5%;
    left: -51%;
}

</style>