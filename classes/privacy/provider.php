<?php

namespace qtype_formulas\privacy;
defined('MOODLE_INTERNAL') || die();

/**
 * Privacy main class.
 *
 * @package    qtype_diagram
 * @copyright  2018 Yannick Bröker
 * @license    https://www.apache.org/licenses/LICENSE-2.0 Apache License Version 2.0
 */
class provider implements \core_privacy\local\metadata\null_provider
{
    // To provide php 5.6 (33_STABLE) and up support.
    use \core_privacy\local\legacy_polyfill;

    /**
     * Get the language string identifier with the component's language
     * file to explain why this plugin stores no data.
     *
     * @return  string
     */
    public static function get_reason(): string
    {
        return 'privacy:metadata';
    }
}