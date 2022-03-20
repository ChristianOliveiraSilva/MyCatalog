<script setup>
    import { computed } from 'vue'
    const props = defineProps(['name','description','count'])

    const name = props.name || 'MyCatalog - header'
    const description = props.description || 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente omnis dicta vero ipsam atque quae, suscipit reprehenderit non nisi delectus.'
    const count = props.count || 0
</script>

<template>
    <div class="card">
        <header>{{name}}</header>
        <section class="content">
            {{description}}
        </section>
        <footer>
            <button v-if="count > 0" class="btn-buy">Produto disponível</button>
            <p v-else><small>Produto fora da loja</small></p>
        </footer>
    </div>
</template>

<style>
</style>
