Add-Type -AssemblyName System.Drawing

function Test-Angles($angle, $tx, $ty) {
    $cardW = 1600
    $cardH = 800
    $bmp = New-Object System.Drawing.Bitmap $cardW, $cardH
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
    $g.Clear([System.Drawing.Color]::FromArgb(250, 250, 250))

    # Right Slant
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

    # Draw slant edge line for visual reference
    $penSlant = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(60, 233, 32, 46), 1.5)
    $g.DrawLine($penSlant, 976, 0, 1200, 800)

    # Rotate quote
    $state = $g.Save()
    $g.TranslateTransform($tx, $ty)
    $g.RotateTransform($angle)

    $pen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(233, 32, 46), 2.5)
    $g.DrawLine($pen, 0, 0, 0, 75)

    $font = New-Object System.Drawing.Font("Georgia", [float]15.0, [System.Drawing.FontStyle]::Italic)
    $g.DrawString("“From getting a first job,`nto getting THE job,`nto being able to move beyond`nANY job.”", $font, (New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(26, 26, 26))), 14, -2)

    $g.Restore($state)

    $out = "C:\Users\rbahi\.gemini\antigravity-ide\brain\eaa02a14-5639-4fef-8e62-73d9a40b7fdc\scratch\test_angle_${angle}.png"
    $bmp.Save($out)
    $g.Dispose()
    $bmp.Dispose()
    Write-Output "Saved $out"
}

Test-Angles 14 1190 170
Test-Angles 10 1190 170
Test-Angles 8 1190 170
Test-Angles 0 1190 170
