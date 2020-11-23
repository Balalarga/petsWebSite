<template>
 <v-container>
    <div id="grid">
        <div class="card" v-for="pet in petsInfo" :key="pet.id">
            <a href="#" >
                <div class="img"
                    :to="{name: 'PostDetails',params: {id: pet.id}}"
                    >
                    <v-img v-bind:src="pet.picture"
                    class="rounded-circle mr-1 mb-2"
                    max-width="250"
                    max-height="250"
                    min-height="250"
                    min-width="250"
                    aspect-ratio="1.7"></v-img>
                    <v-scroll-y-transition>
                    <div v-if="active"></div>
                    </v-scroll-y-transition>
                </div>
                <div class="lable"
                    :to="{name: 'PostDetails',params: {id: pet.id}}">
                    <span>{{pet.name}}</span>
                    <!--<p>{{pet.age}}</p>-->
                
                </div>
            </a>
        </div>
    </div>
 </v-container>
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
          {name:'Айвазовский', age:'6 месяцев', picture:'https://avatars.mds.yandex.net/get-ynews/63844/e52c23a06aae22647943919887199b34/606x341', id:'8'},
          {name:'Stas', age:'100 days', picture:'', id:'9'}
      ]
    }
  },
  methods: {
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
  justify-content: center;
  max-width: 1400px;
  
}
.card {
    align-items: center;
    display: flex;
    flex-direction: column;
}
.img {
    max-width: 650px;
    color:grey lighten-1;
    max-height: 250px;
    min-height: 250px;
    min-width: 250px;
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
    
}

</style>