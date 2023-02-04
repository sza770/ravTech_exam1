import { getConnection } from "./connectDB"
import { createClientsTable } from "./DB/clientTable"
import { createProductsTable } from "./DB/productTable"

async function createTables() {
    const connection = getConnection();
    const client = createClientsTable(connection);
    const product = createProductsTable(connection);

    return {client, product}
}

