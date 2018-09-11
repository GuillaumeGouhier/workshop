-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Client :  127.0.0.1
-- Généré le :  Mar 11 Septembre 2018 à 17:51
-- Version du serveur :  5.7.14
-- Version de PHP :  7.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `workshop_epsi`
--

-- --------------------------------------------------------

--
-- Structure de la table `compte_bde`
--

CREATE TABLE `compte_bde` (
  `id_bde` int(11) NOT NULL,
  `mail` varchar(50) DEFAULT NULL,
  `mdp` varchar(50) DEFAULT NULL,
  `tel` varchar(11) DEFAULT NULL,
  `nom` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `compte_bde`
--

INSERT INTO `compte_bde` (`id_bde`, `mail`, `mdp`, `tel`, `nom`) VALUES
(1, 'yohanndu77@epsi.fr', 'yohann', '0659024696', 'Louisia');

-- --------------------------------------------------------

--
-- Structure de la table `compte_etudiant`
--

CREATE TABLE `compte_etudiant` (
  `id_etudiant` int(11) NOT NULL,
  `mail` varchar(50) DEFAULT NULL,
  `mdp` varchar(50) DEFAULT NULL,
  `tel` varchar(11) DEFAULT NULL,
  `nom` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `compte_etudiant`
--

INSERT INTO `compte_etudiant` (`id_etudiant`, `mail`, `mdp`, `tel`, `nom`) VALUES
(1, 'yohanndu77@hotmail.fr', 'yohann', '0623955275', 'Louisia'),
(2, 'guillaume@hotmail.fr', 'guillaume', '0618120562', 'gouhier');

-- --------------------------------------------------------

--
-- Structure de la table `conducteur`
--

CREATE TABLE `conducteur` (
  `id_conducteur` int(11) NOT NULL,
  `tel` varchar(11) DEFAULT NULL,
  `nom` varchar(20) DEFAULT NULL,
  `depart` varchar(50) DEFAULT NULL,
  `id_etudiant` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `conducteur`
--

INSERT INTO `conducteur` (`id_conducteur`, `tel`, `nom`, `depart`, `id_etudiant`) VALUES
(1, '0623955275', 'Louisia', '12 rue des champs fleuries', 1),
(2, '0618120562', 'gouhier', '3 allée des fleuves', 2);

-- --------------------------------------------------------

--
-- Structure de la table `participe`
--

CREATE TABLE `participe` (
  `id_soiree` int(11) NOT NULL,
  `id_etudiant` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `participe`
--

INSERT INTO `participe` (`id_soiree`, `id_etudiant`) VALUES
(1, 1),
(1, 2);

-- --------------------------------------------------------

--
-- Structure de la table `soiree`
--

CREATE TABLE `soiree` (
  `id_soiree` int(11) NOT NULL,
  `date_soiree` date DEFAULT NULL,
  `lieu` varchar(50) DEFAULT NULL,
  `tarif` int(11) DEFAULT NULL,
  `nb_place` int(11) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `tel` varchar(11) DEFAULT NULL,
  `id_bde` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `soiree`
--

INSERT INTO `soiree` (`id_soiree`, `date_soiree`, `lieu`, `tarif`, `nb_place`, `description`, `tel`, `id_bde`) VALUES
(1, '2018-09-15', 'Paris', 20, 50, 'grosse soirée sur paname', '0659024696', 1);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `compte_bde`
--
ALTER TABLE `compte_bde`
  ADD PRIMARY KEY (`id_bde`),
  ADD KEY `tel` (`tel`);

--
-- Index pour la table `compte_etudiant`
--
ALTER TABLE `compte_etudiant`
  ADD PRIMARY KEY (`id_etudiant`),
  ADD KEY `tel` (`tel`),
  ADD KEY `nom` (`nom`);

--
-- Index pour la table `conducteur`
--
ALTER TABLE `conducteur`
  ADD PRIMARY KEY (`id_conducteur`),
  ADD UNIQUE KEY `conducteur_compte_etudiant_AK` (`id_etudiant`),
  ADD KEY `tel` (`tel`),
  ADD KEY `nom` (`nom`);

--
-- Index pour la table `participe`
--
ALTER TABLE `participe`
  ADD PRIMARY KEY (`id_soiree`,`id_etudiant`),
  ADD KEY `Participe_compte_etudiant0_FK` (`id_etudiant`);

--
-- Index pour la table `soiree`
--
ALTER TABLE `soiree`
  ADD PRIMARY KEY (`id_soiree`),
  ADD KEY `soiree_compte_bde_FK` (`id_bde`),
  ADD KEY `tel` (`tel`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `compte_bde`
--
ALTER TABLE `compte_bde`
  MODIFY `id_bde` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `compte_etudiant`
--
ALTER TABLE `compte_etudiant`
  MODIFY `id_etudiant` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `conducteur`
--
ALTER TABLE `conducteur`
  MODIFY `id_conducteur` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `soiree`
--
ALTER TABLE `soiree`
  MODIFY `id_soiree` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `conducteur`
--
ALTER TABLE `conducteur`
  ADD CONSTRAINT `conducteur_compte_etudiant_FK` FOREIGN KEY (`id_etudiant`) REFERENCES `compte_etudiant` (`id_etudiant`),
  ADD CONSTRAINT `conducteur_ibfk_1` FOREIGN KEY (`tel`) REFERENCES `compte_etudiant` (`tel`),
  ADD CONSTRAINT `conducteur_ibfk_2` FOREIGN KEY (`nom`) REFERENCES `compte_etudiant` (`nom`);

--
-- Contraintes pour la table `participe`
--
ALTER TABLE `participe`
  ADD CONSTRAINT `Participe_compte_etudiant0_FK` FOREIGN KEY (`id_etudiant`) REFERENCES `compte_etudiant` (`id_etudiant`),
  ADD CONSTRAINT `Participe_soiree_FK` FOREIGN KEY (`id_soiree`) REFERENCES `soiree` (`id_soiree`);

--
-- Contraintes pour la table `soiree`
--
ALTER TABLE `soiree`
  ADD CONSTRAINT `soiree_compte_bde_FK` FOREIGN KEY (`id_bde`) REFERENCES `compte_bde` (`id_bde`),
  ADD CONSTRAINT `soiree_ibfk_1` FOREIGN KEY (`tel`) REFERENCES `compte_bde` (`tel`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
