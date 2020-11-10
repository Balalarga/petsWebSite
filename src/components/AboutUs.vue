<template>
    <div>
        <p>About page</p>
        <v-btn v-for="pet in petsInfo" :key="pet.id">{{pet.name}}</v-btn>
    </div>
</template>