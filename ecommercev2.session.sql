-- UPDATE products
-- SET category = 'Seeds'
-- WHERE name LIKE '%Seeds%';
-- UPDATE products
-- SET category = 'Soil'
-- WHERE name LIKE '%Soil%';
-- UPDATE products
-- SET category = 'Pots'
-- WHERE name LIKE '%Bed%';
-- UPDATE products
-- SET category = 'Accessories'
-- WHERE name NOT LIKE '%Seeds%'
--     AND name NOT LIKE '%Soil%'
--     AND name NOT LIKE '%Bed%';
-- SELECT *
-- FROM contacts;
-- -- Seeds (all seed packets)
-- UPDATE products
-- SET category = 'Seeds'
-- WHERE name LIKE '%Seed%' OR name LIKE '%Cilantro%' OR name LIKE '%Tomato%' OR name LIKE '%Pepper%' OR name LIKE '%Lettuce%';
-- -- Soil
-- UPDATE products
-- SET category = 'Soil'
-- WHERE name LIKE '%Soil%';
-- -- Pots / Planters / Beds
-- UPDATE products
-- SET category = 'Pots'
-- WHERE name LIKE '%Bed%' OR name LIKE '%Planter%';
-- -- Accessories / Tools
-- UPDATE products
-- SET category = 'Accessories'
-- WHERE name LIKE '%Tray%' OR name LIKE '%Trowel%' OR name LIKE '%Glove%' OR name LIKE '%Stake%' OR name LIKE '%Tool%';
SELECT id,
    name,
    image_default,
    image_hover
FROM products;