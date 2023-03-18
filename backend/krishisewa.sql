-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Feb 12, 2022 at 08:52 AM
-- Server version: 5.7.34
-- PHP Version: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `krishisewa`
--
CREATE DATABASE IF NOT EXISTS `krishisewa` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `krishisewa`;

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
CREATE TABLE `address` (
  `address_id` int(11) NOT NULL,
  `line1` varchar(255) NOT NULL,
  `line2` varchar(255) NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `pincode` int(6) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`address_id`, `line1`, `line2`, `city`, `state`, `country`, `pincode`, `phone`, `user_id`) VALUES
(101, 'test address', 'test address', 'Mumbai', 'Maharashtra', 'India', 110043, '8920173979', 1),
(102, 'test address 2', 'test address 2', 'Lokhandwala', 'Maharashtra', 'India', 110067, '9810100239', 1);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `title`) VALUES
(1, 'seeds'),
(2, 'fertilisers'),
(3, 'water soluble fertilisers'),
(4, 'micronutrients'),
(5, 'NPK');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `user_id`) VALUES
(6, 2),
(7, 1),
(8, 1),
(13, 1),
(14, 1),
(15, 1),
(16, 1),
(17, 1),
(18, 1),
(19, 1),
(20, 1),
(21, 1),
(22, 1),
(23, 1),
(24, 1),
(25, 1),
(26, 1),
(27, 1),
(28, 1),
(29, 1),
(30, 1),
(31, 1),
(32, 1),
(33, 1),
(34, 1),
(35, 1),
(36, 1),
(37, 1),
(38, 1),
(39, 1),
(40, 1),
(41, 1),
(42, 2),
(43, 2),
(44, 2),
(52, 1),
(53, 1),
(54, 1),
(55, 1),
(56, 1),
(57, 1),
(58, 1),
(59, 1),
(60, 1),
(61, 1),
(62, 1),
(63, 2),
(64, 1),
(65, 1),
(66, 1),
(67, 1),
(68, 1),
(69, 1),
(70, 1),
(71, 1),
(72, 1),
(73, 1),
(74, 1),
(75, 1),
(76, 1),
(77, 1),
(78, 1),
(79, 1),
(80, 1),
(81, 1),
(82, 1),
(83, 1),
(84, 1),
(85, 1),
(86, 1),
(87, 1),
(88, 1),
(89, 1),
(90, 1),
(91, 1),
(93, 1),
(94, 1),
(95, 1),
(96, 1),
(97, 1),
(98, 1),
(99, 1),
(100, 1),
(101, 1),
(102, 1),
(103, 1),
(104, 2),
(105, 2),
(106, 2),
(107, 2),
(108, 2),
(109, 2),
(110, 2),
(111, 2),
(112, 2),
(113, 2),
(114, 2),
(115, 2),
(116, 2),
(117, 2),
(118, 2),
(119, 2);

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

DROP TABLE IF EXISTS `order_details`;
CREATE TABLE `order_details` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(10) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `order_details`
--

INSERT INTO `order_details` (`id`, `order_id`, `product_id`, `quantity`) VALUES
(1, 6, 1120, 1),
(2, 6, 1101, 1),
(3, 6, 2205, 1),
(4, 7, 2204, 1),
(5, 8, 3301, 1),
(6, 8, 4403, 1),
(7, 8, 5501, 1),
(9, 24, 1121, 1),
(10, 24, 2213, 1),
(11, 24, 2205, 1),
(12, 24, 2207, 1),
(45, 39, 1113, 3),
(46, 39, 1103, 3),
(47, 39, 1118, 2),
(49, 40, 5501, 2);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `product_id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `weight` decimal(5,2) NOT NULL,
  `quantity` int(10) DEFAULT '100',
  `price` int(10) NOT NULL,
  `category_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `name`, `image`, `weight`, `quantity`, `price`, `category_id`) VALUES
