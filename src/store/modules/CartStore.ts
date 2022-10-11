import { getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import store from '@/store'
import { CartGettersNames, CartMutationsNames, StoreModulesNames } from "@/store-consts";
import { GroupedShirt, Shirt } from "../../../types/Base";
import {
    getShirtIndexByColor, getTotalSum, groupShirts,
} from "@/helpers/cart";
import { isNil } from "@/helpers/base";
import { getDiscountedSum, stackShirts } from "@/helpers/discount";

export interface ICartState {
    cartItems: Array<Shirt>
}

@Module({ name: StoreModulesNames.CartStore, store, dynamic: true, namespaced: true, stateFactory: true })
export default class CartStore extends VuexModule implements ICartState {
    cartItems: Array<Shirt> = []

    get [CartGettersNames.GroupedCartItems](): Array<GroupedShirt> {
        return groupShirts(this.cartItems)
    }

    get [CartGettersNames.StackedCartItems](): Array<Array<Shirt>> {
        return stackShirts(this.cartItems)
    }

    get [CartGettersNames.StackedCartItemsDivisibleByFour](): Array<Array<Shirt>> {
        return stackShirts(this.cartItems, 4)
    }

    get [CartGettersNames.TotalSum](): number {
        return getTotalSum(this[CartGettersNames.GroupedCartItems])
    }

    get [CartGettersNames.DiscountedSum](): number {
        return Math.min(getDiscountedSum(this[CartGettersNames.StackedCartItems]), getDiscountedSum(this[CartGettersNames.StackedCartItemsDivisibleByFour]))
    }

    @Mutation
    [CartMutationsNames.AddItemToCart](item: Shirt): void {
        this.cartItems.push(item)
    }

    @Mutation
    [CartMutationsNames.RemoveItemFromCart](item: Shirt): void {
        const index = getShirtIndexByColor(this.cartItems, item.color)

        if (!isNil(index)) {
            this.cartItems.splice(index!, 1)
        }
    }
}

export const CartModule = getModule(CartStore)
