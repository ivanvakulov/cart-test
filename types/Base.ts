export enum ShirtColors {
    Cyan = `cyan`,
    Teal = `teal`,
    Blue = `blue`,
    Indigo = `indigo`,
    Lime = `lime`,
}

export type Shirt = {
    color: ShirtColors
    price: number
}

export type GroupedShirt = Shirt & { count: number }
