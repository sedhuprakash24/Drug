
ingredient supplier->sid
                     sname
                     mobile
                     blockchainaddress
                     privatekey
Manufacture -> mid
               Manufacturename
               mobile
               blockchainaddress
               privatekey
Distributer-> did
              dname
              mobile
              blockchainaddress
              privatekey
pharmacy->pid
          pharmacyname
          blockchainaddress
          privatekey
patient-> patientid
          patientname
          blockchainaddress
          privatekey
ingredient-> iid
             ingredientname
             status
Druglot-> drugid
          drugname
          owner
          iid

transaction-tid
            drugid
            personid
            transactiondate
            transaddress
            remark
create table  ingredient_supplier(
    sid varchar(100) primary key,
    sname varchar(1000),
    mobile varchar(10),
    blockchainaddress text,
    privatekey text
);
create table manufacture (mid varchar(100) primary key,
               Manufacturename varchar(1000),
               mobile varchar(10),
               blockchainaddress text,
               privatekey text);

create table Distributer(did varchar(100) primary key,
               dname varchar(1000),
               mobile varchar(10),
               blockchainaddress text,
               privatekey text);

create table   pharmacy(pid varchar(100) primary key,
               pharmacyname varchar(1000),
               blockchainaddress text,
               privatekey text);

create table   ingredient(iid varchar(100) primary key,
               ingredientname varchar(1000),
               status varchar(1000));
create table  Druglot( drugid varchar(100) primary key,
            drugname varchar(1000),
            owners varchar(100),
            iid varchar(100));
  
create table transaction(tid varchar(100) primary key,
              drugid_id varchar(100),
              personid varchar(100),
              transactiondate date default current_timestamp,
              transaddress text,
              remark  text);        

