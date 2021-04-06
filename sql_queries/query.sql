-- sample table to test saving images
CREATE TABLE  images (
  img_id int(10) unsigned NOT NULL auto_increment,
  img blob NOT NULL,
  file_name varchar(45) collate latin1_general_ci NOT NULL,
  PRIMARY KEY (img_id)
);

-- query for ngo sign up table

create table ngoregistration (
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
);