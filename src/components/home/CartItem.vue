<template>
<v-list-item
    class='overflow-auto'>
    <v-list-item-avatar
        tile
        size='40'
        :color='item.color'>
    </v-list-item-avatar>

    <v-list-item-content>
        <v-list-item-title class='text-capitalize' v-text='`${item.color} - ${item.count}`'></v-list-item-title>

        <v-list-item-subtitle v-text='`${item.price}$`'></v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action>
        <v-btn
            icon color='error'
            @click='emitRemoveFromCart(item)'>
            <v-icon>mdi-minus</v-icon>
        </v-btn>
    </v-list-item-action>
</v-list-item>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import { GroupedShirt } from "../../../types/Base";

@Component
export default class CartItem extends Vue {
    @Prop({ type: Object, required: true })
    item!: GroupedShirt

    @Emit(`remove`)
    emitRemoveFromCart(item: GroupedShirt): GroupedShirt {
        return item
    }
}
</script>
