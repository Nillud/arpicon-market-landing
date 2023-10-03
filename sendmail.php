<?php
$u_fio = $_POST['fio'];
$u_org_name = $_POST['org_name'];
$u_phone = $_POST['phone'];

$body = "%0AЗапрос с Маркета: " . $u_fio . "%0AОрганизация: " . $u_org_name . "%0AТелефон: " . $u_phone . "";
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