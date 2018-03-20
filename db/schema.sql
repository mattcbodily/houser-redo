create table pt1_houses (
    id serial primary key,
    name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip integer
);

insert into pt1_houses (name, address, city, state, zip)
values ('Duplex', '123 N Street St', 'Provo', 'UT', 84604);

insert into pt1_houses (name, address, city, state, zip)
values ('Triplex', '4567 S Road St', 'Orem', 'UT', 84097);