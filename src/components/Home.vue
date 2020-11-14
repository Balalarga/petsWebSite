<template>
  <v-item-group class="text-center">
    <v-radio-group v-model="row" row mandatory>  
      <v-radio label="Новые" value="radio-1"></v-radio>
      <v-radio label="Старые" value="radio-2"></v-radio>
    </v-radio-group>

    <v-layout row wrap justify-space-between>
      <v-col xs="3" sm="3" md="3" lg="3" v-for="pet in petsInfo" :key="pet.id" cols="3" >
        <v-row>
          <v-col class="text-center">
            <v-item v-slot="{ active }">
              <v-avatar
                color="grey lighten-1"
                size="135">
                <v-img v-bind:src="pet.picture"></v-img>
                <v-scroll-y-transition>
                  <div v-if="active"></div>
                </v-scroll-y-transition>
              </v-avatar>
            </v-item>
          </v-col>
        </v-row>

        <v-row>
          <v-col></v-col>
          <v-col cols="6" class="text-center">
            <v-card 
              align-self="center"
              align-items: center
              class="square rounded-xl ml-2"
              color="rgba(255,255,255, 0.8)"
              :to="{name: 'PostDetails',params: {id: pet.id}}">
              <div class="text-center pt-2">
                <span>{{pet.name}}</span>
                <p>{{pet.age}}</p>
              </div>
            </v-card>
          </v-col>
          <v-col></v-col>
        </v-row>

      </v-col>
    </v-layout>

  </v-item-group>
</template>

<script>

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
          {name:'Айвазовский', age:'6 месяцев', picture:'https://avatars.mds.yandex.net/get-ynews/63844/e52c23a06aae22647943919887199b34/606x341', id:'8'}
        
      ]
    }
  },

};
</script>