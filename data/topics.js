/*
 * topics.js — One explainer page per priority theme.
 * `id` matches a TAXONOMY.themes id, so the page can auto-pull related
 * instruments via LIBRARY.filter(e => e.themes.includes(id)).
 *   intro[]       paragraphs of plain-language explanation (HTML allowed)
 *   keyPoints[]   short bullet takeaways
 *   narrative     "how these instruments fit together" sentence/paragraph
 *   featuredIds[] entry ids to highlight first (optional ordering)
 *   relatedGlossary[] glossary ids
 */
const TOPICS = [
  {
    id: "risk-management",
    title: "Risk Management",
    tagline: "Finding, judging and controlling what could go wrong — across the whole lifecycle.",
    intro: [
      "Risk management is the backbone discipline for any medical device, and AI does not replace it — it extends it. For a conventional device you identify hazards, estimate and evaluate the associated risks, put controls in place, and weigh the residual risk against the clinical benefit. <strong>ISO 14971</strong> is the international standard that defines this process, and EU MDR/IVDR and the FDA both expect it.",
      "GenAI introduces hazards that classic methods were not written for: the model can <em>drift</em> as real-world data shifts, it can behave unpredictably on inputs outside its training distribution, it can <em>confabulate</em> (state false information confidently), and it can be steered by adversarial prompts. <strong>AAMI TIR34971</strong> is the key bridge — it applies the ISO 14971 process specifically to machine-learning hazards, with concrete prompts for data, bias, drift and adversarial inputs. On the general-AI side, <strong>ISO/IEC 23894</strong> and the <strong>NIST AI RMF</strong> give complementary, AI-specific risk vocabularies.",
      "At the organisational level, <strong>ISO/IEC 42001</strong> provides a certifiable management system so risk management is systematic and auditable rather than ad hoc, and <strong>ISO/IEC 42005</strong> adds a method for assessing broader impacts on patients and groups.",
    ],
    keyPoints: [
      "Start from ISO 14971 — it is the recognised medical-device risk process.",
      "Use AAMI TIR34971 to translate it for AI/ML-specific hazards (drift, bias, adversarial inputs).",
      "Layer NIST AI RMF / ISO 23894 for AI-specific risk framing, and ISO/IEC 42001 for governance.",
      "Document benefit–risk explicitly — a GenAI feature must earn its residual risk.",
    ],
    narrative:
      "ISO 14971 (the process) → AAMI TIR34971 (apply it to ML) → ISO/IEC 23894 & NIST AI RMF (AI-specific risk language) → ISO/IEC 42001 + 42005 (govern and assess impact at the organisation level).",
    featuredIds: ["iso-14971-2019", "aami-tir34971-2023", "nist-ai-rmf-2023", "iso-iec-23894-2023", "iso-iec-42001-2023"],
    relatedGlossary: ["benefit-risk", "model-drift", "dataset-shift"],
  },
  {
    id: "safety-assessment",
    title: "Safety Assessment",
    tagline: "Demonstrating, with evidence, that the AI function is safe and performs as intended.",
    intro: [
      "Safety assessment is where claims meet evidence. For an AI-enabled device you need to show that the model is accurate enough for its intended use, robust to realistic variation in inputs, and that the overall human–AI system is safe in the clinical workflow — not just the model in isolation.",
      "Several instruments supply pieces of this. <strong>ISO/IEC 25059</strong> defines measurable AI quality characteristics (robustness, fairness, interpretability) and <strong>ISO/IEC TS 25058</strong> explains how to evaluate them. <strong>ISO/IEC 24029</strong> gives concrete methods for assessing neural-network robustness — important evidence that a model behaves predictably under perturbation. On the clinical side, <strong>EU MDR/IVDR</strong> require clinical/performance evaluation, and the <strong>FDA draft AI lifecycle guidance</strong> sets out the validation evidence regulators expect across the total product lifecycle.",
      "Crucially, safety is not only a model property. <strong>IEC 62366-1</strong> (usability engineering) addresses use-related hazards — how a clinician reads and acts on a GenAI output — and the <strong>WHO</strong> guidance frames the wider ethical and safety expectations for AI in health.",
    ],
    keyPoints: [
      "Define quality characteristics you can measure (ISO/IEC 25059) and evaluate them (TS 25058, 24029).",
      "Provide clinical/performance evidence as MDR/IVDR and FDA expect.",
      "Assess the human–AI system, not just the model — usability matters (IEC 62366-1).",
      "Use independent test data; demonstrate robustness to distribution shift and edge cases.",
    ],
    narrative:
      "ISO/IEC 25059 (what 'good' means) → TS 25058 & ISO/IEC 24029 (how to test it) → MDR/IVDR clinical evaluation + FDA lifecycle guidance (regulatory evidence) → IEC 62366-1 & WHO (the human and ethical dimension).",
    featuredIds: ["iso-iec-25059-2023", "iso-iec-24029-2023", "fda-ai-lifecycle-draft-2025", "iec-62366-1-2015", "who-lmm-2024"],
    relatedGlossary: ["robustness", "essential-performance", "explainability"],
  },
  {
    id: "guardrails",
    title: "Guardrails",
    tagline: "Controls against jailbreak, prompt injection, toxic content, bias and confabulation.",
    intro: [
      "Guardrails are the GenAI-specific controls that keep a model's outputs safe and on-task. This is the area where classic medical-device standards are thinnest, because they predate large language models. The honest picture: most device standards address ML <em>generically</em>, and the genuinely GenAI-specific guidance lives in <strong>NIST AI 600-1</strong> (the Generative AI Profile) and the <strong>WHO LMM</strong> guidance.",
      "<strong>NIST AI 600-1</strong> enumerates 12 GenAI risk categories — including dangerous or violent content, harmful information, data privacy, and confabulation — and over 200 suggested actions. <strong>WHO's LMM guidance</strong> translates the same concerns into the health setting. For the adversarial-robustness side (jailbreaks, prompt injection, perturbation attacks), <strong>ISO/IEC 24029</strong> provides assessment methods and <strong>ISO/IEC TR 24028</strong> supplies the trustworthiness vocabulary.",
      "These then need to be folded back into the medical-device risk file: <strong>AAMI TIR34971</strong> is where adversarial-input and bias hazards become documented risk controls, and <strong>ISO/IEC 42001</strong> requires the organisation to manage prompt-injection protection, adversarial testing, input validation, bias detection and content filtering as part of its AI management system.",
    ],
    keyPoints: [
      "GenAI-specific risk is best covered by NIST AI 600-1 and WHO LMM — most device standards only cover ML generically.",
      "Test for jailbreak / prompt injection and adversarial robustness (ISO/IEC 24029).",
      "Build bias detection and content filtering in, and document them as risk controls (AAMI TIR34971, ISO/IEC 42001).",
      "Treat guardrails as ongoing — new attacks emerge, so monitoring (see Post-Market) is part of the control.",
    ],
    narrative:
      "NIST AI 600-1 & WHO LMM (what GenAI-specific risks to cover) → ISO/IEC 24029 & TR 24028 (test robustness, define terms) → AAMI TIR34971 (document as risk controls) → ISO/IEC 42001 (manage them systematically).",
    featuredIds: ["nist-ai-600-1-2024", "who-lmm-2024", "iso-iec-24029-2023", "aami-tir34971-2023", "iso-iec-42001-2023"],
    relatedGlossary: ["jailbreak", "prompt-injection", "confabulation", "toxicity"],
  },
  {
    id: "monitoring-postmarket",
    title: "Monitoring & Post-Market",
    tagline: "Watching real-world performance and governing change after the device ships.",
    intro: [
      "An AI model's behaviour can change after deployment — because the patient population shifts, because clinical practice moves, or because the model itself is updated. Post-market activity is therefore not optional housekeeping; it is a core safety control for AI devices.",
      "Two threads matter. First, <strong>surveillance</strong>: <strong>EU MDR/IVDR</strong> mandate post-market surveillance and vigilance, the UK's new <strong>post-market surveillance</strong> requirements (in force June 2025) sharpen this for software/AI, and <strong>ISO 14971</strong> and <strong>ISO/IEC 42001</strong> both require monitoring of residual and emerging risk. Second, <strong>change management</strong>: the FDA's <strong>Predetermined Change Control Plan (PCCP)</strong> guidance lets a manufacturer pre-authorise bounded future model updates without a new submission, guided by the tri-regulator <strong>PCCP principles</strong>.",
      "For generative models, monitoring also means watching for drift in output quality, emergence of new jailbreaks, and degradation in subgroup performance — the kinds of issues that the <strong>WHO LMM</strong> guidance and <strong>NIST</strong> profile flag as continuing obligations, not one-time checks.",
    ],
    keyPoints: [
      "Post-market surveillance is mandatory under MDR/IVDR and tightening in the UK.",
      "Plan model updates with a PCCP so bounded changes don't require a fresh submission.",
      "Monitor for drift, new adversarial attacks and subgroup performance decay.",
      "Feed findings back into the risk file (ISO 14971) and AI management system (ISO/IEC 42001).",
    ],
    narrative:
      "MDR/IVDR + UK PMS (surveillance duties) → FDA PCCP & PCCP principles (govern bounded change) → ISO 14971 & ISO/IEC 42001 (feed monitoring back into risk + governance) → WHO LMM / NIST (what to watch for in GenAI).",
    featuredIds: ["fda-pccp-final-2024", "pccp-guiding-principles-2023", "eu-mdr-2017-745", "mhra-software-ai-programme", "iso-iec-42001-2023"],
    relatedGlossary: ["post-market-surveillance", "vigilance", "pccp", "model-drift"],
  },
  {
    id: "best-practices",
    title: "Best Practices",
    tagline: "The principles and habits that good AI/ML medical-device teams converge on.",
    intro: [
      "Beyond any single requirement, the field has converged on a set of good practices. The anchor is <strong>Good Machine Learning Practice (GMLP)</strong> — 10 guiding principles jointly issued by the FDA, Health Canada and the MHRA in 2021 and internationalised by <strong>IMDRF (N88)</strong> in 2025. They span multidisciplinary expertise, good software and security engineering, representative data, independent test sets, demonstrating human–AI team performance, giving users clear information, and monitoring deployed models.",
      "Two companion sets sharpen specific areas: the tri-regulator <strong>Transparency principles</strong> (2024) on what and how to disclose to users, and the <strong>PCCP principles</strong> (2023) on disciplined change control. The <strong>WHO</strong> ethics guidance adds the values layer (equity, accountability, autonomy), and <strong>ISO/IEC 42001</strong> turns good intentions into an auditable management system.",
      "The practical message: most of these documents are mutually reinforcing. A team that adopts GMLP, documents transparency, plans change control, and runs an ISO/IEC 42001-style management system will already satisfy a large share of what regulators across the US, EU and UK are asking for.",
    ],
    keyPoints: [
      "GMLP (10 principles) is the canonical best-practice baseline — now international via IMDRF N88.",
      "Add the Transparency and PCCP principles for disclosure and change control.",
      "Ground it in values with the WHO ethics guidance.",
      "Operationalise with an ISO/IEC 42001 management system so it's auditable and repeatable.",
    ],
    narrative:
      "GMLP / IMDRF N88 (the baseline) → Transparency principles + PCCP principles (disclosure & change) → WHO ethics (values) → ISO/IEC 42001 (make it systematic).",
    featuredIds: ["gmlp-guiding-principles-2021", "imdrf-gmlp-n88-2025", "fda-transparency-principles-2024", "who-ai-health-2021", "iso-iec-42001-2023"],
    relatedGlossary: ["gmlp", "human-ai-team", "explainability"],
  },
];
