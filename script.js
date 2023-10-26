document.getElementById('formulaire').addEventListener('submit', function(event) {
    event.preventDefault();
    const message = document.getElementById('message').value;
    socket.send(message);
    document.getElementById('message').value = '';
   });
   