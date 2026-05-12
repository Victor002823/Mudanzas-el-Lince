<?php
/**
 * Script para procesar el formulario de contacto de Fletes y Mudanzas El Lince
 */

// Establecer cabeceras para respuesta JSON
header('Content-Type: application/json');

// Solo permitir peticiones POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

// Honeypot para evitar spam (campo oculto que los humanos no llenan)
if (!empty($_POST['website'])) {
    echo json_encode(['success' => true, 'message' => '¡Mensaje enviado con éxito!']); // Engañamos al bot
    exit;
}

// Obtener y sanitizar datos
$nombre = filter_var($_POST['nombre'] ?? '', FILTER_SANITIZE_STRING);
$email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
$telefono = filter_var($_POST['telefono'] ?? '', FILTER_SANITIZE_STRING);
$origen = filter_var($_POST['origen'] ?? '', FILTER_SANITIZE_STRING);
$destino = filter_var($_POST['destino'] ?? '', FILTER_SANITIZE_STRING);
$mensaje = filter_var($_POST['mensaje'] ?? '', FILTER_SANITIZE_STRING);

// Validación básica
if (empty($nombre) || empty($email) || empty($mensaje)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Por favor, rellena todos los campos obligatorios.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'El correo electrónico no es válido.']);
    exit;
}

// Configuración del correo
$to = "mudanzasellince@gmail.com"; // Email de destino (ajustar si es necesario)
$subject = "Nueva Solicitud de Cotización: $nombre";

// Cuerpo del mensaje
$email_content = "Has recibido una nueva solicitud de cotización desde el sitio web.\n\n";
$email_content .= "Detalles del contacto:\n";
$email_content .= "----------------------\n";
$email_content .= "Nombre: $nombre\n";
$email_content .= "Email: $email\n";
$email_content .= "Teléfono: $telefono\n\n";
$email_content .= "Detalles del servicio:\n";
$email_content .= "----------------------\n";
$email_content .= "Origen: $origen\n";
$email_content .= "Destino: $destino\n";
$email_content .= "Inventario/Mensaje:\n$mensaje\n\n";
$email_content .= "----------------------\n";
$email_content .= "Enviado el: " . date("d/m/Y H:i:s") . "\n";

// Cabeceras del correo
$headers = "From: Fletes y Mudanzas El Lince <no-reply@mudanzasellince.com>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Enviar correo
if (mail($to, $subject, $email_content, $headers)) {
    echo json_encode(['success' => true, 'message' => '¡Gracias! Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo pronto.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Lo sentimos, hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctanos por WhatsApp.']);
}
?>
