<?php

$installer = $this;

$installer->startSetup();

$installer->run("
ALTER TABLE {$this->getTable('wlpayment')} 
ADD `operadora` varchar(255) NOT NULL default '' after `transMensagem`,
ADD `operadora2` varchar(255) NOT NULL default '' after `transMensagem2`
");

$installer->endSetup(); 