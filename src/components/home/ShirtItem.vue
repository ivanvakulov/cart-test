<template>
<v-card
    class='mx-auto mb-4'
    max-width='344'
    outlined>
    <v-list-item three-line>
        <v-list-item-content>
            <div class='text-overline mb-4'>
                {{ item.price }}$
            </div>
            <v-list-item-title class='text-h5 mb-1 text-capitalize'>
                {{ item.color }} Shirt
            </v-list-item-title>
        </v-list-item-content>

        <v-list-item-avatar
            tile
            size='80'
            :color='item.color'>
        </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
        <v-btn
            color='primary'
            outlined
            rounded
            @click='emitAddToCart(item)'>
            Add to cart
        </v-btn>
    </v-card-actions>
</v-card>

</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import { Shirt } from "../../../types/Base";

@Component
export default class ShirtItem extends Vue {
    @Prop({ type: Object, required: true })
    item!: Shirt

    @Emit(`add`)
    emitAddToCart(item: Shirt): Shirt {
        return item
    }
}
</script>

<style scoped>

</style>
