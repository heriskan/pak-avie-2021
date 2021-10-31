var app = new Vue({
  el: '#pbb-stickers',
  data: {

    message: 'Silakan klik pada foto untuk aktifkan animasi dan suara.',
    avatars: [
      {
        src: 'tuti',
        nama: 'Tuti',
        aud: 'man1',
        play: false
      },
      {
        src: 'sitta',
        nama: 'Sitta',
        aud: 'sitta',
        play: false
      },
      {
        src: 'hijri',
        nama: 'Hijri',
        aud: 'hijri',
        play: false
      },
      {
        src: 'anna',
        nama: 'Anna',
        aud: 'anna',
        play: false
      },
      {
        src: 'nova',
        nama: 'Nova',
        aud: 'man1',
        play: false
      },
      {
        src: 'ari',
        nama: 'Ari',
        aud: 'ari',
        play: false
      },
      {
        src: 'adiba',
        nama: 'Adiba',
        aud: 'adiba',
        play: false
      },
      {
        src: 'alfi',
        nama: 'Alfi',
        aud: 'alfi',
        play: false
      },
      {
        src: 'alifa',
        nama: 'Alifa',
        aud: 'alifa',
        play: false
      },
    ]

  },
  methods: {
    swap: (event, avatar, index) => {
      var audio = app.$refs['aud-' + index][0];
      audio.volume = 0.4;
      if (avatar.play == false) {
        avatar.play = true
        event.target.src = "img/" + avatar.src + ".gif";
        audio.play();
        setTimeout(
          function () { event.target.src = "img/" + avatar.src + ".png" }, audio.duration * 1000
        )
      } else {
        event.target.src = "img/" + avatar.src + ".png";
        audio.pause();
        audio.currentTime = 0;
        avatar.play = false;
      }
    }
  }
})