<template>
  <router-view/>
</template>

<style>
  *{
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
  }
  html,body{
    margin: 0;
    height: 100%;
    width: 100%;
  }
  .page{
    height: 100vh;
    width: 100vw;
  }
  h1,h2,h3,h4,h5,h6,p{
    margin: 0;
  }
  .button-round{
    background-color: #1E4674;
    border-radius: 50px;
    height: 50px;
  }
  .button-round p {
    position: relative;
    top:50%;
    text-align: center;
    transform: translateY(-50%);
    color:white
  }
  .logo-container{
      display: flex;
  }
  .logo-container h2{
    font-size: 22px;
    position: relative;
    top: 60%;
  }
  .intro-container{
    display: flex;
    flex-direction: column;
    padding: 25px;
  }
  .sub-title{
    color: #4581C7;
  }
  .overlay{
    height: 100%;
    width: 100%;
    position: relative;
    top:0;
    left:0;
    background: rgba(0, 0, 0, 0.45);
  }
  .modal-header{
    height: 60px;
  }
  .modal-body{
    flex: 1;
  }
  .modal-footer{
    height: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .modal-footer p{
    color: #4581C7;
  }
  .app-page{
    flex:1;
    background-color:white;
    overflow: auto;
  }
</style>
