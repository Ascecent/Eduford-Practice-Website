<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'andres85044@gmail.com';

$email_subject = 'New Form Submission from your website';

$email_body = "User Name: $name.\n".
"User Email: $email.\n".
"Subject: $subject.\n".
"User Message: $message.\n";

$to = 'andres85044@gmail.com'

$headers = "From: $email_from \r\n";
$headers .= "Reply to: $email";

mail($to,$email_subject,$email_body,$headers);

header("Location: contact.html")
?>