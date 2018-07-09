-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.5.5-10.0.14-MariaDB - mariadb.org binary distribution
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  8.3.0.4694
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
-- 正在导出表  work.car 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `car` DISABLE KEYS */;
INSERT INTO `car` (`id`, `price`, `title`, `imgurl`, `qty`) VALUES
	(9, '90', '尤妮佳（Moony）纸尿裤女宝拉拉裤XL号38片装（12-17kg）', 'main7.jpg', '7'),
	(18, '90', '花王（Merries）纸尿裤粘贴式S号82片装（4-8kg）', 'main13.jpg', '4'),
	(19, '90', '尤妮佳（Moony）纸尿裤女宝拉拉裤XL号38片装（12-17kg）', 'main6.jpg', '6'),
	(30, '90', '花王（Merries）纸尿裤粘贴式S号82片装（4-8kg）', 'main15.jpg', '5');
/*!40000 ALTER TABLE `car` ENABLE KEYS */;

-- 正在导出表  work.goods 的数据：~32 rows (大约)
/*!40000 ALTER TABLE `goods` DISABLE KEYS */;
INSERT INTO `goods` (`id`, `title`, `price`, `imgurl`, `buys`, `oldPrice`, `type`) VALUES
	(1, '花王（Merries）纸尿裤粘贴式M号64片装（6-11kg..', '90', 'main6.jpg', '378', '108', '1'),
	(2, '花王（Merries）纸尿裤粘贴式S号82片装（4-8kg）', '90', 'main7.jpg', '289', '108', '1'),
	(3, '花王（Merries）纸尿裤粘贴式L号54片装（9-14kg）', '90', 'main8.jpg', '115', '108', '1'),
	(4, '大王（GOO.N）纸尿裤男宝拉拉裤XL号38片装（12-20kg）', '90', 'main9.jpg', '97', '108', '1'),
	(5, '尤妮佳（Moony）纸尿裤女宝拉拉裤XL号38片装（12-17kg）', '90', 'main16.jpg', '446', '108', '1'),
	(6, '花王（Merries）纸尿裤粘贴式S号82片装（4-8kg）', '90', 'main7.jpg', '237', '108', '1'),
	(7, '花王（Merries）纸尿裤粘贴式M号64片装（6-11kg..', '90', 'main16.jpg', '78', '108', '0'),
	(8, 'Merries 花王妙而舒 NB 90片/包 纸尿裤/尿不湿（0-5kg）', '90', 'main6.jpg', '129', '108', '0'),
	(9, '尤妮佳（Moony）纸尿裤女宝拉拉裤XL号38片装（12-17kg）', '90', 'main7.jpg', '56', '108', '0'),
	(10, '花王（Merries）纸尿裤粘贴式S号82片装（4-8kg）', '90', 'main10.jpg', '478', '108', '0'),
	(11, 'Merries 花王妙而舒 NB 90片/包 纸尿裤/尿不湿（0-5kg）', '90', 'main6.jpg', '129', '108', '0'),
	(12, '花王（Merries）纸尿裤粘贴式S号82片装（4-8kg）', '90', 'main15.jpg', '320', '108', '0'),
	(13, 'Merries 花王妙而舒 NB 90片/包 纸尿裤/尿不湿（0-5kg）', '90', 'main11.jpg', '139', '108', '0'),
	(14, '花王（Merries）纸尿裤粘贴式S号82片装（4-8kg）', '90', 'main12.jpg', '96', '108', '0'),
	(15, '花王（Merries）纸尿裤粘贴式S号82片装（4-8kg）', '90', 'main12.jpg', '315', '108', '0'),
	(16, 'Merries 花王妙而舒 NB 90片/包 纸尿裤/尿不湿（0-5kg）', '90', 'main10.jpg', '123', '108', '0'),
	(17, '花王（Merries）纸尿裤粘贴式S号82片装（4-8kg）', '90', 'main8.jpg', '298', '108', '0'),
	(18, '花王（Merries）纸尿裤粘贴式S号82片装（4-8kg）', '90', 'main13.jpg', '320', '108', '0'),
	(19, '尤妮佳（Moony）纸尿裤女宝拉拉裤XL号38片装（12-17kg）', '90', 'main6.jpg', '106', '108', '0'),
	(20, '花王（Merries）纸尿裤粘贴式L号54片装（9-14kg）', '90', 'main8.jpg', '115', '108', '0'),
	(21, '尤妮佳（Moony）纸尿裤女宝拉拉裤XL号38片装（12-17kg）', '90', 'main15.jpg', '123', '108', '0'),
	(22, 'Merries 花王妙而舒 NB 90片/包 纸尿裤/尿不湿（0-5kg）', '90', 'main11.jpg', '155', '108', '0'),
	(23, '花王（Merries）纸尿裤粘贴式S号82片装（4-8kg）', '90', 'main12.jpg', '65', '108', '0'),
	(24, '花王（Merries）纸尿裤粘贴式S号82片装（4-8kg）', '90', 'main8.jpg', '104', '108', '0'),
	(25, 'Merries 花王妙而舒 NB 90片/包 纸尿裤/尿不湿（0-5kg）', '90', 'main6.jpg', '89', '108', '0'),
	(26, 'Merries 花王妙而舒 NB 90片/包 纸尿裤/尿不湿（0-5kg）', '90', 'main6.jpg', '0', '108', '0'),
	(27, 'Merries 花王妙而舒 NB 90片/包 纸尿裤/尿不湿（0-5kg）', '90', 'main6.jpg', '259', '108', '0'),
	(28, 'Merries 花王妙而舒 NB 90片/包 纸尿裤/尿不湿（0-5kg）', '90', 'main10.jpg', '123', '108', '0'),
	(29, 'Merries 花王妙而舒 NB 90片/包 纸尿裤/尿不湿（0-5kg）', '90', 'main7.jpg', '100', '108', '0'),
	(30, '花王（Merries）纸尿裤粘贴式S号82片装（4-8kg）', '90', 'main15.jpg', '245', '108', '0'),
	(31, '花王（Merries）纸尿裤粘贴式L号54片装（9-14kg）', '90', 'main8.jpg', '115', '108', '0'),
	(32, 'Merries 花王妙而舒 NB 90片/包 纸尿裤/尿不湿（0-5kg）', '90', 'main6.jpg', '97', '108', '0'),
	(33, '尤妮佳（Moony）纸尿裤女宝拉拉裤XL号38片装（12-17kg）', '90', 'main6.jpg', '106', '108', '0'),
	(34, 'Merries 花王妙而舒 NB 90片/包 纸尿裤/尿不湿（0-5kg）', '90', 'main10.jpg', '129', '108', '0'),
	(35, '花王（Merries）纸尿裤粘贴式L号54片装（9-14kg）', '90', 'main8.jpg', '115', '108', '0'),
	(36, 'Merries 花王妙而舒 NB 90片/包 纸尿裤/尿不湿（0-5kg）', '90', 'main6.jpg', '156', '108', '0'),
	(37, '花王（Merries）纸尿裤粘贴式L号54片装（9-14kg）', '90', 'main8.jpg', '98', '108', '0'),
	(38, 'Merries 花王妙而舒 NB 90片/包 纸尿裤/尿不湿（0-5kg）', '90', 'main10.jpg', '167', '108', '0'),
	(39, '花王（Merries）纸尿裤粘贴式S号82片装（4-8kg）', '90', 'main8.jpg', '320', '108', '0'),
	(40, '尤妮佳（Moony）纸尿裤女宝拉拉裤XL号38片装（12-17kg）', '90', 'main15.jpg', '106', '108', '0');
/*!40000 ALTER TABLE `goods` ENABLE KEYS */;

-- 正在导出表  work.user 的数据：~6 rows (大约)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`idx`, `username`, `email`, `password`) VALUES
	(1, 'zjj', '6666666666@qq.com', 'wohen666'),
	(2, '甘添龙', '343323223543@qq.com', 'woshixiaolong'),
	(3, '祝谧是猪', '3243534534@qq.com', 'woshizhu'),
	(4, '池俊三', '248375984343@qq.com', 'woshiajun'),
	(5, '陈礼华', '21432452@qq.com', 'woshilihua'),
	(6, '1324324', '2142546@qq.com', '324353'),
	(7, '黄玉媛', '2849732984@qq.com', 'woshiyuyuan');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
