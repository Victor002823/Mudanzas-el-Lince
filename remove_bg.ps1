Add-Type -AssemblyName System.Drawing
$inputPath = "c:\Users\NAVI\OneDrive\Documentos\pruebas html\LINCE_NEW\assets\logo.png"
$outputPath = "c:\Users\NAVI\OneDrive\Documentos\pruebas html\LINCE_NEW\assets\logo_transparent.png"

$bmp = [System.Drawing.Bitmap]::FromFile($inputPath)
$newBmp = New-Object System.Drawing.Bitmap($bmp.Width, $bmp.Height)
$g = [System.Drawing.Graphics]::FromImage($newBmp)

for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $pixel = $bmp.GetPixel($x, $y)
        # Check if it's a "checkerboard" color (white or light gray)
        # We use a threshold to capture the pattern
        if ($pixel.R -gt 180 -and $pixel.G -gt 180 -and $pixel.B -gt 180 -and [Math]::Abs($pixel.R - $pixel.G) -lt 10 -and [Math]::Abs($pixel.R - $pixel.B) -lt 10) {
            $newBmp.SetPixel($x, $y, [System.Drawing.Color]::Transparent)
        } else {
            $newBmp.SetPixel($x, $y, $pixel)
        }
    }
}

$newBmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$newBmp.Dispose()
$g.Dispose()
