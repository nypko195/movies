<template>
    <div class="header">
        <div class="header__picture"></div>

        <section class="header__content">
            <router-link to="/films/?page=1" class="header__logo">Films</router-link>

            <SearchBox 
                @set-name-film="setNameFilm"
            />

            <div class="header-burger">
                <div 
                    class="header-burger__button"
                    :class="{'_active': isOpenBurgerMenu}"
                    @click="openBurgerMenu"
                >
                </div>
            </div>
        </section>

        <div 
            class="header__menu"
            :class="{'_active': isOpenBurgerMenu}"
        >
            <SearchBox 
                @title-film="setNameFilm"
                is-menu
            />
        </div>
    </div>
</template>

<script>
import SearchBox from '../ui/SearchBox.vue';

export default {
    name: 'TheHeader',

    emits: ['set-name-film'],

    components: {
        SearchBox,
    },

    data() {
        return {
            isOpenBurgerMenu: false,
        };
    },

    methods: {
        setNameFilm(name) {
            if (!name) return;

            this.$emit('set-name-film', name);
            this.$router.push({ name: 'foundFilms' });

            this.reset();
        },

        openBurgerMenu() {
            this.isOpenBurgerMenu = !this.isOpenBurgerMenu;

            this.lockedScrollBody();
        },

        lockedScrollBody() {
            if (this.isOpenBurgerMenu) {
                document.body.classList.add('_locked');
            } else {
                document.body.classList.remove('_locked');
            }
        },

        reset() {
            this.isOpenBurgerMenu = false;
            this.lockedScrollBody();
        },
    }
}
</script>

<style lang="scss" scoped>
.header {
    position: relative;

    &__picture {
        display: block;
        height: 28rem;
        background-image: url('../../assets/header-bg/bg.jpg');
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

    &__content {
        display: flex;
        position: relative;
        z-index: 3;
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
        }
    }

    &__logo {
        color: $logo;
        font-size: 36px;
        font-weight: 700;
        transition: all 0.3s ease;

        &:hover {
            transform: scale(1.1);

            @include respond-to(sm) {
                transform: scale(1);
            }
        }
    }

    &__menu {
        position: fixed;
        width: 100%;
        height: 110%;
        z-index: 2;
        padding: 12rem 2rem 0;
        background: $green;
        transform: translateY(+150%);
        transition: transform .5s ease;

        @include respond-to(xs) {
            padding: 8rem 2rem 0;
        }

        &._active {
            transform: translateY(-10%);
        }
    }

    &-search {
        &__box {
            display: flex;
            position: relative;

            @include respond-to(sm) {
                display: none;

                &._menu {
                    display: block;
                }
            }
        }

        &__input {
            position: relative;
            height: 2rem;
            padding: 2rem;
            border: 1px solid $border-main;
            border-radius: 5px;
            transition: all .5s ease;
            
            &:hover {
                border-radius: 24px;
            }

            @include respond-to(sm) {
                margin: 2rem 0;
                width: 100%;
            }       
        }

        &__button {
            position: absolute;
            z-index: 2;
            top: 0;
            right: 10%;
            width: 4rem;
            height: 4rem; 
            cursor: pointer;

            @include respond-to(sm) {
                right: 4%;
            }

            @include respond-to(xs) {
                right: 7.5%;
            }
            
            &:after {
                content: '';
                position: absolute;
                top: 22%; 
                left: 78%;
                width: 60%;
                height: 60%;
                background-image: url('../../assets/search.svg');
                background-repeat: no-repeat;

                @include respond-to(md) {
                    left: 80%;
                }

                @include respond-to(sm) {
                    top: 70%;
                }
            }
        }
    }

    &-burger {
        display: none;
        align-items: center;
        width: 30px;
        height: 30px;

        @include respond-to(sm) {
            display: flex;
        }

        &__button {
            position: relative;
            
            @include respond-to(sm) {
                height: 2px;
                width: 30px;
                background-color: $black;

                &:before,
                &:after {
                    content: '';
                    position: absolute;
                    height: 2px;
                    width: 30px;
                    background-color: $black;
                    transition: all .3s ease;
                }

                &:before {
                    top: -7px;
                }

                &:after {
                    top: 7px;
                }

                &._active {
                    height: 0;

                    &:before,
                    &:after {
                        top: 0;
                    }

                    &:before {
                        transform: rotate(45deg);
                    }

                    &:after {
                        transform: rotate(-45deg);
                    }
                }
            }
        }
    }
}
</style>