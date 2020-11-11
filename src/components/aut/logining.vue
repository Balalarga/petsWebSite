<template>
    <v-container fluid class="ml-16 pl-16">
        <v-row>
            <v-col cols="4">
                <v-row>
                    <v-col align="left">
                        <h2 class="profile-name">Вход в личный кабинет</h2>
                    </v-col>
                </v-row>
                <v-row justify="left">
                    <v-card ref="form" color="transparent" elevation="0" min-width="350">
                        <v-card-text>
                            
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
                                placeholder="Пароль"
                                required
                                rounded
                                solo
                                dense
                                background-color="grey lighten-2"
                            ></v-text-field>
                            
                            
                        </v-card-text>
                        <v-card-actions>
                            <v-row>
                            <v-btn
                            class="mb-3 ml-4"
                                min-width="320" 
                                @click="submit"
                                rounded  color="light-green" 
                            >
                                Забыли пароль?
                            </v-btn>
                            
                            <v-btn class="mb-3 ml-4"
                                min-width="320" 
                                @click="submit"
                                rounded  color="light-green" 
                            >
                                Регистрация
                            </v-btn>
                            </v-row>
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
      email: null,
      pass: null,
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