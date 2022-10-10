<template>
<v-container>
    <v-row class='pt-4'>
        <v-col cols='3'>
            <v-card max-height='600'>
                <v-list
                    max-height='500'
                    two-line>
                    <CartItem
                        v-for='(item, index) in cartItems'
                        :key='`cart-item-${index}`'
                        :item='item'
                        @remove='removeFromCart'>
                    </CartItem>

                    {{ totalSum }}
                </v-list>
            </v-card>
        </v-col>

        <v-col class='d-flex flex-wrap justify-center' cols='9'>
            <ShirtItem
                v-for='(shirt, index) in availableShirts'
                :key='`shirt-${index}`'
                :item='shirt'
                @add='addToCart'>
            </ShirtItem>
        </v-col>
    </v-row>
</v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ShirtItem from "@/components/home/ShirtItem.vue";
import CartItem from "@/components/home/CartItem.vue";
import { GlobalModule } from "@/store/modules/GlobalStore";
import { CartModule } from "@/store/modules/CartStore";
import { GroupedShirt, Shirt } from "../../types/Base";
import { CartGettersNames, CartMutationsNames } from "@/store-consts";

@Component({
    components: { ShirtItem, CartItem }
})
export default class Home extends Vue {
    get availableShirts(): Array<Shirt> {
        return GlobalModule.availableShirts || []
    }

    get cartItems(): Array<GroupedShirt> {
        return CartModule[CartGettersNames.GroupedCartItems] || []
    }

    get totalSum(): number {
        return CartModule[CartGettersNames.TotalSum] || 0
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
