import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const { SKILL_DIR, TMP_DIR, FINAL_PPTX } = process.env;
if (!path.isAbsolute(SKILL_DIR ?? "") || !path.isAbsolute(TMP_DIR ?? "") || !path.isAbsolute(FINAL_PPTX ?? "")) {
  throw new Error("Set absolute SKILL_DIR, TMP_DIR and FINAL_PPTX");
}

const { resolvePresentationFont } = await import(
  pathToFileURL(path.join(SKILL_DIR, "container_tools/artifact_tool_utils.mjs")).href
);

await fs.mkdir(TMP_DIR, { recursive: true });
await fs.mkdir(path.dirname(FINAL_PPTX), { recursive: true });

const font = resolvePresentationFont({ fontFamily: "Aptos" });
const deck = Presentation.create({ slideSize: { width: 1280, height: 720 } });

const colors = {
  ink: "#17212B",
  muted: "#5A6673",
  blue: "#265D8F",
  cyan: "#DDEFF8",
  green: "#367C59",
  amber: "#E4A72F",
  red: "#B94A48",
  line: "#C9D1D9",
  pale: "#F4F7FA",
  white: "#FFFFFF",
};

function addTitle(slide, title, subtitle = "") {
  const t = slide.shapes.add({
    geometry: "textbox",
    position: { left: 56, top: 34, width: 900, height: 48 },
    fill: "none",
    line: { fill: "none", width: 0 },
  });
  t.text = title;
  t.text.style = { typeface: font, fontSize: 31, bold: true, color: colors.ink, autoFit: "shrinkText" };
  if (subtitle) {
    const s = slide.shapes.add({
      geometry: "textbox",
      position: { left: 58, top: 82, width: 1080, height: 30 },
      fill: "none",
      line: { fill: "none", width: 0 },
    });
    s.text = subtitle;
    s.text.style = { typeface: font, fontSize: 14.5, color: colors.muted, autoFit: "shrinkText" };
  }
}

function addFooter(slide) {
  const f = slide.shapes.add({
    geometry: "textbox",
    position: { left: 56, top: 682, width: 1120, height: 20 },
    fill: "none",
    line: { fill: "none", width: 0 },
  });
  f.text = "Illustrative case for interview preparation. Figures are assumptions for discussion, not Cytiva actuals.";
  f.text.style = { typeface: font, fontSize: 10.5, color: colors.muted };
}

function addBox(slide, text, x, y, w, h, fill = colors.pale, stroke = colors.line, size = 15, bold = false) {
  const box = slide.shapes.add({
    geometry: "roundRect",
    position: { left: x, top: y, width: w, height: h },
    fill,
    line: { fill: stroke, width: 1 },
  });
  box.text = text;
  box.text.style = { typeface: font, fontSize: size, color: colors.ink, bold, autoFit: "shrinkText" };
  box.text.margin = { left: 12, right: 12, top: 8, bottom: 8 };
  return box;
}

function addPlain(slide, text, x, y, w, h, size = 17, color = colors.ink, bold = false) {
  const box = slide.shapes.add({
    geometry: "textbox",
    position: { left: x, top: y, width: w, height: h },
    fill: "none",
    line: { fill: "none", width: 0 },
  });
  box.text = text;
  box.text.style = { typeface: font, fontSize: size, color, bold, autoFit: "shrinkText" };
  return box;
}

function addTable(slide, x, y, colWidths, rows, header = true) {
  const rowH = 42;
  let top = y;
  rows.forEach((row, r) => {
    let left = x;
    row.forEach((cell, c) => {
      const fill = r === 0 && header ? colors.blue : r % 2 === 0 ? colors.white : colors.pale;
      const textColor = r === 0 && header ? colors.white : colors.ink;
      const box = slide.shapes.add({
        geometry: "rect",
        position: { left, top, width: colWidths[c], height: rowH },
        fill,
        line: { fill: colors.line, width: 0.7 },
      });
      box.text = cell;
      box.text.style = { typeface: font, fontSize: r === 0 && header ? 12.5 : 12, color: textColor, bold: r === 0 && header, autoFit: "shrinkText" };
      box.text.margin = { left: 8, right: 8, top: 5, bottom: 5 };
      left += colWidths[c];
    });
    top += rowH;
  });
}

