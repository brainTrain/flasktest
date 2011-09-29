var pusher = new Pusher('0b75eb1a823194806706');    
    var channel = pusher.subscribe('blah');

    channel.bind('click', function(data) {  //listens for 'chirp' events on my channel 'alert'

        alert(data);


    }); 

