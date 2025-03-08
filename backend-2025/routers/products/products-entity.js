import { DataTypes } from "sequelize";
import { Database } from "../../database/db.js";


const database = new Database();
const Products = database.db.define("Products", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price:{
        type: DataTypes.DECIMAL,
        allowNull:false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },


    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, // Aquí está la coma que falta
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    
});



Products.sync();

export default Products;