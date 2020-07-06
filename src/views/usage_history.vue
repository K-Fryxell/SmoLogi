<template>
<v-container>
  <v-layout>
    <v-flex xs=12 sm=6 md=6 >
      <h1 class="display-5">利用履歴</h1>
      <v-card>
        <v-row>
            <v-img  height="200px" :src="imageurl"></v-img>
        <v-card-text>
          <div>利用日:2020年6月23日</div>
          <div>名前:田中太郎</div>
        </v-card-text>
        </v-row>
      </v-card>

    </v-flex>
  </v-layout>
</v-container>
</template>
<script>
export default {
    data(){
        return{
          imageurl:require("../assets/oba.jpg")
        }
    },
}
</script>
