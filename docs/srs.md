# 5. Software Requirements Specification (SRS)

Rotaract Club of UNZA Website · Version 0.1 · 19 October 2026

## 5.1 Introduction

**Purpose.** This SRS defines what the Rotaract Club of UNZA website must do and the qualities it must have. It is the baseline for design, build, testing and acceptance.

**Scope.** A responsive, static, multi-page public website with five pages. It presents the club's identity and service work and lets visitors learn about, contact and join the club. No backend or database is included in this phase.

**Definitions.** UNZA: University of Zambia. SRS: Software Requirements Specification. RTM: Requirements Traceability Matrix. WCAG: Web Content Accessibility Guidelines. MoSCoW: Must, Should, Could, Won't.

**References.** `01-project-charter.md`; `04-progress-tracking-change-control-rtm.md`; Rotaract and Rotary branding reference supplied by the club [to be attached].

## 5.2 Overall description

**Product perspective.** A standalone static website built with HTML5, CSS3 and JavaScript, version-controlled in Git and hosted on a static hosting service. Public visitors need no account.

**User classes.**

| User | Needs |
|---|---|
| Prospective members and students | Understand what the club does; find how to join; see upcoming events |
| Current members | Find events and leadership information; share the site |
| Rotarians and district leaders | See credible identity, service record and Rotary alignment |
| Sponsors and partners | See measurable impact and a clear contact route |
| General public | Learn about the club and its community work |
| Club officers (maintainers) | Update content without specialist skills |

**Operating environment.** Latest two versions of Chrome, Edge, Firefox and Safari; Android and iOS phones; screen widths from 320 px to large desktops; variable and low-bandwidth mobile connections.

**Design constraints.** Cranberry as primary brand colour (exact value to be confirmed); white as main background; dark grey and light grey as neutrals; extra accent colours used sparingly and only where they aid readability. Corporate yet youthful tone. No backend in this phase.

**Assumptions and dependencies.** The club supplies content, logo and photos. Free static hosting is available. A backend will only be considered if future requirements justify it, through change control.

## 5.3 Site map and page content

| Page | File | Required content |
|---|---|---|
| Home | index.html | Hero with club identity, calls to action (Join, See Impact), summary of what the club does, headline statistics |
| About Us | about.html | Mission, story and history, leadership team, membership information and benefits |
| Our Impact | impact.html | Headline statistics, featured projects with goal and outcome, partners and sponsors |
| Events | events.html | Upcoming events (title, date, venue, description), past events |
| Contact & Join Us | contact.html | Contact form, how to join, meeting details, email, social links |

Identity and service content carry equal weight: both appear on the Home page in the first scroll, and each has a dedicated page.

## 5.4 Functional requirements

| ID | Requirement | Priority | Acceptance criterion |
|---|---|---|---|
| FR-01 | The site shall provide the five pages in 5.3, linked by a consistent main navigation. | Must | Every page reachable from every other page in one click; no broken links |
| FR-02 | The Home page shall present the club's mission, two primary calls to action, and highlights of impact. | Must | All elements visible without horizontal scrolling on a 360 px phone |
| FR-03 | The About Us page shall present mission, story, named leaders with roles, and membership information. | Must | All four sections present and approved by the content lead |
| FR-04 | The Our Impact page shall present statistics, at least three featured projects, and partners. | Must | Each statistic has a source and date; each project states goal and outcome |
| FR-05 | The Events page shall list upcoming and past events with date, venue and description. | Must | Dates use unambiguous format; past events clearly separated |
| FR-06 | The Contact page shall provide a form (name, email, topic, message) with client-side validation and clear success and error messages. | Must | Invalid input is blocked with a readable message; valid input shows confirmation |
| FR-07 | A Join Us route shall be reachable from every page via navigation or a call to action. | Must | Link visible in header or footer on all pages |
| FR-08 | The site shall link to the club's official social media accounts and email address. | Should | Links open the correct destination |
| FR-09 | On small screens the navigation shall collapse into a menu button that opens and closes and is keyboard operable. | Must | Works by touch and keyboard; state announced to assistive technology |
| FR-10 | Header and footer shall be identical in structure on all pages, with the current page indicated. | Must | Visual and markup comparison across pages |
| FR-11 | Text content shall be editable in the HTML source following a documented update guide. | Should | A club officer completes a sample edit using the guide alone |

**Contact form note.** In this phase the form validates input and shows a confirmation. Delivery of messages to a club inbox requires a third-party form service or a backend. The delivery method is to be decided at Review 3 and, if it adds cost or data storage, goes through change control.

## 5.5 Non-functional requirements

| ID | Requirement | Priority | Measure |
|---|---|---|---|
| NFR-01 | Performance: pages shall load quickly on mobile data. | Must | Lighthouse performance score of 85 or higher; each image 200 KB or smaller after optimisation; page weight excluding images under 150 KB |
| NFR-02 | Accessibility: the site shall conform to WCAG 2.1 level AA. | Must | Text contrast of at least 4.5 to 1; visible focus; alternative text for images; labelled form fields; skip link; semantic headings |
| NFR-03 | Compatibility: the site shall work on the environments in 5.2. | Must | Test pass on 4 browsers and at least one Android phone, with layouts checked at 360, 768 and 1280 px |
| NFR-04 | SEO: each page shall have a unique title, meta description and a single H1. | Should | Checklist passed on all pages |
| NFR-05 | Security and privacy: the site shall be served over HTTPS and shall not store personal data in this phase. | Must | HTTPS active; no cookies or trackers added without approval |
| NFR-06 | Maintainability: code shall be organised, commented where non-obvious, and documented in a README. | Should | Peer review of repository; README explains structure and deployment |
| NFR-07 | Branding: colours, logo use and tone shall follow the club's confirmed branding reference. | Must | Brand reviewer approval at Reviews 2 and 4 |
| NFR-08 | Accuracy: every statistic and claim shall be verified and sourced by the content lead. | Must | Sign-off recorded before go-live |

## 5.6 Interface requirements

**User interface.** Cranberry for headers, buttons and key accents; white backgrounds; dark grey body text; light grey panels. Readable system or web font stack with fallbacks; mobile-first layout; touch targets at least 44 by 44 px.

**Hardware and software interfaces.** None beyond a web browser. Hosting and any form service are external services selected under the Charter's constraints.

## 5.7 Verification

Each requirement is verified by test, inspection or demonstration, as recorded by test ID in the RTM (T-01 to T-19). Tests are run during week 8, retested after fixes in weeks 9 and 10, and witnessed by the content lead during user acceptance. A requirement is Verified only when its acceptance criterion is met and recorded.

## 5.8 Future considerations (not in this phase)

Blog or news section; online event registration; member portal; donation or sponsorship payments; photo gallery; multilingual content; analytics. Any of these requires a change request and, where it needs a backend or database, a technology review.
