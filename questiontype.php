<?php

defined('MOODLE_INTERNAL') || die();

/**
 * Diagram questio type.
 * @copyright  2018 Yannick Bröker
 * @license    https://www.apache.org/licenses/LICENSE-2.0 Apache License Version 2.0
 */
class qtype_diagram extends question_type
{
    public function is_manual_graded()
    {
        return true;
    }

    public function response_file_areas()
    {
        return array('answer');
    }

    public function get_question_options($question)
    {
        global $DB;
        $question->options = $DB->get_record('qtype_diagram_options', array('questionid' => $question->id), '*', MUST_EXIST);
        parent::get_question_options($question);
    }

    public function save_question_options($formdata)
    {
        global $DB;
        $context = $formdata->context;

        $options = $DB->get_record('qtype_diagram_options', array('questionid' => $formdata->id));
        if (!$options) {
            $options = new stdClass();
            $options->questionid = $formdata->id;
            $options->id = $DB->insert_record('qtype_diagram_options', $options);
        }

        $options->graderinfo = $this->import_or_save_files($formdata->graderinfo,
            $context, 'qtype_diagram', 'graderinfo', $formdata->id);
        $options->graderinfoformat = $formdata->graderinfo['format'];

        $options->defaultanswer = $formdata->defaultanswer;
        $options->selectedpalettes = $formdata->selectedpalettes;

        $DB->update_record('qtype_diagram_options', $options);
    }

    protected function initialise_question_instance(question_definition $question, $questiondata)
    {
        parent::initialise_question_instance($question, $questiondata);
        $question->graderinfo = $questiondata->options->graderinfo;
        $question->graderinfoformat = $questiondata->options->graderinfoformat;
        $question->defaultanswer = $questiondata->options->defaultanswer;
        $question->selectedpalettes = $questiondata->options->selectedpalettes;
    }

    /**
     * @return array the different response formats that the question type supports.
     * internal name => human-readable name.
     */
    public function response_formats()
    {
        return array(
            'plain' => get_string('formatplain', 'qtype_essay'),
        );
    }

    function move_files($questionid, $oldcontextid, $newcontextid)
    {
        parent::move_files($questionid, $oldcontextid, $newcontextid);
        $this->move_files_in_answers($questionid, $oldcontextid, $newcontextid);
    }

    protected function delete_files($questionid, $contextid)
    {
        parent::delete_files($questionid, $contextid);
        $this->delete_files_in_answers($questionid, $contextid);
    }

    /**
     * If your question type has a table that extends the question table, and
     * you want the base class to automatically save, backup and restore the extra fields,
     * override this method to return an array wherer the first element is the table name,
     * and the subsequent entries are the column names (apart from id and questionid).
     *
     * @return mixed array as above, or null to tell the base class to do nothing.
     */
    public function extra_question_fields() {
        return array('qtype_diagram_options','graderinfo','graderinfoformat','defaultanswer','selectedpalettes');
    }



    /*
     * Imports question from the Moodle XML format
     *
     * Imports question using information from extra_question_fields function
     * If some of you fields contains id's you'll need to reimplement this
     */
    public function import_from_xml($data, $question, qformat_xml $format, $extra=null) {
        $question_type = $data['@']['type'];
        if ($question_type != $this->name()) {
            return false;
        }

        $qo = $format->import_headers($data);
        $qo->qtype = $question_type;


        $extraquestionfields = array('defaultanswer','selectedpalettes');
        foreach ($extraquestionfields as $field) {
            $qo->$field = $format->getpath($data, array('#', $field, 0, '#'), '');
        }

        $qo->graderinfo=$format->import_text_with_files($data, array('#', 'graderinfo', 0));

        // Run through the answers.
        $answers = $data['#']['answer'];
        $a_count = 0;
        $extraanswersfields = $this->extra_answer_fields();
        if (is_array($extraanswersfields)) {
            array_shift($extraanswersfields);
        }
        foreach ($answers as $answer) {
            $ans = $format->import_answer($answer);
            if (!$this->has_html_answers()) {
                $qo->answer[$a_count] = $ans->answer['text'];
            } else {
                $qo->answer[$a_count] = $ans->answer;
            }
            $qo->fraction[$a_count] = $ans->fraction;
            $qo->feedback[$a_count] = $ans->feedback;
            if (is_array($extraanswersfields)) {
                foreach ($extraanswersfields as $field) {
                    $qo->{$field}[$a_count] =
                        $format->getpath($answer, array('#', $field, 0, '#'), '');
                }
            }
            ++$a_count;
        }
        return $qo;
    }


    /*
     * Export question to the Moodle XML format
     *
     * Export question using information from extra_question_fields function
     * If some of you fields contains id's you'll need to reimplement this
     */
    public function export_to_xml($question, qformat_xml $format, $extra=null) {
        $expout='';


        $extraquestionfields = array('defaultanswer','selectedpalettes');
        foreach ($extraquestionfields as $field) {
            $exportedvalue = $format->xml_escape($question->options->$field);
            $expout .= "    <{$field}>{$exportedvalue}</{$field}>\n";
        }


        $fs = get_file_storage();
        $contextid = $question->contextid;


        $expout .= "    <graderinfo " . $format->format($question->options->graderinfoformat) . ">\n";
        $expout .= $format->writetext($question->options->graderinfo, 3);
        $expout .= $format->write_files($fs->get_area_files($contextid, 'qtype_diagram', 'graderinfo', $question->id));
        $expout .= "    </graderinfo>\n";


        $extraanswersfields = $this->extra_answer_fields();
        if (is_array($extraanswersfields)) {
            array_shift($extraanswersfields);
        }
        foreach ($question->options->answers as $answer) {
            $extra = '';
            if (is_array($extraanswersfields)) {
                foreach ($extraanswersfields as $field) {
                    $exportedvalue = $format->xml_escape($answer->$field);
                    $extra .= "      <{$field}>{$exportedvalue}</{$field}>\n";
                }
            }

            $expout .= $format->write_answer($answer, $extra);
        }
        return $expout;
    }





}
