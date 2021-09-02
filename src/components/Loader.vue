<template>
  <div class="loading" ref="loading">
      <div class="overlay"></div>
      <div class="loader"></div>
  </div>
</template>

<script>
export default {
    name: 'Loader',
    methods:{
        show:function(){
            this.$refs.loading.style.display = "block"
        },
        hide:function(){
            this.$refs.loading.style.display = "none"
        }
    }    
}
</script>

<style scoped>
    .loading{
        height: 100vh;
        width: 100vw;
        z-index: 10;
        position: absolute;
        top:0;
        left: 0;
        display: none;
    }
    .overlay{
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.45);
    }
    .loader {
        border: 4px solid #f3f3f3;
        border-radius: 50%;
        border-top: 4px solid #4581C7;
        width: 60px;
        height: 60px;
        position: absolute;
        top:50%;
        left: 43%;
        transform: translate(-50%,-50%);
        -webkit-animation: spin 2s linear infinite; /* Safari */
        animation: spin .5s linear infinite;
    }

    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>