new Vue({
    el: '#app',
    data () {
        return {
            users: null
        }
    },
    mounted () {
        axios
            .get('http://localhost:8000/api/users')
            .then(response => (this.users = response.data))
    }
});