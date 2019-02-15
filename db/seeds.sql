CREATE TABLE products
(
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    price INTEGER NOT NULL
)

INSERT INTO products
(name, price)
VALUES (
    'Shoes',
    200
)