
const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'muestra de video 1',
        'name': 'video1.mp4',
        'duration': '2:47',
    },
    {
        'id': 'a2',
        'title': 'muestra de video 2',
        'name': 'video2.mp4',
        'duration': '2:45',
    },
    {
        'id': 'a3',
        'title': 'muestra de video 3',
        'name': 'video3.mp4',
        'duration': '24:49',
    },

    {
        'id': 'a4',
        'title': 'muestra de video 4',
        'name': 'video4.mp4',
        'duration': '3:59',
    },
    {
        'id': 'a5',
        'title': 'muestra de video 5',
        'name': 'video5.mp4',
        'duration': '4:25',
    }

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});