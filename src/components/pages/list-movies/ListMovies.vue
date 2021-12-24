<template>    
    <div class="list-movies">
        <div 
            class="list-movies__item"
            v-for="item in activeMovies"
            :key="item.id"
        >            
            <img class="list-movies__poster" :src="item.small_poster"/>
            <span class="list-movies__year">{{ item.year }}</span>
        </div>
    </div>
    <div class="list-movies__paginations">
        <button 
            class="list-movies__paginations-prev button"
            @click="page--" 
            v-show="!isShowBtnPagePrev"
        >
            prev
        </button>
        <span class="list-movies__paginations-page">{{ page }}</span>
        <button 
            class="list-movies__paginations-next button"  
            @click="page++"
            v-show="isShowBtnPageNext"
        >
            next
        </button>
    </div>   
</template>

<script>
export default {
    name: 'ListMovies',

    inject: ['mq'],

    data() {
        return {
            
        }
    },

    props: {
        movies: {
            type: Array,
        }
    },

    data() {
        return {
            page: 1,
        }
    },


    computed: {
        isMobile() {
            const isScreenSizeSm = this.mq.current === 'sm';
            const isScreenSizeXs = this.mq.current === 'xs';
            const isScreenSizeZero = this.mq.current === 'zero';

            return isScreenSizeSm || isScreenSizeXs || isScreenSizeZero;
        },

        activeMovies() {
            return this.movies.slice(this.filterStart, this.filterEnd);
        },

        filterStart() {
            if(this.isMobile) {
                const maxNumberCardOnPage = 4;
                const startPaginationState = (this.page - 1) * maxNumberCardOnPage;      

                return startPaginationState;
            }

            if(!this.isMobile) {
                const maxNumberCardOnPage = 10;
                const startPaginationState = (this.page - 1) * maxNumberCardOnPage;      

                return startPaginationState;
            }
        },

        filterEnd() {
            if(this.isMobile) {
                const maxNumberCardOnPage = 4;
                const endPaginationState = this.page * maxNumberCardOnPage;
                return endPaginationState;
            }

            if(!this.isMobile) {
                const maxNumberCardOnPage = 10;
                const endPaginationState = this.page * maxNumberCardOnPage;
                return endPaginationState;
            }
        },

        isShowBtnPagePrev: function() {
            return this.page === 1;
        },

        isShowBtnPageNext: function() {
            //подумать над решение если не знать количество страниц
            return this.page !== 5;
        },
    }
}
</script>

<style lang="scss" scoped>
    .list-movies {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        &__item {
            position: relative;
            flex: 0 0 16%;
            margin-right: 1.5rem;
            margin-bottom: 1rem;
        }

        &__poster {
            width: 17rem;
            height: 25rem;
        }

        &__year {
            position: absolute;
            bottom: 7%;
            left: 10%;
            padding: 5px;
            background-color: $green;    
            color: $white;
            font-size: 1.6rem;
        }

        &__paginations {
            position: relative;
            width: 100%;
            margin: 2rem 0 5rem;
            
            &-prev {
                left: 36%;

                @include respond-to(md) {
                    left: 35%;
                }

                @include respond-to(sm) {
                    left: 31%;
                }

                @include respond-to(xs) {
                    left: 14%;
                }
            }

            &-next {
                left: 55%;

                @include respond-to(xs) {
                    left: 62%;
                }
            }

            &-page {
                position: absolute;
                left: 50%;
                font-size: 1.6rem;
                font-weight: 700;
            }     
        }
    }
    .button {
        position: absolute;
        width: 10rem;
        height: 3rem;
        background-color: $green; 
        border: none; 
        color: $white;
        font-size: 1.6rem;
        font-weight: 700;
        text-transform: uppercase;
    } 
</style>