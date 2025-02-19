<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Get the main folder and pitch from query parameters
$mainFolder = isset($_GET['folder']) ? $_GET['folder'] : '';
$pitch = isset($_GET['pitch']) ? $_GET['pitch'] : '1'; // Default pitch is 1

// Construct the folder path
$folderPath = "D:/Desktop/XAMPP/htdocs/FaBFormed/img/cardbacks/" . $mainFolder . "/" . $pitch;

// Debugging: Output the final folder path
echo "Folder Path: " . $folderPath . "<br>";

// Ensure the folder exists
if (is_dir($folderPath)) {
    // Initialize an array to store image paths
    $imagePaths = [];

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
                $imagePaths[] = 'img/cardbacks/' . $mainFolder . '/' . $pitch . '/' . $file;
            }
        }
    }
    closedir($dir);

    // Return the list of images as a JSON response, without escaping slashes
    echo json_encode($imagePaths, JSON_UNESCAPED_SLASHES);
} else {
    // If folder doesn't exist, return an empty array
    echo json_encode([]);
}
?>
