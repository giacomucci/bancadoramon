<?php
/**
 * aheadWorks Co.
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the EULA
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://ecommerce.aheadworks.com/AW-LICENSE.txt
 *
 * =================================================================
 *                 MAGENTO EDITION USAGE NOTICE
 * =================================================================
 * This software is designed to work with Magento community edition and
 * its use on an edition other than specified is prohibited. aheadWorks does not
 * provide extension support in case of incorrect edition use.
 * =================================================================
 *
 * @category   AW
 * @package    AW_Ajaxcartpro
 * @version    3.2.14
 * @copyright  Copyright (c) 2010-2012 aheadWorks Co. (http://www.aheadworks.com)
 * @license    http://ecommerce.aheadworks.com/AW-LICENSE.txt
 */


class AW_Ajaxcartpro_Adminhtml_Awajaxcartpro_System_AjaxController extends Mage_Adminhtml_Controller_Action
{
    public function wysiwygPluginVariablesAction()
    {
        $customVariables = Mage::getModel('core/variable')->getVariablesOptionArray(true);
        $storeContactVariables = Mage::getModel('core/source_email_variables')->toOptionArray(true);
        $acpVariables = Mage::helper('ajaxcartpro')->getWysiwygVariables();
        $variables = array($acpVariables, $storeContactVariables, $customVariables);
        $this->getResponse()->setBody(Zend_Json::encode($variables));
    }

    protected function _isAllowed()
    {
        return Mage::getSingleton('admin/session')->isAllowed('system/config/ajaxcartpro');
    }
}

