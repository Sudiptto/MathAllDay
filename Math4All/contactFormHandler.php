<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'DeltaMathAnswers.com';

    $email_subject "New Form Submission";

    $email_body = "User Name:  $name.\"n". 
                        "User Email: $visitor_email.\n". 
                            "User Message: $message.\n";

    $to = "contactdmanswers@gmail.com";

    $header = "FROM : $email_from \r\n";
    $header .= "Reply-To: $visitor_email \r\n";

    mail($to, $email_subject, $email_body, $headers);
    header("Location: index.html");

?>