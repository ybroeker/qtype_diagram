<?php


defined('MOODLE_INTERNAL') || die();


function xmldb_qtype_diagram_upgrade($oldversion)
{

    global $CFG, $DB;

    $dbman = $DB->get_manager();
    if ($oldversion < 2018090112) {

        // Define table matrix to be created
        $table = new xmldb_table('qtype_diagram_options');

        // Adding fields to table matrix
        $newField = $table->add_field('defaultanswer', XMLDB_TYPE_TEXT, 'medium', null, null, null, null, null, null);
        $dbman->add_field($table, $newField);


        upgrade_plugin_savepoint(true, 2018090112, 'qtype', 'diagram');
    }

    if ($oldversion < 2018090126) {

        // Define table matrix to be created
        $table = new xmldb_table('qtype_diagram_options');

        // Adding fields to table matrix
        $newField = $table->add_field('selectedpalettes', XMLDB_TYPE_TEXT, 'short', null, null, null, null, null, null);
        $dbman->add_field($table, $newField);


        upgrade_plugin_savepoint(true, 2018090126, 'qtype', 'diagram');
    }


    return true;
}
