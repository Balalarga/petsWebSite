<template>
  <v-container fluid>
    <v-row>
      <v-col cols="10">
        <v-row>
          <v-col class="text-right">
            <h1 class="profile-name">Добавление объявления</h1>
          </v-col>
          <v-col class="text-center">
            <v-btn :to="{name: 'PrivateOffice'}" color="grey lighten-2">Отменить</v-btn>
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
              size="135">
              <img src="https://i7.uihere.com/icons/164/844/1/add-to-f85757c8d1cd8ca171d544eb839b65c3.png">
            </v-avatar>
          </v-col>
        </v-row>

      <v-row>
        <v-col align="center">
          <v-btn large dark color="light-green">
            Добавить фото
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col align="center">
          <v-btn large dark color="grey lighten-1">
            Удалить фото
          </v-btn>
        </v-col>
      </v-row>
      </v-col>

      <v-col>
        <v-row>
          <v-col align="center">
            <v-text-field
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
              rows="12"
              solo
              label="Введите текст объявления"
              background-color="grey lighten-2">
            </v-textarea>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="text-right">
            <v-btn :to="{name: 'Home'}" large dark color="light-green">
              Опубликовать
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

export default{

}
</script>
<style scoped>

.profile-name{
  color: #22431F;
}

</style>