<template>
  <v-container fluid>
    <v-row v-for="(item, index) in items" :key="index.id">
      <v-col v-for="(animal, id) in item.animals" :key="id">
        <v-row>
          <v-col class="text-center">
            <h1 class="profile-name">{{animal.name}}, {{animal.age}} (г. {{animal.city}})</h1>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="text-center">
            <v-row>
              <v-col>
                <v-avatar
                  color="grey lighten-1"
                  size="200">
                  <img v-bind:src="animal.img">
                </v-avatar>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn rounded dark color="light-green">
                  Редактировать
                </v-btn>
              </v-col>
            </v-row>
          </v-col>

          <v-col>
            <v-row>
              <v-col>
                <v-card color="grey lighten-1">
                  <v-card-text>
                    <tr>
                      <td style="width: 45%;" class="text-left">
                        <tr><th>Пол животного:</th></tr>
                        <tr><th>Порода:</th></tr>
                        <tr><th>Возраст:</th></tr>
                        <tr><th>Вес:</th></tr>
                      </td>
                      <td>
                        <tr>{{animal.sex}}</tr>
                        <tr>{{animal.breed}}</tr>
                        <tr>{{animal.age}}</tr>
                        <tr>{{animal.weight}}</tr>
                      </td>
                    </tr>
                  </v-card-text>
                  <v-card-text>
                    <tr>
                      <td>{{animal.info}}</td>
                    </tr>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>

          <v-col>
            <v-row>
              <v-col></v-col>
              <v-col cols="10" class="text-center">
                <v-card color="grey lighten-1">
                  <v-row>
                    <v-col>
                      <h2 class="profile-name">Приют "Добрый друг"</h2>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col>
                      <v-avatar
                        color="grey lighten-1"
                        size="140">
                        <img src="https://rayfund.ru/wp-content/uploads/2015/12/logo_facebook2.jpg">
                      </v-avatar>
                    </v-col>
                    <v-col class="text-left">
                      <p>
                        Основан в 2003 году<br>На данном портале 23 объявления
                      </p>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col>
                      <v-btn color="grey lighten-3">
                        <v-icon>mdi-cellphone-iphone</v-icon>
                        Связаться с организацией
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
              <v-col></v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <h2>Смотрите также:</h2>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="text-center">
            <v-row>
              <v-col>
                <v-avatar
                  color="grey lighten-1"
                  size="140">
                  <img src="https://img3.goodfon.com/original/1280x720/d/16/hameleon-golova-glaz-makro.jpg">
                </v-avatar>
              </v-col>
              <v-col>
                <v-avatar
                  color="grey lighten-1"
                  size="140">
                  <img src="https://i1.wallbox.ru/wallpapers/main/201549/b37576e8aa5ae6e.jpg">
                </v-avatar>
              </v-col>
              <v-col>
                <v-avatar
                  color="grey lighten-1"
                  size="140">
                  <img src="https://25.img.avito.st/image/1/NOXOzLa_mAy4aWoKquBP_UdvngZwr5z-fG-aCnZpmgx6KQ">
                </v-avatar>
              </v-col>
              <v-col>
                <v-avatar
                  color="grey lighten-1"
                  size="140">
                  <img src="https://avatars.mds.yandex.net/get-ynews/63844/e52c23a06aae22647943919887199b34/606x341">
                </v-avatar>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default{
  items: [],

  created: function () {
    this.items = this.$store.getters['privateOffice/getPrivateOffice']
  }
}
</script>
<style scoped>

.profile-name{
  color: #22431F;
}

</style>