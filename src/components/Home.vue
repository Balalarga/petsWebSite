<template>
  <v-item-group>
    <v-radio-group v-model="row" row mandatory>  
      <v-radio label="Новые" value="radio-1"></v-radio>
      <v-radio label="Старые" value="radio-2"></v-radio>
    </v-radio-group>

    <v-layout row wrap justify-space-between>
      <v-col xs="3" sm="3" md="3" lg="3" v-for="pet in petsInfo" :key="pet.id" cols="3" >
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

        <v-card 
          align-self="center"
          align-items: center
          class="square rounded-xl ml-2"
          min-width="137"
          min-height="59"
          max-height="59"
          max-width="137"
          color="rgba(255,255,255, 0.8)"
          :to="{name: 'PostDetails',params: {id: pet.id}}">
          <div class=" text-center pt-2">
            <span>{{pet.name}}</span>
            <p>{{pet.age}}</p>
          </div>
        </v-card>
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
          {name:'Billy', age:'1', picture:'https://pbs.twimg.com/profile_images/1111666438782312449/DSzHCv1g_400x400.jpg', id:'1'},
          {name:'b', age:'2', picture:'https://media.tenor.com/images/116b7c643ca23c3814bd06aac7c5183e/tenor.gif', id:'2'},
          {name:'c', age:'3', picture:'https://media1.tenor.com/images/8365d86ec1d04e2b75bd674a984090e2/tenor.gif?itemid=16911422', id:'3'},
          {name:'d', age:'4', picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUP2lP1apBrJgkrRw4mrk-Mc_r5XdcLvK4Mg&usqp=CAU', id:'4'},
          {name:'Van Darckholme', age:'57 years', picture:'data:image/jpeg;base64,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', id:'5'},
          {name:'f', age:'6', picture:'', id:'6'},
          {name:'g', age:'7', picture:'', id:'7'},
          {name:'Фрося', age:'3 года', picture:'https://sun9-31.userapi.com/CtUgXkfGovRO1aMZ1Q7G7THSxBUaJ3-LRuUx7A/W55Un74paRA.jpg', id:'8'}
        
      ]
    }
  },

};
</script>