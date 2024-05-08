<?php

$name= $_POST['name'];
$visitor_email = $_POST['email'];
$subject= $_POST['subject'];
$message= $_POST['message'];

$email_from='email+website';


$email_subject='new form submission';


$email_body ="User name: $name.\n".
              "User Email:$visitor_email.\n".
               "Subject: $subject.\n".
                "User Message:$message. \n";

$to = 'email where information is send by student';

$headers = "Form: $email_from\r\n";

$headers .="Replt-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);


header("Location: contactpage.html");



?>