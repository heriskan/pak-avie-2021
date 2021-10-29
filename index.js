var app = new Vue({
    el: '#pbb-stickers',
    data: {

        message: 'selamat ulang tahun',
        avatars: [
            {
                src: 'tuti',
                nama: 'Tuti Lestari',
                aud: 'man1'
            },
            {
                src: 'tuti',
                nama: 'nama',
                aud: 'man1'
            },
            {
                src: 'tuti',
                nama: 'nama',
                aud: 'man1'
            },
            {
                src: 'tuti',
                nama: 'nama',
                aud: 'man1'
            },
            {
                src: 'tuti',
                nama: 'nama',
                aud: 'man1'
            },
            {
                src: 'tuti',
                nama: 'nama',
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