var resourcesSection = new Vue({
    el: '#resourcesSection',
    data: {
        active1: false,
        active2: false,
        active3: false,
        active4: false,
        active5: false,
        active6: false
    },
    methods: {
        mouseOver1: function () {
            this.active1 = true;
        },
        mouseLeave1: function () {
            this.active1 = false;
        },
        mouseOver2: function () {
            this.active2 = true;
        },
        mouseLeave2: function () {
            this.active2 = false;
        },
        mouseOver3: function () {
            this.active3 = true;
        },
        mouseLeave3: function () {
            this.active3 = false;
        },
        mouseOver4: function () {
            this.active4 = true;
        },
        mouseLeave4: function () {
            this.active4 = false;
        },
        mouseOver5: function () {
            this.active5 = true;
        },
        mouseLeave5: function () {
            this.active5 = false;
        },
        mouseOver6: function () {
            this.active6 = true;
        },
        mouseLeave6: function () {
            this.active6 = false;
        },
    }
});