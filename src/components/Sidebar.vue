<template>
    <div class="sidebar">
        <p>Поиск сотрудников</p>
        <input
            type="text"
            placeholder="Введите Id или имя"
            v-model="text"
            v-on:change="logName"
        />
        <p>Результаты</p>
        <Loader v-if="loading"/>
        <span v-if="!loading && text.trim().length === 0">
            начните поиск
        </span>
        <span v-if="!loading && users.length === 0">
            ничего не найдено
        </span>
        <div
            v-if="users.length > 0"
            class="user-list"
            v-for="user in users" :key="user.id"
        >
            <UsersCard v-bind:user="user"/>
        </div>
    </div>
</template>

<script>
    import Loader from '@/components/Loader';
    import UserImage from '@/components/UserImage'
    import UsersCard from "./UsersCard";

    export default {
        components: {
            UsersCard,
            Loader,
            UserImage
        },
        data() {
            return {
                text: '',
                users: [],
                loading: false
            }
        },
        mounted() {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => this.users = json)
        },
        methods: {
            logName(e) {
                console.log(e.target.value)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sidebar {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background: #FDFDFD;
        border-right: 1px solid #DEDEDD;
        padding: 27px 30px 0 20px;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
        color: #76787D;
        font-size: 14px;
        p {
            margin: 0;
            font-size: 16px;
            font-weight: 600;
            color: #333333;
        }
        input {
            margin: 22px 0;
            padding: 14.5px 16px;
            border: 1.5px solid #E9ECEF;
            border-radius: 8px;
        }
        .user-list {

        }
    }
</style>