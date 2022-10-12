<template>
<div>
    <v-card
        v-for='(solution, solutionIndex) in solutions'
        :key='`solution-${solutionIndex}`'
        class='px-4 py-2 mt-2'
        outlined>
        Splitting by {{ !solutionIndex ? 5 : 4 }}
        <div v-for='(stack, stackIndex) in solution'
             :key='`stack-${solutionIndex}-${stackIndex}`'>
            <v-list-item-avatar
                v-for='(item, itemIndex) in stack'
                :key='`stack-${solutionIndex}-${stackIndex}-${itemIndex}`'
                class='mr-2 ml-0'
                tile
                size='20'
                :color='item.color'>
            </v-list-item-avatar>

            - stack discounted sum - {{ getStackSum(stack) }}$ with {{ getStackDiscount(stack) }}% discount = {{ getDiscountedStackPrice(stack) }}$
        </div>

        <div>Total: {{ totalSum }}$</div>
        <div>Total with discount: {{ getDiscountedSum(solution) }}$</div>
    </v-card>
</div>
</template>

<script lang="ts">
import { Component,  Prop, Vue } from "vue-property-decorator";
import { Shirt } from "../../../types/Base";
import { applyDiscount, COUNT_DISCOUNT_MAP, getDiscountedSum, getShirtsSum, toHundredth } from "@/helpers/discount";

@Component
export default class CartItem extends Vue {
    @Prop({ type: Array, default: () => [] })
    solutions!: Array<Array<Array<Shirt>>>

    @Prop({ type: Number, default: 0 })
    totalSum!: number

    getDiscountedSum(solution: Array<Array<Shirt>>): number {
        return toHundredth(getDiscountedSum(solution))
    }

    getStackSum(shirtsStack: Array<Shirt>): number {
        return getShirtsSum(shirtsStack)
    }

    getStackDiscount(shirtsStack: Array<Shirt>): number {
        return COUNT_DISCOUNT_MAP[shirtsStack.length] || 0
    }

    getDiscountedStackPrice(shirtsStack: Array<Shirt>): number {
        return applyDiscount(this.getStackSum(shirtsStack), this.getStackDiscount(shirtsStack))
    }
}
</script>
