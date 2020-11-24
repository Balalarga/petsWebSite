<template>
	<v-app>
	<v-img src="https://i.imgur.com/OmNuleU.jpg">
	<v-app-bar color="rgba(255,255,255, 0.6)" flat  app>
		<v-toolbar-items>
			<a href="/">
				<v-img src="./assets/logo_no_bg.png"
				max-width="200"
				class='mt-4'>
				</v-img>
			</a>
		</v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items >
        <v-btn 
          color="transparent" 
          depressed
          v-for="item in menuItems" 
          :key="item.title"
          router
          :to="item.link"
        >
          <v-icon>{{item.icon}}</v-icon> 
          {{item.title}}
        </v-btn>
        <v-btn 
          color="transparent" 
          depressed
        >
          <v-icon @click="accountButton()">mdi-account</v-icon> 
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    
    <v-main>
      <v-container fluid> 
        <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-btn icon @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-card-title class="headline">
          Заригистрированны у нас?
        </v-card-title>
        <v-card-text>Для доступа к личному кабинету вы должны зарегистрировать новый аккаунт или авторизоваться через существующий </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
            router :to="'/Registration'"
          >
            Registrate
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
            router :to="'/log'"
          >
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>    
        <router-view></router-view>
      </v-container>
    </v-main>

<v-container fluid> 
    <v-footer color="#B7B7B7" app absolute>
     <div class="footer">
			<div class="f_col_1 f_cols">
				<a href=#> 
					<img src="./assets/logo_no_bg.png" alt="На главную" class="f_logo">
				</a>
				<span id="f_inf">Cайт для тех, кто знает толк в<br> хорошей компании</span>
				<span id="f_inf2">Москва 2020</span><br>
			</div>
			<div class="f_col_2 f_cols">
				<a href=# class="w_text_f f_col_2_pad">Главная</a>
				<a href=# class="w_text_f f_col_2_pad">Личный кабинет</a>
				<a href=# class="w_text_f f_col_2_pad">Интересное</a>
				<a href=# class="w_text_f f_col_2_pad">О нас</a>
			</div>
			<div class="f_col_345 f_cols">
				<span class="w_text_f">Наши сервисы:</span>
				<div class="f_ikonka">
					<img src="./assets/insta.png" class=footer_images>
					<a href=# class="g_text_f">Фотоблок о наших питомцах</a>
				</div>
				<div class="f_ikonka">
					<img src="./assets/telegram.png" class=footer_images>
					<a href=# class="g_text_f">Новостной интегратор в Telegram</a>
				</div>
			</div>
			<div class="f_col_345 f_cols">
				<span class="w_text_f">Хотите стать нашим партнером?</span>
				<div class="f_ikonka">
					<img src="./assets/mail.png" class=footer_images>
					<a href=# class="g_text_f">Электронная почта</a>
				</div>
				<span class="w_text_f"><br>Благотворительность</span>
				<div class="f_ikonka">
					<img src="./assets/blago.png" class=footer_images>
					<span class="g_text_f">0000 0000 0000 0000</span>
				</div>
			</div>
			<div class="f_col_345 f_cols">
				<span class="w_text_f">Возникли проблемы или вопросы?</span>
				<div class="f_ikonka">
					<img src="./assets/telegram.png" class=footer_images>
					<a href=# class="g_text_f">Наш телеграм бот ответит на все ваши вопросы!</a>
				</div>
			</div>
		</div>
    </v-footer>
</v-container>
    </v-img>
  </v-app>
</template>

<style >
*{
	margin:0px;
	padding:0px;
	font-family: Roboto, normal;
	word-wrap:break-word;
	text-decoration: none;
	bborder: 1px solid;
}
body{
  background-image: url('./img/back.jpg');
  background-size: cover;
}

.f_logo{
	width:200px;
	height:auto;
	min-width:200px;
	min-height:auto;
}
#f_inf{
	color:#05441A !important;
}
#f_inf2{
	margin-top:40px;
	color:#FFFFFF;
}
.w_text_f{
	color: #FFFFFF !important;
}
.g_text_f{
	font-size: 12px !important;
	color:#05441A !important;
}
.footer_images{
	width:32px;
	height:32px;
	margin-right:10px;
}
.footer{
	display:flex;
	justify-content: space-around;
	width:100%;
	background-color:#B7B7B7;
}
.f_col_1{
	width:20%;
	overflow:hidden;
}
.f_col_2{
	width:10%;
}
.f_col_345{
	width:20%;
}
.f_cols{
	display:flex;
	flex-direction:column;
	padding-top:15px;
}
.f_col_2_pad{
	margin-bottom:15px;
}
.f_ikonka{
	display:flex;
	padding-top:20px;
	align-items:center;
}
</style>

<script>
import firebase from 'firebase/app'
export default {
  data (){
    return{
      dialog: false,
      menuItems: [
        {title:'Объявления', link:'/'},
        {title:'Интересное', link:'/Info'},
        {title:'О нас', link:'/AboutUs'}
      ]
    }
  },
  methods:{
    accountButton(){
      if(firebase.auth().currentUser)
        this.$router.replace({ name: "PrivateOffice" });
      else
        this.dialog = true
    }
  }
};
</script>

<style scoped>
*{
	margin:0px;
	padding:0px;
	font-family: Roboto, normal;
	word-wrap:break-word;
	text-decoration: none;
	bborder: 1px solid;
}
.f_logo{
	width:200px;
	height:auto;
	min-width:200px;
	min-height:auto;
}
#f_inf{
	color:#05441A;
}
#f_inf2{
	margin-top:40px;
	color:#FFFFFF;
}
.w_text_f{
	color: #FFFFFF;
}
.g_text_f{
	font-size: 12px;
	color:#05441A;
}
.footer_images{
	width:32px;
	height:32px;
	margin-right:10px;
}
.footer{
	display:flex;
	
	justify-content: space-around;
	padding-top:15px;
	top:76%;
	width:100%;
	height:22.4%;
	min-height:200px;
	background-color:#B7B7B7;
}
.f_col_1{
	width:20%;
	overflow:hidden;
}
.f_col_2{
	width:10%;
}
.f_col_345{
	width:20%;
}
.f_cols{
	display:flex;
	flex-direction:column;
	padding-top:20px;
}
.f_col_2_pad{
	margin-bottom:15px;
}
.f_ikonka{
	display:flex;
	padding-top:10px;
	align-items:center;
}
</style>