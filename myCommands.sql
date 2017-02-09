CREATE TABLE if not exists user
(
 id_user INT NOT NULL AUTO_INCREMENT,
 login varchar(30) default NULL,
 password varchar(20) default NULL,
 PRIMARY KEY (id_user)
) ENGINE = InnoDB
 DEFAULT CHARACTER SET = utf8 ;


 CREATE TABLE if not exists grp
(
 id_grp INT NOT NULL AUTO_INCREMENT,
 name varchar(30) default NULL,
 rulles varchar(20) default NULL,
 PRIMARY KEY (id_grp)
) ENGINE = InnoDB
 DEFAULT CHARACTER SET = utf8 ;


 CREATE TABLE if not exists user_group
(
 id_user_grp INT NOT NULL AUTO_INCREMENT,
 id_grp varchar(30) default NULL,
 id_user varchar(30) default NULL,
   PRIMARY KEY (id_user_grp)
) ENGINE = InnoDB
 DEFAULT CHARACTER SET = utf8 ;

 ALTER TABLE user_group ADD CONSTRAINT cnst_user_group_ref_user
 FOREIGN KEY(id_user)
 REFERENCES user(id_user)
ON DELETE RESTRICT;

 ALTER TABLE user_group ADD CONSTRAINT cnst_user_group_ref_grp
 FOREIGN KEY(id_grp)
 REFERENCES user(id_grp)
ON DELETE RESTRICT;

 INSERT INTO user (id_user, name, login,password) VALUES (NULL, 'vasia', '123456'); 
 INSERT INTO user (id_user, name, login,password) VALUES (NULL, 'ania', '00000'); 

  INSERT INTO grp (id_grp, name, rulles) VALUES (NULL, 'guest', 'only read'); 