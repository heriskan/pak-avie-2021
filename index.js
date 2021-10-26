const PbbStickers = {
    data() {
        return {
            message: 'Okee nih!',
            avatars: [
                {
                    src: 'man1',
                    click: 'woman9'
                },
                {
                    src: 'woman1',
                    click: 'woman9'
                },
                {
                    src: 'woman2',
                    click: 'woman9'
                },
                {
                    src: 'woman3',
                    click: 'woman9'
                },
                {
                    src: 'woman4',
                    click: 'woman9'
                },
                {
                    src: 'woman5',
                    click: 'woman9'
                }
            ]
        }
    }
}

Vue.createApp(PbbStickers).mount('#pbb-stickers')