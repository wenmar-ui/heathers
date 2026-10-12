Add-Type -AssemblyName System.Drawing

$cardW = 1600
$cardH = 800

$bmp = New-Object System.Drawing.Bitmap $cardW, $cardH
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$g.Clear([System.Drawing.Color]::FromArgb(250, 250, 250)) # bg-[#FAFAFA]

$heroTop = 0
$heroH = $cardH

# 1. Right Slant: polygon(61% 0, 100% 0, 100% 100%, 75% 100%)
$blushBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(248, 238, 240))
$ptsR = @(
    (New-Object System.Drawing.PointF ($cardW * 0.61), 0),
    (New-Object System.Drawing.PointF $cardW, 0),
    (New-Object System.Drawing.PointF $cardW, $cardH),
    (New-Object System.Drawing.PointF ($cardW * 0.75), $cardH)
)
$g.FillPolygon($blushBrush, $ptsR)

# 2. Right Slant Accent: polygon(68% 0, 100% 0, 100% 100%, 82% 100%)
$pinkBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(100, 242, 201, 205))
$ptsRacc = @(
    (New-Object System.Drawing.PointF ($cardW * 0.68), 0),
    (New-Object System.Drawing.PointF $cardW, 0),
    (New-Object System.Drawing.PointF $cardW, $cardH),
    (New-Object System.Drawing.PointF ($cardW * 0.82), $cardH)
)
$g.FillPolygon($pinkBrush, $ptsRacc)

# 3. Main Hero Image (if exists)
$imgPath = 'public/Glamorous Blonde Denim Cutout.png'
if (-not (Test-Path $imgPath)) {
    $imgPath = 'public/heather-hero-denim.png'
}
if (Test-Path $imgPath) {
    $heroImg = [System.Drawing.Image]::FromFile($imgPath)
    # Scaled to max-h ~ 88vh (~700px)
    $imgH = 680
    $imgW = [int]($heroImg.Width * ($imgH / $heroImg.Height))
    # translate-x-[160px] from center
    $imgX = [int](($cardW - $imgW) / 2 + 160)
    $imgY = $cardH - $imgH - 20
    $g.DrawImage($heroImg, $imgX, $imgY, $imgW, $imgH)
    $heroImg.Dispose()
    Write-Output "Image drawn at X=$imgX, Y=$imgY, W=$imgW, H=$imgH. Right edge of img is $($imgX + $imgW)"
}

# 4. Left Slant (Red)
$redBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(233, 32, 46))
$ptsL = @(
    (New-Object System.Drawing.PointF 0, 0),
    (New-Object System.Drawing.PointF ($cardW * 0.48), 0),
    (New-Object System.Drawing.PointF ($cardW * 0.56), $cardH),
    (New-Object System.Drawing.PointF 0, $cardH)
)
$g.FillPolygon($redBrush, $ptsL)

# Test placing Quote on Right Slant
# Right slant area starts around X = 0.61 * 1600 = 976 to 1600.
# Let's test placing quote around X = 1180 to 1500, Y = 120 or Y = 160
$quoteFont = New-Object System.Drawing.Font("Georgia", [float]16.0, [System.Drawing.FontStyle]::Italic)
$quoteMarkFont = New-Object System.Drawing.Font("Georgia", [float]42.0, [System.Drawing.FontStyle]::Bold)

$qx = 1200
$qy = 160

# Draw subtle quotation mark
$g.DrawString("“", $quoteMarkFont, (New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(233, 32, 46))), [float]($qx - 10), [float]($qy - 28))

# Draw Quote text
$quoteText = "From getting a first job, to getting THE job,`nto being able to move beyond ANY job."
$g.DrawString($quoteText, $quoteFont, (New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(26, 26, 26))), [float]$qx, [float]($qy + 20))

$g.Dispose()
$outPath = 'C:\Users\rbahi\.gemini\antigravity-ide\brain\eaa02a14-5639-4fef-8e62-73d9a40b7fdc\scratch\test_quote_placement.png'
$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Output "Saved to $outPath"
