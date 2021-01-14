<?php
$xml = simplexml_load_file('source.xml');
if (!empty($_GET['id']) && is_numeric($_GET['id'])) :
    $id = $_GET['id'] - 1;
    if (isset($xml->page[$id])) :
        $content = $xml->page[$id]->content;
    endif;
endif;
