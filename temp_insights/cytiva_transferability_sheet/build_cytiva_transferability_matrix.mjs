import fs from "node:fs/promises";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outputDir = "temp_insights/cytiva_transferability_sheet";
await fs.mkdir(outputDir, { recursive: true });

const workbook = Workbook.create();
workbook.comments.setSelf({ displayName: "User" });

const summary = workbook.worksheets.add("Summary");
const matrix = workbook.worksheets.add("Requirements Matrix");
const answers = workbook.worksheets.add("Answer Bank");
const gaps = workbook.worksheets.add("Gaps and Clarifications");

const colors = {
  navy: "#17365D",
  blue: "#1F4E79",
  teal: "#0F766E",
  paleBlue: "#DDEBF7",
  paleGreen: "#E2F0D9",
  paleAmber: "#FFF2CC",
  paleRed: "#FCE4D6",
  gray: "#F2F2F2",
  border: "#D9E2F3",
  white: "#FFFFFF",
};

function styleTitle(sheet, range, title) {
  sheet.getRange(range).merge();
  sheet.getRange(range).values = [[title]];
  sheet.getRange(range).format = {
    fill: colors.navy,
    font: { bold: true, color: colors.white, size: 16 },
    horizontalAlignment: "left",
    verticalAlignment: "middle",
  };
}

function styleHeader(range) {
  range.format = {
    fill: colors.blue,
    font: { bold: true, color: colors.white },
    wrapText: true,
    horizontalAlignment: "center",
    verticalAlignment: "middle",
    borders: { preset: "all", style: "thin", color: colors.border },
  };
}

function styleBody(range) {
  range.format = {
    wrapText: true,
    verticalAlignment: "top",
    borders: { preset: "all", style: "thin", color: colors.border },
  };
}

function setWidths(sheet, widths) {
  widths.forEach((width, idx) => {
    sheet.getRangeByIndexes(0, idx, 1, 1).format.columnWidthPx = width;
  });
}

styleTitle(summary, "A1:H1", "Cytiva - IT Business Enablement Director Finance - Transferability Matrix");
summary.getRange("A3:B10").values = [
  ["Purpose", "Interview preparation and evidence traceability for recruiter concern about role transferability."],
  ["Target role", "IT Business Enablement Director - Finance"],
  ["Company", "Cytiva"],
  ["Interview stage", "Senior Director interview with Jetal Patel, Sr. Director IT Business Enablement - Functions"],
  ["Candidate positioning", "Senior Finance systems product and transformation leader bridging Finance, IT, governance, vendors, platforms, roadmaps, and measurable outcomes."],
  ["Overall fit", "Strong fit, with careful positioning required for GxP, DBS, M&A, and Cytiva-specific platform knowledge."],
  ["Main message", "The current role is highly transferable because it already sits between Finance priorities, finance technology roadmaps, delivery governance, support models, and measurable business outcomes."],
  ["Usage rule", "Use only truthful examples. Do not claim Cytiva-specific systems, DBS expertise, specialist GxP validation leadership, or M&A due diligence unless validated."],
];
summary.getRange("A3:A10").format = { fill: colors.paleBlue, font: { bold: true }, wrapText: true };
summary.getRange("B3:B10").format = { wrapText: true, verticalAlignment: "top" };
summary.getRange("A12:D12").values = [["Fit Area", "Match", "Evidence Strength", "Interview Risk"]];
styleHeader(summary.getRange("A12:D12"));
summary.getRange("A13:D20").values = [
  ["Finance IT enablement", "Very strong", "Direct professional evidence", "Low"],
  ["Finance application roadmaps", "Very strong", "Direct product ownership evidence", "Low"],
  ["Business/IT translation", "Very strong", "Direct professional evidence", "Low"],
  ["Value stream / backlog prioritization", "Strong", "Direct transferable evidence", "Low"],
  ["Data & Analytics / automation", "Moderate to strong", "Professional exposure plus developing AI/automation capability", "Medium"],
  ["GxP / regulatory standards", "Moderate", "Controls, audit, access, documentation, change governance", "Medium"],
  ["Danaher Business System", "Transferable", "Continuous improvement and operating model evidence", "Medium"],
  ["M&A / due diligence", "Weak / unclear", "Not currently evidenced", "High if overclaimed"],
];
styleBody(summary.getRange("A13:D20"));
summary.getRange("A22:H22").merge();
summary.getRange("A22:H22").values = [["Best concise answer to recruiter concern"]];
summary.getRange("A22:H22").format = { fill: colors.teal, font: { bold: true, color: colors.white } };
summary.getRange("A23:H25").merge();
summary.getRange("A23:H25").values = [[
  "My current role is strongly transferable because I already operate at the interface of Finance, IT, vendors, governance, and delivery. I own or govern roadmaps, backlogs, support models, change processes, stakeholder communication, risk, and prioritization across finance technology platforms. The main difference is the Cytiva context: I would need to learn the specific platform landscape, DBS language, and regulated-life-sciences expectations, but the core enablement pattern is very familiar."
]];
summary.getRange("A23:H25").format = { wrapText: true, verticalAlignment: "top", fill: colors.paleGreen };
setWidths(summary, [180, 560, 150, 180, 120, 120, 120, 120]);
summary.freezePanes.freezeRows(1);
summary.showGridLines = false;

