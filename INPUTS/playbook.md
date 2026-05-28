# PM Pitch Case Execution Playbook

The playbook is an executable case workflow, not a strategy essay.
It defines how each target employer case moves from discovery to application, interview preparation, and retrospective learning.

## Purpose

Use this playbook to run repeatable, evidence-aware target employer cases for AI-assisted job search and transformation consulting positioning.

Strategic intent:

* Shift from passive job seeker to value-focused transformation advisor.
* Demonstrate enterprise architecture, process architecture, governance, automation, and AI transformation thinking.
* Connect employer context to plausible business pain points, capabilities, technology signals, and value outcomes.
* Create tailored materials that increase interview probability.
* Avoid generic applications and overproduced outputs.
* Build reusable transformation intelligence over time.

Core reasoning chain:

```text
Industry
+ Pain Points
+ Capabilities
+ AI Patterns
+ Value Models
+ Personal Strengths
= Transformation Narrative
```

External communication chain:

```text
Validated Positioning
+ Target Output Type
+ Evidence / Hypothesis Discipline
+ Personal Communication Style
= Employer-Facing Material
```

Important rule:

* Evidence is evidence.
* Hypothesis is hypothesis.
* User-approved positioning is final positioning.
* Style is style; it should shape wording, not create new claims.

## Minimum Viable Execution Rule

The full playbook represents the maximum available workflow, not the default workflow.

Do not run all phases for every target.

Start each case with the minimum phases required by:

* `case_type`
* `effort_tier`
* `target_output_type`
* urgency
* quality of available evidence
* strategic value of the opportunity

Deepen the case only when at least one of the following is true:

* the role is high priority
* there is recruiter, referral, or stakeholder engagement
* an interview is scheduled
* the company is strategically important
* the case will be reused as a portfolio or thought-leadership asset
* the expected value justifies additional effort

Default behavior:

| Tier | Default Scope |
|---|---|
| Tier 0 | Research only. |
| Tier 1 | Outreach only. |
| Tier 2 | Application or interview preparation. |
| Tier 3 | Strategic deep-dive only when justified. |

The playbook should optimize for speed, relevance, and credibility, not completeness for its own sake.

## Deep Work Trigger Conditions

Move from lightweight execution to deeper analysis only when one or more conditions are met:

* Target company is highly aligned with career goals.
* Target role is strongly aligned with personal strengths.
* Interview is scheduled or likely.
* There is a warm referral or stakeholder contact.
* The company has visible transformation signals.
* The material can be reused for other similar targets.
* The opportunity has high strategic or financial upside.

If none of these conditions are met, keep the case at Tier 0 or Tier 1.

## Do Not Overproduce Rules

* Do not create a full transformation narrative for low-priority targets.
* Do not create a pitch deck before there is enough engagement.
* Do not create detailed architecture materials for speculative outreach.
* Do not generate all output files unless required by the selected tier.
* Do not run value modeling unless it supports the target output.
* Do not generate AI recommendations unless AI is relevant to the role, company context, or pain point.
* Do not turn weak evidence into strong claims.
* Do not spend more effort than the opportunity justifies.
* Do not let style polishing inflate claims, seniority, enthusiasm, or certainty.

## Personal Communication Style Rule

Use `INPUTS/style/` when generating or revising external-facing communication.

This includes:

* cover notes
* application narratives
* recruiter messages
* referral notes
* follow-up messages
* notes to employers
* interview follow-up emails
* short professional introductions

Purpose:

* preserve the user's authentic written voice
* reduce generic AI or corporate tone drift
* keep materials direct, practical, and believable in live interview follow-up

Default style:

* pragmatic
* grounded
* clarity-driven
* direct but collaborative
* concise
* understated
* human and professional

Avoid:

* exaggerated enthusiasm
* generic corporate polish
* motivational language
* buzzword stacking
* excessive diplomacy padding
* long cover-letter storytelling

Preferred external material structure:

1. Why the role makes sense.
2. Relevant experience.
3. Practical value the candidate can bring.
4. Clear close or next step.

Style source files:

| File | Use |
|---|---|
| `INPUTS/style/summary.txt` | Quick style overview and practical rules. |
| `INPUTS/style/system_prompt.md` | Prompt-ready style instructions for external writing. |
| `INPUTS/style/emails and teams assessment.txt` | Detailed written communication evidence. |
| `INPUTS/style/transcript assessment.txt` | Spoken/interview-style communication evidence. |

Style usage rule:

* The agent may adjust tone, structure, length, and phrasing.
* The agent must not add claims, achievements, tools, outcomes, or confidence that are not supported elsewhere.

## Role Availability Check

For live `open_role` cases, check whether the role is still open before running Tier 2A, Tier 2B, or Tier 3 work.

Principle:

```text
No role availability check = no heavy open-role case work.
```

Rules:

* Check `role_status` before role fit, company research, pain point mapping, value modeling, transformation narrative, or application materials.
* If `role_status = closed`, stop application work, set `workflow_status = archived`, and capture the reason in the retrospective.
* If `role_status = unknown`, run only job description capture and quick role fit until the user confirms whether to continue.
* If `urgency_level = high` or `urgent`, use the fast application path instead of the full case workflow.
* Re-check role availability before external submission if more than one working day has passed since the last check.

Accepted values:

| Field | Accepted Values |
|---|---|
| `role_status` | `open`, `closed`, `unknown` |
| `urgency_level` | `low`, `medium`, `high`, `urgent` |

## Open-Role Role Fit Gate

For `case_type = open_role`, role fit assessment is an early mandatory gate.

Principle:

```text
No role fit assessment = no deeper open-role case work.
```

The role fit assessment must happen before:

* detailed company research
* pain point hypotheses
* capability impact mapping
* value case creation
* transformation narrative
* application materials

Exceptions:

* speculative cases
* networking cases
* thought-leadership article cases
* cases where the user explicitly overrides the gate

The role fit assessment determines whether the target role is worth pursuing by comparing the job description against:

* user skills
* user tools
* capability framework
* business capabilities
* technology capabilities
* target positioning
* seniority expectations
* likely role scope

