Add-Type -AssemblyName System.Drawing

function Render-NewHeadline($subSize, $subFontName) {
    $cardW = 1600
    $cardH = 800

    $bmp = New-Object System.Drawing.Bitmap $cardW, $cardH
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
    $g.Clear([System.Drawing.Color]::FromArgb(250, 250, 250))

    # Right Slant (NO QUOTE)
    $blushBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(248, 238, 240))
    $ptsR = @(
        (New-Object System.Drawing.PointF ($cardW * 0.61), 0),
        (New-Object System.Drawing.PointF $cardW, 0),
        (New-Object System.Drawing.PointF $cardW, $cardH),
        (New-Object System.Drawing.PointF ($cardW * 0.75), $cardH)
    )
    $g.FillPolygon($blushBrush, $ptsR)

    # Hero image
    $imgPath = 'public/Glamorous Blonde Denim Cutout.png'
    if (Test-Path $imgPath) {
        $heroImg = [System.Drawing.Image]::FromFile($imgPath)
        $imgH = 680
        $imgW = [int]($heroImg.Width * ($imgH / $heroImg.Height))
        $imgX = [int](($cardW - $imgW) / 2 + 160)
        $imgY = $cardH - $imgH - 20
        $g.DrawImage($heroImg, $imgX, $imgY, $imgW, $imgH)
        $heroImg.Dispose()
    }

    # Left Slant
    $redBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(233, 32, 46))
    $ptsL = @(
        (New-Object System.Drawing.PointF 0, 0),
        (New-Object System.Drawing.PointF ($cardW * 0.48), 0),
        (New-Object System.Drawing.PointF ($cardW * 0.56), $cardH),
        (New-Object System.Drawing.PointF 0, $cardH)
    )
    $g.FillPolygon($redBrush, $ptsL)

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

    # Monogram H & M
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

    # Slogan (both italic)
    $fontBy = New-Object System.Drawing.Font("Georgia", [float]26.0, [System.Drawing.FontStyle]::Italic)
    $fontBu = New-Object System.Drawing.Font("Georgia", [float]26.0, [System.Drawing.FontStyle]::Italic)

    $sizeBy = $g.MeasureString("Be Yourself,", $fontBy)
    $byX = $contentLeft
    $byY = $lineY - $sizeBy.Height + 5
    $g.DrawString("Be Yourself,", $fontBy, [System.Drawing.Brushes]::White, [float]$byX, [float]$byY)

    $buX = $contentLeft + 190
    $buY = $lineY + $lineH + 3
    $g.DrawString("Be Unique.", $fontBu, [System.Drawing.Brushes]::White, [float]$buX, [float]$buY)

    # ALL CAPS: THE CONFIDENT CREATOR in Droid Serif (or Georgia fallback)
    $titleFont1 = New-Object System.Drawing.Font("Georgia", [float]38.0, [System.Drawing.FontStyle]::Regular)
    $titleFont2 = New-Object System.Drawing.Font("Georgia", [float]44.0, [System.Drawing.FontStyle]::Regular)

    $textY = $buY + 46
    $g.DrawString("THE CONFIDENT", $titleFont1, [System.Drawing.Brushes]::White, [float]$contentLeft, [float]$textY)
    $g.DrawString("CREATOR.", $titleFont2, [System.Drawing.Brushes]::White, [float]$contentLeft, [float]($textY + 48))

    # Sub-headline (bigger font)
    $subFont = New-Object System.Drawing.Font($subFontName, [float]$subSize, [System.Drawing.FontStyle]::Regular)
    $subY = $textY + 115
    $subText = "Shines light on the steps you need to`ntake to elevate yourself in business and life"
    $g.DrawString($subText, $subFont, (New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(240, 240, 240))), [float]$contentLeft, [float]$subY)

    # Button
    $btnY = $subY + 70
    $btnBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $g.FillRectangle($btnBrush, [float]$contentLeft, [float]$btnY, [float]140, [float]42)
    $btnFont = New-Object System.Drawing.Font("Arial", [float]9.0, [System.Drawing.FontStyle]::Bold)
    $g.DrawString("BOOK HEATHER", $btnFont, [System.Drawing.Brushes]::Black, [float]($contentLeft + 22), [float]($btnY + 14))

    $g.Dispose()
    $out = "C:\Users\rbahi\.gemini\antigravity-ide\brain\eaa02a14-5639-4fef-8e62-73d9a40b7fdc\scratch\test_all_caps_${subSize}.png"
    $bmp.Save($out)
    $bmp.Dispose()
    Write-Output "Saved $out"
}

Render-NewHeadline 17 "Arial"
Render-NewHeadline 20 "Georgia"
