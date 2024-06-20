document.addEventListener("DOMContentLoaded", () => {
    let albumi = `[
        {
            "id": "0",
            "song": "./songs/Dwayne Johnson - You're Welcome (Lyrics).mp3",
            "photo": "https://lumiere-a.akamaihd.net/v1/images/au_character_moana_maui_0d62211a.jpeg?region=0,0,600,600"
        },
        {
            "id": "1",
            "song": "./songs/Moana.mp3",
            "photo": "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/12/1490086765-moana.jpg?crop=0.463xw:1.00xh;0.176xw,0&resize=1200:*"
        },
        {
            "id": "2",
            "song": "./songs/Once upon a december lyrics.mp3",
            "photo": "https://i.pinimg.com/originals/fb/40/6d/fb406dfb1db5e639e56518cccd64e7c7.jpg"
        },
        {
            "id": "3",
            "song": "./songs/Immortals.mp3",
            "photo": "https://images6.fanpop.com/image/photos/37400000/Hiro-icon-big-hero-6-37406520-200-200.png"
        }
    ]`;

    let divat = document.getElementsByClassName('bot');

    let IMG = document.getElementById('sole');
    let MyAudio = document.getElementById('myAudio');

    let idea = JSON.parse(albumi);

    function checkSong(event) {
        let targetId = event.target.id;
        let kenga = idea.find(song => song.id === targetId);
        if (kenga) {
            IMG.src = kenga.photo;
            MyAudio.src = kenga.song;
        } else {
            alert("Ja ke huq dikun");
        }
    }

    // Attach the click event listener to each .bot element
    for (let i = 0; i < divat.length; i++) {
        divat[i].addEventListener('click', checkSong);
    }
});
