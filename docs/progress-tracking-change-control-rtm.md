# 4. Progress Tracking and Change Control (RTM)

## 4.1 Progress tracking

Progress is tracked weekly against the schedule in `02-project-plan-wbs-schedule.md`.

| Measure | How it is calculated | Target |
|---|---|---|
| Work package status | Each WBS item marked Not started, In progress, Done, or Blocked | All items Done by M6 |
| Requirements coverage | Requirements with a passed test divided by total requirements | 100% of Must, 90% of Should by go-live |
| Schedule health | Milestone date versus forecast date | No milestone more than 1 week late |

**Weekly status report (sent each Friday):** overall status (green, amber or red); completed this week; planned next week; open risks and blockers; decisions needed; changes raised; percentage of requirements verified.

**Status key:** Green means on track. Amber means a delay of up to one week that can be recovered. Red means go-live is at risk and escalation is needed.

## 4.2 Change control process

After the SRS is approved at Review 1 it becomes the baseline. Any request that adds, removes or alters a requirement, the schedule or the budget follows these steps.

1. **Raise:** anyone submits a change request (CR) to the project manager using the form in 4.3.
2. **Log:** the project manager records it in the change log with an ID (CR-001, CR-002, and so on) within 2 working days.
3. **Assess:** the project manager estimates effect on scope, effort, schedule, risk and requirements (RTM rows affected).
4. **Decide:** the Sponsor approves, rejects or defers. Changes that move go-live or add a new page or backend capability need Executive agreement.
5. **Implement:** if approved, update the SRS, RTM, WBS and schedule, then build and test.
6. **Close:** record the outcome and notify the requester.

Small content edits (typos, replacing a photo, updating a date) do not need a CR; they are handled as normal feedback. Urgent fixes after launch (broken link, wrong contact detail) may be applied immediately and logged afterwards.

## 4.3 Change request form

| Field | Entry |
|---|---|
| CR ID | CR-[000] |
| Date raised / raised by | [Date] / [Name, role] |
| Description of change | [What and why] |
| Requirements affected | [IDs from SRS] |
| Effect on effort, schedule, cost | [Estimate] |
| Risk if approved / if rejected | [Summary] |
| Decision | Approved / Rejected / Deferred |
| Decided by / date | [Sponsor name] / [Date] |

## 4.4 Change log

| CR ID | Date | Description | Priority | Status | Decision date |
|---|---|---|---|---|---|
| CR-001 | [ ] | [Example: add photo gallery to Events] | Low | Proposed | |
| CR-002 | [ ] | [Example: add online event registration] | Medium | Deferred to phase 2 | |

## 4.5 Requirements Traceability Matrix (RTM)

The RTM links every requirement in `05-srs.md` to its source, the work package that delivers it, the test that proves it, and its current status. Update it weekly and whenever a change is approved. Priority uses MoSCoW: Must, Should, Could.

| Req ID | Requirement (short) | Priority | Source | WBS item | Test ID | Status |
|---|---|---|---|---|---|---|
| FR-01 | Five pages with consistent navigation | Must | Charter 1.3 | 4.2 to 4.7 | T-01 | Not started |
| FR-02 | Home page: mission statement, calls to action, impact highlights | Must | President | 4.3 | T-02 | Not started |
| FR-03 | About Us: mission, story, leadership, membership | Must | Executive | 4.4 | T-03 | Not started |
| FR-04 | Our Impact: statistics, featured projects, partners | Must | Executive, sponsors | 4.5 | T-04 | Not started |
| FR-05 | Events: upcoming and past events with dates | Must | Members | 4.6 | T-05 | Not started |
| FR-06 | Contact form with validation and clear messages | Must | Prospective members | 4.7 | T-06 | Not started |
| FR-07 | Clear join pathway visible from every page | Must | Charter 1.3 | 4.2, 4.7 | T-07 | Not started |
| FR-08 | Links to club social media and email | Should | PR officer | 4.7 | T-08 | Not started |
| FR-09 | Mobile navigation menu | Must | Members | 4.2 | T-09 | Not started |
| FR-10 | Shared header and footer on all pages | Must | Design | 4.2 | T-10 | Not started |
| FR-11 | Content editable via source files, documented | Should | Secretary | 7.1 | T-11 | Not started |
| NFR-01 | Performance: light pages, optimised images | Must | Low-bandwidth users | 5.3 | T-12 | Not started |
| NFR-02 | Accessibility to WCAG 2.1 AA | Must | Inclusion | 5.3 | T-13 | Not started |
| NFR-03 | Browser and device compatibility | Must | All users | 5.1, 5.2 | T-14 | Not started |
| NFR-04 | Basic SEO (titles, descriptions, headings) | Should | PR officer | 6.2 | T-15 | Not started |
| NFR-05 | Security and privacy (HTTPS, no stored personal data) | Must | Club policy | 6.1 | T-16 | Not started |
| NFR-06 | Maintainability: clear structure, README, Git history | Should | Developer | 1.2, 7.2 | T-17 | Not started |
| NFR-07 | Brand consistency using confirmed cranberry value | Must | Brand reviewer | 2.4, 3.2 | T-18 | Not started |
| NFR-08 | Statistics accurate and sourced | Must | Sponsors, Rotary | 5.4 | T-19 | Not started |

**Status values:** Not started, In design, In build, In test, Verified, Changed (see CR), Deferred.