const matrixHeaders = [
  "ID",
  "JD Requirement / Responsibility",
  "JD Section",
  "What Cytiva likely needs",
  "Candidate evidence / transferable experience",
  "Match",
  "Safe interview wording",
  "Proof example to prepare",
  "Gap / caveat",
  "Confidence",
  "Use in interview",
];

const matrixRows = [
  ["R01", "Bridge business objectives with IT capabilities to deliver measurable business outcomes for Finance.", "Role purpose", "A leader who can convert Finance priorities into technology roadmap, delivery choices, and measurable value.", "Finance systems product ownership across roadmaps, backlogs, governance forums, vendor delivery, risk/change processes, support model, and stakeholder communication.", "Strong", "I already work at the Finance and IT interface, translating business needs into roadmap, backlog, governance, delivery priorities, and measurable outcomes.", "Finance systems product ownership story covering roadmap, backlog, governance, stakeholders, vendors, risks, and benefits.", "Need to learn Cytiva-specific Finance operating model and platform landscape.", "High", "Lead with this."],
  ["R02", "Drive strategic alignment, operational excellence, and innovation across enterprise IT initiatives.", "Role purpose", "Someone who can align Finance, IT, delivery, governance, and improvement themes without creating disconnected initiatives.", "Transformation analysis, operating model improvement, continuous improvement, ITSM/SDLC/agile implementation, portfolio/business-case review.", "Strong", "My strength is creating alignment between strategy, governance, delivery, and operational improvement, especially in finance systems contexts.", "Operating model / ways-of-working improvement example that reduced approval friction and clarified ownership.", "Do not claim Danaher Business System expertise.", "High", "Use as senior leadership theme."],
  ["R03", "Partner with Finance leaders, Finance teams, Finance Systems and IT delivery teams as a single effective interface.", "What You Will Do", "A credible bridge who can manage stakeholder expectations and avoid fragmented Finance-to-IT communication.", "Direct stakeholder management across Finance, IT, reporting, governance, vendors, support teams, developers, SMEs, and leadership.", "Strong", "I have acted as the bridge between Finance stakeholders, technology teams, vendors, governance, and support teams, making priorities and decisions visible.", "Governance forum or escalation example where you aligned Finance, IT, vendor, and delivery teams.", "Need to clarify decision rights in Cytiva role.", "High", "Use early."],
  ["R04", "Define, execute and maintain Finance IT strategy and Finance application roadmaps aligned with priorities and evolving needs.", "What You Will Do", "Roadmap owner who can manage priorities, dependencies, cost, risk, change, and evolving business needs.", "Product roadmap, backlog, product strategy, support model, risk register, change approvals, vendor delivery, and stakeholder communication for finance systems.", "Strong", "I have owned finance systems roadmaps and governance, translating business priorities and platform needs into structured delivery and support decisions.", "OnePlan / Board or finance systems roadmap story.", "Avoid claiming ownership of Cytiva roadmap or specific Cytiva platforms.", "High", "Core evidence."],
  ["R05", "Support Discovery model by identifying business outcomes, assigning to value streams, and prioritizing value stream backlog.", "What You Will Do", "Product/value-stream thinking with structured discovery, outcome definition, and backlog prioritization.", "Requirement elicitation, business outcome framing, backlog/epic/story governance, Jira/Confluence usage, product prioritization by value/cost/risk/dependency.", "Strong", "I use a similar logic: clarify business outcome, process impact, data/control implications, then translate into roadmap and backlog priorities.", "Example of turning unstructured business demand into roadmap/backlog items and delivery sequence.", "Need to learn Cytiva's Discovery model terminology.", "High", "Translate your method into their language."],
  ["R06", "Partner with IT Delivery & Governance to determine the right delivery approach for prioritized outcomes.", "What You Will Do", "Someone who can choose pragmatic delivery paths and coordinate delivery governance.", "ITSM, SDLC, agile ceremonies, change governance, release governance, testing governance, vendor delivery, architecture/governance approvals.", "Strong", "I have worked with delivery, governance, compliance, technical authorities, vendors, and support teams to shape practical delivery approaches.", "Release acceleration / fewer approvals for standard releases example.", "Do not position as pure engineering delivery owner unless asked.", "High", "Good fit to senior director discussion."],
  ["R07", "Drive proof of concepts and author user requirement specifications.", "What You Will Do", "Ability to test ideas before scaling and write clear requirements.", "Requirements elicitation, solution shaping, acceptance criteria, process design, business application prototyping, AI-assisted CRM prototype with real business user iterations.", "Moderate to strong", "I have strong requirements and solution-shaping experience and practical prototyping evidence, including iterating an AI-assisted business app with a real user.", "Laserowo/CRM prototype as careful supporting example; focus on process, user iteration, and delivery discipline.", "Do not overstate as enterprise-scale AI or software engineering delivery.", "Medium", "Use if they ask about POCs."],
  ["R08", "Track ROI and say/do performance after delivery.", "What You Will Do", "Value discipline: define expected outcomes, track delivery commitments, benefits, cost, adoption, and actual delivery.", "Business cases, cost trackers, benefit cases, investment recommendations, roadmap governance, performance/service reviews, delivery tracking.", "Strong", "I am comfortable defining expected value early and tracking delivery promises against actual outcomes, costs, adoption, and operational impact.", "Business case / benefits / roadmap tracking example.", "Avoid fake precision if metrics were qualitative or governance-based.", "High", "Use as differentiator."],
  ["R09", "Ensure initiatives deliver measurable improvements in efficiency, cost, quality, customer satisfaction, and decision-making.", "What You Will Do", "Business-value orientation, not only project delivery.", "Operational efficiency, cost tracking, support model improvement, process simplification, reporting visibility, fewer approvals, faster release path, improved user experience.", "Strong", "I try to connect delivery to practical measures: time saved, fewer handoffs, clearer ownership, lower risk, faster decisions, better reporting, or reduced run cost.", "Process bottleneck and release governance improvement example.", "Quantify only where safe.", "High", "Use in several answers."],
  ["R10", "Champion continuous improvement and innovation across Finance using advanced analytics, automation, digital technologies and market trends.", "What You Will Do", "Finance improvement leader who can identify practical digital/automation opportunities.", "Continuous improvement, process standardization, reporting/analytics requirements, Power BI requirement ownership, AI-assisted productivity, automation opportunity identification.", "Moderate to strong", "I approach automation and analytics through process value, data readiness, governance, and adoption rather than tool-first thinking.", "Finance reporting/process improvement or AI-assisted workflow example.", "Advanced analytics is credible as enablement, not specialist data science.", "Medium", "Use carefully."],
  ["R11", "Optimize end-to-end Finance processes and translate emerging best practices into actionable strategies.", "What You Will Do", "Process/process-architecture thinking across Finance value chains and systems.", "Process discovery, process mapping, standardization, operating model improvement, support model maturity, finance process understanding.", "Strong", "I have strong process discovery and mapping experience, including identifying bottlenecks, ownership gaps, controls, handoffs, and improvement opportunities.", "Visio/process mapping and operating model improvement example.", "Do not claim formal DBS methodology unless validated.", "High", "Strong transferability story."],
  ["R12", "Maintain and improve Finance technology landscape including multiple ERPs, Finance ecosystems and Data & Analytics platforms.", "What You Will Do", "Landscape fluency across ERP, reporting, planning, consolidation, analytics, and integration dependencies.", "Board, SAP ERP/ECC, SAP BW, SAP SAC, SAP FC, SAP FIM, Power BI, Azure, Oracle ERP, application/data-flow awareness.", "Strong", "I have worked across a finance technology landscape involving planning, reporting, consolidation, ERP, data flows, analytics, and governance.", "Landscape story: how finance systems connect across planning/reporting/consolidation/data flows.", "Do not claim hands-on configuration of every platform.", "High", "Core fit."],
  ["R13", "Ensure robust integration, GxP/regulatory compliance, proactive risk mitigation and operational excellence.", "What You Will Do", "Governed technology leadership in regulated environment.", "Controls, audit, access governance, documentation, change governance, compliance workflows, risk register, security/access tools exposure, integration/data-flow awareness.", "Moderate to strong", "My strongest evidence is controls, auditability, access governance, documentation, change governance, and risk-managed delivery. I would need to learn Cytiva's GxP specifics.", "Change/access/compliance governance example.", "Do not claim specialist GxP/CSV validation leadership.", "Medium", "Answer honestly."],
  ["R14", "Act as virtual pillar team lead, delegate to Pillar Head, and primary escalation point for prioritization conflicts and stakeholder escalations.", "What You Will Do", "Senior operator who can lead through influence, manage conflict, and represent the function.", "Direct and matrix team leadership, escalations, prioritization, team management, vendor/stakeholder governance, people management over 10+ years.", "Strong", "I have led direct and matrix teams, managed escalations, clarified priorities, removed blockers, and represented product/platform decisions in governance forums.", "People leadership and escalation story across SMEs/vendors/business users.", "Clarify scope of delegate authority.", "High", "Important for Jetal."],
  ["R15", "12+ years partnering with Finance, supporting finance processes or finance technology transformation.", "Who You Are", "Substantial Finance/IT transformation background.", "Senior finance systems product and transformation experience across planning, reporting, consolidation, governance, delivery, and finance technology platforms.", "Strong", "My background is strongly finance-technology oriented, with long-term experience bridging Finance processes and enterprise systems.", "Concise career narrative.", "Confirm exact years if challenged.", "High", "Use in opener."],
  ["R16", "Bachelor's degree in Computer Science or STEM equivalent certification or equivalent.", "Who You Are", "Technical or equivalent professional foundation.", "Equivalent professional experience plus technical/product/tooling exposure. Formal degree/certification status should be stated exactly as true.", "Needs confirmation", "I can evidence equivalent practical experience in finance technology, product governance, systems, data flows, and transformation. I would state formal education/certifications exactly as applicable.", "Prepare actual education/certification answer.", "Need user-confirmed education wording.", "Medium", "Clarify if asked."],
  ["R17", "Strong understanding of Finance capabilities and ability to translate business priorities and data requirements into scalable technology solutions.", "Who You Are", "Finance capability, data requirement, and scalable solution thinking.", "Finance capability/process understanding, reporting/data-flow requirements, product decisions, architecture awareness, process mapping, solution design support.", "Strong", "I translate Finance priorities into requirements, data needs, controls, process impacts, roadmap items, and delivery priorities.", "Reporting/data-flow or finance process requirement example.", "Avoid claiming detailed solution architecture ownership for all platforms.", "High", "Core fit."],
  ["R18", "Influence senior stakeholders through credibility, business acumen, structured communication, and decision support.", "Who You Are", "Executive communication and decision framing.", "Governance packs, risk summaries, roadmap summaries, business cases, stakeholder communications, escalation notes, decision support.", "Strong", "My communication style is structured: options, risks, dependencies, value, decisions needed, and consequences.", "Steering/governance decision pack example.", "Use your own style; avoid polished corporate language that does not sound like you.", "High", "Very important."],
  ["R19", "Operate in a global, matrixed organization with competing priorities, evolving requirements, and cross-functional delivery teams.", "Who You Are", "Ability to navigate ambiguity and distributed ownership.", "Cross-functional teams, vendors, SMEs, Finance/IT/governance stakeholders, competing priorities, release/change governance, matrix escalation.", "Strong", "I am used to environments where no single team owns the full outcome, so clarity of ownership, priorities, escalation, and decision rights is essential.", "Matrix delivery and conflict/prioritization story.", "None significant.", "High", "Use with Jetal."],
  ["R20", "Outcome-oriented mindset, resilience, accountability, and ability to drive progress through ambiguity, complexity, and setbacks.", "Who You Are", "Pragmatic leader who keeps delivery moving.", "Escalation management, blocker removal, issue/risk management, support model ownership, vendor challenge, release governance, operational reviews.", "Strong", "I try to turn ambiguity into structured choices: what is known, what is blocked, what decision is needed, who owns it, and what happens next.", "Difficult delivery or escalation example.", "Avoid sounding negative about vendors; frame challenge professionally.", "High", "Good behavioral answer."],
  ["R21", "Build broad knowledge across enterprise functions and identify opportunities to improve consistency, efficiency, and business value through technology.", "Who You Are", "Enterprise-wide curiosity and pattern recognition.", "Business/process architecture, capability mapping, application landscape awareness, ITSM/SDLC, finance systems, governance, AI/automation learning.", "Strong", "I look for reusable patterns across processes, systems, controls, data, and operating models, then translate them into practical improvements.", "Process standardization or reusable governance template example.", "Keep evidence tied to actual work.", "High", "Use as senior maturity signal."],
  ["R22", "Exposure to enterprise Finance technology ecosystems, ERP platforms, and Data & Analytics solutions.", "Plus", "Broad finance platform fluency.", "Board, SAP ERP/ECC, SAP BW, SAP SAC, SAP FC, SAP FIM, Power BI, Azure, Oracle ERP.", "Strong", "I have worked across finance technology ecosystems rather than a single isolated application.", "Finance application landscape story.", "No Cytiva-specific platform claims.", "High", "Use confidently."],
  ["R23", "Experience with M&A and Due Diligence focused projects at global and cross-functional scale.", "Plus", "Ability to assess systems/processes/risks during corporate change.", "Not clearly evidenced in current profile.", "Weak / gap", "I would not overclaim direct M&A due diligence ownership. I can bring experience from platform transition, operating model change, and finance systems governance if relevant.", "Prepare honest answer if asked.", "Potential gap; listed as plus only.", "Low", "Acknowledge and redirect."],
];

