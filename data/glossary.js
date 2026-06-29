/*
 * glossary.js — Key terms, alphabetised by `term` at render time.
 *   id                 stable slug (referenced from LIBRARY.glossaryTerms & TOPICS)
 *   term               display name
 *   definition         plain-language definition
 *   seeAlso[]          other glossary ids
 *   relatedInstruments[] LIBRARY ids that define/use the term
 *   source             optional { label, url }
 */
const GLOSSARY = [
  {
    id: "ai-management-system",
    term: "AI Management System (AIMS)",
    definition:
      "An organisation-wide system of policies, processes and controls for governing AI responsibly across its lifecycle. ISO/IEC 42001 is the certifiable standard defining one.",
    seeAlso: ["ai-governance"],
    relatedInstruments: ["iso-iec-42001-2023"],
  },
  {
    id: "ai-governance",
    term: "AI Governance",
    definition:
      "The structures, accountabilities and processes by which an organisation directs and controls its use of AI — who is responsible, how risks are managed, and how decisions are documented.",
    seeAlso: ["ai-management-system"],
    relatedInstruments: ["iso-iec-42001-2023", "nist-ai-rmf-2023", "iso-iec-23894-2023"],
  },
  {
    id: "automation-bias",
    term: "Automation Bias",
    definition:
      "The tendency of a human user to over-rely on an automated system's output — accepting a model's recommendation even when it is wrong, or failing to act when the model is silent. A central human-oversight hazard for clinical AI.",
    seeAlso: ["human-ai-team"],
    relatedInstruments: ["iec-62366-1-2015", "who-lmm-2024"],
  },
  {
    id: "benefit-risk",
    term: "Benefit–Risk Determination",
    definition:
      "The judgement that a device's clinical benefits outweigh its residual risks for the intended use. Embodied in ISO 14971 and required by EU/US device law before a device can be marketed.",
    seeAlso: ["intended-use"],
    relatedInstruments: ["iso-14971-2019", "eu-mdr-2017-745"],
  },
  {
    id: "confabulation",
    term: "Confabulation (Hallucination)",
    definition:
      "When a generative model produces fluent but false or fabricated information, stated with apparent confidence. NIST AI 600-1 uses the term 'confabulation'; it is a key safety risk for medical GenAI.",
    seeAlso: ["robustness"],
    relatedInstruments: ["nist-ai-600-1-2024", "who-lmm-2024"],
  },
  {
    id: "conformity-assessment",
    term: "Conformity Assessment",
    definition:
      "The process of demonstrating that a device meets regulatory requirements before it can be placed on the market. In the EU, higher-risk devices require a notified body to assess conformity under MDR/IVDR (and, for high-risk AI, the AI Act).",
    seeAlso: ["notified-body", "high-risk-ai"],
    relatedInstruments: ["eu-mdr-2017-745", "eu-ai-act-2024"],
  },
  {
    id: "dataset-shift",
    term: "Dataset / Distribution Shift",
    definition:
      "When the data a model sees in deployment differs from its training data (different hospitals, scanners, populations or practices). A leading cause of silent performance degradation in clinical AI.",
    seeAlso: ["model-drift", "robustness"],
    relatedInstruments: ["aami-tir34971-2023", "iso-iec-24029-2023"],
  },
  {
    id: "essential-performance",
    term: "Essential Performance",
    definition:
      "The performance of a clinical function whose loss or degradation would result in unacceptable risk. A core concept in IEC 60601-1 for medical electrical equipment.",
    seeAlso: ["robustness"],
    relatedInstruments: ["iec-60601-1"],
  },
  {
    id: "explainability",
    term: "Explainability / Interpretability",
    definition:
      "The degree to which a human can understand why a model produced a given output. Related to transparency, it supports clinician trust, error detection and meaningful human oversight.",
    seeAlso: ["human-ai-team"],
    relatedInstruments: ["fda-transparency-principles-2024", "iso-iec-tr-24028-2020", "iso-iec-25059-2023"],
  },
  {
    id: "foundation-model",
    term: "Foundation Model",
    definition:
      "A large model trained on broad data that can be adapted to many downstream tasks. Large language models (LLMs) and large multi-modal models (LMMs) are foundation models; they raise distinctive validation and governance questions for medical use.",
    seeAlso: ["lmm", "gpai"],
    relatedInstruments: ["nist-ai-600-1-2024", "who-lmm-2024"],
  },
  {
    id: "gmlp",
    term: "Good Machine Learning Practice (GMLP)",
    definition:
      "A set of 10 guiding principles for developing safe, effective ML medical devices, jointly issued by the FDA, Health Canada and the MHRA (2021) and internationalised by IMDRF (N88, 2025).",
    seeAlso: ["human-ai-team"],
    relatedInstruments: ["gmlp-guiding-principles-2021", "imdrf-gmlp-n88-2025"],
  },
  {
    id: "gpai",
    term: "General-Purpose AI (GPAI)",
    definition:
      "Under the EU AI Act, an AI model (typically a foundation model) capable of competently performing a wide range of tasks. GPAI models carry their own obligations that apply from August 2025.",
    seeAlso: ["foundation-model", "high-risk-ai"],
    relatedInstruments: ["eu-ai-act-2024"],
  },
  {
    id: "high-risk-ai",
    term: "High-Risk AI System",
    definition:
      "Under the EU AI Act, an AI system whose use poses significant risk to health, safety or fundamental rights. AI that is a medical device or a safety component of one is generally high-risk, triggering the Act's strictest requirements.",
    seeAlso: ["conformity-assessment", "gpai"],
    relatedInstruments: ["eu-ai-act-2024"],
  },
  {
    id: "human-ai-team",
    term: "Human–AI Team",
    definition:
      "The combined performance of the human user and the AI working together — the unit that actually matters clinically. GMLP principle 7 stresses evaluating this team, not the model alone.",
    seeAlso: ["automation-bias", "explainability"],
    relatedInstruments: ["gmlp-guiding-principles-2021", "iec-62366-1-2015", "fda-transparency-principles-2024"],
  },
  {
    id: "intended-use",
    term: "Intended Use / Intended Purpose",
    definition:
      "The specific clinical purpose, users, and context a device is designed and labelled for. It scopes the risk analysis, the required evidence, and the regulatory classification.",
    seeAlso: ["benefit-risk"],
    relatedInstruments: ["iso-14971-2019", "eu-mdr-2017-745"],
  },
  {
    id: "jailbreak",
    term: "Jailbreak",
    definition:
      "An input crafted to bypass a model's safety guardrails so it produces content it was designed to refuse. A specific adversarial threat for deployed GenAI systems.",
    seeAlso: ["prompt-injection", "robustness"],
    relatedInstruments: ["nist-ai-600-1-2024", "iso-iec-24029-2023"],
  },
  {
    id: "lmm",
    term: "Large Multi-Modal Model (LMM)",
    definition:
      "A generative model that accepts and/or produces more than one data type (e.g. text and images). WHO issued dedicated 2024 guidance on LMMs in health.",
    seeAlso: ["foundation-model"],
    relatedInstruments: ["who-lmm-2024"],
  },
  {
    id: "model-drift",
    term: "Model Drift",
    definition:
      "Degradation of a deployed model's performance over time as the real world diverges from the conditions it was validated under. Drives the need for ongoing monitoring and change control.",
    seeAlso: ["dataset-shift", "post-market-surveillance"],
    relatedInstruments: ["aami-tir34971-2023", "fda-pccp-final-2024"],
  },
  {
    id: "notified-body",
    term: "Notified Body",
    definition:
      "An independent organisation designated by an EU member state to assess whether higher-risk devices conform to MDR/IVDR (and, for high-risk AI, the AI Act) before market access.",
    seeAlso: ["conformity-assessment"],
    relatedInstruments: ["eu-mdr-2017-745", "eu-ivdr-2017-746"],
  },
  {
    id: "pccp",
    term: "Predetermined Change Control Plan (PCCP)",
    definition:
      "An FDA mechanism letting a manufacturer pre-authorise specific, bounded future modifications to an AI device — described with a modification protocol and impact assessment — without a new marketing submission for each change.",
    seeAlso: ["model-drift", "tplc"],
    relatedInstruments: ["fda-pccp-final-2024", "pccp-guiding-principles-2023"],
  },
  {
    id: "post-market-surveillance",
    term: "Post-Market Surveillance (PMS)",
    definition:
      "The systematic collection and review of real-world data on a device after it is on the market, to detect emerging risks and confirm continued safety and performance. Mandatory under EU MDR/IVDR and tightening in the UK.",
    seeAlso: ["vigilance", "model-drift"],
    relatedInstruments: ["eu-mdr-2017-745", "mhra-software-ai-programme"],
  },
  {
    id: "prompt-injection",
    term: "Prompt Injection",
    definition:
      "An attack that smuggles malicious instructions into a model's input (directly or via retrieved content) to hijack its behaviour. A core security guardrail concern for GenAI systems.",
    seeAlso: ["jailbreak", "robustness"],
    relatedInstruments: ["nist-ai-600-1-2024", "iso-iec-42001-2023"],
  },
  {
    id: "robustness",
    term: "Robustness",
    definition:
      "A model's ability to maintain performance under perturbation, noise, edge cases and adversarial inputs. ISO/IEC 24029 provides methods to assess it for neural networks.",
    seeAlso: ["dataset-shift", "jailbreak"],
    relatedInstruments: ["iso-iec-24029-2023", "iso-iec-25059-2023", "iso-iec-tr-24028-2020"],
  },
  {
    id: "samd",
    term: "Software as a Medical Device (SaMD)",
    definition:
      "Software intended for a medical purpose that performs that purpose without being part of a hardware medical device — for example a diagnostic algorithm running in the cloud. Many GenAI medical tools are SaMD.",
    seeAlso: ["tplc"],
    relatedInstruments: ["imdrf-samd-n81-2025", "iec-62304-2015"],
  },
  {
    id: "soup",
    term: "SOUP (Software of Unknown Provenance)",
    definition:
      "Software not developed under the device's own lifecycle (e.g. a third-party library) whose safety must still be justified. IEC 62304 sets expectations for managing SOUP; a pretrained model is commonly treated as SOUP.",
    seeAlso: [],
    relatedInstruments: ["iec-62304-2015"],
  },
  {
    id: "toxicity",
    term: "Toxic / Harmful Content",
    definition:
      "Outputs that are dangerous, hateful, harassing or otherwise inappropriate. Filtering and evaluating for such content is a guardrail requirement emphasised by NIST AI 600-1 and ISO/IEC 42001.",
    seeAlso: ["jailbreak"],
    relatedInstruments: ["nist-ai-600-1-2024", "who-lmm-2024"],
  },
  {
    id: "tplc",
    term: "Total Product Lifecycle (TPLC)",
    definition:
      "A regulatory view that spans a device from design through deployment to retirement, with risk management and evidence maintained continuously. The FDA's AI guidance is organised around it.",
    seeAlso: ["pccp", "post-market-surveillance"],
    relatedInstruments: ["fda-ai-lifecycle-draft-2025", "fda-pccp-final-2024"],
  },
  {
    id: "vigilance",
    term: "Vigilance",
    definition:
      "The regulatory reporting of serious incidents and field safety corrective actions involving a device. A specific component of post-market obligations under EU MDR/IVDR.",
    seeAlso: ["post-market-surveillance"],
    relatedInstruments: ["eu-mdr-2017-745"],
  },
];
