# Case Execution Checklist

Use this checklist to run a target case without overproducing. Start lightweight, deepen only when the opportunity justifies it.

## 1. Case Initialization

- [ ] `case_id` is defined
- [ ] `company_name` is defined
- [ ] `target_role` is defined
- [ ] `industry` is selected
- [ ] `case_type` is selected
- [ ] `effort_tier` is selected
- [ ] `target_output_type` is selected
- [ ] `workflow_status` is set
- [ ] Output folder path is defined
- [ ] For open-role cases, `job_description.md` exists or capture is explicitly waived
- [ ] For open-role cases, `job_description_path` points to `OUTPUTS/cases/{case_id}/job_description.md`

Minimum viable config is enough to start. Do not wait for all optional fields.

## 2. Scope and Effort Control

- [ ] Tier 0, 1, 2A, 2B, or 3 is selected
- [ ] Selected tier matches opportunity value
- [ ] Target output type is clear
- [ ] Only required phases are planned
- [ ] Deep work trigger exists before detailed analysis
- [ ] Stop/archive criteria have been considered

Default guidance:

| Tier | Default Scope |
|---|---|
| Tier 0 | Research only |
| Tier 1 | Outreach only |
| Tier 2A | Application package |
| Tier 2B | Interview preparation |
| Tier 3 | Strategic deep-dive |

## 3. Evidence Quality

- [ ] Raw job description is saved for open-role cases
- [ ] Job description source URL or origin is captured if available
- [ ] Public evidence sources are captured
- [ ] Job description or role source is captured if available
- [ ] Company claims are source-backed
- [ ] Evidence confidence is labeled: `high`, `medium`, or `low`
- [ ] Open questions are documented
- [ ] Unsupported claims are added to `do_not_claim`

## 4. Hypothesis Discipline

- [ ] Pain points are labeled as `evidenced`, `inferred`, or `speculative`
- [ ] Speculative points are framed as questions or hypotheses
- [ ] User has approved the pain points used in materials
- [ ] Hypotheses are not presented as company facts
- [ ] AI recommendations are tied to real pain points or role context

## 5. Role Fit Gate

- [ ] `2_role_fit_assessment.md` is completed for open-role cases
- [ ] Role fit score is assigned
- [ ] Qualification level is selected
- [ ] Recommendation is selected
- [ ] Key strength matches are captured
- [ ] Acceptable gaps are captured
- [ ] Red flag gaps are captured
- [ ] Overqualification signals are captured if relevant
- [ ] User go / no-go decision is recorded
- [ ] No deeper open-role case work proceeds if decision is `pause` or `skip`

## 6. Reasoning Chain Check

- [ ] Industry pattern selected
- [ ] Relevant pain point patterns selected
- [ ] Business capabilities mapped where useful
- [ ] Technology capabilities mapped where useful
- [ ] AI patterns selected only where relevant
- [ ] Value models selected only if needed for the output
- [ ] Personal strengths are connected to role requirements

## 7. Material Readiness

- [ ] For open-role applications, role fit assessment is complete
- [ ] User decision is `proceed`, `proceed_with_caution`, or `escalate_to_interview_prep`
- [ ] Red flag gaps are resolved or explicitly acknowledged
- [ ] Material matches `target_output_type`
- [ ] Material matches intended audience
- [ ] Material is concise enough for the selected tier
- [ ] Business value is clear
- [ ] Architecture detail is appropriate for the audience
- [ ] Governance, risk, and security implications are considered
- [ ] Evidence and hypotheses are clearly separated

## 8. Human Validation

- [ ] User confirmed whether to continue
- [ ] User validated role fit
- [ ] User validated personal claims
- [ ] User validated selected pain points
- [ ] User approved final positioning
- [ ] User approved external-facing wording

## 9. External Output Approval

- [ ] `external_output_approved = true`
- [ ] Outreach message is approved
- [ ] Application materials are approved
- [ ] Follow-up message is approved
- [ ] No `do_not_claim` items appear in final material
- [ ] Final output is marked `Approved for External Use`

Do not send, apply, publish, or mark `outreach_ready` without user approval.

## 10. Stop or Archive Decision

- [ ] Role fit is strong enough to continue
- [ ] Evidence is sufficient for the selected output
- [ ] Opportunity value justifies additional work
- [ ] Case improves interview probability, positioning quality, or reusable learning
- [ ] If not, pause or archive the case

## 11. Retrospective

- [ ] Outcome is captured
- [ ] Useful evidence is recorded
- [ ] Strong and weak hypotheses are noted
- [ ] Reusable phrases or materials are identified
- [ ] Lessons learned are captured
- [ ] Reusable insights are separated from company-specific details
- [ ] `workflow_status` is updated
