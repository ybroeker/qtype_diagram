<?php

defined('MOODLE_INTERNAL') || die();

class qtype_diagram_edit_form extends question_edit_form
{
    /**
     * Add question-type specific form fields.
     *
     * @param MoodleQuickForm $mform the form being built.
     */
    function definition_inner($mform)
    {
        global $CFG;
        $qtype = question_bank::get_qtype('diagram');

        $mform->addElement('editor', 'graderinfo', get_string('graderinfo', 'qtype_diagram'),
            array('rows' => 10), $this->editoroptions);


        $mform->addElement('header', 'default_diagram_header', get_string('default_diagram', 'qtype_diagram'));
        //$mform->addElement('text', 'default_diagram_answer', "Antwort", array('size' => 7));

        $script = '<script type="text/javascript" language="javascript" src="' . $CFG->wwwroot . '/question/type/diagram/script.js"></script>';
        $frame = '<iframe readonly="false" input="defaultanswer" id="diagram" frameborder="0" width="100%" height="600" src="' . $CFG->wwwroot . '/question/type/diagram/drawio/index.html?embed=1&proto=json&dev=1"></iframe>';

        $mform->addElement('html', $script);
        $mform->addElement('html', $frame);
        $mform->addElement('hidden', 'defaultanswer', "Antwort",array('id'=>'defaultanswer'));
        //$mform->addElement('text', 'defaultanswer', "Antwort", array('id'=>'defaultanswer'));
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

        return $question;
    }

    public function qtype()
    {
        return 'diagram';
    }
}
