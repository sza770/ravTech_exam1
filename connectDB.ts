import { Sequelize } from 'sequelize'



export function getConnection() {
    const sequelize = new Sequelize(
        'store_managment','postgres','post200', {
            host: 'localhost', 
            port: 5432,
            dialect: 'postgres'
        }
    )
    return sequelize;
}