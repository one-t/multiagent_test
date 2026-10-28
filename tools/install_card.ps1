param (
    [Parameter(Mandatory=$true)][string]$SourcePath,
    [Parameter(Mandatory=$true)][string]$CardName
)
Add-Type -AssemblyName System.Drawing

$destFull = "C:/Users/MDWil/multiagent_test/assets/feline-mystica/$CardName.jpg"
$destMid = "C:/Users/MDWil/multiagent_test/assets/feline-mystica/mid/$CardName.jpg"
$destThumb = "C:/Users/MDWil/multiagent_test/assets/feline-mystica/thumb/$CardName.jpg"

Copy-Item $SourcePath $destFull -Force

$srcImg = [System.Drawing.Image]::FromFile($SourcePath)
$w = $srcImg.Width
$h = $srcImg.Height

# Mid (width 360)
$midW = 360
$midH = [int][Math]::Round($h * ($midW / $w))
$midBmp = New-Object System.Drawing.Bitmap $midW, $midH
$midG = [System.Drawing.Graphics]::FromImage($midBmp)
$midG.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$midG.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$midG.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$midG.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
$midG.DrawImage($srcImg, 0, 0, $midW, $midH)
$midG.Dispose()
$midBmp.Save($destMid, [System.Drawing.Imaging.ImageFormat]::Jpeg)
$midBmp.Dispose()

# Thumb (width 150)
$thumbW = 150
$thumbH = [int][Math]::Round($h * ($thumbW / $w))
$thumbBmp = New-Object System.Drawing.Bitmap $thumbW, $thumbH
$thumbG = [System.Drawing.Graphics]::FromImage($thumbBmp)
$thumbG.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$thumbG.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$thumbG.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$thumbG.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
$thumbG.DrawImage($srcImg, 0, 0, $thumbW, $thumbH)
$thumbG.Dispose()
$thumbBmp.Save($destThumb, [System.Drawing.Imaging.ImageFormat]::Jpeg)
$thumbBmp.Dispose()

$srcImg.Dispose()
Write-Output "Successfully installed $CardName"
