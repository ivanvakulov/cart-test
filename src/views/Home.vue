<template>
<v-container>
    <v-row class='pt-4'>
        <v-col cols='3'>
            <v-card min-height='300' max-height='600'>
                <v-list
                    max-height='500'
                    two-line>
                    <CartItem
                        v-for='(item, index) in cartItems'
                        :key='`cart-item-${index}`'
                        :item='item'
                        @remove='removeFromCart'>
                    </CartItem>

                    {{ totalSum }} {{ discountedSum }}
                </v-list>
            </v-card>
        </v-col>

        <v-col cols='9'>
            <v-card
                class='d-flex flex-wrap justify-center py-4'
                width='100%'>
                <ShirtItem
                    v-for='(shirt, index) in availableShirts'
                    :key='`shirt-${index}`'
                    :item='shirt'
                    @add='addToCart'>
                </ShirtItem>
            </v-card>

            <v-card
                v-if='showLogs'
                class='mt-4 pa-4'
                width='100%'>
                Stacking

                <Stacking
                    :solutions='solutions'
                    :totalSum='totalSum'>
                </Stacking>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ShirtItem from "@/components/home/ShirtItem.vue";
import CartItem from "@/components/home/CartItem.vue";
import Stacking from "@/components/home/Stacking.vue";
import { GlobalModule } from "@/store/modules/GlobalStore";
import { CartModule } from "@/store/modules/CartStore";
import { GroupedShirt, Shirt } from "../../types/Base";
import { CartGettersNames, CartMutationsNames } from "@/store-consts";

@Component({
    components: { ShirtItem, CartItem, Stacking }
})
export default class Home extends Vue {
    get showLogs(): boolean {
        return GlobalModule.showLogs
    }

    get solutions(): Array<Array<Array<Shirt>>> {
        if (!this.cartItems.length) return []

        return CartModule[CartGettersNames.DivisibleByFour] ?
            [
                CartModule[CartGettersNames.StackedCartItems](5),
                CartModule[CartGettersNames.StackedCartItems](4)
            ] :
            [CartModule[CartGettersNames.StackedCartItems](5)]
    }

    get availableShirts(): Array<Shirt> {
        return GlobalModule.availableShirts || []
    }

    get cartItems(): Array<GroupedShirt> {
        return CartModule[CartGettersNames.GroupedCartItems] || []
    }

    get totalSum(): number {
        return CartModule[CartGettersNames.TotalSum] || 0
    }

    get discountedSum(): number {
        return CartModule[CartGettersNames.DiscountedSum] || 0
    }

    addToCart(item: Shirt): void {
        CartModule[CartMutationsNames.AddItemToCart](item)
    }

    removeFromCart(item: Shirt): void {
        CartModule[CartMutationsNames.RemoveItemFromCart](item)
    }
}
</script>

<style lang="sass">

</style>
