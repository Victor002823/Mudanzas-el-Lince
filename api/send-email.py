from http.server import BaseHTTPRequestHandler
import json
import os
import urllib.request

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        try:
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data.decode('utf-8'))
        except Exception:
            data = {}

        nombre = data.get('nombre', '').strip()
        email = data.get('email', '').strip()
        telefono = data.get('telefono', '').strip()
        origen = data.get('origen', '').strip()
        destino = data.get('destino', '').strip()
        mensaje = data.get('mensaje', '').strip()
        honeypot = data.get('honeypot_field', '').strip()

        # 🔒 Honeypot anti-spam
        if honeypot:
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'success': True, 'message': 'OK'}).encode('utf-8'))
            return

        # ✔ Validación básica
        if not all([nombre, email, telefono, origen, destino, mensaje]):
            self.send_response(400)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'success': False, 'message': 'Completa todos los campos'}).encode('utf-8'))
            return

        # 📩 Estructura del correo HTML para Brevo
        html_content = f"""
            <h2>Nueva solicitud de cotización (Prueba Python Vercel)</h2>
            <p><strong>Nombre:</strong> {nombre}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Teléfono:</strong> {telefono}</p>
            <p><strong>Origen:</strong> {origen}</p>
            <p><strong>Destino:</strong> {destino}</p>
            <p><strong>Mensaje:</strong><br>{mensaje.replace('\n', '<br>')}</p>
        """

        payload = {
            "sender": {
                "name": "Pruebas Lince",
                "email": "prueba@api0028.qzz.io"
            },
            "to": [
                {
                    "email": "fletesymudanzasellince@gmail.com",
                    "name": "Fletes y Mudanzas El Lince"
                }
            ],
            "subject": f"Nueva cotización (Prueba Python) - {nombre}",
            "htmlContent": html_content,
            "replyTo": {
                "email": email,
                "name": nombre
            }
        }

        brevo_url = "https://api.brevo.com/v3/smtp/email"
        api_key = os.environ.get('BREVO_API_KEY', '')

        req = urllib.request.Request(
            brevo_url,
            data=json.dumps(payload).encode('utf-8'),
            headers={
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'api-key': api_key
            },
            method='POST'
        )

        try:
            with urllib.request.urlopen(req) as response:
                if response.getcode() in [200, 201]:
                    self.send_response(200)
                    self.send_header('Content-type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({'success': True, 'message': 'Mensaje enviado correctamente'}).encode('utf-8'))
                else:
                    self.send_response(500)
                    self.send_header('Content-type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({'success': False, 'message': 'Error al enviar correo'}).encode('utf-8'))
        except Exception as e:
            self.send_response(500)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'success': False, 'message': 'Error interno del servidor'}).encode('utf-8'))
    
    def do_GET(self):
        self.send_response(405)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps({'success': False, 'message': 'Método no permitido'}).encode('utf-8'))
