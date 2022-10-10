<template>
<v-app>
    <Header></Header>

    <v-main class='blue-grey lighten-5'>
        <router-view></router-view>
    </v-main>
</v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Header from "@/components/base/Header.vue";

@Component({ components: { Header } })
export default class App extends Vue {

}
</script>

<style lang="scss">

</style>
