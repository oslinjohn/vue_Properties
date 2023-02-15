<template>
    <div>
        <form @submit.prevent="login">
            <input type="text" v-model="email" placeholder="email" />
            <input type="text" v-model="password" placeholder="password" />
            <button type="submit">Login</button>
        </form>
        <div v-if="user">Welcome {{ user.full_name }}</div>
    </div>
</template>
<script>
export default {
    computed: {
        user() {
            return this.$store.state.user;
        },
    },
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        login() {
            this.$store.dispatch("login", {
                email: this.email,
                password: this.password,
            });
        },
    },
};
</script>
<style>

</style>
