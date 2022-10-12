import { ShirtColors } from "../../types/Base";
import {
    getCountByColor,
    getGroupedShirt,
    getShirtByColor,
    getShirtIndexByColor, getTotalSum,
    groupShirts,
    incrementShirtCountByColor,
    sortShirtsByColor,
    sortShirtsByCount
} from "@/helpers/cart";
import {
    CART_ITEM,
    CART_ITEMS,
    CART_ITEMS_GROUPED_BY_COLOR,
    CART_ITEMS_SORTED_BY_COLOR,
    CART_ITEMS_SORTED_BY_COUNT
} from "../consts";

describe(`Cart`, () => {
    describe(`sortShirtsByColor`, () => {
        it(`sorts correctly`, () => {
            const value = [...CART_ITEMS]

            sortShirtsByColor(value)

            expect(value).toStrictEqual(CART_ITEMS_SORTED_BY_COLOR)
        })
    })

    describe(`sortShirtsByCount`, () => {
        it(`sorts correctly`, () => {
            const value = [...CART_ITEMS]

            sortShirtsByCount(value)

            expect(value).toStrictEqual(CART_ITEMS_SORTED_BY_COUNT)
        })
    })

    describe(`getGroupedShirt`, () => {
        it(`adds count property`, () => {
            expect(CART_ITEM).not.toHaveProperty(`count`)

            expect(getGroupedShirt(CART_ITEM)).toHaveProperty(`count`)
        })
    })

    describe(`getShirtByColor`, () => {
        it(`returns shirt by color`, () => {
            expect(getShirtByColor(CART_ITEMS, ShirtColors.Lime)).toStrictEqual(CART_ITEM)
        })

        it(`returns null if item doesn't exist`, () => {
            expect(getShirtByColor([], ShirtColors.Lime)).toBeNull()
        })
    })

    describe(`getCountByColor`, () => {
        it(`returns count by color`, () => {
            expect(getCountByColor(CART_ITEMS, ShirtColors.Blue)).toBe(2)
        })

        it(`returns zero if item doesn't exist`, () => {
            expect(getCountByColor([], ShirtColors.Lime)).toBe(0)
        })
    })

    describe(`getShirtIndexByColor`, () => {
        it(`returns index by color`, () => {
            expect(getShirtIndexByColor(CART_ITEMS, ShirtColors.Blue)).toBe(4)
        })

        it(`returns null if item doesn't exist`, () => {
            expect(getShirtIndexByColor([], ShirtColors.Blue)).toBeNull()
        })
    })

    describe(`incrementShirtCountByColor`, () => {
        it(`increments if finds value`, () => {
            const value = { ...CART_ITEM }
            const groupedValue = [getGroupedShirt(value)]

            expect(incrementShirtCountByColor(groupedValue, ShirtColors.Lime)[0].count).toBe(2)
        })

        it(`doesn't increment if no value with color`, () => {
            const value = { ...CART_ITEM }
            const groupedValue = [getGroupedShirt(value)]

            expect(incrementShirtCountByColor(groupedValue, ShirtColors.Blue)[0].count).toBe(1)
        })
    })

    describe(`groupShirts`, () => {
        it(`groups correctly`, () => {
            const value = [...CART_ITEMS]

            expect(groupShirts(value)).toStrictEqual(CART_ITEMS_GROUPED_BY_COLOR)
        })
    })

    describe(`getTotalSum`, () => {
        it(`counts correctly`, () => {
            expect(getTotalSum(CART_ITEMS_GROUPED_BY_COLOR)).toBe(64)
        })
    })
})
