-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 29, 2023 at 04:11 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `drugtracablity`
--

-- --------------------------------------------------------

--
-- Table structure for table `distributer`
--

CREATE TABLE `distributer` (
  `did` varchar(100) NOT NULL,
  `dname` varchar(1000) DEFAULT NULL,
  `mobile` varchar(10) DEFAULT NULL,
  `blockchainaddress` text DEFAULT NULL,
  `privatekey` text DEFAULT NULL,
  `password` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `druglot`
--

CREATE TABLE `druglot` (
  `drugid` varchar(100) NOT NULL,
  `drugname` varchar(1000) DEFAULT NULL,
  `owners` varchar(100) DEFAULT NULL,
  `iid` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ingredient`
--

CREATE TABLE `ingredient` (
  `iid` varchar(100) NOT NULL,
  `ingredientname` varchar(1000) DEFAULT NULL,
  `status` varchar(1000) DEFAULT NULL,
  `ownerid` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ingredient`
--

INSERT INTO `ingredient` (`iid`, `ingredientname`, `status`, `ownerid`) VALUES
('i1', 'ingredient1', 'pending', 'm1');

-- --------------------------------------------------------

--
-- Table structure for table `ingredient_supplier`
--

CREATE TABLE `ingredient_supplier` (
  `sid` varchar(100) NOT NULL,
  `sname` varchar(1000) DEFAULT NULL,
  `mobile` varchar(10) DEFAULT NULL,
  `blockchainaddress` text DEFAULT NULL,
  `privatekey` text DEFAULT NULL,
  `password` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ingredient_supplier`
--

INSERT INTO `ingredient_supplier` (`sid`, `sname`, `mobile`, `blockchainaddress`, `privatekey`, `password`) VALUES
('s1', 'is1', '457564562', '0xa1Eb2DAB99eaFc817B12aCf35AA1f359D942ce2B', '0xc3380e4c0c7677a38701bfcdc1d4d7aecc2738dcf590ab9295f80c0bf3e98d7c', '1212');

-- --------------------------------------------------------

--
-- Table structure for table `manufacture`
--

CREATE TABLE `manufacture` (
  `mid` varchar(100) NOT NULL,
  `Manufacturename` varchar(1000) DEFAULT NULL,
  `mobile` varchar(10) DEFAULT NULL,
  `blockchainaddress` text DEFAULT NULL,
  `privatekey` text DEFAULT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `manufacture`
--

INSERT INTO `manufacture` (`mid`, `Manufacturename`, `mobile`, `blockchainaddress`, `privatekey`, `password`) VALUES
('m1', 'm1', '7875456', '0x607aB0307f4FC55fcc6128DC5aAbf04c72defBCd', '0x5586cc32820d3d2e633bfe6b00647a0470169a9546fe2659e87ce711ce3e75f4', '1212');

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `pid` varchar(10) NOT NULL,
  `patientname` varchar(1000) DEFAULT NULL,
  `blockchain` text DEFAULT NULL,
  `privatekey` text DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `mobile` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `pharmacy`
--

CREATE TABLE `pharmacy` (
  `pid` varchar(100) NOT NULL,
  `pharmacyname` varchar(1000) DEFAULT NULL,
  `blockchainaddress` text DEFAULT NULL,
  `privatekey` text DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `mobile` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `tid` varchar(100) NOT NULL,
  `drugid_id` varchar(100) DEFAULT NULL,
  `senderid` varchar(100) DEFAULT NULL,
  `transactiondate` datetime DEFAULT current_timestamp(),
  `transaddress` text DEFAULT NULL,
  `remark` text DEFAULT NULL,
  `receiver` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transaction`
--

INSERT INTO `transaction` (`tid`, `drugid_id`, `senderid`, `transactiondate`, `transaddress`, `remark`, `receiver`) VALUES
('1', 'i1', 's1', '2023-05-29 07:37:34', 'C8088B0D70566E1CFEC508E6C5CA2B2B7C2AF6A0FF11CC5FE7ABC665119AAB57', 'transferingredient', 'm1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `distributer`
--
ALTER TABLE `distributer`
  ADD PRIMARY KEY (`did`);

--
-- Indexes for table `druglot`
--
ALTER TABLE `druglot`
  ADD PRIMARY KEY (`drugid`);

--
-- Indexes for table `ingredient`
--
ALTER TABLE `ingredient`
  ADD PRIMARY KEY (`iid`);

--
-- Indexes for table `ingredient_supplier`
--
ALTER TABLE `ingredient_supplier`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `manufacture`
--
ALTER TABLE `manufacture`
  ADD PRIMARY KEY (`mid`);

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `pharmacy`
--
ALTER TABLE `pharmacy`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`tid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
