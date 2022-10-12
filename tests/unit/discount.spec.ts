import { Shirt, ShirtColors } from "../../types/Base";
import {applyDiscount, getDiscountedSum, getShirtsSum, stackShirts, toHundredth} from "@/helpers/discount";
import { CART_ITEMS, CART_ITEMS_STACKED_BY_FIVE, CART_ITEMS_STACKED_BY_FOUR } from "../consts";

describe(`Discount`, () => {
    describe(`stackShirts`, () => {
        it(`stacks by 5 correctly`, () => {
            const value = [...CART_ITEMS]

            expect(stackShirts(value, 5)).toStrictEqual(CART_ITEMS_STACKED_BY_FIVE)
        })

        it(`stacks by 4 correctly`, () => {
            const value = [...CART_ITEMS]

            expect(stackShirts(value, 4)).toStrictEqual(CART_ITEMS_STACKED_BY_FOUR)
        })
    })

    describe(`getShirtsSum`, () => {
        it(`counts correctly`, () => {
            const value = [...CART_ITEMS]

            expect(getShirtsSum(value)).toBe(64)
        })
    })

    describe(`toHundredth`, () => {
        it(`rounds correctly`, () => {
            const value = 0.1111

            expect(toHundredth(value)).toBe(0.12)
        })
    })

    describe(`applyDiscount`, () => {
        it(`applies discount correctly`, () => {
            const value = [...CART_ITEMS]

            expect(applyDiscount(getShirtsSum(value), 10)).toBe(57.6)
        })
    })

    describe(`getDiscountedSum`, () => {
        it(`counts total discount for CART_ITEMS_STACKED_BY_FIVE correctly`, () => {
            expect(getDiscountedSum(CART_ITEMS_STACKED_BY_FIVE)).toBe(51.6)
        })

        it(`counts total discount for CART_ITEMS_STACKED_BY_FOUR correctly`, () => {
            expect(getDiscountedSum(CART_ITEMS_STACKED_BY_FOUR)).toBe(51.2)
        })
    })
})
