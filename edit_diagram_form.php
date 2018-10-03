<?php

defined('MOODLE_INTERNAL') || die();

class qtype_diagram_edit_form extends question_edit_form
{
    /**
     * Add question-type specific form fields.
     *
     * @param MoodleQuickForm $mform the form being built.
     * @throws coding_exception
     */
    function definition_inner($mform)
    {
        global $CFG;

        $mform->addElement('editor', 'graderinfo', get_string('graderinfo', 'qtype_diagram'),
            array('rows' => 10), $this->editoroptions);


        $mform->addElement('header', 'default_diagram_header', get_string('default_diagram', 'qtype_diagram'));

        $mform->addElement('text', 'selectedpalettes', "Paletten", array('size' => 100, 'maxlength' => 255));
        $mform->setDefault('selectedpalettes', 'general;images;uml;er;bpmn;flowchart;basic');
        $mform->addHelpButton('selectedpalettes', 'selectedpalettes', 'qtype_diagram');
        $mform->setType('selectedpalettes', PARAM_RAW);

        $mform->addElement('text', 'customlibs', "Custom Libs", array('size' => 100, 'maxlength' => 255));
        $mform->setDefault('customlibs', '');
        $mform->addHelpButton('customlibs', 'customlibs', 'qtype_diagram');
        $mform->setType('customlibs', PARAM_RAW);

        $script = '<script type="text/javascript" language="javascript" src="' . $CFG->wwwroot . '/question/type/diagram/script.js"></script>';

        $url = $CFG->wwwroot . '/question/type/diagram/drawio/index.html?embed=1&dev=1&proto=json';
        //$url = 'https://www.draw.io?embed=1&proto=json';

        $frame = '<iframe data-readonly="false" data-input="defaultanswer" id="diagram" frameborder="0" style="width:100%; height: 90vh" src="' . $url . '"></iframe>';

        $mform->addElement('html', $script);
        $mform->addElement('html', $frame);
        $mform->addElement('hidden', 'defaultanswer', "", array('id' => 'defaultanswer'));
        $mform->setType('defaultanswer', PARAM_RAW);
    }

    protected function data_preprocessing($question)
    {
        $question = parent::data_preprocessing($question);

        if (empty($question->options)) {
            return $question;
        }

        $draftid = file_get_submitted_draft_itemid('graderinfo');
        $question->graderinfo = array();
        $question->graderinfo['text'] = file_prepare_draft_area(
            $draftid,           // draftid
            $this->context->id, // context
            'qtype_diagram',      // component
            'graderinfo',       // filarea
            !empty($question->id) ? (int)$question->id : null, // itemid
            $this->fileoptions, // options
            $question->options->graderinfo // text
        );


        $question->graderinfo['format'] = $question->options->graderinfoformat;
        $question->graderinfo['itemid'] = $draftid;

        $question->defaultanswer = $question->options->defaultanswer;
        $question->selectedpalettes = $question->options->selectedpalettes;
        $question->customlibs = $question->options->customlibs;


        return $question;
    }

    public function qtype()
    {
        return 'diagram';
    }
}
