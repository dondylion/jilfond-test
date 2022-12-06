<template>
    <div class="user" v-bind:class="{grey: getCurrentUser}">
        <div v-if="!getCurrentUser" class="not-selected">
            Выберите сотрудника, чтобы посмотреть его профиль
        </div>

        <div v-else class="selected">
            <div class="user-image">
                <Image2/>
            </div>
            <div class="user-info">
                <div class="user-name">
                    {{getCurrentUser.name}}
                </div>
                <div class="user-email">
                    <span class="label">email:</span>
                    {{getCurrentUser.email}}
                </div>
                <div class="user-phone">
                    <span class="label">phone:</span>
                    {{getCurrentUser.phone}}
                </div>
                <div class="user-about">
                    <p>О себе:</p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Image2 from '@/components/Images/Image2';
    import {mapGetters} from 'vuex';

    export default {
        components: {
            Image2
        },
        computed: mapGetters(["getCurrentUser"]),
    }
</script>

<style lang="scss" scoped>
    .grey {
        background: #FDFDFD;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .user {
        text-align: center;
        font-size: 14px;
        color: #76787D;
        .not-selected {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .selected {
            margin: 30px 30px 30px 22px;
            width: 95%;
            display: flex;
            justify-content: flex-start;
            text-align: start;
        }
        &-image {
            width: 424px;
            margin-right: 60px;
        }
        &-name {
            font-size: 16px;
            font-weight: 600;
            color: #000000;
            margin-bottom: 10px;
        }
        &-email {
            margin-bottom: 10px;
        }
        &-phone {
            margin-bottom: 20px;
        }
        &-about {
            width: 439px;
            p {
                font-size: 16px;
                font-weight: 600;
                margin: 0 0 25px 0;
                color: #000000;
            }
        }
    }
    .label {
        color: #000000;
        font-weight: 600;
        margin-right: 5px;
    }
</style>