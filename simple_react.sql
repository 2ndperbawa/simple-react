-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 22, 2023 at 04:40 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(60) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `mobile`, `created_at`, `updated_at`) VALUES
(21, 'Lionel Messi', 'lionel.messi@gmail.com', '+628004359470', '2023-09-21 17:00:00', '2023-09-22 14:28:02'),
(22, 'Cristiano Ronaldo', 'Cristiano.Ronaldo@gmail.com', '+625322260799', '2023-09-21 17:00:00', '2023-09-22 14:28:28'),
(23, 'Erling Haaland', 'ErlingHaaland@gmail.com', '+626427133341', '2023-09-21 17:00:00', '2023-09-22 14:29:04'),
(24, 'Steven Gerrard', 'StevenGerrard@gmail.com', '+627664610629', '2023-09-21 17:00:00', '2023-09-22 14:29:32'),
(25, 'Kylian Mbappe', 'KylianMbappe@gmail.com', '+622105163805', '2023-09-21 17:00:00', '2023-09-22 14:30:06'),
(26, 'Ibrahimovic', 'Ibrahimovic@gmail.com', '+625414202301', '2023-09-21 17:00:00', '2023-09-22 14:30:34'),
(27, 'Karim Benzema', 'Karim@gmail.com', '+622235113981', '2023-09-21 17:00:00', '2023-09-22 14:32:52'),
(28, 'Harry Maguire', 'HarryMaguire@gmail.com', '+623279365701', '2023-09-21 17:00:00', '2023-09-22 14:33:55');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
