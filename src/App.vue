<template>
    <div id="app">
        <div class="wrapper">
            <h1 class="title">Simon the game</h1>
            <GameLevels @updateLevel="updateLevel" :playing="playing" />
            <div class="container">
                <div
                    v-for="(color, index) in colors"
                    :key="index"
                    @click="handleColorClick(color)"
                    :class="[
                        'figure',
                        color,
                        {
                            active: activeColor === color,
                        },
                    ]"></div>
                <div class="display">
                    <button
                        class="start-button"
                        @click="gameMode === 'Play' ? startGame() : stopGame()">
                        {{ gameMode }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GameLevels from "@/components/GameLevels.vue";

export default {
    name: "App",
    components: {
        GameLevels,
    },
    data() {
        return {
            gameMode: "Play",
            colors: ["red", "green", "blue", "yellow"],
            canClick: false,
            playing: false,
            order: [],
            checkOrder: [],
            activeColor: null,
            difficulty: "легкий",
            ms: {
                легкий: 1500,
                средний: 1000,
                сложный: 400,
            },
            sounds: {
                green: new Audio(
                    "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"
                ),
                red: new Audio(
                    "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"
                ),
                yellow: new Audio(
                    "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"
                ),
                blue: new Audio(
                    "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
                ),
                end: new Audio(
                    "https://res.cloudinary.com/dzsnl7ocm/video/upload/v1562085132/Computer_Error-SoundBible.com-1655839472.wav"
                ),
            },
        };
    },
    methods: {
        startGame() {
            if (this.gameMode === "Play") {
                this.gameMode = "Stop";
                this.nextLevel();
                this.playing = true;
            }
        },
        getRandomNumber(value) {
            return Math.floor(Math.random() * value);
        },
        getRandomSequence() {
            let color = this.colors[this.getRandomNumber(this.colors.length)];
            this.order.push(color);
            this.checkOrder = [...this.order];
        },
        flash(color, ms) {
            return new Promise((res) => {
                this.activeColor = color;
                this.sounds[color].play();
                setTimeout(() => {
                    this.activeColor = null;
                    setTimeout(() => {
                        res();
                    }, 250);
                }, ms);
            });
        },
        async nextLevel() {
            this.getRandomSequence();
            const ms = this.ms[this.difficulty];

            for (const color of this.order) {
                await this.flash(color, ms);
            }

            this.canClick = true;
        },
        handleColorClick(color) {
            if (!this.canClick) return;
            this.activeColor = color;
            setTimeout(() => {
                this.activeColor = null;
            }, 250);
            let checkColor = this.checkOrder.shift();

            if (checkColor === color) {
                this.sounds[color].play();
                if (this.checkOrder.length === 0) {
                    this.canClick = false;
                    setTimeout(() => {
                        this.nextLevel();
                    }, 2000);
                }
            } else {
                this.stopGame();
                this.sounds["end"].play();
            }
        },
        updateLevel(level) {
            this.difficulty = level;
        },
        stopGame() {
            this.canClick = false;
            this.gameMode = "Play";
            this.order = [];
            this.playing = false;
        },
    },
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
}
html,
body {
    height: 100%;
    width: 100%;
    font-size: 100%;
    line-height: 1;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;
    box-sizing: border-box;
}
#app {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    width: 100%;
    background-color: #ccc;
}
.wrapper {
    display: flex;
    gap: 20px;
    flex-direction: column;
    width: 400px;
    margin: 0 auto;
    & .container {
        position: relative;
        width: 400px;
        height: 400px;
        border-radius: 50%;
        background: #000;

        &::before {
            position: absolute;
            content: " ";
            left: 50%;
            top: 50%;
            border-radius: 85px;
            display: block;
            width: 170px;
            height: 170px;
            background: #000;
            transform: translate(-50%, -50%);
            z-index: 99;
        }
    }
    & .display {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 130px;
        height: 130px;
        border-radius: 50%;
        background-color: #fff;
        z-index: 100;
        & .start-button {
            color: #000;
            font-size: 25px;
            background: none;
            font-weight: 600;
            cursor: pointer;
        }
    }
    & .figure {
        position: absolute;
        width: 180px;
        height: 180px;
        background: rgba(0, 0, 0, 0.7);
        transition: all 0.4s;
        opacity: 0.5;
        cursor: pointer;
        &.active {
            opacity: 1;
        }

        &.red {
            top: 15px;
            left: 15px;
            background-color: #ff0000;
            border-radius: 200px 20px 20px;
        }
        &.green {
            top: 15px;
            right: 15px;
            background-color: #008000;
            border-radius: 20px 200px 20px 20px;
        }
        &.blue {
            bottom: 15px;
            left: 15px;
            background-color: #0000ff;
            border-radius: 20px 20px 20px 200px;
        }
        &.yellow {
            bottom: 15px;
            right: 15px;
            background-color: #ffff00;
            border-radius: 20px 20px 200px 20px;
        }
        &.flash {
            opacity: 1;
        }
    }
}
.title {
    text-align: center;
}
</style>
