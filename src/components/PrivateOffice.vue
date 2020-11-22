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
              <img :src="item.userImageString">
            </v-avatar>
          </v-col>
        </v-row>

        <v-row>
          <v-col align="center">
            <v-btn rounded dark color="light-green" @click='pickUserImage'>
              Изменить фото
            </v-btn>
            <input type='file'
              style='display: none'
              ref='userFileInput'
              accept='image/*'
              @change="onUserFilePicked">

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
              @click='pickOrgImage'
              x-large 
              color="grey lighten-2"
              class="mx-2">
              <v-icon x-large dark>
                mdi-plus
              </v-icon>
            </v-btn>
            <input type='file'
            style='display: none'
            ref='orgFileInput'
            accept='image/*'
            @change="onOrgFilePicked">
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
        name: "None",
        phone: "None",
        organization: "None",
        site: "None",
        userImageString: "https://www.angulararchitects.io/wp-content/uploads/2019/06/wso-softwarearchitekt-placeholder-male.svg",
        userImage: null,
        orgImageString: "",
        orgImage: null,
        pets:[]
      }
    }
  },
  mounted: async function () {
    if(!this.$store.getters.user){
      return
    }
    while(!this.$store.getters.getUserData){
      console.log("Waiting...")
       await this.sleep(500)
    }
    const uid = await this.$store.dispatch('getUid')
    const promise = await firebase.database().ref("users/"+uid+'/data')
    promise.on('value', function(data){
        return data.val()
    }).then((userData)=>{
        console.log("data "+this.$store.getters.getUserData)
        this.item.name = userData.name
        this.item.phone = userData.phone
        this.item.email = userData.email
        this.item.organization = userData.organization
        this.item.site = userData.site
        this.item.userImageString = userData.userImage ? userData.userImage : this.item.userImageString
        this.item.orgImageString =  userData.orgImage ? userData.orgImage : null
      })
    // const userData = this.$store.getters.getUserData
  },
  methods:{
    onUserFilePicked(event){
      const files = event.target.files
      let filename = files[0].name
      if(filename.lastIndexOf('.')<=0){
        return alert("Файл поврежден")
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', ()=>{
        this.item.userImageString = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.item.userImage = files[0]
    },
    onOrgFilePicked(event){
      const files = event.target.files
      let filename = files[0].name
      if(filename.lastIndexOf('.')<=0){
        return alert("Файл поврежден")
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', ()=>{
        this.item.orgImageString = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.item.orgImage = files[0]
    },
    pickUserImage(){
      this.$refs.userFileInput.click()
    },
    pickOrgImage(){
      this.$refs.orgFileInput.click()
    },
    async sleep(ms){
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    async logout(){
      console.log("Logout")
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/')
          this.$router.go()
        })
    },
    async saveUserData(){
      const uid = await this.$store.dispatch('getUid')
      await firebase.database().ref('users/'+uid+'/data').set({
        name: this.item.name,
        organization: this.item.organization,
        site: this.item.site,
        phone: this.item.phone,
        userImage: this.item.userImageString,
        orgImage: this.item.orgImageString
      })
      console.log("Data saved")
      this.$router.go()
    }
  }
}
</script>
<style scoped>

.profile-name{
  color: #22431F;
}

</style>