Add-Type -AssemblyName System.Drawing

function Draw-Base($g, $cardW, $cardH) {
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

    # Image
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
}

$cardW = 1600
$cardH = 800

# ----------------- OPTION 1: Rotated by slant angle (parallel to slant) -----------------
$bmp1 = New-Object System.Drawing.Bitmap $cardW, $cardH
$g1 = [System.Drawing.Graphics]::FromImage($bmp1)
Draw-Base $g1 $cardW $cardH

# The slant angle with vertical is ~15.6 degrees.
# If we rotate by -15 degrees or 15 degrees:
# Notice slant runs from top-left (976) down to bottom-right (1200).
# A vertical line tilted like this rotates CLOCKWISE by +15.6 degrees!
# If text lines are perpendicular or parallel:
# If the accent border is parallel to the slant (rotated +15.6 deg) and text is horizontal or also rotated:
# Let's test rotating the entire block by +15.6 deg (or -15.6 deg):
$state = $g1.Save()
$g1.TranslateTransform(1220, 160)
$g1.RotateTransform(15.6) # Rotated along the slant!

# Accent line
$pen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(233, 32, 46), 3)
$g1.DrawLine($pen, 0, 0, 0, 80)

# Text
$font = New-Object System.Drawing.Font("Georgia", [float]16.0, [System.Drawing.FontStyle]::Italic)
$g1.DrawString("“From getting a first job,`nto getting THE job,`nto being able to move beyond`nANY job.”", $font, [System.Drawing.Brushes]::Black, 16, 0)
$g1.Restore($state)

$bmp1.Save('C:\Users\rbahi\.gemini\antigravity-ide\brain\eaa02a14-5639-4fef-8e62-73d9a40b7fdc\scratch\opt1_rotated_15deg.png')
$g1.Dispose()
$bmp1.Dispose()

# ----------------- OPTION 2: Rotated -15 deg (tilted back) -----------------
$bmp2 = New-Object System.Drawing.Bitmap $cardW, $cardH
$g2 = [System.Drawing.Graphics]::FromImage($bmp2)
Draw-Base $g2 $cardW $cardH

$state2 = $g2.Save()
$g2.TranslateTransform(1220, 180)
$g2.RotateTransform(-15.6)
$g2.DrawLine($pen, 0, 0, 0, 80)
$g2.DrawString("“From getting a first job,`nto getting THE job,`nto being able to move beyond`nANY job.”", $font, [System.Drawing.Brushes]::Black, 16, 0)
$g2.Restore($state2)

$bmp2.Save('C:\Users\rbahi\.gemini\antigravity-ide\brain\eaa02a14-5639-4fef-8e62-73d9a40b7fdc\scratch\opt2_rotated_neg15deg.png')
$g2.Dispose()
$bmp2.Dispose()

# ----------------- OPTION 3: Skewed along slant (parallelogram / italicized box) -----------------
# Horizontal text lines, but the left border and container are skewed at the slant angle (+15.6 deg)
$bmp3 = New-Object System.Drawing.Bitmap $cardW, $cardH
$g3 = [System.Drawing.Graphics]::FromImage($bmp3)
Draw-Base $g3 $cardW $cardH

# Skewed left accent line: from (X, Y) to (X + dy*tan(15.6), Y + dy)
# So at Y=160, X=1200; at Y=240, X=1200 + 80*0.28 = 1222.4!
# A slanted accent line that is EXACTLY parallel to the right slant!
$g3.DrawLine($pen, [float]1200, [float]160, [float]1222.4, [float]240)

# Staggered/slant-aligned text:
$g3.DrawString("“From getting a first job,", $font, [System.Drawing.Brushes]::Black, [float]1218, [float]160)
$g3.DrawString("to getting THE job,", $font, [System.Drawing.Brushes]::Black, [float]1226, [float]186)
$g3.DrawString("to being able to move beyond", $font, [System.Drawing.Brushes]::Black, [float]1234, [float]212)
$g3.DrawString("ANY job.”", $font, [System.Drawing.Brushes]::Black, [float]1242, [float]238)

$bmp3.Save('C:\Users\rbahi\.gemini\antigravity-ide\brain\eaa02a14-5639-4fef-8e62-73d9a40b7fdc\scratch\opt3_slant_stepped.png')
$g3.Dispose()
$bmp3.Dispose()

Write-Output "Generated comparison options"
