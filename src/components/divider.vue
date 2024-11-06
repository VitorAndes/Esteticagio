<template>
    <div id="divider">
    </div>
</template>

<style lang="less">
@import "/src/styles/variables.less";

#divider {
    margin: 30px 0px;
    border-bottom: 2px solid @text_primary;

    @media (min-width: 768px) {
        margin: 50px 0px;
    }
}
</style>