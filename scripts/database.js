const database = {



  shows: [
    { id: 1, name: "It's Always Sunny In Philadelphia", actorId: 5, genre: "Comedy" },
    { id: 2, name: "The Expanse", actorId: 2, genre: "syfi" },
    { id: 3, name: "Leopard Skin", actorId: 6, genre: "thriller" },
    { id: 4, name: "See", actorId: 3, genre: "drama" },
    { id: 5, name: "1883", actorId: 4, genre: "drama" },
    { id: 6, name: "The Foundation", actorId: 1, genre: "syfi" }


  ]
}

export const getShows = () {
  return database.shows.map(show => ({ ...show }))
}
