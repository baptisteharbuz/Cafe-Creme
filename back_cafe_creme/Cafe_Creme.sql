-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : sam. 09 mars 2024 à 16:00
-- Version du serveur : 5.7.39
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `Cafe_Creme`
--

-- --------------------------------------------------------

--
-- Structure de la table `Arome`
--

CREATE TABLE `Arome` (
  `AR_Id` int(11) NOT NULL,
  `AR_Label` varchar(45) NOT NULL,
  `AC_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Arome`
--

INSERT INTO `Arome` (`AR_Id`, `AR_Label`, `AC_Id`) VALUES
(1, 'Chocolaté', 1),
(2, 'Noisette', 1),
(3, 'Caramélisé', 1),
(4, 'Fruité', 2),
(5, 'Floral', 2),
(6, 'Épicé', 3),
(7, 'Boisé', 3),
(8, 'Terreux', 3),
(9, 'Herbacé', 3);

-- --------------------------------------------------------

--
-- Structure de la table `Arome_Categorie`
--

CREATE TABLE `Arome_Categorie` (
  `AC_Id` int(11) NOT NULL,
  `AC_Label` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Arome_Categorie`
--

INSERT INTO `Arome_Categorie` (`AC_Id`, `AC_Label`) VALUES
(1, 'Gourmands'),
(2, 'Fruitées'),
(3, 'Terreux');

-- --------------------------------------------------------

--
-- Structure de la table `Commande_Produit`
--

CREATE TABLE `Commande_Produit` (
  `CP_Id` int(11) NOT NULL,
  `CU_Id` int(11) NOT NULL,
  `CP_Quantite` int(11) NOT NULL,
  `CP_Prix` int(11) NOT NULL,
  `PR_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `Commande_Utilisateur`
--

CREATE TABLE `Commande_Utilisateur` (
  `CU_Id` int(11) NOT NULL,
  `UT_Id` int(11) NOT NULL,
  `CU_Date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `Forme`
--

CREATE TABLE `Forme` (
  `FO_Id` int(11) NOT NULL,
  `FO_Label` varchar(45) NOT NULL,
  `FO_Description` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Forme`
--

INSERT INTO `Forme` (`FO_Id`, `FO_Label`, `FO_Description`) VALUES
(1, 'Café en grains', 'Le café en grains se présente sous la forme de grains de café entiers. Ces grains ne sont pas encore moulus et conservent leur intégrité. Ils sont utilisés dans les machines à café équipées de meules pour moudre les grains juste avant l\'infusion. Cela permet de préserver la fraîcheur et les arômes du café.'),
(2, 'Café moulu', 'Le café moulu est du café qui a été broyé en une poudre ou une mouture spécifique. La taille de la mouture peut varier en fonction de la méthode de préparation du café. Par exemple, pour une cafetière à filtre, une mouture moyenne est généralement utilisée, tandis que pour un espresso, une mouture fine est préférable.'),
(3, 'Capsule', 'Le café en capsules ou dosettes est conditionné individuellement dans des capsules ou dosettes. Ces formats sont souvent utilisés dans des machines à café spécifiques, comme les machines à dosettes ou les machines à espresso à capsule.');

-- --------------------------------------------------------

--
-- Structure de la table `Intensite`
--

CREATE TABLE `Intensite` (
  `IN_Id` int(11) NOT NULL,
  `IN_Label` varchar(45) NOT NULL,
  `IN_Description` longtext NOT NULL,
  `IC_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Intensite`
--

INSERT INTO `Intensite` (`IN_Id`, `IN_Label`, `IN_Description`, `IC_Id`) VALUES
(1, 'Léger', 'Découvrez la douceur subtile avec notre café léger, une caresse matinale où les nuances délicates dansent en harmonie. Idéal pour ceux qui préfèrent un réveil en douceur, avec une touche de légèreté et une faible concentration de caféine.', 1),
(2, 'Moyen', 'Savourez l\'équilibre parfait avec notre café de force moyenne, un chef-d\'œuvre harmonieux qui allie douceur et caractère. Chaque gorgée est une promesse de satisfaction, offrant un compromis exquis entre intensité et douceur.', 1),
(3, 'Fort', 'Plongez dans un monde de saveurs audacieuses avec notre café fort. Un véritable éveil des sens, ce café robuste et corsé promet une aventure gustative intense, idéale pour ceux qui recherchent une expérience caféinée profonde et riche.', 2),
(4, 'Très Fort', 'Osez l\'intensité avec notre café très fort, une explosion de saveurs audacieuses pour les vrais amateurs de café. Avec une concentration élevée de caféine, chaque tasse est un voyage vers les profondeurs du goût et de l\'arôme.', 3),
(5, 'Extra Fort', 'L\'expérience ultime pour les connaisseurs, notre café extra fort est une symphonie de puissance et de profondeur. Conçu pour les palais exigeants, ce café est l\'incarnation de l\'intensité extrême, parfait pour ceux qui cherchent à défier leurs limites gustatives.', 3);

-- --------------------------------------------------------

--
-- Structure de la table `Intensite_Categorie`
--

CREATE TABLE `Intensite_Categorie` (
  `IC_ID` int(11) NOT NULL,
  `IC_Label` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Intensite_Categorie`
--

INSERT INTO `Intensite_Categorie` (`IC_ID`, `IC_Label`) VALUES
(1, 'Légère à moyenne'),
(2, 'Forte'),
(3, 'Trés forte à extra forte');

-- --------------------------------------------------------

--
-- Structure de la table `Pays`
--

CREATE TABLE `Pays` (
  `PA_Id` int(11) NOT NULL,
  `PA_Label` varchar(45) NOT NULL,
  `PA_Caracteristique` longtext,
  `PA_Cafe_Celebre` varchar(45) DEFAULT NULL,
  `PA_Arabica` varchar(45) DEFAULT NULL,
  `PA_Robusta` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Pays`
--

INSERT INTO `Pays` (`PA_Id`, `PA_Label`, `PA_Caracteristique`, `PA_Cafe_Celebre`, `PA_Arabica`, `PA_Robusta`) VALUES
(1, 'Brasilian', 'Le Brésil est le plus grand producteur mondial de café. Les cafés brésiliens sont souvent doux, avec des notes de noix et de chocolat.', 'Santos, Bourbon.', '70', '30'),
(2, 'Vietnamese', 'Le Vietnam est un important producteur de café robusta. Les cafés vietnamiens ont souvent des profils plus corsés et terreux.', 'Robusta du Vietnam.', '10', '90'),
(3, 'Colombian', 'Les cafés colombiens sont souvent équilibrés, avec une acidité vive et des arômes riches. Le climat andin favorise une croissance lente des grains.', 'Café de Colombie, Supremo.', '100', NULL),
(4, 'Indonesian', 'Les cafés indonésiens, en particulier ceux de la région de Java, sont souvent caractérisés par des notes terreuses, épicées et chocolatées. La culture du café est influencée par des conditions idéales de croissance, notamment un sol riche en nutriments et des altitudes élevées.', 'Java, Sumatra, Flores.', '10', '90'),
(5, 'Ethiopian', 'Berceau du café arabica, l\'Éthiopie offre une grande diversité de profils de saveurs allant des cafés fruités et floraux aux cafés plus terreux.', 'Yirgacheffe, Sidamo, Harrar.', '100', NULL),
(6, 'Jamaican', 'La Jamaïque produit le célèbre café Blue Mountain, reconnu pour son goût doux, équilibré et délicat.', 'Blue Mountain.', '100', NULL),
(7, 'Costa Rican', 'Les cafés costaricains sont réputés pour leur acidité vive et leurs saveurs complexes. La culture du café est souvent axée sur la durabilité.', 'Tarrazú, Tres Ríos.', '100', NULL),
(8, 'Yemenite', 'Les cafés yéménites sont souvent uniques avec des arômes épicés et un profil terreux. La méthode de séchage au soleil contribue à ces caractéristiques distinctives.', 'Mocha', '100', NULL),
(9, 'Ecuadorian', 'Les cafés équatoriens sont souvent bien équilibrés, avec des notes d\'agrumes et de noix.', 'Galápagos, Loja.', '100', NULL),
(10, 'Honduran', 'Les cafés honduriens sont souvent appréciés pour leur acidité vive et équilibrée. La diversité des microclimats offre des profils de saveurs variés, allant des notes fruitées à celles plus noisettées.', 'Marcala, Copán, La Paz.', '100', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `Produit`
--

CREATE TABLE `Produit` (
  `PR_Id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `PR_Label` varchar(45) NOT NULL,
  `PR_Img` longtext NOT NULL,
  `PR_Description` longtext NOT NULL,
  `PR_Origine` longtext NOT NULL,
  `PR_Robusta` int(100) DEFAULT NULL,
  `PR_Arabica` int(100) DEFAULT NULL,
  `PR_Degustation` longtext NOT NULL,
  `PR_Preparation` longtext NOT NULL,
  `PR_Resume` longtext NOT NULL,
  `PR_Certification` tinyint(4) NOT NULL,
  `PR_Prix` decimal(10,2) NOT NULL,
  `PR_Quantite` int(100) NOT NULL
  `IN_Id` int(11) NOT NULL,
  `PA_Id` int(11) NOT NULL,
  `FO_Id` int(11) NOT NULL,
);

--
-- Déchargement des données de la table `Produit`
--

INSERT INTO `Produit` (`PR_Label`, `PR_Img`,
`PR_Description`, `PR_Origine`, `PR_Robusta`, 
`PR_Arabica`, `PR_Degustation`, `PR_Preparation`, 
`PR_Resume`, `PR_Certification`, `PR_Prix`, 
`IN_Id`, `PA_Id`, `FO_Id`, `PR_Quantite`) VALUES
('Samba Delight Espresso', 'lien de l'image', 
'Description', 'Origine', 70, 30, 'Dégustation', 
'Preparation', 'Résumé', 0, '10.99', 5, 1, 1, 20),


INSERT INTO `Produit` (`PR_Id`, `PR_Label`, `PR_Img`, `PR_Description`, `PR_Origine`, `PR_Robusta`, `PR_Arabica`, `PR_Degustation`, `PR_Preparation`, `PR_Resume`, `PR_Certification`, `PR_Prix`, `IN_Id`, `PA_Id`, `FO_Id`, `PR_Quantite`) VALUES
(1, 'Samba Delight Espresso', 'https://i.postimg.cc/KYpr5hC6/Brasilian-Samba-Delight-Espresso-resultat.webp', 'Samba Delight Espresso est une expérience sensorielle intense qui capture l\'essence passionnante des cafés brésiliens. Issu des vastes plantations de café du Brésil, ce café en grains est spécialement conçu pour les amateurs de sensations fortes.', 'Cultivé au cœur du Brésil, le pays qui détient la réputation mondiale de plus grand producteur de café, chaque grain de Samba Delight Espresso capture l\'énergie vibrante et le caractère riche des terres brésiliennes. La fusion de 70% d\'Arabica et 30% de Robusta crée un équilibre unique, offrant une intensité robuste et des nuances de saveurs complexes.', 70, 30, 'Ce café dévoile une profondeur captivante avec des arômes envoûtants de chocolat et de notes caramélisées. À chaque gorgée, la saveur chocolatée persistante est accompagnée d\'une subtile touche de café noir, créant une expérience gustative audacieuse et mémorable.', 'Samba Delight Espresso s\'épanouit pleinement lorsqu\'il est préparé en espresso, capturant ainsi toute son intensité et ses notes distinctes. Cependant, son caractère polyvalent permet également d\'explorer d\'autres méthodes de préparation pour une expérience caféinée variée.', 'Découvrez l\'âme du Brésil à chaque gorgée avec Samba Delight Espresso, un café qui incarne la passion et l\'audace des terres brésiliennes.', 0, '10.99', 5, 1, 1, 20),
(2, 'Samba Delight Espresso', 'https://i.postimg.cc/QMCcCnV0/Brasilian-Samba-Delight-Espresso-moulu-resultat.webp', 'Samba Delight Espresso est une expérience sensorielle intense qui capture l\'essence passionnante des cafés brésiliens. Issu des vastes plantations de café du Brésil, ce café en grains est spécialement conçu pour les amateurs de sensations fortes.', 'Cultivé au cœur du Brésil, le pays qui détient la réputation mondiale de plus grand producteur de café, chaque grain de Samba Delight Espresso capture l\'énergie vibrante et le caractère riche des terres brésiliennes. La fusion de 70% d\'Arabica et 30% de Robusta crée un équilibre unique, offrant une intensité robuste et des nuances de saveurs complexes.', 70, 30, 'Ce café dévoile une profondeur captivante avec des arômes envoûtants de chocolat et de notes caramélisées. À chaque gorgée, la saveur chocolatée persistante est accompagnée d\'une subtile touche de café noir, créant une expérience gustative audacieuse et mémorable.', 'Samba Delight Espresso s\'épanouit pleinement lorsqu\'il est préparé en espresso, capturant ainsi toute son intensité et ses notes distinctes. Cependant, son caractère polyvalent permet également d\'explorer d\'autres méthodes de préparation pour une expérience caféinée variée.', 'Découvrez l\'âme du Brésil à chaque gorgée avec Samba Delight Espresso, un café qui incarne la passion et l\'audace des terres brésiliennes.', 0, '10.99', 5, 1, 2, 20),
(3, 'Amazon Rainforest Roast', 'https://i.postimg.cc/13HKfqB5/Brasilian-Amazon-Rainforest-Roast-resultat.webp', 'Amazon Rainforest Roast est une perle exquise provenant des terres fertiles du Brésil, spécialement créée pour ceux qui recherchent une expérience caféinée légère et éthique. Ce café soluble, préparé avec 100% d\'Arabica biologique, vous emporte dans un voyage sensoriel à travers la biodiversité luxuriante de la forêt amazonienne.', 'Savourez la pureté de la nature brésilienne avec Amazon Rainforest Roast. Cultivé dans le respect de l\'environnement au cœur de la forêt amazonienne, ce café biologique garantit une expérience qui marie l\'exotisme des saveurs à la conscience écologique.', NULL, 100, 'Les arômes fruités et floraux de ce café créent une symphonie enchanteresse à chaque gorgée. Découvrez des nuances boisées subtiles qui évoquent la fraîcheur de la forêt pluviale, accompagnées de notes de fruits exotiques et de fleurs délicates. La saveur légère et équilibrée enveloppe délicieusement le palais, laissant une empreinte douce et durable.', 'Pour un moment de pur plaisir, savourez Amazon Rainforest Roast en préparant une tasse instantanée. Cette méthode de préparation rapide préserve la fraîcheur des arômes et des saveurs, offrant une expérience caféinée délicate à tout moment de la journée.', 'Laissez-vous transporter par la magie de la forêt amazonienne avec chaque gorgée de Amazon Rainforest Roast, un café qui vous connecte à la nature tout en offrant une expérience caféinée exceptionnelle.', 1, '12.99', 1, 1, 1, 20),
(4, 'Amazon Rainforest Roast', 'https://i.postimg.cc/15DB1TNF/Brasilian-Amazon-Rainforest-Roast-moulu-resultat.webp', 'Amazon Rainforest Roast est une perle exquise provenant des terres fertiles du Brésil, spécialement créée pour ceux qui recherchent une expérience caféinée légère et éthique. Ce café soluble, préparé avec 100% d\'Arabica biologique, vous emporte dans un voyage sensoriel à travers la biodiversité luxuriante de la forêt amazonienne.', 'Savourez la pureté de la nature brésilienne avec Amazon Rainforest Roast. Cultivé dans le respect de l\'environnement au cœur de la forêt amazonienne, ce café biologique garantit une expérience qui marie l\'exotisme des saveurs à la conscience écologique.', NULL, 100, 'Les arômes fruités et floraux de ce café créent une symphonie enchanteresse à chaque gorgée. Découvrez des nuances boisées subtiles qui évoquent la fraîcheur de la forêt pluviale, accompagnées de notes de fruits exotiques et de fleurs délicates. La saveur légère et équilibrée enveloppe délicieusement le palais, laissant une empreinte douce et durable.', 'Pour un moment de pur plaisir, savourez Amazon Rainforest Roast en préparant une tasse instantanée. Cette méthode de préparation rapide préserve la fraîcheur des arômes et des saveurs, offrant une expérience caféinée délicate à tout moment de la journée.', 'Laissez-vous transporter par la magie de la forêt amazonienne avec chaque gorgée de Amazon Rainforest Roast, un café qui vous connecte à la nature tout en offrant une expérience caféinée exceptionnelle.', 1, '10.99', 1, 1, 2, 20),
(5, 'Amazon Rainforest Roast', 'https://i.postimg.cc/GtyQ2g7Z/Brasilian-Amazon-Rainforest-Roast-Capsule-resultat.webp', 'Amazon Rainforest Roast est une perle exquise provenant des terres fertiles du Brésil, spécialement créée pour ceux qui recherchent une expérience caféinée légère et éthique. Ce café soluble, préparé avec 100% d\'Arabica biologique, vous emporte dans un voyage sensoriel à travers la biodiversité luxuriante de la forêt amazonienne.', 'Savourez la pureté de la nature brésilienne avec Amazon Rainforest Roast. Cultivé dans le respect de l\'environnement au cœur de la forêt amazonienne, ce café biologique garantit une expérience qui marie l\'exotisme des saveurs à la conscience écologique.', NULL, 100, 'Les arômes fruités et floraux de ce café créent une symphonie enchanteresse à chaque gorgée. Découvrez des nuances boisées subtiles qui évoquent la fraîcheur de la forêt pluviale, accompagnées de notes de fruits exotiques et de fleurs délicates. La saveur légère et équilibrée enveloppe délicieusement le palais, laissant une empreinte douce et durable.', 'Pour un moment de pur plaisir, savourez Amazon Rainforest Roast en préparant une tasse instantanée. Cette méthode de préparation rapide préserve la fraîcheur des arômes et des saveurs, offrant une expérience caféinée délicate à tout moment de la journée.', 'Laissez-vous transporter par la magie de la forêt amazonienne avec chaque gorgée de Amazon Rainforest Roast, un café qui vous connecte à la nature tout en offrant une expérience caféinée exceptionnelle.', 1, '13.99', 1, 1, 3, 20),
(6, 'Vietnamese Velvet', 'https://i.postimg.cc/prs2mkmJ/Vietnamese-Vietnamese-Velvet-resultat.webp', 'Vietnamese Velvet incarne la richesse des plantations de café du Vietnam, offrant une expérience intense et robuste pour les amateurs de cafés forts. Ce café en grains, composé de 20% d\'Arabica et de 80% de Robusta, dévoile des arômes profonds et des saveurs audacieuses, reflétant la diversité des terres vietnamiennes.', 'Les collines verdoyantes du Vietnam sont le berceau de Vietnamese Velvet, où les grains de café Arabica et Robusta se mélangent pour créer une tasse d\'une intensité inégalée. Cultivé avec soin, ce café incarne la robustesse et l\'authenticité du café vietnamien.', 80, 20, 'Dès la première gorgée, les arômes de chocolat envoûtant et les notes épicées captivent les sens. L\'équilibre unique entre les grains d\'Arabica et de Robusta apporte une profondeur de saveurs, avec des nuances riches de chocolat et une pointe subtile d\'épices qui persiste en bouche.', 'Pour apprécier pleinement la puissance de Vietnamese Velvet, optez pour une préparation en grains. Un café fort qui s\'exprime pleinement en espresso, mais qui peut également être apprécié dans d\'autres méthodes de préparation pour une expérience caféinée audacieuse.', 'Plongez dans l\'authenticité vietnamienne avec Vietnamese Velvet, un café qui vous transporte directement dans les paysages pittoresques et les saveurs riches du Vietnam.', 0, '10.99', 3, 2, 1, 20),
(7, 'Vietnamese Velvet', 'https://i.postimg.cc/XJcNbn3h/Vietnamese-Vietnamese-Velvet-moulu-resultat.webp', 'Vietnamese Velvet incarne la richesse des plantations de café du Vietnam, offrant une expérience intense et robuste pour les amateurs de cafés forts. Ce café en grains, composé de 20% d\'Arabica et de 80% de Robusta, dévoile des arômes profonds et des saveurs audacieuses, reflétant la diversité des terres vietnamiennes.', 'Les collines verdoyantes du Vietnam sont le berceau de Vietnamese Velvet, où les grains de café Arabica et Robusta se mélangent pour créer une tasse d\'une intensité inégalée. Cultivé avec soin, ce café incarne la robustesse et l\'authenticité du café vietnamien.', 80, 20, 'Dès la première gorgée, les arômes de chocolat envoûtant et les notes épicées captivent les sens. L\'équilibre unique entre les grains d\'Arabica et de Robusta apporte une profondeur de saveurs, avec des nuances riches de chocolat et une pointe subtile d\'épices qui persiste en bouche.', 'Pour apprécier pleinement la puissance de Vietnamese Velvet, optez pour une préparation en grains. Un café fort qui s\'exprime pleinement en espresso, mais qui peut également être apprécié dans d\'autres méthodes de préparation pour une expérience caféinée audacieuse.', 'Plongez dans l\'authenticité vietnamienne avec Vietnamese Velvet, un café qui vous transporte directement dans les paysages pittoresques et les saveurs riches du Vietnam.', 0, '10.99', 3, 2, 2, 20),
(8, 'Mekong Delta Velvet', 'https://i.postimg.cc/1tPPMb6K/Vietnamese-Mekong-Delta-Velvet-resultat.webp', 'Mekong Delta Velvet est une expérience caféinée captivante qui plonge au cœur des rivières serpentines et des collines verdoyantes du Delta du Mékong au Vietnam. Avec une intensité audacieuse, ce café en grains, composé de 10% d\'Arabica et de 90% de Robusta, offre des arômes chocolatés et épicés, accompagnés de nuances noires/fumées qui évoquent la robustesse de la région.', 'Les plantations de café du Delta du Mékong, baignées de soleil tropical, donnent naissance à Mekong Delta Velvet. Ce café incarne la force et la vitalité du café vietnamien, capturant l\'essence même de la région.', 90, 10, 'Dès la première gorgée, les arômes riches d\'épices transportent les sens vers les marchés animés du Vietnam. Les notes fumées ajoutent une profondeur supplémentaire à cette expérience caféinée, créant une symphonie complexe et audacieuse qui perdure en bouche.', 'Mekong Delta Velvet révèle toute sa splendeur lorsqu\'il est préparé en grains. Que ce soit en espresso pour une intensité maximale ou dans d\'autres méthodes de préparation, ce café offre une expérience riche et mémorable.', 'Explorez la puissance du Delta du Mékong avec Mekong Delta Velvet, un café qui vous emmène au cœur du Vietnam à chaque gorgée, révélant la force et la passion de cette région caféicole unique.', 0, '10.99', 3, 2, 1, 20),
(9, 'Mekong Delta Velvet', 'https://i.postimg.cc/mgtrHxNz/Vietnamese-Mekong-Delta-Velvet-moulu-resultat.webp', 'Mekong Delta Velvet est une expérience caféinée captivante qui plonge au cœur des rivières serpentines et des collines verdoyantes du Delta du Mékong au Vietnam. Avec une intensité audacieuse, ce café en grains, composé de 10% d\'Arabica et de 90% de Robusta, offre des arômes chocolatés et épicés, accompagnés de nuances noires/fumées qui évoquent la robustesse de la région.', 'Les plantations de café du Delta du Mékong, baignées de soleil tropical, donnent naissance à Mekong Delta Velvet. Ce café incarne la force et la vitalité du café vietnamien, capturant l\'essence même de la région.', 90, 10, 'Dès la première gorgée, les arômes riches d\'épices transportent les sens vers les marchés animés du Vietnam. Les notes fumées ajoutent une profondeur supplémentaire à cette expérience caféinée, créant une symphonie complexe et audacieuse qui perdure en bouche.', 'Mekong Delta Velvet révèle toute sa splendeur lorsqu\'il est préparé en grains. Que ce soit en espresso pour une intensité maximale ou dans d\'autres méthodes de préparation, ce café offre une expérience riche et mémorable.', 'Explorez la puissance du Delta du Mékong avec Mekong Delta Velvet, un café qui vous emmène au cœur du Vietnam à chaque gorgée, révélant la force et la passion de cette région caféicole unique.', 0, '10.99', 3, 2, 2, 20),
(10, 'Saigon Street Blend', 'https://i.postimg.cc/mgtrHxNz/Vietnamese-Mekong-Delta-Velvet-moulu-resultat.webp', 'Saigon Street Blend est une délicieuse rencontre avec l\'essence animée des rues de Saïgon au Vietnam, capturée dans une capsule de café. Avec une intensité moyenne, cette fusion équilibrée de 30% d\'Arabica et 70% de Robusta, certifiée bio, offre des arômes de noisette et un équilibre subtil avec des notes herbacées/boisées.', 'Saigon Street Blend puise son inspiration directement des ruelles animées de Saïgon, où l\'énergie de la ville rencontre la tradition du café vietnamien. Ce mélange incarne l\'équilibre délicat entre les variétés Arabica et Robusta cultivées dans les hauteurs du pays.', 70, 30, 'Chaque capsule dévoile des arômes de noisette envoûtants, créant une expérience olfactive irrésistible. Les notes équilibrées s\'accompagnent d\'une subtile touche boisée, offrant une palette de saveurs qui évoluent harmonieusement à chaque gorgée.', 'Saigon Street Blend se prête parfaitement à une préparation en capsules, offrant une expérience caféinée pratique et pleine de saveurs. Parfait pour ceux qui cherchent l\'équilibre entre intensité et subtilité.', 'Plongez dans l\'ambiance vibrante de Saïgon avec Saigon Street Blend, un café qui transporte l\'essence de la ville dans chaque tasse, vous invitant à découvrir la richesse du café vietnamien.', 1, '13.99', 2, 2, 1, 20),
(11, 'Saigon Street Blend', 'https://i.postimg.cc/nhghKd0d/Vietnamese-Saigon-Street-Blend-moulu-resultat.webp', 'Saigon Street Blend est une délicieuse rencontre avec l\'essence animée des rues de Saïgon au Vietnam, capturée dans une capsule de café. Avec une intensité moyenne, cette fusion équilibrée de 30% d\'Arabica et 70% de Robusta, certifiée bio, offre des arômes de noisette et un équilibre subtil avec des notes herbacées/boisées.', 'Saigon Street Blend puise son inspiration directement des ruelles animées de Saïgon, où l\'énergie de la ville rencontre la tradition du café vietnamien. Ce mélange incarne l\'équilibre délicat entre les variétés Arabica et Robusta cultivées dans les hauteurs du pays.', 70, 30, 'Chaque capsule dévoile des arômes de noisette envoûtants, créant une expérience olfactive irrésistible. Les notes équilibrées s\'accompagnent d\'une subtile touche boisée, offrant une palette de saveurs qui évoluent harmonieusement à chaque gorgée.', 'Saigon Street Blend se prête parfaitement à une préparation en capsules, offrant une expérience caféinée pratique et pleine de saveurs. Parfait pour ceux qui cherchent l\'équilibre entre intensité et subtilité.', 'Plongez dans l\'ambiance vibrante de Saïgon avec Saigon Street Blend, un café qui transporte l\'essence de la ville dans chaque tasse, vous invitant à découvrir la richesse du café vietnamien.', 1, '12.99', 2, 2, 2, 20),
(12, 'Saigon Street Blend', 'https://i.postimg.cc/tg6CBhc9/Vietnamese-Saigon-Street-Blend-Capsule-resultat.webp', 'Saigon Street Blend est une délicieuse rencontre avec l\'essence animée des rues de Saïgon au Vietnam, capturée dans une capsule de café. Avec une intensité moyenne, cette fusion équilibrée de 30% d\'Arabica et 70% de Robusta, certifiée bio, offre des arômes de noisette et un équilibre subtil avec des notes herbacées/boisées.', 'Saigon Street Blend puise son inspiration directement des ruelles animées de Saïgon, où l\'énergie de la ville rencontre la tradition du café vietnamien. Ce mélange incarne l\'équilibre délicat entre les variétés Arabica et Robusta cultivées dans les hauteurs du pays.', 70, 30, 'Chaque capsule dévoile des arômes de noisette envoûtants, créant une expérience olfactive irrésistible. Les notes équilibrées s\'accompagnent d\'une subtile touche boisée, offrant une palette de saveurs qui évoluent harmonieusement à chaque gorgée.', 'Saigon Street Blend se prête parfaitement à une préparation en capsules, offrant une expérience caféinée pratique et pleine de saveurs. Parfait pour ceux qui cherchent l\'équilibre entre intensité et subtilité.', 'Plongez dans l\'ambiance vibrante de Saïgon avec Saigon Street Blend, un café qui transporte l\'essence de la ville dans chaque tasse, vous invitant à découvrir la richesse du café vietnamien.', 1, '13.99', 2, 2, 3, 20),
(13, 'Colombian Carnival', 'https://i.postimg.cc/fL372gNJ/Colombian-Colombian-Carnival-resultat.webp', 'Colombian Carnival est une célébration gustative directement inspirée des riches terres colombiennes, où la passion pour le café atteint des sommets. Pré-moulu avec 100% d\'Arabica certifié bio, ce café de moyenne intensité offre des arômes chocolatés et fruités, ainsi que des saveurs somptueuses de chocolat, de fruits et une touche décadente de vanille/caramel.', 'Les plantations colombiennes, baignées de soleil et caressées par des vents doux, donnent vie à Colombian Carnival. Ce café incarne l\'élégance de l\'Arabica colombien, cultivé dans le respect de la biodiversité.', NULL, 100, 'Dès la première gorgée, les arômes envoûtants de chocolat et de fruits dansent sur le palais. Les notes délicates de vanille ajoutent une touche sucrée et veloutée, créant une expérience caféinée luxueuse et équilibrée.', 'Colombian Carnival révèle tout son éclat lorsqu\'il est moulu. Idéal pour les amateurs de café de qualité, cette option pratique offre une expérience raffinée sans compromis.', 'Plongez dans la fête des saveurs avec Colombian Carnival, un café qui capture l\'essence même de la Colombie, invitant à une célébration perpétuelle de la délicatesse et de l\'arôme du café colombien.', 1, '12.99', 2, 3, 1, 20),
(14, 'Colombian Carnival', 'https://i.postimg.cc/DZtrtdv5/Colombian-Colombian-Carnival-moulu-resultat.webp', 'Colombian Carnival est une célébration gustative directement inspirée des riches terres colombiennes, où la passion pour le café atteint des sommets. Pré-moulu avec 100% d\'Arabica certifié bio, ce café de moyenne intensité offre des arômes chocolatés et fruités, ainsi que des saveurs somptueuses de chocolat, de fruits et une touche décadente de vanille/caramel.', 'Les plantations colombiennes, baignées de soleil et caressées par des vents doux, donnent vie à Colombian Carnival. Ce café incarne l\'élégance de l\'Arabica colombien, cultivé dans le respect de la biodiversité.', NULL, 100, 'Dès la première gorgée, les arômes envoûtants de chocolat et de fruits dansent sur le palais. Les notes délicates de vanille ajoutent une touche sucrée et veloutée, créant une expérience caféinée luxueuse et équilibrée.', 'Colombian Carnival révèle tout son éclat lorsqu\'il est moulu. Idéal pour les amateurs de café de qualité, cette option pratique offre une expérience raffinée sans compromis.', 'Plongez dans la fête des saveurs avec Colombian Carnival, un café qui capture l\'essence même de la Colombie, invitant à une célébration perpétuelle de la délicatesse et de l\'arôme du café colombien.', 1, '12.99', 2, 3, 2, 20),
(15, 'Colombian Carnival', 'https://i.postimg.cc/jqwvZCxZ/Colombian-Colombian-Carnival-Capsule-resultat.webp', 'Colombian Carnival est une célébration gustative directement inspirée des riches terres colombiennes, où la passion pour le café atteint des sommets. Pré-moulu avec 100% d\'Arabica certifié bio, ce café de moyenne intensité offre des arômes chocolatés et fruités, ainsi que des saveurs somptueuses de chocolat, de fruits et une touche décadente de vanille/caramel.', 'Les plantations colombiennes, baignées de soleil et caressées par des vents doux, donnent vie à Colombian Carnival. Ce café incarne l\'élégance de l\'Arabica colombien, cultivé dans le respect de la biodiversité.', NULL, 100, 'Dès la première gorgée, les arômes envoûtants de chocolat et de fruits dansent sur le palais. Les notes délicates de vanille ajoutent une touche sucrée et veloutée, créant une expérience caféinée luxueuse et équilibrée.', 'Colombian Carnival révèle tout son éclat lorsqu\'il est moulu. Idéal pour les amateurs de café de qualité, cette option pratique offre une expérience raffinée sans compromis.', 'Plongez dans la fête des saveurs avec Colombian Carnival, un café qui capture l\'essence même de la Colombie, invitant à une célébration perpétuelle de la délicatesse et de l\'arôme du café colombien.', 1, '13.99', 2, 3, 3, 20),
(16, 'Colombian Elegance', 'https://i.postimg.cc/y6ZX05jG/Colombian-Colombian-Elegance-resultat.webp', 'Colombian Elegance incarne la sophistication des cafés colombiens dans une tasse de café moulu de moyenne intensité. Composé à 100% d\'Arabica, ce café non bio offre des arômes fruités et chocolatés, avec des saveurs délicates qui captivent les sens.', 'Les collines colombiennes, riches en biodiversité, sont le berceau de Colombian Elegance. Ce café Arabica de première qualité est cultivé avec dévouement, capturant la quintessence des terres colombiennes.', NULL, 100, 'À chaque gorgée, les arômes envoûtants de fruits et de chocolat dansent sur le palais, créant une expérience sensorielle délicieusement équilibrée. Les nuances fruitées se mêlent harmonieusement aux notes riches de chocolat, offrant une dégustation élégante et raffinée.', 'Colombian Elegance s\'apprécie pleinement avec une préparation en café moulu. La méthode d\'infusion, que ce soit en cafetière filtre ou en méthode alternative, met en valeur la finesse de ce café, faisant ressortir toute son élégance.', 'Découvrez la sophistication de Colombian Elegance, un café qui vous emmène au cœur des plantations colombiennes, où la délicatesse et la richesse des saveurs créent une expérience caféinée d\'une élégance incomparable.', 0, '10.99', 2, 3, 1, 20),
(17, 'Colombian Elegance', 'https://i.postimg.cc/fRZKzKxr/Colombian-Colombian-Elegance-moulu-resultat.webp', 'Colombian Elegance incarne la sophistication des cafés colombiens dans une tasse de café moulu de moyenne intensité. Composé à 100% d\'Arabica, ce café non bio offre des arômes fruités et chocolatés, avec des saveurs délicates qui captivent les sens.', 'Les collines colombiennes, riches en biodiversité, sont le berceau de Colombian Elegance. Ce café Arabica de première qualité est cultivé avec dévouement, capturant la quintessence des terres colombiennes.', NULL, 100, 'À chaque gorgée, les arômes envoûtants de fruits et de chocolat dansent sur le palais, créant une expérience sensorielle délicieusement équilibrée. Les nuances fruitées se mêlent harmonieusement aux notes riches de chocolat, offrant une dégustation élégante et raffinée.', 'Colombian Elegance s\'apprécie pleinement avec une préparation en café moulu. La méthode d\'infusion, que ce soit en cafetière filtre ou en méthode alternative, met en valeur la finesse de ce café, faisant ressortir toute son élégance.', 'Découvrez la sophistication de Colombian Elegance, un café qui vous emmène au cœur des plantations colombiennes, où la délicatesse et la richesse des saveurs créent une expérience caféinée d\'une élégance incomparable.', 0, '10.99', 2, 3, 2, 20),
(18, 'Andean Symphony', 'https://i.postimg.cc/9fQYTQgP/Colombian-Andean-Symphony-resultat.webp', 'Andean Symphony est une composition sensorielle puissante, capturant l\'essence des majestueuses Andes colombiennes. En grains et certifié bio, ce café à l\'intensité forte est exclusivement composé de 100% d\'Arabica colombien, offrant des arômes envoûtants de noisette et de floral, avec des nuances herbacées/boisées.', 'Né dans les hauteurs des Andes colombiennes, Andean Symphony tire son caractère unique des conditions climatiques exceptionnelles de la région. Le café Arabica, cultivé de manière biologique, capture la beauté naturelle de la cordillère.', NULL, 100, 'À chaque gorgée, ce café offre une symphonie complexe d\'arômes de noisette. Les nuances herbacées ajoutent une profondeur supplémentaire, créant une expérience gustative harmonieuse et exaltante.', 'Andean Symphony se prête parfaitement à une préparation en grains. Que ce soit en espresso, en cafetière à piston ou en méthode alternative, ce café fort et biologique offre une expérience caféinée exceptionnelle.', 'Plongez dans la symphonie des Andes avec Andean Symphony, un café qui transporte les amateurs de café vers les sommets majestueux de la Colombie, où la puissance de la nature se marie à la finesse du café Arabica.', 1, '14.99', 3, 3, 1, 20),
(19, 'Andean Symphony', 'https://i.postimg.cc/1RkBTP4P/Colombian-Andean-Symphony-moulu-resultat.webp', 'Andean Symphony est une composition sensorielle puissante, capturant l\'essence des majestueuses Andes colombiennes. En grains et certifié bio, ce café à l\'intensité forte est exclusivement composé de 100% d\'Arabica colombien, offrant des arômes envoûtants de noisette et de floral, avec des nuances herbacées/boisées.', 'Né dans les hauteurs des Andes colombiennes, Andean Symphony tire son caractère unique des conditions climatiques exceptionnelles de la région. Le café Arabica, cultivé de manière biologique, capture la beauté naturelle de la cordillère.', NULL, 100, 'À chaque gorgée, ce café offre une symphonie complexe d\'arômes de noisette. Les nuances herbacées ajoutent une profondeur supplémentaire, créant une expérience gustative harmonieuse et exaltante.', 'Andean Symphony se prête parfaitement à une préparation en grains. Que ce soit en espresso, en cafetière à piston ou en méthode alternative, ce café fort et biologique offre une expérience caféinée exceptionnelle.', 'Plongez dans la symphonie des Andes avec Andean Symphony, un café qui transporte les amateurs de café vers les sommets majestueux de la Colombie, où la puissance de la nature se marie à la finesse du café Arabica.', 1, '14.99', 3, 3, 2, 20),
(20, 'Java Joy', 'https://i.postimg.cc/fyDLtJBD/Indonesian-Java-Joy-resultat.webp', 'Java Joy est une aventure gustative captivante directement inspirée des plantations indonésiennes, où le mariage du chocolaté et de l\'épicé crée une symphonie de saveurs mémorables. En grains et avec une intensité audacieuse, ce café non bio est un mélange unique de 10% d\'Arabica et 90% de Robusta, offrant des arômes riches de chocolaté et d\'épicé, avec des notes herbacées/boisées.', 'Java Joy puise son inspiration des plantations indonésiennes, où les conditions idéales de croissance confèrent au café un caractère unique. Le mélange de 10% d\'Arabica et 90% de Robusta crée une expérience gustative robuste et mémorable.', 90, 10, 'Dès la première gorgée, Java Joy révèle des arômes riches de chocolaté et d\'épicé, créant une expérience gustative intense. Les notes boisées ajoutent une profondeur supplémentaire, offrant une aventure envoûtante pour les papilles.', 'Java Joy est idéal pour les amateurs de cafés forts. Utilisez-le en grains pour préparer un espresso riche ou un café filtre intense. Ce mélange unique de grains Arabica et Robusta promet une expérience caféinée qui stimule les sens.', 'Découvrez la joie intense de Java Joy, un café qui transporte les amoureux du café vers les plantations indonésiennes, où la robustesse des saveurs se marie à la magie du chocolaté et de l\'épicé.', 0, '10.99', 3, 4, 1, 20),
(21, 'Java Joy', 'https://i.postimg.cc/0NKrLgzR/Indonesian-Java-Joy-moulu-resultat.webp', 'Java Joy est une aventure gustative captivante directement inspirée des plantations indonésiennes, où le mariage du chocolaté et de l\'épicé crée une symphonie de saveurs mémorables. En grains et avec une intensité audacieuse, ce café non bio est un mélange unique de 10% d\'Arabica et 90% de Robusta, offrant des arômes riches de chocolaté et d\'épicé, avec des notes herbacées/boisées.', 'Java Joy puise son inspiration des plantations indonésiennes, où les conditions idéales de croissance confèrent au café un caractère unique. Le mélange de 10% d\'Arabica et 90% de Robusta crée une expérience gustative robuste et mémorable.', 90, 10, 'Dès la première gorgée, Java Joy révèle des arômes riches de chocolaté et d\'épicé, créant une expérience gustative intense. Les notes boisées ajoutent une profondeur supplémentaire, offrant une aventure envoûtante pour les papilles.', 'Java Joy est idéal pour les amateurs de cafés forts. Utilisez-le en grains pour préparer un espresso riche ou un café filtre intense. Ce mélange unique de grains Arabica et Robusta promet une expérience caféinée qui stimule les sens.', 'Découvrez la joie intense de Java Joy, un café qui transporte les amoureux du café vers les plantations indonésiennes, où la robustesse des saveurs se marie à la magie du chocolaté et de l\'épicé.', 0, '10.99', 3, 4, 2, 20),
(22, 'Java Joy', 'https://i.postimg.cc/FHB7WFsV/Indonesian-Java-Joy-Capsule-resultat.webp', 'Java Joy est une aventure gustative captivante directement inspirée des plantations indonésiennes, où le mariage du chocolaté et de l\'épicé crée une symphonie de saveurs mémorables. En grains et avec une intensité audacieuse, ce café non bio est un mélange unique de 10% d\'Arabica et 90% de Robusta, offrant des arômes riches de chocolaté et d\'épicé, avec des notes herbacées/boisées.', 'Java Joy puise son inspiration des plantations indonésiennes, où les conditions idéales de croissance confèrent au café un caractère unique. Le mélange de 10% d\'Arabica et 90% de Robusta crée une expérience gustative robuste et mémorable.', 90, 10, 'Dès la première gorgée, Java Joy révèle des arômes riches de chocolaté et d\'épicé, créant une expérience gustative intense. Les notes boisées ajoutent une profondeur supplémentaire, offrant une aventure envoûtante pour les papilles.', 'Java Joy est idéal pour les amateurs de cafés forts. Utilisez-le en grains pour préparer un espresso riche ou un café filtre intense. Ce mélange unique de grains Arabica et Robusta promet une expérience caféinée qui stimule les sens.', 'Découvrez la joie intense de Java Joy, un café qui transporte les amoureux du café vers les plantations indonésiennes, où la robustesse des saveurs se marie à la magie du chocolaté et de l\'épicé.', 0, '11.99', 3, 4, 3, 20),
(23, 'Ethiopian Euphoria', 'https://i.postimg.cc/8zP6XndN/Ethiopian-Ethiopian-Euphoria-resultat.webp', 'Ethiopian Euphoria incarne la pure exaltation des saveurs éthiopiennes dans chaque capsule. Certifié bio et proposant une intensité forte, ce café en capsules 100% Arabica offre une expérience sensorielle exceptionnelle avec des arômes fruités et épicés, créant une véritable euphorie en tasse.', 'Ethiopian Euphoria puise ses racines dans les hauts plateaux d\'Éthiopie, berceau du café arabica. La certification bio garantit une culture respectueuse de l\'environnement, préservant l\'authenticité des saveurs éthiopiennes.', NULL, 100, 'À chaque gorgée, ce café révèle des arômes délicats de fruits et d\'épices qui éveillent les sens. Les notes fruitées et épicées créent une expérience gustative éthiopienne authentique, une véritable euphorie pour les amateurs de café.', 'Ethiopian Euphoria s\'apprécie pleinement dans une préparation en capsules. La méthode d\'infusion garantit une extraction optimale des saveurs, offrant ainsi une expérience caféinée mémorable.', 'Laissez-vous emporter par l\'euphorie éthiopienne avec Ethiopian Euphoria, un café bio en capsules qui capture l\'essence même des terres éthiopiennes, où chaque gorgée est une célébration des saveurs exquises du café arabica.', 1, '12.99', 5, 5, 1, 20),
(24, 'Ethiopian Euphoria', 'https://i.postimg.cc/Y0RS1Msg/Ethiopian-Ethiopian-Euphoria-moulu-resultat.webp', 'Ethiopian Euphoria incarne la pure exaltation des saveurs éthiopiennes dans chaque capsule. Certifié bio et proposant une intensité forte, ce café en capsules 100% Arabica offre une expérience sensorielle exceptionnelle avec des arômes fruités et épicés, créant une véritable euphorie en tasse.', 'Ethiopian Euphoria puise ses racines dans les hauts plateaux d\'Éthiopie, berceau du café arabica. La certification bio garantit une culture respectueuse de l\'environnement, préservant l\'authenticité des saveurs éthiopiennes.', NULL, 100, 'À chaque gorgée, ce café révèle des arômes délicats de fruits et d\'épices qui éveillent les sens. Les notes fruitées et épicées créent une expérience gustative éthiopienne authentique, une véritable euphorie pour les amateurs de café.', 'Ethiopian Euphoria s\'apprécie pleinement dans une préparation en capsules. La méthode d\'infusion garantit une extraction optimale des saveurs, offrant ainsi une expérience caféinée mémorable.', 'Laissez-vous emporter par l\'euphorie éthiopienne avec Ethiopian Euphoria, un café bio en capsules qui capture l\'essence même des terres éthiopiennes, où chaque gorgée est une célébration des saveurs exquises du café arabica.', 1, '12.99', 5, 5, 2, 20),
(25, 'Ethiopian Highlands Euphoria', 'https://i.postimg.cc/xdBNCfw1/Ethiopian-Ethiopian-Highlands-Euphoria-resultat.webp', 'Ethiopian Highlands Euphoria est une symphonie gustative capturant l\'essence des hautes terres éthiopiennes. En grains, certifié bio et d\'intensité forte, ce café 100% Arabica offre une expérience sensorielle exceptionnelle avec des arômes fruités et floraux, créant une euphorie délicate en chaque tasse.', 'Ethiopian Highlands Euphoria prend racine dans les montagnes majestueuses d\'Éthiopie, berceau du café arabica. La certification bio souligne l\'engagement envers des pratiques agricoles durables, préservant ainsi la richesse des arômes éthiopiens.', NULL, 100, 'À chaque gorgée, ce café dévoile des arômes délicats de fruits et de fleurs, créant une expérience gustative éthiopienne authentique. Les notes fruitées et florales s\'harmonisent pour offrir une euphorie subtile, une véritable célébration des saveurs du café arabica.', 'Ethiopian Highlands Euphoria est idéal pour une préparation en grains. Que ce soit en espresso, en cafetière à piston ou en méthode alternative, ce café fort et bio garantit une expérience caféinée exceptionnelle.', 'Découvrez l\'euphorie des hauts plateaux éthiopiens avec Ethiopian Highlands Euphoria, un café qui transporte les amateurs de café vers des sommets gustatifs inégalés, où la pureté des saveurs arabica est célébrée avec chaque gorgée.', 1, '14.99', 5, 5, 1, 20),
(26, 'Ethiopian Highlands Euphoria', 'https://i.postimg.cc/m2S9wGHm/Ethiopian-Ethiopian-Highlands-Euphoria-moulu-resultat.webp', 'Ethiopian Highlands Euphoria est une symphonie gustative capturant l\'essence des hautes terres éthiopiennes. En grains, certifié bio et d\'intensité forte, ce café 100% Arabica offre une expérience sensorielle exceptionnelle avec des arômes fruités et floraux, créant une euphorie délicate en chaque tasse.', 'Ethiopian Highlands Euphoria prend racine dans les montagnes majestueuses d\'Éthiopie, berceau du café arabica. La certification bio souligne l\'engagement envers des pratiques agricoles durables, préservant ainsi la richesse des arômes éthiopiens.', NULL, 100, 'À chaque gorgée, ce café dévoile des arômes délicats de fruits et de fleurs, créant une expérience gustative éthiopienne authentique. Les notes fruitées et florales s\'harmonisent pour offrir une euphorie subtile, une véritable célébration des saveurs du café arabica.', 'Ethiopian Highlands Euphoria est idéal pour une préparation en grains. Que ce soit en espresso, en cafetière à piston ou en méthode alternative, ce café fort et bio garantit une expérience caféinée exceptionnelle.', 'Découvrez l\'euphorie des hauts plateaux éthiopiens avec Ethiopian Highlands Euphoria, un café qui transporte les amateurs de café vers des sommets gustatifs inégalés, où la pureté des saveurs arabica est célébrée avec chaque gorgée.', 1, '14.99', 5, 5, 2, 20),
(27, 'Sidamo Sunrise Blend', 'https://i.postimg.cc/W3rFJRV6/Ethiopian-Sidamo-Sunrise-Blend-resultat.webp', 'Sidamo Sunrise Blend est une aube sensorielle dans chaque capsule, capturant l\'équilibre parfait des saveurs éthiopiennes. D\'intensité moyenne, cette création en capsules offre une expérience équilibrée et épicée, avec des arômes herbacés/boisés, invitant à une aventure gustative au cœur de l\'Éthiopie.', 'Sidamo Sunrise Blend tire son inspiration des hauts plateaux de Sidamo en Éthiopie, réputés pour leurs cafés arabica de qualité exceptionnelle. Bien que non bio, ce café incarne la richesse de la région.', NULL, 100, 'À chaque dégustation, ce café révèle un équilibre délicat entre des saveurs épicés et des arômes boisées. Ces dernières notes ajoutent une profondeur, créant une expérience gustative mémorable.', 'Sidamo Sunrise Blend s\'apprécie pleinement dans une préparation en capsules. La méthode d\'infusion garantit une extraction optimale des saveurs, offrant ainsi une expérience caféinée éthiopienne équilibrée.', 'Explorez l\'aube éthiopienne avec Sidamo Sunrise Blend, un café en capsules qui capture la magie des matins ensoleillés à Sidamo, où l\'équilibre des saveurs et la touche épicée vous invitent à démarrer la journée avec un café d\'exception.', 0, '13.99', 1, 5, 1, 20),
(28, 'Sidamo Sunrise Blend', 'https://i.postimg.cc/6Q8Gt21P/Ethiopian-Sidamo-Sunrise-Blend-moulu-resultat.webp', 'Sidamo Sunrise Blend est une aube sensorielle dans chaque capsule, capturant l\'équilibre parfait des saveurs éthiopiennes. D\'intensité moyenne, cette création en capsules offre une expérience équilibrée et épicée, avec des arômes herbacés/boisés, invitant à une aventure gustative au cœur de l\'Éthiopie.', 'Sidamo Sunrise Blend tire son inspiration des hauts plateaux de Sidamo en Éthiopie, réputés pour leurs cafés arabica de qualité exceptionnelle. Bien que non bio, ce café incarne la richesse de la région.', NULL, 100, 'À chaque dégustation, ce café révèle un équilibre délicat entre des saveurs épicés et des arômes boisées. Ces dernières notes ajoutent une profondeur, créant une expérience gustative mémorable.', 'Sidamo Sunrise Blend s\'apprécie pleinement dans une préparation en capsules. La méthode d\'infusion garantit une extraction optimale des saveurs, offrant ainsi une expérience caféinée éthiopienne équilibrée.', 'Explorez l\'aube éthiopienne avec Sidamo Sunrise Blend, un café en capsules qui capture la magie des matins ensoleillés à Sidamo, où l\'équilibre des saveurs et la touche épicée vous invitent à démarrer la journée avec un café d\'exception.', 0, '13.99', 1, 5, 2, 20),
(29, 'Sidamo Sunrise Blend', 'https://i.postimg.cc/jSgJpQvN/Ethiopian-Sidamo-Sunrise-Blend-Capsule-resultat.webp', 'Sidamo Sunrise Blend est une aube sensorielle dans chaque capsule, capturant l\'équilibre parfait des saveurs éthiopiennes. D\'intensité moyenne, cette création en capsules offre une expérience équilibrée et épicée, avec des arômes herbacés/boisés, invitant à une aventure gustative au cœur de l\'Éthiopie.', 'Sidamo Sunrise Blend tire son inspiration des hauts plateaux de Sidamo en Éthiopie, réputés pour leurs cafés arabica de qualité exceptionnelle. Bien que non bio, ce café incarne la richesse de la région.', NULL, 100, 'À chaque dégustation, ce café révèle un équilibre délicat entre des saveurs épicés et des arômes boisées. Ces dernières notes ajoutent une profondeur, créant une expérience gustative mémorable.', 'Sidamo Sunrise Blend s\'apprécie pleinement dans une préparation en capsules. La méthode d\'infusion garantit une extraction optimale des saveurs, offrant ainsi une expérience caféinée éthiopienne équilibrée.', 'Explorez l\'aube éthiopienne avec Sidamo Sunrise Blend, un café en capsules qui capture la magie des matins ensoleillés à Sidamo, où l\'équilibre des saveurs et la touche épicée vous invitent à démarrer la journée avec un café d\'exception.', 0, '13.99', 1, 5, 3, 20),
(30, 'Jamaican Sunset Fusion', 'https://i.postimg.cc/Qx6tCN5Z/Jamaican-Jamaican-Sunset-Fusion-resultat.webp', 'Jamaican Sunset Fusion est une danse enivrante de saveurs, capturant la richesse du coucher de soleil jamaïcain dans chaque grain. D\'intensité forte et 100% Arabica, ce café en grains offre une expérience fruitée et florale, invitant à un voyage sensoriel au cœur de la Jamaïque.', 'Jamaican Sunset Fusion puise son inspiration dans les terres ensoleillées de la Jamaïque, où les cafés arabica cultivés atteignent leur maturité sous le doux crépuscule. Bien que non bio, ce café incarne la diversité et la vivacité des terroirs jamaïcains.', NULL, 100, 'À chaque gorgée, ce café dévoile des arômes délicats de fruits et de fleurs, créant une expérience gustative jamaïcaine authentique. Les notes fruitées et florales s\'entrelacent pour offrir une fusion harmonieuse au palais.', 'Jamaican Sunset Fusion est idéal pour une préparation en grains. Que ce soit en espresso, en cafetière à piston ou en méthode alternative, ce café fort et non bio garantit une expérience caféinée exquise.', 'Laissez-vous emporter par la fusion enchanteresse du coucher de soleil jamaïcain avec Jamaican Sunset Fusion, un café en grains qui évoque la magie de la nature jamaïcaine à chaque dégustation.', 0, '10.99', 5, 6, 1, 20),
(31, 'Jamaican Sunset Fusion', 'https://i.postimg.cc/66fTsfp3/Jamaican-Jamaican-Sunset-Fusion-moulu-resultat.webp', 'Jamaican Sunset Fusion est une danse enivrante de saveurs, capturant la richesse du coucher de soleil jamaïcain dans chaque grain. D\'intensité forte et 100% Arabica, ce café en grains offre une expérience fruitée et florale, invitant à un voyage sensoriel au cœur de la Jamaïque.', 'Jamaican Sunset Fusion puise son inspiration dans les terres ensoleillées de la Jamaïque, où les cafés arabica cultivés atteignent leur maturité sous le doux crépuscule. Bien que non bio, ce café incarne la diversité et la vivacité des terroirs jamaïcains.', NULL, 100, 'À chaque gorgée, ce café dévoile des arômes délicats de fruits et de fleurs, créant une expérience gustative jamaïcaine authentique. Les notes fruitées et florales s\'entrelacent pour offrir une fusion harmonieuse au palais.', 'Jamaican Sunset Fusion est idéal pour une préparation en grains. Que ce soit en espresso, en cafetière à piston ou en méthode alternative, ce café fort et non bio garantit une expérience caféinée exquise.', 'Laissez-vous emporter par la fusion enchanteresse du coucher de soleil jamaïcain avec Jamaican Sunset Fusion, un café en grains qui évoque la magie de la nature jamaïcaine à chaque dégustation.', 0, '10.99', 5, 6, 2, 20),
(32, 'Caribbean Breeze Reserve', 'https://i.postimg.cc/VLsvz0JF/Jamaican-Caribbean-Breeze-Reserve-resultat.webp', 'Caribbean Breeze Reserve est une brise tropicale enchanteresse capturée dans chaque goutte, offrant une expérience équilibrée et noisetée. D\'intensité moyenne et 100% Arabica, ce café filtre certifié bio transporte chaque tasse au cœur des paysages jamaïcains.', 'Caribbean Breeze Reserve puise son essence dans les plantations ensoleillées de la Jamaïque, où les cafés arabica certifiés bio révèlent la diversité et l\'équilibre caractéristiques de la région.', NULL, 100, 'À chaque gorgée, ce café dévoile des arômes équilibrés, accompagnés de subtiles nuances de noisette. L\'expérience gustative offre une douce brise caribéenne, équilibrée et délicate.', 'Caribbean Breeze Reserve s\'épanouit pleinement dans une préparation en filtre. La méthode douce d\'infusion révèle la finesse de ses arômes, garantissant une expérience caféinée tropicale inoubliable.', 'Découvrez la réserve de brise caribéenne avec Caribbean Breeze Reserve, un café filtre certifié bio qui transporte chaque dégustateur vers les doux rivages de la Jamaïque, où l\'équilibre et la noisette règnent en maîtres.', 1, '13.99', 2, 6, 1, 20),
(33, 'Caribbean Breeze Reserve', 'https://i.postimg.cc/Kznj8n70/Jamaican-Caribbean-Breeze-Reserve-moulu-resultat.webp', 'Caribbean Breeze Reserve est une brise tropicale enchanteresse capturée dans chaque goutte, offrant une expérience équilibrée et noisetée. D\'intensité moyenne et 100% Arabica, ce café filtre certifié bio transporte chaque tasse au cœur des paysages jamaïcains.', 'Caribbean Breeze Reserve puise son essence dans les plantations ensoleillées de la Jamaïque, où les cafés arabica certifiés bio révèlent la diversité et l\'équilibre caractéristiques de la région.', NULL, 100, 'À chaque gorgée, ce café dévoile des arômes équilibrés, accompagnés de subtiles nuances de noisette. L\'expérience gustative offre une douce brise caribéenne, équilibrée et délicate.', 'Caribbean Breeze Reserve s\'épanouit pleinement dans une préparation en filtre. La méthode douce d\'infusion révèle la finesse de ses arômes, garantissant une expérience caféinée tropicale inoubliable.', 'Découvrez la réserve de brise caribéenne avec Caribbean Breeze Reserve, un café filtre certifié bio qui transporte chaque dégustateur vers les doux rivages de la Jamaïque, où l\'équilibre et la noisette règnent en maîtres.', 1, '12.99', 2, 6, 2, 20),
(34, 'Caribbean Breeze Reserve', 'https://i.postimg.cc/PxGNH6DL/Jamaican-Caribbean-Breeze-Reserve-Capsule-resultat.webp', 'Caribbean Breeze Reserve est une brise tropicale enchanteresse capturée dans chaque goutte, offrant une expérience équilibrée et noisetée. D\'intensité moyenne et 100% Arabica, ce café filtre certifié bio transporte chaque tasse au cœur des paysages jamaïcains.', 'Caribbean Breeze Reserve puise son essence dans les plantations ensoleillées de la Jamaïque, où les cafés arabica certifiés bio révèlent la diversité et l\'équilibre caractéristiques de la région.', NULL, 100, 'À chaque gorgée, ce café dévoile des arômes équilibrés, accompagnés de subtiles nuances de noisette. L\'expérience gustative offre une douce brise caribéenne, équilibrée et délicate.', 'Caribbean Breeze Reserve s\'épanouit pleinement dans une préparation en filtre. La méthode douce d\'infusion révèle la finesse de ses arômes, garantissant une expérience caféinée tropicale inoubliable.', 'Découvrez la réserve de brise caribéenne avec Caribbean Breeze Reserve, un café filtre certifié bio qui transporte chaque dégustateur vers les doux rivages de la Jamaïque, où l\'équilibre et la noisette règnent en maîtres.', 1, '13.99', 2, 6, 3, 20),
(35, 'Costa Rican Bliss', 'https://i.postimg.cc/T3CrRX2K/Costa-Ricain-Costa-Ricain-Bliss-resultat.webp', 'Costa Rican Bliss est une expérience divine capturée dans chaque grain, transportant les amateurs de café vers les sommets du bonheur costaricain. D\'intensité moyenne et 100% Arabica, ce café en grains certifié bio évoque les plaisirs chocolatés et caramélisés, avec des notes équilibrées de cacao et une touche délicate de vanille/caramel.', 'Costa Rican Bliss tire son essence des collines fertiles du Costa Rica, où les cafés arabica certifiés bio révèlent la richesse des sols volcaniques et le climat tropical idéal.', NULL, 100, 'À chaque gorgée, ce café dévoile des arômes chocolatés et caramélisés, accompagnés d\'une note équilibrée de cacao. Les saveurs en bouche évoquent un paradis gustatif, avec une subtile touche de vanille.', 'Costa Rican Bliss s\'épanouit dans une préparation en grains. Que ce soit en espresso, en cafetière à piston ou en méthode alternative, ce café certifié bio offre une expérience caféinée d\'une qualité exceptionnelle.', 'Découvrez le bonheur du Costa Rica avec Costa Rican Bliss, un café en grains qui capture l\'essence des montagnes costaricaines dans chaque tasse, offrant une aventure gustative inoubliable.', 1, '10.99', 3, 7, 1, 20),
(36, 'Costa Rican Bliss', 'https://i.postimg.cc/PJYWhpNH/Costa-Ricain-Costa-Ricain-Bliss-moulu-resultat.webp', 'Costa Rican Bliss est une expérience divine capturée dans chaque grain, transportant les amateurs de café vers les sommets du bonheur costaricain. D\'intensité moyenne et 100% Arabica, ce café en grains certifié bio évoque les plaisirs chocolatés et caramélisés, avec des notes équilibrées de cacao et une touche délicate de vanille/caramel.', 'Costa Rican Bliss tire son essence des collines fertiles du Costa Rica, où les cafés arabica certifiés bio révèlent la richesse des sols volcaniques et le climat tropical idéal.', NULL, 100, 'À chaque gorgée, ce café dévoile des arômes chocolatés et caramélisés, accompagnés d\'une note équilibrée de cacao. Les saveurs en bouche évoquent un paradis gustatif, avec une subtile touche de vanille.', 'Costa Rican Bliss s\'épanouit dans une préparation en grains. Que ce soit en espresso, en cafetière à piston ou en méthode alternative, ce café certifié bio offre une expérience caféinée d\'une qualité exceptionnelle.', 'Découvrez le bonheur du Costa Rica avec Costa Rican Bliss, un café en grains qui capture l\'essence des montagnes costaricaines dans chaque tasse, offrant une aventure gustative inoubliable.', 1, '10.99', 3, 7, 2, 20);
INSERT INTO `Produit` (`PR_Id`, `PR_Label`, `PR_Img`, `PR_Description`, `PR_Origine`, `PR_Robusta`, `PR_Arabica`, `PR_Degustation`, `PR_Preparation`, `PR_Resume`, `PR_Certification`, `PR_Prix`, `IN_Id`, `PA_Id`, `FO_Id`, `PR_Quantite`) VALUES
(37, 'Costa Rican Sunset Roast', 'https://i.postimg.cc/jjytHRW5/Costa-Ricain-Costa-Ricain-Sunset-Roast-resultat.webp', 'Costa Rican Sunset Roast offre une symphonie de saveurs délicates qui évoquent le coucher de soleil sur les collines costaricaines. D\'intensité moyenne et composé à 100% d\'Arabica, ce café filtré certifié bio révèle des arômes fruités et caramélisés, avec des notes de vanille/caramel pour une expérience gustative pleine de nuances.', 'Costa Rican Sunset Roast puise son inspiration dans les plantations en terrasses du Costa Rica, où les cafés arabica certifiés bio révèlent la complexité des microclimats et la qualité des sols volcaniques.', NULL, 100, 'À chaque gorgée, ce café révèle des arômes fruités et caramélisés, enveloppant le palais dans une douceur exotique. Les saveurs délicates de vanille ajoutent une touche sucrée à cette expérience caféinée.', 'Costa Rican Sunset Roast s\'épanouit pleinement dans une préparation en filtre. La méthode d\'infusion lente permet de libérer pleinement les arômes et les saveurs, offrant ainsi une dégustation riche et équilibrée.', 'Découvrez la magie des couchers de soleil costaricains avec Costa Rican Sunset Roast, un café filtré certifié bio qui transporte chaque dégustateur vers un paradis tropical de saveurs délicates.', 1, '10.99', 2, 7, 1, 20),
(38, 'Costa Rican Sunset Roast', 'https://i.postimg.cc/3JQj1Bbx/Costa-Ricain-Costa-Ricain-Sunset-Roast-moulu-resultat.webp', 'Costa Rican Sunset Roast offre une symphonie de saveurs délicates qui évoquent le coucher de soleil sur les collines costaricaines. D\'intensité moyenne et composé à 100% d\'Arabica, ce café filtré certifié bio révèle des arômes fruités et caramélisés, avec des notes de vanille/caramel pour une expérience gustative pleine de nuances.', 'Costa Rican Sunset Roast puise son inspiration dans les plantations en terrasses du Costa Rica, où les cafés arabica certifiés bio révèlent la complexité des microclimats et la qualité des sols volcaniques.', NULL, 100, 'À chaque gorgée, ce café révèle des arômes fruités et caramélisés, enveloppant le palais dans une douceur exotique. Les saveurs délicates de vanille ajoutent une touche sucrée à cette expérience caféinée.', 'Costa Rican Sunset Roast s\'épanouit pleinement dans une préparation en filtre. La méthode d\'infusion lente permet de libérer pleinement les arômes et les saveurs, offrant ainsi une dégustation riche et équilibrée.', 'Découvrez la magie des couchers de soleil costaricains avec Costa Rican Sunset Roast, un café filtré certifié bio qui transporte chaque dégustateur vers un paradis tropical de saveurs délicates.', 1, '14.99', 2, 7, 2, 20),
(39, 'Costa Rican Sunset Roast', 'https://i.postimg.cc/VL9qVC3B/Costa-Ricain-Costa-Ricain-Sunset-Roast-Capsule-resultat.webp', 'Costa Rican Sunset Roast offre une symphonie de saveurs délicates qui évoquent le coucher de soleil sur les collines costaricaines. D\'intensité moyenne et composé à 100% d\'Arabica, ce café filtré certifié bio révèle des arômes fruités et caramélisés, avec des notes de vanille/caramel pour une expérience gustative pleine de nuances.', 'Costa Rican Sunset Roast puise son inspiration dans les plantations en terrasses du Costa Rica, où les cafés arabica certifiés bio révèlent la complexité des microclimats et la qualité des sols volcaniques.', NULL, 100, 'À chaque gorgée, ce café révèle des arômes fruités et caramélisés, enveloppant le palais dans une douceur exotique. Les saveurs délicates de vanille ajoutent une touche sucrée à cette expérience caféinée.', 'Costa Rican Sunset Roast s\'épanouit pleinement dans une préparation en filtre. La méthode d\'infusion lente permet de libérer pleinement les arômes et les saveurs, offrant ainsi une dégustation riche et équilibrée.', 'Découvrez la magie des couchers de soleil costaricains avec Costa Rican Sunset Roast, un café filtré certifié bio qui transporte chaque dégustateur vers un paradis tropical de saveurs délicates.', 1, '14.99', 2, 7, 3, 20),
(40, 'Tarrazú Bliss Reserve', 'https://i.postimg.cc/G2sYJ8FD/Costa-Ricain-Tarrazu-Bliss-Reserve-resultat.webp', 'Tarrazú Bliss Reserve incarne la puissance gustative des montagnes de Tarrazú au Costa Rica, offrant une expérience intense et raffinée. D\'une intensité robuste et composé à 100% d\'Arabica, ce café en grains non bio séduit par ses arômes chocolatés et noisette, accompagnés de délicates notes de vanille/caramel.', 'Tarrazú Bliss Reserve tire son essence des plantations en altitude de la région de Tarrazú au Costa Rica, où les cafés arabica révèlent toute leur complexité grâce aux conditions climatiques idéales et aux sols riches.', NULL, 100, 'À chaque gorgée, ce café dévoile des arômes riches de chocolat et de noisette, créant une expérience sensorielle enveloppante. Les notes subtiles de vanille ajoutent une touche sucrée et équilibrée à chaque tasse.', 'Tarrazú Bliss Reserve s\'apprécie pleinement dans une préparation en grains. Que ce soit en espresso, en cafetière à piston ou en méthode alternative, ce café intense offre une dégustation mémorable.', 'Découvrez l\'excellence des montagnes de Tarrazú avec Tarrazú Bliss Reserve, un café en grains qui incarne la richesse et la force des cafés costaricains d\'exception.', 0, '10.99', 2, 7, 1, 20),
(41, 'Tarrazú Bliss Reserve', 'https://i.postimg.cc/nhH4bLx8/Costa-Ricain-Tarrazu-Bliss-Reserve-moulu-resultat.webp', 'Tarrazú Bliss Reserve incarne la puissance gustative des montagnes de Tarrazú au Costa Rica, offrant une expérience intense et raffinée. D\'une intensité robuste et composé à 100% d\'Arabica, ce café en grains non bio séduit par ses arômes chocolatés et noisette, accompagnés de délicates notes de vanille/caramel.', 'Tarrazú Bliss Reserve tire son essence des plantations en altitude de la région de Tarrazú au Costa Rica, où les cafés arabica révèlent toute leur complexité grâce aux conditions climatiques idéales et aux sols riches.', NULL, 100, 'À chaque gorgée, ce café dévoile des arômes riches de chocolat et de noisette, créant une expérience sensorielle enveloppante. Les notes subtiles de vanille ajoutent une touche sucrée et équilibrée à chaque tasse.', 'Tarrazú Bliss Reserve s\'apprécie pleinement dans une préparation en grains. Que ce soit en espresso, en cafetière à piston ou en méthode alternative, ce café intense offre une dégustation mémorable.', 'Découvrez l\'excellence des montagnes de Tarrazú avec Tarrazú Bliss Reserve, un café en grains qui incarne la richesse et la force des cafés costaricains d\'exception.', 0, '10.99', 2, 7, 2, 20),
(42, 'Yemeni Spice Elevation\"', 'https://i.postimg.cc/jSpRnDSm/Yemenite_-_Yemeni_Spice_Elevation_resultat.webp', 'Yemeni Spice Elevation est une invitation sensorielle à l\'âme mystique du Yémen, capturant les saveurs uniques de ses hauteurs. D\'une intensité moyenne et composé à 100% d\'Arabica, ce café en grains non bio offre des arômes épicés et fruités, créant une expérience gustative distinctive aux nuances noir/fumé.', 'Yemeni Spice Elevation tire son caractère unique des terres montagneuses du Yémen, où l\'altitude élevée et les méthodes traditionnelles de culture confèrent aux cafés arabica une complexité inimitable.', NULL, 100, 'Chaque gorgée de Yemeni Spice Elevation dévoile des arômes captivants d\'épices et de fruits, créant une danse sensorielle sur le palais. Les nuances de café noir ajoutent une profondeur supplémentaire, offrant une expérience audacieuse et mémorable.', 'Yemeni Spice Elevation s\'apprécie pleinement dans une préparation en grains. Que ce soit en espresso ou en cafetière filtre, ce café moyen offre une dégustation qui transporte les amateurs de café vers les sommets exaltants du Yémen.', 'Explorez l\'élévation des saveurs avec Yemeni Spice Elevation, un café en grains qui capture l\'esprit envoûtant des montagnes yéménites.', 0, '11.99', 4, 8, 1, 20),
(43, 'Yemeni Spice Elevation\"', 'https://i.postimg.cc/m26LRXfb/Yemenite_-_Yemeni_Spice_Elevation_(moulu)_resultat.webp', 'Yemeni Spice Elevation est une invitation sensorielle à l\'âme mystique du Yémen, capturant les saveurs uniques de ses hauteurs. D\'une intensité moyenne et composé à 100% d\'Arabica, ce café en grains non bio offre des arômes épicés et fruités, créant une expérience gustative distinctive aux nuances noir/fumé.', 'Yemeni Spice Elevation tire son caractère unique des terres montagneuses du Yémen, où l\'altitude élevée et les méthodes traditionnelles de culture confèrent aux cafés arabica une complexité inimitable.', NULL, 100, 'Chaque gorgée de Yemeni Spice Elevation dévoile des arômes captivants d\'épices et de fruits, créant une danse sensorielle sur le palais. Les nuances de café noir ajoutent une profondeur supplémentaire, offrant une expérience audacieuse et mémorable.', 'Yemeni Spice Elevation s\'apprécie pleinement dans une préparation en grains. Que ce soit en espresso ou en cafetière filtre, ce café moyen offre une dégustation qui transporte les amateurs de café vers les sommets exaltants du Yémen.', 'Explorez l\'élévation des saveurs avec Yemeni Spice Elevation, un café en grains qui capture l\'esprit envoûtant des montagnes yéménites.', 0, '11.99', 4, 8, 2, 20),
(44, 'Arabian Mocha Magic', 'https://i.postimg.cc/Z5BTq846/Yemenite_-_Arabian_Mocha_Magic_resultat.webp', 'Arabian Mocha Magic est une escapade envoûtante vers les terres légendaires du Yémen, où les saveurs riches et intenses créent une magie en chaque tasse. D\'une intensité forte et composé à 100% d\'Arabica, ce café moulu bio transporte les amateurs de café dans un voyage sensoriel avec des arômes terreux et chocolatés, évoquant des notes herbacées/boisées.', 'Arabian Mocha Magic tire son inspiration des montagnes yéménites, où les caféiers arabica poussent dans des conditions idéales, révélant des profils de saveurs uniques.', NULL, 100, 'À chaque gorgée, Arabian Mocha Magic dévoile des arômes profonds de terre et de chocolat, créant une expérience gustative riche et robuste. Les saveurs noir et chocolatées ajoutent une complexité supplémentaire, transportant les sens vers les paysages exotiques du Yémen.', 'Arabian Mocha Magic s\'apprécie pleinement dans une préparation en café filtre ou en cafetière à piston. Son intensité prononcée et ses arômes terreux en font un choix idéal pour ceux qui recherchent une expérience de café moulue bio exceptionnelle.', 'Découvrez la magie du Yémen avec Arabian Mocha Magic, un café moulu qui capture l\'essence envoûtante de cette région légendaire.\n', 1, '12.99', 5, 8, 1, 20),
(45, 'Arabian Mocha Magic', 'https://i.postimg.cc/bYgYVYmS/Yemenite_-_Arabian_Mocha_Magic_(moulu)_resultat.webp', 'Arabian Mocha Magic est une escapade envoûtante vers les terres légendaires du Yémen, où les saveurs riches et intenses créent une magie en chaque tasse. D\'une intensité forte et composé à 100% d\'Arabica, ce café moulu bio transporte les amateurs de café dans un voyage sensoriel avec des arômes terreux et chocolatés, évoquant des notes herbacées/boisées.', 'Arabian Mocha Magic tire son inspiration des montagnes yéménites, où les caféiers arabica poussent dans des conditions idéales, révélant des profils de saveurs uniques.', NULL, 100, 'À chaque gorgée, Arabian Mocha Magic dévoile des arômes profonds de terre et de chocolat, créant une expérience gustative riche et robuste. Les saveurs noir et chocolatées ajoutent une complexité supplémentaire, transportant les sens vers les paysages exotiques du Yémen.', 'Arabian Mocha Magic s\'apprécie pleinement dans une préparation en café filtre ou en cafetière à piston. Son intensité prononcée et ses arômes terreux en font un choix idéal pour ceux qui recherchent une expérience de café moulue bio exceptionnelle.', 'Découvrez la magie du Yémen avec Arabian Mocha Magic, un café moulu qui capture l\'essence envoûtante de cette région légendaire.\n', 1, '12.99', 5, 8, 2, 20),
(46, 'Arabian Mocha Magic', 'https://i.postimg.cc/X7vjRMPH/Yemenite_-_Arabian_Mocha_Magic_(Capsule)_resultat.webp', 'Arabian Mocha Magic est une escapade envoûtante vers les terres légendaires du Yémen, où les saveurs riches et intenses créent une magie en chaque tasse. D\'une intensité forte et composé à 100% d\'Arabica, ce café moulu bio transporte les amateurs de café dans un voyage sensoriel avec des arômes terreux et chocolatés, évoquant des notes herbacées/boisées.', 'Arabian Mocha Magic tire son inspiration des montagnes yéménites, où les caféiers arabica poussent dans des conditions idéales, révélant des profils de saveurs uniques.', NULL, 100, 'À chaque gorgée, Arabian Mocha Magic dévoile des arômes profonds de terre et de chocolat, créant une expérience gustative riche et robuste. Les saveurs noir et chocolatées ajoutent une complexité supplémentaire, transportant les sens vers les paysages exotiques du Yémen.', 'Arabian Mocha Magic s\'apprécie pleinement dans une préparation en café filtre ou en cafetière à piston. Son intensité prononcée et ses arômes terreux en font un choix idéal pour ceux qui recherchent une expérience de café moulue bio exceptionnelle.', 'Découvrez la magie du Yémen avec Arabian Mocha Magic, un café moulu qui capture l\'essence envoûtante de cette région légendaire.\n', 1, '13.99', 5, 8, 3, 20),
(47, 'Andean Harmony Blend', 'https://i.postimg.cc/8PGWMCjF/Ecuadorian-Andean-Harmony-Blend-resultat.webp', 'Andean Harmony Blend est une symphonie sensorielle qui capture l\'harmonie naturelle des caféiers équatoriens. D\'une intensité moyenne et composé à 100% d\'Arabica, ce café en grains bio offre une expérience finement équilibré entre ces notes florales et fruitées.', 'Andean Harmony Blend puise son inspiration des sols fertiles des Andes équatoriennes, où les cafés arabica bénéficient de conditions de croissance optimales.v', NULL, 100, 'Chaque gorgée de Andean Harmony Blend révèle un équilibre exquis entre arômes floraux et fruités. Les notes herbacées ajoutent une dimension supplémentaire à cette expérience gustative, transportant les connaisseurs vers les paysages harmonieux de l\'Équateur.', 'Andean Harmony Blend s\'apprécie pleinement en café en grains, que ce soit en espresso ou en cafetière filtre. Sa moyenne intensité et son profil aromatique en font un choix polyvalent pour tous les amateurs de café bio.', 'Découvrez l\'harmonie des Andes avec Andean Harmony Blend, un café en grains bio qui célèbre la diversité naturelle de l\'Équateur.', 1, '14.99', 2, 9, 1, 20),
(48, 'Andean Harmony Blend', 'https://i.postimg.cc/rs1r3BYF/Ecuadorian-Andean-Harmony-Blend-moulu-resultat.webp', 'Andean Harmony Blend est une symphonie sensorielle qui capture l\'harmonie naturelle des caféiers équatoriens. D\'une intensité moyenne et composé à 100% d\'Arabica, ce café en grains bio offre une expérience finement équilibré entre ces notes florales et fruitées.', 'Andean Harmony Blend puise son inspiration des sols fertiles des Andes équatoriennes, où les cafés arabica bénéficient de conditions de croissance optimales.v', NULL, 100, 'Chaque gorgée de Andean Harmony Blend révèle un équilibre exquis entre arômes floraux et fruités. Les notes herbacées ajoutent une dimension supplémentaire à cette expérience gustative, transportant les connaisseurs vers les paysages harmonieux de l\'Équateur.', 'Andean Harmony Blend s\'apprécie pleinement en café en grains, que ce soit en espresso ou en cafetière filtre. Sa moyenne intensité et son profil aromatique en font un choix polyvalent pour tous les amateurs de café bio.', 'Découvrez l\'harmonie des Andes avec Andean Harmony Blend, un café en grains bio qui célèbre la diversité naturelle de l\'Équateur.', 1, '14.99', 2, 9, 2, 20),
(49, 'Andean Harmony Blend', 'https://i.postimg.cc/Bb9FhSpV/Ecuadorian-Andean-Harmony-Blend-Capsule-resultat.webp', 'Andean Harmony Blend est une symphonie sensorielle qui capture l\'harmonie naturelle des caféiers équatoriens. D\'une intensité moyenne et composé à 100% d\'Arabica, ce café en grains bio offre une expérience finement équilibré entre ces notes florales et fruitées.', 'Andean Harmony Blend puise son inspiration des sols fertiles des Andes équatoriennes, où les cafés arabica bénéficient de conditions de croissance optimales.v', NULL, 100, 'Chaque gorgée de Andean Harmony Blend révèle un équilibre exquis entre arômes floraux et fruités. Les notes herbacées ajoutent une dimension supplémentaire à cette expérience gustative, transportant les connaisseurs vers les paysages harmonieux de l\'Équateur.', 'Andean Harmony Blend s\'apprécie pleinement en café en grains, que ce soit en espresso ou en cafetière filtre. Sa moyenne intensité et son profil aromatique en font un choix polyvalent pour tous les amateurs de café bio.', 'Découvrez l\'harmonie des Andes avec Andean Harmony Blend, un café en grains bio qui célèbre la diversité naturelle de l\'Équateur.', 1, '14.99', 2, 9, 3, 20),
(50, 'Amazon Mist Delight', 'https://i.postimg.cc/05DDzS2R/Ecuadorian-Amazon-Mist-Delight-resultat.webp', 'Amazon Mist Delight est une aventure gustative qui capture la douce brume de l\'Amazonie équatorienne. Avec une intensité légère et une composition 100% Arabica, ces capsules offrent des arômes chocolatés et de noisette, sublimés par des saveurs de vanille/caramel.', 'Amazon Mist Delight tire son inspiration des riches terres de l\'Amazonie équatorienne, où les cafés arabica prospèrent dans un environnement unique.', NULL, 100, 'Chaque gorgée de Amazon Mist Delight offre une expérience douce et légère avec des arômes riches de chocolat et de noisette. Les notes de caramel ajoutent une touche délicieuse à ce café équatorien.', 'Ces capsules sont idéales pour une infusion en café léger, révélant pleinement la complexité des arômes chocolatés et de noisette. Savourez cette délicieuse escapade gustative dans le confort de votre tasse.', 'Explorez les délices de l\'Amazonie avec Amazon Mist Delight, une expérience en capsules qui vous transporte au cœur de la brume mystique de l\'Équateur.', 0, '12.99', 1, 9, 1, 20),
(51, 'Amazon Mist Delight', 'https://i.postimg.cc/GpfGyJyr/Ecuadorian-Amazon-Mist-Delight-moulu-resultat.webp', 'Amazon Mist Delight est une aventure gustative qui capture la douce brume de l\'Amazonie équatorienne. Avec une intensité légère et une composition 100% Arabica, ces capsules offrent des arômes chocolatés et de noisette, sublimés par des saveurs de vanille/caramel.', 'Amazon Mist Delight tire son inspiration des riches terres de l\'Amazonie équatorienne, où les cafés arabica prospèrent dans un environnement unique.', NULL, 100, 'Chaque gorgée de Amazon Mist Delight offre une expérience douce et légère avec des arômes riches de chocolat et de noisette. Les notes de caramel ajoutent une touche délicieuse à ce café équatorien.', 'Ces capsules sont idéales pour une infusion en café léger, révélant pleinement la complexité des arômes chocolatés et de noisette. Savourez cette délicieuse escapade gustative dans le confort de votre tasse.', 'Explorez les délices de l\'Amazonie avec Amazon Mist Delight, une expérience en capsules qui vous transporte au cœur de la brume mystique de l\'Équateur.', 0, '12.99', 1, 9, 2, 20),
(52, 'Honduran Heights Harmony', 'https://i.postimg.cc/dV1hjZv0/Honduran-Honduran-Heights-Harmony-resultat.webp', 'Honduran Heights Harmony incarne l\'harmonie des hauteurs honduriennes, offrant une expérience de café équilibrée et fruitée. Certifié bio et composé à 100% d\'Arabica, ce café en grains séduit les amateurs avec ses arômes de fruits et de noisette.', 'Honduran Heights Harmony puise son inspiration dans les hauteurs montagneuses du Honduras, où le café arabica prospère dans des conditions idéales.', NULL, 100, 'Chaque gorgée de Honduran Heights Harmony dévoile un équilibre parfait entre des arômes fruités délicats et des notes subtiles de noisette. Ce café bio séduit par sa douceur et sa complexité.', 'Les grains de café Honduran Heights Harmony sont parfaits pour une mouture fraîche, révélant ainsi toute la richesse de ce café équilibré. Appréciez-le dans toutes les méthodes de préparation, de la cafetière à la machine espresso.', 'Explorez les sommets du Honduras avec Honduran Heights Harmony, une expérience de café biologique qui célèbre l\'union harmonieuse de la nature et du savoir-faire caféicole hondurien.', 1, '13.99', 3, 10, 1, 20),
(53, 'Honduran Heights Harmony', 'https://i.postimg.cc/65B2T1mn/Honduran-Honduran-Heights-Harmony-moulu-resultat.webp', 'Honduran Heights Harmony incarne l\'harmonie des hauteurs honduriennes, offrant une expérience de café équilibrée et fruitée. Certifié bio et composé à 100% d\'Arabica, ce café en grains séduit les amateurs avec ses arômes de fruits et de noisette.', 'Honduran Heights Harmony puise son inspiration dans les hauteurs montagneuses du Honduras, où le café arabica prospère dans des conditions idéales.', NULL, 100, 'Chaque gorgée de Honduran Heights Harmony dévoile un équilibre parfait entre des arômes fruités délicats et des notes subtiles de noisette. Ce café bio séduit par sa douceur et sa complexité.', 'Les grains de café Honduran Heights Harmony sont parfaits pour une mouture fraîche, révélant ainsi toute la richesse de ce café équilibré. Appréciez-le dans toutes les méthodes de préparation, de la cafetière à la machine espresso.', 'Explorez les sommets du Honduras avec Honduran Heights Harmony, une expérience de café biologique qui célèbre l\'union harmonieuse de la nature et du savoir-faire caféicole hondurien.', 1, '13.99', 3, 10, 2, 20),
(54, 'Copán Cascade Blend', 'https://i.postimg.cc/zXpLhSsM/Honduran-Copa-n-Cascade-Blend-resultat.webp', 'Copán Cascade Blend offre une expérience caféinée intense et robuste, transportant les amateurs de café vers les rivières tumultueuses de Copán au Honduras. Certifié non bio et composé à 100% d\'Arabica, ce café moulu séduit par ses arômes chocolatés et épicés.', 'Copán Cascade Blend tire son caractère puissant des plantations de café arabica au cœur du Honduras, là où la nature luxuriante influence la saveur distinctive de chaque grain.', NULL, 100, 'Ce café moulu propose une expérience sensorielle riche avec ses arômes prononcés de chocolat et ses notes épicées persistantes. Les amateurs de cafés forts apprécieront la profondeur de chaque gorgée.', 'Moulu avec précision, le Copán Cascade Blend est idéal pour les méthodes de préparation qui favorisent l\'extraction maximale des arômes et des saveurs, comme la cafetière à piston ou la cafetière filtre.', 'Plongez dans l\'intensité de Copán Cascade Blend et découvrez les riches saveurs que cette fusion de chocolat et d\'épices du Honduras peut offrir à votre palais.', 0, '10.99', 4, 10, 1, 20),
(55, 'Copán Cascade Blend', 'https://i.postimg.cc/BZTPSGMJ/Honduran-Copa-n-Cascade-Blend-moulu-resultat.webp', 'Copán Cascade Blend offre une expérience caféinée intense et robuste, transportant les amateurs de café vers les rivières tumultueuses de Copán au Honduras. Certifié non bio et composé à 100% d\'Arabica, ce café moulu séduit par ses arômes chocolatés et épicés.', 'Copán Cascade Blend tire son caractère puissant des plantations de café arabica au cœur du Honduras, là où la nature luxuriante influence la saveur distinctive de chaque grain.', NULL, 100, 'Ce café moulu propose une expérience sensorielle riche avec ses arômes prononcés de chocolat et ses notes épicées persistantes. Les amateurs de cafés forts apprécieront la profondeur de chaque gorgée.', 'Moulu avec précision, le Copán Cascade Blend est idéal pour les méthodes de préparation qui favorisent l\'extraction maximale des arômes et des saveurs, comme la cafetière à piston ou la cafetière filtre.', 'Plongez dans l\'intensité de Copán Cascade Blend et découvrez les riches saveurs que cette fusion de chocolat et d\'épices du Honduras peut offrir à votre palais.', 0, '10.99', 4, 10, 2, 20),
(56, 'Copán Cascade Blend', 'https://i.postimg.cc/6qX7rH5s/Honduran-Copa-n-Cascade-Blend-Capsule-resultat.webp', 'Copán Cascade Blend offre une expérience caféinée intense et robuste, transportant les amateurs de café vers les rivières tumultueuses de Copán au Honduras. Certifié non bio et composé à 100% d\'Arabica, ce café moulu séduit par ses arômes chocolatés et épicés.', 'Copán Cascade Blend tire son caractère puissant des plantations de café arabica au cœur du Honduras, là où la nature luxuriante influence la saveur distinctive de chaque grain.', NULL, 100, 'Ce café moulu propose une expérience sensorielle riche avec ses arômes prononcés de chocolat et ses notes épicées persistantes. Les amateurs de cafés forts apprécieront la profondeur de chaque gorgée.', 'Moulu avec précision, le Copán Cascade Blend est idéal pour les méthodes de préparation qui favorisent l\'extraction maximale des arômes et des saveurs, comme la cafetière à piston ou la cafetière filtre.', 'Plongez dans l\'intensité de Copán Cascade Blend et découvrez les riches saveurs que cette fusion de chocolat et d\'épices du Honduras peut offrir à votre palais.', 0, '11.99', 4, 10, 3, 20);

-- --------------------------------------------------------

--
-- Structure de la table `Produit_Arome_`
--

CREATE TABLE `Produit_Arome_` (
  `AR_Id` int(11) NOT NULL,
  `PR_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Produit_Arome_`
--

INSERT INTO `Produit_Arome_` (`AR_Id`, `PR_Id`) VALUES
(1, 1),
(3, 1),
(1, 2),
(3, 2),
(4, 3),
(5, 3),
(7, 3),
(4, 4),
(5, 4),
(7, 4),
(4, 5),
(5, 5),
(7, 5),
(1, 6),
(6, 6),
(1, 7),
(6, 7),
(1, 8),
(6, 8),
(1, 9),
(6, 9),
(2, 10),
(7, 10),
(2, 11),
(7, 11),
(2, 12),
(7, 12),
(1, 13),
(4, 13),
(1, 14),
(4, 14),
(1, 15),
(4, 15),
(1, 16),
(4, 16),
(1, 17),
(4, 17),
(2, 18),
(9, 18),
(2, 19),
(9, 19),
(1, 20),
(6, 20),
(7, 20),
(1, 21),
(6, 21),
(7, 21),
(1, 22),
(6, 22),
(7, 22),
(4, 23),
(6, 23),
(4, 24),
(6, 24),
(4, 25),
(5, 25),
(4, 26),
(5, 26),
(6, 27),
(7, 27),
(6, 28),
(7, 28),
(6, 29),
(7, 29),
(4, 30),
(5, 30),
(4, 31),
(5, 31),
(2, 32),
(2, 33),
(2, 34),
(1, 35),
(3, 35),
(1, 36),
(3, 36),
(3, 37),
(4, 37),
(3, 38),
(4, 38),
(3, 39),
(4, 39),
(1, 40),
(2, 40),
(1, 41),
(2, 41),
(4, 42),
(6, 42),
(4, 43),
(6, 43),
(1, 44),
(8, 44),
(1, 45),
(8, 45),
(1, 46),
(8, 46),
(4, 47),
(5, 47),
(4, 48),
(5, 48),
(4, 49),
(5, 49),
(1, 50),
(2, 50),
(1, 51),
(2, 51),
(2, 52),
(4, 52),
(2, 53),
(4, 53),
(1, 54),
(6, 54),
(1, 55),
(6, 55),
(1, 56),
(6, 56);

-- --------------------------------------------------------

--
-- Structure de la table `Produit_Saveur_`
--
'
CREATE TABLE `Produit_Saveur_` (
  `PR_Id` int(11) NOT NULL,
  `SA_Id` int(11) NOT NULL
);

--
-- Déchargement des données de la table `Produit_Saveur_`
--

INSERT INTO `Produit_Saveur_` (`PR_Id`, `SA_Id`) VALUES
(1, 1),
(1, 4),
(1, 5),
(2, 1),
(2, 4),
(2, 5),
(3, 7),
(3, 9),
(4, 7),
(4, 9),
(5, 7),
(5, 9),
(6, 5),
(6, 8),
(7, 5),
(7, 8),
(8, 2),
(8, 8),
(9, 2),
(9, 8),
(10, 6),
(11, 6),
(12, 6),
(13, 5),
(13, 3),
(14, 5),
(14, 3),
(15, 5),
(15, 3),
(16, 5),
(16, 7),
(17, 5),
(17, 7),
(18, 6),
(18, 9),
(19, 6),
(19, 9),
(20, 6),
(20, 8),
(21, 6),
(21, 8),
(22, 6),
(22, 8),
(23, 7),
(23, 8),
(24, 7),
(24, 8),
(25, 7),
(25, 9),
(26, 7),
(26, 9),
(27, 8),
(28, 8),
(29, 8),
(30, 7),
(30, 9),
(31, 7),
(31, 9),
(32, 5),
(32, 6),
(33, 5),
(33, 6),
(34, 5),
(34, 6),
(35, 5),
(35, 3),
(36, 5),
(36, 3),
(37, 7),
(37, 4),
(37, 3),
(38, 7),
(38, 4),
(38, 3),
(39, 7),
(39, 4),
(39, 3),
(40, 5),
(40, 6),
(40, 3),
(41, 5),
(41, 6),
(41, 3),
(42, 8),
(42, 7),
(42, 1),
(43, 8),
(43, 7),
(43, 1),
(44, 5),
(44, 1),
(45, 5),
(45, 1),
(46, 5),
(46, 1),
(47, 9),
(47, 7),
(48, 9),
(48, 7),
(49, 9),
(49, 7),
(50, 5),
(50, 6),
(50, 4),
(51, 5),
(51, 6),
(51, 4),
(52, 7),
(52, 6),
(53, 7),
(53, 6),
(54, 5),
(54, 8),
(55, 5),
(55, 8),
(56, 5),
(56, 8);

-- --------------------------------------------------------

--
-- Structure de la table `Saveur`
--

CREATE TABLE `Saveur` (
  `SA_Id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `SA_Label` varchar(45) NOT NULL,
  `SC_Id` int(11) NOT NULL
);

--
-- Déchargement des données de la table `Saveur`
--

INSERT INTO `Saveur` (`SA_Id`, `SA_Label`, `SC_Id`) VALUES
(1, 'Noir', 1),
(2, 'Fumé', 1),
(3, 'Vanillé', 2),
(4, 'Caramélisé', 2),
(5, 'Chocolaté', 2),
(6, 'Noisette', 2),
(7, 'Fruité', 3),
(8, 'Épicé', 3),
(9, 'Fleurie', 3);

-- --------------------------------------------------------

--
-- Structure de la table `Saveur_Categorie`
--

CREATE TABLE `Saveur_Categorie` (
  `SC_Id` int(11) NOT NULL,
  `SC_Label` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Saveur_Categorie`
--

INSERT INTO `Saveur_Categorie` (`SC_Id`, `SC_Label`) VALUES
(1, 'Intenses'),
(2, 'Sucrées'),
(3, 'Exotiques');

-- --------------------------------------------------------

--
-- Structure de la table `Utilisateur`
--

CREATE TABLE `Utilisateur` (
  `UT_Id` int(11) NOT NULL,
  `UT_Nom` varchar(55) NOT NULL,
  `UT_Prenom` varchar(55) NOT NULL,
  `UT_Mail` varchar(55) NOT NULL,
  `UT_MotDePasse` varchar(255) NOT NULL,
  `UT_Adresse` varchar(255) DEFAULT NULL,
  `UT_IsAdmin` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Utilisateur`
--

INSERT INTO `Utilisateur` (`UT_Id`, `UT_Nom`, `UT_Prenom`, `UT_Mail`, `UT_MotDePasse`, `UT_Adresse`, `UT_IsAdmin`) VALUES
(1, 'Baptiste', 'Harbuz', 'contact@baptisteharbuz.fr', 'motdepasse1', NULL, 1),
(27, 'bob', 'bob', 'bob@bob.fr', 'bob', NULL, NULL),
(64, 'bubu', 'bubu', 'bubu@bubu.fr', '$2a$10$s5UW.HVdCLFyJqwl9CROOOXKc/6XStx.7C0m2vdquRV/jdXo3CWG.', NULL, NULL),
(66, 'bobo', 'bobo', 'bobo@bobo.fr', '$2a$10$DLM0BmI7EmRTsGl.WyiSrOHD7DnR4rtcklGWToTxjEhAguq41/.Oq', NULL, NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Arome`
--
ALTER TABLE `Arome`
  ADD PRIMARY KEY (`AR_Id`),
  ADD KEY `FK_AC_Id_Categorie` (`AC_Id`);

--
-- Index pour la table `Arome_Categorie`
--
ALTER TABLE `Arome_Categorie`
  ADD PRIMARY KEY (`AC_Id`);

--
-- Index pour la table `Commande_Produit`
--
ALTER TABLE `Commande_Produit`
  ADD PRIMARY KEY (`CP_Id`),
  ADD KEY `CU_Id` (`CU_Id`),
  ADD KEY `PR_Id` (`PR_Id`);

--
-- Index pour la table `Commande_Utilisateur`
--
ALTER TABLE `Commande_Utilisateur`
  ADD PRIMARY KEY (`CU_Id`),
  ADD KEY `UT_Id` (`UT_Id`);

--
-- Index pour la table `Forme`
--
ALTER TABLE `Forme`
  ADD PRIMARY KEY (`FO_Id`);

--
-- Index pour la table `Intensite`
--
ALTER TABLE `Intensite`
  ADD PRIMARY KEY (`IN_Id`),
  ADD KEY `FK_IC_Id` (`IC_Id`);

--
-- Index pour la table `Intensite_Categorie`
--
ALTER TABLE `Intensite_Categorie`
  ADD PRIMARY KEY (`IC_ID`);

--
-- Index pour la table `Pays`
--
ALTER TABLE `Pays`
  ADD PRIMARY KEY (`PA_Id`);

--
-- Index pour la table `Produit`
--
ALTER TABLE `Produit`
  ADD PRIMARY KEY (`PR_Id`),
  ADD KEY `FK_FO_Id_Forme` (`FO_Id`),
  ADD KEY `FK_IN_Id` (`IN_Id`),
  ADD KEY `FK_PA_Id_Pays` (`PA_Id`);

--
-- Index pour la table `Produit_Arome_`
--
ALTER TABLE `Produit_Arome_`
  ADD KEY `FK_AR_Id_Arome` (`AR_Id`),
  ADD KEY `FK_PR_Id_Produit_Arome` (`PR_Id`);

--
-- Index pour la table `Produit_Saveur_`
--
ALTER TABLE `Produit_Saveur_`
  ADD KEY `FK_Produit_Saveur_` (`PR_Id`),
  ADD KEY `FK_Saveur_` (`SA_Id`);

--
-- Index pour la table `Saveur`
--
ALTER TABLE `Saveur`
  ADD PRIMARY KEY (`SA_Id`),
  ADD KEY `FK_SC_Id_Categorie` (`SC_Id`);

--
-- Index pour la table `Saveur_Categorie`
--
ALTER TABLE `Saveur_Categorie`
  ADD PRIMARY KEY (`SC_Id`);

--
-- Index pour la table `Utilisateur`
--
ALTER TABLE `Utilisateur`
  ADD PRIMARY KEY (`UT_Id`),
  ADD UNIQUE KEY `UT_Mail_UNIQUE` (`UT_Mail`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Arome`
--
ALTER TABLE `Arome`
  MODIFY `AR_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `Arome_Categorie`
--
ALTER TABLE `Arome_Categorie`
  MODIFY `AC_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `Commande_Produit`
--
ALTER TABLE `Commande_Produit`
  MODIFY `CP_Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Commande_Utilisateur`
--
ALTER TABLE `Commande_Utilisateur`
  MODIFY `CU_Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Forme`
--
ALTER TABLE `Forme`
  MODIFY `FO_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `Intensite`
--
ALTER TABLE `Intensite`
  MODIFY `IN_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `Intensite_Categorie`
--
ALTER TABLE `Intensite_Categorie`
  MODIFY `IC_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `Pays`
--
ALTER TABLE `Pays`
  MODIFY `PA_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `Produit`
--
ALTER TABLE `Produit`
  MODIFY `PR_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT pour la table `Saveur`
--
ALTER TABLE `Saveur`
  MODIFY `SA_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `Saveur_Categorie`
--
ALTER TABLE `Saveur_Categorie`
  MODIFY `SC_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `Utilisateur`
--
ALTER TABLE `Utilisateur`
  MODIFY `UT_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Arome`
--
ALTER TABLE `Arome`
  ADD CONSTRAINT `FK_AC_Id_Categorie` FOREIGN KEY (`AC_Id`) REFERENCES `Arome_Categorie` (`AC_Id`);

--
-- Contraintes pour la table `Commande_Produit`
--
ALTER TABLE `Commande_Produit`
  ADD CONSTRAINT `commande_produit_ibfk_1` FOREIGN KEY (`CU_Id`) REFERENCES `Commande_utilisateur` (`CU_Id`),
  ADD CONSTRAINT `commande_produit_ibfk_2` FOREIGN KEY (`PR_Id`) REFERENCES `Produit` (`PR_Id`);

--
-- Contraintes pour la table `Commande_Utilisateur`
--
ALTER TABLE `Commande_Utilisateur`
  ADD CONSTRAINT `commande_utilisateur_ibfk_1` FOREIGN KEY (`UT_Id`) REFERENCES `Utilisateur` (`UT_Id`);

--
-- Contraintes pour la table `Intensite`
--
ALTER TABLE `Intensite`
  ADD CONSTRAINT `FK_IC_Id` FOREIGN KEY (`IC_Id`) REFERENCES `Intensite_Categorie` (`IC_ID`);

--
-- Contraintes pour la table `Produit`
--
ALTER TABLE `Produit`
  ADD CONSTRAINT `FK_FO_Id_Forme` FOREIGN KEY (`FO_Id`) REFERENCES `Forme` (`FO_Id`),
  ADD CONSTRAINT `FK_IN_Id` FOREIGN KEY (`IN_Id`) REFERENCES `Intensite` (`IN_Id`),
  ADD CONSTRAINT `FK_PA_Id_Pays` FOREIGN KEY (`PA_Id`) REFERENCES `Pays` (`PA_Id`);

--
-- Contraintes pour la table `Produit_Arome_`
--
ALTER TABLE `Produit_Arome_`
  ADD CONSTRAINT `FK_AR_Id_Arome` FOREIGN KEY (`AR_Id`) REFERENCES `Arome` (`AR_Id`),
  ADD CONSTRAINT `FK_PR_Id_Produit_Arome` FOREIGN KEY (`PR_Id`) REFERENCES `Produit` (`PR_Id`);

--
-- Contraintes pour la table `Produit_Saveur_`
--
ALTER TABLE `Produit_Saveur_`
  ADD CONSTRAINT `FK_Produit_Saveur_` FOREIGN KEY (`PR_Id`) REFERENCES `Produit` (`PR_Id`),
  ADD CONSTRAINT `FK_Saveur_` FOREIGN KEY (`SA_Id`) REFERENCES `Saveur` (`SA_Id`);

--
-- Contraintes pour la table `Saveur`
--
ALTER TABLE `Saveur`
  ADD CONSTRAINT `FK_SC_Id_Categorie` FOREIGN KEY (`SC_Id`) REFERENCES `Saveur_Categorie` (`SC_Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
