(function () {
    function getUsers() {
        axios
            .get('http://localhost:8000/api/users')
            .then((response) => {
                this.users = response.data
            }).catch((error) => {
            alert("Whoops, API not running!")
        })
    }

    new Vue({
        el: '#app',
        data() {
            return {
                users: null,
                email: null,
                password: null,
                name: null
            }
        },
        mounted() {
            getUsers.call(this);
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
                        getUsers(this);
                    })
                    .catch(function (error) {
                        alert("Whoops, student could not be added!")
                    });
            }
        }
    });
})();