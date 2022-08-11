function showList() {
    const musicList = document.getElementById("musicList");
    if (musicList.style.display === "block") {
        musicList.style.display = "none";
    } else {
        musicList.style.display = "block";
    }
}