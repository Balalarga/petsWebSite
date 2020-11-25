<template>
    <div>
        <div class="wrapper">
            <div class="box1"><img src="../assets/logo_about.png"></div>
            <div class="box2"><img class="dog" src="../assets/about_dog.png" ></div>
            <div class="box3"><div class='text'>
                    <p>YOUR friends — интернет-сервис для размещения объявлений о животных и питомцах, которым нужно найти дом.
                    Безусловно наш сервис ориентирован и на людей, которым необходимы такие друзья рядом.</p>
                    <p>Создателями сайта являеются студенты из команды “Team Liquid” под руководством Незнанова Юрия.</p>
                    <p>Наша команда была заинтересована этой проблемой в условия пандемией COVID-19, 
                    поскольку рост психологических расстройств среди населения в режиме самоизоляции 
                    (а для некоторых людей - это просто напросто одиночество) был колосальным.</p>
                    <p>На данном этапе это просто студенческий проект, но мы не исключаем возможности продвигать наш проект дальше!</p>
                    <p class="tex1">С уважением, команда YOUR friends!</p>
                </div></div>
            
        </div>
    </div>
</template>

<style scoped>
p {
  margin: 3px;
  margin-bottom: 1em;
}
#mainText{
    width: 20%;
    height: 20%;
    
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    line-height: 94px;

    color: #22431F;
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
    margin-top: 15%;
}
.tex1 {
    font-weight: bold;
    text-align: end;
}
.dog { 
    object-fit: cover;
    width: 301px;
    height: 250px;
}
.wrapper { 
    display: grid; 
    grid-template-columns: repeat(3, 1fr); 
    grid-auto-rows: minmax(100px, auto);
    grid-column-gap: 15px;
    align-items: center;
    justify-items: center;
} 
.box1 { 
    grid-column-start: 1; 
    grid-column-end: 2; 
    grid-row-start: 1; 
    grid-row-end: 2; 
} 
.box2 { 
    grid-column-start: 1; 
    grid-column-end: 2; 
    grid-row-start: 2; 
    grid-row-end: 3; 
}
.box3 { 
    grid-column-start: 2; 
    grid-column-end: 4; 
    grid-row-start: 1; 
    grid-row-end: 3; 
}
</style>