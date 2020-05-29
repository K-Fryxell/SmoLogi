<template>
    <div>
      <h1>{{message}}</h1>
      <input v-model="message"/>
    </div>
</template>
<script>
export default {
    data(){
        return{
          message: "Hello Vue.js!"
        }
    }
}
</script>
