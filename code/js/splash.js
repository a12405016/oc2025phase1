document.addEventListener('DOMContentLoaded', function () {
    const splash = document.getElementById('splash');
    const splashVideo = document.getElementById('splashVideo');
    const wrapper = document.getElementById('Wrapper');

    const transitionToMain = () => {
        splash.classList.add('fade-out');
        wrapper.style.display = 'block';
        wrapper.classList.add('show');
    };

    // 動画が終了したら遷移
    splashVideo.addEventListener('ended', transitionToMain);

    // 再生が始まったら記録
    let hasStartedPlaying = false;
    splashVideo.addEventListener('playing', () => {
        hasStartedPlaying = true;
    });

    // 2秒経っても再生されていなければ強制遷移
    setTimeout(() => {
        if (!hasStartedPlaying) {
            transitionToMain();
        }
    }, 3000);
});
