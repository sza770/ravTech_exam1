import { productModel } from './productTable'
import { clientModel } from './clientTable'
import { clientsPurchasesModel as CPM } from '../Model/clientsPurchasesModel'
import { Sequelize, Model, DataTypes } from 'sequelize'
import { PassThrough } from 'stream'

type clientsPurchasesModel = Model<CPM>

export async function createClientsPurchasesTable(sequelize: Sequelize, client: clientModel, product: productModel){

    const clientPurchaseTable = sequelize.define<clientsPurchasesModel>('purchases',{
        purchaseNumber: {
            type: DataTypes.NUMBER,
            primaryKey: true,
            autoIncrement: true,
            defaultValue: DataTypes.NUMBER
        }, 
        clientID: {
            type: DataTypes.NUMBER,
            allowNull: false                
        },
        productID: {
            type: DataTypes.NUMBER,
            allowNull: false                
        }, 
        price: {
            type: DataTypes.NUMBER,
            allowNull: false                
        }, 
        discount: {
            type: DataTypes.NUMBER,
            allowNull: false                
        }, 
        dateOfPurchase: {
            type: DataTypes.DATE,
            allowNull: false                
        }

    })

    client.belongsToMany(product, {Through:clientPurchaseTable})
    product.belongsToMany(client, {Through:clientPurchaseTable})

    await clientPurchaseTable.sync()


    return console.log("Clients Purchases Table created")
}
