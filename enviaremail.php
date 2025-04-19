<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $assunto = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
    $mensagem = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
    
    $para = "seu-email@dominio.com"; // SUBSTITUA pelo seu e-mail real
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    $corpo_email = "Nome: $nome\n";
    $corpo_email .= "Email: $email\n\n";
    $corpo_email .= "Mensagem:\n$mensagem";
    
    // Configurações adicionais para melhor entrega
    ini_set("sendmail_from", $para);
    ini_set("SMTP", "smtp.seuprovedor.com"); // Ex: smtp.gmail.com
    ini_set("smtp_port", "587");

    if (mail($para, $assunto, $corpo_email, $headers)) {
        header('Location: obrigado.html'); // Página de sucesso
    } else {
        header('Location: erro.html?code=' . error_get_last()['message']);
    }
    exit;
}
?>