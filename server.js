// import 'dotenv/config'
// import path  from 'path';
// import express from 'express';
// import articleRoutes from './my-react-app/routes/articleRoutes.js';
// import headlineRoutes  from './my-react-app/routes/headlineRoutes.js';
// import authRoutes from './my-react-app/routes/authRoutes.js';
// import worldRoutes from './my-react-app/routes/worldRoutes.js';
// import cors from 'cors';
// import mongoose from 'mongoose';
const express = require('express')
const path = require ('path')
const mongoose = require ('mongoose')
const cors = require ('cors')
const dotenv=require('dotenv')
dotenv.config()

const articleRoutes = require('./my-react-app/routes/articleRoutes.js')
const headlineRoutes = require ('./my-react-app/routes/headlineRoutes.js')
const worldRoutes = require ('./my-react-app/routes/worldRoutes.js')
const authRoutes = require ('./my-react-app/routes/authRoutes.js')


const server = express();
const PORT = 8080;

server.use(cors())
server.use(express.urlencoded({extend: true}))
server.use(express.json());

main().catch(err=> console.log(err));

async function main(){

    await mongoose.connect('mongodb+srv://suleimanhodan9:VAXyKAHBU2HjaeDx@cluster0.n0x2sha.mongodb.net/?retryWrites=true&w=majority')
}



//server.use(express.static(path.resolve(`${__dirname}/react-ui/build`)));

const cn = {
  host: 'localhost',
  port: 8080,
  database: 'newsusers',
  username: 'cindy23@gmail.com',
  password: 'applejuice',
  allowedExitOnIdle: true,
}

//const db = pgp(cn);

server.get('/heartbeat', (req, res) => {
  res.json({ message: 'heartbeat' });
});


// server points 
server.use("/api/articles",articleRoutes); //combined here
server.use("/api/headlines",headlineRoutes) //headline
server.use("/api/world",worldRoutes); // world
server.use("/auth",authRoutes) //login & register 



server.listen(PORT, async () => {
  console.log(`This server is running at PORT ${PORT}`);
});