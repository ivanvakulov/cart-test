export enum ShirtColors {
    Cyan = `cyan`,
    Teal = `teal`,
    Blue = `blue`,
    Indigo = `indigo`,
    Lime = `lime`,
}

export enum DiscountsPercentage {
    TwoDiff = 5,
    ThreeDiff = 10,
    FourDiff = 20,
    FiveDiff = 25
}

export type Shirt = {
    color: ShirtColors
    price: number
}

export type GroupedShirt = Shirt & { count: number }
