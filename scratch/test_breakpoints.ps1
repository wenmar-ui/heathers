Add-Type -AssemblyName System.Drawing

function Render-HeroLayout($name, $cardW, $cardH, $monoH, $shiftX, $bySize, $buIndent) {
    $content = Get-Content 'src/components/HeatherMonogram.tsx' -Raw
    $matches = [regex]::Matches($content, 'M(\d+)\s+(\d+)h(\d+)')

    $bmp = New-Object System.Drawing.Bitmap $cardW, $cardH
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
    $g.Clear([System.Drawing.Color]::FromArgb(250, 250, 250))

    # Red Slant polygon
    $redBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(233, 32, 46))
    $pts = @(
        (New-Object System.Drawing.PointF 0, 0),
        (New-Object System.Drawing.PointF ($cardW * 0.48), 0),
        (New-Object System.Drawing.PointF ($cardW * 0.56), $cardH),
        (New-Object System.Drawing.PointF 0, $cardH)
    )
    $g.FillPolygon($redBrush, $pts)

    $contentLeft = [Math]::Max(16, [int](($cardW - 1280) / 2 + 32))
    $monoX = $contentLeft + $shiftX
    $monoY = 80
    $scale = $monoH / 260.0

    # Right end: 178 in SVG coordinates
    $rightEndScreenX = $monoX + (178 * $scale)
    $lineY = $monoY + (138 - 7) * $scale
    $lineH = 4 * $scale

    # Line
    $g.FillRectangle([System.Drawing.Brushes]::White, [float]0, [float]$lineY, [float]$rightEndScreenX, [float]$lineH)

    # Monogram
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

    # Text
    $fontBy = New-Object System.Drawing.Font("Georgia", [float]$bySize, [System.Drawing.FontStyle]::Regular)
    $fontBu = New-Object System.Drawing.Font("Georgia", [float]$bySize, [System.Drawing.FontStyle]::Italic)

    $sizeBy = $g.MeasureString("Be Yourself,", $fontBy)
    $byX = $contentLeft
    $byY = $lineY - $sizeBy.Height + ($bySize * 0.25)
    $g.DrawString("Be Yourself,", $fontBy, [System.Drawing.Brushes]::White, [float]$byX, [float]$byY)

    $buX = $contentLeft + $buIndent
    $buY = $lineY + $lineH + ($bySize * 0.15)
    $g.DrawString("Be Unique.", $fontBu, [System.Drawing.Brushes]::White, [float]$buX, [float]$buY)

    # Headline
    $hSize = [Math]::Min(40, [Math]::Max(24, [int]($cardW * 0.03)))
    $serifTitleFont = New-Object System.Drawing.Font("Georgia", [float]$hSize, [System.Drawing.FontStyle]::Regular)
    $serifItalicFont = New-Object System.Drawing.Font("Georgia", [float]($hSize * 1.15), [System.Drawing.FontStyle]::Italic)
    $textY = $monoY + $monoH + 30
    $g.DrawString("The Confident", $serifTitleFont, [System.Drawing.Brushes]::White, [float]$contentLeft, [float]$textY)
    $g.DrawString("Creator.", $serifItalicFont, [System.Drawing.Brushes]::White, [float]$contentLeft, [float]($textY + $hSize * 1.25))

    $g.Dispose()
    $outPath = "C:\Users\rbahi\.gemini\antigravity-ide\brain\eaa02a14-5639-4fef-8e62-73d9a40b7fdc\scratch\test_$name.png"
    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Output "Saved $outPath"
}

# 1. Desktop 1600: monoH=96, shiftX=500, fontSize=22, buIndent=140
Render-HeroLayout "desktop_1600" 1600 650 96 500 22 145

# 2. Laptop 1200: monoH=80, shiftX=400, fontSize=18, buIndent=125
Render-HeroLayout "laptop_1200" 1200 600 80 400 18 125

# 3. Tablet 768: monoH=64, shiftX=260, fontSize=15, buIndent=100
Render-HeroLayout "tablet_768" 768 550 64 260 15 100
