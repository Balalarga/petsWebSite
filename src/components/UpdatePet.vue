<template>
  <v-container fluid>
    <v-row>
      <v-col cols="10">
        <v-row>
          <v-col class="text-right">
            <h1 class="profile-name">Изменить объявление</h1>
          </v-col>
          <v-col class="text-center">
            <v-btn @click='discard()' color="grey lighten-2">Отменить</v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col></v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-row>
          <v-col align="center">
            <v-avatar
              color="grey lighten-1"
              size="300">
              <img :src="photo">
            </v-avatar>
          </v-col>
        </v-row>

      <v-row>
        <v-col align="center">
          <v-btn 
          large dark color="light-green"
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
          <v-btn large dark color="grey lighten-1"
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
            <v-btn @click="submit()" large dark color="light-green">
              Сохранить
            </v-btn>
          </v-col>
        </v-row>
      </v-col>

      <v-col>

      </v-col>
    </v-row>
  </v-container>
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
  mounted: async function () {
    let curItem = null
    const item = await firebase.database().ref('pets/'+this.$route.params.id)
    item.on('value', function(snapshot){
      curItem = snapshot.toJSON()
    })
    this.name = curItem.name
    this.description = curItem.description
    this.parent = curItem.parent
    this.photo = curItem.photo
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
        const petsData = firebase.database().ref('/pets/'+this.$route.params.id)
        await petsData.update({
            name: this.name,
            description: this.description,
            photo:this.photo
          })
        console.log("Data saved")
        this.$router.go(-1)
      }catch(e){
        console.log(e)  
      }
    },
    discard(){
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>

.profile-name{
  color: #22431F;
}

</style>