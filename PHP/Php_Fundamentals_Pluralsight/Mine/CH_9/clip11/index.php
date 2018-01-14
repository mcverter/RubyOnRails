<?php
include 'assets/include.php';
include "assets/dbInfo.php";

if (count($_POST)>0) {
    if ($_POST['email'] !== '') {
        $_SESSION['formPostData'] = $_POST;
        header('Location: final.php');
    } else {
        $emailError = 'validation';
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>PHP Fundamentals</title>
    <link href="assets/styles.css" rel="stylesheet" type="text/css" />
</head>
<body>
<div id="Header">
    <img src="assets/Dickens.jpg" border="0" alt="">
    <h2>
        Join our list
    </h2>
</div>
<div id="Body">

    <form method="post" action="final.php">
        <div>
            <label>Favorite Author</label>
            <select name="author">
                <?php while($row = $resultObj->fetch_assoc()): ?>)
                <option value="<?=$row['id']?>">
                    <?=$row['first_name']?> <?=$row['last_name']?>
                </option>
                <?php endWhile ?>
            </select>
        </div>
        <div class="multiple">
            <label>Favorite Century</label>
            17th <input type="checkbox" name="century[]" value="17">
            18th <input type="checkbox" name="century[]" value="18">
            19th <input type="checkbox" name="century[]" value="19">
        </div>
        <div>
            <label>Comments:</label>
            <textarea name="comments"></textarea>
        </div>
        <div>
            <label>Name:</label>
            <input type="text" name="name" />
        </div>
        <div class="<?=$emailError?>">
            <label>Email address:</label>
            <input type="text" name="email" />
        </div>
        <div class="multiple">
            <label>Receive Newsletter;</label>
            Yes <input type="radio" name="newsletter" value="no">
            No <input type="radio" name="newsletter" value="yes">
        </div>
        <div class="multiple">
            <label></label>
            <input type="submit" name="submit" value="Join Mailing List">
        </div>
    </form>
</div>
</body>
</html>

<?php
$resultObj->close();
$connection->close();