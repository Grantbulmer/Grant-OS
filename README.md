Grant OS Main Build 3.0 - Bill Keyboard Stability Fix

This patch fixes Monthly Fixed Costs / Bills input stability so bill amount/name/due-day fields are not rebuilt while typing on mobile.
The update saves values while typing and refreshes the full calculations after the field is left.
No layout, calculations, dropdowns, helper hints, graphs or other app functions were intentionally changed.
