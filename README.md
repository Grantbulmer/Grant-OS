# Grant OS Main Build 3.0 - Helper Understand Sync Fix

Patch focus only:
- Makes the Grant OS Helper "Help me understand this" button show a short plain-English explanation for the current tip/alert.
- Corrects helper bill wording to use the true bills-only Monthly Bill Total via Calc.normalBillTotal, not Calc.totalFixed which includes debt repayments for forecast calculations.
- Keeps the helper values synced from the current saved app state without changing app layout, calculations, dropdowns or other functions.

Chrome test link:
https://grantbulmer.github.io/Grant-OS/?v=main-build-3-0-helper-understand-sync-fix
