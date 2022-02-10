if (blooketUtility.prefs.customMaps.value.islands.value) {
  const islands = {
    name: "Amogus",
    img: "https://rookiehecker.github.io/blooket-utility-injectables/injectables/customMaps/Background.jpg",
    tile: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgd2lkdGg9IjEwMCIKICAgaGVpZ2h0PSIxMDAiCiAgIHZpZXdCb3g9IjAgMCAyNi40NTgzMzMgMjYuNDU4MzMzIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc4Ij4KICA8ZGVmcwogICAgIGlkPSJkZWZzMiI+CiAgICA8Y2xpcFBhdGgKICAgICAgIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIgogICAgICAgaWQ9ImNsaXBQYXRoOTY0MSI+CiAgICAgIDxyZWN0CiAgICAgICAgIHk9IjIyNi42MjA4MyIKICAgICAgICAgeD0iMTYuOTMzMzM4IgogICAgICAgICBoZWlnaHQ9IjguNDY2NjY2MiIKICAgICAgICAgd2lkdGg9IjE2LjkzMzMzMiIKICAgICAgICAgaWQ9InJlY3Q5NjQzIgogICAgICAgICBzdHlsZT0iZmlsbDojZjY5ZmNhO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZS13aWR0aDowLjYzNDM2NjYzIiAvPgogICAgPC9jbGlwUGF0aD4KICAgIDxjbGlwUGF0aAogICAgICAgY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiCiAgICAgICBpZD0iY2xpcFBhdGg5NjYxIj4KICAgICAgPHJlY3QKICAgICAgICAgc3R5bGU9ImZpbGw6I2Y2OWZjYTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2Utd2lkdGg6MC42MzQzNjY2MyIKICAgICAgICAgaWQ9InJlY3Q5NjYzIgogICAgICAgICB3aWR0aD0iMTYuOTMzMzMyIgogICAgICAgICBoZWlnaHQ9IjguNDY2NjY2MiIKICAgICAgICAgeD0iMTYuOTMzMzM2IgogICAgICAgICB5PSIwLjg2NjY2MjA5IiAvPgogICAgPC9jbGlwUGF0aD4KICAgIDxjbGlwUGF0aAogICAgICAgY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiCiAgICAgICBpZD0iY2xpcFBhdGg5NjY1Ij4KICAgICAgPHJlY3QKICAgICAgICAgeT0iMjE4LjE1NDE3IgogICAgICAgICB4PSIxNi45MzMzMzYiCiAgICAgICAgIGhlaWdodD0iOC40NjY2NjYyIgogICAgICAgICB3aWR0aD0iMTYuOTMzMzMyIgogICAgICAgICBpZD0icmVjdDk2NjciCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmNjlmY2E7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlLXdpZHRoOjAuNjM0MzY2NjMiIC8+CiAgICA8L2NsaXBQYXRoPgogICAgPGNsaXBQYXRoCiAgICAgICBpZD0iY2xpcFBhdGg0Mjg1NCIKICAgICAgIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHBhdGgKICAgICAgICAgZD0ibSAxMDY1LjY1LDQyNS44MDA0MyA5Ljc1LDIuMiAtMi4yLDkuNzUgLTkuNywtMi4xNSAyLjE1LC05LjggbSAyOC43LC00NS44IC0wLjY1LDUuNzUgLTkuNTUsLTEuMSAwLjU1LC00LjY1IGggOS42NSBtIC00OC4zNSw5LjI1IGggMC4wNSBsIDEuOCw3LjYgLTEuODUsMC40NSB2IC04LjA1IG0gMCwyNS4xNSAyLjA1LC0wLjI1IDAuNjUsNS40IC0yLjcsMC4zNSB2IC01LjUgbSAzOC43LDI5LjYgMC41NSwtNC45IDkuNTUsMS4xIC0wLjQsMy44IGggLTkuNyBtIDI1LjMsLTI0LjEgLTIuNywwLjMgLTAuNjUsLTUuNCAzLjM1LC0wLjQgdiA1LjUgbSAwLC0yMi42IC01Ljc1LDEuMyAtMS43NSwtNy41NSA3LjUsLTEuOCB2IDguMDUgbSAtMTAuOCwxMi45IDUuMSwxLjk1IC0xLjksNS4xNSAtNS4xNSwtMiAxLjk1LC01LjEgbSAxLjUsMjQuNzUgMC41NSwtNS40NSA1LjQ1LDAuNTUgLTAuNiw1LjQ1IC01LjQsLTAuNTUgbSAtMjguNSwtNDUuNyAtNi4zNSw2LjkgLTYuOSwtNi4zNSA2LjM1LC02LjkgNi45LDYuMzUgbSAtMjQuNCw0Ny43IDUuMzUsLTAuODUgMC44NSw1LjM1IC01LjM1LDAuODUgLTAuODUsLTUuMzUgbSA0Mi44NSwtMjcuMyAzLjUsNC4yIC00LjI1LDMuNDUgLTMuNDUsLTQuMiA0LjIsLTMuNDUgbSAtOC42LC01LjA1IC01LjQsLTAuNTUgMC41NSwtNS40IDUuNCwwLjU1IC0wLjU1LDUuNCBtIC04LjE1LDEzLjg1IC0yLjQsLTcuNDUgNy40NSwtMi4zNSAyLjM1LDcuNDUgLTcuNCwyLjM1IG0gLTE3LjA1LC0xOS4yIDkuODUsMi41NSAtMi41NSw5LjkgLTkuODUsLTIuNiAyLjU1LC05Ljg1IG0gMjYuMiwyNi44NSAyLjI1LDUgLTQuOTUsMi4yIC0yLjIsLTQuOTUgNC45LC0yLjI1IgogICAgICAgICBpZD0icGF0aDQyODU2IgogICAgICAgICBzdHlsZT0iZmlsbDojODE5YTljO3N0cm9rZTpub25lIiAvPgogICAgPC9jbGlwUGF0aD4KICAgIDxjbGlwUGF0aAogICAgICAgaWQ9ImNsaXBQYXRoNDI4NTgiCiAgICAgICBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Im0gMTA5Mi40NSw0MDQuMDAwNDMgMy43NSwtMy45NSAzLjk1LDMuNzUgLTMuNzUsMy45NSAtMy45NSwtMy43NSBtIDYuMDUsMjUuMyAtNy40LDIuMzUgLTIuMzUsLTcuNCA3LjQsLTIuMzUgMi4zNSw3LjQgbSAtNDIuMywtNDIuNyAtNC45NSwyLjI1IC0yLjI1LC00Ljk1IDUsLTIuMiAyLjIsNC45IG0gMzEuOCwxLjg1IDQuNCwzLjIgLTMuMTUsNC40IC00LjQ1LC0zLjE1IDMuMiwtNC40NSBtIC0zMS4wNSwyNi43NSA0LjM1LDMuMTUgLTMuMTUsNC40IC00LjQsLTMuMiAzLjIsLTQuMzUgbSAtMi4zNSwxMS43NSA0LjYsLTEuNiAxLjU1LDQuNjUgLTQuNiwxLjU1IC0xLjU1LC00LjYiCiAgICAgICAgIGlkPSJwYXRoNDI4NjAiCiAgICAgICAgIHN0eWxlPSJmaWxsOiM4ZWFiYWQ7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE1Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMy4zMzMzMzMzLDAsMCwzLjMzMzMzMzMsLTIuNjY2NjY2N2UtNywtNjk4Ljk1ODM5KSI+CiAgICA8ZwogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMS41NjI1LDAsMCwxLjU2MjUsLTEwMC4yMjE5NywtMjAyLjU4MDYzKSIKICAgICAgIGlkPSJnMTI0MTkiPgogICAgICA8ZwogICAgICAgICBpZD0idXNlMTI0MTciCiAgICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMDc5Mzc1LDAsMCwwLjA3OTM3NSwtMi4wMTMxODM2ZS03LDIwOS42ODc1MikiIC8+CiAgICA8L2c+CiAgICA8ZwogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMCwtMC4xMjQwMjM0NCwwLjEyNDAyMzQ0LDAsLTI4Ljc3MzQzOCwyOTIuMjg3MTMpIgogICAgICAgaWQ9Imc0MjQ1OCI+CiAgICAgIDxwYXRoCiAgICAgICAgIHN0eWxlPSJmaWxsOiM4OWE0YTY7c3Ryb2tlOm5vbmUiCiAgICAgICAgIGlkPSJwYXRoMTc4ODYiCiAgICAgICAgIGQ9Ik0gNjUwLjM1LDIzMiBIIDY2NiB2IDkuMjUgbCAtNy41LDEuOCAxLjc1LDcuNTUgNS43NSwtMS4zIHYgMTcuMSBsIC0zLjM1LDAuNCAwLjY1LDUuNCAyLjcsLTAuMyBWIDI5NiBoIC0xNS42IGwgMC40LC0zLjggLTkuNTUsLTEuMSAtMC41NSw0LjkgSCA2MDIgdiAtMjQuMSBsIDIuNywtMC4zNSAtMC42NSwtNS40IC0yLjA1LDAuMjUgdiAtMTcuMSBsIDEuODUsLTAuNDUgLTEuOCwtNy42IEggNjAyIFYgMjMyIGggMzguNyBsIC0wLjU1LDQuNjUgOS41NSwxLjEgMC42NSwtNS43NSBtIC0xLjksMjQgMy45NSwzLjc1IDMuNzUsLTMuOTUgLTMuOTUsLTMuNzUgLTMuNzUsMy45NSBtIDYuNzUsNi4yIC0xLjk1LDUuMSA1LjE1LDIgMS45LC01LjE1IC01LjEsLTEuOTUgbSAtMC43LDE5LjEgLTIuMzUsLTcuNCAtNy40LDIuMzUgMi4zNSw3LjQgNy40LC0yLjM1IG0gMi4yLDUuNjUgNS40LDAuNTUgMC42LC01LjQ1IC01LjQ1LC0wLjU1IC0wLjU1LDUuNDUgbSAtMTIuNywtNDYuNSAtMy4yLDQuNDUgNC40NSwzLjE1IDMuMTUsLTQuNCAtNC40LC0zLjIgbSAtMzEuOCwtMS44NSAtMi4yLC00LjkgLTUsMi4yIDIuMjUsNC45NSA0Ljk1LC0yLjI1IG0gLTguNCw1MC4zNSAwLjg1LDUuMzUgNS4zNSwtMC44NSAtMC44NSwtNS4zNSAtNS4zNSwwLjg1IG0gMjQuNCwtNDcuNyAtNi45LC02LjM1IC02LjM1LDYuOSA2LjksNi4zNSA2LjM1LC02LjkgbSAtMTUuMzUsMTAgLTIuNTUsOS44NSA5Ljg1LDIuNiAyLjU1LC05LjkgLTkuODUsLTIuNTUgbSAxNy4wNSwxOS4yIDcuNCwtMi4zNSAtMi4zNSwtNy40NSAtNy40NSwyLjM1IDIuNCw3LjQ1IG0gOC4xNSwtMTMuODUgMC41NSwtNS40IC01LjQsLTAuNTUgLTAuNTUsNS40IDUuNCwwLjU1IG0gOC42LDUuMDUgLTQuMiwzLjQ1IDMuNDUsNC4yIDQuMjUsLTMuNDUgLTMuNSwtNC4yIG0gLTM2LjA1LDE3LjMgMS41NSw0LjYgNC42LC0xLjU1IC0xLjU1LC00LjY1IC00LjYsMS42IG0gMi4zNSwtMTEuNzUgLTMuMiw0LjM1IDQuNCwzLjIgMy4xNSwtNC40IC00LjM1LC0zLjE1IG0gMjYuMSwxMC45IC00LjksMi4yNSAyLjIsNC45NSA0Ljk1LC0yLjIgLTIuMjUsLTUgbSAtMTcuNCwtMC4zIC0yLjE1LDkuOCA5LjcsMi4xNSAyLjIsLTkuNzUgLTkuNzUsLTIuMiIgLz4KICAgICAgPHBhdGgKICAgICAgICAgc3R5bGU9ImZpbGw6IzgxOWE5YztzdHJva2U6bm9uZSIKICAgICAgICAgaWQ9InBhdGgxNzg4OCIKICAgICAgICAgZD0ibSA2MjEuNjUsMjc3LjggOS43NSwyLjIgLTIuMiw5Ljc1IC05LjcsLTIuMTUgMi4xNSwtOS44IG0gMjguNywtNDUuOCAtMC42NSw1Ljc1IC05LjU1LC0xLjEgMC41NSwtNC42NSBoIDkuNjUgTSA2MDIsMjQxLjI1IGggMC4wNSBsIDEuOCw3LjYgLTEuODUsMC40NSB2IC04LjA1IG0gMCwyNS4xNSAyLjA1LC0wLjI1IDAuNjUsNS40IC0yLjcsMC4zNSB2IC01LjUgbSAzOC43LDI5LjYgMC41NSwtNC45IDkuNTUsMS4xIC0wLjQsMy44IGggLTkuNyBtIDI1LjMsLTI0LjEgLTIuNywwLjMgLTAuNjUsLTUuNCAzLjM1LC0wLjQgdiA1LjUgbSAwLC0yMi42IC01Ljc1LDEuMyAtMS43NSwtNy41NSA3LjUsLTEuOCB2IDguMDUgbSAtMTAuOCwxMi45IDUuMSwxLjk1IC0xLjksNS4xNSAtNS4xNSwtMiAxLjk1LC01LjEgbSAxLjUsMjQuNzUgMC41NSwtNS40NSA1LjQ1LDAuNTUgLTAuNiw1LjQ1IC01LjQsLTAuNTUgbSAtMjguNSwtNDUuNyAtNi4zNSw2LjkgLTYuOSwtNi4zNSA2LjM1LC02LjkgNi45LDYuMzUgbSAtMjQuNCw0Ny43IDUuMzUsLTAuODUgMC44NSw1LjM1IC01LjM1LDAuODUgLTAuODUsLTUuMzUgbSA0Mi44NSwtMjcuMyAzLjUsNC4yIC00LjI1LDMuNDUgLTMuNDUsLTQuMiA0LjIsLTMuNDUgbSAtOC42LC01LjA1IC01LjQsLTAuNTUgMC41NSwtNS40IDUuNCwwLjU1IC0wLjU1LDUuNCBtIC04LjE1LDEzLjg1IC0yLjQsLTcuNDUgNy40NSwtMi4zNSAyLjM1LDcuNDUgLTcuNCwyLjM1IG0gLTE3LjA1LC0xOS4yIDkuODUsMi41NSAtMi41NSw5LjkgLTkuODUsLTIuNiAyLjU1LC05Ljg1IG0gMjYuMiwyNi44NSAyLjI1LDUgLTQuOTUsMi4yIC0yLjIsLTQuOTUgNC45LC0yLjI1IiAvPgogICAgICA8cGF0aAogICAgICAgICBzdHlsZT0iZmlsbDojOGVhYmFkO3N0cm9rZTpub25lIgogICAgICAgICBpZD0icGF0aDE3ODkwIgogICAgICAgICBkPSJtIDY0OC40NSwyNTYgMy43NSwtMy45NSAzLjk1LDMuNzUgLTMuNzUsMy45NSAtMy45NSwtMy43NSBtIDYuMDUsMjUuMyAtNy40LDIuMzUgLTIuMzUsLTcuNCA3LjQsLTIuMzUgMi4zNSw3LjQgbSAtNDIuMywtNDIuNyAtNC45NSwyLjI1IC0yLjI1LC00Ljk1IDUsLTIuMiAyLjIsNC45IG0gMzEuOCwxLjg1IDQuNCwzLjIgLTMuMTUsNC40IC00LjQ1LC0zLjE1IDMuMiwtNC40NSBtIC0zMS4wNSwyNi43NSA0LjM1LDMuMTUgLTMuMTUsNC40IC00LjQsLTMuMiAzLjIsLTQuMzUgbSAtMi4zNSwxMS43NSA0LjYsLTEuNiAxLjU1LDQuNjUgLTQuNiwxLjU1IC0xLjU1LC00LjYiIC8+CiAgICA8L2c+CiAgICA8ZwogICAgICAgaWQ9Imc0Mzk4MSIKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAsLTAuMTI0MDIzNDQsMC4xMjQwMjM0NCwwLC0yOC43NzM0MzgsMjkyLjI4NzEzKSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Ik0gNjUwLjM1LDIzMiBIIDY2NiB2IDkuMjUgbCAtNy41LDEuOCAxLjc1LDcuNTUgNS43NSwtMS4zIHYgMTcuMSBsIC0zLjM1LDAuNCAwLjY1LDUuNCAyLjcsLTAuMyBWIDI5NiBoIC0xNS42IGwgMC40LC0zLjggLTkuNTUsLTEuMSAtMC41NSw0LjkgSCA2MDIgdiAtMjQuMSBsIDIuNywtMC4zNSAtMC42NSwtNS40IC0yLjA1LDAuMjUgdiAtMTcuMSBsIDEuODUsLTAuNDUgLTEuOCwtNy42IEggNjAyIFYgMjMyIGggMzguNyBsIC0wLjU1LDQuNjUgOS41NSwxLjEgMC42NSwtNS43NSBtIC0xLjksMjQgMy45NSwzLjc1IDMuNzUsLTMuOTUgLTMuOTUsLTMuNzUgLTMuNzUsMy45NSBtIDYuNzUsNi4yIC0xLjk1LDUuMSA1LjE1LDIgMS45LC01LjE1IC01LjEsLTEuOTUgbSAtMC43LDE5LjEgLTIuMzUsLTcuNCAtNy40LDIuMzUgMi4zNSw3LjQgNy40LC0yLjM1IG0gMi4yLDUuNjUgNS40LDAuNTUgMC42LC01LjQ1IC01LjQ1LC0wLjU1IC0wLjU1LDUuNDUgbSAtMTIuNywtNDYuNSAtMy4yLDQuNDUgNC40NSwzLjE1IDMuMTUsLTQuNCAtNC40LC0zLjIgbSAtMzEuOCwtMS44NSAtMi4yLC00LjkgLTUsMi4yIDIuMjUsNC45NSA0Ljk1LC0yLjI1IG0gLTguNCw1MC4zNSAwLjg1LDUuMzUgNS4zNSwtMC44NSAtMC44NSwtNS4zNSAtNS4zNSwwLjg1IG0gMjQuNCwtNDcuNyAtNi45LC02LjM1IC02LjM1LDYuOSA2LjksNi4zNSA2LjM1LC02LjkgbSAtMTUuMzUsMTAgLTIuNTUsOS44NSA5Ljg1LDIuNiAyLjU1LC05LjkgLTkuODUsLTIuNTUgbSAxNy4wNSwxOS4yIDcuNCwtMi4zNSAtMi4zNSwtNy40NSAtNy40NSwyLjM1IDIuNCw3LjQ1IG0gOC4xNSwtMTMuODUgMC41NSwtNS40IC01LjQsLTAuNTUgLTAuNTUsNS40IDUuNCwwLjU1IG0gOC42LDUuMDUgLTQuMiwzLjQ1IDMuNDUsNC4yIDQuMjUsLTMuNDUgLTMuNSwtNC4yIG0gLTM2LjA1LDE3LjMgMS41NSw0LjYgNC42LC0xLjU1IC0xLjU1LC00LjY1IC00LjYsMS42IG0gMi4zNSwtMTEuNzUgLTMuMiw0LjM1IDQuNCwzLjIgMy4xNSwtNC40IC00LjM1LC0zLjE1IG0gMjYuMSwxMC45IC00LjksMi4yNSAyLjIsNC45NSA0Ljk1LC0yLjIgLTIuMjUsLTUgbSAtMTcuNCwtMC4zIC0yLjE1LDkuOCA5LjcsMi4xNSAyLjIsLTkuNzUgLTkuNzUsLTIuMiIKICAgICAgICAgaWQ9InBhdGg0Mzk3NSIKICAgICAgICAgc3R5bGU9ImZpbGw6Izg5YTRhNjtzdHJva2U6bm9uZSIgLz4KICAgICAgPHBhdGgKICAgICAgICAgZD0ibSA2MjEuNjUsMjc3LjggOS43NSwyLjIgLTIuMiw5Ljc1IC05LjcsLTIuMTUgMi4xNSwtOS44IG0gMjguNywtNDUuOCAtMC42NSw1Ljc1IC05LjU1LC0xLjEgMC41NSwtNC42NSBoIDkuNjUgTSA2MDIsMjQxLjI1IGggMC4wNSBsIDEuOCw3LjYgLTEuODUsMC40NSB2IC04LjA1IG0gMCwyNS4xNSAyLjA1LC0wLjI1IDAuNjUsNS40IC0yLjcsMC4zNSB2IC01LjUgbSAzOC43LDI5LjYgMC41NSwtNC45IDkuNTUsMS4xIC0wLjQsMy44IGggLTkuNyBtIDI1LjMsLTI0LjEgLTIuNywwLjMgLTAuNjUsLTUuNCAzLjM1LC0wLjQgdiA1LjUgbSAwLC0yMi42IC01Ljc1LDEuMyAtMS43NSwtNy41NSA3LjUsLTEuOCB2IDguMDUgbSAtMTAuOCwxMi45IDUuMSwxLjk1IC0xLjksNS4xNSAtNS4xNSwtMiAxLjk1LC01LjEgbSAxLjUsMjQuNzUgMC41NSwtNS40NSA1LjQ1LDAuNTUgLTAuNiw1LjQ1IC01LjQsLTAuNTUgbSAtMjguNSwtNDUuNyAtNi4zNSw2LjkgLTYuOSwtNi4zNSA2LjM1LC02LjkgNi45LDYuMzUgbSAtMjQuNCw0Ny43IDUuMzUsLTAuODUgMC44NSw1LjM1IC01LjM1LDAuODUgLTAuODUsLTUuMzUgbSA0Mi44NSwtMjcuMyAzLjUsNC4yIC00LjI1LDMuNDUgLTMuNDUsLTQuMiA0LjIsLTMuNDUgbSAtOC42LC01LjA1IC01LjQsLTAuNTUgMC41NSwtNS40IDUuNCwwLjU1IC0wLjU1LDUuNCBtIC04LjE1LDEzLjg1IC0yLjQsLTcuNDUgNy40NSwtMi4zNSAyLjM1LDcuNDUgLTcuNCwyLjM1IG0gLTE3LjA1LC0xOS4yIDkuODUsMi41NSAtMi41NSw5LjkgLTkuODUsLTIuNiAyLjU1LC05Ljg1IG0gMjYuMiwyNi44NSAyLjI1LDUgLTQuOTUsMi4yIC0yLjIsLTQuOTUgNC45LC0yLjI1IgogICAgICAgICBpZD0icGF0aDQzOTc3IgogICAgICAgICBzdHlsZT0iZmlsbDojODE5YTljO3N0cm9rZTpub25lIiAvPgogICAgICA8cGF0aAogICAgICAgICBkPSJtIDY0OC40NSwyNTYgMy43NSwtMy45NSAzLjk1LDMuNzUgLTMuNzUsMy45NSAtMy45NSwtMy43NSBtIDYuMDUsMjUuMyAtNy40LDIuMzUgLTIuMzUsLTcuNCA3LjQsLTIuMzUgMi4zNSw3LjQgbSAtNDIuMywtNDIuNyAtNC45NSwyLjI1IC0yLjI1LC00Ljk1IDUsLTIuMiAyLjIsNC45IG0gMzEuOCwxLjg1IDQuNCwzLjIgLTMuMTUsNC40IC00LjQ1LC0zLjE1IDMuMiwtNC40NSBtIC0zMS4wNSwyNi43NSA0LjM1LDMuMTUgLTMuMTUsNC40IC00LjQsLTMuMiAzLjIsLTQuMzUgbSAtMi4zNSwxMS43NSA0LjYsLTEuNiAxLjU1LDQuNjUgLTQuNiwxLjU1IC0xLjU1LC00LjYiCiAgICAgICAgIGlkPSJwYXRoNDM5NzkiCiAgICAgICAgIHN0eWxlPSJmaWxsOiM4ZWFiYWQ7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L2c+CiAgICA8ZwogICAgICAgaWQ9Imc0ODgxMiIKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAsLTAuMTI0MDIzNDQsMC4xMjQwMjM0NCwwLC00Ny4xMjg5MDcsMzE2LjA5OTYzKSIgLz4KICAgIDxnCiAgICAgICBpZD0iZzQ4ODEyLTAiCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjA3OTM3NSwwLDAsMC4wNzkzNzUsLTY1LjgxNDY5MiwyMjEuODA5NjkpIj4KICAgICAgPGcKICAgICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMCwtMS41NjI1LDEuNTYyNSwwLDIzNS40MTE0OCwxMTg3LjkwNDcpIgogICAgICAgICBpZD0iZzUwMTQ3IiAvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==",
    particleColor: "#89a4a6",
    tiles: [
      [4, 0, 1, 1, 1, 0, 1, 1, 1, 0],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [1, 1, 1, 0, 1, 1, 1, 0, 1, 5],
    ],
  };
  Object.defineProperty(Object.prototype, "meadow", {
    get: function () {
      Reflect.defineProperty(this, "meadow", {
        value: islands,
        enumerable: true,
      });
      return islands;
    },
    set: function () {
      Reflect.defineProperty(this, "meadow", {
        value: islands,
        enumerable: true,
      });
    },
  });
}
