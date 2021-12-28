<template>
    <span class="close"></span>
</template>

<script>
export default {
    name: 'Close',
}
</script>

<style lang="scss" scoped>
    .close {
        position: absolute;
        z-index: 2;
        top: 50%;
        right: 0;
        width: 4rem;
        height: 4rem;
        cursor: pointer;

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