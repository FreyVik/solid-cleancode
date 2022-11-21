(() => {

    const celsiusTemperaturesEntries = [33.6, 12.34];

    const serverIp = '123.123.123.123';

    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    const userEmails = users.map( user => user.email );

    const isJumping = false;
    const isRunning = true;
    const isInventoryEmpty = false;
    const isLoading = false;

    const startTime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    const endTime = new Date().getTime() - startTime;

    function getBooks() {
        throw new Error('Function not implemented.');
    }

    function getBooksFromUrl( url: string) {
        console.log("Used url: " + url)
        throw new Error('Function not implemented.');
    }
    
    function calculateSquareArea( side: number ) {
        console.log("Squeare side: " + side)
        throw new Error('Function not implemented.');
    }

    function printJobIfIsActive() {
        throw new Error('Function not implemented.');
    }
    
})();





