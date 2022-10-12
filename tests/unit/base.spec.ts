import { isNil } from "@/helpers/base";

describe(`Base`, () => {
    describe(`isNil`, () => {
        it(`returns false if value is truthy`, () => {
            const value = `Test string`

            expect(isNil(value)).toBe(false)
        })

        it(`returns true if value is null`, () => {
            const value = null

            expect(isNil(value)).toBe(true)
        })

        it(`returns true if value is undefined`, () => {
            const value = undefined

            expect(isNil(value)).toBe(true)
        })

        it(`returns false if value is zero`, () => {
            const value = 0

            expect(isNil(value)).toBe(false)
        })

        it(`returns false if value is an empty string`, () => {
            const value = 0

            expect(isNil(value)).toBe(false)
        })
    })
})