function addMetric(slide, label, value, x, y, color = colors.blue) {
  addPlain(slide, value, x, y, 170, 40, 25, color, true);
  addPlain(slide, label, x, y + 36, 190, 38, 12.5, colors.muted);
}

function addBar(slide, label, value, max, x, y, w, color) {
  addPlain(slide, label, x, y - 2, 230, 22, 12.5, colors.ink);
  slide.shapes.add({ geometry: "rect", position: { left: x + 245, top: y, width: w, height: 14 }, fill: "#E9EEF3", line: { fill: "none", width: 0 } });
  slide.shapes.add({ geometry: "rect", position: { left: x + 245, top: y, width: Math.max(8, (value / max) * w), height: 14 }, fill: color, line: { fill: "none", width: 0 } });
  addPlain(slide, `${value}`, x + 245 + w + 12, y - 5, 80, 24, 12.5, colors.muted);
}

// Slide 1
{
  const slide = deck.slides.add();
  slide.background.fill = colors.white;
  addPlain(slide, "Finance technology investment case", 70, 88, 850, 70, 42, colors.ink, true);
  addPlain(slide, "Illustrative journey: moving finance reporting and planning capability from Power BI reliance to SAP SAC", 72, 178, 900, 70, 20, colors.muted);
  addBox(slide, "Objective\nGive leadership enough evidence to choose: retain current setup, improve it, or fund a phased SAC move.", 72, 308, 500, 150, colors.cyan, colors.blue, 18, false);
  addBox(slide, "Decision style\nBusiness outcome first. Technology second. TCO, risk, adoption and execution confidence visible before funding.", 642, 308, 500, 150, "#F8F2E2", colors.amber, 18, false);
  addFooter(slide);
  slide.speakerNotes.textFrame.setText("Position this as an illustrative executive case, not a factual Cytiva proposal. Use it to explain how you would build and defend a multi-year investment case.");
}

// Slide 2
{
  const slide = deck.slides.add();
  slide.background.fill = colors.white;
  addTitle(slide, "Baseline finance reporting estate", "Power BI delivers usable reporting, but the operating model can still create hidden cost and fragmentation.");
  addBox(slide, "Current working pattern", 68, 150, 300, 390, colors.pale, colors.line, 16, true);
  addPlain(slide, "Multiple data extracts\nLocal report logic\nManual commentary\nSeparate planning cycles\nMarket-specific workarounds", 94, 215, 245, 230, 19, colors.ink);
  addBox(slide, "Main risks", 410, 150, 360, 390, "#FFF7E8", colors.amber, 16, true);
  addPlain(slide, "Different versions of performance\nSlow planning and review cycles\nManual controls around reports\nHigh dependency on expert users\nLimited link between plan, forecast and actuals", 436, 215, 295, 245, 19, colors.ink);
  addBox(slide, "Finance outcome affected", 812, 150, 360, 390, colors.cyan, colors.blue, 16, true);
  addPlain(slide, "Decision quality\nForecast confidence\nReporting efficiency\nGoverned data use\nAbility to standardize across regions", 838, 215, 295, 230, 19, colors.ink);
  addFooter(slide);
  slide.speakerNotes.textFrame.setText("This slide should not attack Power BI. The message is that a reporting tool can be useful while the wider finance planning and performance process remains fragmented.");
}

