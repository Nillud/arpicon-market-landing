<?php
$u_persona = $_POST['name'];
$u_address = $_POST['email'];
$u_phone = $_POST['phone'];
$hot_org_name = $_POST['hot_org_name'];
$city = $_POST['city'];

$body = "%0AЛифтовая: " . $hot_org_name . "%0AГород: " . $city . "%0AФИО: " . $u_persona . "%0AEmail: " . $u_address . "%0AТелефон: " . $u_phone . "";
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://online.arpicon.ru/bot_telegram.php?new=3",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => array('text' => $body),
));

$response = curl_exec($curl);

curl_close($curl);
echo "true";