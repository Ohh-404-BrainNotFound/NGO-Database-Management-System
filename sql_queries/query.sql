-- sample table to test saving images
CREATE TABLE  images (
  img_id int(10) unsigned NOT NULL auto_increment,
  img blob NOT NULL,
  file_name varchar(45) collate latin1_general_ci NOT NULL,
  PRIMARY KEY (img_id)
);