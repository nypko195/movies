<template>
    <div class="footer">
        <a href="https://t.me/nypko195" class="footer__title title" target="_blank">by Sviridov.A.</a>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    display: flex;
    max-width: 110rem;
    height: 6.5rem;
    margin: 0 auto;
    padding: 0 5rem;
    justify-content: space-between;
    align-items: center; 
    color: $title-footer;  
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

    @include respond-to(xs) {
        justify-content: center;
    }

    &__title {
        font-weight: 700;
        transition: all 0.3s ease;

        &:hover {
            transform: scale(1.1);

            @include respond-to(sm) {
                transform: scale(1);
            }
        }
    }
}
</style>