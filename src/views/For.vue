<template>
    <div>
      <ol>
        <li v-for="(item, index) in list" :key="index">{{item}}</li>
      </ol>
    </div>
</template>
<script>
export default {
    data(){
        return{
          list: ["ばなな","いちご","りんご"]
        }
    }
}
</script>