It should identify whether the user is underqualified, stretch fit, good fit, strong fit, overqualified, or unclear fit.

## Role Fit Scoring Model

Role Fit Score: `0-100`

| Score | Meaning | Recommended Action |
|---|---|---|
| 85-100 | Strong fit | Proceed |
| 70-84 | Good fit | Proceed, address gaps |
| 55-69 | Stretch / possible fit | Proceed only if company or role is high priority |
| 40-54 | Weak fit | Usually pause or skip |
| 0-39 | Poor fit | Skip |

Also evaluate:

* underqualification signals
* overqualification signals
* acceptable gaps
* red flag gaps
* positioning opportunities

## Case Configuration Model

Each case starts with a configuration file:

```yaml
case_config:
  case_id: ""
  case_type: ""
  company_name: ""
  target_role: ""
  industry: ""
  geography: ""
  job_description_path: "OUTPUTS/cases/{case_id}/job_description.md"
  company_website: ""
  priority_level: ""
  effort_tier: ""
  target_output_type: ""
  workflow_status: "not_started"
  outcome: ""
  role_status: ""
  role_status_checked_date: ""
  application_deadline: ""
  urgency_level: ""
  evidence_confidence_score: ""
  external_output_approved: false
  target_stakeholders: []
  known_technologies: []
  suspected_pain_points: []
  selected_value_models: []
  personal_strengths_to_emphasize: []
  role_fit:
    score: null
    qualification_level: ""
    recommendation: ""
    key_strength_matches: []
    acceptable_gaps: []
    red_flag_gaps: []
    overqualification_signals: []
    user_decision: "pending"
  do_not_claim: []
  hypotheses:
    - name: ""
      evidence_level: ""
      confidence: ""
      user_approved: false
  output_folder: ""
  evidence_sources: []
  open_questions: []
  user_decisions: []
```

### Required Variables

| Variable | Purpose |
|---|---|
| `case_id` | Unique case identifier, for example `gsk_enterprise_architect`. |
| `case_type` | Defines workflow branch. Accepted values: `open_role`, `speculative`, `referral`, `networking`, `article`, `interview_follow_up`. |
| `company_name` | Target employer name. |
| `target_role` | Role being pursued. |
| `industry` | Selects relevant industry pattern file. |
| `priority_level` | Determines whether deeper work is justified. |
| `effort_tier` | Controls depth and output scope. |
| `target_output_type` | Defines the current output objective. Accepted values: `application`, `outreach`, `article`, `pitch_deck`, `interview_prep`, `follow_up`, `case_study`. |
| `workflow_status` | Tracks case progress. |
| `role_status` | Tracks whether a live posting is still available: `open`, `closed`, or `unknown`. |
| `urgency_level` | Controls whether to use the fast application path: `low`, `medium`, `high`, or `urgent`. |
| `output_folder` | Defines where generated materials are stored. |

### Optional Variables

| Variable | Purpose |
|---|---|
| `geography` | Adds market, regulatory, or location context. |
| `job_description_path` | Enables role and keyword analysis. |
| `company_website` | Starting point for public research. |
| `outcome` | Final case outcome, such as `role_closed_before_application`, `applied`, `rejected`, `offer_received`, or `archived_for_reuse`. |
| `role_status_checked_date` | Date the role availability was last checked. |
| `application_deadline` | Known deadline or expiry date if available. |
| `target_stakeholders` | Tailors narrative to likely audience. |
| `known_technologies` | Guides tooling and architecture signal mapping. |
| `suspected_pain_points` | Selects pain point pattern files. |
| `selected_value_models` | Selects value model files. |
| `personal_strengths_to_emphasize` | Anchors positioning in credible personal experience. |
| `role_fit` | Captures role fit score, qualification level, recommendation, key gaps, and user go / no-go decision for open-role cases. |
| `evidence_confidence_score` | Overall confidence level based on available evidence: `high`, `medium`, or `low`. |
| `external_output_approved` | Human approval flag for external-facing outputs. Defaults to `false`. |
| `do_not_claim` | List of unsupported, risky, or prohibited claims the agent must avoid. |
| `hypotheses` | Optional structured list of hypotheses with evidence level, confidence, and user approval status. |
| `evidence_sources` | Stores public sources used for claims. |
| `open_questions` | Tracks assumptions requiring validation. |
| `user_decisions` | Stores human approvals and gate decisions. |

Accepted hypothesis values:

| Field | Accepted Values |
|---|---|
| `evidence_level` | `evidenced`, `inferred`, `speculative` |
| `confidence` | `high`, `medium`, `low` |
| `user_approved` | `true`, `false` |

Default `do_not_claim` examples:

* Do not claim the company uses a specific platform unless it appears in a job description or public source.
* Do not imply internal knowledge of the company architecture.
* Do not present pain point hypotheses as confirmed facts.
* Do not state personal experience claims unless validated by the user.

Accepted role fit values:

| Field | Accepted Values |
|---|---|
| `qualification_level` | `underqualified`, `stretch`, `good_fit`, `strong_fit`, `overqualified`, `unclear` |
| `recommendation` | `proceed`, `proceed_with_caution`, `pause`, `skip`, `needs_user_review` |
| `user_decision` | `pending`, `proceed`, `proceed_with_caution`, `pause`, `skip`, `escalate_to_interview_prep` |

For open-role cases, save the raw job description here:

```text
OUTPUTS/cases/{case_id}/job_description.md
```

Optional future source-folder convention:

```text
OUTPUTS/cases/{case_id}/sources/job_description.md
```

Use the direct case-folder location unless a `sources/` convention is introduced.

## Minimum Viable Case Config

A case may be initialized with only:

```yaml
case_id: ""
company_name: ""
target_role: ""
industry: ""
case_type: ""
effort_tier: ""
target_output_type: ""
workflow_status: "initialized"
```

All other fields may be populated progressively by the agent or user.

The full case configuration remains the source of truth, but not every field must be completed at the start.

## Progressive Enrichment Rule

Case information should be enriched gradually. Do not require complete information before starting.

Recommended progression:

