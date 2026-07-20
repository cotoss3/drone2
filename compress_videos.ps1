$ffmpeg = ".\ffmpeg-folder\ffmpeg-master-latest-win64-gpl\bin\ffmpeg.exe"
if (-Not (Test-Path $ffmpeg)) {
    Write-Host "ffmpeg not found at $ffmpeg"
    exit 1
}

$videos = Get-ChildItem -Path "public\videos" -Filter "*.mp4"
foreach ($vid in $videos) {
    if ($vid.Name -like "temp_*") { continue }
    $tempFile = "public\videos\temp_" + $vid.Name
    Write-Host "Compressing $($vid.Name)..."
    & $ffmpeg -y -i $vid.FullName -vf "scale=854:-2" -c:v libx264 -crf 32 -preset veryfast -an -movflags +faststart -loglevel error $tempFile
    if (Test-Path $tempFile) {
        $oldSize = [math]::Round($vid.Length / 1MB, 2)
        Remove-Item $vid.FullName
        Rename-Item -Path $tempFile -NewName $vid.Name
        $newSize = [math]::Round((Get-Item $vid.FullName).Length / 1MB, 2)
        Write-Host "Compressed $($vid.Name) from ${oldSize}MB to ${newSize}MB"
    } else {
        Write-Host "Failed to compress $($vid.Name)"
    }
}
Write-Host "Compression complete!"
