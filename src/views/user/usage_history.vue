<template>
    <v-container class="ma-0 pa-0" fluid>
      <v-layout class="ma-0 pa-0" wrap>
        <v-flex xs12 lg12>
          <v-card-title class="justify-center mt-12 display-2">利用履歴</v-card-title>
        <v-row >
          <v-col cols="12" lg="12" v-for="item in items" :key="item.id" align-self="center">
            <v-card class="mx-6 pa-0" max-width="1500">
              <v-row>
                <v-col cols="6" lg="5">
                  <v-img
                    class="my-3 pa-0"
                    :src="imageurl"
                    contain
                    height="200"/>
                </v-col>
                <v-col cols="6" lg="6" class="font-weight-light">
                  {{name}}:{{item.name}}<br/>
                  {{usage_day}}:{{item.usage_day}}
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        </v-flex>
      </v-layout>
    </v-container>
</template>
<script>
    export default {
        data() {
            return {
                name:'名前',
                usage_day:'利用日',
                imageurl:require("../../assets/people.jpg"),
                items: [
                    {
                      name:'田中太郎',
                      usage_day:'2020年03月25日',
                    },
                    {
                      name:'中川武',
                      usage_day:'2020年05月25日',
                    },
                    {
                      name:'中川聖',
                      usage_day:'2020年02月25日'
                    },
                    {
                    name:'中川聖',
                      usage_day:'2020年02月25日'
                    },
                    {
                      name:'中川聖',
                      usage_day:'2020年02月25日'
                    },
                    {
                    name:'中川聖',
                      usage_day:'2020年02月25日'
                    }
                ]
            }
        },
    }
</script>
