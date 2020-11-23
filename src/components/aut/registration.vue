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
                    <v-form ref="form" color="transparent" elevation="0" min-width="350" v-model="isFormValid">
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
                                :rules="[() => !!email || 'Поле обязательное для заполнения',v => /.+@.+\..+/.test(v) || 'Вы ввели неправильный email!']"
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
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show1 ? 'text' : 'password'"
                                @click:append="show1 = !show1"
                                :rules="[() => !!pass || 'Поле обязательное для заполнения',v => (v && v.length >= 6) || 'Пароль должен быть не менее 6 символов', emailCheck]"
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
                                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show2 ? 'text' : 'password'"
                                @click:append="show2 = !show2"
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
                          <v-btn
                            min-width="320" 
                            @click="submit"
                            rounded  color="light-green" :disabled="(!isFormValid) || (!enabled)"
                          >
                            Регистрация
                          </v-btn>
                        </v-card-actions>
                    </v-form>
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
      show1: false,
      show2: false,
      formHasErrors: false,
      isFormValid: false,
      enabled: false,
        rules: [
            value => !!value || 'Required.',
            value => (value && value.length >= 3) || 'Min 3 characters',
        ],
    }),

    computed: {
      form () {
        return {
          email: this.email,
          pass: this.pass,
          name: this.name
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
          this.errorPass = !(this.pass === this.passconf)
          ? `Пароли не совпадают!`
          : '';
          this.en1 = !(this.pass === this.passconf)
          ? false
          : true
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
      async submit () {
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          if (!this.form[f]) this.formHasErrors = true

          this.$refs[f].validate(true)
        })
        try{
          await this.$store.dispatch('register', this.form)
        }catch(e){
          console.log(e)
          throw e;
        }

      },
    },
  }
</script>

<style scoped>

.profile-name{
  color: #22431F;
}

</style>