<template>
    <div>
        <v-col>
            <h1 id='mainText'>
                YOUR friends
            </h1>
        </v-col>
        
        <v-col>
            <v-row>
                <v-card id='text'>
                    YOUR friends — интернет-сервис для размещения объявлений о животных и питомцах, которым нужно найти дом. 
                    Безусловно наш сервис ориентирован и на людей, которым необходимы такие друзья рядом.
                    Администратором сайта является студенческая команда “Team Liquid” под руководством Незнанова Юрия.
                    Наша команда была заинтересована этой проблемой в условия пандемией COVID-19, 
                    поскольку рост психологических расстройств среди населения в режиме самоизоляции 
                    (а для некоторых людей - это просто напросто одиночество) был колосальным.
                    На данном этапе это просто студенческий проект, но мы не исключаем возможности продвигать наш проект дальше!
                    С уважением, команда YOUR friends!
                </v-card>
            </v-row>
        </v-col>
    </div>
</template>

<style scoped>
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
#text{
    background: rgba(255, 255, 255, 0.59);
border: 1px solid rgba(255, 255, 255, 0.8);
box-sizing: border-box;
border-radius: 15px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 19px;
}
</style>