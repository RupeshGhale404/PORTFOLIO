$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$backend = Join-Path $root 'backend'
$frontend = Join-Path $root 'frontend'

Write-Host "Starting backend in: $backend"
Write-Host "Starting frontend in: $frontend"

Start-Process powershell -ArgumentList "-NoExit","-Command","Set-Location '$backend'; php artisan serve"
Start-Process powershell -ArgumentList "-NoExit","-Command","Set-Location '$frontend'; npm run dev"
