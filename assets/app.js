"use strict";

const flows = Object.freeze({
  search: {
    node: "8:82",
    label: "Agent Search",
    hint: "Start with the inventory. Try High risk, open Claims Reconciliation, and explore its details."
  },
  details: {
    node: "39:2779",
    label: "Agent details",
    hint: "Review the agent's business purpose, accountable owner, operating context, and governance tabs."
  },
  bulk: {
    node: "8:82",
    label: "Bulk governance",
    hint: "Select Claims Reconciliation, Vendor Onboarding, and Invoice Router using their checkboxes. Choose Block to review eligibility and the simulated results."
  },
  overview: {
    node: "8:2",
    label: "Overview",
    hint: "Explore the estate-level dashboard, then follow a metric or the Agent Search navigation item to investigate."
  }
});

const file = "LUSAcva35Ic0gjGkxc78Fn";
const frame = document.getElementById("prototype");
const hint = document.getElementById("flow-hint");
const externalLink = document.getElementById("open-flow");
const shell = document.getElementById("prototype-shell");
const buttons = [...document.querySelectorAll("[data-flow]")];

function prototypeUrl(node, embedded) {
  const host = embedded ? "https://embed.figma.com" : "https://www.figma.com";
  const url = new URL(`/proto/${file}/Agent-Management-Console`, host);
  url.searchParams.set("node-id", node.replace(":", "-"));
  url.searchParams.set("starting-point-node-id", node);
  url.searchParams.set("page-id", "0:1");
  url.searchParams.set("scaling", "scale-down-width");
  url.searchParams.set("content-scaling", "fixed");
  if (embedded) {
    url.searchParams.set("show-proto-sidebar", "false");
    url.searchParams.set("embed-host", "agent-catalog-portfolio");
  }
  return url.href;
}

function selectFlow(key) {
  const flow = flows[key];
  if (!flow) return;
  frame.src = prototypeUrl(flow.node, true);
  frame.title = `Interactive AI Agent Management Console prototype — ${flow.label}`;
  hint.textContent = flow.hint;
  externalLink.href = prototypeUrl(flow.node, false);
  buttons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.flow === key)));
}

buttons.forEach(button => button.addEventListener("click", () => selectFlow(button.dataset.flow)));

document.getElementById("expand-demo").addEventListener("click", async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else if (shell.requestFullscreen) await shell.requestFullscreen();
    else hint.textContent = "Use Open prototype in a new tab to view the demo in a larger window.";
  } catch {
    hint.textContent = "Fullscreen is unavailable here. Use Open prototype in a new tab for a larger view.";
  }
});
