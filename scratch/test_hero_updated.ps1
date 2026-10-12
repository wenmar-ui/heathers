Add-Type -AssemblyName System.Drawing

$cardW = 1600
$cardH = 750

$bmp = New-Object System.Drawing.Bitmap $cardW, $cardH
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$g.Clear([System.Drawing.Color]::FromArgb(250, 250, 250))

# 1. Top Mailing List Bar
$g.FillRectangle((New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(248, 238, 240))), 0, 0, $cardW, 36)
$g.DrawLine((New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(217, 217, 217), 1)), 0, 36, $cardW, 36)

$contentLeft = [int](($cardW - 1280) / 2 + 32)
$mailFont = New-Object System.Drawing.Font("Arial", [float]9.0, [System.Drawing.FontStyle]::Bold)
$g.DrawString("SIGN UP TO MY MAILING LIST", $mailFont, [System.Drawing.Brushes]::Black, [float]$contentLeft, [float]11)

# 2. Navbar
$g.FillRectangle([System.Drawing.Brushes]::White, 0, 37, $cardW, 80)
$g.DrawLine((New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(217, 217, 217), 1)), 0, 117, $cardW, 117)
$logoFont = New-Object System.Drawing.Font("Georgia", [float]18.0, [System.Drawing.FontStyle]::Bold)
$g.DrawString("HEATHER MONAHAN", $logoFont, [System.Drawing.Brushes]::Black, [float]$contentLeft, [float]60)

# 3. Hero Section
$heroTop = 118
$redBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(233, 32, 46))
$pts = @(
    (New-Object System.Drawing.PointF 0, $heroTop),
    (New-Object System.Drawing.PointF ($cardW * 0.48), $heroTop),
    (New-Object System.Drawing.PointF ($cardW * 0.56), $cardH),
    (New-Object System.Drawing.PointF 0, $cardH)
)
$g.FillPolygon($redBrush, $pts)

# Monogram and Line geometry (scaled & shifted)
$shiftX = 500
$monoH = 96
$scale = $monoH / 260.0
$monoX = $contentLeft + $shiftX
$monoY = $heroTop + 140 - 100 # shifted up 100px
$lineY = $monoY + (138 - 7) * $scale
$lineH = 4 * $scale
$rightEndScreenX = $monoX + (178 * $scale)

# Extended horizontal line
$g.FillRectangle([System.Drawing.Brushes]::White, [float]0, [float]$lineY, [float]$rightEndScreenX, [float]$lineH)

# Monogram
$content = Get-Content 'src/components/HeatherMonogram.tsx' -Raw
$matches = [regex]::Matches($content, 'M(\d+)\s+(\d+)h(\d+)')
foreach ($m in $matches) {
    $x = [int]$m.Groups[1].Value
    $y = [int]$m.Groups[2].Value
    $w = [int]$m.Groups[3].Value
    if ($y -ge 138 -and $y -le 141) { continue }
    $drawX = $monoX + $x * $scale
    $drawY = $monoY + ($y - 7) * $scale
    $drawW = $w * $scale
    $drawH = 1 * $scale
    $g.FillRectangle([System.Drawing.Brushes]::White, [float]$drawX, [float]$drawY, [float]$drawW, [float]$drawH)
}

# Bigger Slogan: "Be Yourself," (above line, below navbar logo)
$fontBy = New-Object System.Drawing.Font("Georgia", [float]26.0, [System.Drawing.FontStyle]::Regular)
$fontBu = New-Object System.Drawing.Font("Georgia", [float]26.0, [System.Drawing.FontStyle]::Italic)

$sizeBy = $g.MeasureString("Be Yourself,", $fontBy)
$byX = $contentLeft
$byY = $lineY - $sizeBy.Height + 5
$g.DrawString("Be Yourself,", $fontBy, [System.Drawing.Brushes]::White, [float]$byX, [float]$byY)

# Bigger Slogan: "Be Unique." (below line, positioned after "Be Yourself,")
$buX = $contentLeft + 190
$buY = $lineY + $lineH + 3
$g.DrawString("Be Unique.", $fontBu, [System.Drawing.Brushes]::White, [float]$buX, [float]$buY)

# Main Headline (shifted up ~100px: placed right below "Be Unique.")
$serifTitleFont = New-Object System.Drawing.Font("Georgia", [float]40.0, [System.Drawing.FontStyle]::Regular)
$serifItalicFont = New-Object System.Drawing.Font("Georgia", [float]46.0, [System.Drawing.FontStyle]::Italic)
$descFont = New-Object System.Drawing.Font("Arial", [float]11.0, [System.Drawing.FontStyle]::Regular)

$textY = $buY + 46 # shifted up ~100px
$g.DrawString("The Confident", $serifTitleFont, [System.Drawing.Brushes]::White, [float]$contentLeft, [float]$textY)
$g.DrawString("Creator.", $serifItalicFont, [System.Drawing.Brushes]::White, [float]$contentLeft, [float]($textY + 54))
$g.DrawString("Top 50 Keynote Speaker in the World,`n2x Bestselling Author & Confidence Strategist.", $descFont, [System.Drawing.Brushes]::WhiteSmoke, [float]$contentLeft, [float]($textY + 128))

$g.Dispose()
$outPath = 'C:\Users\rbahi\.gemini\antigravity-ide\brain\eaa02a14-5639-4fef-8e62-73d9a40b7fdc\scratch\test_hero_updated.png'
$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Output "Saved to $outPath"
