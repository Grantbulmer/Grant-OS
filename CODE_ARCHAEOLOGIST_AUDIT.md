# Grant OS Code Archaeologist Audit

Baseline audited: Grant_OS_Main_Build_3_0_PWA_Live_Totals_Health_Holiday_Relocation_Fix.zip
Cleaned build version: main-build-3-0-code-archaeologist-stability-clean

## Dependency mapping summary

### Active DOM sections
- `#dashboard` — Dashboard cards, alerts, Finance Health Score, timeline and payday forecast.
- `#accounts` — Accounts list and account setup actions.
- `#budget` — Core figures, Monthly Fixed Costs / Bills, Estimated Spare Until Payday, Monthly Bill Total.
- `#debts` — Debt Tracker, nested Debt Tracker help, Debt Progress, Monthly Debt Total, overpayment simulator.
- `#holidays` — Holiday Pots, Holiday Summary, Holiday Funding.
- `#graphs` — Debt Balance Forecast, Bank Position Forecast, Emergency Fund Progress.
- `#relocation` — Thailand Fund and New Zealand Fund input/edit/remove rows.
- `#career`, `#settings` — career table and backup/reset controls.

### Active controller objects / functions
- `Data` — localStorage save/reset/default merging.
- `Calc` — payday, safe spend, bank/debt/holiday calculations and alerts.
- `UI` — tab switching and table rendering.
- `Dashboard`, `Budget`, `Debt`, `Holidays`, `Relocation`, `Career`, `Timeline` — section renderers.
- `ForecastV21`, `ForecastRangeV24`, `GraphsV21`, `GraphsV24`, `EnhancedGraphsV242` — forecast and graph renderers still referenced by the current DOM and patch flow.
- `HealthV21` — active synced Finance Health Score engine.
- `AccountsUIV25527`, `AccountSyncV25516` — active account rendering and account-to-budget state sync.

### Live event paths
- Inline button/input handlers remain active for save, add, remove, and row editing.
- Global `input`, `change`, `click`, `DOMContentLoaded`, and `load` listeners remain active for live refresh and stability repair.
- Tab switching flows through `UI.show()`.
- App-wide redraw flows through `App.render()`.

## Logic preservation requirements
The cleanup deliberately preserved these behaviours:
- Safe weekly/daily spend calculations and overdraft inclusion rules.
- Monthly bill total from Monthly Fixed Costs / Bills.
- Monthly debt repayment total from active Debt Tracker rows.
- Debt balance, bank position and emergency fund forecast data.
- Finance Health Score using `HealthV21`, not a static replacement card.
- Holiday Summary status labels/classes: Fully Funded, Covered by Wage, Extra Income Needed.
- Holiday Funding values from the existing Holiday Pots data.
- Debt Tracker as a main dropdown, with the nested “How do I use Debt Tracker?” dropdown preserved.
- Debt Progress as a normal card.
- Relocation add/edit/remove controls.
- Existing PWA files, icons, manifest and service worker structure.

## Refactoring performed
Removed these overlapping late repair blocks and replaced them with one consolidated stability pass:
- `build30DropdownSummaryCleanupStyle`
- `build30RequestedCleanupStyle`
- `build30StandardSummaryCardsStyle`
- `build30StabilityUiPatchStyle`
- `build30TotalsGraphsHealthRepairStyle`
- `build30UserConfirmedLiveRepairStyle`
- `build30DropdownSummaryCleanup`
- `build30RequestedCleanup`
- `build30StandardSummaryCards`
- `build30StabilityUiPatch`
- `build30TotalsGraphsHealthRepair`
- `build30UserConfirmedLiveRepair`

Added:
- `build30CodeArchaeologistStabilityStyle`
- `build30CodeArchaeologistStabilityPass`
- Early active-controller bridge immediately after the core app render.

## Safety notes
- Older v2.x/v2.8.x patches were **not removed** because static mapping found live references into the current DOM, calculations and render flow.
- A `TODO_VERIFY_DORMANT` comment has been added before the retained legacy patch stack so it can be manually reviewed later without risking calculation/layout loss in this pass.
- No calculation formulas, labels, app layout sections, default values or copyright text were intentionally changed.
