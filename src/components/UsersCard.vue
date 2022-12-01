<template>
    <div class="user-card">
        <div class="user-card-image"><UserImage/></div>
        <div class="user-card-info">
            <p class="user-name">{{user.name}}</p>
            <p class="user-email">{{user.email}}</p>
        </div>
    </div>
</template>

<script>
    import UserImage from '@/components/UserImage';

    export default {
        components: {
            UserImage
        },
        props: {
            user: {
                type: Object,
                required: true
            }
        },
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
</style>