1. Minimum viable config.
2. Job description capture for open-role cases.
3. Role fit assessment and user go / no-go decision for open-role cases.
4. Basic company research.
5. Pain point hypotheses only if evidence supports them.
6. Capability and value mapping only if useful for materials.
7. Deep architecture narrative only if the opportunity justifies it.

## Input File Selection Logic

Variables drive file selection.

| If | Use |
|---|---|
| `industry = pharma` | `INPUTS/industry_patterns/pharma.md` |
| `industry = finance` | `INPUTS/industry_patterns/finance.md` |
| `industry = manufacturing` | `INPUTS/industry_patterns/manufacturing.md` |
| `industry = retail` | `INPUTS/industry_patterns/retail.md` |
| `industry = logistics` | `INPUTS/industry_patterns/logistics.md` |
| `industry = insurance` | `INPUTS/industry_patterns/insurance.md` |
| `industry = healthcare` | `INPUTS/industry_patterns/healthcare.md` |
| `suspected_pain_points` includes a value | Load matching file from `INPUTS/pain_point_patterns/{name}.md`. |
| `target_role` includes architecture, transformation, or operating model responsibility | Use `INPUTS/agent_knowledge_base/capability_framework.md`. |
| Business capability mapping is needed | Use `INPUTS/agent_knowledge_base/business_capabilities.md`. |
| Technology capability mapping is needed | Use `INPUTS/agent_knowledge_base/technology_capabilities.md`. |
| Platform/tooling signals are needed | Use `INPUTS/agent_knowledge_base/tools_inventory.md`. |
| AI opportunity mapping is needed | Use relevant files from `INPUTS/ai_patterns/`. |
| `selected_value_models` includes `governance_maturity` | Use `INPUTS/value_models/governance_maturity.md`. |
| `selected_value_models` includes `automation_roi` | Use `INPUTS/value_models/automation_roi.md`. |
| `selected_value_models` includes `operational_efficiency` | Use `INPUTS/value_models/operational_efficiency.md`. |
| `selected_value_models` includes `ai_adoption_value` | Use `INPUTS/value_models/ai_adoption_value.md`. |
| Application material is needed | Use `INPUTS/templates/2_Materials.md`. |
| Employer-facing wording is needed | Use `INPUTS/style/summary.txt` and `INPUTS/style/system_prompt.md`. |
| Interview-style written answers are needed | Use `INPUTS/style/transcript assessment.txt` for spoken-style authenticity. |
| Target summary is needed | Use `INPUTS/templates/1_Target_profile.md`. |
| Case completeness check is needed | Use `INPUTS/templates/0_Checklist.md`. |
| Personal strengths are needed | Use `INPUTS/draft_input/skills.txt` and `INPUTS/draft_input/tools.txt`. |
| `case_type` is set | Select the workflow branch and required phases from Case-Type Workflow Guidance. |
| `target_output_type` is set | Generate only the output family required for the current objective. |
| `effort_tier` is set | Limit workflow depth using Tier-to-Output Rules. |

## Workflow Statuses

| Status | Use When |
|---|---|
| `not_started` | Case exists only as an idea. |
| `initialized` | Case folder and config exist. |
| `researched` | Public company and role research is captured. |
| `hypotheses_generated` | Pain points, capabilities, and transformation opportunities are drafted as hypotheses. |
| `user_validated` | User has approved key assumptions, positioning angle, and effort tier. |
| `materials_drafted` | Application, narrative, or pitch materials are drafted. |
| `outreach_ready` | Outreach message is approved and ready to send. |
| `applied` | Application or outreach has been sent. |
| `interview_scheduled` | Interview is confirmed. |
| `interview_completed` | Interview happened and notes are captured. |
| `rejected` | Case ended without offer. |
| `offer_received` | Offer received. |
| `archived` | Case closed for reuse, learning, or no further action. |

External-facing status rule:

* Do not mark `outreach_ready`, `applied`, or any external-facing status unless `external_output_approved = true`.
* If external output is revised after approval, reset `external_output_approved = false` until the user approves the revised version.

## Effort Tier Model

| Tier | Purpose | Time Budget | Expected Outputs | Use When | Do Not Use When | Decision Gate |
|---|---|---:|---|---|---|---|
| Tier 0 - Discovery | Decide whether target is worth pursuing. | 15-45 min | Case config, quick research notes, proceed/stop decision. | Target is uncertain or low priority. | Deadline requires immediate application. | Is there enough strategic fit to continue? |
| Tier 1 - Outreach | Prepare lightweight tailored outreach. | 1-2 hrs | Company snapshot, role fit summary, outreach message. | Networking, recruiter contact, speculative approach. | Formal application or interview is imminent. | Does the message feel credible and specific? |
| Tier 2 - Application / First Interview | Prepare tailored application materials and concise case narrative. | 3-6 hrs | Role analysis, hypotheses, tailored materials, interview talking points. | Role is relevant and application quality matters. | No clear role fit or weak motivation. | Does the case justify tailored application effort? |
| Tier 3 - Deep-Dive Interview / Strategic Pitch | Prepare detailed architecture, roadmap, governance, migration, AI, and value materials. | 8-16 hrs | Strategic pitch, capability map, value case, roadmap, stakeholder versions. | Interview scheduled or target is high value. | Target is unvalidated or low probability. | Has the user approved assumptions and depth? |

## Optional Tier 2 Split

Tier 2 may be split to avoid doing interview-level preparation before there is interview-level signal.

| Tier | Use When | Typical Outputs | Avoid |
|---|---|---|---|
| Tier 2A - Application Package | The goal is to submit a strong tailored application. | Role analysis, tailored CV bullets, cover note or application narrative, short company-fit summary. | Full architecture deck, detailed roadmap, deep value case. |
| Tier 2B - Interview Preparation | An interview is scheduled or likely. | Pain point hypotheses, capability impact map, value case, transformation narrative, interview talking points, questions for interviewer. | Broad research or deck-building that does not support interview performance. |

## Fast Application Path

Use this path for live postings with `urgency_level = high` or `urgent`.

Purpose: apply quickly with credible, role-fit materials, then deepen the case only after recruiter or interview signal.

Steps:

