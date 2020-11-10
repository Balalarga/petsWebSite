<template>
  <v-app :style="[{background:'url(https://i.pinimg.com/736x/58/06/30/5806308614ce9a80f25fa0db49016fe4.jpg)  no-repeat'},{backgroundSize:'cover'}]">
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
