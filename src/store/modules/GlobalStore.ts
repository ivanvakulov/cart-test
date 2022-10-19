import { getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import store from '@/store'
import { GlobalMutationsNames, StoreModulesNames } from "@/store-consts";
import { Shirt, ShirtColors } from "../../../types/Base";
import { USER_CART_STORAGE_KEY } from "@/consts";

export interface IGlobalState {
    showLogs: boolean
    availableShirts: Array<Shirt>
}

@Module({ name: StoreModulesNames.GlobalStore, store, dynamic: true, namespaced: true, stateFactory: true })
export default class GlobalStore extends VuexModule implements IGlobalState {
    showLogs: boolean = true
    availableShirts: Array<Shirt> = [
        {
            color: ShirtColors.Cyan,
            price: 8
        },
        {
            color: ShirtColors.Teal,
            price: 8
        },
        {
            color: ShirtColors.Blue,
            price: 8
        },
        {
            color: ShirtColors.Indigo,
            price: 8
        },
        {
            color: ShirtColors.Lime,
            price: 8
        }
    ]

    @Mutation
    [GlobalMutationsNames.ToggleShowLogs](value: boolean): void {
        this.showLogs = value
    }
}

export const GlobalModule = getModule(GlobalStore)
