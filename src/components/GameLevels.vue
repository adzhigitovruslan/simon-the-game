<template>
    <div class="radio-buttons">
        <h2>Уровень:</h2>
        <label :class="['radio-button', { disable: playing }]">
            <input
                type="radio"
                name="option"
                value="легкий"
                :disabled="playing"
                checked
                @change="setLevel" />
            <div :class="['radio-circle', { disable: playing }]"></div>
            <span class="radio-label">легкий</span>
        </label>
        <label :class="['radio-button', { disable: playing }]">
            <input
                type="radio"
                name="option"
                value="средний"
                :disabled="playing"
                @change="setLevel" />
            <div :class="['radio-circle', { disable: playing }]"></div>
            <span class="radio-label">средний</span>
        </label>
        <label :class="['radio-button', { disable: playing }]">
            <input
                type="radio"
                name="option"
                value="сложный"
                :disabled="playing"
                @change="setLevel" />
            <div :class="['radio-circle', { disable: playing }]"></div>
            <span class="radio-label">сложный</span>
        </label>
    </div>
</template>

<script>
export default {
    props: {
        playing: {
            type: Boolean,
        },
    },
    methods: {
        setLevel(e) {
            this.$emit("updateLevel", e.target.value);
        },
    },
};
</script>

<style lang="scss" scoped>
h2 {
    width: 150px;
}
.radio-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
}

.radio-button {
    display: flex;
    align-items: center;
    width: 150px;
    transition: 0.2s;
    cursor: pointer;
    &.disable {
        cursor: no-drop;
        opacity: 0.5;
    }
    & input[type="radio"] {
        display: none;
    }
    & input[type="radio"]:checked + .radio-circle::before {
        transform: translate(-50%, -50%) scale(1);
    }
    &:nth-of-type(1) input[type="radio"]:checked + .radio-circle::before {
        background-color: #ff6600;
    }
    &:nth-of-type(2) input[type="radio"]:checked + .radio-circle::before {
        background-color: #0000ff;
    }
    &:nth-of-type(3) input[type="radio"]:checked + .radio-circle::before {
        background-color: #26be00;
    }
    &:not(.disable):hover .radio-circle {
        border-color: #555;
    }
    &:not(.disable):hover input[type="radio"]:checked + .radio-circle::before {
        background-color: #555;
    }
}

.radio-circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #aaa;
    position: relative;
    margin-right: 10px;
    &::before {
        content: "";
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #ddd;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: all 0.2s ease-in-out;
    }
}

.radio-label {
    font-size: 20px;
    font-weight: bold;
}
</style>
