var app = new Vue({
    el: '#pbb-stickers',
    data: {

        message: 'selamat ulang tahun',
        avatars: [
            {
                src: 'man1',
                src2: 'woman9',
                aud: 'man1'
            },
            {
                src: 'woman1',
                src2: 'woman9',
                aud: 'man1'
            },
            {
                src: 'woman2',
                src2: 'woman9',
                aud: 'man1'
            },
            {
                src: 'woman3',
                src2: 'woman9',
                aud: 'man1'
            },
            {
                src: 'woman4',
                src2: 'woman9',
                aud: 'man1'
            },
            {
                src: 'woman5',
                src2: 'woman9',
                aud: 'man1'
            }
        ]

    },
    methods: {
        swap: (event, avatar, index) => {
            event.target.src = "img/" + avatar.src2 + ".png";
            var audio = app.$refs['aud-' + index][0];
            audio.play();
            setTimeout(
                function () { event.target.src = "img/" + avatar.src + ".png" }, audio.duration * 1000
            )
        }
    }
})