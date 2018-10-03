<?php


defined('MOODLE_INTERNAL') || die();


function xmldb_qtype_diagram_upgrade($oldversion)
{
    global $CFG, $DB;

    $dbman = $DB->get_manager();

    if ($oldversion < 2018100301) {
        // Define field customlibs to be added to qtype_diagram_options.
        $table = new xmldb_table('qtype_diagram_options');
        $field = new xmldb_field('customlibs', XMLDB_TYPE_TEXT, null, null, null, null, null, 'selectedpalettes');

        // Conditionally launch add field customlibs.
        if (!$dbman->field_exists($table, $field)) {
            $dbman->add_field($table, $field);
        }
        upgrade_plugin_savepoint(true, 2018100301, 'qtype', 'diagram');
    }

    return true;

}
