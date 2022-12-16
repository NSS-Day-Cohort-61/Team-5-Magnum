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

}

export const getActors = () => {
  return database.actors.map(actors => ({...actors}))
}
