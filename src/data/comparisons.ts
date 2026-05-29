// comparisons.ts
// Data source for /comparisons/[slug] pages.
// templateType is always 'comparison'.
// Add new comparison pages here — do NOT add routes manually.
import type { ComparisonTemplateData } from '@/lib/contentTypes';

// Declare the unified type for use in route files.
export type ComparisonRecord = ComparisonTemplateData;

export const comparisons: ComparisonRecord[] = [
  {
    templateType: 'comparison',
    slug: 'tampermonkey-vs-violentmonkey',
    title: 'Tampermonkey vs Violentmonkey for Chrome',
    metaTitle: 'Tampermonkey vs Violentmonkey for Chrome',
    metaDescription:
      'Compare Tampermonkey and Violentmonkey for Chrome MV3, including permissions, open source status, sync, compatibility, and safety tips.',
    quickAnswer:
      'Tampermonkey is the more widely known userscript manager with a large ecosystem and familiar workflow, while Violentmonkey is a common choice for users who prefer open-source tooling and more transparent script management. For most users, the better choice depends on script compatibility, sync needs, permissions, and whether important scripts run correctly after migration. Neither option makes untrusted scripts safe by default, so users should review script sources, check @match and @grant rules, and test scripts on non-sensitive pages before using them on important accounts.',
    comparedItems: ['Tampermonkey', 'Violentmonkey'],
    verdict:
      'Tampermonkey is the practical choice for users who need the widest script library and familiar workflow. Violentmonkey is the practical choice for users who prioritize open-source transparency and lower resource usage. Neither is a universally better option — the right choice depends on your existing scripts, sync setup, and permission requirements.',
    keyDifferences: [
      'Tampermonkey has a larger user base and script library; Violentmonkey supports the same userscript format with a smaller community.',
      'Tampermonkey has a more feature-rich interface with built-in script editor features; Violentmonkey has a more minimal interface.',
      'Tampermonkey stores scripts locally by default and supports cloud sync; Violentmonkey syncs directly with GitHub Gist.',
      'Tampermonkey requires additional permissions for some script features; Violentmonkey requests fewer permissions by default.',
      'Both are available as MV3 extensions in the Chrome Web Store and support userscripts written for the Tampermonkey API.',
    ],
    comparisonTable: [
      { option: 'Tampermonkey', bestFor: 'Users with large script libraries who need a familiar workflow', mv3Support: 'Available (MV3)', cost: 'Free / Donationware', openSource: 'Public repository exists; current extension source availability more limited than Violentmonkey', setupDifficulty: 'Easy', mainTradeoff: 'Larger resource usage but more features' },
      { option: 'Violentmonkey', bestFor: 'Users who prefer open-source tooling and direct GitHub sync', mv3Support: 'Available (MV3)', cost: 'Free / Open source', openSource: 'Fully open source', setupDifficulty: 'Easy', mainTradeoff: 'Minimal interface and fewer built-in features' },
      { option: 'Browser bookmarks', bestFor: 'Very simple scripts that do not require external libraries', mv3Support: 'N/A', cost: 'Free', openSource: 'N/A', setupDifficulty: 'Easy', mainTradeoff: 'Very limited — no GM_* APIs, no persistent config' },
    ],
    decisionGuide: [
      {
        choose: 'Tampermonkey',
        when: 'You already use scripts from GreaseMonkey or the Tampermonkey script library and want the widest compatibility.',
        href: '/alternatives/tampermonkey',
      },
      {
        choose: 'Violentmonkey',
        when: 'You prefer open-source software and want to sync scripts directly through your own GitHub account.',
        href: '/alternatives/violentmonkey',
      },
      {
        choose: 'Browser bookmarks',
        when: 'You only need very simple automation that does not require external libraries, cross-origin requests, or advanced script features.',
      },
    ],
    commonFailedFixes: [
      {
        tried: 'Switching from Tampermonkey to Violentmonkey without checking @grant rules',
        whyItFails:
          'Some scripts use GM_xmlhttpRequest or other GM_* APIs that require specific permissions. Violentmonkey supports these but may need additional configuration.',
        saferAlternative: 'Test scripts in Violentmonkey one at a time before migrating your full library.',
      },
      {
        tried: 'Copying script files directly between extensions',
        whyItFails:
          'Importing individual .user.js files through Violentmonkey may not preserve all settings and @match rules.',
        saferAlternative: 'Use the built-in script import/export feature in both extensions to transfer full scripts with metadata.',
      },
      {
        tried: 'Installing scripts from random CRX mirrors',
        whyItFails:
          'Unofficial downloads of Tampermonkey or Violentmonkey can be modified to include tracking or unwanted behavior.',
        saferAlternative: 'Install both extensions only from the official Chrome Web Store.',
      },
      {
        tried: 'Running both Violentmonkey and Tampermonkey at the same time with overlapping scripts',
        whyItFails:
          'Two userscript managers running simultaneously can cause scripts to run twice on the same pages, leading to duplicate behavior, conflicts, and unexpected results.',
        saferAlternative: 'Use one manager at a time. Export scripts from the old manager before switching, and remove the old manager after confirming the new setup works correctly.',
      },
    ],
    relatedPages: [
      { title: 'Tampermonkey Alternatives', href: '/alternatives/tampermonkey', description: 'Current status, migration options, and alternatives for Tampermonkey users.' },
      { title: 'Violentmonkey Alternatives', href: '/alternatives/violentmonkey', description: 'Current status, migration options, and alternatives for Violentmonkey users.' },
      { title: 'Violentmonkey vs ScriptCat', href: '/comparisons/violentmonkey-vs-scriptcat', description: 'Compare Violentmonkey and ScriptCat for userscript management.' },
      { title: 'ScriptCat vs Tampermonkey', href: '/comparisons/scriptcat-vs-tampermonkey', description: 'Compare ScriptCat and Tampermonkey for userscript management.' },
      { title: 'Best Userscript Managers for Chrome', href: '/guides/best-userscript-managers-for-chrome', description: 'A practical guide to choosing and setting up a userscript manager in Chrome.' },
      { title: 'Chrome Userscript Manager Alternatives', href: '/guides/chrome-userscript-manager-alternatives', description: 'Overview of userscript manager options available for Chrome.' },
    ],
    faqs: [
      {
        question: 'Can I use scripts written for Greasemonkey in Tampermonkey or Violentmonkey?',
        answer:
          'Most Greasemonkey scripts are compatible with both Tampermonkey and Violentmonkey because they use similar APIs. Some scripts that rely on specific Greasemonkey features may need minor adjustments.',
      },
      {
        question: 'Will my existing Tampermonkey scripts work in Violentmonkey?',
        answer:
          'Scripts written for the Tampermonkey API generally work in Violentmonkey. Scripts that use GM_xmlhttpRequest or GM_setValue work with some configuration. Test scripts individually before migrating a large library.',
      },
      {
        question: 'Do I need to grant dangerous permissions to run scripts in Violentmonkey?',
        answer:
          'Violentmonkey requests permissions based on the @match and @grant rules in each script. Review what permissions a script requests before installing it, regardless of which manager you use.',
      },
      {
        question: 'Are Tampermonkey and Violentmonkey available as MV3 extensions in the Chrome Web Store?',
        answer:
          'Both Tampermonkey and Violentmonkey have MV3 versions available in the Chrome Web Store. They continue to work in Chrome 138 and later as long as they are the official Web Store versions.',
      },
      {
        question: 'Which extension uses less memory in Chrome?',
        answer:
          'Violentmonkey generally uses fewer resources because it has a more minimal feature set. Tampermonkey uses more memory but provides a richer built-in editor and dashboard.',
      },
      {
        question: 'Is Violentmonkey fully open source?',
        answer:
          'Yes. Violentmonkey is fully open source under an MIT license, and its source code is available on GitHub. Tampermonkey has a partially open-source model where the core is open source but some components are not.',
      },
      {
        question: 'Is Violentmonkey an open-source alternative to Tampermonkey?',
        answer:
          'Violentmonkey is a fully open-source userscript manager, while Tampermonkey is partially open source. Both support the standard userscript API and work well in Chrome. Violentmonkey may appeal to users who prefer fully open-source tooling.',
      },
      {
        question: 'Should I compare ScriptCat too?',
        answer:
          'Yes. ScriptCat is another userscript manager option worth comparing alongside Tampermonkey and Violentmonkey. It has its own development community and may suit users exploring alternative workflows. See our Violentmonkey vs ScriptCat and ScriptCat vs Tampermonkey comparisons for more detail.',
      },
      {
        question: 'Does Violentmonkey support Manifest V3?',
        answer:
          'Yes. Violentmonkey is available as a Manifest V3 extension in the Chrome Web Store and continues to work in Chrome 138 and later.',
      },
      {
        question: 'Is Tampermonkey or Violentmonkey safer for Chrome users?',
        answer:
          'Both Tampermonkey and Violentmonkey are legitimate, maintained userscript managers available in the official Chrome Web Store. The safety of a userscript manager depends more on the scripts you install than the manager itself. Userscripts can request broad access to web pages, so review script sources, check @match and @grant permissions, and test scripts on non-sensitive pages before using them on important accounts.',
      },
      {
        question: 'Is Violentmonkey better than Tampermonkey?',
        answer:
          'Neither is objectively better for everyone. Violentmonkey is fully open source and generally uses fewer resources. Tampermonkey has a larger ecosystem and more built-in features. The better choice depends on whether you prioritize open-source transparency, ecosystem familiarity, or interface preferences. If your existing scripts work well in one manager, there is no urgent reason to switch.',
      },
      {
        question: 'Is Tampermonkey better than Violentmonkey?',
        answer:
          'Tampermonkey may be a better fit if you rely on a large script library, want the most familiar workflow, or are following tutorials that assume Tampermonkey. Violentmonkey may be a better fit if you prefer fully open-source software, want lower resource usage, or want GitHub Gist sync. Neither is universally safer or better — review the specific scripts you need and test them before committing.',
      },
      {
        question: 'Can I switch from Tampermonkey to Violentmonkey?',
        answer:
          'Yes. Export your scripts from Tampermonkey using the built-in export feature, install Violentmonkey from the Chrome Web Store, and import the scripts. Test each script individually on the sites you need. Some scripts using advanced GM_* APIs may need permission adjustments in Violentmonkey. Keep both installed temporarily while testing, then remove the one you no longer use.',
      },
      {
        question: 'What is the best userscript manager for Chrome?',
        answer:
          'For most users, Tampermonkey is the practical choice because of its large script library and familiar workflow. Violentmonkey is a practical alternative for users who prefer open-source tooling. Both are MV3 extensions available in the Chrome Web Store. The best choice depends on your specific scripts, sync preferences, and permission requirements. See our full comparison at /comparisons/tampermonkey-vs-violentmonkey.',
      },
      {
        question: 'Is Violentmonkey an open-source alternative to Tampermonkey?',
        answer:
          'Violentmonkey is a fully open-source userscript manager, while Tampermonkey has a partially open-source model. Both support the same standard userscript API and work in Chrome. Violentmonkey may appeal to users who prefer fully transparent, auditable code. Tampermonkey offers a larger ecosystem and more built-in features.',
      },
      {
        question: 'What are alternatives to Tampermonkey and Violentmonkey?',
        answer:
          'ScriptCat is another userscript manager option available in the Chrome Web Store. Browser bookmarks or snippets work for very simple automation without any extension. See our ScriptCat comparisons at /comparisons/scriptcat-vs-tampermonkey and /comparisons/violentmonkey-vs-scriptcat, or browse all userscript manager options at /guides/best-userscript-managers-for-chrome.',
      },
    ],
    sources: [
      { title: 'Tampermonkey GitHub Repository', url: 'https://github.com/Tampermonkey/tampermonkey', publisher: 'Tampermonkey', reliability: 'primary', supports: 'Official source for Tampermonkey development' },
      { title: 'Violentmonkey GitHub Repository', url: 'https://github.com/violentmonkey/violentmonkey', publisher: 'Violentmonkey', reliability: 'primary', supports: 'Official source for Violentmonkey development' },
      { title: 'Tampermonkey — Chrome Web Store', url: 'https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo', publisher: 'Chrome Web Store', reliability: 'primary', supports: 'Official Chrome Web Store listing for Tampermonkey' },
      { title: 'Violentmonkey — Chrome Web Store', url: 'https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnfnfdma', publisher: 'Chrome Web Store', reliability: 'primary', supports: 'Official Chrome Web Store listing for Violentmonkey' },
    ],
    lastUpdated: '2026-05-25',
  },
  {
    templateType: 'comparison',
    slug: 'ublock-origin-vs-ublock-origin-lite',
    title: 'uBlock Origin vs uBlock Origin Lite',
    metaTitle: 'uBlock Origin vs uBlock Origin Lite: What Chrome Users Should Know',
    metaDescription:
      'Compare uBlock Origin and uBlock Origin Lite for Chrome users after Manifest V2. Learn what changed, what to use, and what to avoid.',
    quickAnswer:
      'Classic uBlock Origin stopped working in modern Chrome because Chrome disabled Manifest V2 extensions. uBlock Origin Lite is the MV3-compatible option from the same developer, but it is not the same extension and advanced users may notice differences. For many Chrome users, uBlock Origin Lite is the closest practical Chrome option from the same developer. Users who need classic uBlock Origin behavior can consider Firefox, where the original extension may still be available. Avoid installing old CRX copies of classic uBlock Origin from unofficial sources because modified versions can create privacy and security risks.',
    comparedItems: ['uBlock Origin', 'uBlock Origin Lite', 'Firefox with classic uBlock Origin'],
    verdict:
      'Chrome users should use uBlock Origin Lite as the closest practical MV3-compatible option from the same developer. Firefox remains a practical path for users who specifically need classic uBlock Origin behavior. Old CRX copies of classic uBlock Origin from unofficial sources are not recommended, regardless of browser.',
    keyDifferences: [
      'Classic uBlock Origin uses Manifest V2; uBlock Origin Lite uses Manifest V3. Chrome 138+ disabled MV2 extensions for ordinary users.',
      'Chrome does not run classic uBlock Origin; uBlock Origin Lite is the available Chrome Web Store option from the same developer.',
      'uBlock Origin Lite uses a declarative filtering model that differs from classic uBlock Origin\'s more flexible approach.',
      'Advanced uBlock Origin features like dynamic rules and some scriptlet injections have more limited equivalents in uBlock Origin Lite.',
      'Firefox still supports MV2 extensions and may have classic uBlock Origin available, making it a practical option for users who need the original extension behavior.',
    ],
    comparisonTable: [
      { option: 'uBlock Origin (classic)', bestFor: 'Firefox users who need full uBlock Origin behavior', mv3Support: 'No (MV2 only)', cost: 'Free / Open source', openSource: 'Fully open source', setupDifficulty: 'Easy', mainTradeoff: 'Not available in modern Chrome for ordinary users' },
      { option: 'uBlock Origin Lite', bestFor: 'Chrome users who want the closest option from the same developer', mv3Support: 'Yes (MV3)', cost: 'Free / Open source', openSource: 'Fully open source', setupDifficulty: 'Easy', mainTradeoff: 'Fewer advanced controls than classic uBlock Origin' },
      { option: 'Firefox with classic uBlock Origin', bestFor: 'Users who need classic uBlock Origin and are willing to use Firefox', mv3Support: 'Yes (MV2 still supported)', cost: 'Free', openSource: 'Fully open source', setupDifficulty: 'Moderate', mainTradeoff: 'Requires using Firefox instead of Chrome' },
      { option: 'Other Chrome Web Store ad blockers', bestFor: 'Chrome users who need ad blocking without specific uBlock features', mv3Support: 'Yes (MV3)', cost: 'Free / Paid', openSource: 'Varies', setupDifficulty: 'Easy', mainTradeoff: 'Different filtering models and feature sets' },
      { option: 'Old CRX copies of classic uBlock Origin', bestFor: 'Not recommended for any use case', mv3Support: 'No', cost: 'N/A', openSource: 'Unknown', setupDifficulty: 'N/A', mainTradeoff: 'Risky — unofficial sources can modify extension packages' },
    ],
    decisionGuide: [
      {
        choose: 'uBlock Origin Lite',
        when: 'You use Chrome and want the closest MV3-compatible option from the same developer as classic uBlock Origin.',
        href: '/alternatives/ublock-origin',
      },
      {
        choose: 'Firefox with classic uBlock Origin',
        when: 'You need specific uBlock Origin features that are not yet available in uBlock Origin Lite and are willing to use Firefox as your primary browser.',
      },
      {
        choose: 'Other Chrome Web Store ad blockers',
        when: 'Your workflow does not depend on specific uBlock-specific controls and you need reliable ad blocking in Chrome.',
      },
      {
        choose: 'Avoid old CRX copies from unofficial sources',
        when: 'You are considering unofficial downloads of classic uBlock Origin — these are not recommended regardless of browser.',
        href: '/fix/manifest-v2-disabled',
      },
    ],
    commonFailedFixes: [
      {
        tried: 'Installing old CRX copies of classic uBlock Origin from mirror sites',
        whyItFails:
          'Unofficial CRX files may be outdated, modified, or contain unwanted code. Chrome does not support MV2 extensions, so the CRX file will not install properly in modern Chrome regardless.',
        saferAlternative: 'Use uBlock Origin Lite from the Chrome Web Store, or Firefox with classic uBlock Origin.',
      },
      {
        tried: 'Assuming uBlock Origin Lite behaves identically to classic uBlock Origin in all cases',
        whyItFails:
          'uBlock Origin Lite uses a declarative filtering model constrained by MV3. Some advanced dynamic filtering rules and scriptlet injections from classic uBlock Origin are not available or work differently.',
        saferAlternative: 'Review uBlock Origin Lite\'s feature set before migrating, and test filtering behavior on your most-visited sites.',
      },
      {
        tried: 'Keeping an outdated Chrome build to preserve MV2 support',
        whyItFails:
          'Using outdated Chrome versions for MV2 extension support creates security vulnerabilities. Chrome releases security patches that older versions do not receive.',
        saferAlternative: 'Use a modern Chrome build with uBlock Origin Lite or consider Firefox as a secondary browser.',
      },
      {
        tried: 'Installing multiple ad blockers simultaneously in Chrome',
        whyItFails:
          'Multiple MV3 content blockers running at the same time can conflict, cause duplicate filtering, or degrade browser performance without improving blocking results.',
        saferAlternative: 'Use a single well-maintained ad blocker rather than stacking multiple extensions.',
      },
    ],
    relatedPages: [
      { title: 'uBlock Origin Alternatives', href: '/alternatives/ublock-origin', description: 'Current status, migration options, and alternatives for uBlock Origin users.' },
      { title: 'Manifest V2 Disabled in Chrome', href: '/fix/manifest-v2-disabled', description: 'Why MV2 extensions stopped working in Chrome and what to do.' },
      { title: 'Chrome 140 and Manifest V2', href: '/fix/chrome-140-manifest-v2', description: 'What Chrome 140 means for old extension support.' },
      { title: 'All Extension Alternatives', href: '/alternatives', description: 'Browse all extension alternatives on Extension Fixes.' },
    ],
    faqs: [
      {
        question: 'Is uBlock Origin Lite the same as uBlock Origin?',
        answer:
          'No. uBlock Origin Lite is a separate extension developed by the same developer (Raymond Hill) for the Manifest V3 platform. It provides ad blocking functionality, but it does not replicate every feature of classic uBlock Origin. Advanced users who rely on specific dynamic filtering rules may notice differences.',
      },
      {
        question: 'Why did Chrome disable uBlock Origin?',
        answer:
          'Chrome did not disable uBlock Origin specifically. Chrome 138 disabled all Manifest V2 extensions for ordinary users as part of the MV2 deprecation plan. Classic uBlock Origin uses MV2 and stopped working as part of this broader platform change.',
      },
      {
        question: 'Does uBlock Origin still work in Firefox?',
        answer:
          'Yes. Firefox still supports Manifest V2 extensions and classic uBlock Origin may still be available. Users who specifically need classic uBlock Origin features and are willing to use Firefox can continue using it there.',
      },
      {
        question: 'Is uBlock Origin Lite made by the same developer?',
        answer:
          'Yes. uBlock Origin Lite is developed by Raymond Hill, the same developer behind classic uBlock Origin. It is the official MV3-compatible continuation of the project.',
      },
      {
        question: 'Can I install classic uBlock Origin CRX manually?',
        answer:
          'Installing old CRX files from unofficial sources is not recommended. The CRX package uses MV2, which Chrome 138+ does not support. Modified CRX files from mirror sites can contain unwanted code. Use the official Chrome Web Store version of uBlock Origin Lite instead.',
      },
      {
        question: 'What should Chrome users use instead of classic uBlock Origin?',
        answer:
          'uBlock Origin Lite is the closest option from the same developer. Other Chrome Web Store ad blockers like AdGuard AdBlocker and Adblock Plus are also available. The best choice depends on whether you need specific uBlock-specific features.',
      },
      {
        question: 'Is uBlock Origin Lite enough for normal browsing?',
        answer:
          'For most users, yes. uBlock Origin Lite blocks ads and trackers effectively using the MV3 declarative filtering model. If you rely on advanced dynamic rules or specific scriptlet injections, test uBlock Origin Lite on your most-visited sites before switching.',
      },
    ],
    sources: [
      { title: 'Chrome Manifest V2 Deprecation Timeline', url: 'https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline', publisher: 'Google Chrome Developers', reliability: 'primary', supports: 'Chrome MV2 deprecation schedule and affected extensions' },
      { title: 'uBlock Origin Lite — Chrome Web Store', url: 'https://chrome.google.com/webstore/detail/ublock-origin-lite/noablejinnpafcpeeecbfkepgeccekae', publisher: 'Chrome Web Store', reliability: 'primary', supports: 'Official Chrome Web Store listing for uBlock Origin Lite' },
      { title: 'uBlock Origin GitHub Repository', url: 'https://github.com/gorhill/uBlock', publisher: 'Raymond Hill', reliability: 'primary', supports: 'Official source for uBlock Origin and uBlock Origin Lite development' },
      { title: 'uBlock Origin Lite — Firefox Add-ons', url: 'https://addons.mozilla.org/firefox/addon/ublock-origin-lite/', publisher: 'Mozilla', reliability: 'primary', supports: 'uBlock Origin Lite availability for Firefox' },
    ],
    lastUpdated: '2026-05-23',
  },
  {
    templateType: 'comparison',
    slug: 'foxyproxy-vs-switchyomega',
    title: 'FoxyProxy vs SwitchyOmega',
    metaTitle: 'FoxyProxy vs SwitchyOmega: Which Chrome Proxy Manager Should You Use?',
    metaDescription:
      'Compare FoxyProxy, SwitchyOmega, and ZeroOmega for Chrome proxy management. Learn which option fits profiles, rules, and MV3 migration.',
    quickAnswer:
      'FoxyProxy and SwitchyOmega solve similar proxy switching problems but use different workflows. FoxyProxy is a practical option for users who want multiple proxy profiles and pattern-based switching. SwitchyOmega is familiar to many older Chrome users, but users should check whether their setup still works in modern Chrome. ZeroOmega may feel more familiar for users migrating from a SwitchyOmega-style workflow. The right choice depends on whether you prefer FoxyProxy-style profiles, SwitchyOmega-style rules, or a simpler one-proxy setup. Avoid old SwitchyOmega CRX files from unofficial sources because they may be outdated and can create security risks.',
    comparedItems: ['FoxyProxy', 'SwitchyOmega', 'ZeroOmega', 'Chrome system proxy settings'],
    verdict:
      'FoxyProxy is the practical option for users who prefer profile-based proxy switching in modern Chrome. ZeroOmega is the practical option for users migrating from a SwitchyOmega-style workflow. SwitchyOmega users on modern Chrome should verify their current setup works and export settings before making changes. Chrome system proxy settings are sufficient for simple single-proxy use.',
    keyDifferences: [
      'FoxyProxy uses a profile-based switching model with pattern rules; SwitchyOmega uses a rule/profile hybrid that may require migration after Chrome MV2 changes.',
      'FoxyProxy has an MV3 version available in the Chrome Web Store; SwitchyOmega\'s MV3 status requires verification in the current Chrome Web Store listing.',
      'FoxyProxy is familiar to users who already use it; SwitchyOmega users may need to recreate or import rules when switching extensions.',
      'ZeroOmega is a community-maintained MV3-compatible option that imports SwitchyOmega profiles directly, making it useful for migration.',
      'Proxy providers carry risk — using unknown or free proxy servers can expose browsing data regardless of which extension you use.',
    ],
    comparisonTable: [
      { option: 'FoxyProxy', bestFor: 'Multiple proxy profiles and pattern-based switching in modern Chrome', mv3Support: 'Available (Chrome Web Store)', cost: 'Free / Paid tiers', openSource: 'No / proprietary', setupDifficulty: 'Easy', mainTradeoff: 'Requires rule recreation if migrating from SwitchyOmega' },
      { option: 'SwitchyOmega', bestFor: 'Existing users with working configurations on older Chrome', mv3Support: 'Check Chrome Web Store listing', cost: 'Free', openSource: 'Open source', setupDifficulty: 'Moderate', mainTradeoff: 'May need migration or alternative on modern Chrome' },
      { option: 'ZeroOmega', bestFor: 'SwitchyOmega users migrating to MV3-compatible Chrome', mv3Support: 'Yes (MV3)', cost: 'Free / Open source', openSource: 'Fully open source', setupDifficulty: 'Easy', mainTradeoff: 'Community fork — verify source before installing' },
      { option: 'Chrome system proxy', bestFor: 'Simple single-proxy use with no profile switching needed', mv3Support: 'N/A (browser setting)', cost: 'Free', openSource: 'N/A', setupDifficulty: 'Easy', mainTradeoff: 'No profile switching or automatic rules' },
      { option: 'Old CRX files (not recommended)', bestFor: 'Not recommended for any use case', mv3Support: 'No', cost: 'N/A', openSource: 'Unknown', setupDifficulty: 'N/A', mainTradeoff: 'Risky — old packages may be modified or outdated' },
    ],
    decisionGuide: [
      {
        choose: 'FoxyProxy',
        when: 'You want profile-based proxy switching with pattern rules and need a maintained extension in the Chrome Web Store.',
        href: '/alternatives/foxyproxy',
      },
      {
        choose: 'ZeroOmega',
        when: 'You are migrating from SwitchyOmega and want an MV3-compatible option that can import your existing proxy profiles.',
        href: '/alternatives/switchyomega',
      },
      {
        choose: 'Chrome system proxy settings',
        when: 'You only need to set one proxy server and do not need automatic profile switching.',
      },
      {
        choose: 'Avoid old SwitchyOmega CRX files from mirror sites',
        when: 'You are considering unofficial downloads of SwitchyOmega — these are not recommended regardless of purpose.',
        href: '/fix/cannot-install-extension-unsupported-manifest',
      },
    ],
    commonFailedFixes: [
      {
        tried: 'Installing old SwitchyOmega CRX files from mirror sites',
        whyItFails:
          'Old CRX files from unofficial mirrors may be outdated, modified, or incompatible with modern Chrome. Chrome 138+ does not support MV2 packages, so old SwitchyOmega files generally will not install properly.',
        saferAlternative: 'Use ZeroOmega from the Chrome Web Store, which supports direct import of SwitchyOmega profiles.',
      },
      {
        tried: 'Importing old proxy rules without reviewing them',
        whyItFails:
          'Proxy rules may reference servers that are no longer active or secure. Importing unverified rules can redirect traffic through unreliable proxy servers without your knowledge.',
        saferAlternative: 'Review proxy rules individually before importing, and verify that each proxy server is still active and trusted.',
      },
      {
        tried: 'Assuming FoxyProxy and SwitchyOmega behave identically',
        whyItFails:
          'The two extensions use different profile formats and rule syntaxes. Switching between them without adjusting settings can cause proxy rules to behave unexpectedly.',
        saferAlternative: 'Export settings from one extension and test carefully when migrating to another.',
      },
      {
        tried: 'Using unknown free proxy providers',
        whyItFails:
          'Free proxy servers can log browsing activity, inject ads, or modify page content regardless of which extension you use. Proxy extensions only route traffic — they do not make untrusted proxy servers safe.',
        saferAlternative: 'Use proxy servers from providers you trust, and verify that your proxy connection is working as expected.',
      },
      {
        tried: 'Keeping multiple proxy extensions enabled simultaneously',
        whyItFails:
          'Running two proxy extensions at the same time causes conflicts and unpredictable routing. Only one extension should control proxy settings at a time.',
        saferAlternative: 'Use a single proxy extension and disable others when switching proxy managers.',
      },
    ],
    relatedPages: [
      { title: 'FoxyProxy Alternatives', href: '/alternatives/foxyproxy', description: 'Current status, migration options, and alternatives for FoxyProxy users.' },
      { title: 'SwitchyOmega Alternatives', href: '/alternatives/switchyomega', description: 'Current status, migration options, and alternatives for SwitchyOmega users.' },
      { title: 'Cannot Install Extension Unsupported Manifest', href: '/fix/cannot-install-extension-unsupported-manifest', description: 'Why Chrome blocks older extension packages and what to do.' },
      { title: 'All Extension Alternatives', href: '/alternatives', description: 'Browse all extension alternatives on Extension Fixes.' },
    ],
    faqs: [
      {
        question: 'Is FoxyProxy a SwitchyOmega replacement?',
        answer:
          'FoxyProxy is not a direct replacement for SwitchyOmega because they use different profile formats and switching workflows. However, FoxyProxy can serve a similar purpose as a proxy manager in Chrome. For SwitchyOmega users, ZeroOmega may feel more familiar since it is designed to import SwitchyOmega profiles.',
      },
      {
        question: 'Is SwitchyOmega still usable in Chrome?',
        answer:
          'SwitchyOmega users on modern Chrome should check whether their current installation still works. If SwitchyOmega has not been updated to MV3, it may have stopped working after Chrome 138. Export your proxy profiles before making any changes, then look for MV3-compatible options like ZeroOmega or FoxyProxy.',
      },
      {
        question: 'What is ZeroOmega?',
        answer:
          'ZeroOmega is a community-maintained MV3-compatible proxy manager for Chrome. It is designed to import SwitchyOmega profiles directly, making it a practical option for users migrating from SwitchyOmega. Verify the Chrome Web Store listing and GitHub source before installing.',
      },
      {
        question: 'Should I choose FoxyProxy or ZeroOmega?',
        answer:
          'Choose ZeroOmega if you are migrating from SwitchyOmega and want to keep your existing proxy profiles with minimal adjustment. Choose FoxyProxy if you prefer its profile-based workflow and do not need to preserve SwitchyOmega-specific rule formats.',
      },
      {
        question: 'Can proxy extensions see my browsing traffic?',
        answer:
          'Proxy extensions route your browsing traffic through the proxy server you configure. The proxy server operator can see your requests unless the connection uses HTTPS. A proxy extension can see and modify extension configuration but does not automatically see your browsing data — that depends on the proxy server you use.',
      },
      {
        question: 'Is it safe to install old proxy extension packages?',
        answer:
          'Old CRX files from unofficial sources for SwitchyOmega or other proxy managers are not recommended. These packages may be outdated, modified, or incompatible with modern Chrome. Use the official Chrome Web Store listings and verify the developer identity before installing any proxy extension.',
      },
      {
        question: 'What is the simplest Chrome proxy option?',
        answer:
          'Chrome system proxy settings (Settings > System > Open your computer\'s proxy settings) are sufficient for routing all browser traffic through a single proxy server. No extension is needed for simple use cases. Proxy extensions are useful when you need multiple profiles, automatic switching based on URL patterns, or quick toggling between proxy configurations.',
      },
    ],
    sources: [
      { title: 'FoxyProxy — Chrome Web Store', url: 'https://chrome.google.com/webstore/detail/foxyproxy-standard/gchnhpkpgcajjkmemjehcnbjnebppjpn', publisher: 'Chrome Web Store', reliability: 'primary', supports: 'Official Chrome Web Store listing for FoxyProxy Standard' },
      { title: 'ZeroOmega — Chrome Web Store', url: 'https://chromewebstore.google.com/detail/zeroomega-proxy-manager/hajegbgogmagjkepgbpgpjdelkiakhb', publisher: 'Chrome Web Store', reliability: 'primary', supports: 'Official Chrome Web Store listing for ZeroOmega' },
      { title: 'ZeroOmega GitHub Repository', url: 'https://github.com/flighty-dev/ZeroOmega', publisher: 'flighty-dev', reliability: 'primary', supports: 'Official source for ZeroOmega development' },
      { title: 'SwitchyOmega GitHub Repository', url: 'https://github.com/FelisCatus/SwitchyOmega', publisher: 'FelisCatus', reliability: 'primary', supports: 'Original SwitchyOmega source for reference' },
    ],
    lastUpdated: '2026-05-23',
  },
  {
    templateType: 'comparison',
    slug: 'scriptcat-vs-tampermonkey',
    title: 'ScriptCat vs Tampermonkey',
    metaTitle: 'ScriptCat vs Tampermonkey: Which Userscript Manager Should You Use?',
    metaDescription:
      'Compare ScriptCat and Tampermonkey for userscript management. Learn the workflow differences, migration notes, and safer script testing tips.',
    quickAnswer:
      'ScriptCat and Tampermonkey are both userscript manager options, but they may appeal to different users depending on workflow, script compatibility, browser support, and how much control the user wants over script execution. Tampermonkey is widely known and has a large ecosystem, while ScriptCat may be considered by users exploring alternative userscript workflows. Neither option makes unknown scripts safe by default. Users should review script sources, inspect @match and @grant permissions, and test scripts on non-sensitive pages before using them on important accounts.',
    comparedItems: ['ScriptCat', 'Tampermonkey', 'Violentmonkey'],
    verdict:
      'Balanced. Tampermonkey is the practical choice for users who need the widest script library and familiar workflow. ScriptCat may suit users exploring alternative userscript manager workflows. Neither is a universally better option — the right choice depends on your existing scripts, compatibility needs, and interface preferences.',
    keyDifferences: [
      'Userscript workflow — Tampermonkey has an established workflow with a large user base; ScriptCat offers a different interface design.',
      'Script compatibility — Both support similar userscript formats, but testing is recommended when switching managers.',
      'Browser support — Tampermonkey has wider browser availability; ScriptCat support depends on its current development status.',
      'Permission review — Both managers require users to review @match and @grant rules in installed scripts regardless of brand.',
      'Migration effort — Migrating scripts between managers should be done carefully, testing each script individually.',
    ],
    comparisonTable: [
      { option: 'Tampermonkey', bestFor: 'Users who need broad userscript compatibility and a familiar workflow', mv3Support: 'Available (MV3)', cost: 'Free / Donationware', openSource: 'Partial (core is open source)', setupDifficulty: 'Easy', mainTradeoff: 'Larger resource usage but more features and a wider script library' },
      { option: 'ScriptCat', bestFor: 'Users exploring alternative userscript manager workflows', mv3Support: 'Check Chrome Web Store listing', cost: 'Free', openSource: 'Check project source', setupDifficulty: 'Easy', mainTradeoff: 'Smaller ecosystem; testing recommended when switching from Tampermonkey' },
      { option: 'Violentmonkey', bestFor: 'Users who prefer open-source tooling and GitHub Gist sync', mv3Support: 'Available (MV3)', cost: 'Free / Open source', openSource: 'Fully open source', setupDifficulty: 'Easy', mainTradeoff: 'Minimal interface and fewer built-in features' },
      { option: 'Browser bookmarks', bestFor: 'Very simple scripts that do not require external libraries', mv3Support: 'N/A', cost: 'Free', openSource: 'N/A', setupDifficulty: 'Easy', mainTradeoff: 'Very limited — no GM_* APIs, no persistent config' },
      { option: 'Random script mirrors', bestFor: 'Not recommended for any use case', mv3Support: 'Unknown', cost: 'Unknown', openSource: 'Unknown', setupDifficulty: 'N/A', mainTradeoff: 'Security, permission, and policy risk' },
    ],
    decisionGuide: [
      {
        choose: 'Tampermonkey',
        when: 'You need broad userscript compatibility, a familiar workflow, and the widest available script library.',
        href: '/alternatives/tampermonkey',
      },
      {
        choose: 'ScriptCat',
        when: 'You are exploring alternative userscript manager workflows and want to test a different option.',
      },
      {
        choose: 'Violentmonkey',
        when: 'You prefer open-source software and want to sync scripts directly through your own GitHub account.',
        href: '/alternatives/violentmonkey',
      },
      {
        choose: 'Avoid unknown script mirrors',
        when: 'You are considering unofficial downloads of scripts or managers from unknown sources.',
      },
    ],
    commonFailedFixes: [
      {
        tried: 'Import every script at once without review',
        whyItFails: 'Migrating a large batch of scripts without individual testing means you cannot identify which script causes problems if something goes wrong.',
        saferAlternative: 'Test scripts one at a time after switching managers to verify expected behavior.',
      },
      {
        tried: 'Assume all userscript managers behave identically',
        whyItFails: 'Different managers handle script execution, permissions, and sync differently. Some scripts may behave unexpectedly after switching managers.',
        saferAlternative: 'Review @match and @grant rules for each script, and test on non-sensitive pages first.',
      },
      {
        tried: 'Ignore @match and @grant permissions',
        whyItFails: 'These rules control where scripts run and what access they have. Ignoring them means you do not know which sites your scripts are active on or what data they can access.',
        saferAlternative: 'Review permissions for each script before and after switching managers.',
      },
      {
        tried: 'Install scripts from unknown mirrors',
        whyItFails: 'Scripts from unknown sources can be modified to include tracking, data collection, or unwanted behavior. Userscripts run with significant browser access.',
        saferAlternative: 'Only install scripts from known repositories like Greasy Fork or OpenUserJS, or scripts whose code you have personally reviewed.',
      },
      {
        tried: 'Keep multiple managers enabled with overlapping scripts',
        whyItFails: 'Running two userscript managers simultaneously causes scripts to run twice on the same pages, leading to conflicts, duplicate behavior, and unexpected results.',
        saferAlternative: 'Use one manager at a time. Export scripts from the old manager before switching, and remove the old manager after confirming the new setup works.',
      },
    ],
    faqs: [
      {
        question: 'Is ScriptCat a Tampermonkey alternative?',
        answer:
          'Yes. ScriptCat is another userscript manager option that Chrome users may consider. It is a separate project from Tampermonkey with its own development community. Users who are exploring alternative workflows may find ScriptCat worth testing alongside Tampermonkey and Violentmonkey.',
      },
      {
        question: 'Is ScriptCat better than Tampermonkey?',
        answer:
          'Neither is objectively better. Tampermonkey has a larger established ecosystem and wider community. ScriptCat may suit users who want to explore a different workflow. The right choice depends on your existing script library, compatibility needs, and interface preferences. Test important scripts before committing to a switch.',
      },
      {
        question: 'Can I migrate scripts from Tampermonkey to ScriptCat?',
        answer:
          'Migrating scripts between userscript managers is possible but should be done carefully. Export your scripts from Tampermonkey, install ScriptCat from the official Chrome Web Store, and import scripts one at a time. Review @match and @grant permissions for each imported script, and test on non-sensitive pages before enabling them broadly.',
      },
      {
        question: 'Are userscript managers safe?',
        answer:
          'Userscript managers installed from the official Chrome Web Store are generally safe. However, userscript managers can run powerful code on websites you visit, so the manager brand matters less than script trust. Always review script sources, inspect @match and @grant permissions, and test scripts on non-sensitive pages before using them on important accounts.',
      },
      {
        question: 'Can userscripts read pages I visit?',
        answer:
          'Yes. Userscripts run on the web pages where they are active and can read page content, interact with page elements, and make network requests. This is their intended purpose. Before installing any userscript, review what permissions it requests, where it will run, and whether those permissions match its stated functionality.',
      },
      {
        question: 'Should I use ScriptCat, Tampermonkey, or Violentmonkey?',
        answer:
          'Tampermonkey is the practical choice for users who need the widest script library and familiar workflow. Violentmonkey is the practical choice for users who prefer open-source tooling. ScriptCat may be worth testing for users exploring alternative workflows. Avoid unknown script mirrors regardless of which manager you use.',
      },
      {
        question: 'What is the recommended way to test userscripts?',
        answer:
          'Review the script code before installing it — look at what URLs it will run on and what permissions it requests. Install scripts one at a time and test on a non-critical site first. If a script requests permissions that seem excessive for its stated purpose, do not install it. After switching managers, re-review scripts since behavior can differ.',
      },
      {
        question: 'Should I also compare ScriptCat with Violentmonkey?',
        answer:
          'Yes. Comparing ScriptCat, Violentmonkey, and Tampermonkey together gives a fuller picture of available userscript manager options. Our Violentmonkey vs ScriptCat comparison covers the differences between those two options specifically.',
      },
      {
        question: 'Is ScriptCat better than Violentmonkey?',
        answer:
          'Neither is objectively better. Violentmonkey has a longer track record and a well-established open-source community. ScriptCat may suit users who want to test a different workflow. Test important scripts before committing to either option.',
      },
      {
        question: 'Is ScriptCat a userscript manager alternative for Chrome?',
        answer:
          'Yes. ScriptCat is a userscript manager option available for Chrome as a Manifest V3 extension. It supports the standard userscript API and can be used alongside or instead of Tampermonkey and Violentmonkey.',
      },
    ],
    relatedPages: [
      { title: 'Tampermonkey Alternatives', href: '/alternatives/tampermonkey', description: 'Current status, migration options, and alternatives for Tampermonkey users.' },
      { title: 'Violentmonkey Alternatives', href: '/alternatives/violentmonkey', description: 'Current status, migration options, and alternatives for Violentmonkey users.' },
      { title: 'Violentmonkey vs ScriptCat', href: '/comparisons/violentmonkey-vs-scriptcat', description: 'Compare Violentmonkey and ScriptCat for userscript management.' },
      { title: 'Tampermonkey vs Violentmonkey', href: '/comparisons/tampermonkey-vs-violentmonkey', description: 'Compare Tampermonkey and Violentmonkey for Chrome userscript management.' },
      { title: 'Best Userscript Managers for Chrome', href: '/guides/best-userscript-managers-for-chrome', description: 'A practical guide to choosing and setting up a userscript manager in Chrome.' },
    ],
    sources: [
      { title: 'ScriptCat GitHub Repository', url: 'https://github.com/scriptcat-org/scriptcat', publisher: 'ScriptCat', reliability: 'primary', supports: 'Official source for ScriptCat development and availability' },
      { title: 'Tampermonkey GitHub Repository', url: 'https://github.com/Tampermonkey/tampermonkey', publisher: 'Tampermonkey', reliability: 'primary', supports: 'Official source for Tampermonkey development' },
      { title: 'Violentmonkey GitHub Repository', url: 'https://github.com/violentmonkey/violentmonkey', publisher: 'Violentmonkey', reliability: 'primary', supports: 'Official source for Violentmonkey development' },
      { title: 'Chrome Extension Permissions Overview', url: 'https://developer.chrome.com/docs/extensions/mv3/permissions-overview/', publisher: 'Google Chrome Developers', reliability: 'secondary', supports: 'Understanding userscript permission implications' },
    ],
    lastUpdated: '2026-05-28',
  },
  {
    templateType: 'comparison',
    slug: 'violentmonkey-vs-scriptcat',
    title: 'Violentmonkey vs ScriptCat',
    metaTitle: 'Violentmonkey vs ScriptCat: Which Userscript Manager Should You Use?',
    metaDescription:
      'Compare Violentmonkey and ScriptCat for userscript management. Learn workflow differences, MV3 notes, migration tips, and safer script testing practices.',
    quickAnswer:
      'Violentmonkey and ScriptCat are both userscript manager options, but they may fit different users depending on browser support, script compatibility, permissions, and workflow preferences. Violentmonkey is commonly chosen by users who prefer open-source userscript tooling and a familiar lightweight workflow. ScriptCat may appeal to users testing alternative userscript manager behavior or more advanced script workflows. Neither option makes unknown scripts safe by default. Users should review script sources, inspect @match and @grant rules, and test important scripts on non-sensitive pages before switching managers.',
    comparedItems: ['Violentmonkey', 'ScriptCat', 'Tampermonkey (related)'],
    verdict:
      'Violentmonkey is a practical choice for users who prefer open-source userscript tooling and a familiar lightweight workflow. ScriptCat is a practical choice for users who want to test alternative userscript manager behavior or explore a different development community. Neither is universally better — the right choice depends on your existing script library, browser version, and workflow preferences. Test important scripts before committing to either option.',
    keyDifferences: [
      'Violentmonkey has a longer track record and a well-established open-source community; ScriptCat is a more recently active project.',
      'Both support the standard userscript API, but script compatibility may vary depending on specific @grant and @match rules.',
      'Violentmonkey is widely available in the Chrome Web Store as an MV3 extension; ScriptCat availability varies across browser versions.',
      'Both require users to review script permissions — the specific @match domains and GM_* API usage matters more than the manager brand.',
      'Migration effort between them is moderate — scripts are generally compatible, but testing each script individually is recommended.',
    ],
    comparisonTable: [
      { option: 'Violentmonkey', bestFor: 'Users who prefer open-source userscript tooling and a familiar lightweight workflow', mv3Support: 'Available (MV3)', cost: 'Free / Open source', openSource: 'Fully open source', setupDifficulty: 'Easy', mainTradeoff: 'Minimal interface, smaller community than Tampermonkey' },
      { option: 'ScriptCat', bestFor: 'Users testing alternative userscript manager workflows or advanced script behavior', mv3Support: 'Available (MV3)', cost: 'Free', openSource: 'Open source', setupDifficulty: 'Easy', mainTradeoff: 'Different community and update cadence than Violentmonkey' },
      { option: 'Tampermonkey (related)', bestFor: 'Users who need the widest script library and most established ecosystem', mv3Support: 'Available (MV3)', cost: 'Free / Donationware', openSource: 'Partial', setupDifficulty: 'Easy', mainTradeoff: 'Larger resource usage but more built-in features' },
    ],
    decisionGuide: [
      {
        choose: 'Violentmonkey',
        when: 'You prefer open-source userscript tooling, a lightweight interface, and a familiar workflow.',
        href: '/alternatives/violentmonkey',
      },
      {
        choose: 'ScriptCat',
        when: 'You are testing alternative userscript manager behavior or want to explore a different script workflow community.',
        href: '/comparisons/scriptcat-vs-tampermonkey',
      },
      {
        choose: 'Tampermonkey',
        when: 'You need broad userscript compatibility, the largest established ecosystem, and a familiar interface.',
        href: '/comparisons/scriptcat-vs-tampermonkey',
      },
      {
        choose: 'Avoid unknown scripts',
        when: 'You encounter scripts from random mirrors or sources you cannot verify. Script trust matters more than the manager brand.',
      },
    ],
    commonFailedFixes: [
      {
        tried: 'Import every script at once without reviewing @match and @grant rules',
        whyItFails: 'Scripts may request permissions or access domains that behave differently under a different manager. Each script may need individual review.',
        saferAlternative: 'Import and test scripts one at a time on non-sensitive pages before enabling them site-wide.',
      },
      {
        tried: 'Assume Violentmonkey and ScriptCat behave identically for all scripts',
        whyItFails: 'Both support the standard userscript API but implementation details and permission handling may differ. Some scripts with advanced GM_* calls may not work the same way.',
        saferAlternative: 'Check the specific script documentation and test on a non-sensitive page after switching managers.',
      },
      {
        tried: 'Ignore @match and @grant permissions in scripts',
        whyItFails: 'Permissions define what a script can access. Reviewing them is the most important safety step regardless of which manager you use.',
        saferAlternative: 'Read the @match domains and @grant rules in each script before installing, especially for scripts from third-party sources.',
      },
      {
        tried: 'Install scripts from unknown mirrors or third-party download sites',
        whyItFails: 'Scripts bundled with unwanted code from unofficial sources can read page content and track browsing. Use the official userscript registry or the developer\'s own site.',
        saferAlternative: 'Install scripts from the original developer or known userscript library. Verify the source before installing.',
      },
      {
        tried: 'Keep multiple managers enabled with overlapping scripts',
        whyItFails: 'Running Violentmonkey, ScriptCat, and Tampermonkey at the same time can cause scripts to run twice, create conflicts, or behave unexpectedly.',
        saferAlternative: 'Choose one primary manager and import scripts carefully into that one.',
      },
    ],
    relatedPages: [
      { title: 'Violentmonkey Alternatives', href: '/alternatives/violentmonkey', description: 'Current status, migration options, and alternatives for Violentmonkey users.' },
      { title: 'ScriptCat vs Tampermonkey', href: '/comparisons/scriptcat-vs-tampermonkey', description: 'Compare ScriptCat and Tampermonkey for userscript management.' },
      { title: 'Tampermonkey vs Violentmonkey', href: '/comparisons/tampermonkey-vs-violentmonkey', description: 'Compare Tampermonkey and Violentmonkey for Chrome userscript management.' },
      { title: 'Best Userscript Managers for Chrome', href: '/guides/best-userscript-managers-for-chrome', description: 'A practical guide to choosing and setting up a userscript manager in Chrome.' },
      { title: 'Chrome Userscript Manager Alternatives', href: '/guides/chrome-userscript-manager-alternatives', description: 'Overview of userscript manager options available for Chrome.' },
    ],
    faqs: [
      {
        question: 'Is ScriptCat a Violentmonkey alternative?',
        answer:
          'Yes. ScriptCat is another userscript manager option available for Chrome. It supports the standard userscript API and may appeal to users exploring alternative workflows. Violentmonkey and ScriptCat have different development communities and update schedules.',
      },
      {
        question: 'Is Violentmonkey better than ScriptCat?',
        answer:
          'Neither is objectively better. Violentmonkey has a longer track record and is widely used by users who prefer its minimal interface and open-source workflow. ScriptCat may suit users who want to test a different community or workflow. Test important scripts before committing to either option.',
      },
      {
        question: 'Does Violentmonkey support Manifest V3?',
        answer:
          'Yes. Violentmonkey is available as a Manifest V3 extension in the Chrome Web Store and continues to work in Chrome 138 and later versions.',
      },
      {
        question: 'Can I migrate scripts from Violentmonkey to ScriptCat?',
        answer:
          'Yes. Scripts written for the standard userscript API generally work in both managers. Export scripts from Violentmonkey and import them into ScriptCat using the built-in import feature. Test scripts individually after migration.',
      },
      {
        question: 'Are userscript managers safe?',
        answer:
          'Userscript managers run code on websites you visit, so safety depends on the scripts you install rather than the manager itself. Both Violentmonkey and ScriptCat can run scripts that have broad access to page content. Only install scripts from sources you trust, and review @match and @grant permissions before installing.',
      },
      {
        question: 'Can userscripts read pages I visit?',
        answer:
          'Yes. Userscripts can access and modify the content of pages they are permitted to run on, based on their @match rules. This is why reviewing script sources and their declared permissions before installing is important.',
      },
      {
        question: 'Should I compare Violentmonkey, ScriptCat, and Tampermonkey before switching?',
        answer:
          'Yes. All three are active userscript manager options for Chrome. Comparing them helps you choose based on script compatibility, open-source preferences, ecosystem size, and interface familiarity. Violentmonkey and ScriptCat are both fully open source, while Tampermonkey has a larger established ecosystem.',
      },
    ],
    sources: [
      { title: 'Violentmonkey Official Site', url: 'https://violentmonkey.top/', publisher: 'Violentmonkey', reliability: 'primary', supports: 'Official Violentmonkey site and download information' },
      { title: 'Violentmonkey GitHub Repository', url: 'https://github.com/violentmonkey/violentmonkey', publisher: 'Violentmonkey', reliability: 'primary', supports: 'Official source for Violentmonkey development and MV3 status' },
      { title: 'ScriptCat GitHub Repository', url: 'https://github.com/scriptcat-org/scriptcat', publisher: 'ScriptCat', reliability: 'primary', supports: 'Official source for ScriptCat development and availability' },
      { title: 'Chrome Extension Permissions Overview', url: 'https://developer.chrome.com/docs/extensions/mv3/permissions-overview/', publisher: 'Google Chrome Developers', reliability: 'secondary', supports: 'Understanding userscript permission implications' },
    ],
    lastUpdated: '2026-05-28',
  },
];

export function getComparisonBySlug(slug: string): ComparisonRecord | undefined {
  return comparisons.find((c) => c.slug === slug);
}
