let movies = [
    {
        title: 'Spirited Away',
        rating: 5,
        hasWatched: true
    },
    {
        title: 'Up',
        rating: 4.5,
        hasWatched: false
    },
    {
        title: 'The Incredibles',
        rating: 4.5,
        hasWatched: true
    },
    {
        title: 'The Joker',
        rating: 4,
        hasWatched: false
    }
];

movies.forEach(movie => {
    if (movie.hasWatched === true) {
        console.log(`You have watched "${movie.title}" - ${movie.rating} stars`);
    } else {
            console.log(`You have not watched "${movie.title}" - ${movie.rating} stars`);
        }
})

