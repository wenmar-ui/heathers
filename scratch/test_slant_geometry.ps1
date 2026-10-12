Add-Type -AssemblyName System.Drawing

function Render-SlantQuoteOptions() {
    $cardW = 1600
    $cardH = 800

    $bmp = New-Object System.Drawing.Bitmap $cardW, $cardH
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
    $g.Clear([System.Drawing.Color]::FromArgb(250, 250, 250))

    # Right Slant: polygon(61% 0, 100% 0, 100% 100%, 75% 100%)
    # At Y=0, X = 0.61 * 1600 = 976
    # At Y=800, X = 0.75 * 1600 = 1200
    # dx = 224, dy = 800. Slope = 224/800 = 0.28. Angle from vertical = arctan(0.28) ~ 15.6 degrees.
    # Angle from horizontal = 90 - 15.6 = 74.4 degrees (steep) or text rotated by ~15 deg?
    # Wait, what if text is angled by the slant?

    $blushBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(248, 238, 240))
    $ptsR = @(
        (New-Object System.Drawing.PointF 976, 0),
        (New-Object System.Drawing.PointF $cardW, 0),
        (New-Object System.Drawing.PointF $cardW, $cardH),
        (New-Object System.Drawing.PointF 1200, $cardH)
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

    # Let's inspect the diagonal line of the right slant:
    # At Y=180: X = 976 + (180/800) * 224 = 976 + 50.4 = 1026.4
    # At Y=240: X = 976 + (240/800) * 224 = 976 + 67.2 = 1043.2
    # At Y=300: X = 976 + (300/800) * 224 = 976 + 84 = 1060
    # At Y=360: X = 976 + (360/800) * 224 = 976 + 100.8 = 1076.8

    # Note that Heather's right arm at Y=180-360:
    # Heather is at imgX = 733. Her hair/arm extends to around X = 1140-1180.
    # What about the RIGHT edge of the slant? The right edge of the slant is the screen edge (100%).
    # What about the accent facet: polygon(68% 0, 100% 0, 100% 100%, 82% 100%)?
    # At Y=180, X = 0.68*1600 + (180/800)*224 = 1088 + 50 = 1138.
    
    # Let's test Option 1: Positioned along the slant edge with a slanted accent line matching the slant angle (~15 degrees)!
    # Let's draw Option 1 at X = 1200, Y = 160:
    # The accent line is tilted at -15.6 degrees (matching the slant)!
    $slantAngle = [Math]::Atan(224.0 / 800.0) * (180.0 / [Math]::PI) # ~15.64 degrees

    # Let's draw the slant line directly on the canvas to see it
    $penSlant = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(233, 32, 46), 2)
    $penSlant.DashStyle = [System.Drawing.Drawing2D.DashStyle]::Dash
    $g.DrawLine($penSlant, 976, 0, 1200, 800)

    # Save base preview
    $outPath = 'C:\Users\rbahi\.gemini\antigravity-ide\brain\eaa02a14-5639-4fef-8e62-73d9a40b7fdc\scratch\test_slant_geometry.png'
    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
    Write-Output "Slant angle: $slantAngle degrees. Saved to $outPath"
}

Render-SlantQuoteOptions
