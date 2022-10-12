import { GroupedShirt, Shirt, ShirtColors } from "../../types/Base";

export const CART_ITEM = { color: ShirtColors.Lime, price: 8 }

// export const CART_ITEMS: Array<Shirt> = [
//     { color: ShirtColors.Lime, price: 8 },
//     { color: ShirtColors.Lime, price: 8 },
//     { color: ShirtColors.Indigo, price: 8 },
//     { color: ShirtColors.Indigo, price: 8 },
//     { color: ShirtColors.Indigo, price: 8 },
//     { color: ShirtColors.Cyan, price: 8 },
//     { color: ShirtColors.Blue, price: 8 },
//     { color: ShirtColors.Teal, price: 8 },
//     { color: ShirtColors.Teal, price: 8 }
// ]

export const CART_ITEMS: Array<Shirt> = [
    { color: ShirtColors.Cyan, price: 8 },
    { color: ShirtColors.Cyan, price: 8 },
    { color: ShirtColors.Teal, price: 8 },
    { color: ShirtColors.Teal, price: 8 },
    { color: ShirtColors.Blue, price: 8 },
    { color: ShirtColors.Blue, price: 8 },
    { color: ShirtColors.Lime, price: 8 },
    { color: ShirtColors.Indigo, price: 8 }
]

export const CART_ITEMS_STACKED_BY_FIVE: Array<Array<Shirt>> = [
    [
        { color: ShirtColors.Blue, price: 8 },
        { color: ShirtColors.Cyan, price: 8 },
        { color: ShirtColors.Indigo, price: 8 },
        { color: ShirtColors.Lime, price: 8 },
        { color: ShirtColors.Teal, price: 8 },
    ],
    [
        { color: ShirtColors.Blue, price: 8 },
        { color: ShirtColors.Cyan, price: 8 },
        { color: ShirtColors.Teal, price: 8 },
    ]
]

export const CART_ITEMS_STACKED_BY_FOUR: Array<Array<Shirt>> = [
    [
        { color: ShirtColors.Blue, price: 8 },
        { color: ShirtColors.Cyan, price: 8 },
        { color: ShirtColors.Lime, price: 8 },
        { color: ShirtColors.Teal, price: 8 },
    ],
    [
        { color: ShirtColors.Blue, price: 8 },
        { color: ShirtColors.Cyan, price: 8 },
        { color: ShirtColors.Indigo, price: 8 },
        { color: ShirtColors.Teal, price: 8 },
    ]
]

export const CART_ITEMS_GROUPED_BY_COLOR: Array<GroupedShirt> = [
    { color: ShirtColors.Blue, price: 8, count: 2 },
    { color: ShirtColors.Cyan, price: 8, count: 2 },
    { color: ShirtColors.Indigo, price: 8, count: 1 },
    { color: ShirtColors.Lime, price: 8, count: 1 },
    { color: ShirtColors.Teal, price: 8, count: 2 }
]

export const CART_ITEMS_SORTED_BY_COLOR: Array<Shirt> = [
    { color: ShirtColors.Blue, price: 8 },
    { color: ShirtColors.Blue, price: 8 },
    { color: ShirtColors.Cyan, price: 8 },
    { color: ShirtColors.Cyan, price: 8 },
    { color: ShirtColors.Indigo, price: 8 },
    { color: ShirtColors.Lime, price: 8 },
    { color: ShirtColors.Teal, price: 8 },
    { color: ShirtColors.Teal, price: 8 }
]

export const CART_ITEMS_SORTED_BY_COUNT: Array<Shirt> = [
    { color: ShirtColors.Cyan, price: 8 },
    { color: ShirtColors.Cyan, price: 8 },
    { color: ShirtColors.Teal, price: 8 },
    { color: ShirtColors.Teal, price: 8 },
    { color: ShirtColors.Blue, price: 8 },
    { color: ShirtColors.Blue, price: 8 },
    { color: ShirtColors.Lime, price: 8 },
    { color: ShirtColors.Indigo, price: 8 },
]
