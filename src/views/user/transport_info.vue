<template>
<v-container class="ma-0 pa-0" fluid>
  <Uheader/>
  <v-layout class="ma-0 pa-0" wrap>
    <v-flex xs12 lg12>
        <v-card class="mt-12 pa-0" height="100%" elevation="0" style="width:1440px;">
          <v-card-title class="justify-center">運搬情報</v-card-title>
              <v-form ref="form" v-model="decision">
                <v-row justify="center" class="ma-0 pa-0">
                  <v-col cols="12" lg="2">
                    <v-row justify="center" class="ma-0 pa-0">
                        <v-col lg="auto">
                          <h2 class="pt-4 display-6 font-weight-light">配達希望時刻</h2>
                        </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="auto" style="width:110px">
                    <v-select
                      v-model="Time"
                      :items="time"
                      hide-details
                      single-line
                    />
                  </v-col>
                  <v-col cols="auto" class="mt-5 ml-n4">
                    時
                  </v-col>
                  <v-col cols="auto" style="width:110px;">
                    <v-select
                      v-model="Minute"
                      :items="minute"
                      hide-details
                      single-line
                    />
                  </v-col>
                  <v-col cols="auto" class="mt-5 ml-n4">
                    分
                  </v-col>
                  </v-row>
                  <v-row justify="center" class="ma-0 pa-0">
                    <v-col cols="12" lg="2" >
                      <v-row justify="center" class="ma-0 pa-0">
                          <v-col lg="auto">
                            <h2 class=" pt-2 font-weight-light" display-6>荷物の重量</h2>
                          </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="auto" style="width:110px">
                      <v-text-field v-model="weight"/>
                    </v-col>
                    <v-col cols="auto" class="mt-5 ml-n4">
                      kg以下
                    </v-col>
                  </v-row>
                    <v-row class="ma-0 pa-6" justify="center">
                      <v-col cols="4" lg="auto">
                        <v-btn
                          @click="select(1)"
                          width="100"
                        height="50"
                          large
                          outlined
                          color="grey darken-2"
                          >
                          1キロ
                        </v-btn>
                      </v-col>
                      <v-col cols="4" lg="auto">
                        <v-btn
                          @click="select(3)"
                        width="100"
                        height="50"
                          large
                          outlined
                          color="grey darken-2"
                          >
                          3キロ
                        </v-btn>
                      </v-col>
                      <v-col  lg="auto">
                        <v-btn
                        width="100"
                        height="50"
                          @click="select(5)"
                          large
                          outlined
                          color="grey darken-2"
                          >
                          5キロ
                        </v-btn>
                      </v-col>
                    </v-row>
                    <v-row justify="center" class="mb-12 mt-5">
                      <v-btn
                        width="100"
                        height="60"
                        :disabled="!decision"
                        x-large
                        @click="decide"
                      >
                        決定
                      </v-btn>
          </v-row>
        </v-form>
        </v-card>
    </v-flex>
  </v-layout>
  <Ufooter/>
</v-container>
</template>
<script>
import Uheader  from '../../components/User/Uheader'
import Ufooter from '../../components/User/Ufooter'
export default {
    data(){
        return{
          Time:'1',
          time:[8,9,10,11,12,13,14,15,16,17,18,19,20,21],
          Minute:"0",
          minute:[0,10,15,20,25,30,35,40,45,50,55],
          weight:'',
          x:0,
          y:0,
          size:"display-1",
          array:{},
          decision:true,
          }
        },methods:{
          select(kg){
            this.weight=kg
        },
          validate(){
            this.$refs.form.validate()
          },
          decide(){
            this.array['timenum']=this.Time
            this.array['Minutenum']=this.Minute
            this.array['weight']=this.weight
            return this.$store.commit('decide', this.array)
          }
        },components: {
          Ufooter,
          Uheader,
        },
      }
</script>
