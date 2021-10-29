var app = new Vue({
    el: '#pbb-stickers',
    data: {

        message: 'selamat ulang tahun',
        avatars: [
            {
                src: 'tuti',
                aud: 'man1'
            },
            {
                src: 'woman1',
                aud: 'man1'
            },
            {
                src: 'woman2',
                aud: 'man1'
            },
            {
                src: 'woman3',
                aud: 'man1'
            },
            {
                src: 'woman4',
                aud: 'man1'
            },
            {
                src: 'woman5',
                aud: 'man1'
            }
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