<?php

function qtype_diagram_pluginfile($course, $cm, $context, $filearea, $args, $forcedownload) {
    global $CFG;
    require_once($CFG->libdir . '/questionlib.php');
    question_pluginfile($course, $context, 'qtype_diagram', $filearea, $args, $forcedownload);
}
