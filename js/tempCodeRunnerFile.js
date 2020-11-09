let id = setTimeout(function log() {
        console.log('Hello');
        let id = setTimeout(log, 1000);
    }, 1000);