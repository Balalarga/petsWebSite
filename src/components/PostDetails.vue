<template>
  <v-container fluid>
    <v-row>
      <v-col class="text-center">
        <h1 class="profile-name">{{item.name}}<!--, {{animal.age}} (г. {{animal.city}})--></h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="text-center">
        <v-row>
          <v-col>
            <v-avatar
              color="grey lighten-1"
              size="200">
              <img v-bind:src="item.photo">
            </v-avatar>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn
            rounded dark
            color="light-green"
            v-if='owns()'
            :to="{name: 'UpdatePet',params: {id: this.$route.params.id}}">
              Редактировать
            </v-btn>
          </v-col>
        </v-row>
      </v-col>

      <v-col>
        <v-row>
          <v-col>
            <v-card color="grey lighten-1">
              <!--<v-card-text>
                <tr>
                  <td style="width: 45%;" class="text-left">
                    <tr><th>Пол животного:</th></tr>
                    <tr><th>Порода:</th></tr>
                    <tr><th>Возраст:</th></tr>
                    <tr><th>Вес:</th></tr>
                  </td>
                  <td>
                    <tr>{{this.item.name}}</tr>
                    <tr>{{item.sex}}</tr>
                    <tr>{{item.breed}}</tr>
                    <tr>{{item.age}}</tr>
                    <tr>{{item.weight}}</tr>
                  </td>
                </tr>
              </v-card-text>-->
              <v-card-text>
                <tr>
                  <td>{{this.item.description}}</td>
                </tr>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col>
        <v-row>
          <v-col></v-col>
          <v-col cols="10" class="text-center">
            <v-card color="grey lighten-1">
              <v-row>
                <v-col>
                  <a :href="item.homeRef">
                    <h2 class="profile-name">{{item.home}}</h2>
                  </a>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-avatar
                    color="grey lighten-1"
                    size="140">
                    <a :href="item.homeRef">
                      <img :src="item.homeImage">
                      </a>
                  </v-avatar>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <h3 class="profile-name" v-if='item.phone'>Телефон: {{item.phone}}({{item.userName}})</h3>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from 'firebase/app'
export default{
  data(){
    return{
      item: {
        name: "text",
        photo: null,
        owns: false,
        description: null,
        home: null,
        homeImage: null,
        phone: null,
        userName: null,
        homeRef: null
      }
    }
  },
  mounted: async function () {
    let curItem = null
    const item = await firebase.database().ref('pets/'+this.$route.params.id)
    item.on('value', function(snapshot){
      curItem = snapshot.toJSON()
    })
    this.item.name = curItem.name
    this.item.description = curItem.description
    this.item.parent = curItem.parent
    this.item.photo = curItem.photo
    this.item.home = curItem.home
    this.item.homeImage = curItem.homeImage
    this.item.phone = curItem.phone
    this.item.userName = curItem.userName
    this.item.homeRef = curItem.homeRef
  },
  methods:{
    owns(){
      return this.item.parent == this.$store.getters.getUserUID
    }
  }
}
</script>
<style scoped>

.profile-name{
  color: #22431F;
}

</style>