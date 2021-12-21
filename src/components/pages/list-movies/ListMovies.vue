<template>    
    <div class="list-movies">
        <div 
            class="list-movies__item"
            v-for="item in activeListMovies"
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
            v-show="isShowBtnPagePrev"
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

    props: {
        moviesList: {
            type: Array,
        }
    },

    data() {
        return {
            page: 1,
        }
    },

    computed: {
        activeListMovies() {
            return this.moviesList.slice(this.filterStart, this.filterEnd);
        },

        filterStart() {
            const start = (this.page - 1) * 10;
            return start;
        },

        filterEnd() {
            const end = this.page * 10;
            return end
        },

        isShowBtnPagePrev: function() {
            if(this.page === 1) {                       
                return false;
            } else {
                return true;
            }  
        },

        isShowBtnPageNext: function() {
            //подумать над решение если не знать количество страниц
            if(this.page !== 5) {
                return true;
            } else {
                return false;
            }
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

            &:nth-child(5n) {
                margin-right: 0;
            }
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
            margin: 1rem 0 2rem;  
            
            &-prev {
                left: 36%;
            }

            &-next {
                left: 55%;
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