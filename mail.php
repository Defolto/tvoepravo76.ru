<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$secondname = $_POST['user_second_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$text = $_POST['user_text'];
$data = $_POST['user_data'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'mid7_zakaz@inbox.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '952863mak@'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('mid7_zakaz@inbox.ru'); // от кого будет уходить письмо?
$mail->addAddress('defoltmaks@gmail.com');     // Кому будет уходить письмо quick-count@yandex.ru
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта';
$mail->Body    = 'Новая запись к Вам в офис!<br>' .$name . ' ' .$secondname. ' оставил(а) заявку, его(её) телефон ' .$phone. '<br>Почта этого пользователя: ' .$email. '<br>Его комментарий: ' .$text. '<br>Желаемая дата встречи: ' .$data. '<br>Перезвоните ему и назначьте время встречи!';
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}
?>
