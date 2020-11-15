<template>
  <v-app :style="[{background:'url()  no-repeat'},{backgroundSize:'cover'}]">
    <v-app-bar color="rgba(255,255,255, 0.6)" flat  app>
      <v-toolbar-title>YOUR friends</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items >
        <v-btn 
          color="transparent" 
          depressed
          v-for="item in menuItems" 
          :key="item.title"
          router
          :to="item.link"
        >
          <v-icon>{{item.icon}}</v-icon> 
          {{item.title}}
        </v-btn>
        <v-btn 
          color="transparent" 
          depressed
        >
          <v-icon @click="accountButton()">mdi-account</v-icon> 
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    
    <v-main>
      <v-container fluid> 
        <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          Заригистрированны у нас?
        </v-card-title>
        <v-card-text>Для доступа к личному кабинету вы должны зарегистрировать новый аккаунт или авторизоваться через существующий </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
            router :to="'/Registration'"
          >
            Registrate
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
            router :to="'/log'"
          >
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>    
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer color="#B7B7B7" app>
     lul
    </v-footer>
  </v-app>
</template>

<script>
import store from '@/store'
export default {
  data (){
    return{
      dialog: false,
      menuItems: [
        {title:'Объявления', link:'/'},
        {title:'Интересное', link:'/Info'},
        {title:'О нас', link:'/AboutUs'}
      ]
    }
  },
  methods:{
    accountButton(){
      if(store.getters.checkUser)
        this.dialog = true
      else
        this.$router.push('/PrivateOffice')
    }
  }
};
</script>
