<template>
    <div class="loader"></div>
</template>

<style lang="scss" scoped>
.loader {
    position: relative;
    margin: 0 auto;
    margin-top: 20%;
    font-size: 2rem;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    animation: load5 1.1s infinite ease;
    transform: translateZ(0);

    @include respond-to(md) {
        margin-top: 20%;
    }

    @include respond-to(sm) {
        margin-top: 50%;
        margin-bottom: 54.5%;
    }
}

@keyframes load5 {
    0%,
    100% {
        box-shadow: 0 -2.6em 0 0 #4a9999, 1.8em -1.8em 0 0 rgb(74 153 153 / 20%),
            2.5em 0 0 0 rgb(74 153 153 / 20%),
            1.75em 1.75em 0 0 rgb(74 153 153 / 20%),
            0 2.5em 0 0 rgb(74 153 153 / 20%),
            -1.8em 1.8em 0 0 rgb(74 153 153 / 20%),
            -2.6em 0 0 0 rgb(74 153 153 / 50%),
            -1.8em -1.8em 0 0 rgb(74 153 153 / 70%);
    }

    12.5% {
        box-shadow: 0 -2.6em 0 0 rgb(74 153 153 / 70%), 1.8em -1.8em 0 0 #4a9999,
            2.5em 0 0 0 rgb(74 153 153 / 20%),
            1.75em 1.75em 0 0 rgb(74 153 153 / 20%),
            0 2.5em 0 0 rgb(74 153 153 / 20%),
            -1.8em 1.8em 0 0 rgb(74 153 153 / 20%),
            -2.6em 0 0 0 rgb(74 153 153 / 20%),
            -1.8em -1.8em 0 0 rgb(74 153 153 / 50%);
    }

    25% {
        box-shadow: 0 -2.6em 0 0 rgb(74 153 153 / 50%),
            1.8em -1.8em 0 0 rgb(74 153 153 / 70%), 2.5em 0 0 0 #4a9999,
            1.75em 1.75em 0 0 rgb(74 153 153 / 20%),
            0 2.5em 0 0 rgb(74 153 153 / 20%),
            -1.8em 1.8em 0 0 rgb(74 153 153 / 20%),
            -2.6em 0 0 0 rgb(74 153 153 / 20%),
            -1.8em -1.8em 0 0 rgb(74 153 153 / 20%);
    }

    37.5% {
        box-shadow: 0 -2.6em 0 0 rgb(74 153 153 / 20%),
            1.8em -1.8em 0 0 rgb(74 153 153 / 50%),
            2.5em 0 0 0 rgb(74 153 153 / 70%), 1.75em 1.75em 0 0 #4a9999,
            0 2.5em 0 0 rgb(74 153 153 / 20%),
            -1.8em 1.8em 0 0 rgb(74 153 153 / 20%),
            -2.6em 0 0 0 rgb(74 153 153 / 20%),
            -1.8em -1.8em 0 0 rgb(74 153 153 / 20%);
    }

    50% {
        box-shadow: 0 -2.6em 0 0 rgb(74 153 153 / 20%),
            1.8em -1.8em 0 0 rgb(74 153 153 / 20%),
            2.5em 0 0 0 rgb(74 153 153 / 50%),
            1.75em 1.75em 0 0 rgb(74 153 153 / 70%), 0 2.5em 0 0 #4a9999,
            -1.8em 1.8em 0 0 rgb(74 153 153 / 20%),
            -2.6em 0 0 0 rgb(74 153 153 / 20%),
            -1.8em -1.8em 0 0 rgb(74 153 153 / 20%);
    }

    62.5% {
        box-shadow: 0 -2.6em 0 0 rgb(74 153 153 / 20%),
            1.8em -1.8em 0 0 rgb(74 153 153 / 20%),
            2.5em 0 0 0 rgb(74 153 153 / 20%),
            1.75em 1.75em 0 0 rgb(74 153 153 / 50%),
            0 2.5em 0 0 rgb(74 153 153 / 70%), -1.8em 1.8em 0 0 #4a9999,
            -2.6em 0 0 0 rgb(74 153 153 / 20%),
            -1.8em -1.8em 0 0 rgb(74 153 153 / 20%);
    }

    75% {
        box-shadow: 0 -2.6em 0 0 rgb(74 153 153 / 20%),
            1.8em -1.8em 0 0 rgb(74 153 153 / 20%),
            2.5em 0 0 0 rgb(74 153 153 / 20%),
            1.75em 1.75em 0 0 rgb(74 153 153 / 20%),
            0 2.5em 0 0 rgb(74 153 153 / 50%),
            -1.8em 1.8em 0 0 rgb(74 153 153 / 70%), -2.6em 0 0 0 #4a9999,
            -1.8em -1.8em 0 0 rgb(74 153 153 / 20%);
    }

    87.5% {
        box-shadow: 0 -2.6em 0 0 rgb(74 153 153 / 20%),
            1.8em -1.8em 0 0 rgb(74 153 153 / 20%),
            2.5em 0 0 0 rgb(74 153 153 / 20%),
            1.75em 1.75em 0 0 rgb(74 153 153 / 20%),
            0 2.5em 0 0 rgb(74 153 153 / 20%),
            -1.8em 1.8em 0 0 rgb(74 153 153 / 50%),
            -2.6em 0 0 0 rgb(74 153 153 / 70%), -1.8em -1.8em 0 0 #4a9999;
    }
}

