<template>
    <div class="pagination">
        <button 
            v-show="isShowBtnPrev"
            class="pagination__button-prev button-pagination"
            :class="{'_disabled': isDisabled}"
            @click="prevPage"                
        >
            prev
        </button>

        <span class="pagination__page">{{ page }}</span>

        <button
            v-show="isShowBtnNext"
            class="pagination__button-next button-pagination"
            :class="{'_disabled': isDisabled}"
            @click="nextPage"
        >
            next
        </button>
    </div>
</template>

<script>
export default {
    name: 'Pagination',

    props: {
        page: {
            type: Number,
            default: 0,
        },        

        isShowBtnPrev: {
            type: Boolean,
            default: false,
        },

        isShowBtnNext: {
            type: Boolean,
            default: false,
        },

        isDisabled: {
            type: Boolean,
            default: false,
        },
    },

    methods: {
        prevPage() {
            this.$emit('prev-page');
        },

        nextPage() {
            this.$emit('next-page');
        },
    },
}
</script>

<style lang="scss" scoped>
.pagination {
    position: relative;
    width: 100%;
    margin-top: 2rem;
    margin-bottom:5rem;
    font-weight: 700;

    @include respond-to(sm) {
        margin: 1rem 0 4rem;
    }

    &__button {

        &._disabled {
            pointer-events: none;
            opacity: .4;
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
        }

        &-next {
            left: 55%;

            @include respond-to(xs) {
                left: 62%;
            }
        }
    }

    &__page {
        position: absolute;
        left: 50%;
        font-size: 1.6rem;
        font-weight: 700;
        cursor: default;
    }     
}
</style>