matrix.getRange("A1:K1").values = [matrixHeaders];
styleHeader(matrix.getRange("A1:K1"));
matrix.getRangeByIndexes(1, 0, matrixRows.length, matrixHeaders.length).values = matrixRows;
styleBody(matrix.getRangeByIndexes(1, 0, matrixRows.length, matrixHeaders.length));
matrix.tables.add(`A1:K${matrixRows.length + 1}`, true, "CytivaRequirementsMatrix");
setWidths(matrix, [55, 330, 130, 330, 420, 130, 360, 340, 300, 110, 180]);
matrix.freezePanes.freezeRows(1);
matrix.freezePanes.freezeColumns(1);
matrix.showGridLines = false;
matrix.getRange(`F2:F${matrixRows.length + 1}`).dataValidation = { rule: { type: "list", values: ["Strong", "Moderate to strong", "Moderate", "Transferable", "Weak / gap", "Needs confirmation"] } };
matrix.getRange(`J2:J${matrixRows.length + 1}`).dataValidation = { rule: { type: "list", values: ["High", "Medium", "Low"] } };

const answerHeaders = ["Theme", "Likely question", "Answer anchor", "Evidence to cite", "Avoid saying"];
const answerRows = [
  ["Transferability", "How similar is your current role to this role?", "Very similar in operating pattern: Finance needs, IT capabilities, roadmap/backlog, governance, vendors, delivery, risk, and measurable outcomes. Different domain context: Cytiva platforms, DBS, and GxP specifics need learning.", "Finance systems product ownership, roadmap, backlog, governance forums, support model, vendor delivery, risk/change processes.", "Do not say it is identical; say core pattern is familiar."],
  ["Finance IT roadmap", "Have you owned Finance application roadmaps?", "Yes, from product/governance perspective: priorities, backlog, roadmap, risk, change, vendor delivery, support model, and stakeholder alignment.", "OnePlan / Board, finance systems landscape, roadmap/backlog governance.", "Do not claim Cytiva platform knowledge."],
  ["Value streams", "How would you prioritize value stream backlog?", "Start with business outcome, process impact, risk/compliance, data need, dependency, capacity, cost, and urgency. Make trade-offs visible.", "Backlog, Jira, business case, benefit/cost/risk prioritization.", "Do not imply you know Cytiva's Discovery model yet."],
  ["GxP/regulatory", "Do you have GxP experience?", "I have strong controls, audit, access, documentation, change governance, and risk-managed delivery experience. I would need to learn Cytiva's specific GxP process depth.", "SOX/control/audit/access/change governance, Veeva workflow exposure if relevant.", "Do not claim specialist GxP/CSV validation leadership."],
  ["DBS", "Do you know Danaher Business System?", "I would not claim direct DBS experience, but continuous improvement, process standardization, operating model improvement, and measurable outcomes are familiar patterns.", "Operating model, process standardization, release governance, continuous improvement.", "Do not pretend to be a DBS insider."],
  ["Analytics/automation", "How do you approach advanced analytics and automation?", "Start from Finance process pain point, data readiness, ownership, controls, adoption, and measurable value. Automation helps only when the process is clear enough to scale safely.", "Power BI requirements, AI-assisted productivity, process automation opportunity identification, Laserowo/CRM prototype if asked.", "Do not position as data scientist or AI engineer."],
  ["Senior stakeholders", "How do you influence senior stakeholders?", "Use structured communication: options, risks, value, dependencies, decisions needed, and consequences. Avoid emotional escalation where possible.", "Governance packs, roadmap summaries, decision support, escalation notes.", "Do not sound combative."],
  ["Matrix leadership", "How do you lead without direct authority?", "Clarify ownership, decision rights, priorities, escalation paths, and delivery expectations. Keep teams aligned around outcome, not only activity.", "Direct and matrix team leadership across SMEs, vendors, Finance and IT.", "Do not make it sound like control-only management."],
  ["M&A", "Do you have M&A due diligence experience?", "Not as a primary claim. I can bring adjacent experience from platform transitions, operating model change, finance systems governance, and risk/dependency assessment.", "Transformation and platform transition examples.", "Do not overclaim direct M&A."],
  ["First 90 days", "What would you do first?", "Understand Finance outcomes, stakeholder map, platform landscape, active roadmap, value streams, governance forums, pain points, current commitments, and success measures.", "Discovery/assessment approach from finance systems product ownership.", "Do not propose sweeping change before discovery."],
];

