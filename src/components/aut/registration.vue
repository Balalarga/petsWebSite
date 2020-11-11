<template>
    <v-container fluid class="ml-16 pl-16">
        <v-row>
            <v-col cols="4">
                <v-row>
                    <v-col align="left">
                        <h2 class="profile-name">Хотите дать объявление и найти дом для животного?</h2>
                    </v-col>
                </v-row>
                <v-row justify="left">
                    <v-card ref="form" color="transparent" elevation="0" min-width="350">
                        <v-card-text>
                            <v-text-field
                                ref="name"
                                v-model="name"
                                :rules="[() => !!name || 'Поле обязательное для заполнения']"
                                :error-messages="errorMessages"
                                placeholder="Имя пользователя"
                                required
                                rounded
                                solo
                                dense
                                background-color="grey lighten-2"
                            ></v-text-field>
                            <v-text-field
                                ref="email"
                                v-model="email"
                                :rules="[() => !!email || 'Поле обязательное для заполнения',emailCheck]"
                                placeholder="Электронный адрес"
                                required
                                rounded
                                solo
                                dense
                                background-color="grey lighten-2"
                            ></v-text-field>
                            <v-text-field
                                ref="pass"
                                v-model="pass"
                                :rules="[() => !!pass || 'Поле обязательное для заполнения', emailCheck]"
                                placeholder="Придумайте пароль"
                                required
                                rounded
                                solo
                                dense
                                background-color="grey lighten-2"
                            ></v-text-field>
                            <v-text-field
                                ref="passconf"
                                v-model="passconf"
                                :rules="[() => !!passconf || 'Поле обязательное для заполнения', passCheck]"
                                :error-messages="errorPass"
                                required
                                placeholder="Подтвердите пароль"
                                rounded
                                solo
                                dense
                                background-color="grey lighten-2"
                            ></v-text-field>
                            <v-row align="center">
                                <v-checkbox v-model="enabled">
                                    <template v-slot:label>
                                        <div>
                                            Разрешаю обработку своих данных и соглашаюсь с условиями пользования
                                        </div>
                                    </template>
                                </v-checkbox>
                            </v-row>
                        </v-card-text>
                        <v-card-actions>
                            <v-slide-x-reverse-transition>
                                <v-tooltip v-if="formHasErrors" left>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                            icon
                                            class="my-0"
                                            v-bind="attrs"
                                            @click="resetForm"
                                            v-on="on"
                                        >
                                            <v-icon>mdi-refresh</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Обновить форму</span>
                                </v-tooltip>
                            </v-slide-x-reverse-transition>
                            <v-btn
                                min-width="320" 
                                @click="submit"
                                rounded  color="light-green" :disabled="!enabled"
                            >
                                Регистрация
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-row>
            </v-col>   
        </v-row>
    </v-container>
</template>


<script>
  export default {
    data: () => ({
     errorMessages: '',
     errorPass: '',
      name: null,
      email: null,
      pass: null,
      passconf: null,
      formHasErrors: false,
      enabled: false,
        rules: [
            value => !!value || 'Required.',
            value => (value && value.length >= 3) || 'Min 3 characters',
        ],
    }),

    computed: {
      form () {
        return {
          name: this.name,
          email: this.email,
          pass: this.pass,
          passconf: this.passconf,
        }
      },
    },

    watch: {
      name () {
        this.errorMessages = ''
        
      },
    },

    methods: {
        passCheck () {
            this.errorPass = this.pass && this.passCheck
            ? `Пароли не совпадают!`
            : ''
          return true
        },
      emailCheck () {
        this.errorMessages = this.email && !this.name
          ? `Hey! I'm required`
          : ''

        return true
      },
      resetForm () {
        this.errorMessages = []
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          this.$refs[f].reset()
        })
      },
      submit () {
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          if (!this.form[f]) this.formHasErrors = true

          this.$refs[f].validate(true)
        })
      },
    },
  }
</script>

<style scoped>

.profile-name{
  color: #22431F;
}

</style>