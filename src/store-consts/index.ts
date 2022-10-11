export enum StoreModulesNames {
    GlobalStore = `GlobalStore`,
    CartStore = `CartStore`
}

export enum GlobalMutationsNames {
    ToggleShowLogs = `ToggleShowLogs`
}

export enum CartGettersNames {
    GroupedCartItems = `GroupedCartItems`,
    StackedCartItems = `StackedCartItems`,
    DivisibleByFour = `DivisibleByFour`,
    TotalSum = `TotalSum`,
    DiscountedSum = `DiscountedSum`
}

export enum CartMutationsNames {
    AddItemToCart = `AddItemToCart`,
    RemoveItemFromCart = `RemoveItemFromCart`
}

