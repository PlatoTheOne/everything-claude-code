const i18n = {
  "zh-CN": {
    pageTitle: "7poster 设计展示页",
    topbarSubtitle: "基于 Cash App 宪法的设计演示",
    controlsTitle: "编辑器控制台",
    controlsSubtitle: "Linear 风格控制区，实时驱动右侧预览。",
    languageLabel: "语言",
    themeLabel: "Poster 风格",
    themeCash: "The Cash",
    themeCupertino: "The Cupertino",
    themeMountain: "The Mountain View",
    titleLabel: "主标题",
    subtitleLabel: "副标题",
    amountLabel: "核心数据",
    chipLabel: "标签",
    ctaLabel: "按钮文案",
    resetButton: "重置示例内容",
    previewTitle: "实时预览",
    previewSubtitle: "右侧采用中性棋盘格，确保 WYSIWYG 感知。",
    badgeText: "LIVE",
    defaultTitle: "黑绿高对比金融海报",
    defaultSubtitle: "统一风格，统一语言，统一设计令牌。",
    defaultAmount: "$12,480",
    defaultChip: "PROFIT MODE",
    defaultCta: "立即生成"
  },
  "zh-HK": {
    pageTitle: "7poster 設計展示頁",
    topbarSubtitle: "基於 Cash App 憲章的設計演示",
    controlsTitle: "編輯器控制台",
    controlsSubtitle: "Linear 風格控制區，即時驅動右側預覽。",
    languageLabel: "語言",
    themeLabel: "Poster 風格",
    themeCash: "The Cash",
    themeCupertino: "The Cupertino",
    themeMountain: "The Mountain View",
    titleLabel: "主標題",
    subtitleLabel: "副標題",
    amountLabel: "核心數據",
    chipLabel: "標籤",
    ctaLabel: "按鈕文案",
    resetButton: "重設示例內容",
    previewTitle: "即時預覽",
    previewSubtitle: "右側採用中性棋盤格，確保 WYSIWYG 感知。",
    badgeText: "LIVE",
    defaultTitle: "黑綠高對比金融海報",
    defaultSubtitle: "統一風格、統一語言、統一設計令牌。",
    defaultAmount: "$12,480",
    defaultChip: "PROFIT MODE",
    defaultCta: "立即生成"
  },
  en: {
    pageTitle: "7poster Design Showcase",
    topbarSubtitle: "Design demo aligned to the Cash App constitution",
    controlsTitle: "Editor Console",
    controlsSubtitle: "Linear-style controls that drive the live preview.",
    languageLabel: "Language",
    themeLabel: "Poster Style",
    themeCash: "The Cash",
    themeCupertino: "The Cupertino",
    themeMountain: "The Mountain View",
    titleLabel: "Main Title",
    subtitleLabel: "Subtitle",
    amountLabel: "Core Metric",
    chipLabel: "Chip Label",
    ctaLabel: "CTA Text",
    resetButton: "Reset Sample Content",
    previewTitle: "Live Preview",
    previewSubtitle: "Neutral checkerboard area for clear WYSIWYG separation.",
    badgeText: "LIVE",
    defaultTitle: "High Contrast Financial Poster",
    defaultSubtitle: "Unified style, language, and design tokens.",
    defaultAmount: "$12,480",
    defaultChip: "PROFIT MODE",
    defaultCta: "Generate Now"
  }
};

const state = {
  locale: "zh-CN",
  style: "cash"
};

const nodes = {
  locale: document.getElementById("locale"),
  title: document.getElementById("title"),
  subtitle: document.getElementById("subtitle"),
  amount: document.getElementById("amount"),
  chip: document.getElementById("chip"),
  cta: document.getElementById("cta"),
  poster: document.getElementById("poster"),
  posterTitle: document.getElementById("posterTitle"),
  posterSubtitle: document.getElementById("posterSubtitle"),
  posterAmount: document.getElementById("posterAmount"),
  posterChip: document.getElementById("posterChip"),
  posterCta: document.getElementById("posterCta"),
  reset: document.getElementById("reset"),
  themeButtons: Array.from(document.querySelectorAll(".theme-btn")),
  i18nTargets: Array.from(document.querySelectorAll("[data-i18n]"))
};

function t(key) {
  return i18n[state.locale][key] || i18n["zh-CN"][key] || key;
}

function renderLocalizedText() {
  document.documentElement.lang = state.locale;
  document.title = t("pageTitle");

  nodes.i18nTargets.forEach((node) => {
    const key = node.getAttribute("data-i18n");
    node.textContent = t(key);
  });

  nodes.themeButtons.forEach((btn) => {
    const style = btn.dataset.style;
    if (style === "cash") btn.textContent = t("themeCash");
    if (style === "cupertino") btn.textContent = t("themeCupertino");
    if (style === "mountain") btn.textContent = t("themeMountain");
  });

  nodes.locale.options[0].textContent = "简体中文";
  nodes.locale.options[1].textContent = "繁體中文";
  nodes.locale.options[2].textContent = "English";
}

function applyTheme() {
  nodes.poster.classList.remove("theme-cash", "theme-cupertino", "theme-mountain");
  nodes.poster.classList.add(`theme-${state.style}`);

  nodes.themeButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.style === state.style);
  });
}

function resetInputs() {
  nodes.title.value = t("defaultTitle");
  nodes.subtitle.value = t("defaultSubtitle");
  nodes.amount.value = t("defaultAmount");
  nodes.chip.value = t("defaultChip");
  nodes.cta.value = t("defaultCta");
}

function renderPreview() {
  nodes.posterTitle.textContent = nodes.title.value.trim() || t("defaultTitle");
  nodes.posterSubtitle.textContent = nodes.subtitle.value.trim() || t("defaultSubtitle");
  nodes.posterAmount.textContent = nodes.amount.value.trim() || t("defaultAmount");
  nodes.posterChip.textContent = nodes.chip.value.trim() || t("defaultChip");
  nodes.posterCta.textContent = nodes.cta.value.trim() || t("defaultCta");
}

function initEvents() {
  nodes.locale.addEventListener("change", (event) => {
    state.locale = event.target.value;
    renderLocalizedText();
    resetInputs();
    renderPreview();
  });

  nodes.themeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      state.style = btn.dataset.style;
      applyTheme();
    });
  });

  [nodes.title, nodes.subtitle, nodes.amount, nodes.chip, nodes.cta].forEach((input) => {
    input.addEventListener("input", renderPreview);
  });

  nodes.reset.addEventListener("click", () => {
    resetInputs();
    renderPreview();
  });
}

function bootstrap() {
  nodes.locale.value = state.locale;
  renderLocalizedText();
  resetInputs();
  applyTheme();
  renderPreview();
  initEvents();
}

bootstrap();
