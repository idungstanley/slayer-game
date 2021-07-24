const app = Vue.createApp({
    data(){
        return {
            playerHealth: 100,
            monsterHealth: 100
        };
    },
    methods: {

    }
});
app.mount('#game');