@keyframes load5 {
    0%,
    100% {
        box-shadow: 0 -2.6em 0 0 #4a9999, 1.8em -1.8em 0 0 rgb(74 153 153 / 20%),
            2.5em 0 0 0 rgb(74 153 153 / 20%),
            1.75em 1.75em 0 0 rgb(74 153 153 / 20%),
            0 2.5em 0 0 rgb(74 153 153 / 20%),
            -1.8em 1.8em 0 0 rgb(74 153 153 / 20%),
            -2.6em 0 0 0 rgb(74 153 153 / 50%),
            -1.8em -1.8em 0 0 rgb(74 153 153 / 70%);
    }

    12.5% {
        box-shadow: 0 -2.6em 0 0 rgb(74 153 153 / 70%), 1.8em -1.8em 0 0 #4a9999,
            2.5em 0 0 0 rgb(74 153 153 / 20%),
            1.75em 1.75em 0 0 rgb(74 153 153 / 20%),
            0 2.5em 0 0 rgb(74 153 153 / 20%),
            -1.8em 1.8em 0 0 rgb(74 153 153 / 20%),
            -2.6em 0 0 0 rgb(74 153 153 / 20%),
            -1.8em -1.8em 0 0 rgb(74 153 153 / 50%);
    }

    25% {
        box-shadow: 0 -2.6em 0 0 rgb(74 153 153 / 50%),
            1.8em -1.8em 0 0 rgb(74 153 153 / 70%), 2.5em 0 0 0 #4a9999,
            1.75em 1.75em 0 0 rgb(74 153 153 / 20%),
            0 2.5em 0 0 rgb(74 153 153 / 20%),
            -1.8em 1.8em 0 0 rgb(74 153 153 / 20%),
            -2.6em 0 0 0 rgb(74 153 153 / 20%),
            -1.8em -1.8em 0 0 rgb(74 153 153 / 20%);
    }

    37.5% {
        box-shadow: 0 -2.6em 0 0 rgb(74 153 153 / 20%),
            1.8em -1.8em 0 0 rgb(74 153 153 / 50%),
            2.5em 0 0 0 rgb(74 153 153 / 70%), 1.75em 1.75em 0 0 #4a9999,
            0 2.5em 0 0 rgb(74 153 153 / 20%),
            -1.8em 1.8em 0 0 rgb(74 153 153 / 20%),
            -2.6em 0 0 0 rgb(74 153 153 / 20%),
            -1.8em -1.8em 0 0 rgb(74 153 153 / 20%);
    }

    50% {
        box-shadow: 0 -2.6em 0 0 rgb(74 153 153 / 20%),
            1.8em -1.8em 0 0 rgb(74 153 153 / 20%),
            2.5em 0 0 0 rgb(74 153 153 / 50%),
            1.75em 1.75em 0 0 rgb(74 153 153 / 70%), 0 2.5em 0 0 #4a9999,
            -1.8em 1.8em 0 0 rgb(74 153 153 / 20%),
            -2.6em 0 0 0 rgb(74 153 153 / 20%),
            -1.8em -1.8em 0 0 rgb(74 153 153 / 20%);
    }

    62.5% {
        box-shadow: 0 -2.6em 0 0 rgb(74 153 153 / 20%),
            1.8em -1.8em 0 0 rgb(74 153 153 / 20%),
            2.5em 0 0 0 rgb(74 153 153 / 20%),
            1.75em 1.75em 0 0 rgb(74 153 153 / 50%),
            0 2.5em 0 0 rgb(74 153 153 / 70%), -1.8em 1.8em 0 0 #4a9999,
            -2.6em 0 0 0 rgb(74 153 153 / 20%),
            -1.8em -1.8em 0 0 rgb(74 153 153 / 20%);
    }

    75% {
        box-shadow: 0 -2.6em 0 0 rgb(74 153 153 / 20%),
            1.8em -1.8em 0 0 rgb(74 153 153 / 20%),
            2.5em 0 0 0 rgb(74 153 153 / 20%),
            1.75em 1.75em 0 0 rgb(74 153 153 / 20%),
            0 2.5em 0 0 rgb(74 153 153 / 50%),
            -1.8em 1.8em 0 0 rgb(74 153 153 / 70%), -2.6em 0 0 0 #4a9999,
            -1.8em -1.8em 0 0 rgb(74 153 153 / 20%);
    }

    87.5% {
        box-shadow: 0 -2.6em 0 0 rgb(74 153 153 / 20%),
            1.8em -1.8em 0 0 rgb(74 153 153 / 20%),
            2.5em 0 0 0 rgb(74 153 153 / 20%),
            1.75em 1.75em 0 0 rgb(74 153 153 / 20%),
            0 2.5em 0 0 rgb(74 153 153 / 20%),
            -1.8em 1.8em 0 0 rgb(74 153 153 / 50%),
            -2.6em 0 0 0 rgb(74 153 153 / 70%), -1.8em -1.8em 0 0 #4a9999;
    }
}
</style>
