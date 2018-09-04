<?php

/**
 * Represents a diagram question.
 *
 * @package question
 * @subpackage diagram
 * @copyright  2018 Yannick Bröker
 * @license    https://www.apache.org/licenses/LICENSE-2.0 Apache License Version 2.0
 */


defined('MOODLE_INTERNAL') || die();



class qtype_diagram_question extends question_with_responses {
    public $graderinfo;
    public $graderinfoformat;

    public $defaultanswer;
    public $selectedpalettes;

    public function make_behaviour(question_attempt $qa, $preferredbehaviour) {
        question_engine::load_behaviour_class('manualgraded');
        return new qbehaviour_manualgraded($qa, $preferredbehaviour);
    }

    /**
     * @param moodle_page the page we are outputting to.
     * @return qtype_diagram_format_renderer_base the response-format-specific renderer.
     */
    public function get_format_renderer(moodle_page $page) {
        return $page->get_renderer('qtype_diagram', 'format_plain');
    }

    public function get_expected_data() {
        $expecteddata = array('answer' => PARAM_TEXT);
        return $expecteddata;
    }
	
    public function summarise_response(array $response) {
       if (isset($response['answer'])) {
            return question_utils::to_plain_text($response['answer'],
                    FORMAT_PLAIN, array('para' => false));
        } else {
            return null;
        }
    }
	
    public function get_correct_response() {
        return null;
    }

    public function is_complete_response(array $response) {
        return !empty($response['answer']);
    }

    public function is_same_response(array $prevresponse, array $newresponse) {
        return question_utils::arrays_same_at_key_missing_is_blank(
                $prevresponse, $newresponse, 'answer');
    }

    public function check_file_access($qa, $options, $component, $filearea, $args, $forcedownload) {
		if ($component == 'qtype_diagram' && $filearea == 'graderinfo') {
            return $options->manualcomment;

        } else {
            return parent::check_file_access($qa, $options, $component,
                    $filearea, $args, $forcedownload);
        }
    }
}
