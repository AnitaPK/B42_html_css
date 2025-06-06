import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host:process.env.DB_HOST,
    dialect:"mysql",
    logging:false,
    dialectOptions:{}
  }
);

(async()=>{
  try {
    await sequelize.authenticate();
    console.log("connected to database successfully")
    
  } catch (error) {
    console.log("Connection error");
    process.exit(1);
  }
})()