answers.getRange("A1:E1").values = [answerHeaders];
styleHeader(answers.getRange("A1:E1"));
answers.getRangeByIndexes(1, 0, answerRows.length, answerHeaders.length).values = answerRows;
styleBody(answers.getRangeByIndexes(1, 0, answerRows.length, answerHeaders.length));
answers.tables.add(`A1:E${answerRows.length + 1}`, true, "InterviewAnswerBank");
setWidths(answers, [180, 300, 450, 360, 320]);
answers.freezePanes.freezeRows(1);
answers.showGridLines = false;

const gapHeaders = ["Area", "Risk Level", "What is safe to say", "What needs clarification", "Recommended handling"];
const gapRows = [
  ["GxP / regulatory standards", "Medium", "Strong controls, auditability, access, documentation, change governance, risk-managed delivery.", "Depth of expected GxP/CSV validation ownership.", "Position as regulated-delivery discipline; ask how deep the GxP expectation is."],
  ["Danaher Business System", "Medium", "Continuous improvement, operational excellence, process standardization, measurable outcomes.", "Whether direct DBS experience is required or learnable.", "Say DBS is not direct experience; bridge to continuous improvement."],
  ["M&A / due diligence", "High", "Adjacent transformation, platform transition, risk/dependency assessment.", "Whether M&A is important or simply a plus.", "Do not lead with it. Acknowledge as development area if asked."],
  ["Cytiva platform landscape", "Medium", "Broad finance ecosystem fluency across ERP, planning, reporting, consolidation, analytics, Azure.", "Specific Cytiva ERPs, Finance systems, D&A platforms in scope.", "Ask which platforms are in scope; do not guess."],
  ["Advanced analytics / AI", "Medium", "Business-side analytics requirements, automation opportunity identification, AI-assisted productivity and prototyping.", "Whether role expects data science/platform ownership.", "Position as enablement and adoption, not specialist AI engineering."],
  ["Formal STEM degree/certification", "Medium", "Equivalent practical finance technology and transformation experience if true.", "Exact education/certification fit.", "State formal background exactly; do not improvise."],
];

