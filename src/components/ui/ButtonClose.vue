<template>
    <span class="close"></span>
</template>

<style lang="scss" scoped>
    .close {
        position: absolute;
        z-index: 2;
        top: 0;
        right: 0;
        width: 4rem;
        height: 4rem;
        cursor: pointer;

        &:before,
        &:after {
            content: '';
            position: absolute;    
            height: 2px;
            top: 23px;
            left: 10px;
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