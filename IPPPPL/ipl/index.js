const fs= require("fs");
const csv = require("csvtojson");
const topEconomicalBowlers= require('./ipl/topEconomicalBowlers')
const MATCHES_FILE_PATH="./data/matches.csv";
const DELIVERIES_FILE_PATH="./data/matches.csv";
const JSON_OUTPUT_FILE_PATH = "./public/topEconomicalBowlers.json";



csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches =>{
        csv()
            .fromFile(DELIVERIES_FILE_PATH)
            .then(deliveries =>{
               let result = topEconomicalBowlers(deliveries, matches);
                savetopEconomicalBowlers(result);
          });
     
    });

function savetopEconomicalBowlers(result){
    const jsonData = {
        topEconomicalBowlers: result
    };
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString,"utf8", err =>{
        if(err){
            console.error(err);
        }
    });
}










/*



const fs= require("fs");
const csv = require("csvtojson");
const extraRuns2016= require('./ipl/extraRuns2016')
const MATCHES_FILE_PATH="./data/matches.csv";
const DELIVERIES_FILE_PATH="./data/matches.csv";
const JSON_OUTPUT_FILE_PATH = "./public/extraRuns2016.json";



csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches =>{
        csv()
            .fromFile(DELIVERIES_FILE_PATH)
            .then(deliveries =>{
               let result = extraRuns2016(deliveries, matches);
                saveExtraRuns2016(result);
          });
     
    });

function saveExtraRuns2016(result){
    const jsonData = {
        extraRunsPerTeam: result
    };
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString,"utf8", err =>{
        if(err){
            console.error(err);
        }
    });
}















    const fs = require("fs");
const csv= require("csvtojson");
const matchesPlayedPerYear= require('./ipl/matchesPlayedPerYear')
const MATCHES_FILE_PATH = "./data/matches.csv";
const JSON_OUTPUT_FILE_PATH = "./public/matchesPlayedPerYear.json";


csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
       let result = matchesPlayedPerYear(matches);
       saveMatchesPlayedPerYear(result);
    });


    function saveMatchesPlayedPerYear(result){
        const jsonData ={
matchesPlayedPerYear: result
        };
        const jsonString = JSON.stringify(jsonData);
        fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err =>{
            if (err){
                console.error(err);
            }
        })
    }






const fs = require("fs");
const csv= require("csvtojson");
const matchesWonPerTeam= require('./ipl/matchesWonPerTeam')
const MATCHES_FILE_PATH = "./data/matches.csv";
const JSON_OUTPUT_FILE_PATH = "./public/matchesWonPerTeam.json";


csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
       let result = matchesWonPerTeam(matches);
       saveMatchesWonPerTeam(result);
    });


    function saveMatchesWonPerTeam(result){
        const jsonData ={
            matchesWonPerTeam: result
        };
        const jsonString = JSON.stringify(jsonData);
        fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err =>{
            if (err){
                console.error(err);
            }
        })
    }

*/