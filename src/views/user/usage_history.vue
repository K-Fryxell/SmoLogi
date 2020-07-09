<template>
<v-container>
  <v-layout>
    <v-flex xs=12 sm=6 md=6 >
      <v-row justify="center" class="mt-13">
        <v-card class="justify-center" width="700" height="auto">
          <h1 class="pa-4 font-weight-light">利用履歴</h1>
          <v-row>
            <v-col>
              <v-img height="150" width="200" :src="imageurl"></v-img>
            </v-col>
            <v-col>
              <div class="my-2">
        <h2 class="my-2  font-weight-light">利用日:2020年3月5日</h2>
        </div>
        <div class="my-2">
          <h2 class="font-weight-light">名前:田中太郎</h2>
        </div>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-flex>
  </v-layout>
</v-container>
</template>
<script>
export default {
    data(){
        return{
          imageurl:require("../../assets/oba.jpg")
        }
    },
}
</script>
