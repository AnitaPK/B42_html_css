import { sequelize } from "../config/db.js"

export const getTotalPopulation = async(req,res)=>{
try {
    const q1= `SELECT SUM(Population) AS TotalPopulation FROM country` 
    const totalPopulation = await sequelize.query(q1);
    const tp = totalPopulation[0];
    const tp1 = tp[0].TotalPopulation
    // clg(tp1)
    res.status(200).send(tp1)
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
        const TC = totalCountries[0];
        const TCValue = TC[0]
        res.status(200).send(TCValue.totalCountry)
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
        const tPopByCont = totalPopulationByContinent[0];
        console.log(tPopByCont);
        res.status(200).send(tPopByCont)
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

