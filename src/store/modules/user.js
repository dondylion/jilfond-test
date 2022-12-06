import _ from 'lodash';
import Vue from 'vue';

const debounced = _.debounce((users, ctx) => {
    let url = 'https://jsonplaceholder.typicode.com/users?';
    users = users.split(',');
    users.map((item, index) => {
        if (item.length > 0) {
            url = !!Number(item.trim()) ?
                `${url}id=${Number(item.trim())}` :
                `${url}username=${item.trim()}`;
        }
        if (index + 1 !== users.length) url = url + '&';
    })
    fetch(url)
        .then(response => response.json())
        .then((json) => {
            ctx.commit('updateUsers', json);
            ctx.commit('updateLoader', false);
        })
        .catch((error) => {
            console.dir(error)
            Vue.notify({
                group: 'foo',
                title: 'Что-то пошло не так',
                text: 'Попробуйте ввести другой запрос',
                type: 'error',
            })
            ctx.commit('updateLoader', false)
        });
}, 300);

export default {
    state: {
        users: [],
        currentText: '',
        currentUser: null,
        loading: false,
    },
    actions: {
        setText(ctx, e) {
            let text = e.target.value.trim();
            if (text.length > 0) {
                ctx.commit('updateLoader', true);
                ctx.commit('updateText', text);
                debounced(text, ctx);
            }
        },
        setUser(ctx, id) {
            if (ctx.state.currentUser && ctx.state.currentUser.id === id) {
                ctx.commit('updateCurrentUser', null);
            } else {
                const current = ctx.state.users.find(user => user.id === id);
                ctx.commit("updateCurrentUser", current);
            }
        }
    },
    mutations: {
        updateUsers(state, users) {
            if(!_.find(users, state.currentUser)) state.currentUser = null;
            state.users = users;
        },
        updateText(state, text) {
            state.currentText = text;
        },
        updateLoader(state, value) {
            state.loading = value;
        },
        updateCurrentUser(state, value) {
            state.currentUser = value;
        }
    },
    getters: {
        allUsers(state) {
            return state.users;
        },
        getText(state) {
            return state.currentText;
        },
        loader(state) {
            return state.loading;
        },
        getCurrentUser(state) {
            return state.currentUser;
        },
    },
}