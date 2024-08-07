use faasos;

-- How many rolls were ordered?
select count(roll_id) as 'No. of Rolls' from customer_orders; 

-- How many unique customers placed order?
select count(distinct customer_id) as 'Unique Customers' from customer_orders;

-- How many successful orders were delivered by each driver?
select driver_id, count(distinct order_id) as 'No. of Successful orders' from
(select *, case when cancellation in ('Cancellation','Customer Cancellation')then 'c' else 'nc' end as order_cancel_details from driver_order) a
where order_cancel_details = 'nc'
group by driver_id;

-- How many of rolls of each type were delivered?
select b.roll_id, count(b.roll_id) as 'No. of Rolls' from
(select *, case when cancellation in ('Cancellation','Customer Cancellation')then 'c' else 'nc' end as order_cancel_details from driver_order) a
right join (select order_id, roll_id  from customer_orders) b on a.order_id = b.order_id
where order_cancel_details = 'nc'
group by roll_id;

select roll_id, count(roll_id) as 'No. of Rolls' from customer_orders
where order_id in (
select order_id from
(select *, case when cancellation in ('Cancellation','Customer Cancellation')then 'c' else 'nc' end as order_cancel_details from driver_order) a
where order_cancel_details = 'nc')
group by roll_id;

-- How many Veg and Non-Veg rolls were ordered by each customer?
select a.*,b.roll_name from
(select customer_id,roll_id, count(roll_id) as no_of_rolls from customer_orders group by customer_id, roll_id) a
inner join rolls b on a.roll_id = b.roll_id;

-- What were the maximum number of rolls that were delivered in a single order?
select count(order_id) as count_of_rolls from customer_orders
where order_id in (
select order_id from
(select *, case when cancellation in ('Cancellation','Customer Cancellation')then 'c' else 'nc' end as order_cancel_details from driver_order) a
where order_cancel_details = 'nc')
group by order_id
order by count_of_rolls desc
limit 1;

select max(a.count_of_rolls) from
(select count(order_id) as count_of_rolls from customer_orders
where order_id in (
select order_id from
(select *, case when cancellation in ('Cancellation','Customer Cancellation')then 'c' else 'nc' end as order_cancel_details from driver_order) a
where order_cancel_details = 'nc')
group by order_id) a;

-- For each customer, how many of the rolls that were delivered had at least 1 change and how many had no change?
select a.customer_id, a.changes, count(a.changes) from
(select *, case when (not_include_items is null or not_include_items = '' or not_include_items = 'NaN') and (extra_items_included is null or extra_items_included = '' or extra_items_included = 'NaN') then 'No Change' else 'Change' end as changes from customer_orders
where order_id in (
select order_id from
(select *, case when cancellation in ('Cancellation','Customer Cancellation')then 'c' else 'nc' end as order_cancel_details from driver_order) a
where order_cancel_details = 'nc') ) a
group by a.customer_id, a.changes
order by a.customer_id;

-- How many rolls were delivered that had both exclusions and extras?
select count(roll_id) as 'No. of Rolls' from customer_orders
where order_id in (
select order_id from
(select *, case when cancellation in ('Cancellation','Customer Cancellation')then 'c' else 'nc' end as order_cancel_details from driver_order) a
where order_cancel_details = 'nc')
and (not not_include_items = '' and not not_include_items = 'NaN' and not_include_items is not null)
and (extra_items_included not in ('','NaN') and extra_items_included is not null);

-- What are the total number of rolls ordered for each hour of the day?
select a.hour_interval, count(a.hour_interval) as 'Rolls Ordered' from 
(select *, concat(hour(order_date),'-',hour(order_date)+1) hour_interval
from customer_orders) a
group by hour_interval
order by hour_interval;

-- What were the number of orders for each day of the week?
select a.Day, count(distinct a.order_id) as 'No. of Orders' from 
(select *, dayname(order_date) 'Day' from customer_orders) a
group by a.Day;