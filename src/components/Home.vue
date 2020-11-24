<template>
<div>
  <v-row
    v-if="!petsInfo.length"
    >
    <v-col
      align="center">
      <v-progress-circular
      indeterminate
      :size="600"
      color="green"
      >
      </v-progress-circular>
    </v-col>
  </v-row>
  <v-item-group class="text-center"
  v-if='petsInfo.length'
  >
    <v-radio-group v-model="ratioButton" row mandatory @change="onRatioClicked">  
      <v-radio label="Старые" value="old"></v-radio>
      <v-radio label="Новые" value="new"></v-radio>
    </v-radio-group>
    
    <div id="grid">
      <div class="card" v-for="pet in petsInfo" :key="pet.id">
        <a :href="'/PostDetails/'+pet.id" class='ma-9'>
          <div class="img">
            <v-img v-bind:src="pet.photo"
              class="rounded-circle mr-1 mb-2"
              max-width="250"
              max-height="250"
              min-height="250"
              min-width="250"
              aspect-ratio="1.7">
            </v-img>
          </div>
          <div class="lable">
            <span>{{pet.name}}</span>
          </div>
        </a>
      </div>
    </div>
  </v-item-group>
</div>
</template>

<script>
import firebase from 'firebase/app'
export default {

  data (){
    return{
      petsInfo: [],
      ratioButton: "new",
      oldAtEnd: true
    }
  },
  async mounted(){
      const pets = await firebase.database().ref('pets').orderByChild('date')
      const self = this
      pets.on("value",function(snapshot){
        snapshot.forEach(function(child){
          let data = child.toJSON()
          data['id'] = child.key
          self.petsInfo.unshift(data)
        })
      }, function(err){
        console.log(err)
      })
  },
  methods:{
    onRatioClicked(){
      if(this.ratioButton === 'old' && this.oldAtEnd==true){
        this.petsInfo.reverse()
        this.oldAtEnd = false;
      }else if(this.ratioButton === 'new' && this.oldAtEnd==false){
        this.petsInfo.reverse()
        this.oldAtEnd = true;
      }
    }
  }
};
</script>

<style scoped>
#grid { 
  display: grid;
  grid-gap: 2vw;
  flex-flow: row wrap;
  display: flex;
  justify-content: left;
  /* max-width: 1400px; */
  margin-left: 2%;
  
}
.main{
  display: flex;
  justify-self: left;
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
    color: black;
    
}

</style>