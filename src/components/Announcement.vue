<template>
  <!-- <v-container fluid>
    <v-row>
      <v-col cols="10">
        <v-row>
          <v-col class="text-right">
            <h1 class="profile-name">Добавление объявления</h1>
            <v-btn :to="{name: 'PrivateOffice'}" color="grey lighten-2" rounded>Отменить</v-btn>
          </v-col>
            
        </v-row>
      </v-col>
      <v-col></v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-row>
          <v-col align="center">
            <img :src="photo" class="img">
          </v-col>
        </v-row>

      <v-row>
        <v-col align="center">
          <v-btn 
          large dark color=#22431F rounded
            @click='pickImage'>
            Добавить фото
          </v-btn>
          <input type='file'
            style='display: none'
            ref='fileInput'
            accept='image/*'
            @change="onPickImage">
        </v-col>
      </v-row>

      <v-row>
        <v-col align="center">
          <v-btn large dark color="grey lighten-1" rounded
          @click='deletePhoto'>
            Удалить фото
          </v-btn>
        </v-col>
      </v-row>
      </v-col>

      <v-col>
        <v-row>
          <v-col align="center">
            <v-text-field
              ref="name"
              v-model="name"
              label="Введите имя и возраст"
              rounded
              solo
              dense
              background-color="grey lighten-2">
            </v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col align="center">
            <v-textarea
              ref="description"
              v-model="description"
              rows="12"
              solo
              label="Введите текст объявления"
              background-color="grey lighten-2">
            </v-textarea>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="text-right">
            <v-btn @click="submit()" large dark color=#22431F rounded>
              Опубликовать
            </v-btn>
          </v-col>
        </v-row>
      </v-col>

      <v-col>

      </v-col>
    </v-row>
  </v-container>
 -->
 
  <div class=table>
    <div class=col1>
      <div class=row1>
        <span class=h1_title>Новое объявление</span>
      </div>

      <div class=row2>
        <div>
        <img :src="photo" class="img">
        </div>
        <div style='margin:10px'>
        <v-btn 
          large dark color=#22431F rounded
            @click='pickImage'>
            Добавить фото</v-btn></div>
        <div><v-btn large dark color="grey lighten-1" rounded
          @click='deletePhoto'>
            Удалить фото
          </v-btn></div>
      </div>
    </div>
    <div class=col2>
      <div class=row1>
        <v-btn :to="{name: 'PrivateOffice'}"  large dark color=#22431F rounded>Отменить</v-btn>
      </div>
      <div class=row1>
        <v-text-field
              ref="name"
              v-model="name"
              label="Введите имя и возраст"
              rounded
              solo
              dense
              background-color="grey lighten-2">
            </v-text-field>
            <v-textarea
              ref="description"
              v-model="description"
              rows="12"
              solo
              label="Введите текст объявления"
              background-color="grey lighten-2"
              rounded>
            </v-textarea>
            <v-btn @click="submit()" large dark color=#22431F rounded>
              Опубликовать
            </v-btn>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
export default{
  data(){
    return{
      name: null,
      photo: "https://i.pinimg.com/474x/64/49/b1/6449b12a5936e6b68249c38e0cd16cb6.jpg",
      description: null
    }
  },
  methods:{
    deletePhoto(){
      this.photo = 'https://i.pinimg.com/474x/64/49/b1/6449b12a5936e6b68249c38e0cd16cb6.jpg'
    },
    pickImage(){
      this.$refs.fileInput.click()
    },
    onPickImage(event){
      const files = event.target.files
      let filename = files[0].name
      if(filename.lastIndexOf('.')<=0){
        return alert("Файл поврежден")
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', ()=>{
        this.photo = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
    },
    async submit(){
      try{
        if(this.name == null || this.description == null){
          console.log("No data in fields")
          return;
        }
        const uid = this.$store.getters.getUserUID
        const userData = this.$store.getters.getData
        const petsData = firebase.database().ref('/pets')
        const newPet = petsData.push()
        const currDate = new Date()
        const dd = String(currDate.getDate()).padStart(2, '0');
        const mm = String(currDate.getMonth() + 1).padStart(2, '0');
        const yyyy = currDate.getFullYear();
        await newPet.set({
            name: this.name,
            description: this.description,
            parent: uid,
            date: mm + '/' + dd + '/' + yyyy,
            photo:this.photo,
            home: userData.organization,
            homeImage: userData.orgImage?userData.orgImage:"https://rayfund.ru/wp-content/uploads/2015/12/logo_facebook2.jpg",
            phone: userData.phone,
            userName: userData.name,
            homeRef: userData.site
          })
        console.log("Data saved")
        this.$router.go(-1)
      }catch(e){
        console.log(e)  
      }
    }
  }
}
</script>
<style scoped>
.img {
  object-fit: cover;
  max-width: 300px;
  color:grey lighten-1;
  max-height: 300px;
  min-height: 300px;
  min-width: 300px;
  align-items: center;
  align-self: center;   
  border-radius: 50%; 
}
.profile-name{
  color: #22431F;
  text-align: center;
  width:40%;
  border:rgb(223, 106, 106) solid 1px;
}
.h1_title{
  font-size:36px;
  font-weight: bold;
  color: #22431F;
}
.table{
  display:flex;
}
.col1{
  min-width:30%;
  text-align: center;
}
.col2{
  width:50%;
}
.row1{
  margin:10px;
  height:80px;
  line-height: 80px;;
  vertical-align: middle;
}

*{
  font-family:Roboto;
  bborder:red solid 1px;
}
</style>