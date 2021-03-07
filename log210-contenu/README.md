# log210-contenu

## VSCode Reveal et accès aux images

Yvan a utilisé un lien symbolique sur MacOS pour donner accès aux images dans /assets à partir des fichiers `seances/*.md`. Sur Windows 10, Cris a remarqué que `seances/assets` n'est qu'un fichier texte (pas un vrai lien symbolique). Pour corriger ça sur Windows, il a utilisé la command `mklink` dans une fenêtre `Command.exe` avec privilèges d'admin, p.ex.:

```
C:\Users\Cris\Documents\GitHub\log210-contenu\seances>mklink /d assets ..\assets
symbolic link created for assets <<===>> ..\assets
```

