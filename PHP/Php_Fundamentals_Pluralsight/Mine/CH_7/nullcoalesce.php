<?php

$authors = ["Charles Dickens", "Jane Austin", "William Shakespeare", "Mark Twain", "Louisa May Alcott"];

$count = count($authors);
$outcome = $count ? $count : "Count unavailable";
$outcome = $count ?? "Count unavailable";