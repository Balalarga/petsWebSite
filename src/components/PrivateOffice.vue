<template>
  <v-container fluid>
      <v-col>
        <v-row>
          <v-col align="center">
            <h1 class="profile-name">Ваша страница</h1>
          </v-col>
        </v-row>

        <v-row>
          <v-col align="center">
            <v-avatar
              color="grey lighten-1"
              size="248">
              <img src="https://www.angulararchitects.io/wp-content/uploads/2019/06/wso-softwarearchitekt-placeholder-male.svg">
            </v-avatar>
          </v-col>
        </v-row>

        <v-row>
          <v-col align="center">
            <v-btn rounded dark color="light-green">
              Изменить фото
            </v-btn>
          </v-col>
        </v-row>
      </v-col>

      <v-col>
        <v-row><v-col></v-col></v-row>

        <v-row><v-col></v-col></v-row>

        <v-row>
          <v-col>
            <v-text-field
              label="Имя"
              rounded
              solo
              v-model="item.name"
              dense
              background-color="grey lighten-2">
            </v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-text-field
              label="Телефон"
              rounded
              solo
              v-model="item.phone"
              dense
              background-color="grey lighten-2">
            </v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-text-field
              label="Название организации"
              rounded
              solo
              v-model="item.organization"
              dense
              background-color="grey lighten-2">
            </v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-text-field
              label="Сайт организации"
              rounded
              solo
              v-model="item.site"
              dense
              background-color="grey lighten-2">
            </v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="text-center">
            <v-btn 
              x-large 
              color="grey lighten-2"
              class="mx-2">
              <v-icon x-large dark>
                mdi-plus
              </v-icon>
            </v-btn>
          </v-col>
          <v-col left>
            Загрузить/изменить логотип организации
          </v-col>
        </v-row>

        <v-row class="text-center">
          <v-col>
            <v-btn rounded dark color="light-green">
              Изменить пароль
            </v-btn>
          </v-col>
        </v-row>

        <v-row class="text-center">
          <v-col>
            <v-btn @click="saveUserData" rounded dark color="light-green">
              Сохранить изменения
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="text-center">
          <v-col>
            <v-btn rounded dark color="light-green" @click="logout()">
              Выйти из профиля
            </v-btn>
          </v-col>
        </v-row>
      </v-col>

      <v-col>
        <v-row><v-col></v-col></v-row>

        <v-row>
          <v-col cols="2"></v-col>
          <v-col cols="8">

            <v-card 
              class="mx-auto"
              color="grey lighten-2">

              <v-row class="text-center">
                <v-col>
                  <v-btn small rounded dark color="light-green">
                    Добавить объявление
                    <v-icon small dark>
                     mdi-plus-circle-outline
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>

              <v-row class="text-center">
                <v-col>
                  <h2 class="profile-name">История объявлений</h2>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-btn :to="{name: 'Announcement'}"
                    dark
                    x-large
                    color="grey lighten-1"
                    class="mx-4"
                    fab>
                    <v-icon x-large dark>
                      mdi-plus
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>

            </v-card>

          </v-col>
          <v-col></v-col>
        </v-row>
      </v-col>

  </v-container>
</template>

<script>
import firebase from 'firebase/app'
export default{
  data(){
    return {
      item: {
        name: "",
        phone: "",
        organization: "",
        site: "",
        pets:[]
      }
    }
  },
  mounted: async function () {
    while(!this.$store.getters.getUserData){
       await this.sleep(500)
    }
    console.log("data "+this.$store.getters.getUserData)
    this.item.name = this.$store.getters.getUserData.name
    this.item.phone = this.$store.getters.getUserData.phone
    this.item.email = this.$store.getters.getUserData.email
    this.item.organization = this.$store.getters.getUserData.organization
    this.item.site = this.$store.getters.getUserData.site
  },
  methods:{
    async sleep(ms){
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    async logout(){
      console.log("Logout")
      await this.$store.dispatch('logout')
      this.$router.push("home")
    },
    async saveUserData(){
      const uid = await this.$store.dispatch('getUid')
      await firebase.database().ref('users/'+uid+'/data').set({
        name: this.item.name,
        organization: this.item.organization,
        site: this.item.site,
        phone: this.item.phone
        // photo: this.item.
      })
      console.log("Data saved")
    }
  }
}
</script>
<style scoped>

.profile-name{
  color: #22431F;
}

</style>