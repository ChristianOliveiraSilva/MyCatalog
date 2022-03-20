<script setup>
  import Card from "./components/Card.vue"
  import { reactive, computed } from 'vue'

  const state = reactive({
    layout: 0,
    products: [
        {
            id: 1,
            name: 'teste',
            description: 'Este é um belo produto',
            count: 5
        }, {}, {}, // just for tests
    ]
  })

  const currentClass = computed(() => {
    return state.layout == 0 ? 'grid' : 'flex'
  })

  const showGrid = computed(() => {
    return state.layout == 0 ? 'active' : ''
  })
  
  const showFlex = computed(() => {
    return state.layout == 1 ? 'active' : ''
  })

  function toggleLayout(value) {
    state.layout = value
  }
</script>

<template>
    <main>
        <header>
            <h3 class="title">MyCatalog</h3>

            <div class="options">
                <button :class="showGrid" @click="() => toggleLayout(0)">Grid</button>
                <button :class="showFlex" @click="() => toggleLayout(1)">Flex</button>
            </div>
        </header>
        <section id="content" :class="currentClass">
            <Card v-for="product in state.products" :key="product.id"
              :name="product.name" :description="product.description" :count="product.count" />
        </section>
        <footer>
            <p>Feito por Christian Oliveira</p>
        </footer>
    </main>
</template>

<style>
  @import './styles/style.css';
  @import './styles/grid.css';
  @import './styles/flex.css';
</style>
