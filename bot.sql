-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : sam. 12 fév. 2022 à 23:06
-- Version du serveur :  5.7.24
-- Version de PHP : 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `bot`
--
CREATE DATABASE IF NOT EXISTS `bot` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `bot`;

-- --------------------------------------------------------

--
-- Structure de la table `chances`
--

CREATE TABLE `chances` (
  `id` int(11) NOT NULL,
  `user_id` varchar(25) NOT NULL,
  `server_id` varchar(25) NOT NULL,
  `chance` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `chances`
--

INSERT INTO `chances` (`id`, `user_id`, `server_id`, `chance`) VALUES
(1, '260525837315604490', '938078116792913940', 1),
(2, '425682756249452545', '938078116792913940', 2),
(3, '433366920905883648', '938078116792913940', 0),
(4, '120133103304835072', '938078116792913940', 2);

-- --------------------------------------------------------

--
-- Structure de la table `xp`
--

CREATE TABLE `xp` (
  `id` int(11) NOT NULL,
  `user_id` varchar(25) NOT NULL,
  `xp_count` int(11) NOT NULL,
  `xp_level` int(11) NOT NULL,
  `server_id` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `xp`
--

INSERT INTO `xp` (`id`, `user_id`, `xp_count`, `xp_level`, `server_id`) VALUES
(99, '260525837315604490', 13, 20, '938078116792913940'),
(100, '940596938598912082', 4, 14, '700649831663665263'),
(101, '260525837315604490', 0, 2, '700649831663665263'),
(102, '120133103304835072', 3, 5, '938078116792913940'),
(103, '433366920905883648', 2, 9, '938078116792913940'),
(104, '940596938598912082', 2, 11, '938078116792913940'),
(105, '425682756249452545', 5, 3, '938078116792913940'),
(106, '940597329617117215', 2, 0, '938078116792913940'),
(107, '940596993103908894', 4, 1, '938078116792913940'),
(108, '940596899583508530', 2, 0, '938078116792913940');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `chances`
--
ALTER TABLE `chances`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `xp`
--
ALTER TABLE `xp`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `chances`
--
ALTER TABLE `chances`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `xp`
--
ALTER TABLE `xp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
