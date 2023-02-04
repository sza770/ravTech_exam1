import { productsModel as PM } from '../Model/productsModel'
import { Sequelize, Model, DataTypes } from 'sequelize'


export type productModel = Model<PM>

export async function createProductsTable(sequelize: Sequelize){

    const productTable = sequelize.define<productModel>('products',{
        productID: {
            type: DataTypes.NUMBER,
            primaryKey: true,
            defaultValue: DataTypes.NUMBER
        }, 
        productName: {
            type: DataTypes.TEXT,
            allowNull: false                
        },
        productDescription: {
            type: DataTypes.TEXT,
            allowNull: false                
        }, 
        productPriceForClient: {
            type: DataTypes.NUMBER,
            allowNull: false                
        }, 
        productPriceFromManifacturer: {
            type: DataTypes.NUMBER,
            allowNull: false                
        }, 
        quantity: {
            type: DataTypes.NUMBER,
            allowNull: false                
        }

    })

    await productTable.sync()

    return console.log("product Table created")


}
