use faasos;

-- What was the average time it took for each driver to arrive at the faasos HQ to pickup the order?
select a.driver_id, sec_to_time(avg(time_to_sec(a.time_to_reach))) as avg_time from 
(select distinct d.order_id,d.driver_id, timediff(d.pickup_time, co.order_date) as time_to_reach from driver_order d
left join customer_orders co on d.order_id = co.order_id) a
group by driver_id;

-- Is there any relationship between the number of rolls and how long the order takes to prepare?

select d.order_id,count(co.roll_id) as 'No. of rolls', sec_to_time(sum(time_to_sec(timediff(d.pickup_time, co.order_date)))/count(co.roll_id)) as time_diff from driver_order d
left join customer_orders co on d.order_id = co.order_id
group by d.order_id;

-- What was the average distance travelled for each customer?
select a.customer_id, avg(a.distance) as 'Avg Distance' from
(select distinct d.order_id, co.customer_id, d.distance from driver_order d
left join customer_orders co on d.order_id = co.order_id) a
group by a.customer_id;

-- What is the difference between the longest and the shorted delivery times for all order?
select max(a.duration) - min(a.duration) diff from
(select case when duration like '%min%' then left(duration,locate('m',duration)-1)
else duration end as duration
from driver_order
where duration is not null) a;