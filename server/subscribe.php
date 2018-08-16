<?php

include('./apikey.php');
include('./MailChimp.php');

use \DrewM\MailChimp\MailChimp;

$listId = 'e507ed959d';
$double_optin=false;
$send_welcome=false;
$status = "subscribed";
$email_type = 'html';

$MailChimp = new MailChimp('cde4aaa9e1e77e37dcddebc47c7e8511-us10');

// # Get JSON as a string
$json_str = file_get_contents('php://input');
$json_obj = json_decode($json_str);
$email = $json_obj->email;

$result = $MailChimp->post("lists/$listId/members", [
	'email_address' => $email,
	'status'        => 'subscribed',
]);

$error = $MailChimp->getLastError();

if ($error){
  $response = array(
      'failure' => true,
      'message' => $error
  );
  header('Content-type: application/json');
  echo json_encode($response);
} else {
  $response = array(
      'success' => true,
      'message' => 'Got it, you\'ve been added to our email list!'
  );
  header('Content-type: application/json');
  echo json_encode($response);
}

?>
