var app = new Vue({
    el: "#app",
    data: {
        count: 0,
        message: 'Hello world'
    },
    methods: {
        increment: function () {
            this.count += 1;
        },
        decrement: function () {
            this.count -= 1;
        },
        reset: function () {
            this.count = 0;
        },
    },
});