// Slide 3
{
  const slide = deck.slides.add();
  slide.background.fill = colors.white;
  addTitle(slide, "Cost of doing nothing", "The case needs to show the financial and operational drag that remains if the estate stays as-is.");
  addMetric(slide, "Annual manual reporting effort", "12k hrs", 80, 150, colors.red);
  addMetric(slide, "Duplicate finance reports", "180", 330, 150, colors.amber);
  addMetric(slide, "Planning cycle duration", "10 wks", 570, 150, colors.amber);
  addMetric(slide, "Critical data reconciliations", "35/mo", 810, 150, colors.red);
  addMetric(slide, "Run cost tied to legacy reporting", "£1.2m", 1040, 150, colors.red);
  addTable(slide, 86, 285, [280, 320, 320, 210], [
    ["Cost area", "What continues", "Business impact", "Evidence to validate"],
    ["Manual effort", "Report preparation, checking, commentary", "Capacity stays trapped in low-value work", "Time studies, close calendar"],
    ["Data friction", "Local logic and repeated reconciliation", "Leadership debates the numbers before decisions", "Data lineage review"],
    ["Platform complexity", "More reports and integrations than needed", "Run cost and change effort stay high", "App and report inventory"],
    ["Control exposure", "Manual evidence and unclear ownership", "Audit and compliance effort stays high", "Control findings, access reviews"],
  ]);
  addFooter(slide);
  slide.speakerNotes.textFrame.setText("All figures are illustrative. The interview point is the method: quantify cost of doing nothing before asking for investment.");
}

// Slide 4
{
  const slide = deck.slides.add();
  slide.background.fill = colors.white;
  addTitle(slide, "Options for leadership", "A credible case compares choices. It does not pretend there is only one possible answer.");
  addTable(slide, 60, 145, [180, 250, 250, 220, 220], [
    ["Option", "Description", "Benefits", "Risks", "Decision view"],
    ["A. Keep Power BI-led model", "Continue with current reporting setup and local improvements", "Low disruption, low upfront spend", "Fragmentation and manual effort remain", "Accept only if pain is low"],
    ["B. Improve current model", "Rationalize reports, strengthen data governance, automate selected steps", "Fastest practical improvement", "May not fix planning and performance integration", "Good bridge if funding is constrained"],
    ["C. Phased SAC move", "Move priority planning and performance capabilities into SAC over 2-3 years", "Stronger standardization and governed planning", "Higher change effort and adoption risk", "Preferred if Finance wants global consistency"],
  ], true);
  addBox(slide, "Recommended decision logic\nChoose SAC only where it improves Finance outcomes enough to justify TCO, migration risk and adoption effort. Keep Power BI where it remains the right consumption layer.", 118, 522, 1040, 88, "#F0F7F1", colors.green, 17, false);
  addFooter(slide);
  slide.speakerNotes.textFrame.setText("This is deliberately balanced. The recommendation is not 'replace Power BI everywhere'. It is to choose the right role for each platform.");
}

// Slide 5
{
  const slide = deck.slides.add();
  slide.background.fill = colors.white;
  addTitle(slide, "TCO and value view", "Leadership needs to see total cost, not only implementation cost.");
  addTable(slide, 62, 136, [235, 155, 155, 155, 385], [
    ["Investment category", "Year 1", "Year 2", "Year 3", "What the spend buys"],
    ["SAC implementation and integration", "£1.8m", "£1.2m", "£0.5m", "Priority FP&A models, data feeds, testing and deployment"],
    ["Licences and cloud/run cost", "£0.7m", "£0.9m", "£1.0m", "SAC usage, support, environments and platform operations"],
    ["Change, training and adoption", "£0.4m", "£0.3m", "£0.2m", "User adoption, process redesign, governance and support model"],
    ["Retired reporting / legacy cost", "-£0.2m", "-£0.7m", "-£1.1m", "Decommissioned reports, infrastructure, support and duplicate tools"],
    ["Net annual cash impact", "£2.7m", "£1.7m", "£0.6m", "Illustrative investment profile before benefits"],
  ]);
  addBar(slide, "Capacity released from manual reporting", 8, 10, 420, 515, colors.green);
  addBar(slide, "Report rationalization progress", 60, 100, 420, 548, colors.blue);
  addBar(slide, "Planning cycle reduction", 35, 100, 420, 581, colors.green);
  addFooter(slide);
  slide.speakerNotes.textFrame.setText("All numbers are illustrative. The important point is showing implementation cost, run cost, adoption cost, retired cost and measurable benefits together.");
}

