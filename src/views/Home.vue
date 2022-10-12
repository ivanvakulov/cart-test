<template>
<v-container>
    <v-row class='pt-4'>
        <v-col cols='3'>
            <v-card min-height='300' max-height='600'>
                <v-list
                    v-if='totalSum'
                    max-height='500'
                    two-line>
                    <CartItem
                        v-for='(item, index) in cartItems'
                        :key='`cart-item-${index}`'
                        :item='item'
                        @remove='removeFromCart'>
                    </CartItem>

                    <v-divider></v-divider>

                    <div class='pa-4'>
                        <div :class='{ "text-decoration-line-through": totalSum > discountedSum }'>
                            Total: {{ totalSum }}$
                        </div>
                        <div v-if='totalSum > discountedSum'>
                            Special Offer: {{ discountedSum }}$
                        </div>
                    </div>
                </v-list>
                <div
                    v-else
                    class='px-4 py-16 d-flex align-center justify-center flex-column'>
                    <v-icon color='blue' size='60'>mdi-cart</v-icon>
                    <div>Your cart is empty!</div>

                    <v-btn
                        color='primary'
                        outlined
                        rounded
                        class='mt-4'
                        @click='addRandomToCart'>
                        Add random to cart
                    </v-btn>
                </div>
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
                Stacking Results

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
                CartModule[CartGettersNames.StackedCartItemsByFive],
                CartModule[CartGettersNames.StackedCartItemsByFour]
            ] :
            [CartModule[CartGettersNames.StackedCartItemsByFive]]
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

    addRandomToCart(): void {
        const randomIndex = Math.floor(Math.random() * this.availableShirts.length)

        if (this.availableShirts[randomIndex]) {
            this.addToCart(this.availableShirts[randomIndex])
        }
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
