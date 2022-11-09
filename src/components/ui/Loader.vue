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
        box-shadow: 0em -2.6em 0em 0em #4a9999,
            1.8em -1.8em 0 0em rgba(74, 153, 153, 0.2),
            2.5em 0em 0 0em rgba(74, 153, 153, 0.2),
            1.75em 1.75em 0 0em rgba(74, 153, 153, 0.2),
            0em 2.5em 0 0em rgba(74, 153, 153, 0.2),
            -1.8em 1.8em 0 0em rgba(74, 153, 153, 0.2),
            -2.6em 0em 0 0em rgba(74, 153, 153, 0.5),
            -1.8em -1.8em 0 0em rgba(74, 153, 153, 0.7);
    }
    12.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(74, 153, 153, 0.7),
            1.8em -1.8em 0 0em #4a9999, 2.5em 0em 0 0em rgba(74, 153, 153, 0.2),
            1.75em 1.75em 0 0em rgba(74, 153, 153, 0.2),
            0em 2.5em 0 0em rgba(74, 153, 153, 0.2),
            -1.8em 1.8em 0 0em rgba(74, 153, 153, 0.2),
            -2.6em 0em 0 0em rgba(74, 153, 153, 0.2),
            -1.8em -1.8em 0 0em rgba(74, 153, 153, 0.5);
    }
    25% {
        box-shadow: 0em -2.6em 0em 0em rgba(74, 153, 153, 0.5),
            1.8em -1.8em 0 0em rgba(74, 153, 153, 0.7), 2.5em 0em 0 0em #4a9999,
            1.75em 1.75em 0 0em rgba(74, 153, 153, 0.2),
            0em 2.5em 0 0em rgba(74, 153, 153, 0.2),
            -1.8em 1.8em 0 0em rgba(74, 153, 153, 0.2),
            -2.6em 0em 0 0em rgba(74, 153, 153, 0.2),
            -1.8em -1.8em 0 0em rgba(74, 153, 153, 0.2);
    }
    37.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(74, 153, 153, 0.2),
            1.8em -1.8em 0 0em rgba(74, 153, 153, 0.5),
            2.5em 0em 0 0em rgba(74, 153, 153, 0.7), 1.75em 1.75em 0 0em #4a9999,
            0em 2.5em 0 0em rgba(74, 153, 153, 0.2),
            -1.8em 1.8em 0 0em rgba(74, 153, 153, 0.2),
            -2.6em 0em 0 0em rgba(74, 153, 153, 0.2),
            -1.8em -1.8em 0 0em rgba(74, 153, 153, 0.2);
    }
    50% {
        box-shadow: 0em -2.6em 0em 0em rgba(74, 153, 153, 0.2),
            1.8em -1.8em 0 0em rgba(74, 153, 153, 0.2),
            2.5em 0em 0 0em rgba(74, 153, 153, 0.5),
            1.75em 1.75em 0 0em rgba(74, 153, 153, 0.7), 0em 2.5em 0 0em #4a9999,
            -1.8em 1.8em 0 0em rgba(74, 153, 153, 0.2),
            -2.6em 0em 0 0em rgba(74, 153, 153, 0.2),
            -1.8em -1.8em 0 0em rgba(74, 153, 153, 0.2);
    }
    62.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(74, 153, 153, 0.2),
            1.8em -1.8em 0 0em rgba(74, 153, 153, 0.2),
            2.5em 0em 0 0em rgba(74, 153, 153, 0.2),
            1.75em 1.75em 0 0em rgba(74, 153, 153, 0.5),
            0em 2.5em 0 0em rgba(74, 153, 153, 0.7), -1.8em 1.8em 0 0em #4a9999,
            -2.6em 0em 0 0em rgba(74, 153, 153, 0.2),
            -1.8em -1.8em 0 0em rgba(74, 153, 153, 0.2);
    }
    75% {
        box-shadow: 0em -2.6em 0em 0em rgba(74, 153, 153, 0.2),
            1.8em -1.8em 0 0em rgba(74, 153, 153, 0.2),
            2.5em 0em 0 0em rgba(74, 153, 153, 0.2),
            1.75em 1.75em 0 0em rgba(74, 153, 153, 0.2),
            0em 2.5em 0 0em rgba(74, 153, 153, 0.5),
            -1.8em 1.8em 0 0em rgba(74, 153, 153, 0.7), -2.6em 0em 0 0em #4a9999,
            -1.8em -1.8em 0 0em rgba(74, 153, 153, 0.2);
    }
    87.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(74, 153, 153, 0.2),
            1.8em -1.8em 0 0em rgba(74, 153, 153, 0.2),
            2.5em 0em 0 0em rgba(74, 153, 153, 0.2),
            1.75em 1.75em 0 0em rgba(74, 153, 153, 0.2),
            0em 2.5em 0 0em rgba(74, 153, 153, 0.2),
            -1.8em 1.8em 0 0em rgba(74, 153, 153, 0.5),
            -2.6em 0em 0 0em rgba(74, 153, 153, 0.7),
            -1.8em -1.8em 0 0em #4a9999;
    }
}

