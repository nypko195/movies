<template>
    <span class="close"></span>
</template>

<style lang="scss" scoped>
    .close {
        position: absolute;
        z-index: 2;
        top: 0;
        right: 0;
        width: 5rem;
        height: 5rem;
        cursor: pointer;
        background-color: $green;
        border-radius: 50%;

        &:before,
        &:after {
            content: '';
            position: absolute;    
            height: 3px;
            top: 23px;
            left: 10px;
            width: 3rem;
            background-color: $white;
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