1. Check `role_status`.
2. Save `job_description.md`.
3. Run quick `2_role_fit_assessment.md`.
4. If role fit score is 70 or higher, prepare application materials only.
5. Apply after user approval.
6. Do company research, pain point mapping, value modeling, and interview preparation only after interview signal.

Do not use this path when:

* role fit score is below 70
* the role is closed
* the user has not approved personal claims
* the target output is a strategic pitch or deep interview package

## Tier-to-Output Rules

Use the effort tier to prevent overproduction.

| Tier | Mandatory Phases | Mandatory Outputs | Optional Outputs |
|---|---|---|---|
| Tier 0 - Discovery | role availability check, 1-2 | `0_case_config.yaml`, `1_company_research.md`; for open-role cases also capture `job_description.md` if available | none |
| Tier 1 - Outreach | 1, 5, 14 | `0_case_config.yaml`, `1_company_research.md`, `8_outreach.md` | lightweight `2_role_fit_assessment.md` for open-role context |
| Tier 1.5 - Fast Application | role availability check, 1-4, 12 | `job_description.md`, quick `2_role_fit_assessment.md`, `7_materials.md` | minimal `1_company_research.md` only if needed |
| Tier 2A - Application Package | role availability check, 1-4, 12 | `job_description.md`, `2_role_fit_assessment.md`, `7_materials.md` | `1_company_research.md`, `8_outreach.md` |
| Tier 2B - Interview Preparation | role availability check, 1-15 | `job_description.md`, `2_role_fit_assessment.md`, `3_pain_point_hypotheses.md`, `4_capability_impact_map.md`, `5_value_case.md`, `6_transformation_narrative.md`, `9_interview_prep.md` | `8_outreach.md` |
| Tier 3 - Deep-Dive Interview / Strategic Pitch | role availability check, role fit gate, 1-15 | Full case package | Stakeholder variants, roadmap, architecture deck, value model expansion |

## Phase Selection Guidance

Use this table to select phases by situation. Do not run more phases unless the case meets deep work trigger conditions.

| Situation | Recommended Phases |
|---|---|
| Quick target scan | Phases 1-2 |
| Open-role application gate | Phases 1-4 |
| Urgent live posting | Role availability check, Phases 1-4 and 12 |
| Networking or speculative outreach | Phases 1, 5, and 14 |
| Standard application | Phases 1-4 and 12 |
| Strong application | Phases 1-12 |
| Interview preparation | Phases 1-15 |
| Strategic deep-dive | Phases 1-17 |
| Follow-up after interview | Phases 11, 12, 14, 16 |
| Case closure | Phases 16-17 |

## Case-Type Workflow Guidance

Use `case_type` to choose the workflow branch.

| Case Type | Primary Objective | Recommended Tier | Key Outputs |
|---|---|---|---|
| `open_role` | Apply to a specific job. | Tier 2 | Role analysis, tailored materials, interview prep. |
| `speculative` | Create interest without an open role. | Tier 1 | Company research, outreach, transformation hypothesis. |
| `referral` | Enable a contact to introduce the candidate. | Tier 1 or Tier 2 | Referral message, concise positioning, role-fit summary. |
| `networking` | Start a conversation with a stakeholder. | Tier 1 | Outreach message, 3-5 relevance bullets. |
| `article` | Publish thought-leadership content. | Tier 2 | Industry or pain-point article, transformation narrative. |
| `interview_follow_up` | Reinforce value after an interview. | Tier 1 or Tier 2 | Follow-up note, refined value summary, optional mini-case. |

## Target-Output-Type Guidance

Use `target_output_type` to decide what to generate and what to avoid.

| Target Output Type | Generate | Avoid |
|---|---|---|
| `application` | Tailored CV bullets, cover note, role-fit narrative. | Deep architecture deck unless requested. |
| `outreach` | Short message, relevance bullets, light hypothesis. | Long materials. |
| `article` | Public-safe thought leadership content. | Company-specific claims. |
| `pitch_deck` | Executive narrative, architecture/value slides. | Unsupported assumptions. |
| `interview_prep` | Talking points, STAR examples, questions. | External-facing claims unless validated. |
| `follow_up` | Thank-you note, concise value reinforcement. | New unvalidated analysis. |
| `case_study` | Structured transformation case. | Claims that imply inside knowledge. |

## Output Folder Structure

Use chronological file names so humans, agents, and scripts can follow the case state.

```text
OUTPUTS/cases/{case_id}/
    0_case_config.yaml
    1_company_research.md
    job_description.md
    2_role_fit_assessment.md
    3_pain_point_hypotheses.md
    4_capability_impact_map.md
    5_value_case.md
    6_transformation_narrative.md
    7_materials.md
    8_outreach.md
    9_interview_prep.md
    10_case_retrospective.md
```

Example:

```text
case_id: "gsk_enterprise_architect_2026"
output_folder: "OUTPUTS/cases/gsk_enterprise_architect_2026/"
```

Naming rules:

* Use `case_id` as the folder name.
* Use lowercase snake case for `case_id`.
* Include year or sequence number when repeated cases exist for the same company or role.
* Store drafts and user-approved versions clearly inside the relevant file.
* Do not overwrite user-approved outputs without noting the change.

## Role Fit Assessment File Structure

Use this structure for `2_role_fit_assessment.md`:

```markdown
# Role Fit Assessment - {Company Name} {Target Role}

## Purpose
Assess whether the target role is worth pursuing before deeper case work.

## Job Description Source
- Path:
- URL:
- Date captured:

## Role Summary

## Key Requirements Extracted

## Required Capabilities

## Required Tools / Technologies

## Match Against User Skills
| Requirement | User Evidence / Strength | Match Level | Notes |
|---|---|---|---|

Match levels: strong, moderate, weak, missing, overqualified.

## Capability Fit
| Required Capability | Relevant User Capability | Fit Level | Notes |
|---|---|---|---|

## Seniority Fit

## Underqualification Signals

## Overqualification Signals

## Acceptable Gaps

## Red Flag Gaps

## Positioning Opportunities

## Role Fit Score
Score: /100

## Qualification Level
underqualified / stretch / good_fit / strong_fit / overqualified / unclear

## Recommendation
proceed / proceed_with_caution / pause / skip / needs_user_review

## User Decision
pending / proceed / proceed_with_caution / pause / skip / escalate_to_interview_prep

## Notes for Application Materials

## Open Questions
```

