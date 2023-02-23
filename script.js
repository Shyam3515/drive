//get all the required elements
const toggle = document.getElementById('toggle');
const mute = document.getElementById('mute');
const locations = document.getElementById('locations');
const speed = document.getElementById('speed');
const audio = document.getElementById('music');
const play = document.getElementById('play');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

var currentCityIndex;
var currentCity;
var currentVideoIndex;
var currentVideo;
var currentAudioIndex;
var currentAudio;

//object inside array
const data = [
    {
        city:'Delhi',
        videos:[
            '_UlKnvXKUWE',
            '4U-cBljmT7g'
        ],
        music:[
            'http://radio.garden/api/ara/content/listen/NtPbfK8h/channel.mp3',
            'https://radio.garden/api/ara/content/listen/H97XCIvF/channel.mp3',
            'http://radiodhaakad.com:8000/live'
        ]
    },
    {
        city:'Mumbai',
        videos:[
            '9YEwTdSiWGA',
            'WyUudk7NI3I'
        ],
        music:[
            'https://radio.garden/api/ara/content/listen/kFB69zxJ/channel.mp3',
            'https://stream.zeno.fm/pg6rqp8ztm0uv',
            'http://radio.garden/api/ara/content/listen/oOcqZME7/channel.mp3'
        ]
    },
    {
        city:'Benguluru',
        videos:[
            'rawlkKKHXeU',
            '8ShP_ogTJrY'
        ],
        music:[
            'https://stream-25.zeno.fm/whka349tsqruv',
            'https://stream.zeno.fm/8tqmb5gwxwzuv',
            'https://stream-25.zeno.fm/whka349tsqruv'
        ]
    }
];
console.log(data[0].videos);
//On Load function
onLoad();
function onLoad(){
  currentCityIndex = randomNumber(data.length)
  currentCity = data[currentCityIndex];
  console.log(currentCity);
  currentVideoIndex = randomNumber(currentCity.videos.length);
  currentVideo = currentCity.videos[currentVideoIndex];
  currentAudioIndex = randomNumber(currentCity.music.length);
  currentAudio = currentCity.music[currentAudioIndex];
  console.log(currentAudio);

  audio.src = currentAudio;
  play.classList.remove('fa-play')
  play.classList.add('fa-pause');
}


function randomNumber(max){
  return Math.floor(Math.random()*max);
}

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: window.innerHeight * 1.2,
    width: window.innerWidth *1.2 * (16/9),
    videoId: 'M7lc1UVf-VE',
    playerVars: {
      'playsinline': 1,
      'controls':0,
      'mute':1,
      'showinfo':0,
      'enablejsapi':1,
      'disablekeb':1,
      'modestbranding':1,
      'origin':window.location.origin,
      'widget_referrer':window.location.href
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}