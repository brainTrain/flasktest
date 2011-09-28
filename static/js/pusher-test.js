var pusher = new Pusher('a84f060526adcba703cc');    
    var channel = pusher.subscribe('alert');

    channel.bind('chirp', function(data) {  //listens for 'chirp' events on my channel 'alert'

        alert(data);


    }); 

