<template>
    <div class="container">
        <div class="output-result title">
            {{ title }}

            <ButtonClose 
                class="output-close"
                @click="close"
            />
        </div>
        <div class="output-list">        
            <div 
                class="output-item"
                v-for="item in activeMovies"
                :key="item.id"
            >
                <img class="output-item__poster" :src="item.small_poster" alt="">
                <div class="output-item__info">
                    <h3 class="output-item__name title">
                        {{ item.name_russian }}
                    </h3>
                    <p class="output-item__year text">
                        Год выхода: {{ item.year}}
                    </p>
                    <p class="output-item__description text">
                        Описание: {{ item.description }}
                    </p>                
                </div>
            </div>        
        </div>
    </div>
</template>

<script>
import ButtonClose from '../ui/ButtonClose.vue'

export default {
    name: 'OutputMovies',

    components: {
        ButtonClose,
    },

    props: {
        activeMovies: {
            type: Array,
        }
    },

    computed: {
        title() {
            return this.activeMovies.length ? 'Найденные фильмы' : 'По вашему запросу фильмы не найдены';
        }
    },

    methods: {
        close() {
            this.$store.commit('writeDownNameMovies', {
                search: ''
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    .container {
        width: 100%;
        padding: 0 5rem;
    }
    .output-result { 
        position: relative;
        width: 100%;
        padding: 1rem 0;
        margin-bottom: 2rem;
        text-align: center;
        border: 1px solid $border-main;
        border-radius: 6px;
    }

    .output-close {
        position: absolute;
    }
    .output-list {
        display: flex;
        justify-content: start;
    }
    .output-item {
        display: flex;
        flex-direction: row;
        margin-top: 2rem;
        margin-bottom: 2rem;
        height: auto;
        border: 1px solid $border-main;
        border-radius: 6px;

        &:first-child {
            margin-top: 0;
        }

        &__poster {
            height: 25rem;
        }

        &__info {
            display: flex;
            flex-direction: column;
            margin: 0 3rem;            
        }

        &__name {
            margin-bottom: 2rem;
        }
    }
</style>