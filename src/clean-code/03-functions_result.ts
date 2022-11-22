(() => {

    function getMovieInfoById( movieId: string ) : string{
        console.log({ movieId });
        return movieId
    }

    function getActorsInfoByMovieId( movieId: string ) {
        console.log(getMovieInfoById(movieId));
    }

    function getActorBio( ActorId: string ) {
        console.log({ ActorId });
    }
    
    interface MovieInfo {
        cast: string[];
        description: string;
        rating: number;
        title: string;
    }

    function createMovie({title, description, rating, cast} : MovieInfo) {
        console.log({ title, description, rating, cast });
    }

    function createActor( fullName: string ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }
    
})();