## Chronological Execution Workflow

### Phase 1 - Case Initialization

| Field | Definition |
|---|---|
| Purpose | Create a controlled case workspace and define minimum target variables. |
| Trigger | User identifies a company, role, opportunity, referral, or job description. |
| Inputs | Company name, target role, industry, priority level, effort tier, job description if available, role status if known. |
| Agent Can Do | Create folder plan, draft `0_case_config.yaml`, infer likely input files, identify missing variables, initialize role availability fields. |
| User Must Validate | Confirm target priority, role relevance, effort tier, role urgency, and whether to proceed. |
| Outputs | `0_case_config.yaml`; initialized output folder. |
| Decision Gate | Continue only if the target is relevant enough for the selected tier. |
| Completion Criteria | Required variables are populated, `case_type` and `target_output_type` are set, and `workflow_status = initialized`. |

### Phase 1A - Role Availability Check

| Field | Definition |
|---|---|
| Purpose | Confirm whether a live open-role posting is still available before investing in deeper work. |
| Trigger | `case_type = open_role`, especially when `target_output_type = application`. |
| Inputs | Job posting URL, recruiter note, job board status, application deadline, previous role status. |
| Agent Can Do | Check public posting status when possible, update `role_status`, `role_status_checked_date`, `application_deadline`, and `urgency_level`. |
| User Must Validate | Confirm whether to continue if status is `unknown`, closing soon, or already closed. |
| Outputs | Updated role availability fields in `0_case_config.yaml`; stop note if closed. |
| Decision Gate | If role is closed, archive for reuse. If urgency is high or urgent, use the fast application path. |
| Completion Criteria | `role_status`, `role_status_checked_date`, and `urgency_level` are recorded or an open question is added. |

### Phase 2 - Job Description Capture

| Field | Definition |
|---|---|
| Purpose | Capture the raw job description for open-role cases before role fit assessment. |
| Trigger | `case_type = open_role` and a job description is available or requested. |
| Inputs | Job posting URL, pasted job description, recruiter-provided description, or saved role brief. |
| Agent Can Do | Create `job_description.md`, preserve the raw text, record source URL and capture date, update `job_description_path`. |
| User Must Validate | Confirm the job description is the correct role and current enough to use. |
| Outputs | `job_description.md`; updated `job_description_path` in `0_case_config.yaml`. |
| Decision Gate | For open-role cases, do not proceed to role fit assessment until the role is open or explicitly overridden, and the job description is captured or waived. |
| Completion Criteria | `job_description.md` exists or the user has documented why the gate is overridden. |

### Phase 3 - Role Fit Assessment

| Field | Definition |
|---|---|
| Purpose | Decide whether the open role is worth pursuing before deeper case work. |
| Trigger | `job_description.md` is captured for an open-role case and role availability is not closed. |
| Inputs | `job_description.md`, skills, tools, capability framework, business capabilities, technology capabilities, target positioning. |
| Agent Can Do | Extract role requirements, compare against user skills and capabilities, identify gaps, assign role fit score, draft recommendation. |
| User Must Validate | Confirm personal evidence, acceptable gaps, red flag gaps, overqualification signals, and go / no-go decision. |
| Outputs | `2_role_fit_assessment.md`; updated `role_fit` block in `0_case_config.yaml`. |
| Decision Gate | No deeper open-role case work unless `role_fit.user_decision = proceed`, `proceed_with_caution`, or `escalate_to_interview_prep`, or the user explicitly overrides. |
| Completion Criteria | Role fit score, qualification level, recommendation, and user decision are documented. |

### Phase 4 - User Go / No-Go Decision

| Field | Definition |
|---|---|
| Purpose | Record the user decision before investing in company research, pain point mapping, value modeling, or materials. |
| Trigger | Role fit assessment is complete. |
| Inputs | `2_role_fit_assessment.md`, role fit score, recommendation, user judgment. |
| Agent Can Do | Summarize recommendation, highlight gaps, suggest proceed / pause / skip options. |
| User Must Validate | Choose `proceed`, `pause`, `skip`, or `escalate_to_interview_prep`. |
| Outputs | Updated `role_fit.user_decision` and `user_decisions` in `0_case_config.yaml`. |
| Decision Gate | Stop if user decision is `pause` or `skip`. |
| Completion Criteria | User decision is recorded. |

### Phase 5 - Target Company Research

| Field | Definition |
|---|---|
| Purpose | Capture evidence-based public signals about company strategy, transformation, technology, and operating pressures. |
| Trigger | Role fit gate is passed for open-role cases, or case is non-open-role. |
| Inputs | Company website, annual reports, job posts, news, public transformation signals, known technologies. |
| Agent Can Do | Collect public information, summarize evidence, separate facts from inferences, identify transformation signals. |
| User Must Validate | Confirm whether research is relevant and whether any known context should be added or corrected. |
| Outputs | `1_company_research.md`. |
| Decision Gate | Proceed only if evidence supports a plausible tailored narrative or user confirms strategic interest. |
| Completion Criteria | Evidence sources, open questions, and `evidence_confidence_score` are captured; `workflow_status = researched`. |

### Phase 6 - Industry Context Selection

| Field | Definition |
|---|---|
| Purpose | Select the correct industry lens for transformation reasoning. |
| Trigger | Industry is known or inferred. |
| Inputs | `industry`, relevant `INPUTS/industry_patterns/{industry}.md`. |
| Agent Can Do | Summarize industry operating realities, regulatory constraints, architecture patterns, and common transformation drivers. |
| User Must Validate | Confirm industry selection and whether the target company has special context. |
| Outputs | Industry context section in `1_company_research.md` or `3_pain_point_hypotheses.md`. |
| Decision Gate | Proceed only after industry lens is accepted or corrected. |
| Completion Criteria | Industry file is selected and referenced in the case config. |

### Phase 7 - Pain Point Hypothesis Mapping

