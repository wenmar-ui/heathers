Add-Type -AssemblyName System.Drawing

function Render-BiggerTest($fontSize, $byIndent, $hShiftY) {
    $cardW = 1600
    $cardH = 650

    $bmp = New-Object System.Drawing.Bitmap $cardW, $cardH
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
    $g.Clear([System.Drawing.Color]::FromArgb(250, 250, 250))

    # Red Slant
    $redBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(233, 32, 46))
    $pts = @(
        (New-Object System.Drawing.PointF 0, 0),
        (New-Object System.Drawing.PointF ($cardW * 0.48), 0),
        (New-Object System.Drawing.PointF ($cardW * 0.56), $cardH),
        (New-Object System.Drawing.PointF 0, $cardH)
    )
    $g.FillPolygon($redBrush, $pts)

    $contentLeft = [int](($cardW - 1280) / 2 + 32)
    $shiftX = 500
    $monoH = 96 # h-24
    $scale = $monoH / 260.0
    $monoX = $contentLeft + $shiftX
    $monoY = 80
    $lineY = $monoY + (138 - 7) * $scale
    $lineH = 4 * $scale
    $rightEndScreenX = $monoX + (178 * $scale)

    # Line
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

    # Slogan text bigger
    $fontBy = New-Object System.Drawing.Font("Georgia", [float]$fontSize, [System.Drawing.FontStyle]::Regular)
    $fontBu = New-Object System.Drawing.Font("Georgia", [float]$fontSize, [System.Drawing.FontStyle]::Italic)

    $sizeBy = $g.MeasureString("Be Yourself,", $fontBy)
    $byX = $contentLeft
    $byY = $lineY - $sizeBy.Height + ($fontSize * 0.2)
    $g.DrawString("Be Yourself,", $fontBy, [System.Drawing.Brushes]::White, [float]$byX, [float]$byY)

    $buX = $contentLeft + $byIndent
    $buY = $lineY + $lineH + ($fontSize * 0.1)
    $g.DrawString("Be Unique.", $fontBu, [System.Drawing.Brushes]::White, [float]$buX, [float]$buY)

    # Main Headline shifted up by $hShiftY
    $serifTitleFont = New-Object System.Drawing.Font("Georgia", [float]38.0, [System.Drawing.FontStyle]::Regular)
    $serifItalicFont = New-Object System.Drawing.Font("Georgia", [float]44.0, [System.Drawing.FontStyle]::Italic)
    $descFont = New-Object System.Drawing.Font("Arial", [float]11.0, [System.Drawing.FontStyle]::Regular)

    $origTextY = 280
    $textY = $origTextY - $hShiftY
    $g.DrawString("The Confident", $serifTitleFont, [System.Drawing.Brushes]::White, [float]$contentLeft, [float]$textY)
    $g.DrawString("Creator.", $serifItalicFont, [System.Drawing.Brushes]::White, [float]$contentLeft, [float]($textY + 50))
    $g.DrawString("Top 50 Keynote Speaker in the World,`n2x Bestselling Author & Confidence Strategist.", $descFont, [System.Drawing.Brushes]::WhiteSmoke, [float]$contentLeft, [float]($textY + 120))

    $g.Dispose()
    $outPath = "C:\Users\rbahi\.gemini\antigravity-ide\brain\eaa02a14-5639-4fef-8e62-73d9a40b7fdc\scratch\test_bigger_$fontSize.png"
    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Output "Saved $outPath"
}

# Test font size 26 (approx 1.65rem / 26px) with 100px up shift
Render-BiggerTest 26 190 100

# Test font size 30 (approx 1.85rem / 30px) with 100px up shift
Render-BiggerTest 30 220 100
