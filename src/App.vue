<script>
import AppHeader from './components/AppHeader.vue';
export default {
    components: {
        AppHeader
    }
}
</script>

<template>
    <main>
        <router-view></router-view>
    </main>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
