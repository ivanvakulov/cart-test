import { DiscountsPercentage,  Shirt } from "../../types/Base";
import { getShirtByColor } from "@/helpers/cart";

const COUNT_DISCOUNT_MAP: { [key: number]: DiscountsPercentage } = {
    2: DiscountsPercentage.TwoDiff,
    3: DiscountsPercentage.ThreeDiff,
    4: DiscountsPercentage.FourDiff,
    5: DiscountsPercentage.FiveDiff,
}

export const stackShirts = (shirts: Array<Shirt>, maxShirtsPerStack: number = 5): Array<Array<Shirt>> => {
    const stackedShirts: Array<Array<Shirt>> = []

    shirts.forEach((shirt: Shirt) => {
        const stackWithoutCurrentColor = stackedShirts.find(shirtsStack => !getShirtByColor(shirtsStack, shirt.color) && shirtsStack.length < maxShirtsPerStack)

        if (stackWithoutCurrentColor) {
            stackWithoutCurrentColor.push(shirt)
        } else {
            stackedShirts.push([shirt])
        }
    })

    return stackedShirts
}

const getShirtsSum = (shirts: Array<Shirt>): number => shirts.reduce(
    (sum: number, shirt: Shirt) => sum + shirt.price, 0
)

export const toHundredth = (value: number): number => Math.ceil(value * 100) / 100

const applyDiscount = (sum: number, discount: DiscountsPercentage): number =>
    toHundredth((100 - discount) * sum / 100)

export const getDiscountedSum = (stackedShirts: Array<Array<Shirt>>): number => stackedShirts.reduce(
    (discountedSum: number, shirtsStack: Array<Shirt>) => {
        return discountedSum + applyDiscount(getShirtsSum(shirtsStack), COUNT_DISCOUNT_MAP[shirtsStack.length] || 0)
    }, 0) || 0
