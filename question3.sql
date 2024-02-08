SELECT
    users.name,
    users.phone,
    SUM(orders.subtotal) as total_sum,
    AVG(orders.subtotal) as average_sum,
    MAX(orders.created) as last_order_date
FROM
    users
        LEFT JOIN orders ON users.id = orders.user_id
GROUP BY
    users.id;