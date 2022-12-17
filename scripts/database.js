const database = {actors:[
  {
    id:1,
    name:"Brad Pitt"
  },
  {
    id:2,
    name: "Bruce Willis"
  },
  {
    id:3,
    name: "Tom Hanks"
  },
  {
    id:4,
    name: "Emma Stone"
  },
  {
    id:5,
    name: "Mila Kunis"
  },
  {
    id:6,
    name: "Ingrid Bergman"
  }
]



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
export const getActors = () => {
  return database.actors.map(actors => ({...actors}))
}
