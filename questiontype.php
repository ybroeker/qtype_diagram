<?php

// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

defined('MOODLE_INTERNAL') || die();

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
            $context, 'qtype_essay', 'graderinfo', $formdata->id);
        $options->graderinfoformat = $formdata->graderinfo['format'];

        $options->defaultanswer = $formdata->defaultanswer;

        $DB->update_record('qtype_diagram_options', $options);
    }

    protected function initialise_question_instance(question_definition $question, $questiondata)
    {
        parent::initialise_question_instance($question, $questiondata);
        $question->graderinfo = $questiondata->options->graderinfo;
        $question->graderinfoformat = $questiondata->options->graderinfoformat;
        $question->defaultanswer = $questiondata->options->defaultanswer;
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
}
