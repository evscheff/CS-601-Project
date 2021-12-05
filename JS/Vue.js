const { VueperSlides, VueperSlide } = vueperslides

new Vue({
    components: { VueperSlides, VueperSlide },
    el: '#app'
})

data: () => ({
    slides: [
        {
            title: 'Slide #1',
            content: 'Slide content.'
        }
    ]
})