<template>
    <div>
      <button v-on:click="show=!show">切り替え</button>
      <p v-if="show">Hello Vue.js!</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
          show: true
        }
    }
}
</script>
