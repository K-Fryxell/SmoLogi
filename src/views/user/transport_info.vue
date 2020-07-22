<template>
<v-container class="ma-0 pa-0" fluid>
  <v-layout class="ma-0 pa-0" wrap>
    <v-flex xs12 lg12>
        <v-card class="ma-0 pa-0" elevation="0">
                <h2 class="pa-4 font-weight-light">配達希望時刻</h2>
                  <v-row class="ma-3">
                    <v-col cols="4" lg="2">
                      <v-select
                        v-model="Time"
                        :items="time">
                      </v-select>
                    </v-col>

                    <div class="mt-10">
                      時
                    </div>

                <v-col cols="4" lg="2">
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
                <v-col cols="4" lg="2">
                  <v-text-field v-model="weight"></v-text-field>
                </v-col>

                <div class="mt-10">
                  kg以下
                </div>
              </v-row>
              <v-row class="mx-6">
                <v-col cols="2" lg="2">
                  <v-btn @click="select(1)" rounded x-large color="primary"
                  >1キロ</v-btn>
                </v-col>

                <v-col cols="2" lg="2">
                  <v-btn @click="select(3)" rounded x-large color="primary">3キロ</v-btn>
                </v-col>

                <v-col cols="2" lg="2">
                  <v-btn @click="select(5)" rounded x-large color="primary">5キロ</v-btn>
                </v-col>
              </v-row>
              <div class="ma-3">
                <v-btn x-large color="primary">決定</v-btn>
              </div>
        </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>
<script>
export default {
    data(){
        return{
          Time:'1',
          time:[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
          Minute:'1',
          minute:[10,20,30,40,50],
          weight:''

        }
    },
    methods: {
      select(kg){
        this.weight=kg
      }

    },
}
</script>
