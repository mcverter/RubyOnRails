-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 15, 2012 at 11:59 AM
-- Server version: 5.5.8
-- PHP Version: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `payroll`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`) VALUES
(1, 'admin', 'd033e22ae348aeb5660fc2140aec35850c4da997');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE IF NOT EXISTS `employee` (
  `empno` int(10) unsigned NOT NULL,
  `lname` varchar(45) NOT NULL,
  `fname` varchar(45) NOT NULL,
  `init` varchar(1) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `bdate` date NOT NULL,
  `dept` varchar(15) NOT NULL,
  `position` varchar(45) NOT NULL,
  `pay` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
  `dayswork` int(10) unsigned NOT NULL DEFAULT '0',
  `otrate` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
  `othrs` int(10) unsigned NOT NULL DEFAULT '0',
  `allow` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
  `advances` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
  `insurance` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`empno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`empno`, `lname`, `fname`, `init`, `gender`, `bdate`, `dept`, `position`, `pay`, `dayswork`, `otrate`, `othrs`, `allow`, `advances`, `insurance`) VALUES
(4, 'sdsd', 'sdfsd', 'a', 'Male', '1995-11-11', 'Marketing', 'asdas', 434.00, 3, 2.00, 3, 42.00, 23.00, 23.00),
(12, 'daitol', 'joel', 's', 'Male', '1993-02-02', 'Accounting', 'dasdasda', 2.00, 2, 3.00, 2, 32.00, 2.00, 2.00);
