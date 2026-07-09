# Grant OS Main Build 3.0 - Helper Overdraft Hint Fix

Patch focus only:
- Changes the Grant OS Helper overdraft hint so it no longer says to enter overdraft separately in Accounts.
- New hint explains that selected overdraft can help towards Safe Weekly Spend in the short term.
- The Help me understand explanation now explains that overdraft is borrowed money, can help short-term cashflow, but is not the same as spare cash and still counts as pressure in Finance Health.
- No layout, calculations, dropdowns, totals, graphs or other app functions were changed.

Chrome test link:
https://grantbulmer.github.io/Grant-OS/?v=main-build-3-0-helper-overdraft-hint-fix

## Build update: Input Stability Fix

This main build keeps the existing layout, calculations and functions intact. It only adds an input stability guard so Accounts and Debt Tracker rows save while typing without rebuilding the row/table and jumping the page. The full refresh still runs after the field is left.

Chrome test URL: https://grantbulmer.github.io/Grant-OS/?v=main-build-3-0-input-stability-fix


Patch: Bill input stability fix for Monthly Fixed Costs / Bills.