gaps.getRange("A1:E1").values = [gapHeaders];
styleHeader(gaps.getRange("A1:E1"));
gaps.getRangeByIndexes(1, 0, gapRows.length, gapHeaders.length).values = gapRows;
styleBody(gaps.getRangeByIndexes(1, 0, gapRows.length, gapHeaders.length));
gaps.tables.add(`A1:E${gapRows.length + 1}`, true, "GapsAndClarifications");
setWidths(gaps, [220, 110, 420, 360, 360]);
gaps.freezePanes.freezeRows(1);
gaps.showGridLines = false;

for (const sheet of [summary, matrix, answers, gaps]) {
  const used = sheet.getUsedRange();
  used.format.font = { name: "Aptos", size: 10 };
  used.format.wrapText = true;
  used.format.verticalAlignment = "top";
}

const inspect = await workbook.inspect({
  kind: "workbook,sheet,table",
  maxChars: 6000,
  tableMaxRows: 4,
  tableMaxCols: 5,
});
console.log(inspect.ndjson);

const matrixPreview = await workbook.render({
  sheetName: "Requirements Matrix",
  range: "A1:K24",
  scale: 1,
  format: "png",
});
await fs.writeFile(`${outputDir}/requirements_matrix_preview.png`, new Uint8Array(await matrixPreview.arrayBuffer()));

const summaryPreview = await workbook.render({
  sheetName: "Summary",
  range: "A1:H25",
  scale: 1,
  format: "png",
});
await fs.writeFile(`${outputDir}/summary_preview.png`, new Uint8Array(await summaryPreview.arrayBuffer()));

const xlsx = await SpreadsheetFile.exportXlsx(workbook);
await xlsx.save(`${outputDir}/cytiva_transferability_matrix.xlsx`);

