var app = new Vue({
    el: '#pbb-stickers',
    data: {

        message: 'Silakan klik pada foto untuk aktifkan animasi dan suara.',
        avatars: [
            {
                src: 'tuti',
                nama: 'Tuti',
                aud: 'man1'
            },
            {
                src: 'sitta',
                nama: 'Sitta',
                aud: 'sitta'
            },
            {
                src: 'hijri',
                nama: 'Hijri',
                aud: 'hijri'
            },
            {
                src: 'anna',
                nama: 'Anna',
                aud: 'anna'
            },
            {
                src: 'nova',
                nama: 'Nova',
                aud: 'man1'
            },
        ]

    },
    methods: {
        swap: (event, avatar, index) => {
            event.target.src = "img/" + avatar.src + ".gif";
            var audio = app.$refs['aud-' + index][0];
            audio.play();
            setTimeout(
                function () { event.target.src = "img/" + avatar.src + ".png" }, audio.duration * 1000
            )
        }
    }
})