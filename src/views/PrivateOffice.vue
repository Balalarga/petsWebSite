<template>
  <v-container fluid>
    <v-row>

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
              <img src="https://www.angulararchitects.io/wp-content/uploads/2019/06/wso-softwarearchitekt-placeholder-male.svg">
            </v-avatar>
          </v-col>
        </v-row>

        <v-row>
          <v-col align="center">
            <v-btn rounded dark color="light-green">
              Изменить фото
            </v-btn>
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
              dense
              background-color="grey lighten-2">
            </v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-text-field
              label="eMail"
              rounded
              solo
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
              dense
              background-color="grey lighten-2">
            </v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="text-center">
            <v-btn 
              x-large 
              color="grey lighten-2"
              class="mx-2">
              <v-icon x-large dark>
                mdi-plus
              </v-icon>
            </v-btn>
          </v-col>
          <v-col left>
            Загрузить/изменить логотип организации
          </v-col>
        </v-row>

        <v-row class="text-center">
          <v-col>
            <v-btn rounded dark color="light-green">
              Изменить пароль
            </v-btn>
          </v-col>
        </v-row>

        <v-row class="text-center">
          <v-col>
            <v-btn rounded dark color="light-green">
              Редактировать страницу
            </v-btn>
          </v-col>
        </v-row>
      </v-col>

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
                  <h2 class="profile-name">История объявлений</h2>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-btn
                    dark
                    x-large
                    color="grey lighten-1"
                    class="mx-4"
                    fab>
                    <v-icon x-large dark>
                      mdi-plus
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>

            </v-card>

          </v-col>
          <v-col></v-col>
        </v-row>
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