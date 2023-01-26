function readAll() {
    console.log('read');
    const messages = Array.from(
        document.getElementsByClassName('unread')
    );

    messages.forEach(message => {
        message.className = "message read"
    });

    const count = document.getElementById('count');
    count.innerHTML = "0";
    count.className = "zero-mess";
}