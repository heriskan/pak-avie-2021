var app = new Vue({
  el: '#pbb-stickers',
  data: {

    message: 'Ini adalah kartu ucapan elektronik persembahan dari kami. Silakan klik pada foto untuk aktifkan animasi dan suara.',
    avatars: [
      {
        src: 'tuti',
        play: false
      },
      {
        src: 'sitta',
        play: false
      },
      {
        src: 'hijri',
        play: false
      },
      {
        src: 'irza',
        play: false
      },
      {
        src: 'anna',
        play: false
      },
      {
        src: 'nova',
        play: false
      },
      {
        src: 'ari',
        play: false
      },
      {
        src: 'adiba',
        play: false
      },
      {
        src: 'alfi',
        play: false
      },
      {
        src: 'alifa',
        play: false
      },
      {
        src: 'karina',
        play: false
      },
      {
        src: 'lita',
        play: false
      },
      {
        src: 'dwi',
        play: false
      },
      {
        src: 'handi',
        play: false
      },
      {
        src: 'ima',
        play: false
      },
      {
        src: 'aquita-alitha',
        play: false
      },
      {
        src: 'iin',
        play: false
      },
      {
        src: 'bella-inar',
        play: false
      },
      {
        src: 'herry',
        play: false
      },
    ]
  },
  methods: {
    swap: (event, avatar, index) => {
      var audio = app.$refs['aud-' + index][0];
      audio.volume = 0.6;
      if (avatar.play == false) {
        avatar.play = true
        event.target.src = "img/" + avatar.src + ".gif";
        audio.play();
        setTimeout(
          function () { 
            event.target.src = "img/" + avatar.src + ".png";
            avatar.play = false;
          }, audio.duration * 1000
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