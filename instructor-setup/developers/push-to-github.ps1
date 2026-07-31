# push-to-github.ps1
# סקריפט עזר לדחיפת תוכן findash/ ל-repo חדש ב-GitHub.
#
# שימוש (מתוך exercises/instructor-setup/developers):
#   .\push-to-github.ps1 -RepoName "findash" -Owner "my-org" -Private
#
# דרישות: git מותקן. אם משתמשים ביצירת repo אוטומטית - גם GitHub CLI (gh) מחובר.

param(
    [Parameter(Mandatory = $true)][string]$RepoName,
    [string]$Owner = "",
    [switch]$Private,
    [switch]$UseGhCli = $true
)

$ErrorActionPreference = "Stop"

# נתיב לתיקיית findash (יחסית למיקום הסקריפט: instructor-setup/developers -> exercises/findash)
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$appDir = Join-Path $scriptDir "..\..\findash"

if (-not (Test-Path $appDir)) {
    throw "Cannot find findash directory at: $appDir"
}

Set-Location $appDir
Write-Host "Working directory: $((Get-Location).Path)" -ForegroundColor Cyan

# אתחול git ו-commit
if (-not (Test-Path ".git")) {
    git init | Out-Null
}
git add .
git commit -m "FinDash - initial commit" | Out-Null
git branch -M main

$visibility = if ($Private) { "--private" } else { "--public" }

if ($UseGhCli) {
    Write-Host "Creating GitHub repo via gh CLI..." -ForegroundColor Cyan
    gh repo create $RepoName $visibility --source=. --remote=origin --push
}
else {
    if ([string]::IsNullOrEmpty($Owner)) {
        throw "When not using gh CLI, you must provide -Owner and create the empty repo on github.com first."
    }
    git remote add origin "https://github.com/$Owner/$RepoName.git"
    git push -u origin main
}

Write-Host "Done. Share the repository URL with participants." -ForegroundColor Green
