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

/**
 * Concept Map question renderer class.
 *
 * @package    qtype
 * @subpackage diagram
 * @copyright  2011 Jorge Villalon
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */


defined('MOODLE_INTERNAL') || die();


/**
 * Generates the output for diagram questions.
 *
 * @copyright  2011 Jorge Villalon
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class qtype_diagram_renderer extends qtype_renderer
{
    public function formulation_and_controls(question_attempt $qa,
                                             question_display_options $options)
    {

        $question = $qa->get_question();
        $responseoutput = $question->get_format_renderer($this->page);

        // Answer field.
        $step = $qa->get_last_step_with_qt_var('answer');
        if (!$step->has_qt_var('answer') && empty($options->readonly)) {
            // Question has never been answered, fill it with response template.
            $step = new question_attempt_step(array('answer' => $question->defaultanswer));
        }

        $palettes = $question->selectedpalettes;
        if (empty($palettes)) {
            $palettes = 'general;images;uml;er;bpmn;flowchart;basic';
        }

         $answer = $responseoutput->response_area('answer', $qa,
                $step, 12, $options->context, !empty($options->readonly),$palettes);

        $result = '';
        $result .= html_writer::tag('div', $question->format_questiontext($qa),
            array('class' => 'qtext'));

        $result .= html_writer::start_tag('div', array('class' => 'ablock'));
        $result .= html_writer::tag('div', $answer, array('class' => 'answer'));
        $result .= html_writer::end_tag('div');

        return $result;
    }

    public function manual_comment(question_attempt $qa, question_display_options $options)
    {
        if ($options->manualcomment != question_display_options::EDITABLE) {
            return '';
        }

        $question = $qa->get_question();
        return html_writer::nonempty_tag('div', $question->format_text(
            $question->graderinfo, $question->graderinfo, $qa, 'qtype_diagram',
            'graderinfo', $question->id), array('class' => 'graderinfo'));
    }
}


class qtype_diagram_format_plain_renderer extends plugin_renderer_base
{

    protected function div($id, $name, $response, $readonly, $palettes)
    {
        global $CFG, $USER;

        $lang = $USER->lang;
        $parts = explode("_", $lang);
        if (count($parts) > 1) {
            $lang = $parts[0] . '_' . strtoupper($parts[1]);
        }

        $answer = '<script type="text/javascript" language="javascript" src="' . $CFG->wwwroot . '/question/type/diagram/script.js"></script>';
        $answer .= '<input type="hidden" id="' . $id . '" name="' . $name . '" value="' . $response . '">';

        $url = $CFG->wwwroot . '/question/type/diagram/drawio/index.html';
        //$url = https://www.draw.io
        if ($readonly) {
            $answer .= '<iframe readonly="true" input="' . $id . '" id="diagram" frameborder="0" width="100%" height="600" src="' . $url . '?embed=1&proto=json&chrome=0&dev=1"></iframe>';
        } else {
            $answer .= '<iframe readonly="false" input="' . $id . '" id="diagram" frameborder="0" width="100%" height="600" src="' . $url . '?embed=1&proto=json&libs=' . $palettes . '&dev=1"></iframe>';
        }
        return $answer;
    }

    protected function class_name()
    {
        return 'qtype_diagram_plain';
    }

    public function response_area($name, $qa, $step, $lines, $context, $readonly, $palettes)
    {
        $inputname = $qa->get_qt_field_name($name);
        $id = $inputname . '_id';

        return $this->div($id, $inputname, $step->get_qt_var($name), $readonly, $palettes);
    }

}

