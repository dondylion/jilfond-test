<template>
    <div class="users">
        <Sidebar/>
        <UserInfo/>
    </div>
</template>

<script>
    import Sidebar from '@/components/Sidebar';
    import UserInfo from '@/components/UserInfo';

    export default {
        components: {
            Sidebar, UserInfo
        }
    }
</script>

<style lang="scss" scoped>
    .users {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        height: 75vh;
        display: grid;
        grid-template-columns: 25% 75%;
        border-radius: 10px;
    }
</style>