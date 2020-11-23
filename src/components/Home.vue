<template>
  <v-item-group class="text-center">
    <v-radio-group v-model="row" row mandatory>  
      <v-radio label="Новые" value="radio-1"></v-radio>
      <v-radio label="Старые" value="radio-2"></v-radio>
    </v-radio-group>

    <v-layout row wrap justify-space-around >
      <v-col xs="4" sm="4" md="3" lg="3" v-for="pet in petsInfo" :key="pet.id" cols="3" >
        <v-row justify="center">
          <v-col  class="text-center">
            <v-item v-slot="{ active }">
              <v-card
                color="grey lighten-1"
                class="rounded-circle mb-2 ml-6"
                max-width="250"
                max-height="250"
                min-height="250"
                min-width="250"
                align-items: center
                align-self="center"
                :to="{name: 'PostDetails',params: {id: pet.id}}"
                >
                <v-img v-bind:src="pet.photo"
                class="rounded-circle mr-1 mb-2"
                max-width="250"
                max-height="250"
                min-height="250"
                min-width="250"
                aspect-ratio="1.7"></v-img>
                <v-scroll-y-transition>
                  <div v-if="active"></div>
                </v-scroll-y-transition>
                <v-card 

                  max-width="137" 
                  align-self="center"
                  align-items: center
                  class="square rounded-lg  mb-4"
                  color="rgba(255, 255, 255, 0.8)"
                  :to="{name: 'PostDetails',params: {id: pet.id}}">
              <div class="text-center">
                <span>{{pet.name}}</span>
                <!--<p>{{pet.age}}</p>-->
              </div>
            </v-card>
              </v-card>
            </v-item>
          </v-col>
        </v-row>

 <!--<p>       <v-row>
          <v-col></v-col>
          <v-col cols="6" class="text-center">
            <v-card

                  max-width="137" 
                  align-self="center"
                  align-items: center
                  class="square rounded-lg  mb-4"
                  color="rgba(255, 255, 255, 0.8)"
                  :to="{name: 'PostDetails',params: {id: pet.id}}">
              <div class="text-center">
                <span>{{pet.name}}</span>
                {{pet.age}}
              </div>
            </v-card>
          </v-col>
          <v-col></v-col>
        </v-row></p>-->


      </v-col>
    </v-layout>

  </v-item-group>
</template>

<script>
import firebase from 'firebase/app'
export default {

  data (){
    return{
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      petsInfo: [
          {name:'Луня', age:'5 лет', picture:'https://img.amur.info/res/news/170368/643545e5f9646fd666d987525a7fc4f1.jpg', id:'1'},
          {name:'Фрося', age:'3 года', picture:'https://sun9-31.userapi.com/CtUgXkfGovRO1aMZ1Q7G7THSxBUaJ3-LRuUx7A/W55Un74paRA.jpg', id:'2'},
          {name:'Федя', age:'1 год', picture:'https://sun9-48.userapi.com/c11310/u146061009/-1/x_94a6d297.jpg', id:'3'},
          {name:'Честер', age:'7 месяцев', picture:'https://i1.wallbox.ru/wallpapers/main/201549/b37576e8aa5ae6e.jpg', id:'4'},
          {name:'Желток', age:'3 недели', picture:'https://i.pinimg.com/originals/81/08/f5/8108f5a573c4225f5aa1656ffa11dd31.jpg', id:'5'},
          {name:'Костик', age:'9 лет', picture:'https://img3.goodfon.com/original/1280x720/d/16/hameleon-golova-glaz-makro.jpg', id:'6'},
          {name:'Толя', age:'2 месяца', picture:'https://25.img.avito.st/image/1/NOXOzLa_mAy4aWoKquBP_UdvngZwr5z-fG-aCnZpmgx6KQ', id:'7'},
          {name:'Айвазовский', age:'6 месяцев', picture:'https://avatars.mds.yandex.net/get-ynews/63844/e52c23a06aae22647943919887199b34/606x341', id:'8'},
          {name:'Stas', age:'100 days', picture:'', id:'9'}
        
      ]
    }
  },
  async mounted(){
      console.log("Loading data")
      const pets = await firebase.database().ref('pets').orderByChild('date')
      let allPets = []
      pets.on("value",function(snapshot){
        snapshot.forEach(function(child){
          let data = child.toJSON()
          data['id'] = child.key
          allPets.push(data)
        })
        console.log("Finished")
      }, function(err){
        console.log(err)
      })
      this.petsInfo = allPets
  }
};
</script>