@keyframes load5 {
    0%,
    100% {
        box-shadow: 0em -2.6em 0em 0em #4a9999,
            1.8em -1.8em 0 0em rgba(74, 153, 153, 0.2),
            2.5em 0em 0 0em rgba(74, 153, 153, 0.2),
            1.75em 1.75em 0 0em rgba(74, 153, 153, 0.2),
            0em 2.5em 0 0em rgba(74, 153, 153, 0.2),
            -1.8em 1.8em 0 0em rgba(74, 153, 153, 0.2),
            -2.6em 0em 0 0em rgba(74, 153, 153, 0.5),
            -1.8em -1.8em 0 0em rgba(74, 153, 153, 0.7);
    }
    12.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(74, 153, 153, 0.7),
            1.8em -1.8em 0 0em #4a9999, 2.5em 0em 0 0em rgba(74, 153, 153, 0.2),
            1.75em 1.75em 0 0em rgba(74, 153, 153, 0.2),
            0em 2.5em 0 0em rgba(74, 153, 153, 0.2),
            -1.8em 1.8em 0 0em rgba(74, 153, 153, 0.2),
            -2.6em 0em 0 0em rgba(74, 153, 153, 0.2),
            -1.8em -1.8em 0 0em rgba(74, 153, 153, 0.5);
    }
    25% {
        box-shadow: 0em -2.6em 0em 0em rgba(74, 153, 153, 0.5),
            1.8em -1.8em 0 0em rgba(74, 153, 153, 0.7), 2.5em 0em 0 0em #4a9999,
            1.75em 1.75em 0 0em rgba(74, 153, 153, 0.2),
            0em 2.5em 0 0em rgba(74, 153, 153, 0.2),
            -1.8em 1.8em 0 0em rgba(74, 153, 153, 0.2),
            -2.6em 0em 0 0em rgba(74, 153, 153, 0.2),
            -1.8em -1.8em 0 0em rgba(74, 153, 153, 0.2);
    }
    37.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(74, 153, 153, 0.2),
            1.8em -1.8em 0 0em rgba(74, 153, 153, 0.5),
            2.5em 0em 0 0em rgba(74, 153, 153, 0.7), 1.75em 1.75em 0 0em #4a9999,
            0em 2.5em 0 0em rgba(74, 153, 153, 0.2),
            -1.8em 1.8em 0 0em rgba(74, 153, 153, 0.2),
            -2.6em 0em 0 0em rgba(74, 153, 153, 0.2),
            -1.8em -1.8em 0 0em rgba(74, 153, 153, 0.2);
    }
    50% {
        box-shadow: 0em -2.6em 0em 0em rgba(74, 153, 153, 0.2),
            1.8em -1.8em 0 0em rgba(74, 153, 153, 0.2),
            2.5em 0em 0 0em rgba(74, 153, 153, 0.5),
            1.75em 1.75em 0 0em rgba(74, 153, 153, 0.7), 0em 2.5em 0 0em #4a9999,
            -1.8em 1.8em 0 0em rgba(74, 153, 153, 0.2),
            -2.6em 0em 0 0em rgba(74, 153, 153, 0.2),
            -1.8em -1.8em 0 0em rgba(74, 153, 153, 0.2);
    }
    62.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(74, 153, 153, 0.2),
            1.8em -1.8em 0 0em rgba(74, 153, 153, 0.2),
            2.5em 0em 0 0em rgba(74, 153, 153, 0.2),
            1.75em 1.75em 0 0em rgba(74, 153, 153, 0.5),
            0em 2.5em 0 0em rgba(74, 153, 153, 0.7), -1.8em 1.8em 0 0em #4a9999,
            -2.6em 0em 0 0em rgba(74, 153, 153, 0.2),
            -1.8em -1.8em 0 0em rgba(74, 153, 153, 0.2);
    }
    75% {
        box-shadow: 0em -2.6em 0em 0em rgba(74, 153, 153, 0.2),
            1.8em -1.8em 0 0em rgba(74, 153, 153, 0.2),
            2.5em 0em 0 0em rgba(74, 153, 153, 0.2),
            1.75em 1.75em 0 0em rgba(74, 153, 153, 0.2),
            0em 2.5em 0 0em rgba(74, 153, 153, 0.5),
            -1.8em 1.8em 0 0em rgba(74, 153, 153, 0.7), -2.6em 0em 0 0em #4a9999,
            -1.8em -1.8em 0 0em rgba(74, 153, 153, 0.2);
    }
    87.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(74, 153, 153, 0.2),
            1.8em -1.8em 0 0em rgba(74, 153, 153, 0.2),
            2.5em 0em 0 0em rgba(74, 153, 153, 0.2),
            1.75em 1.75em 0 0em rgba(74, 153, 153, 0.2),
            0em 2.5em 0 0em rgba(74, 153, 153, 0.2),
            -1.8em 1.8em 0 0em rgba(74, 153, 153, 0.5),
            -2.6em 0em 0 0em rgba(74, 153, 153, 0.7),
            -1.8em -1.8em 0 0em #4a9999;
    }
}
</style>
