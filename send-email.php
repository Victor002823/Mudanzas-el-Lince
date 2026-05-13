<?php
/**
 * Script para procesar el formulario de contacto de Fletes y Mudanzas El Lince
 * Incluye medidas anti-spam avanzadas.
 */

// Desactivar visualización de errores para no romper el JSON
error_reporting(0);
ini_set('display_errors', 0);

// Establecer cabeceras para respuesta JSON
header('Content-Type: application/json');

// Solo permitir peticiones POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

// 1. Honeypot Check
// Si este campo está lleno, es un bot.
if (!empty($_POST['honeypot_field'])) {
    // Engañamos al bot respondiendo éxito pero sin hacer nada
    echo json_encode(['success' => true, 'message' => '¡Gracias! Tu mensaje ha sido enviado correctamente.']);
    exit;
}

// 2. Timestamp Check (Min 3 seconds)
// Los humanos tardan más de 3 segundos en llenar el formulario.
$current_time = time();
$form_timestamp = isset($_POST['form_timestamp']) ? (int)$_POST['form_timestamp'] : 0;

// Si el timestamp es 0 o no existe, podría ser un bot o un error de carga.
// Para ser estrictos en seguridad, lo bloqueamos.
if ($form_timestamp === 0) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Error de validación de seguridad (TS0).']);
    exit;
}

if (($current_time - $form_timestamp) < 3) {
    // Es muy probable que sea un bot enviando instantáneamente
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Envío demasiado rápido. Por favor, espera un momento.']);
    exit;
}

// 3. Obtener y sanitizar datos (FILTER_SANITIZE_STRING está obsoleto en PHP 8.1+)
$nombre = htmlspecialchars(trim($_POST['nombre'] ?? ''), ENT_QUOTES, 'UTF-8');
$email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
$telefono = htmlspecialchars(trim($_POST['telefono'] ?? ''), ENT_QUOTES, 'UTF-8');
$origen = htmlspecialchars(trim($_POST['origen'] ?? ''), ENT_QUOTES, 'UTF-8');
$destino = htmlspecialchars(trim($_POST['destino'] ?? ''), ENT_QUOTES, 'UTF-8');
$mensaje = htmlspecialchars(trim($_POST['mensaje'] ?? ''), ENT_QUOTES, 'UTF-8');

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

// 4. Configuración del correo
$to = "mudanzasellince@gmail.com";
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
    echo json_encode(['success' => false, 'message' => 'Lo sentimos, hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.']);
}
?>
