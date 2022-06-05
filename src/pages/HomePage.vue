<template>
    <div class="home">
   <h1>Щоденник тренувань</h1>
   <div class="home__img">
       <img src="../assets/images/body3.png" alt="body">
   </div>
   <button class="btn" @click="$router.push({name: 'training'})">Почати</button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.home {
    width: 100%;
    height: 100%;
text-align: center;
position: relative;
display: flex;
justify-content: center;
}

h1 {
    font-size: 60px;
       position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
        background-image: linear-gradient(to right, rgb(188, 190, 190),  #b7b5ba);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}


.home__img {
    height: 450px;
}

.home__img img {
    height: 100%;
   filter: invert(90%) sepia(29%) saturate(12%) hue-rotate(103deg) brightness(84%) contrast(85%);
   opacity: 0.3;
   margin-top: 30px;
}

.btn {
    padding: 10px 25px;
    background: none;
    border: 2px solid rgb(2, 202, 202);
    border-radius: 5px;
    font-size: 22px;
    font-weight: bold;
    color: snow;
    position: absolute;
    bottom: 20%;
    z-index: 11;
}

.btn:hover {
    background:rgb(2, 202, 202);
    cursor: pointer;
    transform: scale(1.05);
    color: snow;
    transition: scale 0.4s ease-in-out
}
</style>