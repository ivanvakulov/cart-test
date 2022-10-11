<template>
<v-app-bar
    app
    color='primary'
    dark>
    <div class='d-flex align-center'>
        <router-link :to='{ name: "HomePage" }'>
            <v-img
                alt='Ivan Vakulov Test'
                class='shrink mt-1 hidden-sm-and-down'
                contain
                min-width='50'
                src='@/assets/shopping-cart-outline.svg'
                width='50'></v-img>
        </router-link>
    </div>

    <v-spacer></v-spacer>

    <v-checkbox
        :input-value='showLogs'
        hide-details
        :label='`Show Stacking Results`'
        @change='toggleShowLogs'>
    </v-checkbox>
</v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { GlobalModule } from "@/store/modules/GlobalStore";
import { GlobalMutationsNames } from "@/store-consts";

@Component
export default class Header extends Vue {
    get showLogs(): boolean {
        return GlobalModule.showLogs
    }

    toggleShowLogs(value: boolean | null): void {
        GlobalModule[GlobalMutationsNames.ToggleShowLogs](!!value)
    }
}
</script>

<style lang="sass">

</style>
