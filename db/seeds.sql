CREATE TABLE products
(
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    price INTEGER NOT NULL,
    img VARCHAR(255)
)

INSERT INTO products
(name, price)
VALUES (
    'Shoes',
    200
)