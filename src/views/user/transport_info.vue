<template>
<v-container>
  <v-layout>
    <v-flex xs=12 sm=6 md=6 >
      <v-row justify="center" class="mt-13">
        <v-card elevation="0" class="justify-center" width="700" height="auto">
          <h2 class="pa-4 font-weight-light">配達希望時刻</h2>
          <v-row class="ma-3">
            <v-col sm="2">
              <v-select
              v-model="Time"
              :items="time">
              </v-select>
            </v-col>
          <div class="mt-10">
            時
          </div>
          <v-col sm="2">
            <v-select
            v-model="Minute"
              :items="minute"
              ></v-select>
          </v-col>
          <div class="mt-10">
            分
          </div>
      </v-row>
      <h2 class="pa-4 font-weight-light">荷物の重量</h2>
        <v-row class="ma-3">
          <v-col sm="2">
            <v-text-field>
              {{kg}}
            </v-text-field>
          </v-col>
          <div class="mt-10">
            kg以下
          </div>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-btn rounded x-large color="primary"
            >1キロ</v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn rounded x-large color="primary">3キロ</v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn rounded x-large color="primary">5キロ</v-btn>
          </v-col>
        </v-row>
          <div class="my-2 text-right">
            <v-btn x-large color="primary">決定</v-btn>
          </div>
      </v-card >
      </v-row>
    </v-flex>
  </v-layout>
</v-container>
</template>
<script>
export default {
    data(){
        return{
          kg:'',
          Time:'1',
          time:[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
          Minute:'1',
          minute:''

        }
    },
    methods: {

    },
}
</script>
