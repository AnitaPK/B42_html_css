import { sequelize } from "../config/db.js"

export const getTotalPopulation = async(req,res)=>{
try {
    const q1= `SELECT SUM(Population) AS TotalPopulation FROM country` 
    const totalPopulation = await sequelize.query(q1);
    console.log(totalPopulation);
    res.status(200).send({totalPopulation:totalPopulation[0],success:true})
} catch (error) {
    res.status(500).send({error:error})
}
}

export const getTop10PopulatedCountries = (req,res)=>{
    res.send("hello")

}
export const getTop10LeastPopulatedCountries = (req,res)=>{
    res.send("hello")

}
export const getTotalCountries = async (req,res)=>{
    try {
        const q3= `select count(Code) as totalCountry from country;` 
        const totalCountries = await sequelize.query(q3);
        res.status(200).send({data:totalCountries[0],success:true})
    } catch (error) {
        res.status(500).send({error:error})
    }

}
export const getAveragePopulation = (req,res)=>{
    res.send("hello")

}
export const getTotalPopulationByContinent = async (req,res)=>{
    try {
        const q2= `select Continent, sum(Population) as CPopulation from country group by Continent;` 
        const totalPopulationByContinent = await sequelize.query(q2);
        res.status(200).send({data:totalPopulationByContinent,success:true})
    } catch (error) {
        res.status(500).send({error:error})
    }

}
export const getTotalLanguages = (req,res)=>{
    res.send("hello")

}
export const getTop10Languages = (req,res)=>{
    res.send("hello")

}
export const getLargestCities = (req,res)=>{
    res.send("hello")

}

