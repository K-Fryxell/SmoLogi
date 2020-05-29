<template>
    <div>
      <button v-on:click="alert">click</button>
    </div>
</template>
<script>
export default {
    methods:{
      alert: function() {
        alert("アラートだよ～。")
      }
    }
}
</script>
