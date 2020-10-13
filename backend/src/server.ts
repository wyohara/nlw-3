import express from "express";
import {getRepository} from "typeorm";
import Orphanage from "./models/Orphanage";

import "./database/connection";

const app = express();
app.use(express.json());

//rota é o conjunto
//recurso é o objeto que está acessando dentro da rota
// métodos são GET (consulta), POST(criação), PUT(alteração), DELETE (deleção)

//query params: http://localhost:3333/users?search=Diego  -> consultando um nome Diego
//route params: http://localhost:3333/users/1  -> consuulta uma rota específica
//body: http://localhost:3333/users  -> enviando recursos complexos como formularios


app.post('/orphanages', async (req, resp)=>{

  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  } = req.body;


  console.log("AAAAAAAAAAAAAAAA");
  const orphanageRepository = getRepository(Orphanage);
  const orphanage = orphanageRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends
  })

  await orphanageRepository.save(orphanage);

  return resp.json({'message':"hello"});
})

app.listen(3333);
