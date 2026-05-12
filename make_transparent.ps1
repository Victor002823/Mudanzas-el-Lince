Add-Type -AssemblyName System.Drawing
$inputPath = "C:\Users\NAVI\.gemini\antigravity\brain\47d9791a-4e8d-4ecb-9ce8-4bfee0dfc50f\logo_clean_white_png_1777789809608.png"
$outputPath = "c:\Users\NAVI\OneDrive\Documentos\pruebas html\LINCE_NEW\assets\logo_transparent.png"

$bmp = [System.Drawing.Bitmap]::FromFile($inputPath)
$newBmp = New-Object System.Drawing.Bitmap($bmp.Width, $bmp.Height)

for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $pixel = $bmp.GetPixel($x, $y)
        # Check if it's white or very close to white
        if ($pixel.R -gt 245 -and $pixel.G -gt 245 -and $pixel.B -gt 245) {
            $newBmp.SetPixel($x, $y, [System.Drawing.Color]::Transparent)
        } else {
            $newBmp.SetPixel($x, $y, $pixel)
        }
    }
}

$newBmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$newBmp.Dispose()
