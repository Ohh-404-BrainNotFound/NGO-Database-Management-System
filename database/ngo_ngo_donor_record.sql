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
-- Table structure for table `ngo_donor_record`
--

DROP TABLE IF EXISTS `ngo_donor_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ngo_donor_record` (
  `donor_id` varchar(30) NOT NULL,
  `donor_name` varchar(125) NOT NULL,
  `ngo_id` varchar(120) NOT NULL,
  `amount` int NOT NULL,
  `ngo_name` varchar(125) NOT NULL,
  `regDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `user_email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`donor_id`),
  KEY `ngo_id` (`ngo_id`),
  CONSTRAINT `ngo_donor_record_ibfk_1` FOREIGN KEY (`ngo_id`) REFERENCES `ngodata` (`ngo_mail`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ngo_donor_record`
--

LOCK TABLES `ngo_donor_record` WRITE;
/*!40000 ALTER TABLE `ngo_donor_record` DISABLE KEYS */;
INSERT INTO `ngo_donor_record` VALUES ('23lOAL','sasas','12@gmail.com',23,'test','2021-04-10 12:00:37',NULL),('2WVP5O','nitanshulokhandeyo','12@gmail.com',45,'test','2021-04-24 03:47:35','nlok5923@gmail.com'),('dp2tLu','sasas','12@gmail.com',100,'test','2021-04-09 12:53:39',NULL),('iYUEu0','sasas','12@gmail.com',100,'test','2021-04-09 10:40:00',NULL),('Tp7E7j','nitanshu','12@gmail.com',1200,'test','2021-04-22 16:45:29',NULL),('vBAxDj','sasas','12@gmail.com',23,'test','2021-04-10 12:01:22',NULL);
/*!40000 ALTER TABLE `ngo_donor_record` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-24 14:33:31