| Field | Definition |
|---|---|
| Purpose | Infer likely enterprise pain points without presenting them as confirmed facts. |
| Trigger | Company research and industry context are available. |
| Inputs | Industry pattern, selected pain point pattern files, public evidence, role fit assessment. |
| Agent Can Do | Generate pain point hypotheses, business impact, architecture implications, and evidence confidence. |
| User Must Validate | Approve plausible hypotheses, reject weak assumptions, confirm what cannot be claimed. |
| Outputs | `3_pain_point_hypotheses.md`. |
| Decision Gate | Continue only with hypotheses that are plausible, relevant, and clearly labeled. |
| Completion Criteria | Each hypothesis has `evidence_level`, `confidence`, and `user_approved` status; `workflow_status = hypotheses_generated`. |

### Phase 8 - Capability Impact Mapping

| Field | Definition |
|---|---|
| Purpose | Connect pain points to business capabilities, technology capabilities, and operating consequences. |
| Trigger | Pain point hypotheses are selected. |
| Inputs | Business capabilities, technology capabilities, capability framework, role fit assessment. |
| Agent Can Do | Map pain point -> capability impact -> architecture implication -> transformation opportunity. |
| User Must Validate | Confirm maps align with personal experience and target role positioning. |
| Outputs | `4_capability_impact_map.md`. |
| Decision Gate | Proceed if the map supports a clear value-focused role narrative. |
| Completion Criteria | Top capability impacts and transformation levers are documented. |

### Phase 9 - Technology and Tooling Signal Mapping

| Field | Definition |
|---|---|
| Purpose | Identify technology ecosystems relevant to the target without overstating company-specific facts. |
| Trigger | Company research, job description, or known technologies are available. |
| Inputs | Tools inventory, job description, public technology signals, industry platform patterns. |
| Agent Can Do | Extract platform signals, map likely architecture domains, distinguish known technologies from likely technologies. |
| User Must Validate | Confirm which tools can be credibly discussed from personal experience. |
| Outputs | Technology section in `4_capability_impact_map.md` or `6_transformation_narrative.md`. |
| Decision Gate | Only include technology claims that are evidenced or clearly framed as likely industry context. |
| Completion Criteria | Technology signals are tagged as `confirmed`, `job_post_signal`, `industry_common`, or `unknown`. |

### Phase 10 - Value Model Selection

| Field | Definition |
|---|---|
| Purpose | Select value models that justify the transformation narrative in business terms. |
| Trigger | Capability impacts and transformation opportunities are known. |
| Inputs | Value model files, role fit assessment, stakeholder priorities, pain point hypotheses. |
| Agent Can Do | Recommend value models, define outcome logic, suggest KPIs and benefits. |
| User Must Validate | Confirm value claims are realistic and relevant to the role stage. |
| Outputs | `5_value_case.md`. |
| Decision Gate | Continue only if value is clear, measurable where possible, and not inflated. |
| Completion Criteria | Selected value models and KPIs are documented in case config and value case. |

### Phase 11 - Transformation Narrative Creation

| Field | Definition |
|---|---|
| Purpose | Convert analysis into a concise transformation story. |
| Trigger | Research, hypotheses, capability map, and value case are available. |
| Inputs | Company research, role fit assessment, pain points, capabilities, AI patterns, value models, personal strengths. |
| Agent Can Do | Draft current state, problem, future state, transformation journey, architecture role, AI lens, and value story. |
| User Must Validate | Approve positioning angle, remove overstated claims, confirm personal credibility. |
| Outputs | `6_transformation_narrative.md`. |
| Decision Gate | Proceed only if the narrative is credible, tailored, and concise. |
| Completion Criteria | Executive version and architecture deep-dive version are both available when tier requires them. |

### Phase 12 - Material Generation

| Field | Definition |
|---|---|
| Purpose | Create target-stage materials from the approved narrative. |
| Trigger | Narrative approved or draft-ready for a specific application stage. |
| Inputs | Templates, transformation narrative, role fit assessment, value case, user-approved strengths, relevant `INPUTS/style/` files for external-facing wording. |
| Agent Can Do | Draft CV bullets, cover letter, executive pitch, architecture story, roadmap, AI opportunity summary, stakeholder versions, and apply personal style calibration. |
| User Must Validate | Approve final materials, verify personal claims, decide what is appropriate to share. |
| Outputs | `7_materials.md` and optional stage-specific assets. |
| Decision Gate | For open-role applications, do not generate materials until role fit is complete, role status is not closed, and recommendation is `proceed` or `proceed_with_caution`; do not send externally until `external_output_approved = true`. |
| Completion Criteria | Materials are tailored to effort tier, audience, and application stage; `workflow_status = materials_drafted`. |

### Phase 13 - User Review and Validation

| Field | Definition |
|---|---|
| Purpose | Convert agent-generated drafts into user-approved outputs. |
| Trigger | Draft materials or hypotheses exist. |
| Inputs | All generated case files, open questions, quality gate checklist. |
| Agent Can Do | Summarize assumptions, highlight risk areas, propose edits, compress materials. |
| User Must Validate | Confirm assumptions, approve final positioning, decide whether to continue, archive, or deepen. |
| Outputs | Updated case files with approved assumptions and decisions. |
| Decision Gate | Proceed only after critical assumptions and materials are approved. |
| Completion Criteria | `workflow_status = user_validated` or case is archived. |

### Phase 14 - Outreach Preparation

| Field | Definition |
|---|---|
| Purpose | Prepare tailored, concise messages for recruiters, hiring managers, contacts, or referrals. |
| Trigger | User wants networking, application support, or referral outreach. |
| Inputs | Role analysis, transformation narrative, stakeholder profile, approved materials, `INPUTS/style/summary.txt`, `INPUTS/style/system_prompt.md`. |
| Agent Can Do | Draft outreach messages, connection notes, recruiter emails, follow-up messages, and referral prompts in the user's authentic communication style. |
| User Must Validate | Approve tone, claims, recipient choice, and whether outreach should be sent. |
| Outputs | `8_outreach.md`. |
| Decision Gate | Outreach is ready only after user approves message and recipient strategy and `external_output_approved = true`. |
| Completion Criteria | `workflow_status = outreach_ready`. |

