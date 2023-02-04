import { clientsModel as CM } from '../Model/clientsModel'
import { Sequelize, Model, DataTypes } from 'sequelize'

export type clientModel = Model<CM>

export async function createClientsTable(sequelize: Sequelize) {
    
    const clientTable = sequelize.define<clientModel>('clients',{
        clientID: {
            type: DataTypes.NUMBER,
            primaryKey: true,
            defaultValue: DataTypes.NUMBER
        }, 
        fullname: {
            type: DataTypes.TEXT,
            allowNull: false                
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: false                
        }, 
        phone: {
            type: DataTypes.TEXT,
            allowNull: false                
        }

    })

    await clientTable.sync()

    return console.log("Clients Table created")

    
}
