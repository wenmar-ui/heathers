Add-Type -AssemblyName System.Drawing

$cardW = 1600
$cardH = 800

$bmp = New-Object System.Drawing.Bitmap $cardW, $cardH
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$g.Clear([System.Drawing.Color]::FromArgb(250, 250, 250))

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

# 3. Main Hero Image
$imgPath = 'public/Glamorous Blonde Denim Cutout.png'
if (-not (Test-Path $imgPath)) {
    $imgPath = 'public/heather-hero-denim.png'
}
if (Test-Path $imgPath) {
    $heroImg = [System.Drawing.Image]::FromFile($imgPath)
    $imgH = 680
    $imgW = [int]($heroImg.Width * ($imgH / $heroImg.Height))
    $imgX = [int](($cardW - $imgW) / 2 + 160)
    $imgY = $cardH - $imgH - 20
    $g.DrawImage($heroImg, $imgX, $imgY, $imgW, $imgH)
    $heroImg.Dispose()
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

# 5. Left Monogram & Slogan
$contentLeft = [int](($cardW - 1280) / 2 + 32)
$shiftX = 500
$monoH = 96
$scale = $monoH / 260.0
$monoX = $contentLeft + $shiftX
$monoY = 80
$lineY = $monoY + (138 - 7) * $scale
$lineH = 4 * $scale
$rightEndScreenX = $monoX + (178 * $scale)

$g.FillRectangle([System.Drawing.Brushes]::White, [float]0, [float]$lineY, [float]$rightEndScreenX, [float]$lineH)

# Both italic now!
$fontBy = New-Object System.Drawing.Font("Georgia", [float]26.0, [System.Drawing.FontStyle]::Italic)
$fontBu = New-Object System.Drawing.Font("Georgia", [float]26.0, [System.Drawing.FontStyle]::Italic)

$sizeBy = $g.MeasureString("Be Yourself,", $fontBy)
$byX = $contentLeft
$byY = $lineY - $sizeBy.Height + 5
$g.DrawString("Be Yourself,", $fontBy, [System.Drawing.Brushes]::White, [float]$byX, [float]$byY)

$buX = $contentLeft + 190
$buY = $lineY + $lineH + 3
$g.DrawString("Be Unique.", $fontBu, [System.Drawing.Brushes]::White, [float]$buX, [float]$buY)

# 6. Quote in Right Slant Area
$qx = 1200
$qy = 180
$quoteFont = New-Object System.Drawing.Font("Georgia", [float]18.0, [System.Drawing.FontStyle]::Italic)
$quotePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(233, 32, 46), 3)

# Red accent left line
$g.DrawLine($quotePen, [float]$qx, [float]$qy, [float]$qx, [float]($qy + 75))

$quoteText = "“From getting a first job,`nto getting THE job,`nto being able to move beyond`nANY job.”"
$g.DrawString($quoteText, $quoteFont, (New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(26, 26, 26))), [float]($qx + 16), [float]($qy - 2))

$g.Dispose()
$outPath = 'C:\Users\rbahi\.gemini\antigravity-ide\brain\eaa02a14-5639-4fef-8e62-73d9a40b7fdc\scratch\test_full_hero_with_quote.png'
$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Output "Saved $outPath"
