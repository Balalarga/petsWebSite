<template>
  <v-app :style="[{background:'url(http://st.gde-fon.com/wallpapers_original/428142_koshka_kotenok_igrushka_igra_perya_1920x1200_www.Gde-Fon.com.jpg)  no-repeat'},{backgroundSize:'cover'}]">
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
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Log/reg
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">
          Use Google's location service?
        </v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
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
export default {
  data (){
    return{
      dialog: false,
      menuItems: [
        {title:'Объявления', link:'/'},
        {title:'Интересное', link:'/Info'},
        {title:'О нас', link:'/AboutUs'},
        {icon:'mdi-account', link:'/PrivateOffice'}
      ]
    }
  }
};
</script>