### Phase 15 - Interview Preparation

| Field | Definition |
|---|---|
| Purpose | Prepare role-specific talking points and credible transformation discussion material. |
| Trigger | Interview scheduled or likely. |
| Inputs | Job description, company research, narrative, capability map, value case, user experience examples. |
| Agent Can Do | Draft interview themes, STAR examples, architecture discussion points, AI/governance talking points, questions for interviewer. |
| User Must Validate | Confirm experience examples are true, select final themes, rehearse and refine language. |
| Outputs | `9_interview_prep.md`. |
| Decision Gate | Interview prep is complete when user can explain the narrative naturally and defend assumptions. |
| Completion Criteria | `workflow_status = interview_scheduled` or `interview_completed` after notes are captured. |

### Phase 16 - Post-Application Tracking

| Field | Definition |
|---|---|
| Purpose | Track application state, interactions, feedback, and next actions. |
| Trigger | Application or outreach has been sent. |
| Inputs | Sent messages, application date, contact details, responses, interview dates, feedback. |
| Agent Can Do | Maintain status summary, propose follow-ups, update risks and next actions. |
| User Must Validate | Confirm actual events, decisions, and next steps. |
| Outputs | Status updates in `0_case_config.yaml` and relevant notes in `8_outreach.md` or `9_interview_prep.md`. |
| Decision Gate | Continue, follow up, deepen, or archive based on response and priority. |
| Completion Criteria | Current status and next action are clear. |

### Phase 17 - Case Retrospective and Knowledge Reuse

| Field | Definition |
|---|---|
| Purpose | Capture reusable learning, improve future cases, and close the loop. |
| Trigger | Case is completed, rejected, paused, or converted into interview/offer process. |
| Inputs | All case files, application outcome, user feedback, interview notes. |
| Agent Can Do | Summarize what worked, extract reusable patterns, identify reusable phrases, update open questions. |
| User Must Validate | Decide what should be reused, archived, or improved. |
| Outputs | `10_case_retrospective.md`; reusable insights for future cases. |
| Decision Gate | Archive only after useful learning is captured. |
| Completion Criteria | `workflow_status = archived`, `rejected`, or `offer_received`. |

## Agent vs User Responsibility Split

| Area | Agent Can Do | User Must Validate |
|---|---|---|
| Research | Collect and summarize public information. | Confirm relevance and correct context gaps. |
| Evidence Handling | Separate evidence, inference, and speculation. | Approve which assumptions can be used. |
| Pain Points | Suggest likely enterprise pain points. | Select plausible pain points and reject weak ones. |
| Capabilities | Map pain points to business and technology capabilities. | Confirm positioning aligns with personal strengths. |
| AI Opportunities | Suggest automation, copilots, decision support, and orchestration use cases. | Confirm claims are realistic and not overhyped. |
| Materials | Draft tailored content. | Approve final wording and personal claims. |
| Outreach | Draft messages and follow-ups. | Decide whether and when to send. |
| Interviews | Prepare talking points and questions. | Rehearse, personalize, and validate truthfulness. |
| Retrospective | Extract reusable learning. | Decide what to archive or reuse. |

## Quality Gates

Run these checks before moving from analysis to materials, and again before sending anything externally.

| Gate | Check |
|---|---|
| Evidence Quality | Is company information evidence-based and sourced? |
| Hypothesis Labeling | Are pain points labeled as hypotheses unless confirmed? |
| Role Relevance | Is the material tailored to the target role? |
| Business Value | Is value stated in business terms, not just technology terms? |
| Audience Fit | Is technical depth appropriate for the stakeholder and stage? |
| AI Realism | Are AI claims practical, governed, and not exaggerated? |
| Governance | Are security, compliance, data, and change implications considered? |
| Concision | Is the output short enough for the current effort tier? |
| Personal Credibility | Are personal strengths and claims truthful and supportable? |
| Personal Style Fit | Does employer-facing wording match `INPUTS/style/` and avoid generic AI tone drift? |
| User Approval | Has the user validated critical assumptions and final materials? |

Evidence and hypothesis rules:

* All external-facing materials must distinguish public evidence, reasonable inference, user experience, and speculation.
* Evidence may be stated directly if sourced.
* Inference must be framed as `likely`, `potential`, or `common in this context`.
* Speculation must not be used externally unless converted into a question or hypothesis.
* User experience may be used only if truthful and validated by the user.
* Anything listed in `do_not_claim` must be excluded from external-facing materials.
* Overall case confidence must be captured in `evidence_confidence_score`.

## Human Validation Checkpoints

The user validates:

* Whether to continue with a target.
* Whether the effort tier is justified.
* Which pain points are plausible.
* Which personal strengths to emphasize.
* Which technology and AI claims are credible.
* Which materials are appropriate to share.
* Whether outreach should be sent.
* Whether assumptions are too speculative.
* Whether the case should be archived, deepened, or reused.

Minimum required validation gates:

1. After Phase 1: approve target and effort tier.
2. After Phase 5: approve pain point hypotheses.
3. After Phase 9: approve positioning narrative.
4. After Phase 10: approve materials.
5. After Phase 12: approve outreach.
6. After Phase 15: approve reuse and archival notes.

External approval rule:

* The agent may draft external-facing content.
* No external-facing content is ready to use until `external_output_approved = true`.
* The agent must not mark `outreach_ready`, `applied`, or equivalent external-facing statuses while `external_output_approved = false`.

## Material Generation Rules

Generate only the materials required for the current effort tier.

| Stage | Recommended Materials |
|---|---|
| Discovery | Company snapshot, quick fit assessment. |
| Outreach | Short tailored message, 3-5 relevance bullets. |
| Application | Tailored CV bullets, cover note, concise transformation narrative. |
| First Interview | Role-fit story, 5-7 talking points, examples, questions. |
| Deep-Dive Interview | Architecture narrative, roadmap, value case, AI/governance angle, stakeholder variants. |

Material principles:

