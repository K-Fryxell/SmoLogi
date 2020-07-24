<template>
  <v-card tile elevation="0" height="85">
    <v-toolbar dense flat>
        <v-toolbar-title>
            <router-link to="/user_mypage">
              <!--ロゴ <img> -->
            </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text >詳細変更</v-btn>
        <v-btn text >マイページ</v-btn>
        <v-btn text @click="logout" dark style="background-color: #57bd7d">ログアウト</v-btn>
        <v-btn @click="drawer = true">
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    components:{
    }
}
</script>
