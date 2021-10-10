import { Pool } from "pg";

export const pool_db = () => new Pool();

export const findOrder = "SELECT * FROM orders WHERE confirmation_number = $1;";
export const createOrder = `INSERT INTO orders(
      name,
      email,
      confirmation_number,
      total_amount,
      address_city,
      address_country,
      address_line1,
      address_line2,
      address_postal_code) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;`;
