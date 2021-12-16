<template>    
    <div class="card-row">
        <div class="card"
             v-for="item in activeListMovies"
             :key="item.id"
        >            
            <img class="poster" :src="item.small_poster"/>
            <span class="year">{{ item.year }}</span>        
        </div> 
    </div>
    <div class="paginations">
        <button class="button prev"
                @click="page--" 
                v-show="isShowBtnPagePrev"
        >
            prev
        </button>
        <span class="count-page">{{ page }}</span>
        <button class="button next" 
                @click="page++"
                v-show="isShowBtnPageNext"
        >
            next
        </button>
    </div>   
</template>

<script>
export default {
    name: 'Card',

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
    .card-row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .card {
        position: relative;
        flex: 0 0 16%;
        margin-right: 1.5rem;
        margin-bottom: 1rem;

        &:nth-child(5n) {
            margin-right: 0;
        }
    }

    .poster {
        width: 17rem;
        height: 25rem;
    }

    .year {
        position: absolute;
        bottom: 7%;
        left: 10%;
        padding: 5px;
        background-color: #4a9999;    
        color: #fff;
        font-size: 1.6rem;
    }

    .paginations {
        position: relative;
        width: 100%;
        margin: 1rem 0 2rem;

        .button {
            position: absolute;
            width: 10rem;
            height: 3rem;
            background-color: #4a9999; 
            border: none; 
            color: #fff;
            font-size: 1.6rem;
            font-weight: 700;
            text-transform: uppercase;
        }   

        .count-page {
            position: absolute;
            left: 50%;
            font-size: 1.6rem;
            font-weight: 700;
        } 
        
        .prev {
            left: 36%;
        }

        .next {
            left: 55%;
        }
    }    
</style>