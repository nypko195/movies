<template> 
    <Loader v-if="isShowLoader"/>

    <div 
        v-else
        ref="list"
        class="list-films"
    >
        <router-link
            class="list-films__item"
            v-for="film in showPagefilms"
            :key="film.id"
            :to="{ name: 'сardFilm', params: { page: page, id: film.id, film: JSON.stringify(film) }}"
        >
            <img class="list-films__poster" :src="film.small_poster"/>
            <span class="list-films__year">{{ film.year }}</span>
        </router-link>

        <!-- <div v-if="isMobile && isTablet || sliderIndex !== 0" class="list-films__slider-prev"  @click="prevSlide">&#10094;</div>
        <div v-if="isMobile && isTablet || maxCountSlides !== sliderIndex" class="list-films__slider-next" @click="nextSlide">&#10095;</div> -->
    </div>

    <div class="list-films__paginations">
        <button
            class="list-films__paginations-prev button-pagination"
            :class="{'_disabled': isShowLoader}"
            @click="prevPage"
            v-show="isShowBtnPagePrev"
        >
            prev
        </button>
        <span class="list-films__paginations-page">{{ page }}</span>
        <button
            class="list-films__paginations-next button-pagination"
            :class="{'_disabled': isShowLoader}"
            @click="nextPage"
            v-show="isShowBtnPageNext"
        >
            next
        </button>
    </div>
</template>

<script>
// components
import Loader from '../ui/Loader.vue';

export default {
    inject: ['mq'],

    emits: ['get-films'],

    components: {
        Loader,
    },

    props: {
        films: {
            type: Array,
            default: [],
        },

        isShowLoader: {
            type: Boolean, 
            default: false,
        },

        toFirstPage: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            page: 1,
            sliderIndex: 0,
            maxCountSlides: 0,
        };
    },

    created() {
        this.page = this.$route.query?.page || 1;
    },

    computed: {
        isMobile() {
            const isScreenSizeXs = this.mq.current === 'xs';
            const isScreenSizeZero = this.mq.current === 'zero';

            return isScreenSizeXs || isScreenSizeZero;
        },

        isTablet() {
            const isScreenSizeSm = this.mq.current === 'sm';

            return isScreenSizeSm
        },

        showPagefilms() {      
            if (!this.isMobile) {               
                return this.films.slice(this.minCountCards, this.maxCountCards);
            }

            return this.films;    
        },

        minCountCards() {
            const MAX_NUMBER_CARD_ON_PAGE = 10;
            const startPaginationState = (this.page - 1) * MAX_NUMBER_CARD_ON_PAGE;

            return startPaginationState;
        },

        maxCountCards() {
            const MAX_NUMBER_CARD_ON_PAGE = 10;
            const endPaginationState = this.page * MAX_NUMBER_CARD_ON_PAGE;

            return endPaginationState;
        },

        isShowBtnPagePrev() {
            return this.page !== 1 || this.showPagefilms.length < 10 && this.showPagefilms.length > 1;
        },

        isShowBtnPageNext() {
            //подумать над решением если не знать количество страниц
            //проверка гит
            // return this.page !== 5 && this.showPagefilms.length >= 10;
            return this.showPagefilms.length >= 10;
        },
    },

    watch: {
        async page() {
            let numberDisplayedfilms = 10;
            let endfilmList = this.page === (this.films.length / numberDisplayedfilms);

            if (endfilmList) {
                this.$emit('get-films');
            }
        },

        toFirstPage() {
            this.page = 1;

            this.scrollBlockToTop();
        }
    },

    methods: {
        nextPage() {
            this.page++;
            this.$router.push(`${this.$route.path}?page=${this.page}`);

            if(this.isTablet) {
                this.scrollBlockToTop();
            }
        },

        prevPage() {
            this.page--;
            this.$router.push(`${this.$route.path}?page=${this.page}`);

            if(this.isTablet) {
                this.scrollBlockToTop();
            }
        },

        nextSlide() {
            this.sliderIndex++;
            this.showSlides();
        },

        prevSlide() {
            this.sliderIndex--;
            this.showSlides();
        },

        showSlides() {   
            if (!this.isTablet && !this.isMobile) return;

            let slides = document.getElementsByClassName('list-films__item');

            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';
            }

            if (this.isTablet) {
                slides[this.sliderIndex].style.display = 'block';
                slides[this.sliderIndex + 1].style.display = 'block';
                slides[this.sliderIndex + 2].style.display = 'block';

                this.maxCountSlides = slides.length - 3;

                return;
            } else {
                slides[this.sliderIndex].style.display = 'block';

                this.maxCountSlides = slides.length;
            }
        }, 

        scrollBlockToTop() {
            this.$refs.list.scrollTo({
                top: 0,
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.list-films {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @include respond-to(sm) {
        position: relative;
        height: 100%;
        padding: 0 1rem;
        overflow-x: auto;
    }

    &__item {
        position: relative;
        flex: 0 0 16%;
        margin-right: 1.5rem;
        margin-bottom: 1rem;
        cursor: pointer;

        &:hover {
            top: -2px;
            box-shadow: 0px 5px 10px 2px rgba(74, 153, 153, 0.36);

            &:before {
                content: '';
                position: absolute;
                z-index: 1;
                top: calc(50% - 3.5rem);
                left: calc(50% - 3.5rem);
                width: 7rem;
                height: 7rem;
                border-radius: 50%;
                background-color: $green;
            }

            &:after {
                content: '';
                position: absolute;
                z-index: 1;
                top: calc(50% - 2rem);
                left: calc(50% - .5rem);
                border: 2rem solid transparent; 
                border-left: 2rem solid $white;
            }
        }

        @include respond-to(sm) {
            width: 100%;
        }
    }

    &__slider-prev, &__slider-next {
        position: absolute;
        top: calc(50% - 1.3rem);
        z-index: 1;
        color: $green;
        font-size: 2.6rem;
    }

    &__slider-next {           
        right: -5rem;
    }

    &__slider-prev {
        left: -5rem;
    }

    &__poster {
        max-width: 19rem;
        min-width: 17rem;
        width: 100%;
        height: 25rem;

        @include respond-to(sm) {
            min-width: 33rem;
            height: 45rem;
        }
    }

    &__year {
        position: absolute;
        bottom: 7%;
        left: 10%;
        padding: 5px;
        background-color: $green;    
        color: $white;
        font-size: 1.6rem;
        font-weight: 700;
    }

    &__paginations {
        position: relative;
        width: 100%;
        margin-top: auto;
        margin-bottom:5rem;
        font-weight: 700;

        @include respond-to(sm) {
            margin: 1rem 0 4rem;
        }

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

            &._disabled {
                pointer-events: none;
                opacity: .4;
            }
        }

        &-next {
            left: 55%;

            @include respond-to(xs) {
                left: 62%;
            }

            &._disabled {
                pointer-events: none;
                opacity: .4;
            }
        }

        &-page {
            position: absolute;
            left: 50%;
            font-size: 1.6rem;
            font-weight: 700;
            cursor: default;
        }     
    }
}
</style>