const style = `#buttonDuplex a button:hover {
    cursor: pointer;
}`;

const styleSheet = document.createElement("style");
styleSheet.innerText = style;
document.head.appendChild(styleSheet);

var emailLink = document.getElementById('mailtoLink');
emailLink.href = "javascript:decryptEmail('bWVAY2FtYXJnb3UuZGV2')"

function decryptEmail(encoded) {

    const address = atob(encoded);

    window.location.href = `mailto:${address}`;

}


var pgpLink = document.getElementById('pgpLink');
pgpLink.href = "javascript:getKey('bWVAY2FtYXJnb3UuZGV2')"
function getKey(encoded) {

    const address = atob(encoded);

    window.location.href = `https://keys.openpgp.org/search?q=${address}`;

}