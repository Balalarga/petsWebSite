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
              <v-img v-bind:src="item.photo"
              aspect-ratio="1.7">
              </v-img>
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
                  <td>{{item.description}}</td>
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
                      <v-img 
                      :src="item.homeImage">
                      </v-img>
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
        photo: "",
        owns: false,
        description: "",
        home: "",
        homeImage: "",
        phone: "",
        userName: "",
        homeRef: ""
      }
    }
  },
  mounted: async function () {
    let curItem = null
    const self = this
    firebase.database().ref('pets/'+this.$route.params.id).on('value', function(snapshot){
      curItem = snapshot.toJSON()
      console.log("Mounting PostDetails")
      console.log(curItem)
      self.item.name = curItem.name
      self.item.description = curItem.description
      self.item.parent = curItem.parent
      self.item.photo = curItem.photo
      self.item.home = curItem.home
      self.item.homeImage = curItem.homeImage
      self.item.phone = curItem.phone
      self.item.userName = curItem.userName
      self.item.homeRef = curItem.homeRef
    })
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