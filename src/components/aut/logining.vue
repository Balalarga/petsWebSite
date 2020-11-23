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
                    <v-form v-model="enabled" ref="form" color="transparent" elevation="0" min-width="350">
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
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show1 ? 'text' : 'password'"
                                @click:append="show1 = !show1"
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
                            
                            
                            <v-btn class="mb-3 ml-4"
                                min-width="320" 
                                @click="submit"
                                :disabled="!enabled"
                                rounded  color="light-green" 
                            >
                                Войти
                            </v-btn>
                            </v-row>
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
      email: null,
      pass: null,
      show1: false,
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
          email: this.email,
          pass: this.pass,
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
      async submit () {
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          if (!this.form[f]) this.formHasErrors = true

          //this.$refs[f].validate(true)
        })
        console.log(this.form)
        try{
          await this.$store.dispatch('login', this.form)
        } catch(e){
          console.log(e)
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