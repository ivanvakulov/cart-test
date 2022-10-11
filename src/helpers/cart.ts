import { GroupedShirt, Shirt, ShirtColors } from "../../types/Base";

export const getGroupedShirt = (shirt: Shirt): GroupedShirt => ({ ...shirt, count: 1 })

export const getShirtByColor = (
    shirts: Array<Shirt | GroupedShirt>, color: ShirtColors
): Shirt | null =>
    shirts.find(shirt => shirt.color === color) || null

export const getShirtIndexByColor = (
    shirts: Array<Shirt | GroupedShirt>, color: ShirtColors
): number | null => {
    const index = shirts.findIndex(shirt => shirt.color === color)

    return ~index ? index : null
}

export const incrementShirtCountByColor = (
    shirts: Array<GroupedShirt>, color: ShirtColors
): Array<GroupedShirt> =>
    shirts.map(shirt => shirt.color === color ? { ...shirt, count: shirt.count + 1 } : shirt)

export const groupShirts = (shirts: Array<Shirt>): Array<GroupedShirt> => shirts.reduce(
    (groupedShirts: Array<GroupedShirt>, shirt: Shirt) => {
        const groupedShirtWithCurrentColor = getShirtByColor(groupedShirts, shirt.color)

        if (groupedShirtWithCurrentColor) {
            return incrementShirtCountByColor(groupedShirts, shirt.color)
        } else {
            groupedShirts.push(getGroupedShirt(shirt))

            return groupedShirts
        }

    }, []) || []

export const getTotalSum = (shirts: Array<GroupedShirt>): number => shirts.reduce(
    (totalSum: number, shirt: GroupedShirt) => totalSum + shirt.count * shirt.price, 0)
