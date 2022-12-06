<template>
    <div class="sidebar">
        <p>Поиск сотрудников</p>

        <input
            type="text"
            placeholder="Введите Id или имя"
            v-bind:value="getText"
            v-on:input="setText"
        />

        <p class="result-label">Результаты</p>

        <div class="loader" v-if="loader"><Loader/></div>

        <span v-else-if="getText.trim().length === 0">
            начните поиск
        </span>

        <span v-else-if="getText.trim().length > 0 && allUsers.length === 0">
            ничего не найдено
        </span>

        <div class="user-list">
            <div
                    v-if="allUsers.length > 0 && !loader"
                    v-for="user in allUsers" :key="user.id"
            >
                <UsersCard
                    v-bind:user="user"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import Loader from '@/components/Loader';
    import UsersCard from "./UsersCard";
    import {mapGetters, mapActions} from 'vuex';

    export default {
        components: {
            UsersCard,
            Loader,
        },
        computed: mapGetters(["allUsers", "getText", "loader"]),
        methods: mapActions(["setText", "setUser"]),
    }
</script>

<style lang="scss" scoped>
    .sidebar {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background: #FDFDFD;
        border-right: 1px solid #DEDEDD;
        /*padding: 27px 30px 0 20px;*/
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
        color: #76787D;
        font-size: 14px;
        p {
            margin: 27px 30px 0 20px;
            font-size: 16px;
            font-weight: 600;
            color: #333333;
        }
        span {
            margin: 10px 20px 0 20px;
        }
        .result-label {
            margin: 7px 37px 0 20px;
        }
        input {
            margin: 22px 30px 22px 20px;
            padding: 14.5px 16px;
            border: 1.5px solid #E9ECEF;
            border-radius: 8px;
        }
        .user-list {
            overflow-y: scroll;
            height: 50vh;
            margin: 0 20px 0 10px;
            padding: 0 10px;
        }
        .loader {
            width: 100%;
            text-align: center;
        }
    }
    ::-webkit-scrollbar {
        width: 0;
    }
</style>