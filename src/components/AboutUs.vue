<template>
    <div>
        <div class="wrapper">
            <div class="left_box">
                <div>
                    <img src="../assets/logo_about.png">
                </div>
                <div>
                    <img class="dog" src="../assets/about_dog.png" >
                </div>
            </div>
            <div class="right_box">
                <div class='text'>
                    <p>YOUR friends — интернет-сервис для размещения объявлений о животных и питомцах, которым нужно найти дом.
                    Безусловно наш сервис ориентирован и на людей, которым необходимы такие друзья рядом.</p>
                    <p>Создателями сайта являеются студенты из команды “Team Liquid” под руководством Незнанова Юрия.</p>
                    <p>Наша команда была заинтересована этой проблемой в условия пандемией COVID-19, 
                    поскольку рост психологических расстройств среди населения в режиме самоизоляции 
                    (а для некоторых людей - это просто напросто одиночество) был колосальным.</p>
                    <p>На данном этапе это просто студенческий проект, но мы не исключаем возможности продвигать наш проект дальше!</p>
                    <p class="tex1">С уважением, команда YOUR friends!</p>
                    <br>Технологии разработки:<br>
                    <p>Дизайн-макеты: figma + photoshop</p>
                    <br>Дизайн-макеты: Figma + Adobe Photoshop
                    <br>Фронтенд: Vue.js
                    <br>Вёрстка: HTML5 + css
                    <br>Бекенд: Node.js
                    <br>Система управления базами данных: Firebase<br>
                    <br>Тестирование совместимости: https://testingbot.com/
                    <br>Функциональное тестирование: http://feng-gui.com/
                    <br>Нагрузочное тестирование
                    <br>Тестирование юзабилити
                </div>
            </div>
            
        </div>
    </div>
</template>

<style scoped>

*{
    bborder: red 1px solid;
}
.text{
    align-content:"center";
    width: 70%;
    background: rgba(255, 255, 255, 0.59);
    border: 1px solid rgba(255, 255, 255, 0.8);
    box-sizing: border-box;
    border-radius: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 22px;
    min-width: 80%;
    padding-left: 15px;
    padding-top: 15px;
    padding-right: 15px;
    margin-top: 5%;
}
.tex1 {
    font-weight: bold;
    text-align: end;
}
.left_box{
    min-width:30%;
    text-align: center;
}
.dog { 
    object-fit: cover;
    width: 301px;
    height: 250px;
}
.wrapper { 
    display: flex; 
    align-items: center;
    justify-items: center;
} 

</style>