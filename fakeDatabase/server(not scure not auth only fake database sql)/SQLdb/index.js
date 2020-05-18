
CREATE TABLE `myoofre` (
  `idOffre_idUser` varchar(100) NOT NULL,
  `id_user` text NOT NULL,
  `idoffre` text NOT NULL,
  PRIMARY KEY  (`idOffre_idUser`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

 

CREATE TABLE `offre` (
  `_id` int(200) NOT NULL auto_increment,
  `titre` text NOT NULL,
  `date_d` varchar(200) NOT NULL,
  `date_f` varchar(200) NOT NULL,
  `entreprise` varchar(200) NOT NULL,
  `description` varchar(5000) NOT NULL,
  `imguri` text NOT NULL,
  `active` varchar(500) NOT NULL,
  `type` varchar(500) NOT NULL,
  `cat` varchar(100) NOT NULL,
  `location` varchar(588) NOT NULL,
  PRIMARY KEY  (`_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=19 ;


CREATE TABLE `user` (
  `id` varchar(50) NOT NULL,
  `_pass` text NOT NULL,
  `_exp` text NOT NULL,
  `_cv_link` text NOT NULL,
  `_cat` text NOT NULL,
  `_deplo` text NOT NULL,
  `info` text NOT NULL,
  `mail` varchar(50) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `adresse` varchar(50) NOT NULL,
  `phone` varchar(50) NOT NULL,
  PRIMARY KEY  (`mail`),
  UNIQUE KEY `mail` (`mail`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