(1101, 'RICE', 'images/seed/1.JPG', '100.00', 0, 2500, 1),
(1102, 'MAIZE', 'images/seed/2.JPG', '100.00', 0, 2300, 1),
(1103, 'CHICKPEA', 'images/seed/3.JPG', '100.00', 0, 3100, 1),
(1104, 'KIDNEYBEANS', 'images/seed/4.JPG', '100.00', 0, 2500, 1),
(1105, 'PIGEONPEAS', 'images/seed/5.JPG', '100.00', 0, 1900, 1),
(1106, 'MOTHBEANS', 'images/seed/6.JPG', '100.00', 0, 7000, 1),
(1107, 'MUNGBEANS', 'images/seed/7.JPG', '100.00', 0, 8400, 1),
(1108, 'BLACKGRAM', 'images/seed/8.JPG', '100.00', 0, 5400, 1),
(1109, 'LENTILS', 'images/seed/9.JPG', '100.00', 0, 6800, 1),
(1110, 'POMEGRANATE', 'images/seed/10.JPG', '100.00', 0, 7800, 1),
(1111, 'BANANA', 'images/seed/11.JPG', '1.00', 0, 25000, 1),
(1112, 'MANGO', 'images/seed/12.JPG', '100.00', 0, 8000, 1),
(1113, 'GRAPES', 'images/seed/13.JPG', '1.00', 0, 2300, 1),
(1114, 'WATERMELON', 'images/seed/14.JPG', '100.00', 0, 17000, 1),
(1115, 'MUSKMELON', 'images/seed/15.JPG', '100.00', 0, 21000, 1),
(1116, 'APPLE', 'images/seed/16.JPG', '100.00', 0, 20000, 1),
(1117, 'ORANGE', 'images/seed/17.JPG', '100.00', 0, 21000, 1),
(1118, 'PAPAYA', 'images/seed/18.JPG', '100.00', 0, 15000, 1),
(1119, 'COCONUT', 'images/seed/19.JPG', '100.00', 0, 28000, 1),
(1120, 'COTTON', 'images/seed/20.JPG', '100.00', 0, 150000, 1),
(1121, 'JUTE', 'images/seed/21.JPG', '100.00', 0, 5200, 1),
(1122, 'COFFEE', 'images/seed/22.JPG', '100.00', 0, 14400, 1),
(2201, 'AMMONIUM CHLORIDE-25.0', 'images/fertilizers/1.jpeg', '50.00', 0, 435, 2),
(2202, 'SINGLE SUPER PHOSPHATE', 'images/fertilizers/2.jpeg', '50.00', 0, 420, 2),
(2203, 'MAGNESIUM SULPHATE', 'images/fertilizers/3.jpeg', '1.00', 0, 110, 2),
(2204, 'MANGANESE SULPHATE', 'images/fertilizers/4.jpeg', '1.00', 0, 80, 2),
(2205, 'AMMONIUM SULPHATE - 20.6', 'images/fertilizers/5.jpeg', '50.00', 0, 520, 2),
(2206, 'UREA', 'images/fertilizers/6.jpeg', '50.00', 0, 320, 2),
(2207, 'MAP-11:52:00', 'images/fertilizers/7.jpeg', '50.00', 0, 910, 2),
(2208, 'MURIATE OF POTASH', 'images/fertilizers/8.jpeg', '50.00', 0, 980, 2),
(2209, 'DAP', 'images/fertilizers/9.jpeg', '50.00', 0, 1250, 2),
(2210, 'ZINC SULPHATE', 'images/fertilizers/10.jpeg', '1.00', 0, 58, 2),
(2211, 'COPPER SULPHATE', 'images/fertilizers/11.jpeg', '1.00', 0, 190, 2),
(2212, 'FERROUS SULPHATE', 'images/fertilizers/12.jpeg', '1.00', 0, 15, 2),
(2213, 'BORAX(20%)', 'images/fertilizers/13.jpeg', '0.25', 0, 100, 2),
(2214, 'SSP-16.0', 'images/fertilizers/14.jpeg', '50.00', 0, 250, 2),
(3301, 'KRISTA-K(KNO3)', 'images/watersol/1.jpeg', '1.00', 0, 130, 3),
(3302, 'CaNO3', 'images/watersol/2.jpeg', '1.00', 0, 120, 3),
(3303, '19:19:19', 'images/watersol/3.jpeg', '1.00', 0, 190, 3),
(3304, '20:20', 'images/watersol/4.jpeg', '1.00', 0, 210, 3),
(4401, 'PHOTOSAL GARDEN MIX', 'images/micronutrients/1.jpeg', '1.00', 0, 120, 4),
(4402, 'ROSE MIX', 'images/micronutrients/2.jpeg', '0.50', 0, 50, 4),
(4403, 'MICRONOL', 'images/micronutrients/3.jpeg', '1.00', 0, 165, 4),
(4404, 'JAYAMIN', 'images/micronutrients/4.jpeg', '0.50', 0, 160, 4),
(4405, 'COCONUT MICRONUTRIENT', 'images/micronutrients/5.jpeg', '1.00', 0, 70, 4),
(5501, 'COMPLEX NPK-19:19:19', 'images/NPK/1.jpeg', '1.00', 0, 180, 5),
(5502, 'COMPLEX NPK-10:26:26', 'images/NPK/2.jpeg', '50.00', 0, 1045, 5);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_id` int(10) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `age` int(2) NOT NULL,
  `role` int(3) NOT NULL DEFAULT '555'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `email`, `password`, `fname`, `lname`, `age`, `role`) VALUES
(1, 'jas1602', 'xyz@gmail.com', '123456', 'jasleen', 'kaur', 19, 555),
(2, 'srishair', 'abc@gmail.com', '123456', 'srish', 'wadhwa', 20, 555);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`address_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `order_details`
--
ALTER TABLE `order_details`
  ADD CONSTRAINT `order_details_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  ADD CONSTRAINT `order_details_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
