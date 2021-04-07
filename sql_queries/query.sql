-- sample table to test saving images
CREATE TABLE  images (
  img_id int(10) unsigned NOT NULL auto_increment,
  img blob NOT NULL,
  file_name varchar(45) collate latin1_general_ci NOT NULL,
  PRIMARY KEY (img_id)
);

-- query for ngo sign up table

create table ngodata (
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

--query to update the user data:
--if all the value is to be changed
update signup
set First_Name = value1, Last_Name = value2, Phone_no = value3, Password = value4, Address = value5
where Email = value;

--Otherwise 
let s ="update signup set"
if(fname!="")
s+='First_name = ${value1}';
if(lname!="")
s+='Last_name = ${value2}';
if(Phone_no!="")
s+='Phone_no = ${value3}';
if(password!="")
s+='Password = ${value4}';
if(Address!="")
s+='Address = ${value5}';
s+='where Email = ${email}';
-- and then we will execute the query
