function playVideo() {
    // Скрываем постер и показываем видео
    document.querySelector('.video-poster').style.display = 'none';
    const videoContainer = document.querySelector('.video-container');
    videoContainer.style.display = 'block';

    // Запускаем воспроизведение YouTube видео
    const youtubeVideo = document.getElementById('youtubeVideo');
    youtubeVideo.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
}
