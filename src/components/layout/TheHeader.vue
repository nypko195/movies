<template>
    <div class="bg"></div>   
    <div class="header">       
        <a href="" class="header-logo">Movies</a>
        <div class="header-search__box">
            <input 
                class="header-search__input"
                type="text" 
                placeholder="Введите на звание" 
                v-model.trim="search"
            />
            <button 
                class="header-search__button"
                @click="writeDownNameMovies"
            >                
            </button>  
        </div>      
        <span class="header-reset" @click="resetInput"></span>
    </div>
</template>

<script>
export default {
    name: 'TheHeader',

    data() {
        return {
            search: '',
        }
    },

    methods: {
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
        border: 1px solid #b0b1b4;
        border-radius: 5px;    

        @include respond-to(md) {
            margin-right: 4rem;
        }

        @include respond-to(sm) {
            margin: 2rem 0;
            width: 100%;
        }       
    }

    .header-search__button {
        position: absolute;
        z-index: 2;
        right: 1%;
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
        }
    }

    .header-reset {
        position: absolute;
        z-index: 2;
        top: 50%;
        right: 0;
        width: 4rem;
        height: 4rem;

        &:before,
        &:after {
            content: '';
            position: absolute;    
            height: 1px;
            top: 0;
            left: 0;
            width: 2rem;
            background-color: $icon-reset;
            transition: all .5s ease-out;
        }

        &:before {
            content: '';
            transform: rotate(45deg);  
        }

        &:after {
            content: '';
            transform: rotate(135deg);        
        }

        &:hover {
            transform: scale(1.1);

            &:before {
                content: '';
                transform: rotate(135deg);
                transition: all .5s ease-out;
            }

            &:after {
                content: '';
                transform: rotate(225deg);
                transition: all .5s ease-out;
            }
        }
    }
</style>