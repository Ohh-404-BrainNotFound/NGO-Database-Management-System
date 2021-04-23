const dbQuery = [
    {
        "name": "ngodata table",
        "query": `create table ngodata (
            ngo_mail varchar(124) primary key not null,
            ngo_name varchar(125) not null,
            ngo_password varchar(30) not null,
            ngo_info varchar(500) not null,
            government_id varchar(125) not null,
            ngo_address varchar(200) not null,
            ngo_bank varchar(125) not null,
            ngo_account int(30) not null,
            ngo_ifsccode varchar(30) not null,
            regdate timestamp NULL DEFAULT CURRENT_TIMESTAMP
          );`
    },
    {
        "name": "user table",
        "query": `create table user (
            fname varchar(125) not null,
            lname varchar(30) not null,
            email varchar(500) primary key not null,
            password varchar(30) not null,
            login_type varchar(10) not null,
            address varchar(125) not null,
            regdate timestamp NULL DEFAULT CURRENT_TIMESTAMP,
            image varchar(124) not null,
            phoneNumber int(12) unsigned not null
          );` 
    },
    {
        "name" : "donor table",
        "query": `create table donor(
            donor_id varchar(30) primary key not null,
            donor_name varchar(125) not null,
            user_email varchar(125)  not null,
            amount int(125) not null,
            ngo_name varchar(125) not null,
            donordate timestamp NULL DEFAULT CURRENT_TIMESTAMP,
            constraint foreign Key(user_email) references user(email) on delete cascade on update cascade 
            );`
    },
    {
        "name": "ngo_donor_record table",
        "query":`create table ngo_donor_record(
            donor_id varchar(30) primary key not null,
            donor_name varchar(125) not null,
            ngo_id varchar(120) not null,
            amount int(125) not null,
            ngo_name varchar(125) not null,
            user_email varchar(125),
            regDate timestamp NULL DEFAULT CURRENT_TIMESTAMP,
            constraint foreign Key(ngo_id) references ngodata(ngo_mail) on delete cascade on update cascade 
            );`
    },
    {
        "name": "ngo_member table",
        "query": `create table ngo_member(
            member_id int(10) primary key not null auto_increment,
            name varchar(125)  not null,
            ngo_mail varchar(125) not null,
            designation varchar(125) not null,
            image varchar(125) not null ,
            constraint foreign key(ngo_mail) references ngodata(ngo_mail) on delete cascade on update cascade
            );`
    }
];

module.exports = dbQuery;