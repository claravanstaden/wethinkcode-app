new Vue({
    el: '#app',
    data () {
        return {
            users: null,
            email: null,
            password: null,
            name: null
        }
    },
    mounted () {
        axios
            .get('http://localhost:8000/api/users')
            .then((response) => {
                this.users = response.data
            }).catch((error) => {
                alert("Whoops, API not running!")
        })
    },
    methods: {
        createUser(e) {
            e.preventDefault();
            let currentObj = this;
            axios.post('http://localhost:8000/api/users', {
                name: currentObj.name,
                email: currentObj.email,
                password: currentObj.password
            })
                .then(function (response) {
                    currentObj.name = null;
                    currentObj.email = null;
                    currentObj.password = null;
                    axios
                        .get('http://localhost:8000/api/users')
                        .then((response) => {
                            currentObj.users = response.data
                        }).catch((error) => {
                        alert("Whoops, API not running!")
                    })
                })
                .catch(function (error) {
                    alert("Whoops, student could not be added!")
                });
        }
    }
});