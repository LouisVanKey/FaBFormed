<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

function scanForImages(array &$imagePaths, string $folder, string $folderPath, string $imgPath, string $i = '') {
	if (is_dir($folderPath)) {
// Open the folder
		$dir = opendir($folderPath);

// Loop through files in the folder
		while (($file = readdir($dir)) !== false) {
			// Skip . and .. entries
			if ($file != "." && $file != "..") {
				// Check if the file is an image
				$filePath = $folderPath . '/' . $file;
				if (is_file($filePath) && (strpos($file, '.jpg') !== false || strpos($file, '.png') !== false)) {
					// Add the image path to the array (use relative path, fix backslashes)
					$imagePaths[$folder][$i][] = $imgPath . $file;
				}
			}
		}
		closedir($dir);
	}
}

// Construct the folder path
$folderPath = __DIR__ . "/img/cardbacks/";

// Initialize an array to store image paths
$imagePaths = [];

$folders = [
	'allstats',
	'equipment',
	'hero',
	'nopower',
	'nostats',
	'token',
	'weapon',
];

foreach ($folders as $folder) {
	$folderPath = __DIR__ . "/img/cardbacks/" . $folder;
	scanForImages($imagePaths, $folder, $folderPath, 'img/cardbacks/' . $folder . '/', 1);

	for ($i = 1; $i <= 3; $i++) {
		$folderPath = __DIR__ . "/img/cardbacks/" . $folder . "/" . $i;
		scanForImages($imagePaths, $folder, $folderPath, 'img/cardbacks/' . $folder . '/' . $i . '/', $i);
	}
}

$fp = fopen(__DIR__.'/js/cardbacks.json', 'wb');
// Write the data to the cardbacks.json file
fwrite($fp, json_encode($imagePaths));