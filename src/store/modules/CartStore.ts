import { getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import store from '@/store'
import { CartGettersNames, CartMutationsNames, StoreModulesNames } from "@/store-consts";
import { GroupedShirt, Shirt } from "../../../types/Base";
import { isNil } from "@/helpers/base";
import {
    getShirtIndexByColor, getTotalSum, groupShirts,
} from "@/helpers/cart";
import {
    getDiscountedSum, stackShirts, toHundredth,
} from "@/helpers/discount";

export interface ICartState {
    cartItems: Array<Shirt>
}

@Module({ name: StoreModulesNames.CartStore, store, dynamic: true, namespaced: true, stateFactory: true })
export default class CartStore extends VuexModule implements ICartState {
    cartItems: Array<Shirt> = []

    get [CartGettersNames.GroupedCartItems](): Array<GroupedShirt> {
        return groupShirts(this.cartItems)
    }

    get [CartGettersNames.GetStackedCartItems](): (maxShirtsPerStack: number) => Array<Array<Shirt>> {
        return (maxShirtsPerStack = 5) => stackShirts([...this.cartItems], maxShirtsPerStack)
    }

    get [CartGettersNames.StackedCartItemsByFive](): Array<Array<Shirt>> {
        return this[CartGettersNames.GetStackedCartItems](5)
    }

    get [CartGettersNames.StackedCartItemsByFour](): Array<Array<Shirt>> {
        return this[CartGettersNames.GetStackedCartItems](4)
    }

    get [CartGettersNames.DivisibleByFour](): boolean {
        return this[CartGettersNames.StackedCartItemsByFour].every(stack => stack.length === 4) &&
            !this[CartGettersNames.StackedCartItemsByFive].every(stack => stack.length === 5)
    }

    get [CartGettersNames.TotalSum](): number {
        return getTotalSum(this[CartGettersNames.GroupedCartItems])
    }

    get [CartGettersNames.DiscountedSum](): number {
        return toHundredth(
            this[CartGettersNames.DivisibleByFour] ?
                Math.min(
                    getDiscountedSum(this[CartGettersNames.StackedCartItemsByFour]),
                    getDiscountedSum(this[CartGettersNames.StackedCartItemsByFive])
                ) :
                getDiscountedSum(this[CartGettersNames.StackedCartItemsByFive])
        )
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
