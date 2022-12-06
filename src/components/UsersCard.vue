<template>
    <div
        class="user-card"
        v-on:click="setUser(user.id)"
    >
        <div class="user-card-image"><Image1/></div>
        <div
            class="user-card-info"
            v-bind:class="{select: getCurrentUser && getCurrentUser.id === user.id}"
        >
            <p class="user-name">{{user.username}}</p>
            <p class="user-email">{{user.email}}</p>
        </div>
    </div>
</template>

<script>
    import Image1 from '@/components/Images/Image1';
    import {mapActions, mapGetters} from 'vuex';

    export default {
        components: {
            Image1
        },
        props: {
            user: {
                type: Object,
                required: true
            }
        },
        methods: mapActions(["setUser"]),
        computed: mapGetters(["getCurrentUser"]),
    }
</script>

<style lang="scss" scoped>
    .user-card {
        width: 100%;
        background: #FFFFFF;
        display: flex;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        margin-top: 18px;
        height: 70px;
        cursor: pointer;
        &:hover {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        &-image {
            height: 70px;
            width: 70px;
        }
        &-info {
            padding: 15px;
            font-size: 14px;
            width: 100%;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            p {
                margin: 0;
            }
        }
        .user-name {
            color: #333333;
            font-weight: 600;
            margin-bottom: 5px;
        }
        .user-email {
            color: #76787D;
        }
    }
    .select {
        background: #E0E0E0;
    }
</style>