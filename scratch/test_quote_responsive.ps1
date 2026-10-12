Add-Type -AssemblyName System.Drawing

function Test-QuoteLayout($name, $cardW, $cardH, $imgH, $imgShiftX) {
    $bmp = New-Object System.Drawing.Bitmap $cardW, $cardH
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
    $g.Clear([System.Drawing.Color]::FromArgb(250, 250, 250))

    # Right slant: on mobile clip is 53% to 100%, on desktop 61% to 100%
    $slantStart = if ($cardW -lt 768) { 0.53 } else { 0.61 }
    $slantEnd = if ($cardW -lt 768) { 0.74 } else { 0.75 }
    $blushBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(248, 238, 240))
    $ptsR = @(
        (New-Object System.Drawing.PointF ($cardW * $slantStart), 0),
        (New-Object System.Drawing.PointF $cardW, 0),
        (New-Object System.Drawing.PointF $cardW, $cardH),
        (New-Object System.Drawing.PointF ($cardW * $slantEnd), $cardH)
    )
    $g.FillPolygon($blushBrush, $ptsR)

    # Hero image
    $imgPath = 'public/Glamorous Blonde Denim Cutout.png'
    if (Test-Path $imgPath) {
        $heroImg = [System.Drawing.Image]::FromFile($imgPath)
        $imgW = [int]($heroImg.Width * ($imgH / $heroImg.Height))
        $imgX = [int](($cardW - $imgW) / 2 + $imgShiftX)
        $imgY = $cardH - $imgH
        $g.DrawImage($heroImg, $imgX, $imgY, $imgW, $imgH)
        $heroImg.Dispose()
    }

    # Left slant
    $leftSlantX = if ($cardW -lt 768) { 0.36 } else { 0.48 }
    $leftSlantBottom = if ($cardW -lt 768) { 0.57 } else { 0.56 }
    $redBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(233, 32, 46))
    $ptsL = @(
        (New-Object System.Drawing.PointF 0, 0),
        (New-Object System.Drawing.PointF ($cardW * $leftSlantX), 0),
        (New-Object System.Drawing.PointF ($cardW * $leftSlantBottom), $cardH),
        (New-Object System.Drawing.PointF 0, $cardH)
    )
    $g.FillPolygon($redBrush, $ptsL)

    # Draw quote on right side
    $fontSize = if ($cardW -ge 1200) { 17 } elseif ($cardW -ge 768) { 14 } else { 12 }
    $quoteFont = New-Object System.Drawing.Font("Georgia", [float]$fontSize, [System.Drawing.FontStyle]::Italic)
    $quoteText = "“From getting a first job,`nto getting THE job,`nto being able to move beyond`nANY job.”"

    $qx = [int]($cardW * 0.76)
    $qy = if ($cardW -ge 1024) { 140 } else { 100 }
    $g.DrawString($quoteText, $quoteFont, (New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(26, 26, 26))), [float]$qx, [float]$qy)

    $g.Dispose()
    $outPath = "C:\Users\rbahi\.gemini\antigravity-ide\brain\eaa02a14-5639-4fef-8e62-73d9a40b7fdc\scratch\test_quote_$name.png"
    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Output "Saved $outPath"
}

Test-QuoteLayout "desktop_1440" 1440 750 640 160
Test-QuoteLayout "tablet_768" 768 600 500 95
