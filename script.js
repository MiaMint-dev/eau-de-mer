
const button1 = document.getElementById('preset-1');
const button2 = document.getElementById('preset-2');
const radioText = document.getElementById('now-playing');

if (button1) {
    const track1 = new Audio('preset-1.mp3');
    track1.loop = true;

    button1.addEventListener('click', () => {
        if (track1.paused) {
            track1.play();
            radioText.textContent = "Now Playing - The ocean is outside your window, enjoy";
        } else {
            track1.pause();
            radioText.textContent = "Welcome To Eau De Mer FM * Tune into your preferred preset";
    }
    });
}
if (button2) {
    const track2 = new Audio('preset-1.mp3');
    track2.loop = true;

    button2.addEventListerner('click', () => {
        if (track2.paused) {
            track2.play();
            radioText.textContent = "Now Playing - Avalon's last walk in the island"
        } else {
            track2.pause();
            radioText.textContent = "Welcome To Eau De Mer FM * Tune into your preferred preset";
    }
});
}