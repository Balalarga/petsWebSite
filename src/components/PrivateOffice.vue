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
              <img :src="item.userImage">
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
                  <v-btn small rounded dark color="light-green"
                  :to="{name: 'Announcement'}">
                    Добавить объявление
                    <v-icon small dark>
                     mdi-plus-circle-outline
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>

              <v-row class="text-center">
                <v-col>
                  <h2 class="profile-name">Ваши объявления</h2>
                </v-col>
              </v-row>

              <v-row><div id="grid">
                <div class="card" v-for="pet in pets" :key="pet">
                  <a :href="'/PostDetails/'+pet.id" >
                    <div class="img">
                      <v-img v-bind:src="pet.photo"
                        class="rounded-circle mr-1 mb-2"
                        max-width="150"
                        max-height="150"
                        min-height="150"
                        min-width="150"
                        aspect-ratio="1.7">
                      </v-img>
                    </div>
                    <div class="lable">
                      <span>{{pet.name}}</span>
                    </div>
                  </a>
                </div>
              </div></v-row>

            </v-card>
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-col>
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

      

  </v-container>
</template>

<script>
import firebase from "firebase/app"
import { mapGetters } from "vuex";
export default{
  data(){
    return {
      item: {
      },
      pets:[]
    }
  },
  computed: {
    ...mapGetters({
      getUserUID: "getUserUID",
      getPets: "getPets",
      getData: "getData"
    })
  },
  created(){
    console.log("Load data: ")
    console.log(this.getData)
    this.item.name = this.getData.name
    this.item.organization = this.getData.organization
    this.item.site = this.getData.site
    this.item.phone = this.getData.phone
    this.item.userImage = this.getData.userImage
    this.item.orgImage = this.getData.orgImage
    if(this.getPets){
      console.log(this.getPets)
     for (const [key, value] of Object.entries(this.getPets)){
        value.id = key
        this.pets.push(value)
      }
      console.log(this.pets)
    }
    else{
      console.log("No pets founded")
    }
    const self = this
    firebase.database().ref("users/"+this.getUserUID+"/data")
    .on("value", (result)=>{
      self.item = result.val()
    })
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
        this.item.userImage = fileReader.result
        this.saveUserData()
      })
      fileReader.readAsDataURL(files[0])
    },
    onOrgFilePicked(event){
      const files = event.target.files
      let filename = files[0].name
      if(filename.lastIndexOf('.')<=0){
        return alert("Файл поврежден")
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', ()=>{
        this.item.orgImage = fileReader.result
        this.saveUserData()
      })
      fileReader.readAsDataURL(files[0])
    },
    pickUserImage(){
      this.$refs.userFileInput.click()
    },
    pickOrgImage(){
      this.$refs.orgFileInput.click()
    },
    async logout(){
      console.log("Logout")
      this.$store.dispatch('logout')
      setTimeout(()=>{}, 2000)
    },
    async saveUserData(){
      this.$store.dispatch('setUserData', {
        name: this.item.name,
        organization: this.item.organization,
        site: this.item.site,
        phone: this.item.phone,
        userImage: this.item.userImage,
        orgImage: this.item.orgImage
      }).then(()=>{
        alert("Изменения сохранены")
      })
      console.log("Data saved")
      setTimeout(() => {}, 2000)
    }
  }
}
</script>


<style scoped>
#grid { 
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2vw;
  flex-flow: row wrap;
  display: flex;
  justify-content: left;
  max-width: 1400px;
  margin-left: 5%;
  
}
.card {
    align-items: center;
    display: flex;
    flex-direction: column;
}
.img {
    max-width: 650px;
    color:grey lighten-1;
    max-height: 150px;
    min-height: 150px;
    min-width: 150px;
    align-items: center;
    align-self: center;    
}

.lable {
    background-color: rgba(255, 255, 255, 0.8);
    margin-top: 10px;
    padding: 5px 0;
    min-width: 50%; 
    align-self: center;
    align-items: center;
    border-radius: 15px;
    box-shadow: 0 3px 0 rgba(0,0,0,0.2);
    text-align: center;
    margin: 0, auto;
    color: black;
    
}

</style>