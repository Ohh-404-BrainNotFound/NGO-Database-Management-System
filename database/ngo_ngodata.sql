-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: ngo
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ngodata`
--

DROP TABLE IF EXISTS `ngodata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ngodata` (
  `ngo_mail` varchar(124) NOT NULL,
  `ngo_name` varchar(125) NOT NULL,
  `ngo_password` varchar(30) NOT NULL,
  `ngo_info` varchar(500) NOT NULL,
  `government_id` varchar(125) NOT NULL,
  `ngo_address` varchar(200) NOT NULL,
  `ngo_bank` varchar(125) NOT NULL,
  `ngo_account` int NOT NULL,
  `ngo_ifsccode` varchar(30) NOT NULL,
  `regdate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `image` varchar(120) NOT NULL,
  PRIMARY KEY (`ngo_mail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ngodata`
--

LOCK TABLES `ngodata` WRITE;
/*!40000 ALTER TABLE `ngodata` DISABLE KEYS */;
INSERT INTO `ngodata` VALUES ('12@gmail.com','asaaq','2,','ddfdf','deerasas','asasa sa sas as','ff',23,'ff23','2021-04-07 11:46:24','logo1.png'),('a@gmail.com','asaas','123','','12121','asasa sa sas as','bob',121211,'dfdfd12','2021-04-06 10:17:51','logo2.png'),('ab@gmail.com','asaas','123','aaaaaaaaaaaa','12121','asasa sa sas as','bob',121211,'dfdfd12','2021-04-06 10:26:18','logo3.png'),('jsk@gmail.com','asaas','123','','12121','asasa sa sas as','bob',121211,'dfdfd12','2021-04-06 10:32:28','logo4.png');
/*!40000 ALTER TABLE `ngodata` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-24 14:33:30