// Slide 6
{
  const slide = deck.slides.add();
  slide.background.fill = colors.white;
  addTitle(slide, "Phased investment roadmap", "A multi-year case becomes defensible when each phase proves value and reduces risk.");
  addTable(slide, 62, 135, [150, 295, 295, 295], [
    ["Phase", "Scope", "Value proof", "Decision gate"],
    ["0-6 months", "Baseline estate, report inventory, data lineage, priority FP&A use cases", "Clear problem size, owners and pain points", "Fund only if baseline confirms value"],
    ["6-12 months", "Pilot SAC for selected planning or performance process", "Adoption, cycle time, data quality and user confidence", "Scale if pilot beats current model"],
    ["Year 2", "Expand SAC to priority markets and standard models", "Reduced variants, fewer reports, better governance", "Retire overlapping capability"],
    ["Year 3", "Optimize, automate and embed AI-assisted productivity where governed", "Lower run cost, faster insight, stronger controls", "Move to continuous improvement model"],
  ]);
  addFooter(slide);
  slide.speakerNotes.textFrame.setText("Use this slide to show that funding is conditional and staged. Each phase has a gate rather than asking for blind commitment.");
}

// Slide 7
{
  const slide = deck.slides.add();
  slide.background.fill = colors.white;
  addTitle(slide, "Decision point", "The recommendation depends on evidence from the baseline and appetite for transformation risk.");
  addBox(slide, "Approve phased SAC investment", 80, 165, 310, 115, "#F0F7F1", colors.green, 18, true);
  addPlain(slide, "Use when Finance wants global planning standardization, governed performance management and measurable simplification.", 105, 225, 260, 50, 13.5, colors.ink);
  addBox(slide, "Approve bridge improvement first", 485, 165, 310, 115, "#FFF7E8", colors.amber, 18, true);
  addPlain(slide, "Use when funding or adoption risk is too high, but reporting rationalization and data governance still need action.", 510, 225, 260, 50, 13.5, colors.ink);
  addBox(slide, "Do not approve full migration yet", 890, 165, 310, 115, "#FBECEC", colors.red, 18, true);
  addPlain(slide, "Use when the baseline cannot prove enough value, user adoption risk is high, or Power BI remains sufficient.", 915, 225, 260, 50, 13.5, colors.ink);
  addTable(slide, 118, 370, [300, 300, 300], [
    ["Leadership should decide", "Evidence required", "Next action"],
    ["What Finance outcome matters most", "Cycle time, cost, control, insight or standardization baseline", "Confirm value drivers"],
    ["Where SAC creates better value", "Use cases where planning and performance need governed workflow", "Prioritize first release"],
    ["What Power BI should still do", "Reporting needs where consumption layer is enough", "Avoid unnecessary migration"],
  ]);
  addFooter(slide);
  slide.speakerNotes.textFrame.setText("End by showing you are not pushing technology for its own sake. You are helping leadership choose based on evidence, timing and risk.");
}

const candidatePath = path.join(TMP_DIR, "cytiva_sac_investment_case_draft.pptx");
await (await PresentationFile.exportPptx(deck)).save(candidatePath);
await (await PresentationFile.exportPptx(deck)).save(FINAL_PPTX);

for (let idx = 0; idx < deck.slides.length; idx += 1) {
  const slide = deck.slides.get(idx);
  const preview = await slide.export({ format: "png", scale: 1 });
  await fs.writeFile(path.join(TMP_DIR, `slide-${idx + 1}.png`), new Uint8Array(await preview.arrayBuffer()));
}
