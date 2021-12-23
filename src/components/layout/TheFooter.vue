<template>
    <div class="footer">
        <h2 class="title">by Sviridov.A.</h2>
    </div>
</template>

<style lang="scss" scoped>
    .footer {
        display: flex;
        max-width: 110rem;
        height: 6.5rem;
        margin: 0 auto;
        padding: 0 10rem;
        justify-content: space-between;
        align-items: center; 
        color: $title-footer;  
        background-color: $white;
        border-radius: 5px;

        @include respond-to(lg) {
            max-width: 100%;
            margin: 0 10rem;
        }
    }
</style>