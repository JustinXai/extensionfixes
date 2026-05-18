import type { ExtensionRecord } from '@/lib/types';

export const extensions: ExtensionRecord[] = [
  {
    slug: 'switchyomega',
    name: 'Proxy SwitchyOmega',
    aliases: [
      'SwitchyOmega',
      'Proxy SwitchyOmega',
      'Switchy Omega',
      'ZeroOmega migration',
      'proxy switcher',
    ],
    category: 'Proxy Manager',
    summary:
      'A popular proxy switcher for Chrome that helps manage and switch between multiple proxy configurations.',
    status: 'affected_by_mv2',
    riskLevel: 'medium',
    oldExtensionIds: ['padekgcemlokbadohgkifijomclgjgif'],
    issueSummary:
      'The original Proxy SwitchyOmega path is affected by Chrome Manifest V2 deprecation and no longer works in Chrome 138 and later.',
    shortAnswer:
      'Proxy SwitchyOmega stopped working in Chrome because Chrome 138 fully disabled Manifest V2 extensions. The closest migration path is ZeroOmega, a community fork designed for Manifest V3. FoxyProxy is another established option with advanced proxy management features. Both are available on the Chrome Web Store.',
    whatHappened: [
      'Chrome 138 disabled all Manifest V2 extensions for all users by default.',
      'Proxy SwitchyOmega was built on Manifest V2 and is no longer compatible with modern Chrome.',
      'ZeroOmega emerged as a community fork specifically designed for MV3 migration.',
      'FoxyProxy has maintained an MV3-compatible version for Chrome users.',
    ],
    migrationSteps: [
      'Export your SwitchyOmega profile backup if the extension is still partially accessible.',
      'Install ZeroOmega or FoxyProxy from the Chrome Web Store.',
      'Review proxy profile settings and recreate them in your chosen alternative.',
      'Test each proxy profile individually before enabling auto-switch rules.',
      'Verify that proxy authentication and SSL certificates work correctly.',
      'Gradually remove the old SwitchyOmega extension once satisfied with the new setup.',
    ],
    safetyNotes: [
      'Only install proxy managers from the official Chrome Web Store.',
      'Review permissions carefully: legitimate proxy extensions need access to modify network requests.',
      'Be cautious with extensions requiring excessive permissions beyond proxy functionality.',
      'Verify the developer identity matches expectations before installing.',
    ],
    alternatives: [
      {
        name: 'ZeroOmega',
        slug: 'zeroomega',
        bestFor: 'Users seeking a direct SwitchyOmega replacement with familiar interface',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/proxy-switchyomega-3-zero/pfnededegaaopdmhkdmcofjmoldfiped',
        githubUrl: 'https://github.com/zero-peak/ZeroOmega',
        pros: [
          'Direct fork of SwitchyOmega codebase',
          'Manifest V3 compatible',
          'Similar interface to original SwitchyOmega',
          'Open source for community review',
        ],
        cons: [
          'Newer project with limited production testing',
          'Some advanced SwitchyOmega features may not yet be available',
        ],
        note: 'ZeroOmega is maintained by the community and designed specifically as a SwitchyOmega successor for MV3.',
      },
      {
        name: 'FoxyProxy Standard',
        slug: 'foxyproxy',
        bestFor: 'Users needing advanced proxy features and multi-profile management',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/foxyproxy/gcknhkkoolaabfmlnjonogaaifnjlfnp',
        pros: [
          'Long-established proxy management tool',
          'Supports multiple proxy profiles with pattern matching',
          'Available for multiple browsers',
        ],
        cons: [
          'Interface differs from SwitchyOmega',
          'Some advanced features require premium subscription',
        ],
        note: 'FoxyProxy has been a popular proxy manager for years and offers MV3-compatible versions.',
      },
      {
        name: 'Proxy Switcher and Manager',
        slug: 'proxy-switcher-manager',
        bestFor: 'Users wanting straightforward proxy switching without complexity',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/proxy-switcher-and-manager/hmidjncakjnlkjkicopkoobegggfmhdp',
        pros: ['Simple and intuitive interface', 'Multiple proxy profiles', 'Quick toggle between proxies'],
        cons: ['May lack advanced auto-switch capabilities', 'Limited pattern-based routing'],
        note: 'A simpler alternative for users who need basic proxy switching functionality.',
      },
    ],
    faqs: [
      {
        question: 'Why did Proxy SwitchyOmega stop working in Chrome?',
        answer:
          'Proxy SwitchyOmega was built on Chrome Manifest V2. Chrome 138 fully disabled all Manifest V2 extensions by default, which means SwitchyOmega can no longer function in current Chrome versions.',
      },
      {
        question: 'Is ZeroOmega safe to use?',
        answer:
          'ZeroOmega is a community-maintained open-source fork. As with any extension, review its permissions and consider its open-source nature when making your decision. The project can be audited on GitHub.',
      },
      {
        question: 'Can I transfer my SwitchyOmega profiles to ZeroOmega?',
        answer:
          'ZeroOmega is designed to be compatible with SwitchyOmega configurations. If you have an exported backup of your SwitchyOmega profiles, you may be able to import them into ZeroOmega.',
      },
      {
        question: 'What if I need the exact features from SwitchyOmega?',
        answer:
          'If you rely on specific SwitchyOmega features, try multiple alternatives to find the best fit. Some features may require adjusting your workflow or using desktop proxy tools instead.',
      },
      {
        question: 'Will my proxy authentication settings transfer?',
        answer:
          'Most alternatives support proxy authentication, but you may need to re-enter credentials. Always verify your authentication settings work correctly after migration.',
      },
    ],
    sources: [
      {
        title: 'Chrome Manifest V2 Deprecation Timeline',
        url: 'https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline',
        publisher: 'Google Chrome Developers',
        sourceType: 'chrome-developers',
        reliability: 'primary',
        supports: 'Why SwitchyOmega and other MV2 extensions no longer work in Chrome 138 and later',
      },
      {
        title: 'ZeroOmega Chrome Web Store Listing',
        url: 'https://chromewebstore.google.com/detail/proxy-switchyomega-3-zero/pfnededegaaopdmhkdmcofjmoldfiped',
        publisher: 'Chrome Web Store',
        sourceType: 'chrome-web-store',
        reliability: 'primary',
        supports: 'ZeroOmega MV3 availability, listing status, and publisher identity',
      },
      {
        title: 'ZeroOmega GitHub Repository',
        url: 'https://github.com/zero-peak/ZeroOmega',
        publisher: 'ZeroOmega Contributors',
        sourceType: 'github',
        reliability: 'secondary',
        supports: 'ZeroOmega open-source status, development activity, and SwitchyOmega fork lineage',
      },
      {
        title: 'FoxyProxy Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/foxyproxy/gcknhkkoolaabfmlnjonogaaifnjlfnp',
        publisher: 'Chrome Web Store',
        sourceType: 'chrome-web-store',
        reliability: 'primary',
        supports: 'FoxyProxy MV3 availability, listing status, and publisher identity',
      },
    ],
    lastUpdated: '2026-05-13',
  },
  {
    slug: 'ublock-origin',
    name: 'uBlock Origin',
    aliases: [
      'uBlock',
      'uBO',
      'uBlock Origin Chrome',
      'uBlock no longer supported',
      'uBlock Origin Lite',
    ],
    category: 'Content Blocker',
    summary:
      'A popular and efficient content blocker for Chrome that helps remove ads and trackers.',
    status: 'affected_by_mv2',
    riskLevel: 'low',
    issueSummary:
      'The classic uBlock Origin extension is affected by Chrome Manifest V2 deprecation and stopped working in Chrome 138 and later.',
    shortAnswer:
      'Classic uBlock Origin stopped working in Chrome 138 because Chrome disabled Manifest V2 extensions. The MV3-compatible version by the same author is uBlock Origin Lite. For full feature parity, Firefox with classic uBlock Origin remains an option. Other MV3-compatible ad blockers like AdGuard and Adblock Plus are also available.',
    whatHappened: [
      'Chrome 138 disabled all Manifest V2 extensions, including classic uBlock Origin.',
      'uBlock Origin Lite was released by the same developer as an MV3-compatible version.',
      'The author noted that MV3 limitations prevent a feature-identical replacement.',
      'Firefox continues to support Manifest V2, allowing classic uBlock Origin to work there.',
    ],
    migrationSteps: [
      'Install uBlock Origin Lite from the Chrome Web Store.',
      'Review default filter lists and adjust to your preferences.',
      'Test commonly visited websites for proper ad blocking.',
      'Configure dynamic filtering rules if you used custom rules in classic uBlock Origin.',
      'Consider Firefox if you need full classic uBlock Origin functionality.',
    ],
    safetyNotes: [
      'uBlock Origin Lite is the MV3 version from the original uBlock Origin developer.',
      'Only download from the official Chrome Web Store or uBlock Origin GitHub.',
      'uBlock Origin Lite has limited permissions compared to classic uBlock Origin.',
      'Review extension permissions to ensure they match the stated functionality.',
    ],
    alternatives: [
      {
        name: 'uBlock Origin Lite',
        slug: 'ublock-origin-lite',
        bestFor: 'Users wanting the MV3 continuation of uBlock Origin by the same developer',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/ublock-origin-lite/ddkjiahejlhfcafbddmgiahcphecmpfh',
        pros: [
          'MV3 version from the same author as uBlock Origin',
          'Developed by the same author',
          'Privacy-focused with efficient blocking',
        ],
        cons: [
          'Some features differ from classic uBlock Origin',
          'Less granular control in certain areas due to MV3 limitations',
        ],
        note: 'uBlock Origin Lite is the MV3 version by the same developer. The developer has been transparent about differences from classic uBlock Origin.',
      },
      {
        name: 'AdGuard AdBlocker',
        slug: 'adguard-adblocker',
        bestFor: 'Users looking for comprehensive ad blocking with additional privacy features',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg',
        pros: [
          'Full-featured ad blocking',
          'Includes privacy protection features',
          'Regular updates and maintenance',
        ],
        cons: [
          'May use more system resources than lightweight blockers',
          'Some advanced features require premium subscription',
        ],
        note: 'AdGuard is a well-established company with a strong reputation in ad blocking.',
      },
      {
        name: 'Adblock Plus',
        slug: 'adblock-plus',
        bestFor: 'Users familiar with Adblock Plus or wanting customizable filter lists',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/adblock-plus-for-chrome/oeeoomkjfndjpoaohpgpenghboeimhbl',
        pros: [
          'Long-established reputation',
          'Highly customizable filter lists',
          'Easy to use with intuitive interface',
        ],
        cons: [
          'Acceptable Ads enabled by default (can be disabled)',
          'May be less efficient than uBlock Origin variants',
        ],
        note: 'Adblock Plus is one of the oldest ad blockers and works well for basic ad blocking needs.',
      },
      {
        name: 'Firefox with uBlock Origin',
        slug: 'firefox-ublock-origin',
        bestFor: 'Users needing full classic uBlock Origin functionality',
        status: 'active_mv3',
        url: 'https://www.mozilla.org/firefox/',
        pros: [
          'Classic uBlock Origin works fully in Firefox',
          'Full feature parity with original uBlock Origin',
          'Firefox supports Manifest V2 extensions',
        ],
        cons: [
          'Requires switching browsers',
          'Different browser ecosystem and workflow',
        ],
        note: 'Firefox continues to support Manifest V2, making it viable for users who need classic uBlock Origin features.',
      },
    ],
    faqs: [
      {
        question: 'What is the difference between uBlock Origin and uBlock Origin Lite?',
        answer:
          'uBlock Origin Lite is an MV3-compatible rewrite of uBlock Origin. Due to Chrome MV3 limitations, some features like dynamic filtering have reduced capabilities. However, the Lite version still provides strong ad blocking and is developed by the same author.',
      },
      {
        question: 'Will my filter lists and settings transfer to uBlock Origin Lite?',
        answer:
          'Some settings may transfer, but you should review your filter list configuration in uBlock Origin Lite. The import/export functionality works differently between versions.',
      },
      {
        question: 'Is Firefox a good alternative for uBlock Origin users?',
        answer:
          'Firefox allows the classic uBlock Origin to function fully, making it a practical choice if you need specific features not available in uBlock Origin Lite.',
      },
      {
        question: 'Does uBlock Origin Lite block ads as effectively as classic uBlock Origin?',
        answer:
          'uBlock Origin Lite still provides strong ad blocking, but efficiency varies by website. The author has noted that some advanced filtering capabilities are limited in MV3.',
      },
      {
        question: 'Why did the developer create a separate Lite version instead of updating uBlock Origin?',
        answer:
          'MV3 has fundamental differences from MV2 that prevent a direct update. The developer created uBlock Origin Lite as the best possible MV3 implementation while being transparent about the limitations.',
      },
      {
        question: 'Should I download a uBlock Origin CRX file for Chrome?',
        answer:
          'Not recommended. Installing random CRX files from search results can expose you to modified packages, stale code, or unexpected permissions. Use the official Chrome Web Store listing for uBlock Origin Lite, or visit the official uBlock Origin GitHub page to verify current options. Prefer extensions from verified sources to avoid supply-chain risks.',
      },
      {
        question: 'Why does Chrome say uBlock Origin is no longer supported?',
        answer:
          'Chrome shows this message because the classic uBlock Origin extension uses Manifest V2, which Chrome has fully disabled since Chrome 138. The extension has not been updated to Manifest V3 by its developer. uBlock Origin Lite is the official MV3-compatible version developed by the same author.',
      },
      {
        question: 'Is uBlock Origin Lite the same as uBlock Origin?',
        answer:
          'uBlock Origin Lite is not a one-to-one replacement. It is a separate MV3-compatible extension developed by the same author. Some features work differently due to MV3 limitations, particularly dynamic filtering rules. For most users browsing with filter lists, Lite provides equivalent ad blocking. Advanced users relying on specific MV2-only features may notice differences.',
      },
    ],
    sources: [
      {
        title: 'uBlock Origin Wiki — About Chrome\'s "This extension may soon no longer be supported"',
        url: 'https://github.com/gorhill/uBlock/wiki/About-Google-Chrome%27s-%E2%80%9CThis-extension-may-soon-no-longer-be-supported%E2%80%9D',
        publisher: 'Raymond Hill (uBlock Origin Author)',
        sourceType: 'documentation',
        reliability: 'primary',
        supports: 'uBlock Origin author confirms MV2 deprecation and explains what happened',
      },
      {
        title: 'uBlock Origin Lite Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/ublock-origin-lite/ddkjiahejlhfcafbddmgiahcphecmpfh',
        publisher: 'Chrome Web Store',
        sourceType: 'chrome-web-store',
        reliability: 'primary',
        supports: 'uBlock Origin Lite MV3 availability, listing status, and publisher identity',
      },
      {
        title: 'Chrome Manifest V2 Deprecation Timeline',
        url: 'https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline',
        publisher: 'Google Chrome Developers',
        sourceType: 'chrome-developers',
        reliability: 'primary',
        supports: 'Official Chrome MV2 deprecation timeline and what extensions are affected',
      },
    ],
    lastUpdated: '2026-05-18',
    atAGlance: {
      originalExtension: 'Classic uBlock Origin',
      currentStatus: 'Affected by Chrome 138 MV2 disable — no longer works in Chrome',
      bestPracticalOption: 'uBlock Origin Lite (by the same developer)',
      bestForAdvancedUsers: 'Firefox with classic uBlock Origin (full feature parity)',
      mainCaution: 'uBlock Origin Lite has reduced dynamic filtering compared to classic uBlock Origin due to MV3 limitations',
    },
    decisionGuide: [
      {
        choose: 'uBlock Origin Lite',
        when: 'You use Chrome and want the official MV3 version from the same developer. Most filter lists transfer well.',
      },
      {
        choose: 'AdGuard AdBlocker',
        when: 'You want a full-featured ad blocker with additional privacy features and cross-platform support.',
      },
      {
        choose: 'Firefox with classic uBlock Origin',
        when: 'You need full dynamic filtering rules and do not mind switching browsers.',
      },
      {
        choose: 'Browser-level blocking (hosts file / DNS)',
        when: 'You need network-wide ad blocking beyond what browser extensions can do.',
      },
    ],
    comparisonTable: [
      {
        option: 'uBlock Origin Lite',
        bestFor: 'Users who want the official MV3 version by the original developer',
        mv3Support: 'Yes (official)',
        cost: 'Free',
        openSource: 'Yes',
        setupDifficulty: 'Easy',
        mainTradeoff: 'Reduced dynamic filtering due to MV3 limitations',
      },
      {
        option: 'AdGuard AdBlocker',
        bestFor: 'Users wanting comprehensive ad blocking with extra privacy features',
        mv3Support: 'Yes',
        cost: 'Free / Premium',
        openSource: 'Partial',
        setupDifficulty: 'Easy',
        mainTradeoff: 'Uses more resources; some features require premium',
      },
      {
        option: 'Adblock Plus',
        bestFor: 'Users familiar with ABP or wanting highly customizable filter lists',
        mv3Support: 'Yes',
        cost: 'Free',
        openSource: 'Partial',
        setupDifficulty: 'Easy',
        mainTradeoff: 'Acceptable Ads enabled by default; less efficient than uBlock variants',
      },
      {
        option: 'Firefox + classic uBlock Origin',
        bestFor: 'Advanced users who need full dynamic filtering and feature parity',
        mv3Support: 'MV2 (Firefox)',
        cost: 'Free',
        openSource: 'Yes',
        setupDifficulty: 'Medium',
        mainTradeoff: 'Requires switching browsers; different browser ecosystem',
      },
    ],
    commonMistakes: [
      {
        doNot: 'Install random "uBlock Origin" clones from search results or unknown developers',
        instead: 'Only install from the official Chrome Web Store listing by Raymond Hill',
      },
      {
        doNot: 'Assume all ad blockers provide equivalent blocking — efficiency and filter quality vary significantly',
        instead: 'Test commonly visited sites with your chosen alternative to verify adequate blocking',
      },
      {
        doNot: 'Ignore filter list maintenance — outdated lists can miss new trackers and ads',
        instead: 'Periodically update filter lists or enable automatic updates in your ad blocker settings',
      },
    ],
  },
  {
    slug: 'great-suspender',
    name: 'Great Suspender',
    aliases: [
      'The Great Suspender',
      'Great Suspender recovery',
      'suspended tabs',
      'tab suspender',
    ],
    category: 'Tab Management',
    summary:
      'An extension that suspends inactive tabs to save memory and reduce browser resource usage.',
    status: 'removed',
    riskLevel: 'high',
    issueSummary:
      'The original Great Suspender was removed from the Chrome Web Store and disabled due to reports of malware after ownership changed.',
    shortAnswer:
      'The original Great Suspender was removed from the Chrome Web Store and disabled by Google in 2021 due to malware-related concerns. Do not install CRX copies of this extension from unofficial sources. Use Chrome built-in Memory Saver or alternatives like Auto Tab Discard for tab suspension needs.',
    whatHappened: [
      'The original developer abandoned the project and transferred ownership in 2020.',
      'The new owner introduced code that was flagged as malware by security researchers.',
      'Google proactively disabled the extension for users who had installed it.',
      'The extension was formally removed from the Chrome Web Store.',
      'Some users searched for tab recovery options after the extension was disabled.',
    ],
    migrationSteps: [
      'Do not install any version of Great Suspender from unofficial sources or CRX files.',
      'Enable Chrome built-in Memory Saver: Settings > Performance > Memory Saver.',
      'Install Auto Tab Discard from the Chrome Web Store for customizable tab suspension.',
      'Use Chrome tab groups for organizing tabs manually.',
      'Review your browser session data for any recoverable suspended tabs.',
    ],
    safetyNotes: [
      'NEVER install Great Suspender or similar CRX files from unofficial sources.',
      'The original extension was confirmed to contain unwanted code after ownership transfer.',
      'Only use extensions from the official Chrome Web Store with verified developers.',
      'Be wary of sites offering "fixed" or "recovery" versions of removed extensions.',
    ],
    alternatives: [
      {
        name: 'Chrome Memory Saver',
        slug: 'chrome-memory-saver',
        bestFor: 'Users wanting the built-in Chrome solution with no additional extensions',
        status: 'active_mv3',
        pros: [
          'Built directly into Chrome',
          'No additional extension required',
          'Official Google feature with automatic updates',
        ],
        cons: [
          'Limited customization options',
          'Less control over which tabs are suspended',
        ],
        note: 'Chrome Memory Saver is the official built-in solution for managing memory with inactive tabs.',
      },
      {
        name: 'Auto Tab Discard',
        slug: 'auto-tab-discard',
        bestFor: 'Users wanting customizable tab management with discard rules',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/auto-tab-discard-suspend/jhnleheckmknfcgijgkadoemagpecfol',
        pros: [
          'Customizable discard rules based on tab activity',
          'Respects tabs you want to keep active',
          'Low resource usage when properly configured',
        ],
        cons: [
          'Different interface than Great Suspender',
          'Requires configuration to match your preferences',
        ],
        note: 'Auto Tab Discard is a well-maintained extension focused on efficient tab management.',
      },
      {
        name: 'Workona',
        slug: 'workona',
        bestFor: 'Users needing workspace organization with session management',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/workona/ailiggmclmgkjkkkjpdagfknmgogfopb',
        pros: [
          'Workspace-based tab organization',
          'Session saving and restoration',
          'Cross-device sync capabilities',
        ],
        cons: [
          'More complex than simple tab suspension',
          'May require creating an account for full features',
        ],
        note: 'Workona offers comprehensive workspace management beyond basic tab suspension.',
      },
      {
        name: 'OneTab',
        slug: 'onetab',
        bestFor: 'Users wanting simple tab consolidation without auto-suspension',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/onetab/chphlpgkkbolifaimnlloiipkdnihall',
        pros: [
          'Simple one-click tab consolidation',
          'Memory savings by reducing open tabs',
          'Shareable tab lists for collaboration',
        ],
        cons: [
          'Manual consolidation (not automatic)',
          'Requires action to restore tabs from the list',
        ],
        note: 'OneTab provides a straightforward way to manage open tabs without automatic suspension.',
      },
    ],
    faqs: [
      {
        question: 'Is Great Suspender safe to use?',
        answer:
          'NO. The original Great Suspender was removed and disabled due to malware concerns. Do not install any version of this extension from unofficial sources. The risks outweigh any potential benefits.',
      },
      {
        question: 'Can I recover my suspended tabs after Great Suspender was disabled?',
        answer:
          'If tabs were suspended when the extension was disabled, some may have been recoverable from Chrome session data. Check chrome://discards/ for information. However, most suspended tabs were likely lost when the extension was disabled.',
      },
      {
        question: 'Why was Great Suspender removed?',
        answer:
          'The original developer transferred ownership, and the new owner introduced code that security researchers flagged as problematic. Google proactively disabled the extension to protect users.',
      },
      {
        question: 'What happened to the tabs I had open when Great Suspender was disabled?',
        answer:
          'Chrome may have recovered some tabs during session restoration. Check your recently closed tabs and browser session data. However, suspended tabs specifically may have been lost.',
      },
      {
        question: 'Are there safe alternatives to Great Suspender?',
        answer:
          'Yes. Chrome Memory Saver is built into Chrome. Auto Tab Discard is a well-maintained alternative on the Chrome Web Store. Both are safe options for managing tab memory usage.',
      },
    ],
    sources: [
      {
        title: '9to5Google — The Great Suspender removed from Chrome Web Store for containing malware',
        url: 'https://9to5google.com/2021/02/04/the-great-suspender-extension-has-been-removed-from-chrome-web-store-for-containing-malware/',
        publisher: '9to5Google',
        sourceType: 'news',
        reliability: 'primary',
        supports: 'Removal reason, malware concern, and timeline for The Great Suspender',
      },
      {
        title: 'The Verge — Chrome blocks The Great Suspender extension',
        url: 'https://www.theverge.com/2021/2/4/22266798/chrome-blocks-the-great-suspender-disabled-malware-tab-recovery',
        publisher: 'The Verge',
        sourceType: 'news',
        reliability: 'primary',
        supports: 'Chrome proactive disable action and tab recovery context',
      },
      {
        title: 'Auto Tab Discard Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/auto-tab-discard-suspend/jhnleheckmknfcgijgkadoemagpecfol',
        publisher: 'Chrome Web Store',
        sourceType: 'chrome-web-store',
        reliability: 'primary',
        supports: 'Auto Tab Discard MV3 availability and active maintenance status',
      },
      {
        title: 'OneTab Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/onetab/chphlpgkkbolifaimnlloiipkdnihall',
        publisher: 'Chrome Web Store',
        sourceType: 'chrome-web-store',
        reliability: 'primary',
        supports: 'OneTab MV3 availability and developer identity',
      },
      {
        title: 'Session Buddy Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/session-buddy/edacconmaakjimmfgnblocblbcdcpbko',
        publisher: 'Chrome Web Store',
        sourceType: 'chrome-web-store',
        reliability: 'primary',
        supports: 'Session Buddy MV3 availability and active maintenance status',
      },
    ],
    lastUpdated: '2026-05-18',
    atAGlance: {
      originalExtension: 'The Great Suspender',
      currentStatus: 'Removed from Chrome Web Store — disabled by Google due to malware concerns',
      bestPracticalOption: 'Chrome Memory Saver (built-in) or Auto Tab Discard (Web Store)',
      bestForAdvancedUsers: 'Auto Tab Discard (customizable discard rules)',
      mainCaution: 'Do not download CRX copies or unofficial versions of The Great Suspender — the original was confirmed to contain unwanted code',
    },
    comparisonTable: [
      {
        option: 'Chrome Memory Saver',
        bestFor: 'Users wanting zero setup with no extra extension',
        mv3Support: 'Built-in (N/A)',
        cost: 'Free',
        openSource: 'No',
        setupDifficulty: 'None',
        mainTradeoff: 'Minimal customization — on/off only',
      },
      {
        option: 'Auto Tab Discard',
        bestFor: 'Users who want control over which tabs are discarded',
        mv3Support: 'Yes',
        cost: 'Free',
        openSource: 'Yes',
        setupDifficulty: 'Easy',
        mainTradeoff: 'Requires some configuration for optimal use',
      },
      {
        option: 'OneTab',
        bestFor: 'Users who prefer manual tab consolidation',
        mv3Support: 'Yes',
        cost: 'Free',
        openSource: 'No',
        setupDifficulty: 'Easy',
        mainTradeoff: 'Manual only — no automatic tab suspension',
      },
      {
        option: 'Session Buddy',
        bestFor: 'Users who need to save and restore tab sessions',
        mv3Support: 'Yes',
        cost: 'Free',
        openSource: 'No',
        setupDifficulty: 'Easy',
        mainTradeoff: 'Focuses on session management, not automatic suspension',
      },
    ],
    decisionGuide: [
      {
        choose: 'Chrome Memory Saver',
        when: 'You want the simplest solution with no setup and are comfortable with minimal control.',
      },
      {
        choose: 'Auto Tab Discard',
        when: 'You want to customize which tabs are discarded and under what conditions.',
      },
      {
        choose: 'OneTab',
        when: 'You prefer to manually consolidate tabs into a list rather than automatic background suspension.',
      },
      {
        choose: 'Session Buddy',
        when: 'You need to save complete browsing sessions and restore them later across sessions.',
      },
    ],
    commonMistakes: [
      {
        doNot: 'Download a CRX file of The Great Suspender from a search result or file sharing site.',
        instead: 'Install a currently maintained extension from the Chrome Web Store, or use Chrome built-in Memory Saver.',
      },
      {
        doNot: 'Install an extension with a similar name hoping it is a safe continuation.',
        instead: 'Verify the developer and review the Chrome Web Store listing before installing any tab management tool.',
      },
      {
        doNot: 'Grant broad permissions to tab management extensions you do not recognize.',
        instead: 'Legitimate tab management extensions need permission to manage tabs. Review permissions before installing.',
      },
    ],
  },
  {
    slug: 'modheader',
    name: 'ModHeader',
    aliases: [
      'ModHeader',
      'modify headers',
      'request headers',
      'response headers',
      'header modifier',
    ],
    category: 'Developer Tool',
    summary:
      'A developer tool for modifying HTTP request and response headers directly in the browser.',
    status: 'active_mv3',
    riskLevel: 'low',
    issueSummary:
      'ModHeader is an active MV3-compatible extension for modifying HTTP headers. Users may search for alternatives due to workflow preferences.',
    shortAnswer:
      'ModHeader continues to work as an MV3-compatible extension for Chrome. It allows developers to modify HTTP request and response headers for testing and development. Alternatives like Requestly offer additional API testing features, while Header Editor provides similar header modification capabilities.',
    whatHappened: [
      'ModHeader has been updated to support Manifest V3.',
      'The extension remains actively maintained by its developer.',
      'Users may be exploring alternatives for specific workflow needs.',
    ],
    migrationSteps: [
      'No migration needed if ModHeader is working for you.',
      'If switching to an alternative, export your header configurations first.',
      'Review the alternative extension documentation for import options.',
    ],
    safetyNotes: [
      'Only install header modification tools from the official Chrome Web Store.',
      'Header modifications can affect browser security; understand what you are changing.',
      'Do not use header modification tools for unauthorized testing or access.',
    ],
    alternatives: [
      {
        name: 'Requestly',
        slug: 'requestly',
        bestFor: 'Users needing advanced API testing and mock capabilities',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/requestly-redirect-url-hea/mdnleldcmiljblolnjhpnblkcekpdkpa',
        pros: [
          'Advanced API mocking and debugging',
          'Request and response modification',
          'Team collaboration features',
        ],
        cons: [
          'More complex interface than ModHeader',
          'May be excessive for simple header editing',
        ],
        note: 'Requestly is a comprehensive API development tool with header modification among its features.',
      },
      {
        name: 'Header Editor',
        slug: 'header-editor',
        bestFor: 'Users needing both request and response header modification',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/header-editor/eningockdidmgkcjnfpmpggjjhhpfgpf',
        pros: [
          'Simple header modification interface',
          'Supports both request and response headers',
          'Pattern-based rules',
        ],
        cons: [
          'Fewer advanced features than some alternatives',
        ],
        note: 'Header Editor provides straightforward header modification for common use cases.',
      },
      {
        name: 'Simple Modify Headers',
        slug: 'simple-modify-headers',
        bestFor: 'Users wanting a minimalist header editor',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/simple-modify-headers/a4898996f1f4a760e5c6ab6b6c60b2f8',
        pros: ['Minimalist interface', 'Lightweight', 'Easy to configure'],
        cons: ['Limited advanced features'],
        note: 'Simple Modify Headers offers basic header modification in a streamlined package.',
      },
    ],
    faqs: [
      {
        question: 'Is ModHeader still supported?',
        answer:
          'Yes, ModHeader is actively maintained and works with the current version of Chrome as an MV3-compatible extension.',
      },
      {
        question: 'Are header modification extensions safe?',
        answer:
          'Header modification tools themselves are legitimate developer utilities. Only install from official sources and understand the implications of the modifications you make.',
      },
    ],
    sources: [
      {
        title: 'ModHeader Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/modheader/idgpnmonknjnojddfkpgkljpfnnfcklj',
        publisher: 'Chrome Web Store',
      },
      {
        title: 'ModHeader Documentation',
        url: 'https://docs.modheader.com/',
        publisher: 'ModHeader',
      },
    ],
    lastUpdated: '2026-05-13',
  },
  {
    slug: 'downthemall',
    name: 'DownThemAll!',
    aliases: ['DownThemAll', 'Down Them All', 'download manager', 'mass downloader'],
    category: 'Download Manager',
    summary:
      'A powerful download manager extension that accelerates downloads and manages batch downloads.',
    status: 'active_mv3',
    riskLevel: 'low',
    issueSummary:
      'DownThemAll is an active MV3 download manager. Users may explore alternatives for specific features.',
    shortAnswer:
      'DownThemAll remains available and actively maintained for Chrome as an MV3-compatible extension. It provides batch downloading and download management features. For simpler needs, Chrome native downloads or alternatives like Chrono Download Manager offer different workflows.',
    whatHappened: [
      'DownThemAll was updated to support Manifest V3.',
      'The extension continues to be maintained by the original developer.',
      'Users may be exploring alternatives for specific workflow preferences.',
    ],
    migrationSteps: [
      'No migration needed if DownThemAll is working for you.',
      'Review native Chrome download features for simple use cases.',
      'For advanced needs, consider desktop download managers like JDownloader.',
    ],
    safetyNotes: [
      'Only download extensions from the official Chrome Web Store.',
      'Review permissions requested by download managers.',
      'Use download managers responsibly and legally.',
    ],
    alternatives: [
      {
        name: 'Chrono Download Manager',
        slug: 'chrono-download-manager',
        bestFor: 'Users wanting feature-rich download management with scheduling',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/chrono-download-manager/mciogjhjfcciiohedkfgkfpcarpddoii',
        pros: [
          'Download scheduling capabilities',
          'Automatic filename pattern detection',
          'Folder organization features',
        ],
        cons: [
          'May have limitations with certain download sources',
        ],
        note: 'Chrono offers comprehensive download management features beyond basic downloading.',
      },
      {
        name: 'Browser Native Downloads',
        slug: 'browser-native-downloads',
        bestFor: 'Users preferring simplicity without extension overhead',
        status: 'active_mv3',
        pros: [
          'Built into Chrome, no extension needed',
          'Reliable and straightforward',
          'Integrated with browser UI',
        ],
        cons: [
          'Limited batch download features',
          'No advanced scheduling options',
        ],
        note: 'Chrome native downloads are reliable for everyday download needs.',
      },
      {
        name: 'JDownloader',
        slug: 'jdownloader',
        bestFor: 'Users needing advanced download management with link grabbing',
        status: 'active_mv3',
        url: 'https://jdownloader.org/',
        pros: [
          'Advanced batch downloading capabilities',
          'Link grabbing from websites',
          'Comprehensive format support',
        ],
        cons: [
          'Requires separate desktop application',
          'More complex setup and learning curve',
        ],
        note: 'JDownloader is a powerful desktop application for complex download management.',
      },
    ],
    faqs: [
      {
        question: 'Is DownThemAll still working in Chrome?',
        answer:
          'Yes, DownThemAll has been updated to work with Manifest V3 and continues to function in Chrome.',
      },
      {
        question: 'Why use a download manager extension?',
        answer:
          'Download manager extensions can accelerate downloads, organize files, and handle batch downloads more efficiently than browser-native downloads for specific use cases.',
      },
    ],
    sources: [
      {
        title: 'DownThemAll Official Website',
        url: 'https://www.downthemall.net/',
        publisher: 'DownThemAll',
      },
      {
        title: 'DownThemAll Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/downthemall/nljkibfhlpcnanjgbnlnbjecgicbjkge',
        publisher: 'Chrome Web Store',
      },
    ],
    lastUpdated: '2026-05-13',
  },
  {
    slug: 'proxy-switchyomega',
    name: 'Proxy SwitchyOmega',
    aliases: [
      'Proxy SwitchyOmega',
      'SwitchyOmega proxy',
      'Switchy Omega proxy',
      'chrome proxy extension',
      'proxy manager chrome',
      'proxy switcher chrome mv3',
    ],
    category: 'Proxy Manager',
    summary:
      'A proxy switcher extension for managing and automatically switching between multiple proxy configurations in Chrome.',
    status: 'affected_by_mv2',
    riskLevel: 'medium',
    oldExtensionIds: ['padekgcemlokbadohgkifijomclgjgif'],
    issueSummary:
      'Proxy SwitchyOmega is affected by Chrome Manifest V2 deprecation and no longer works in Chrome 138 and later.',
    shortAnswer:
      'Proxy SwitchyOmega stopped working in Chrome 138 because Chrome disabled all Manifest V2 extensions. The closest migration path is ZeroOmega, a community-maintained MV3-compatible fork that can import your existing SwitchyOmega settings directly. FoxyProxy is another established option with MV3 support.',
    whatHappened: [
      'Chrome 138 disabled all Manifest V2 extensions by default for all users.',
      'Proxy SwitchyOmega was built on Manifest V2 and is no longer compatible with modern Chrome.',
      'ZeroOmega emerged as a community fork specifically designed as a SwitchyOmega successor for MV3.',
      'FoxyProxy Standard has been updated with full Manifest V3 support.',
    ],
    migrationSteps: [
      'Export your SwitchyOmega profile backup if the extension is still partially accessible.',
      'Install ZeroOmega or FoxyProxy from the Chrome Web Store.',
      'Import SwitchyOmega profiles if using ZeroOmega (ZeroOmega supports direct import of SwitchyOmega profile files).',
      'Review and recreate proxy profile settings in your chosen alternative.',
      'Test each proxy profile individually before enabling auto-switch rules.',
      'Verify that proxy authentication and SSL certificates work correctly.',
      'Gradually remove the old SwitchyOmega extension once satisfied with the new setup.',
    ],
    safetyNotes: [
      'Only install proxy managers from the official Chrome Web Store.',
      'Review permissions carefully: legitimate proxy extensions need access to modify network requests.',
      'Be cautious with extensions requiring excessive permissions beyond proxy functionality.',
      'Verify the developer identity matches expectations before installing.',
    ],
    alternatives: [
      {
        name: 'ZeroOmega',
        slug: 'zeroomega',
        bestFor: 'SwitchyOmega users who want a familiar interface with direct profile import',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/proxy-switchyomega-3-zero/pfnededegaaopdmhkdmcofjmoldfiped',
        githubUrl: 'https://github.com/zero-peak/ZeroOmega',
        pros: [
          'Direct fork of the SwitchyOmega codebase',
          'Manifest V3 compatible and actively maintained',
          'Similar interface to the original SwitchyOmega',
          'Supports direct import of SwitchyOmega profile files',
          'Open source for community review',
        ],
        cons: [
          'Newer project with limited production testing compared to established tools',
          'Some advanced SwitchyOmega features may not yet be available',
        ],
        note: 'ZeroOmega is a community-maintained fork designed specifically as a SwitchyOmega successor for MV3. It can import existing SwitchyOmega profiles directly.',
      },
      {
        name: 'FoxyProxy Standard',
        slug: 'foxyproxy',
        bestFor: 'Users needing advanced proxy features and multi-profile management',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/foxyproxy/gcknhkkoolaabfmlnjonogaaifnjlfnp',
        pros: [
          'Long-established proxy management tool with a solid reputation',
          'Supports multiple proxy profiles with pattern matching',
          'Available for multiple browsers',
          'Full MV3 support in Chrome 138 and later',
        ],
        cons: [
          'Interface differs from SwitchyOmega',
          'Some advanced features require premium subscription',
        ],
        note: 'FoxyProxy has been a popular proxy manager for years and offers MV3-compatible versions for Chrome.',
      },
      {
        name: 'Proxy Switcher and Manager',
        slug: 'proxy-switcher-manager',
        bestFor: 'Users wanting straightforward proxy switching without complexity',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/proxy-switcher-and-manager/hmidjncakjnlkjkicopkoobegggfmhdp',
        pros: [
          'Simple and intuitive interface',
          'Multiple proxy profiles',
          'Quick toggle between proxies',
        ],
        cons: [
          'May lack advanced auto-switch capabilities',
          'Limited pattern-based routing compared to SwitchyOmega',
        ],
        note: 'A practical alternative for users who need basic proxy switching functionality in an MV3-compatible package.',
      },
    ],
    faqs: [
      {
        question: 'Why did Proxy SwitchyOmega stop working in Chrome?',
        answer:
          'Proxy SwitchyOmega was built on Chrome Manifest V2. Chrome 138 fully disabled all Manifest V2 extensions by default, which means SwitchyOmega can no longer function in current Chrome versions without a Manifest V3 update from the developer.',
      },
      {
        question: 'Can I import my SwitchyOmega profiles into ZeroOmega?',
        answer:
          'Yes. ZeroOmega is designed to be compatible with SwitchyOmega configurations. If you have an exported backup of your SwitchyOmega profiles, you can import them directly into ZeroOmega from the Options menu.',
      },
      {
        question: 'Is ZeroOmega safe to use?',
        answer:
          'ZeroOmega is a community-maintained open-source fork. Review its permissions and consider its open-source nature when making your decision. The project can be audited on GitHub. As with any extension, verify the developer and permissions before installing.',
      },
      {
        question: 'What if I need the exact features from SwitchyOmega?',
        answer:
          'If you rely on specific SwitchyOmega features, try multiple alternatives to find the best fit. Some features may require adjusting your workflow. FoxyProxy Standard offers the most comprehensive proxy management features among MV3-compatible options.',
      },
      {
        question: 'Can I use browser proxy settings instead of an extension?',
        answer:
          'Browser proxy settings work for basic single-proxy setups but offer less flexibility for switching between multiple profiles or using auto-switch rules. If you manage multiple proxy configurations, an extension is more convenient.',
      },
    ],
    sources: [
      {
        title: 'Chrome Manifest V2 Deprecation Timeline',
        url: 'https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline',
        publisher: 'Google Chrome Developers',
        sourceType: 'chrome-developers',
        reliability: 'primary',
        supports: 'Why SwitchyOmega and other MV2 extensions no longer work in Chrome 138 and later',
      },
      {
        title: 'ZeroOmega Chrome Web Store Listing',
        url: 'https://chromewebstore.google.com/detail/proxy-switchyomega-3-zero/pfnededegaaopdmhkdmcofjmoldfiped',
        publisher: 'Chrome Web Store',
        sourceType: 'chrome-web-store',
        reliability: 'primary',
        supports: 'ZeroOmega MV3 availability, listing status, and publisher identity',
      },
      {
        title: 'ZeroOmega GitHub Repository',
        url: 'https://github.com/zero-peak/ZeroOmega',
        publisher: 'ZeroOmega Contributors',
        sourceType: 'github',
        reliability: 'secondary',
        supports: 'ZeroOmega open-source status, development activity, and SwitchyOmega fork lineage',
      },
      {
        title: 'FoxyProxy Standard Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/foxyproxy/gcknhkkoolaabfmlnjonogaaifnjlfnp',
        publisher: 'Chrome Web Store',
        sourceType: 'chrome-web-store',
        reliability: 'primary',
        supports: 'FoxyProxy MV3 availability and publisher identity as established alternative',
      },
      {
        title: 'Manage extensions on work or school Chromebooks',
        url: 'https://support.google.com/chrome/a/answer/9296680',
        publisher: 'Google Chrome Help',
        sourceType: 'documentation',
        reliability: 'secondary',
        supports: 'Why managed enterprise devices may have different extension policies',
      },
    ],
    lastUpdated: '2026-05-18',
    atAGlance: {
      originalExtension: 'Proxy SwitchyOmega',
      currentStatus: 'Affected by Chrome 138 MV2 disable — no longer works in Chrome',
      bestPracticalOption: 'ZeroOmega (direct fork with SwitchyOmega profile import)',
      bestForAdvancedUsers: 'FoxyProxy Standard (established tool with advanced proxy features)',
      mainCaution: 'Only install proxy managers from the official Chrome Web Store — proxy extensions require network modification permissions',
    },
    decisionGuide: [
      {
        choose: 'ZeroOmega',
        when: 'You are migrating from SwitchyOmega and want direct profile import and a familiar interface.',
      },
      {
        choose: 'FoxyProxy Standard',
        when: 'You want the most established proxy manager with advanced pattern-matching and multi-profile support.',
      },
      {
        choose: 'Proxy Switcher and Manager',
        when: 'You need basic proxy switching without advanced auto-switch rules or pattern matching.',
      },
      {
        choose: 'Firefox with SwitchyOmega',
        when: 'You need exact SwitchyOmega feature parity and do not mind switching browsers.',
      },
    ],
    comparisonTable: [
      {
        option: 'ZeroOmega',
        bestFor: 'SwitchyOmega users who want direct profile import and familiar interface',
        mv3Support: 'Yes',
        cost: 'Free',
        openSource: 'Yes',
        setupDifficulty: 'Easy',
        mainTradeoff: 'Newer project with less production testing than established tools',
      },
      {
        option: 'FoxyProxy Standard',
        bestFor: 'Users wanting a well-established, feature-rich proxy manager',
        mv3Support: 'Yes',
        cost: 'Free / Premium',
        openSource: 'No',
        setupDifficulty: 'Easy',
        mainTradeoff: 'Some advanced features require premium; interface differs from SwitchyOmega',
      },
      {
        option: 'Proxy Switcher and Manager',
        bestFor: 'Users wanting straightforward proxy switching without complexity',
        mv3Support: 'Yes',
        cost: 'Free',
        openSource: 'No',
        setupDifficulty: 'Very Easy',
        mainTradeoff: 'Limited advanced features; no pattern-based auto-switching',
      },
      {
        option: 'Firefox + SwitchyOmega',
        bestFor: 'Advanced users who need exact SwitchyOmega feature parity',
        mv3Support: 'MV2 (Firefox)',
        cost: 'Free',
        openSource: 'Yes',
        setupDifficulty: 'Medium',
        mainTradeoff: 'Requires switching browsers; different browser ecosystem',
      },
    ],
    commonMistakes: [
      {
        doNot: 'Install proxy extensions from random search results or unofficial download sites',
        instead: 'Only install proxy managers from the official Chrome Web Store with verified developer identity',
      },
      {
        doNot: 'Import SwitchyOmega profiles without reviewing the configurations first',
        instead: 'Verify each proxy configuration is correct after importing to avoid unexpected routing',
      },
      {
        doNot: 'Use unfamiliar proxy providers without verifying their trustworthiness',
        instead: 'Research proxy service reputation before routing sensitive traffic through them',
      },
    ],
  },
  {
    slug: 'tampermonkey',
    name: 'Tampermonkey',
    aliases: [
      'Tampermonkey',
      'userscript manager',
      'script manager',
      'user scripts',
      'userscripts',
      'greasyfork',
    ],
    category: 'Script Manager',
    summary:
      'The most popular userscript manager for Chrome, allowing you to install custom user scripts to modify web pages.',
    status: 'active_mv3',
    riskLevel: 'low',
    issueSummary:
      'Tampermonkey is actively maintained and available as an MV3 extension. Users may seek alternatives for specific workflow needs.',
    shortAnswer:
      'Tampermonkey is actively maintained and works in modern Chrome as an MV3-compatible extension. It is the most widely used userscript manager. Violentmonkey is a lightweight alternative with a simpler interface.',
    whatHappened: [
      'Tampermonkey was updated to support Manifest V3.',
      'The extension remains actively maintained with regular updates.',
      'Users may explore alternatives for specific use cases or interface preferences.',
    ],
    migrationSteps: [
      'No migration needed if Tampermonkey is working for you.',
      'Export your scripts if switching to another userscript manager.',
      'Review Violentmonkey or other alternatives if you prefer a simpler interface.',
    ],
    safetyNotes: [
      'Only install userscript managers from the official Chrome Web Store.',
      'Review scripts before installing — they run with your browser privileges.',
      'Be cautious with scripts requesting broad permissions.',
      'Verify script sources before installation.',
    ],
    alternatives: [
      {
        name: 'Violentmonkey',
        slug: 'violentmonkey',
        bestFor: 'Users wanting a lightweight userscript manager with open-source transparency',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag',
        githubUrl: 'https://github.com/violentmonkey/violentmonkey',
        pros: [
          'Open source with full code transparency',
          'Lightweight with minimal resource usage',
          'Compatible with Tampermonkey scripts',
          'Active community development',
        ],
        cons: [
          'Fewer built-in features than Tampermonkey',
          'Smaller user community for script support',
        ],
        note: 'Violentmonkey is an open-source userscript manager that supports Tampermonkey-compatible scripts with a simpler interface.',
      },
    ],
    faqs: [
      {
        question: 'Is Tampermonkey safe to use?',
        answer:
          'Tampermonkey itself is a reputable and widely-used extension. However, user scripts installed through Tampermonkey vary in quality and safety. Review scripts and their permissions before installing.',
      },
      {
        question: 'Can I use Tampermonkey scripts with Violentmonkey?',
        answer:
          'Yes. Violentmonkey is designed to be compatible with scripts written for Tampermonkey, including those from Greasy Fork and other script repositories.',
      },
    ],
    sources: [
      {
        title: 'Tampermonkey Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo',
        publisher: 'Chrome Web Store',
        sourceType: 'chrome-web-store',
        reliability: 'primary',
        supports: 'Tampermonkey MV3 availability, listing status, and publisher identity',
      },
      {
        title: 'Tampermonkey GitHub Repository',
        url: 'https://github.com/tampermonkey/tampermonkey',
        publisher: 'Tampermonkey',
        sourceType: 'github',
        reliability: 'secondary',
        supports: 'Tampermonkey open-source status (partial — editor is GPL, newer versions proprietary), development activity, and changelog',
      },
      {
        title: 'Tampermonkey Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo',
        publisher: 'Chrome Web Store',
        sourceType: 'chrome-web-store',
        reliability: 'primary',
        supports: 'Tampermonkey MV3 availability, listing status, and publisher identity',
      },
    ],
    lastUpdated: '2026-05-18',
    atAGlance: {
      originalExtension: 'Tampermonkey',
      currentStatus: 'Active and MV3-compatible — works in current Chrome',
      bestPracticalOption: 'Tampermonkey (already working, no migration needed)',
      bestForAdvancedUsers: 'Violentmonkey (open source, lightweight, same script compatibility)',
      mainCaution: 'Only install scripts from sources you trust — scripts run with your browser privileges',
    },
    decisionGuide: [
      {
        choose: 'Tampermonkey',
        when: 'You want the most widely-supported userscript manager with the largest script library and community support.',
      },
      {
        choose: 'Violentmonkey',
        when: 'You prefer open-source transparency and a lightweight interface, and want Tampermonkey script compatibility.',
      },
    ],
    comparisonTable: [
      {
        option: 'Tampermonkey',
        bestFor: 'Users wanting the most widely-supported userscript manager',
        mv3Support: 'Yes',
        cost: 'Free',
        openSource: 'Yes (editor is open source)',
        setupDifficulty: 'Easy',
        mainTradeoff: 'Closed-source binary; larger resource footprint than Violentmonkey',
      },
      {
        option: 'Violentmonkey',
        bestFor: 'Privacy-conscious users wanting full open-source transparency',
        mv3Support: 'Yes',
        cost: 'Free',
        openSource: 'Yes (fully open source)',
        setupDifficulty: 'Easy',
        mainTradeoff: 'Smaller script library community; fewer built-in features',
      },
    ],
    commonMistakes: [
      {
        doNot: 'Install user scripts from random websites without checking the source code first',
        instead: 'Always review the script source before installing — scripts run with browser privileges',
      },
      {
        doNot: 'Grant broad permissions to scripts without understanding what they do',
        instead: 'Check the script permissions request and only install if you understand why they are needed',
      },
      {
        doNot: 'Assume all scripts from Greasy Fork are safe — some contain unwanted behavior',
        instead: 'Read script descriptions, reviews, and source code before installing from any repository',
      },
    ],
  },
  {
    slug: 'violentmonkey',
    name: 'Violentmonkey',
    aliases: [
      'Violentmonkey',
      'userscript manager',
      'open source script manager',
      'lightweight userscript',
    ],
    category: 'Script Manager',
    summary:
      'An open-source userscript manager for Chrome that supports Tampermonkey-compatible scripts with a lightweight interface.',
    status: 'active_mv3',
    riskLevel: 'low',
    issueSummary:
      'Violentmonkey is actively maintained as an MV3-compatible extension. Users may compare it with Tampermonkey for preference.',
    shortAnswer:
      'Violentmonkey is an open-source userscript manager that works in modern Chrome. It supports Tampermonkey-compatible scripts and is known for its lightweight design and transparency. Tampermonkey remains the most widely-used option with more built-in features.',
    whatHappened: [
      'Violentmonkey was updated to support Manifest V3.',
      'The project remains actively maintained by its open-source community.',
      'Users compare it with Tampermonkey for interface and feature preferences.',
    ],
    migrationSteps: [
      'No migration needed if Violentmonkey is working for you.',
      'Export your scripts before switching to another manager.',
      'Violentmonkey supports importing Tampermonkey-format scripts.',
    ],
    safetyNotes: [
      'Violentmonkey is open source, allowing code review on GitHub.',
      'Only install scripts from trusted sources.',
      'Review script permissions before installation.',
    ],
    alternatives: [
      {
        name: 'Tampermonkey',
        slug: 'tampermonkey',
        bestFor: 'Users wanting the most widely-supported userscript manager',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo',
        pros: [
          'Most popular userscript manager',
          'Large community and script library',
          'Rich feature set',
          'Active development and support',
        ],
        cons: [
          'Larger resource usage than Violentmonkey',
          'Closed source compared to Violentmonkey',
        ],
        note: 'Tampermonkey is the most widely-used userscript manager with the largest script library.',
      },
    ],
    faqs: [
      {
        question: 'Is Violentmonkey open source?',
        answer:
          'Yes. Violentmonkey is fully open source and its code is available on GitHub for community review and audit.',
      },
      {
        question: 'Can I use Violentmonkey with scripts from Greasy Fork?',
        answer:
          'Yes. Violentmonkey is compatible with scripts written for Tampermonkey, including those hosted on Greasy Fork and other userscript repositories.',
      },
    ],
    sources: [
      {
        title: 'Violentmonkey Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag',
        publisher: 'Chrome Web Store',
      },
      {
        title: 'Violentmonkey GitHub Repository',
        url: 'https://github.com/violentmonkey/violentmonkey',
        publisher: 'Violentmonkey Contributors',
      },
    ],
    lastUpdated: '2026-05-18',
  },
  {
    slug: 'auto-tab-discard',
    name: 'Auto Tab Discard',
    aliases: [
      'Auto Tab Discard',
      'tab discard',
      'suspend tabs',
      'tab memory saver',
      'tab suspend',
      'Auto Tab Discard Suspend',
    ],
    category: 'Tab Management',
    summary:
      'A tab management extension that discards inactive tabs to reduce memory usage without fully closing them.',
    status: 'active_mv3',
    riskLevel: 'low',
    issueSummary:
      'Auto Tab Discard is actively maintained as an MV3 extension. It is one of the most popular tab management alternatives for Chrome.',
    shortAnswer:
      'Auto Tab Discard is an actively maintained MV3 extension that suspends inactive tabs to save memory. It offers customizable discard rules and is available on the Chrome Web Store. Chrome built-in Memory Saver is a no-extension alternative.',
    whatHappened: [
      'Auto Tab Discard was updated to support Manifest V3.',
      'The extension remains actively maintained with new features.',
      'It has become a popular alternative to tab suspenders affected by MV2 deprecation.',
    ],
    migrationSteps: [
      'No migration needed if Auto Tab Discard is working for you.',
      'Review discard settings to match your preferences.',
      'Chrome Memory Saver can supplement Auto Tab Discard for additional memory savings.',
    ],
    safetyNotes: [
      'Only install from the official Chrome Web Store.',
      'Auto Tab Discard requires minimal permissions for tab management.',
      'Verify the developer identity matches expectations.',
    ],
    alternatives: [
      {
        name: 'Chrome Memory Saver',
        slug: 'chrome-memory-saver',
        bestFor: 'Users preferring a built-in Chrome solution with no additional extension',
        status: 'active_mv3',
        pros: [
          'Built directly into Chrome',
          'No additional extension required',
          'Official Google feature',
          'Automatic updates with Chrome',
        ],
        cons: [
          'Limited customization options',
          'Less granular control over which tabs are discarded',
        ],
        note: 'Chrome Memory Saver is the official built-in solution for managing memory with inactive tabs, enabled via Settings > Performance.',
      },
      {
        name: 'OneTab',
        slug: 'onetab',
        bestFor: 'Users wanting simple manual tab consolidation',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/onetab/chphlpgkkbolifaimnlloiipkdnihall',
        pros: [
          'One-click tab consolidation',
          'Reduces memory by converting open tabs to a list',
          'Shareable tab lists',
        ],
        cons: [
          'Manual process (not automatic discarding)',
          'Requires action to restore tabs',
        ],
        note: 'OneTab provides a simple way to manage open tabs without automatic suspension.',
      },
    ],
    faqs: [
      {
        question: 'How does Auto Tab Discard save memory?',
        answer:
          'Auto Tab Discard releases the resources used by inactive tabs while keeping them in your tab bar. When you click a discarded tab, it reloads automatically. This saves RAM without closing the tab.',
      },
      {
        question: 'Can I exclude specific tabs from being discarded?',
        answer:
          'Yes. Auto Tab Discard allows you to pin tabs or add specific domains to an exclusion list so they are never discarded.',
      },
      {
        question: 'Is Auto Tab Discard safe?',
        answer:
          'Yes. Auto Tab Discard is a well-maintained open-source extension available on the Chrome Web Store. It only manages tab resource usage and does not access your browsing data.',
      },
    ],
    sources: [
      {
        title: 'Auto Tab Discard Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/auto-tab-discard-suspend/jhnleheckmknfcgijgkadoemagpecfol',
        publisher: 'Chrome Web Store',
      },
      {
        title: 'Auto Tab Discard — WebExtensions.org Listing',
        url: 'https://webextension.org/listing/tab-discard.html',
        publisher: 'WebExtensions.org',
      },
    ],
    lastUpdated: '2026-05-18',
  },
  {
    slug: 'foxyproxy',
    name: 'FoxyProxy',
    aliases: [
      'FoxyProxy',
      'FoxyProxy Standard',
      'proxy switcher',
      'foxyproxy chrome',
      'foxyproxy mv3',
      'proxy manager chrome',
    ],
    category: 'Proxy Manager',
    summary:
      'A comprehensive proxy switcher for Chrome with support for multiple proxy profiles, pattern matching, and automatic switching.',
    status: 'active_mv3',
    riskLevel: 'low',
    issueSummary:
      'FoxyProxy is actively maintained as an MV3 extension for Chrome. It is one of the most established proxy management tools.',
    shortAnswer:
      'FoxyProxy is an actively maintained MV3 proxy manager for Chrome with advanced features like multi-profile management and pattern-based auto-switching. It is available on the Chrome Web Store and works with modern Chrome.',
    whatHappened: [
      'FoxyProxy released MV3-compatible versions for Chrome.',
      'The extension remains actively maintained by its developer.',
      'It has been a popular proxy management tool for over a decade.',
    ],
    migrationSteps: [
      'No migration needed if FoxyProxy is working for you.',
      'Export proxy profiles as a backup before making changes.',
      'Review the MV3 version features for any differences from the MV2 version.',
    ],
    safetyNotes: [
      'Only install FoxyProxy from the official Chrome Web Store.',
      'Review permissions — proxy extensions need network modification access.',
      'Verify the developer identity before installing.',
    ],
    alternatives: [
      {
        name: 'ZeroOmega',
        slug: 'zeroomega',
        bestFor: 'Users migrating from SwitchyOmega who want a familiar interface',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/proxy-switchyomega-3-zero/pfnededegaaopdmhkdmcofjmoldfiped',
        githubUrl: 'https://github.com/zero-peak/ZeroOmega',
        pros: [
          'Direct fork of SwitchyOmega codebase',
          'Similar interface to SwitchyOmega',
          'Supports direct import of SwitchyOmega profiles',
          'Open source for community review',
        ],
        cons: [
          'Newer project with less production testing',
          'Smaller community compared to FoxyProxy',
        ],
        note: 'ZeroOmega is a community-maintained fork designed specifically as a SwitchyOmega successor for MV3.',
      },
      {
        name: 'Proxy Switcher and Manager',
        slug: 'proxy-switcher-manager',
        bestFor: 'Users wanting straightforward proxy switching without complexity',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/proxy-switcher-and-manager/hmidjncakjnlkjkicopkoobegggfmhdp',
        pros: [
          'Simple and intuitive interface',
          'Multiple proxy profiles',
          'Quick toggle between proxies',
        ],
        cons: [
          'May lack advanced auto-switch capabilities',
          'Limited pattern-based routing',
        ],
        note: 'A practical alternative for users who need basic proxy switching functionality in an MV3-compatible package.',
      },
    ],
    faqs: [
      {
        question: 'Is FoxyProxy still supported in Chrome?',
        answer:
          'Yes. FoxyProxy has been updated to support Manifest V3 and works with the current version of Chrome.',
      },
      {
        question: 'Does FoxyProxy support multiple proxy profiles?',
        answer:
          'Yes. FoxyProxy Standard supports multiple named proxy profiles with pattern-based automatic switching, which is one of its most popular features.',
      },
    ],
    sources: [
      {
        title: 'FoxyProxy Standard Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/foxyproxy/gcknhkkoolaabfmlnjonogaaifnjlfnp',
        publisher: 'Chrome Web Store',
        sourceType: 'chrome-web-store',
        reliability: 'primary',
        supports: 'FoxyProxy MV3 availability, listing status, and publisher identity',
      },
      {
        title: 'FoxyProxy Official Website',
        url: 'https://getfoxyproxy.org/',
        publisher: 'Beholder Corporation',
        sourceType: 'official-website',
        reliability: 'secondary',
        supports: 'FoxyProxy developer information, product features, and support resources',
      },
      {
        title: 'Manifest V3 migration for extensions',
        url: 'https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3',
        publisher: 'Google Chrome Developers',
        sourceType: 'chrome-developers',
        reliability: 'secondary',
        supports: 'Chrome extension platform and Manifest V3 migration context — clarifies why maintained extensions like FoxyProxy have updated to MV3',
      },
    ],
    lastUpdated: '2026-05-18',
    atAGlance: {
      originalExtension: 'FoxyProxy',
      currentStatus: 'Active and MV3-compatible — works in current Chrome',
      bestPracticalOption: 'FoxyProxy Standard (already working, no migration needed)',
      bestForAdvancedUsers: 'ZeroOmega (open source fork of SwitchyOmega with direct profile import)',
      mainCaution: 'Proxy extensions require network modification permissions — only install from the official Chrome Web Store',
    },
    decisionGuide: [
      {
        choose: 'FoxyProxy Standard',
        when: 'You already use FoxyProxy and want to continue with a well-established, actively maintained proxy manager.',
      },
      {
        choose: 'ZeroOmega',
        when: 'You are migrating from SwitchyOmega and want direct profile import and a familiar interface.',
      },
      {
        choose: 'Proxy Switcher and Manager',
        when: 'You need simple proxy switching without advanced pattern-matching features.',
      },
    ],
    comparisonTable: [
      {
        option: 'FoxyProxy Standard',
        bestFor: 'Users wanting a well-established, feature-rich proxy manager',
        mv3Support: 'Yes',
        cost: 'Free / Premium',
        openSource: 'No',
        setupDifficulty: 'Easy',
        mainTradeoff: 'Some advanced features require premium; closed source',
      },
      {
        option: 'ZeroOmega',
        bestFor: 'SwitchyOmega users who want direct profile import and a familiar interface',
        mv3Support: 'Yes',
        cost: 'Free',
        openSource: 'Yes',
        setupDifficulty: 'Easy',
        mainTradeoff: 'Newer project with smaller community; fewer features than FoxyProxy',
      },
      {
        option: 'Proxy Switcher and Manager',
        bestFor: 'Users wanting straightforward proxy switching without complexity',
        mv3Support: 'Yes',
        cost: 'Free',
        openSource: 'No',
        setupDifficulty: 'Very Easy',
        mainTradeoff: 'Limited advanced features; no pattern-based auto-switching',
      },
    ],
    commonMistakes: [
      {
        doNot: 'Install proxy extensions from unofficial sources or third-party download sites',
        instead: 'Only install proxy managers from the official Chrome Web Store with verified developer identity',
      },
      {
        doNot: 'Grant broad permissions without reviewing what network access you are giving',
        instead: 'Check that the permissions match the stated proxy functionality before installing',
      },
      {
        doNot: 'Use proxy configurations for sensitive activities without verifying the proxy provider is trustworthy',
        instead: 'Verify the proxy service reputation and security before routing traffic through it',
      },
    ],
  },
  {
    slug: 'session-buddy',
    name: 'Session Buddy',
    aliases: [
      'Session Buddy',
      'save tabs',
      'session manager',
      'tab session',
      'browser session',
      'restore tabs',
    ],
    category: 'Tab Management',
    summary:
      'A session management extension that lets you save, organize, and restore collections of open tabs and browser windows.',
    status: 'active_mv3',
    riskLevel: 'low',
    issueSummary:
      'Session Buddy is actively maintained as an MV3 extension for managing browser sessions and tab collections.',
    shortAnswer:
      'Session Buddy is an actively maintained session manager for Chrome that lets you save, organize, and restore tab collections. It works in modern Chrome as an MV3-compatible extension.',
    whatHappened: [
      'Session Buddy was updated to support Manifest V3.',
      'The extension remains actively maintained with new features.',
      'Session management has become more valuable as tab overload is a common issue.',
    ],
    migrationSteps: [
      'No migration needed if Session Buddy is working for you.',
      'Export your saved sessions as a backup.',
      'Review session organization features for workflow optimization.',
    ],
    safetyNotes: [
      'Only install Session Buddy from the official Chrome Web Store.',
      'Verify the developer identity matches the official publisher.',
      'Review permissions — session managers need access to tabs and windows.',
    ],
    alternatives: [
      {
        name: 'Workona',
        slug: 'workona',
        bestFor: 'Users wanting workspace-based tab organization with cross-device sync',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/workona/ailiggmclmgkjkkkjpdagfknmgogfopb',
        pros: [
          'Workspace-based organization beyond simple sessions',
          'Cross-device sync capabilities',
          'Session saving and restoration',
          'Advanced tab grouping features',
        ],
        cons: [
          'More complex setup than Session Buddy',
          'Account may be required for full features',
        ],
        note: 'Workona offers comprehensive workspace management including session saving, tab grouping, and cross-device synchronization.',
      },
      {
        name: 'OneTab',
        slug: 'onetab',
        bestFor: 'Users wanting simple tab consolidation without additional complexity',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/onetab/chphlpgkkbolifaimnlloiipkdnihall',
        pros: [
          'Simple one-click tab consolidation',
          'Shareable tab lists',
          'Memory savings',
        ],
        cons: [
          'Manual consolidation (not automatic)',
          'Less organizational structure than Session Buddy',
        ],
        note: 'OneTab provides straightforward tab consolidation in a minimal interface.',
      },
    ],
    faqs: [
      {
        question: 'Can Session Buddy save all my open tabs?',
        answer:
          'Yes. Session Buddy can capture all open tabs across all windows and save them as named sessions for easy restoration later.',
      },
      {
        question: 'Is Session Buddy safe to use?',
        answer:
          'Session Buddy is a widely-used and reputable extension. It requires access to your tabs to save and restore sessions. Only install from the official Chrome Web Store.',
      },
    ],
    sources: [
      {
        title: 'Session Buddy Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/session-buddy/edacconmaakjimmfgnblocblbcdcpbko',
        publisher: 'Chrome Web Store',
      },
      {
        title: 'Session Buddy Official Support',
        url: 'https://sessionbuddy.com/support',
        publisher: 'Session Buddy',
      },
    ],
    lastUpdated: '2026-05-18',
  },
  {
    slug: 'stylus',
    name: 'Stylus',
    aliases: [
      'Stylus',
      'userstyles',
      'custom CSS',
      'style manager',
      'website styling',
      'Stylish alternative',
      'userstyles.org',
    ],
    category: 'Custom Style Manager',
    summary:
      'A style manager for Chrome that lets you install custom CSS themes (userstyles) to modify the appearance of websites.',
    status: 'active_mv3',
    riskLevel: 'low',
    issueSummary:
      'Stylus is actively maintained as an MV3 extension. It is widely considered the safer and community-maintained successor to the deprecated Stylish extension.',
    shortAnswer:
      'Stylus is an actively maintained MV3 extension for managing custom CSS themes. It replaced the deprecated Stylish extension and has a strong community of style authors. Styles are available through its built-in repository and userstyles.org.',
    whatHappened: [
      'Stylus emerged as the community-maintained alternative to the deprecated Stylish extension.',
      'The original Stylish was removed from the Chrome Web Store due to privacy concerns with its data collection.',
      'Stylus was developed by the community as a privacy-respecting replacement.',
      'Stylus has been updated to support Manifest V3.',
    ],
    migrationSteps: [
      'If migrating from Stylish, export your saved styles.',
      'Install Stylus from the Chrome Web Store.',
      'Browse the built-in style repository or userstyles.org for themes.',
      'Import any saved styles from your previous installation.',
    ],
    safetyNotes: [
      'Only install Stylus from the official Chrome Web Store.',
      'Review styles before installing — they run CSS on web pages.',
      'Be cautious with styles requesting access to all websites.',
      'Stylus is open source and does not collect user data unlike its predecessor.',
    ],
    alternatives: [
      {
        name: 'Stylish',
        slug: 'stylish',
        bestFor: 'Users seeking the original Stylish interface (use with caution)',
        status: 'removed',
        pros: [
          'Familiar interface for former Stylish users',
        ],
        cons: [
          'Removed from Chrome Web Store',
          'Privacy concerns from past data collection practices',
          'Not actively maintained',
        ],
        note: 'The original Stylish was removed from the Chrome Web Store due to data collection concerns. Its successor, Stylus, is the recommended alternative.',
      },
    ],
    faqs: [
      {
        question: 'What happened to Stylish?',
        answer:
          'The original Stylish extension was removed from the Chrome Web Store after researchers discovered it was collecting users browsing history. Stylus was created by the community as a privacy-respecting replacement without data collection.',
      },
      {
        question: 'Is Stylus safe?',
        answer:
          'Yes. Stylus is an open-source extension that does not collect any user data. It is widely used and recommended by privacy-conscious users as a replacement for Stylish.',
      },
      {
        question: 'Can I use Stylish styles with Stylus?',
        answer:
          'Yes. Stylus is compatible with styles written for Stylish. Most userstyles from userstyles.org work with Stylus without modification.',
      },
    ],
    sources: [
      {
        title: 'Stylus Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne',
        publisher: 'Chrome Web Store',
      },
      {
        title: 'Stylus GitHub Repository',
        url: 'https://github.com/openstyles/stylus',
        publisher: 'OpenStyles Community',
      },
    ],
    lastUpdated: '2026-05-18',
  },
  {
    slug: 'dark-reader',
    name: 'Dark Reader',
    aliases: [
      'Dark Reader',
      'dark mode',
      'night mode',
      'dark theme',
      'website dark mode',
      'dark mode extension',
    ],
    category: 'Accessibility',
    summary:
      'An accessibility extension that applies dark themes to websites, reducing eye strain and saving battery on OLED screens.',
    status: 'active_mv3',
    riskLevel: 'low',
    issueSummary:
      'Dark Reader is actively maintained as an MV3 extension. It is one of the most popular accessibility and dark mode extensions for Chrome.',
    shortAnswer:
      'Dark Reader is an actively maintained MV3 extension that applies dark themes to websites for reduced eye strain and battery savings. It offers extensive customization options and a large library of site-specific dark modes.',
    whatHappened: [
      'Dark Reader was updated to support Manifest V3.',
      'The extension remains actively maintained with regular updates.',
      'It has become an essential accessibility tool for millions of users.',
    ],
    migrationSteps: [
      'No migration needed if Dark Reader is working for you.',
      'Review settings for site-specific dark mode adjustments.',
      'Export settings as a backup if reinstalling.',
    ],
    safetyNotes: [
      'Only install Dark Reader from the official Chrome Web Store.',
      'Dark Reader is open source, allowing code review.',
      'Review permissions — the extension needs access to modify page appearance.',
    ],
    alternatives: [
      {
        name: 'Night Eye',
        slug: 'night-eye',
        bestFor: 'Users wanting multiple dark mode algorithms and additional features',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/night-eye-dark-mode/dkgenhnfpjjgfhognpppplpbkjdfaoik',
        pros: [
          'Multiple dark mode algorithms',
          'Additional productivity features',
          'Site-specific customization',
        ],
        cons: [
          'May have a premium version with additional features',
          'Different interface than Dark Reader',
        ],
        note: 'Night Eye offers multiple dark mode rendering algorithms and productivity features alongside dark mode.',
      },
    ],
    faqs: [
      {
        question: 'Does Dark Reader affect all websites?',
        answer:
          'Dark Reader applies dark themes to most websites automatically. For sites with custom styling, you can use the extension settings to force-enable dark mode or create custom site overrides.',
      },
      {
        question: 'Is Dark Reader open source?',
        answer:
          'Yes. Dark Reader is fully open source and its code is available on GitHub for community review.',
      },
      {
        question: 'Does Dark Reader save battery?',
        answer:
          'On OLED screens, using dark mode through Dark Reader can significantly reduce power consumption since black pixels are turned off. On LCD screens, the battery savings are minimal.',
      },
    ],
    sources: [
      {
        title: 'Dark Reader Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh',
        publisher: 'Chrome Web Store',
        sourceType: 'chrome-web-store',
        reliability: 'primary',
        supports: 'Dark Reader MV3 availability, listing status, and publisher identity',
      },
      {
        title: 'Dark Reader GitHub Repository',
        url: 'https://github.com/darkreader/darkreader',
        publisher: 'Dark Reader Contributors',
        sourceType: 'github',
        reliability: 'secondary',
        supports: 'Dark Reader open-source status, code transparency, and recent development activity',
      },
      {
        title: 'Chrome Manifest V2 Deprecation Timeline',
        url: 'https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline',
        publisher: 'Google Chrome Developers',
        sourceType: 'chrome-developers',
        reliability: 'primary',
        supports: 'Official Chrome MV2 deprecation timeline — Dark Reader was updated to MV3',
      },
    ],
    lastUpdated: '2026-05-18',
  },
  {
    slug: 'onetab',
    name: 'OneTab',
    aliases: [
      'OneTab',
      'tab consolidation',
      'save tabs',
      'tab list',
      'reduce tabs',
      'tab manager',
    ],
    category: 'Tab Management',
    summary:
      'A tab management extension that converts open tabs into a list, reducing memory usage and helping you organize your browsing sessions.',
    status: 'active_mv3',
    riskLevel: 'low',
    issueSummary:
      'OneTab is actively maintained as an MV3 extension for Chrome. It is one of the most popular tab management tools with millions of users.',
    shortAnswer:
      'OneTab is an actively maintained MV3 extension that consolidates open tabs into a shareable list, reducing memory usage. It works in modern Chrome and offers both manual consolidation and tab sharing features.',
    whatHappened: [
      'OneTab was updated to support Manifest V3.',
      'The extension remains actively maintained with regular updates.',
      'It has become a standard tool for managing tab overload.',
    ],
    migrationSteps: [
      'No migration needed if OneTab is working for you.',
      'Export saved tab lists as a backup if reinstalling.',
      'OneTab automatically saves your tab lists between sessions.',
    ],
    safetyNotes: [
      'Only install OneTab from the official Chrome Web Store.',
      'Review the privacy policy to understand data handling.',
      'OneTab stores tab URLs on your device by default.',
    ],
    alternatives: [
      {
        name: 'Auto Tab Discard',
        slug: 'auto-tab-discard',
        bestFor: 'Users wanting automatic tab resource management',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/auto-tab-discard-suspend/jhnleheckmknfcgijgkadoemagpecfol',
        pros: [
          'Automatic discarding of inactive tabs',
          'Customizable discard rules',
          'No manual consolidation needed',
        ],
        cons: [
          'Tabs reload when clicked after discarding',
          'Different workflow than OneTab',
        ],
        note: 'Auto Tab Discard automatically manages tab resources, unlike OneTab which requires manual consolidation.',
      },
      {
        name: 'Session Buddy',
        slug: 'session-buddy',
        bestFor: 'Users wanting comprehensive session management with organization',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/session-buddy/iancjfoljcpenaloeigejedmfpl药物治疗',
        pros: [
          'Save and organize multiple sessions',
          'Named session collections',
          'Window-based session management',
        ],
        cons: [
          'More complex than OneTab',
          'May require more setup',
        ],
        note: 'Session Buddy offers deeper session organization features beyond simple tab consolidation.',
      },
    ],
    faqs: [
      {
        question: 'Does OneTab save my tabs permanently?',
        answer:
          'OneTab stores your tab lists locally on your device. You can restore tabs from the list at any time. Premium features may include cloud sync.',
      },
      {
        question: 'Is OneTab safe?',
        answer:
          'Yes. OneTab is a widely-used and reputable extension. It stores tab URLs on your local device and only sends data if you use the share feature.',
      },
      {
        question: 'How much memory does OneTab save?',
        answer:
          'OneTab converts open tabs into a list, which releases the memory used by those tabs. The actual savings depend on how many tabs you have open and their content.',
      },
    ],
    sources: [
      {
        title: 'OneTab Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/onetab/chphlpgkkbolifaimnlloiipkdnihall',
        publisher: 'Chrome Web Store',
      },
      {
        title: 'OneTab Official Website',
        url: 'https://www.one-tab.com/',
        publisher: 'OneTab',
      },
    ],
    lastUpdated: '2026-05-18',
  },
  {
    slug: 'video-downloadhelper',
    name: 'Video DownloadHelper',
    aliases: [
      'Video DownloadHelper',
      'video downloader',
      'download videos',
      'video helper',
      'net-downloadHelper',
    ],
    category: 'Download Manager',
    summary:
      'A video downloading extension for Chrome that detects and downloads videos from web pages.',
    status: 'affected_by_mv2',
    riskLevel: 'medium',
    issueSummary:
      'Video DownloadHelper may be affected by Chrome Manifest V2 deprecation in Chrome 138 and later. The extension developer has been transitioning to MV3-compatible versions.',
    shortAnswer:
      'Video DownloadHelper is being affected by Chrome MV2 deprecation. The developer has released MV3-compatible updates. Users should ensure they have the latest version from the Chrome Web Store. Alternatives include browser-native download features and desktop video tools.',
    whatHappened: [
      'Chrome 138 disabled all Manifest V2 extensions by default.',
      'Video DownloadHelper has been transitioning to MV3-compatible versions.',
      'Some older versions of the extension may no longer function in Chrome 138 and later.',
      'The developer has released updates addressing MV3 compatibility.',
    ],
    migrationSteps: [
      'Update Video DownloadHelper to the latest version from the Chrome Web Store.',
      'If the extension no longer works, look for the latest MV3-compatible version.',
      'Test the updated extension with common video sources.',
      'For unsupported sites, consider desktop video download tools.',
    ],
    safetyNotes: [
      'Only install Video DownloadHelper from the official Chrome Web Store.',
      'Be aware that downloading copyrighted content may violate terms of service or laws.',
      'Review permissions before installation.',
    ],
    alternatives: [
      {
        name: 'Chrono Download Manager',
        slug: 'chrono-download-manager',
        bestFor: 'Users wanting a general-purpose download manager with broad site support',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/chrono-download-manager/mciogjhjfcciiohedkfgkfpcarpddoii',
        pros: [
          'Download scheduling capabilities',
          'Automatic filename patterns',
          'Folder organization features',
        ],
        cons: [
          'May not support all video sites',
          'Different workflow than Video DownloadHelper',
        ],
        note: 'Chrono Download Manager offers comprehensive download management for various file types.',
      },
      {
        name: 'Browser Native Downloads',
        slug: 'browser-native-downloads',
        bestFor: 'Users preferring simplicity without extension overhead',
        status: 'active_mv3',
        pros: [
          'Built into Chrome, no extension needed',
          'Reliable and straightforward',
          'Integrated with browser UI',
        ],
        cons: [
          'Limited batch download features',
          'No video detection',
        ],
        note: 'Chrome native downloads are reliable for direct video links, though they do not detect videos on pages like dedicated download extensions.',
      },
    ],
    faqs: [
      {
        question: 'Is Video DownloadHelper still working in Chrome?',
        answer:
          'The latest version of Video DownloadHelper supports Manifest V3 and works in current Chrome versions. If you are using an older version, update from the Chrome Web Store.',
      },
      {
        question: 'Can Video DownloadHelper download from all websites?',
        answer:
          'Video DownloadHelper can download videos from many sites, but some websites use streaming protocols or encryption that prevent downloading. Support varies by site.',
      },
    ],
    sources: [
      {
        title: 'Video DownloadHelper Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/video-downloadhelper/lmegbjnfcocmkpcgfleegnjjhhcoiocj',
        publisher: 'Chrome Web Store',
        sourceType: 'chrome-web-store',
        reliability: 'primary',
        supports: 'Video DownloadHelper MV3 availability, listing status, and publisher identity',
      },
      {
        title: 'Video DownloadHelper Official Website',
        url: 'https://www.downloadhelper.net/',
        publisher: 'ACLAP (DownloadHelper)',
        sourceType: 'official-website',
        reliability: 'secondary',
        supports: 'Video DownloadHelper developer information and feature documentation',
      },
      {
        title: 'Chrome Manifest V2 Deprecation Timeline',
        url: 'https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline',
        publisher: 'Google Chrome Developers',
        sourceType: 'chrome-developers',
        reliability: 'primary',
        supports: 'Official Chrome MV2 deprecation timeline — Video DownloadHelper was updated to MV3',
      },
    ],
    lastUpdated: '2026-05-18',
  },
  {
    slug: 'user-agent-switcher',
    name: 'User-Agent Switcher',
    aliases: [
      'User-Agent Switcher',
      'user agent switcher',
      'change user agent',
      'UA switcher',
      'browser spoofing',
    ],
    category: 'Developer Tool',
    summary:
      'A developer tool for quickly switching between different browser user-agent strings to test website responsiveness and compatibility.',
    status: 'active_mv3',
    riskLevel: 'medium',
    issueSummary:
      'User-Agent Switcher and similar tools are available as MV3 extensions. Users may explore alternatives for specific testing needs.',
    shortAnswer:
      'User-Agent Switcher is available as an MV3-compatible extension in the Chrome Web Store. It allows developers to test websites across different browser user agents. Requestly and similar API testing tools offer more comprehensive developer features.',
    whatHappened: [
      'User-Agent Switcher was updated to support Manifest V3.',
      'Similar tools like Requestly offer broader developer capabilities.',
      'Chrome DevTools also supports user agent emulation natively.',
    ],
    migrationSteps: [
      'No migration needed if User-Agent Switcher is working for you.',
      'Explore Chrome DevTools built-in device emulation as an alternative.',
      'Requestly offers user-agent switching alongside broader testing features.',
    ],
    safetyNotes: [
      'Only install user-agent switchers from the official Chrome Web Store.',
      'Using user-agent switching for deceptive purposes may violate website terms of service.',
      'Review permissions carefully.',
    ],
    alternatives: [
      {
        name: 'Requestly',
        slug: 'requestly',
        bestFor: 'Users wanting comprehensive API testing and mocking capabilities',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/requestly-redirect-url-hea/mdnleldcmiljblolnjhpnblkcekpdkpa',
        pros: [
          'Advanced API mocking and debugging',
          'User-agent switching capability',
          'Request and response modification',
          'Team collaboration features',
        ],
        cons: [
          'More complex interface',
          'May be excessive for simple user-agent switching',
        ],
        note: 'Requestly is a comprehensive API development tool that includes user-agent switching among many features.',
      },
      {
        name: 'Chrome DevTools',
        slug: 'chrome-devtools',
        bestFor: 'Users preferring built-in browser developer tools',
        status: 'active_mv3',
        pros: [
          'Built into Chrome, no extension needed',
          'Device mode emulation',
          'Comprehensive developer features',
        ],
        cons: [
          'Less persistent user-agent settings',
          'Requires DevTools to be open',
        ],
        note: 'Chrome DevTools includes device mode and network conditions settings for user-agent testing without installing an extension.',
      },
    ],
    faqs: [
      {
        question: 'Is User-Agent Switcher safe?',
        answer:
          'User-Agent Switcher from the official Chrome Web Store is generally safe. However, it requires permissions to modify network requests. Use caution and verify the developer before installing similar tools from unknown sources.',
      },
      {
        question: 'Can I use Chrome DevTools instead of User-Agent Switcher?',
        answer:
          'Yes. Chrome DevTools includes device emulation mode where you can set custom user-agent strings. Open DevTools (F12), go to the Device Toolbar, and use the Edit device types option.',
      },
    ],
    sources: [
      {
        title: 'User-Agent Switcher Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/user-agent-switcher/abgpipoelcvcncpcgapdmhbkfklelamd',
        publisher: 'Chrome Web Store',
      },
      {
        title: 'Chrome DevTools Device Emulation',
        url: 'https://developer.chrome.com/docs/devtools/device-mode/',
        publisher: 'Google Chrome Developers',
      },
    ],
    lastUpdated: '2026-05-18',
  },
  {
    slug: 'grammarly',
    name: 'Grammarly',
    aliases: [
      'Grammarly',
      'grammar checker',
      'writing assistant',
      'spell check',
      'writing tool',
      'grammarly extension',
    ],
    category: 'Writing Assistant',
    summary:
      'A writing assistant extension that checks grammar, spelling, and style in real time as you type across the web.',
    status: 'active_mv3',
    riskLevel: 'low',
    issueSummary:
      'Grammarly is actively maintained and available for Chrome as an MV3-compatible extension.',
    shortAnswer:
      'Grammarly is actively maintained and works in modern Chrome as an MV3-compatible extension. It provides real-time grammar, spelling, and style suggestions. For privacy-conscious users, LanguageTool is an open-source alternative with similar features.',
    whatHappened: [
      'Grammarly was updated to support Manifest V3.',
      'The extension remains actively maintained with regular improvements.',
      'It has become one of the most popular writing assistant tools.',
    ],
    migrationSteps: [
      'No migration needed if Grammarly is working for you.',
      'Ensure you have the latest version from the Chrome Web Store.',
      'Review Grammarly settings for keyboard shortcut customization.',
    ],
    safetyNotes: [
      'Grammarly requires access to text you type to provide suggestions.',
      'Review Grammarly privacy policy to understand data handling.',
      'Consider whether you are comfortable with a cloud-based writing assistant.',
      'For maximum privacy, consider offline alternatives.',
    ],
    alternatives: [
      {
        name: 'LanguageTool',
        slug: 'languagetool',
        bestFor: 'Users wanting an open-source writing assistant with privacy-friendly options',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/languagetool-editor-plugin/nooapdceciajlpcajjnwfcimcpbjbdhc',
        pros: [
          'Open source with community contributions',
          'Privacy-friendly with self-hosting option',
          'Supports multiple languages',
          'Free tier with generous limits',
        ],
        cons: [
          'May not have all Grammarly premium features',
          'Different suggestions interface',
        ],
        note: 'LanguageTool is an open-source grammar and style checker that offers both cloud and self-hosted options for privacy-conscious users.',
      },
      {
        name: 'Ginger Software',
        slug: 'ginger-software',
        bestFor: 'Users wanting a Grammarly alternative with translation features',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/ginger-keyboard-grammar-g/cfkogjnhkmalpjhajaonfkgihdimjpil',
        pros: [
          'Grammar and spell checking',
          'Translation features',
          'Personal dictionary',
        ],
        cons: [
          'Different interface and suggestion style',
          'Premium features may require subscription',
        ],
        note: 'Ginger Software offers grammar checking alongside translation and other language features.',
      },
    ],
    faqs: [
      {
        question: 'Is Grammarly safe to use?',
        answer:
          'Grammarly is a widely-used and reputable writing assistant. It requires access to typed text to provide suggestions. Review the privacy policy to understand how your data is handled. For maximum privacy, consider offline or self-hosted alternatives like LanguageTool.',
      },
      {
        question: 'Does Grammarly work on all websites?',
        answer:
          'Grammarly works on most websites with text input fields. It may not work on some sites that use custom text editors or block third-party extensions.',
      },
    ],
    sources: [
      {
        title: 'Grammarly Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/grammarly-ai-writing-companion/kbfnbcaeplbboakkklhjokglhavlopi',
        publisher: 'Chrome Web Store',
      },
      {
        title: 'Grammarly Official Website',
        url: 'https://www.grammarly.com/',
        publisher: 'Grammarly',
      },
    ],
    lastUpdated: '2026-05-18',
  },
  {
    slug: 'lastpass',
    name: 'LastPass',
    aliases: [
      'LastPass',
      'password manager',
      'password vault',
      'lastpass chrome',
      'lastpass extension',
    ],
    category: 'Password Manager',
    summary:
      'A popular password manager extension that stores and autofills passwords securely across websites.',
    status: 'active_mv3',
    riskLevel: 'low',
    issueSummary:
      'LastPass is actively maintained as an MV3-compatible extension. It remains one of the most widely-used password managers.',
    shortAnswer:
      'LastPass is actively maintained and available as an MV3-compatible extension for Chrome. It provides secure password storage, autofill, and multi-device sync. Bitwarden is a popular open-source alternative with similar features.',
    whatHappened: [
      'LastPass was updated to support Manifest V3.',
      'The service remains actively maintained with security updates.',
      'Password management has become increasingly important as account security grows.',
    ],
    migrationSteps: [
      'No migration needed if LastPass is working for you.',
      'Ensure you have the latest extension from the Chrome Web Store.',
      'Review security settings including multi-factor authentication.',
    ],
    safetyNotes: [
      'Use a strong master password for your LastPass vault.',
      'Enable multi-factor authentication for your LastPass account.',
      'Review trusted devices list regularly.',
      'Consider the trade-offs of cloud-based password storage.',
    ],
    alternatives: [
      {
        name: 'Bitwarden',
        slug: 'bitwarden',
        bestFor: 'Users wanting an open-source password manager with full transparency',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/bitwarden-free-password-mana/jbkfoedkleclhbkjcpacjiikfjkhgbpe',
        pros: [
          'Fully open source',
          'Self-hosting option for maximum privacy',
          'Cross-platform support',
          'Free tier with generous features',
        ],
        cons: [
          'Different interface than LastPass',
          'Some advanced features require premium',
        ],
        note: 'Bitwarden is a widely-recommended open-source password manager that offers both cloud-hosted and self-hosted options.',
      },
      {
        name: '1Password',
        slug: '1password',
        bestFor: 'Users wanting a premium password manager with strong security features',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/1password-%E2%80%93-password-agen/aeblfdkhhhdcdiifhmgabicpianfcgkj',
        pros: [
          'Strong security track record',
          'Polished user experience',
          'Comprehensive family and team plans',
          'Watchtower security alerts',
        ],
        cons: [
          'Premium-only service',
          'No free tier',
        ],
        note: '1Password is a premium password manager known for its strong security practices and polished interface.',
      },
    ],
    faqs: [
      {
        question: 'Is LastPass safe to use?',
        answer:
          'LastPass is a widely-used password manager that encrypts your vault locally before sending data to their servers. Use a strong master password and enable multi-factor authentication for best security.',
      },
      {
        question: 'Can I switch from LastPass to Bitwarden?',
        answer:
          'Yes. Both services support importing from LastPass. Bitwarden provides an import tool in its vault settings to migrate passwords from LastPass.',
      },
    ],
    sources: [
      {
        title: 'LastPass Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/lastpass-free-password-mana/hdokiejnpimakedhajhdlcegeplioahd',
        publisher: 'Chrome Web Store',
        sourceType: 'chrome-web-store',
        reliability: 'primary',
        supports: 'LastPass MV3 availability, listing status, and publisher identity',
      },
      {
        title: 'LastPass Official Website',
        url: 'https://www.lastpass.com/',
        publisher: 'LastPass',
        sourceType: 'official-website',
        reliability: 'secondary',
        supports: 'LastPass product information and feature documentation',
      },
      {
        title: 'Chrome Manifest V2 Deprecation Timeline',
        url: 'https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline',
        publisher: 'Google Chrome Developers',
        sourceType: 'chrome-developers',
        reliability: 'primary',
        supports: 'Official Chrome MV2 deprecation timeline — LastPass was updated to MV3',
      },
    ],
    lastUpdated: '2026-05-18',
  },
  {
    slug: 'bitwarden',
    name: 'Bitwarden',
    aliases: [
      'Bitwarden',
      'password manager',
      'open source password manager',
      'bitwarden chrome',
      'bitwarden extension',
    ],
    category: 'Password Manager',
    summary:
      'An open-source password manager that stores and autofills passwords securely, with optional self-hosting for maximum privacy.',
    status: 'active_mv3',
    riskLevel: 'low',
    issueSummary:
      'Bitwarden is actively maintained as an MV3-compatible extension. It is one of the most recommended open-source password managers.',
    shortAnswer:
      'Bitwarden is an actively maintained MV3-compatible password manager with full source code transparency. It offers cloud-hosted and self-hosted options, making it popular among privacy-conscious users. LastPass and 1Password are alternatives with different feature sets.',
    whatHappened: [
      'Bitwarden was updated to support Manifest V3.',
      'The project remains actively maintained with regular security updates.',
      'It has gained significant popularity as a free and open-source alternative.',
    ],
    migrationSteps: [
      'No migration needed if Bitwarden is working for you.',
      'Ensure you have the latest extension from the Chrome Web Store.',
      'Review Bitwarden settings including vault timeout and auto-fill preferences.',
    ],
    safetyNotes: [
      'Use a strong master password for your Bitwarden vault.',
      'Enable multi-factor authentication for your Bitwarden account.',
      'Consider using a self-hosted option for maximum privacy.',
      'Bitwarden is open source, allowing security audits.',
    ],
    alternatives: [
      {
        name: 'LastPass',
        slug: 'lastpass',
        bestFor: 'Users familiar with LastPass interface',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/lastpass-free-password-mana/hdokiejnpimakedhajhdlcegeplioahd',
        pros: [
          'Widely-used with familiar interface',
          'Strong feature set in free tier',
          'Cross-platform support',
        ],
        cons: [
          'Closed source compared to Bitwarden',
          'Security incidents in past',
        ],
        note: 'LastPass is a popular cloud-based password manager alternative to Bitwarden.',
      },
      {
        name: '1Password',
        slug: '1password',
        bestFor: 'Users wanting a premium password manager with polished UX',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/1password-%E2%80%93-password-agen/aeblfdkhhhdcdiifhmgabicpianfcgkj',
        pros: [
          'Strong security track record',
          'Polished and intuitive interface',
          'Comprehensive security features',
        ],
        cons: [
          'Premium-only with no free tier',
        ],
        note: '1Password is a premium password manager known for its strong security and excellent user experience.',
      },
    ],
    faqs: [
      {
        question: 'Is Bitwarden open source?',
        answer:
          'Yes. Bitwarden is fully open source and its code is available on GitHub. This allows anyone to audit the code for security vulnerabilities.',
      },
      {
        question: 'Can I self-host Bitwarden?',
        answer:
          'Yes. Bitwarden offers a self-hosted option that lets you run the entire password management system on your own servers for maximum privacy and control.',
      },
    ],
    sources: [
      {
        title: 'Bitwarden Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/bitwarden-free-password-mana/jbkfoedkleclhbkjcpacjiikfjkhgbpe',
        publisher: 'Chrome Web Store',
        sourceType: 'chrome-web-store',
        reliability: 'primary',
        supports: 'Bitwarden MV3 availability, listing status, and publisher identity',
      },
      {
        title: 'Bitwarden Official Website',
        url: 'https://bitwarden.com/',
        publisher: 'Bitwarden',
        sourceType: 'official-website',
        reliability: 'secondary',
        supports: 'Bitwarden product information, open-source status, and self-hosting options',
      },
      {
        title: 'Chrome Manifest V2 Deprecation Timeline',
        url: 'https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline',
        publisher: 'Google Chrome Developers',
        sourceType: 'chrome-developers',
        reliability: 'primary',
        supports: 'Official Chrome MV2 deprecation timeline — Bitwarden was updated to MV3',
      },
    ],
    lastUpdated: '2026-05-18',
  },
  {
    slug: 'honey',
    name: 'Honey',
    aliases: [
      'Honey',
      'honey extension',
      'coupon finder',
      'price tracker',
      'shopping extension',
      'joinhoney',
    ],
    category: 'Shopping Tool',
    summary:
      'A shopping browser extension that automatically finds and applies coupon codes at checkout and tracks price drops.',
    status: 'active_mv3',
    riskLevel: 'low',
    issueSummary:
      'Honey is actively maintained as an MV3-compatible extension. It is one of the most popular shopping utility extensions.',
    shortAnswer:
      'Honey is an actively maintained shopping utility for Chrome that automatically applies coupon codes at checkout and tracks price history. It works in modern Chrome as an MV3-compatible extension.',
    whatHappened: [
      'Honey was acquired by PayPal in 2020.',
      'The extension was updated to support Manifest V3.',
      'It remains one of the most popular shopping browser extensions.',
    ],
    migrationSteps: [
      'No migration needed if Honey is working for you.',
      'Ensure you have the latest extension from the Chrome Web Store.',
      'Review Honey settings for notification preferences.',
    ],
    safetyNotes: [
      'Honey earns revenue through affiliate links, which is disclosed in its privacy policy.',
      'Review the privacy policy to understand data collection practices.',
      'Only install from the official Chrome Web Store.',
    ],
    alternatives: [
      {
        name: 'Capital One Shopping',
        slug: 'capital-one-shopping',
        bestFor: 'Users wanting a privacy-focused coupon and price comparison tool',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/capital-one-shopping/ohniclekkjbohopadepikipbookcbpjcm',
        pros: [
          'Free and actively maintained',
          'Automatic coupon application',
          'Price comparison across retailers',
          'Proceeds support charity',
        ],
        cons: [
          'Uses affiliate links for revenue',
          'Different interface than Honey',
        ],
        note: 'Capital One Shopping (formerly Wikisum/Butter) is a free alternative that donates a portion of affiliate revenue to charity.',
      },
    ],
    faqs: [
      {
        question: 'Is Honey safe to use?',
        answer:
          'Honey is a widely-used shopping extension available on the Chrome Web Store. It earns revenue through affiliate links. Review the privacy policy to understand data practices, and only install from the official Chrome Web Store.',
      },
      {
        question: 'Does Honey share my purchase data?',
        answer:
          'Honey has a privacy policy describing how it handles data. The extension works by interacting with checkout pages. Review Honey privacy policy for specific details.',
      },
    ],
    sources: [
      {
        title: 'Honey Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/honey/bmnkcadhipjbcaoccccknpnghdcjhadp',
        publisher: 'Chrome Web Store',
      },
      {
        title: 'Honey Official Website',
        url: 'https://www.joinhoney.com/',
        publisher: 'Honey (PayPal)',
      },
    ],
    lastUpdated: '2026-05-18',
  },
  {
    slug: 'google-translate',
    name: 'Google Translate',
    aliases: [
      'Google Translate',
      'google translate extension',
      'translate web pages',
      'page translation',
      'browser translator',
    ],
    category: 'Accessibility',
    summary:
      'An official Google extension for translating web pages and selected text between languages directly in Chrome.',
    status: 'active_mv3',
    riskLevel: 'low',
    issueSummary:
      'Google Translate is the official Google extension for in-browser translation and is actively maintained as an MV3 extension.',
    shortAnswer:
      'Google Translate is the official Google extension for translating web pages and selected text directly in Chrome. It works in modern Chrome as an MV3-compatible extension. Alternatives like Microsoft Translator and DeepL offer different translation engines.',
    whatHappened: [
      'Google Translate extension was updated to support Manifest V3.',
      'Chrome has also integrated some translation features natively.',
      'The extension remains actively maintained by Google.',
    ],
    migrationSteps: [
      'No migration needed if Google Translate is working for you.',
      'Chrome also offers built-in page translation when visiting foreign language pages.',
      'Review extension settings for preferred translation behavior.',
    ],
    safetyNotes: [
      'Google Translate is an official Google product available on the Chrome Web Store.',
      'Review how Google handles translation data in the privacy policy.',
    ],
    alternatives: [
      {
        name: 'Microsoft Translator',
        slug: 'microsoft-translator',
        bestFor: 'Users preferring Microsoft translation engine',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/microsoft-translator/a发改bjkfpejawfejgijbbhbcomeghpfbj',
        pros: [
          'Powered by Microsoft Translator',
          'Multiple language support',
          'Translation history',
        ],
        cons: [
          'Different translation quality compared to Google',
          'May require Microsoft account for some features',
        ],
        note: 'Microsoft Translator offers a Chrome extension alternative with its own translation engine.',
      },
      {
        name: 'DeepL Translate',
        slug: 'deepl-translate',
        bestFor: 'Users preferring DeepL translation quality',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/deepl-translate-web-exte/fpeafhecgjkdpckiakhadpjdeckpfbpj',
        pros: [
          'Powered by DeepL translation engine',
          'Known for high-quality translations',
          'Privacy-conscious with data handling policies',
        ],
        cons: [
          'Limited language support compared to Google',
          'Free version has usage limits',
        ],
        note: 'DeepL is known for producing more natural translations in many language pairs, particularly European languages.',
      },
    ],
    faqs: [
      {
        question: 'Is Google Translate extension the same as Chrome built-in translation?',
        answer:
          'Chrome offers built-in page translation when you visit foreign language pages, prompting you to translate. The Google Translate extension provides similar functionality with additional features like selected text translation and a popup interface.',
      },
      {
        question: 'Does Google Translate extension send my text to Google?',
        answer:
          'Yes. Like all translation services, text is sent to Google servers for translation. Review the Google Translate privacy policy for details on how your data is handled.',
      },
    ],
    sources: [
      {
        title: 'Google Translate Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb',
        publisher: 'Chrome Web Store',
      },
      {
        title: 'Google Translate Official Website',
        url: 'https://translate.google.com/',
        publisher: 'Google',
      },
    ],
    lastUpdated: '2026-05-18',
  },
];

export function getExtensionBySlug(slug: string): ExtensionRecord | undefined {
  return extensions.find((ext) => ext.slug === slug);
}

export function getExtensionById(extensionId: string): ExtensionRecord | undefined {
  return extensions.find(
    (ext) =>
      ext.oldExtensionIds?.includes(extensionId) ||
      ext.currentExtensionIds?.includes(extensionId)
  );
}

export function getExtensionsByStatus(status: string): ExtensionRecord[] {
  return extensions.filter((ext) => ext.status === status);
}

export function getPopularExtensions(): ExtensionRecord[] {
  return extensions.filter((ext) =>
    ['switchyomega', 'ublock-origin', 'great-suspender', 'modheader', 'downthemall'].includes(
      ext.slug
    )
  );
}