* Start with business problem and value.
* Use architecture to explain the transformation path.
* Make AI a credible enabler, not the whole story.
* Use concise executive language first, then deeper architecture detail if needed.
* Avoid claiming inside knowledge unless evidence or user experience supports it.
* Use `INPUTS/style/` to calibrate cover notes, recruiter messages, follow-ups, and notes to employers.
* Style calibration may shorten, simplify, or humanize wording, but must not add unsupported claims.
* Respect `target_output_type` before generating additional assets.

## Output Versioning Rules

* Preserve materially different drafts.
* Mark final user-approved content clearly.
* Use simple labels: `Draft`, `User Reviewed`, `Approved for External Use`.
* Do not overwrite approved outputs without noting the change.
* Reset `external_output_approved = false` when approved external content is materially changed.

## Lightweight Pipeline Tracking Table

Use this structure inside a case tracker or future master tracker when managing multiple cases.

| Field | Description |
|---|---|
| `case_id` | Unique case identifier. |
| `company_name` | Target company. |
| `target_role` | Role. |
| `case_type` | Type of case. |
| `effort_tier` | Depth. |
| `workflow_status` | Current status. |
| `next_action` | Next task. |
| `owner` | Agent or User. |
| `due_date` | Optional deadline. |
| `last_updated` | Date. |
| `outcome` | Open, Applied, Interview, Rejected, Offer, Archived. |

## Stop / Archive Conditions

Archive or pause the case when:

* No visible role fit exists.
* Role is closed before application.
* Role fit is weak.
* No credible business angle exists.
* Insufficient public evidence exists.
* Evidence is too thin.
* Personal differentiation is weak.
* Response probability is low.
* Better opportunities are available.
* Effort required exceeds opportunity value.
* Too much manual work is required for too little value.
* Target company is no longer relevant.
* User decides not to proceed.
* Application is rejected and no reuse value remains.

Principle:

* If the case does not improve probability of interview, quality of positioning, or reusable learning, pause or archive it.

Before archive:

* Capture outcome and reason.
* Preserve reusable material.
* Remove or flag unsupported assumptions.
* Set `workflow_status = archived` unless the case ended as `rejected` or `offer_received`.
* Set `outcome` with the clearest available reason, such as `role_closed_before_application`.

## Case Retrospective Process

Each retrospective should capture:

* Case outcome.
* What evidence was useful.
* Which hypotheses were strong or weak.
* Which messages or materials were reused.
* Which personal strengths resonated.
* Which interview questions appeared.
* What should change in future cases.
* Whether any repository input files should be updated.

Reuse rules:

* Reusable, generalized insights may update `pain_point_patterns`, `industry_patterns`, `value_models`, `ai_patterns`, outreach templates, or interview prep examples.
* Company-specific details must remain in `OUTPUTS/cases/{case_id}/`.
* Do not move confidential, speculative, or target-specific claims into `INPUTS`.
* Only validated and generalized learning should become reusable repository knowledge.

Retrospective output:

```text
10_case_retrospective.md
```

Recommended structure:

```text
# Case Retrospective

## Outcome
## What Worked
## What Did Not Work
## Reusable Assets
## Weak Assumptions
## Interview Signals
## Repository Updates Needed
## Final Status
```

## Guidance for Future Automation

This playbook should be convertible into a Python or orchestration workflow.

Recommended automation model:

```text
load_case_config()
validate_required_fields()
select_input_files()
create_output_folder()
select_workflow_branch()
select_required_outputs()
run_phase(1)
run_quality_gate()
request_user_validation()
run_next_phase()
update_workflow_status()
write_outputs()
capture_retrospective()
archive_or_continue()
```

Script-friendly rules:

* Treat `0_case_config.yaml` as the source of truth.
* Treat each phase as an idempotent workflow step.
* Start with the minimum viable case config and enrich progressively.
* Select phases before generating outputs.
* Use `case_id` as the output folder name under `OUTPUTS/cases/`.
* Store generated outputs in chronological files.
* Store user approvals as explicit decisions in the case config.
* Do not advance status past a validation gate without user approval.
* Do not advance to external-facing statuses unless `external_output_approved = true`.
* Keep evidence sources separate from generated hypotheses.
* Treat `INPUTS/style/` as a style source only, not as evidence for professional claims.
* Allow effort tier to determine which phases and outputs are required.
* Preserve intermediate drafts when materially different from approved versions.
* Use consistent normalized names for industries, pain points, value models, and outputs.

Variable-driven automation rules:

* `industry` selects one industry pattern file.
* `suspected_pain_points` selects one or more pain point pattern files.
* `selected_value_models` selects one or more value model files.
* `target_role` selects relevant capability framework sections.
* `target_output_type` determines which outputs to generate.
* `target_output_type` determines whether style files are loaded for external wording.
* `effort_tier` determines workflow depth.
* `case_type` determines workflow branch.
* For open-role cases, check `role_status` before running Tier 2A, Tier 2B, or Tier 3 steps.
* If `role_status = closed`, stop, set `workflow_status = archived`, and capture the retrospective.
* If `urgency_level = high` or `urgent`, use the fast application path.
* Deep work trigger conditions determine whether optional phases should run.
* `evidence_confidence_score` determines how strongly materials can state conclusions.
* `do_not_claim` blocks risky statements from external outputs.
* `hypotheses[*].user_approved` determines which hypotheses can be used in approved positioning.

Open-role automation rule:

1. Load `job_description.md`.
2. Extract requirements.
3. Compare requirements against skills, tools, and capability framework.
4. Generate `2_role_fit_assessment.md`.
5. Update the `role_fit` block in `0_case_config.yaml`.
6. Request user go / no-go decision.
7. Stop unless `role_fit.user_decision = proceed`, `proceed_with_caution`, or `escalate_to_interview_prep`.

Minimum automation checkpoints:

| Checkpoint | Required Before |
|---|---|
| Required config fields populated | Phase 2 |
| Evidence captured | Phase 5 |
| Pain points validated | Phase 6 |
| Value model selected | Phase 9 |
| Narrative approved | Phase 10 |
| Materials approved | Phase 12 or application |
| Retrospective captured | Archive |
