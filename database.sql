CREATE DATABASE BOOKS;
USE BOOKS;
drop database books;

CREATE TABLE NGUOI_DUNG(
	 ND_ID INT AUTO_INCREMENT PRIMARY KEY,
	 ND_MatKhau VARCHAR(255),
	 ND_HoTen CHAR(30),
	 ND_GioiTinh enum('Nam','Nữ'),
	 ND_NgayTao DATE,
	 ND_Email varchar(50) check (`ND_Email` regexp "^[a-zA-Z0-9][a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]*?[a-zA-Z0-9._-]?@[a-zA-Z0-9][a-zA-Z0-9._-]*?[a-zA-Z0-9]?\\.[a-zA-Z]{2,63}$"),
	 ND_SoDienThoai char(10) check(regexp_replace(ND_SoDienThoai,'[^0-9]', '')),
	 ND_DiaChi VARCHAR(50),
     ND_VaiTro CHAR(20)
     );

 CREATE TABLE LOAI_SACH(
	LS_ID INT AUTO_INCREMENT PRIMARY KEY,
	LS_Ten CHAR(30),
	LS_MoTa VARCHAR(50)
);


CREATE TABLE SACH(
	SACH_ID INT AUTO_INCREMENT PRIMARY KEY,
	SACH_Ten CHAR(30),
    SACH_Anh longblob,
    SACH_TacGia CHAR(30),
	SACH_NgonNgu CHAR(30),
	SACH_SoLuong INT,
	SACH_GiaBan FLOAT(6,3),
	SACH_NhaXuatBan CHAR(30),
	SACH_NgayXuatBan DATE,
	SACH_Sotrang INT,
	SACH_MoTa VARCHAR(300),
	LS_ID INT,
	FOREIGN KEY (LS_ID) REFERENCES LOAI_SACH(LS_ID)
);
select * from sach;

CREATE TABLE GIO_HANG(
	GH_ID INT AUTO_INCREMENT PRIMARY KEY,
	ND_ID INT,
	SACH_ID INT,
	GH_SoLuong INT,
	FOREIGN KEY (ND_ID) REFERENCES NGUOI_DUNG(ND_ID),
	FOREIGN KEY (SACH_ID) REFERENCES SACH(SACH_ID)
	);


