Add-Type -AssemblyName System.Drawing
$filePath = "C:\Users\rbahi\.gemini\antigravity-ide\brain\eaa02a14-5639-4fef-8e62-73d9a40b7fdc\.user_uploaded\media_1791488661283.png"
$bmp = [System.Drawing.Bitmap]::FromFile($filePath)

for ($y = 130; $y -le 145; $y++) {
    $row = ""
    for ($x = 20; $x -le 165; $x += 2) {
        $p = $bmp.GetPixel($x, $y)
        if ($p.R -lt 140 -and $p.G -lt 140 -and $p.B -lt 140 -and $p.A -gt 100) {
            $row += "#"
        } else {
            $row += "."
        }
    }
    Write-Output ("Y={0:D3}: {1}" -f $y, $row)
}

$bmp.Dispose()
