Add-Type -AssemblyName System.Drawing

$content = Get-Content 'src/components/HeatherMonogram.tsx' -Raw
$matches = [regex]::Matches($content, 'M(\d+)\s+(\d+)h(\d+)')

$cardW = 1600
$cardH = 650

$bmp = New-Object System.Drawing.Bitmap $cardW, $cardH
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$g.Clear([System.Drawing.Color]::FromArgb(250, 250, 250)) # bg-[#FAFAFA]

# Red Slant polygon
$redBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(233, 32, 46))
$pts = @(
    (New-Object System.Drawing.PointF 0, 0),
    (New-Object System.Drawing.PointF ($cardW * 0.48), 0),
    (New-Object System.Drawing.PointF ($cardW * 0.56), $cardH),
    (New-Object System.Drawing.PointF 0, $cardH)
)
$g.FillPolygon($redBrush, $pts)

# Content positioning
$contentLeft = 112 # max-w-7xl px-8 left margin (under navbar logo)
$shiftX = 500
$shiftY = -100
$monoX = $contentLeft + $shiftX
$monoY = 200 + $shiftY # ~100
$monoH = 96 # h-24
$scale = $monoH / 260.0

# Right end of the line: X = 178 in SVG coordinates
$rightEndScreenX = $monoX + (178 * $scale)

# The extended line: from screen X = 0 all the way to rightEndScreenX
$lineY = $monoY + (138 - 7) * $scale
$lineH = 4 * $scale

# Draw the architectural horizontal line
$g.FillRectangle([System.Drawing.Brushes]::White, [float]0, [float]$lineY, [float]$rightEndScreenX, [float]$lineH)

# Draw Monogram letters H and M
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

# Fonts from brand.md (Playfair Display / Georgia for serif)
# "it must ittalic but in the brand.md font"
$fontBeYourself = New-Object System.Drawing.Font("Georgia", [float]20.0, [System.Drawing.FontStyle]::Regular)
$fontBeUnique = New-Object System.Drawing.Font("Georgia", [float]20.0, [System.Drawing.FontStyle]::Italic)

# Measure "Be Yourself," to know its width
$sizeBeYourself = $g.MeasureString("Be Yourself,", $fontBeYourself)

# Position 1: "Be Yourself," above the line, starting at $contentLeft (below nav bar logo)
# Align baseline just above the line
$byX = $contentLeft
$byY = $lineY - $sizeBeYourself.Height + 4
$g.DrawString("Be Yourself,", $fontBeYourself, [System.Drawing.Brushes]::White, [float]$byX, [float]$byY)

# Position 2: "Be Unique." below the line, positioned after "Be Yourself," (offset horizontally)
$buX = $byX + $sizeBeYourself.Width + 8 # positioned after the "Be Yourself," text
$buY = $lineY + $lineH + 4
$g.DrawString("Be Unique.", $fontBeUnique, [System.Drawing.Brushes]::White, [float]$buX, [float]$buY)

# Draw Main Headline below
$serifTitleFont = New-Object System.Drawing.Font("Georgia", [float]38.0, [System.Drawing.FontStyle]::Regular)
$serifItalicFont = New-Object System.Drawing.Font("Georgia", [float]44.0, [System.Drawing.FontStyle]::Italic)
$descFont = New-Object System.Drawing.Font("Arial", [float]11.0, [System.Drawing.FontStyle]::Regular)

$textY = 250
$g.DrawString("The Confident", $serifTitleFont, [System.Drawing.Brushes]::White, [float]$contentLeft, [float]$textY)
$g.DrawString("Creator.", $serifItalicFont, [System.Drawing.Brushes]::White, [float]$contentLeft, [float]($textY + 52))
$g.DrawString("Top 50 Keynote Speaker in the World,`n2x Bestselling Author & Confidence Strategist.", $descFont, [System.Drawing.Brushes]::WhiteSmoke, [float]$contentLeft, [float]($textY + 128))

$g.Dispose()
$outPath = 'C:\Users\rbahi\.gemini\antigravity-ide\brain\eaa02a14-5639-4fef-8e62-73d9a40b7fdc\scratch\test_be_yourself.png'
$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Output "Saved to $outPath"
