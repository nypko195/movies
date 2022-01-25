<template>
    <div class="bg"></div>   
    <div class="header">       
        <router-link :to="{ name: 'pageMovies' }" class="header-logo">Movies</router-link>
        <div class="header-search__box">
            <input 
                class="header-search__input"
                type="text" 
                placeholder="Введите название" 
                v-model.trim="search"
                @keyup.enter="writeDownNameMovies"
            />
            <button 
                class="header-search__button"
                @click="writeDownNameMovies"
            >                
            </button>  

            <ButtonClose
                class="header-reset"
                @click="resetInput"
            />
        </div>
    </div>
</template>

<script>
    import ButtonClose from '../ui/ButtonClose.vue'

    export default {
        name: 'TheHeader',

        components: {
            ButtonClose,
        },

        data() {
            return {
                search: '',
            }
        },

        methods: {
            //избавиться от vuex!!!
            resetInput() {
                this.search = '';

                this.$store.commit('writeDownNameMovies', {
                    search: ''
                });
            }, 

            writeDownNameMovies() {
                this.$store.commit('writeDownNameMovies', {
                    search: this.search
                });

                this.search = '';
            },
        }
    }
</script>

<style lang="scss" scoped>
    .bg {
        display: block;
        height: 28rem;
        background-image: url('../../assets/bg-main/bg.jpg');
        background-repeat: no-repeat;
        background-position: top;

        @include respond-to(lg) {
            background-size: cover;
            margin: 0 10rem;
        }

        @include respond-to(md) {
            display: none;
            margin: 0;
        }
    }
    .header {
        display: flex;
        position: relative;
        max-width: 110rem;
        height: 6.5rem;
        margin: 0 auto;
        padding: 0 5rem;
        justify-content: space-between;
        align-items: center;   
        background-color: $white;
        border-radius: 5px;

        @include respond-to(lg) {
            max-width: 100%;
            margin: 0 10rem;
        }

        @include respond-to(md) {
            margin: 0 2rem;
            padding: 0 1rem;    
        }

        @include respond-to(sm) {
            height: auto;
            flex-direction: column;
            justify-content: center;
        }
    }
    .header-logo {
        color: $logo;
        font-size: 36px;
    }

    .header-search__box {
        display: flex;
        position: relative;
    }
    .header-search__input {
        position: relative;
        height: 2rem;
        padding: 2rem;
        border: 1px solid $border-main;
        border-radius: 5px;    

        @include respond-to(sm) {
            margin: 2rem 0;
            width: 100%;
        }       
    }

    .header-search__button {
        position: absolute;
        z-index: 2;
        right: 10%;
        width: 4rem;
        height: 4rem; 
        cursor: pointer;
        
        &:after {
            content: '';
            position: absolute;
            top: 22%; 
            left: 22%;
            width: 60%;
            height: 60%;
            background-image: url('../../assets/search.svg');
            background-repeat: no-repeat;

            @include respond-to(md) {
                left: 15%;
            }

            @include respond-to(sm) {
                top: 70%;
                left: 20%;
            }
        }
    }
    
    .header-reset {
        top: 50%;
        right: -1rem; 
    }
</style>