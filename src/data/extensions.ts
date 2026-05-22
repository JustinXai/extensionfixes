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
    lastUpdated: '2026-05-19',
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
      'Classic uBlock Origin stopped working in Chrome 138+ because Chrome disabled Manifest V2 extensions. For many Chrome users, uBlock Origin Lite is the closest MV3-compatible option from the same developer, but it does not replicate every feature of the original extension. Firefox remains a practical option for users who need full classic uBlock Origin functionality, since Firefox still supports MV2 extensions. Avoid installing random CRX copies of classic uBlock Origin from unofficial sources, because modified extensions can create privacy and security risks. The MV3-compatible ad blocker space is actively developed, and other options like AdGuard AdBlocker and Adblock Plus are available in the Chrome Web Store.',
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
          'Full MV2 feature set ? same as original uBlock Origin in Firefox',
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
          'uBlock Origin Lite is not a one-to-one replacement. It is a separate MV3-compatible extension developed by the same author. Some features work differently due to MV3 limitations, particularly dynamic filtering rules. For many Chrome users, uBlock Origin Lite is the closest MV3-compatible option from the same developer, but it is not a feature-identical replacement for classic uBlock Origin. Advanced users relying on specific MV2-only features may notice differences.',
      },
      {
        question: 'Why did Chrome disable uBlock Origin?',
        answer:
          'Chrome did not "disable" uBlock Origin for policy violations. Classic uBlock Origin stopped working because it uses Manifest V2 APIs that Chrome has deprecated. Chrome 138 and later disabled all Manifest V2 extensions by default. The extension remains safe and legitimate ? it simply requires an MV3-compatible version.',
      },
      {
        question: 'Can I install uBlock Origin CRX manually?',
        answer:
          'Installing CRX files from search results or third-party download sites is not recommended. These packages may be outdated, modified, or request unexpected permissions. Chrome may also block loading them. The recommended path is to install uBlock Origin Lite from the official Chrome Web Store listing or visit the official uBlock Origin GitHub page to verify current options.',
      },
      {
        question: 'What should I use if uBlock Origin is not working in Chrome?',
        answer:
          'Install uBlock Origin Lite from the official Chrome Web Store ? it is the MV3-compatible version developed by the same author. If uBlock Origin Lite does not meet your needs, other MV3 ad blockers like AdGuard or AdBlock are available. Firefox with classic uBlock Origin remains an option for users who need full MV2 features.',
      },
      {
        question: 'Does Chrome 140 support classic uBlock Origin?',
        answer:
          'No. Chrome 140 does not restore classic Manifest V2 extension support. Chrome disabled MV2 extensions earlier in the Chrome MV2 phase-out. Users should use MV3-compatible alternatives or a browser that still supports the classic extension behavior.',
      },
    ],
    sources: [
      {
        title: 'uBlock Origin Wiki ? About Chrome\'s "This extension may soon no longer be supported"',
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
    lastUpdated: '2026-05-22',
    atAGlance: {
      originalExtension: 'Classic uBlock Origin',
      currentStatus: 'Affected by Chrome 138 MV2 disable ? no longer works in Chrome',
      bestPracticalOption: 'uBlock Origin Lite (by the same developer)',
      bestForAdvancedUsers: 'Firefox with classic uBlock Origin (full MV2 feature set)',
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
        bestFor: 'Advanced users who need full dynamic filtering in Firefox',
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
        doNot: 'Assume all ad blockers provide equivalent blocking ? efficiency and filter quality vary significantly',
        instead: 'Test commonly visited sites with your chosen alternative to verify adequate blocking',
      },
      {
        doNot: 'Ignore filter list maintenance ? outdated lists can miss new trackers and ads',
        instead: 'Periodically update filter lists or enable automatic updates in your ad blocker settings',
      },
    ],
    keyTakeaways: [
      'Classic uBlock Origin stopped working in Chrome 138+ because Chrome disabled Manifest V2 extensions.',
      'uBlock Origin Lite is the MV3-compatible option from the same developer (Raymond Hill).',
      'Lite is not a feature-identical replacement due to MV3 limitations ? particularly reduced dynamic filtering.',
      'Firefox remains an option for users who need full classic uBlock Origin functionality.',
      'Do not install random CRX copies of classic uBlock Origin from search results.',
      'uBlock Origin Lite may require adjusting filtering modes from your previous configuration.',
    ],
    currentStatus: [
      { label: 'Classic uBlock Origin', value: 'Disabled in Chrome 138+ (MV2)', variant: 'bad' },
      { label: 'uBlock Origin Lite', value: 'Active ? MV3 from same developer', variant: 'good' },
      { label: 'Firefox support', value: 'Classic uBlock Origin works in Firefox', variant: 'good' },
    ],
    commonFailedFixes: [
      {
        tried: 'Search for "uBlock Origin CRX" to install classic uBlock Origin manually',
        whyItFails: 'CRX files from third-party sites may contain outdated code, unexpected permissions, or supply-chain risks. Chrome may block loading them.',
      },
      {
        tried: 'Assume uBlock Origin Lite behaves identically to classic uBlock Origin in all cases',
        whyItFails: 'MV3 limitations reduce dynamic filtering capabilities. For many users, uBlock Origin Lite provides satisfactory blocking for common filter lists, but advanced users relying on dynamic rules may notice differences.',
      },
      {
        doesNotWork: 'Re-enabling classic uBlock Origin in regular Chrome is not possible ? MV2 support is fully removed.',
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
      'The original Great Suspender was removed from the Chrome Web Store after a malicious version incident in 2021, and Chrome proactively disabled it for installed users. Users should avoid reinstalling old CRX copies from mirror sites because modified versions can contain unwanted code. For most Chrome users, Chrome Memory Saver is the simplest built-in replacement for tab suspension. Auto Tab Discard is a practical extension alternative for automatic tab unloading, while OneTab is better for manual tab consolidation and Workona is more focused on workspace management. The best option depends on whether you want automatic suspension, simple memory savings, or session organization.',
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
        question: 'What happened to The Great Suspender?',
        answer:
          'The original Great Suspender was a legitimate tab management extension that suspended inactive tabs to save browser memory. In late 2020, the project was sold to a new developer who introduced code that security researchers flagged as problematic. In early 2021, Google removed the extension from the Chrome Web Store and proactively disabled it for users who had installed it. The original developer had no involvement with the problematic version.',
      },
      {
        question: 'Is The Great Suspender malware?',
        answer:
          'The original version of The Great Suspender was a legitimate extension. However, after ownership changed in late 2020, the version released by the new owner contained code that security researchers identified as potentially harmful. Google disabled the extension to protect users. We recommend using established alternatives instead of trying to install any version of The Great Suspender from unofficial sources.',
      },
      {
        question: 'Is The Great Suspender still in the Chrome Web Store?',
        answer:
          'No. The Great Suspender was removed from the Chrome Web Store and proactively disabled by Google in early 2021. It is no longer available for installation from the Chrome Web Store. Searching for it may return mirror sites or similar-sounding extensions — neither of which are the original extension. Users should avoid these and use Chrome Memory Saver or Auto Tab Discard instead.',
      },
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
        question: 'What are the best Great Suspender alternatives for Chrome?',
        answer:
          'Chrome Memory Saver is the official built-in solution ? open Settings > Performance > Memory Saver and turn it on. Auto Tab Discard is a well-maintained MV3 extension from the Chrome Web Store that lets you customize which tabs are suspended. OneTab provides manual tab consolidation. Workona is an option for users who want workspace-based session management. Each has a different level of automation and control.',
      },
      {
        question: 'Are there safe alternatives to Great Suspender?',
        answer:
          'Yes. Chrome Memory Saver is built into Chrome. Auto Tab Discard is a well-maintained alternative on the Chrome Web Store. Both are safe options for managing tab memory usage.',
      },
    ],
    sources: [
      {
        title: '9to5Google ? The Great Suspender removed from Chrome Web Store for containing malware',
        url: 'https://9to5google.com/2021/02/04/the-great-suspender-extension-has-been-removed-from-chrome-web-store-for-containing-malware/',
        publisher: '9to5Google',
        sourceType: 'news',
        reliability: 'primary',
        supports: 'Removal reason, malware concern, and timeline for The Great Suspender',
      },
      {
        title: 'The Verge ? Chrome blocks The Great Suspender extension',
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
    lastUpdated: '2026-05-23',
    atAGlance: {
      originalExtension: 'The Great Suspender',
      currentStatus: 'Removed from Chrome Web Store ? disabled by Google due to malware concerns',
      bestPracticalOption: 'Chrome Memory Saver (built-in) or Auto Tab Discard (Web Store)',
      bestForAdvancedUsers: 'Auto Tab Discard (customizable discard rules)',
      mainCaution: 'Do not download CRX copies or unofficial versions of The Great Suspender ? the original was confirmed to contain unwanted code',
    },
    comparisonTable: [
      {
        option: 'Chrome Memory Saver',
        bestFor: 'Users wanting zero setup with no extra extension',
        mv3Support: 'Built-in (N/A)',
        cost: 'Free',
        openSource: 'No',
        setupDifficulty: 'None',
        mainTradeoff: 'Minimal customization ? on/off only',
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
        mainTradeoff: 'Manual only ? no automatic tab suspension',
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
    keyTakeaways: [
      'The original Great Suspender was removed and disabled by Google in 2021 due to malware concerns after ownership changed.',
      'Chrome Memory Saver is the official built-in solution ? no extension needed.',
      'Auto Tab Discard is the most customizable extension alternative for tab suspension.',
      'OneTab is manual consolidation, not automatic tab suspension.',
      'Workona is primarily workspace and session management, not a pure suspender replacement.',
      'Do not install unofficial Great Suspender CRX files ? they may contain unwanted code.',
    ],
    currentStatus: [
      { label: 'Original Great Suspender', value: 'Removed and disabled', variant: 'bad' },
      { label: 'Chrome Memory Saver', value: 'Built-in and active', variant: 'good' },
      { label: 'Auto Tab Discard', value: 'Active in Chrome Web Store', variant: 'good' },
    ],
    commonFailedFixes: [
      {
        tried: 'Install an old Great Suspender CRX from a download site',
        whyItFails: 'Chrome may block unofficial extensions, and the downloaded file may contain the unwanted code that caused the original removal.',
      },
      {
        tried: 'Install an extension with a similar name from a different developer',
        whyItFails: 'Legitimate-looking clones can have different functionality and permissions. Always verify the developer before installing.',
      },
      {
        doesNotWork: 'Great Suspender will not return to the Chrome Web Store',
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
    lastUpdated: '2026-05-21',
    atAGlance: {
      originalExtension: 'Proxy SwitchyOmega',
      currentStatus: 'Affected by Chrome 138 MV2 disable ? no longer works in Chrome',
      bestPracticalOption: 'ZeroOmega (direct fork with SwitchyOmega profile import)',
      bestForAdvancedUsers: 'FoxyProxy Standard (established tool with advanced proxy features)',
      mainCaution: 'Only install proxy managers from the official Chrome Web Store ? proxy extensions require network modification permissions',
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
        when: 'You need full SwitchyOmega behavior and do not mind switching browsers.',
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
        bestFor: 'Advanced users who need exact SwitchyOmega behavior',
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
      'Review scripts before installing ? they run with your browser privileges.',
      'Be cautious with scripts requesting broad permissions.',
      'Verify script sources before installation.',
    ],
    alternatives: [
      {
        name: 'Violentmonkey',
        slug: 'violentmonkey',
        bestFor: 'Users wanting a lightweight, open-source userscript manager',
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
        note: 'Violentmonkey is an open-source userscript manager that supports Tampermonkey-compatible scripts with a simpler interface. It is not made or maintained by Tampermonkey developers.',
      },
      {
        name: 'Browser bookmarklets',
        slug: 'browser-bookmarklets',
        bestFor: 'Users wanting to run very simple custom scripts with no extension needed',
        status: 'active_mv3',
        pros: [
          'No extension required',
          'Simple and lightweight',
          'Works across all browsers',
        ],
        cons: [
          'Not a full userscript manager',
          'Limited functionality compared to extensions',
          'No automatic script updates',
        ],
        note: 'Bookmarklets work for simple custom scripts but are not a replacement for a full userscript manager.',
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
      {
        question: 'Are userscript managers safe?',
        answer:
          'Tampermonkey is safe when installed from the official Chrome Web Store. However, individual userscripts vary in quality. Scripts run with significant browser access and can read or modify page content. Always review a script\'s code and permissions before installing it.',
      },
      {
        question: 'Should I install scripts from random websites?',
        answer:
          'No. Installing userscripts from unknown or random sources can expose your browsing data. Only install scripts from well-known repositories like Greasy Fork or OpenUserJS, or scripts whose code you have reviewed. Avoid scripts from websites you do not recognize.',
      },
      {
        question: 'Can userscripts read pages I visit?',
        answer:
          'Yes. Userscripts run on the web pages you visit and can read page content, interact with page elements, and make network requests. Before installing any userscript, review what permissions it requests and where it will run.',
      },
      {
        question: 'What is the recommended way to test a userscript?',
        answer:
          'Review the script code before installing it ? check what URLs it will run on and what permissions it requests. Install scripts one at a time and test on a non-critical site first. Use the manager to temporarily disable scripts you are not actively using.',
      },
    ],
    sources: [
      {
        title: 'Tampermonkey Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo',
        publisher: 'Tampermonkey',
        sourceType: 'chrome-web-store',
        reliability: 'primary',
        supports: 'Tampermonkey MV3 availability, listing status, and publisher identity',
      },
      {
        title: 'Tampermonkey Official Site',
        url: 'https://tampermonkey.net/',
        publisher: 'Tampermonkey',
        sourceType: 'official-website',
        reliability: 'primary',
        supports: 'Tampermonkey official documentation, download information, and script management guide',
      },
      {
        title: 'Tampermonkey GitHub Repository',
        url: 'https://github.com/tampermonkey/tampermonkey',
        publisher: 'Tampermonkey',
        sourceType: 'github',
        reliability: 'secondary',
        supports: 'Tampermonkey open-source status (partial ? editor is GPL, newer versions proprietary), development activity, and changelog',
      },
    ],
    keyTakeaways: [
      'Tampermonkey is actively maintained and works in current Chrome as an MV3 extension.',
      'Violentmonkey is a lightweight, fully open-source alternative with Tampermonkey script compatibility.',
      'Both managers support scripts from Greasy Fork and OpenUserJS.',
      'Only install scripts from sources you trust ? scripts run with browser-level access.',
      'Review @match and @grant permissions before installing any userscript.',
      'Keep your userscript manager updated to receive security patches.',
    ],
    currentStatus: [
      { label: 'Tampermonkey', value: 'Active MV3 extension ? works in current Chrome', variant: 'good' },
      { label: 'Violentmonkey', value: 'Active MV3 alternative ? open source', variant: 'good' },
      { label: 'Chrome userscript support', value: 'Both managers work in Chrome 138+ via MV3', variant: 'good' },
      { label: 'Last reviewed', value: 'May 22, 2026', variant: 'neutral' },
    ],
    commonFailedFixes: [
      {
        tried: 'Install userscripts from random mirrors or search results',
        whyItFails: 'Random script mirrors may contain modified or malicious code. Userscripts run with significant browser access ? tampered scripts can collect data or manipulate pages.',
        saferAlternative: 'Only install scripts from known repositories like Greasy Fork or OpenUserJS, or scripts you have reviewed personally.',
      },
      {
        tried: 'Import all old scripts without reviewing them',
        whyItFails: 'Old scripts may have unmaintained code, unexpected permissions, or may not work with current website layouts.',
        saferAlternative: 'Review each script before importing. Remove ones you no longer need.',
      },
      {
        tried: 'Grant broad permissions to scripts without reading their code',
        whyItFails: 'Userscripts with excessive permissions can read or modify sensitive page content. Some scripts may collect browsing data.',
        saferAlternative: "Check the script's permissions and code before installing. Avoid scripts requesting access to all websites unless necessary.",
      },
      {
        tried: 'Assume all userscript managers behave identically',
        whyItFails: 'Tampermonkey and Violentmonkey have different interfaces, update mechanisms, and some feature differences. Scripts may behave slightly differently between managers.',
        saferAlternative: 'Test scripts after switching managers to verify expected behavior.',
      },
    ],
    decisionGuide: [
      {
        choose: 'Tampermonkey',
        when: 'You want the most widely-supported userscript manager with the largest script library and built-in features.',
      },
      {
        choose: 'Violentmonkey',
        when: 'You prefer an open-source userscript manager with a simpler interface and lighter resource usage.',
      },
      {
        choose: 'Browser bookmarklets',
        when: 'You only need to run very simple custom scripts occasionally and want no extension overhead.',
      },
    ],
    lastUpdated: '2026-05-22',
  },
  {
    slug: 'violentmonkey',
    name: 'Violentmonkey',
    aliases: [
      'Violentmonkey',
      'violentmonkey chrome',
      'violentmonkey alternative',
      'violentmonkey userscript',
      'userscript manager',
      'open source script manager',
      'lightweight userscript',
      'userscript chrome mv3',
      'tampermonkey vs violentmonkey',
      'violentmonkey vs tampermonkey',
    ],
    category: 'Script Manager',
    summary:
      'An open-source userscript manager for Chrome that supports Tampermonkey-compatible scripts with a lightweight interface.',
    status: 'active_mv3',
    riskLevel: 'low',
    issueSummary:
      'Violentmonkey is an actively maintained MV3-compatible userscript manager. Users compare it with Tampermonkey for feature and interface preferences.',
    shortAnswer:
      'Violentmonkey is an open-source userscript manager used to run custom browser scripts on websites you visit. If you need a Violentmonkey alternative for Chrome, Tampermonkey is the most widely known option, while Violentmonkey remains a practical choice for users who prefer an open-source workflow. The right choice depends on script compatibility, permission expectations, browser support, and how much control you want over imported scripts. Userscript managers can run powerful code on pages you visit, so avoid random script mirrors, review script permissions, and only install scripts from sources you trust. The Violentmonkey page on Extension Fixes compares both options with migration steps, safety notes, and a full comparison table.',
    whatHappened: [
      'Violentmonkey was updated to support Manifest V3 and works in current Chrome.',
      'The project remains actively maintained by its open-source community.',
      'Users compare it with Tampermonkey for interface preferences, feature trade-offs, and resource usage.',
      'Both Violentmonkey and Tampermonkey are legitimate, maintained options with different design goals.',
    ],
    migrationSteps: [
      'Export your active scripts from Violentmonkey before switching.',
      'Review each script\'s permissions and functionality before reinstalling.',
      'Install Tampermonkey or your chosen alternative from the official Chrome Web Store.',
      'Import scripts into the new manager and verify each one works on your target sites.',
      'Remove the old extension after confirming the new setup works as expected.',
      'Disable or remove scripts you no longer use to reduce attack surface.',
    ],
    safetyNotes: [
      'Violentmonkey is open source ? code is available on GitHub for community review.',
      'Userscripts run with significant browser access ? only install scripts from sources you trust.',
      'Review script permissions before installation; scripts can read and modify page content.',
      'Avoid installing scripts from random websites, CRX mirrors, or search results.',
      'Disable or remove scripts you no longer use to reduce unnecessary browser access.',
    ],
    alternatives: [
      {
        name: 'Tampermonkey',
        slug: 'tampermonkey',
        bestFor: 'Users wanting the most widely-supported userscript manager with a large script library',
        status: 'active_mv3',
        chromeStoreUrl:
          'https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo',
        pros: [
          'Most popular userscript manager',
          'Large community and script library',
          'Rich feature set with built-in editor',
          'Active development and support',
        ],
        cons: [
          'Larger resource usage than Violentmonkey',
          'Has closed-source components compared to Violentmonkey',
        ],
        note: 'Tampermonkey is the most widely-used userscript manager. It is not made or maintained by Violentmonkey developers.',
      },
      {
        name: 'Browser bookmarklets',
        slug: 'browser-bookmarklets',
        bestFor: 'Users wanting to run very simple custom scripts with no extension needed',
        status: 'active_mv3',
        pros: [
          'No extension required',
          'Simple and lightweight',
          'Works across all browsers',
        ],
        cons: [
          'Not a full userscript manager',
          'Limited functionality compared to extensions',
          'No automatic script updates',
        ],
        note: 'Bookmarklets work for simple custom scripts but are not a replacement for a full userscript manager.',
      },
    ],
    faqs: [
      {
        question: 'What is Violentmonkey used for?',
        answer:
          'Violentmonkey is a userscript manager that lets you install and run custom JavaScript scripts (userscripts) in your browser to modify web pages, add features, or automate tasks. It supports scripts written for the Tampermonkey format, which means scripts from sites like Greasy Fork and OpenUserJS are compatible.',
      },
      {
        question: 'Is Tampermonkey a Violentmonkey alternative?',
        answer:
          'Yes. Tampermonkey is the most widely-used userscript manager and is a practical alternative to Violentmonkey. Both support the same script format and work in Chrome as MV3 extensions. The main differences are in interface design, resource usage, and feature set ? Tampermonkey has more built-in features while Violentmonkey is more lightweight.',
      },
      {
        question: 'Are userscript managers safe?',
        answer:
          'Userscript managers themselves are safe when installed from the official Chrome Web Store. However, individual userscripts vary in quality and intent. Scripts run with significant browser access and can read or modify page content. Always review a script\'s code and permissions before installing it, and only use scripts from sources you trust.',
      },
      {
        question: 'Can userscripts read pages I visit?',
        answer:
          'Yes. Userscripts run on the web pages you visit and can read page content, interact with page elements, and make network requests. This is their intended purpose ? they are designed to modify how pages behave. Before installing any userscript, review what permissions it requests and where it will run.',
      },
      {
        question: 'Should I install scripts from random websites?',
        answer:
          'No. Installing userscripts from unknown or random sources can expose your browsing data and accounts. Only install scripts from well-known repositories like Greasy Fork or OpenUserJS, or scripts whose code you have reviewed. Avoid scripts from websites you do not recognize or that appear in search results as standalone downloads.',
      },
      {
        question: 'How do I migrate scripts from Violentmonkey?',
        answer:
          'Export your scripts from Violentmonkey (usually via Options > Scripts > Export). Install your chosen alternative from the official Chrome Web Store. Then import the exported scripts into the new manager and verify each one works on the sites you need. Remove any scripts you no longer actively use.',
      },
      {
        question: 'What is the recommended way to test a userscript?',
        answer:
          'Review the script code before installing it ? look at what URLs it will run on and what permissions it requests. Install scripts one at a time and test on a non-critical site first. Use the userscript manager to temporarily disable scripts you are not actively using. If a script requests permissions that seem excessive for its stated purpose, do not install it.',
      },
      {
        question: 'Does Violentmonkey support Manifest V3?',
        answer:
          'Yes. Violentmonkey was updated to support Manifest V3 and works in current Chrome versions as an MV3 extension. The project remains actively maintained by its open-source community, and the MV3 version is available in the Chrome Web Store.',
      },
      {
        question: 'Is ScriptCat an alternative to Tampermonkey or Violentmonkey?',
        answer:
          'ScriptCat is another userscript manager option available in the Chrome Web Store. It is a separate project from both Tampermonkey and Violentmonkey, with its own development community. Users who are choosing between userscript managers may consider ScriptCat as an additional option alongside Tampermonkey and Violentmonkey, though the right choice depends on individual script compatibility, interface preferences, and specific feature needs.',
      },
      {
        question: 'Should I switch from Violentmonkey to Tampermonkey?',
        answer:
          'Whether to switch depends on your specific needs. Both Violentmonkey and Tampermonkey support Manifest V3 and work in current Chrome. Tampermonkey has a larger built-in feature set and script library, while Violentmonkey is more lightweight and fully open source. Userscript compatibility depends on the specific scripts you use, their permissions, and how they behave with different managers. If your current scripts work well in Violentmonkey, there is no urgent reason to switch.',
      },
    ],
    sources: [
      {
        title: 'Violentmonkey Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag',
        publisher: 'Chrome Web Store',
        sourceType: 'chrome-web-store',
        reliability: 'primary',
        supports: 'Violentmonkey MV3 availability, listing status, and publisher identity',
      },
      {
        title: 'Violentmonkey GitHub Repository',
        url: 'https://github.com/violentmonkey/violentmonkey',
        publisher: 'Violentmonkey Contributors',
        sourceType: 'github',
        reliability: 'secondary',
        supports: 'Open-source code transparency and development status',
      },
    ],
    lastUpdated: '2026-05-24',
    keyTakeaways: [
      'Violentmonkey is actively maintained as an MV3-compatible userscript manager.',
      'Tampermonkey is the most widely-used alternative with a larger script ecosystem.',
      'Violentmonkey is open source; Tampermonkey has closed-source components.',
      'Both support the same script format ? scripts from Greasy Fork work with either.',
      'Only install userscripts from sources you trust ? random mirrors can be risky.',
      'Userscripts run on pages you visit and can access page content ? review permissions.',
    ],
    currentStatus: [
      { label: 'Violentmonkey', value: 'Active MV3 extension ? works in current Chrome', variant: 'good' },
      { label: 'Tampermonkey', value: 'Active MV3 extension ? most widely-used userscript manager', variant: 'good' },
      { label: 'Chrome userscript support', value: 'Both managers work in Chrome 138+ via MV3 versions', variant: 'good' },
      { label: 'Last reviewed', value: 'May 24, 2026', variant: 'neutral' },
    ],
    comparisonTable: [
      {
        option: 'Violentmonkey',
        bestFor: 'Users who want a lightweight, open-source userscript manager',
        mv3Support: 'Yes',
        cost: 'Free',
        openSource: 'Yes',
        setupDifficulty: 'Easy',
        mainTradeoff: 'Fewer built-in features than Tampermonkey',
      },
      {
        option: 'Tampermonkey',
        bestFor: 'Users who want the most widely-supported manager with the largest script library',
        mv3Support: 'Yes',
        cost: 'Free',
        openSource: 'Partial',
        setupDifficulty: 'Easy',
        mainTradeoff: 'More resource-intensive; has closed-source components',
      },
      {
        option: 'Browser bookmarklets',
        bestFor: 'Users who need very simple custom scripts without an extension',
        mv3Support: 'N/A',
        cost: 'Free',
        openSource: 'N/A',
        setupDifficulty: 'Very Easy',
        mainTradeoff: 'Not a full userscript manager ? limited functionality',
      },
    ],
    decisionGuide: [
      {
        choose: 'Violentmonkey',
        when: 'You prefer a lightweight, open-source manager and mainly use established scripts from trusted repositories.',
      },
      {
        choose: 'Tampermonkey',
        when: 'You want the largest script library, built-in editor, and most community support.',
      },
      {
        choose: 'Browser bookmarklets',
        when: 'You only need to run very simple custom scripts occasionally and want no extension overhead.',
      },
    ],
    commonFailedFixes: [
      {
        tried: 'Install userscripts from random mirrors or search results',
        whyItFails: 'Random script mirrors may contain modified or malicious code. Userscripts run with significant browser access ? tampered scripts can collect data or manipulate pages.',
        saferAlternative: 'Only install scripts from known repositories like Greasy Fork or OpenUserJS, or scripts you have reviewed personally.',
      },
      {
        tried: 'Import all old scripts without reviewing them',
        whyItFails: 'Old scripts may have unmaintained code, unexpected permissions, or may not work with current website layouts.',
        saferAlternative: 'Review each script before importing. Remove ones you no longer need.',
      },
      {
        tried: 'Grant broad permissions to scripts without reading their code',
        whyItFails: 'Userscripts with excessive permissions can read or modify sensitive page content. Some scripts may collect browsing data.',
        saferAlternative: 'Check the script\'s permissions and code before installing. Avoid scripts requesting access to all websites unless necessary.',
      },
      {
        tried: 'Assume all userscript managers behave identically',
        whyItFails: 'Violentmonkey and Tampermonkey have different interfaces, update mechanisms, and some feature differences. Scripts may behave slightly differently between managers.',
        saferAlternative: 'Test scripts after switching managers to verify expected behavior.',
      },
    ],
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
        title: 'Auto Tab Discard ? WebExtensions.org Listing',
        url: 'https://webextension.org/listing/tab-discard.html',
        publisher: 'WebExtensions.org',
      },
    ],
    lastUpdated: '2026-05-22',
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
      'FoxyProxy is a practical Chrome proxy manager for users who need multiple profiles and pattern-based switching. ZeroOmega is a community fork designed for SwitchyOmega-style migration. Both are MV3-compatible.',
    shortAnswer:
      'FoxyProxy remains a practical Chrome proxy manager for users who need multiple proxy profiles, pattern-based switching, and quick control over browser proxy settings. If you are migrating from SwitchyOmega, ZeroOmega may feel more familiar because it is a community fork designed for modern Manifest V3 browsers. FoxyProxy is a better fit when you want an established proxy manager with long-running Chrome and Firefox support. The best choice depends on whether you need SwitchyOmega-style rules, FoxyProxy-style profiles, or a simpler one-click proxy switcher.',
    whatHappened: [
      'FoxyProxy released MV3-compatible versions for Chrome and remains actively maintained.',
      'The extension is available on the Chrome Web Store with long-running Chrome and Firefox support.',
      'ZeroOmega emerged as a community-maintained fork of Proxy SwitchyOmega, specifically designed for MV3 browsers.',
      'Both FoxyProxy and ZeroOmega solve overlapping but not identical proxy management needs.',
    ],
    migrationSteps: [
      'Export or document your current proxy profiles.',
      'List the websites or patterns that require a proxy.',
      'Choose FoxyProxy for profile-based switching or ZeroOmega for SwitchyOmega-style migration.',
      'Recreate only the rules you still need.',
      'Test with a low-risk website first.',
      'Remove old or duplicate proxy extensions.',
    ],
    safetyNotes: [
      'Only install FoxyProxy from the official Chrome Web Store.',
      'Review permissions ? proxy extensions need network modification access.',
      'Verify the developer identity before installing.',
      'Avoid unofficial CRX copies of old proxy extensions.',
      'Proxy extensions can affect all browsing traffic ? remove unused extensions.',
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
        question: 'Is FoxyProxy still available for Chrome?',
        answer:
          'Yes. FoxyProxy is actively maintained and available on the Chrome Web Store as an MV3-compatible extension. It works with modern Chrome versions including Chrome 138 and later.',
      },
      {
        question: 'Is FoxyProxy a SwitchyOmega replacement?',
        answer:
          'Not exactly. FoxyProxy and SwitchyOmega use different workflows and rule models. FoxyProxy is profile-based, while SwitchyOmega uses switch rules and pattern matching. ZeroOmega is a community fork of SwitchyOmega designed specifically for SwitchyOmega users migrating to MV3 and may feel more familiar.',
      },
      {
        question: 'Is ZeroOmega the same as SwitchyOmega?',
        answer:
          'No. ZeroOmega is a community fork of Proxy SwitchyOmega, designed for MV3 browsers. It aims to replicate SwitchyOmega\'s interface and import functionality, but it is a separate project maintained by a different community developer. It is not developed or endorsed by the original SwitchyOmega team.',
      },
      {
        question: 'Should I choose FoxyProxy or ZeroOmega?',
        answer:
          'Choose FoxyProxy if you need profile-based proxy switching and established multi-browser support. Choose ZeroOmega if you are migrating from SwitchyOmega and want a familiar interface with direct profile import. Both solve overlapping needs but have different workflows.',
      },
      {
        question: 'Can a proxy extension see my browsing traffic?',
        answer:
          'Yes. A proxy extension routes your browser traffic through the configured proxy server. This means the proxy provider can see metadata about your browsing (URLs, domains) depending on how the proxy is configured. Use a trusted proxy provider and HTTPS sites to reduce exposure.',
      },
      {
        question: 'Is it safe to install old proxy extension CRX files?',
        answer:
          'No. Installing old proxy extension CRX files from random mirrors is not safe. Proxy extensions require broad network permissions, and unofficial copies may be modified to collect or redirect your browsing traffic. Always install from the official Chrome Web Store.',
      },
      {
        question: 'Does FoxyProxy include proxy servers?',
        answer:
          'No. FoxyProxy is a proxy management tool ? it helps you switch between proxy configurations ? but it does not provide proxy servers. You need to set up your own proxy server or subscribe to a proxy service separately.',
      },
      {
        question: 'What is the simplest Chrome proxy option?',
        answer:
          'For basic single-proxy setups, Chrome\'s built-in system proxy settings under Settings > Advanced > Proxy are the simplest option. However, they do not support multiple profiles, auto-switch rules, or pattern-based routing. An extension like FoxyProxy or ZeroOmega is more convenient if you manage multiple proxy configurations.',
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
        title: 'ZeroOmega Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/proxy-switchyomega-3-zero/pfnededegaaopdmhkdmcofjmoldfiped',
        publisher: 'Chrome Web Store',
        sourceType: 'chrome-web-store',
        reliability: 'primary',
        supports: 'ZeroOmega MV3 availability, listing status, and community fork status',
      },
      {
        title: 'ZeroOmega GitHub Repository',
        url: 'https://github.com/zero-peak/ZeroOmega',
        publisher: 'ZeroOmega Community',
        sourceType: 'github',
        reliability: 'secondary',
        supports: 'ZeroOmega open-source project, MV3-compatible fork of Proxy SwitchyOmega',
      },
      {
        title: 'Manifest V3 migration for extensions',
        url: 'https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3',
        publisher: 'Google Chrome Developers',
        sourceType: 'chrome-developers',
        reliability: 'secondary',
        supports: 'Chrome extension platform and Manifest V3 migration context ? clarifies why maintained extensions like FoxyProxy have updated to MV3',
      },
    ],
    lastUpdated: '2026-05-22',
    atAGlance: {
      originalExtension: 'FoxyProxy',
      currentStatus: 'Active and MV3-compatible ? works in current Chrome',
      bestPracticalOption: 'FoxyProxy Standard (already working, no migration needed)',
      bestForAdvancedUsers: 'ZeroOmega (open source fork of SwitchyOmega with direct profile import)',
      mainCaution: 'Proxy extensions require network modification permissions ? only install from the official Chrome Web Store',
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
    keyTakeaways: [
      'FoxyProxy is actively maintained as an MV3 extension and works in current Chrome.',
      'ZeroOmega is a community fork of Proxy SwitchyOmega designed for MV3 browsers, not developed by the original SwitchyOmega team.',
      'Choose ZeroOmega if you need SwitchyOmega-style rules and direct profile import.',
      'Choose FoxyProxy if you need an established proxy manager with multi-profile switching.',
      'Chrome system proxy settings are the simplest option for single-proxy setups.',
      'Proxy extensions require broad network permissions ? only install from the official Chrome Web Store.',
    ],
    currentStatus: [
      { label: 'FoxyProxy', value: 'Active MV3 extension ? works in current Chrome', variant: 'good' },
      { label: 'ZeroOmega', value: 'Active MV3 community fork ? direct SwitchyOmega profile import', variant: 'good' },
      { label: 'Chrome system proxy', value: 'Built-in ? no extension needed', variant: 'neutral' },
    ],
    commonFailedFixes: [
      {
        tried: 'Install old proxy extension packages from unofficial mirror sites',
        whyItFails: 'Old proxy extension packages may be outdated, modified, or unsafe. Proxy extensions can affect all browsing traffic, so use maintained Chrome Web Store listings or verified project sources.',
        saferAlternative: 'Install from the official Chrome Web Store only.',
      },
      {
        tried: 'Assume FoxyProxy and ZeroOmega work the same way',
        whyItFails: 'They have different workflows. FoxyProxy is profile-based; ZeroOmega uses SwitchyOmega-style switch rules.',
        saferAlternative: 'Choose based on your workflow needs: profile switching (FoxyProxy) vs. rule-based switching (ZeroOmega).',
      },
      {
        tried: 'Use a proxy extension without verifying the proxy provider is trustworthy',
        whyItFails: 'Proxy extensions route your browsing traffic through a server. An untrustworthy proxy provider can see your browsing metadata.',
        saferAlternative: 'Use a reputable proxy service and HTTPS sites to reduce exposure.',
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
      'Review permissions ? session managers need access to tabs and windows.',
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
    lastUpdated: '2026-05-21',
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
      'Review styles before installing ? they run CSS on web pages.',
      'Be cautious with styles requesting access to all websites.',
      'Stylus is open source and does not collect user data unlike its predecessor.',
    ],
    alternatives: [
      {
        name: 'Dark Reader',
        slug: 'dark-reader',
        bestFor: 'Automatic dark mode across many websites without managing CSS',
        status: 'active_mv3',
        chromeStoreUrl: 'https://chromewebstore.google.com/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh',
        pros: [
          'Automatic dark mode detection and application',
          'Works across many popular websites out of the box',
          'Per-site enable and disable controls',
        ],
        cons: [
          'Not a full CSS manager — limited to dark mode and basic filters',
          'Can affect site rendering on some pages',
        ],
        note: 'Dark Reader is better for automatic dark mode, not for full custom CSS workflows.',
      },
      {
        name: 'Browser bookmarks/snippets',
        slug: 'browser-bookmarklets',
        bestFor: 'Very small personal tweaks without an extension',
        status: 'active_mv3',
        pros: [
          'No extension needed',
          'Works across browsers',
        ],
        cons: [
          'Not a full userstyle manager',
          'Very limited functionality',
        ],
        note: 'Browser bookmarks or snippets are only practical for very small personal CSS tweaks, not for managing multiple site styles.',
      },
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
        question: 'What is Stylus used for?',
        answer:
          'Stylus is a Chrome extension that lets you apply custom CSS styles to websites. You can install userstyles from repositories like Stylebots or userstyles.org, write your own CSS, or import styles created by others. It is commonly used for dark mode, custom site themes, and removing unwanted page elements.',
      },
      {
        question: 'What is the best Stylus alternative for Chrome?',
        answer:
          'The best alternative depends on your goal. For automatic dark mode, Dark Reader is a practical option. For very small personal tweaks, browser bookmarks or built-in CSS snippets may be enough. Stylus itself remains a maintained and widely-used tool for full custom CSS control.',
      },
      {
        question: 'Is Dark Reader a Stylus alternative?',
        answer:
          'Dark Reader is not a direct Stylus alternative. Dark Reader automatically applies dark mode to websites, while Stylus lets you write and apply any custom CSS. If your main goal is dark mode, Dark Reader is simpler. If you want full CSS control and custom site modifications, Stylus is the right tool.',
      },
      {
        question: 'Can I use custom CSS in Chrome without an extension?',
        answer:
          'Chrome does not have a built-in way to apply custom CSS to websites. Browser bookmarklets can run small CSS snippets as one-off actions, but they are not a replacement for a full userstyle manager like Stylus. For persistent custom styles across sites, a dedicated extension is needed.',
      },
      {
        question: 'Are userstyles safe?',
        answer:
          'Userstyles are generally safe when sourced from well-known repositories like Stylebots or userstyles.org and reviewed before enabling. However, styles from unknown mirrors or abandoned repositories may contain unwanted code, break site layouts, or have maintenance gaps. Review a style\'s rules and site match patterns before enabling it broadly.',
      },
      {
        question: 'Can userstyles break websites?',
        answer:
          'Yes. Poorly written or outdated userstyles can conflict with a website\'s own CSS, causing broken layouts, missing elements, or incorrect formatting. Use per-site disable controls to quickly fix issues, and remove or disable styles that consistently cause problems.',
      },
      {
        question: 'What happened to Stylish?',
        answer:
          'The original Stylish extension was removed from the Chrome Web Store after researchers discovered it was collecting users browsing history. Stylus was created by the community as a privacy-respecting replacement without data collection.',
      },
      {
        question: 'Is Stylus safe?',
        answer:
          'Yes. Stylus is an open-source extension that does not collect any user data. It is widely used and recommended by users who prefer transparent extension code as a replacement for Stylish.',
      },
      {
        question: 'Can I use Stylish styles with Stylus?',
        answer:
          'Yes. Stylus is compatible with styles written for Stylish. Most userstyles from userstyles.org work with Stylus without modification.',
      },
      {
        question: 'How do I migrate from Stylus?',
        answer:
          'Export your active styles from Stylus (Options > Styles > Export). List which sites you need styles for and whether you need full CSS control or just dark mode. For dark mode, try Dark Reader or built-in browser settings. For full CSS control, keep Stylus or find an actively maintained alternative. Test replacements on non-critical sites before switching fully.',
      },
    ],
    sources: [
      {
        title: 'Stylus Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne',
        publisher: 'Stylus',
        sourceType: 'chrome-web-store',
        reliability: 'primary',
        supports: 'Stylus MV3 availability, listing status, and publisher identity',
      },
      {
        title: 'Stylus GitHub Repository',
        url: 'https://github.com/openstyles/stylus',
        publisher: 'OpenStyles Community',
        sourceType: 'github',
        reliability: 'primary',
        supports: 'Stylus open-source development status and documentation',
      },
      {
        title: 'Dark Reader Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh',
        publisher: 'Dark Reader',
        sourceType: 'chrome-web-store',
        reliability: 'primary',
        supports: 'Dark Reader MV3 availability and listing status',
      },
    ],
    lastUpdated: '2026-05-24',
    keyTakeaways: [
      'Stylus is mainly for custom CSS and userstyles.',
      'Dark Reader is better for automatic dark mode, not full CSS workflow.',
      'Simple browser settings may be enough for basic appearance changes.',
      'Userstyles from unknown sources can break pages or hide important UI.',
      'Review style rules and site matches before enabling them.',
    ],
    currentStatus: [
      { label: 'Stylus status', value: 'Custom CSS and userstyle extension — actively maintained MV3 version', variant: 'good' },
      { label: 'Main alternative', value: 'Dark Reader for automatic dark mode', variant: 'neutral' },
      { label: 'Main risk', value: 'Unreviewed styles can affect website UI', variant: 'bad' },
      { label: 'Best practice', value: 'Use trusted styles and review site matches', variant: 'good' },
      { label: 'Last reviewed', value: 'May 24, 2026', variant: 'neutral' },
    ],
    comparisonTable: [
      {
        option: 'Stylus',
        bestFor: 'Custom CSS and userstyles',
        mv3Support: 'Yes',
        cost: 'Free',
        openSource: 'Yes',
        setupDifficulty: 'Moderate',
        mainTradeoff: 'Requires reviewing styles — not a one-click dark mode tool',
      },
      {
        option: 'Dark Reader',
        bestFor: 'Automatic dark mode',
        mv3Support: 'Yes',
        cost: 'Free',
        openSource: 'Yes',
        setupDifficulty: 'Easy',
        mainTradeoff: 'Not a custom CSS manager — limited to dark mode and basic filters',
      },
      {
        option: 'Browser bookmarks/snippets',
        bestFor: 'Very small personal tweaks',
        mv3Support: 'N/A',
        cost: 'Free',
        openSource: 'N/A',
        setupDifficulty: 'Very Easy',
        mainTradeoff: 'Not a full userstyle manager — very limited functionality',
      },
      {
        option: 'Unknown style mirrors',
        bestFor: 'Not recommended',
        mv3Support: 'Unknown',
        cost: 'Unknown',
        openSource: 'Unknown',
        setupDifficulty: 'Unknown',
        mainTradeoff: 'Broken UI and security risk — avoid',
      },
    ],
    decisionGuide: [
      {
        choose: 'Stylus',
        when: 'You need site-specific CSS control and want to manage custom styles across multiple websites.',
      },
      {
        choose: 'Dark Reader',
        when: 'You mostly want automatic dark mode without managing CSS styles manually.',
      },
      {
        choose: 'Browser bookmarks/snippets',
        when: 'You only need very small personal tweaks occasionally and want no extension overhead.',
      },
      {
        choose: 'Unknown style mirrors',
        when: 'Never. Avoid unknown style mirrors or abandoned userstyles that lack active maintenance.',
      },
    ],
    commonFailedFixes: [
      {
        tried: 'Install userstyles from unknown mirrors',
        whyItFails: 'Styles from unknown sources may contain unwanted code, break site layouts, or have outdated selectors that no longer work.',
        saferAlternative: 'Use styles from well-known repositories like Stylebots or userstyles.org. Review styles before enabling.',
      },
      {
        tried: 'Enable many overlapping styles on the same site',
        whyItFails: 'Multiple styles targeting the same site can conflict, producing duplicate or broken styles.',
        saferAlternative: 'Disable overlapping styles. Use per-site enable and disable controls to manage active styles.',
      },
      {
        tried: 'Ignore site match patterns',
        whyItFails: 'Styles with overly broad match patterns can apply to unintended sites, causing unexpected visual changes.',
        saferAlternative: 'Review and adjust match patterns so styles only apply where intended.',
      },
      {
        tried: 'Use abandoned styles without reviewing them',
        whyItFails: 'Styles that are no longer maintained may have outdated CSS that breaks current site layouts.',
        saferAlternative: 'Review abandoned styles before keeping them enabled. Remove or replace styles that consistently cause problems.',
      },
    ],
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
      'Review permissions ? the extension needs access to modify page appearance.',
    ],
    alternatives: [
      {
        name: 'Stylus',
        slug: 'stylus',
        bestFor: 'Users who want custom CSS and fine-grained site-specific style control',
        status: 'active_mv3',
        chromeStoreUrl: 'https://chromewebstore.google.com/detail/stylus/clngdbkpkpeebahjckkjfoboffhnclfk',
        pros: [
          'Full custom CSS control per website',
          'Supports userstyles from Stylebots and other repositories',
          'No automatic site modification unless you enable styles',
        ],
        cons: [
          'Requires CSS or userstyle knowledge',
          'Does not auto-detect and apply dark mode',
        ],
        note: 'Stylus is a custom CSS manager, not a direct dark mode tool. Users need to install or write dark mode styles manually.',
      },
      {
        name: 'Chrome built-in appearance settings',
        slug: 'chrome-appearance-settings',
        bestFor: 'Users who only need simple browser-level dark theme preferences',
        status: 'active_mv3',
        pros: [
          'No extension required',
          'Works for browser UI and compatible sites',
          'Minimal performance impact',
        ],
        cons: [
          'Does not restyle every website automatically',
          'Limited customization options',
        ],
        note: 'Chrome built-in appearance settings are sufficient for basic browser dark theme needs but do not apply dark mode to individual websites.',
      },
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
        question: 'What is the best Dark Reader alternative for Chrome?',
        answer:
          'The best alternative depends on your needs. Chrome built-in appearance settings work for basic browser theming. Stylus is better if you want custom CSS and are comfortable reviewing styles. Night Eye offers multiple dark mode algorithms. For most users, trying the built-in settings first is the practical starting point.',
      },
      {
        question: 'Is Stylus a Dark Reader alternative?',
        answer:
          'Stylus is not a direct Dark Reader alternative — it is a custom CSS manager rather than an automatic dark mode tool. Stylus lets you apply custom CSS to websites, which can include dark mode styles, but you need to find or write the styles yourself. Dark Reader automatically detects and applies dark mode across many sites.',
      },
      {
        question: 'Can Chrome use dark mode without an extension?',
        answer:
          'Yes. Chrome has built-in appearance settings under Settings > Appearance that let you switch between Light and Dark themes for the browser interface. However, this does not automatically restyle individual websites — only the browser chrome changes. For website dark mode, an extension like Dark Reader or Stylus with dark mode styles is needed.',
      },
      {
        question: 'Do dark mode extensions affect website performance?',
        answer:
          'Dark mode extensions apply CSS styles to web pages, which can have a minor performance impact depending on the number of sites and styles configured. Dark Reader uses efficient selective injection, but on some complex sites the effect may be noticeable. Built-in browser settings have no impact on website performance.',
      },
      {
        question: 'Can dark mode extensions read pages I visit?',
        answer:
          'Dark mode extensions need broad site access to apply styles to the pages you visit. This means they can interact with page content to inject styles. Before installing any appearance extension, review its permissions and verify it is actively maintained. Avoid extensions with broad permissions that have unclear or abandoned development.',
      },
      {
        question: 'Should I install multiple dark mode extensions?',
        answer:
          'No. Installing multiple dark mode or appearance extensions at once can cause conflicts, duplicate styles, and performance issues. Use one maintained tool at a time and disable any others before testing a new one.',
      },
      {
        question: 'What should I use if Dark Reader breaks a website?',
        answer:
          'If Dark Reader causes rendering issues on a specific site, try the built-in browser appearance settings for simple needs. For Stylus users, disable the conflicting style for that site. You can also temporarily disable Dark Reader on a per-site basis using its built-in controls. If an extension consistently causes problems, switch to a more maintained alternative.',
      },
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
        publisher: 'Dark Reader',
        sourceType: 'chrome-web-store',
        reliability: 'primary',
        supports: 'Dark Reader MV3 availability, listing status, and publisher identity',
      },
      {
        title: 'Dark Reader Official Site',
        url: 'https://darkreader.org/',
        publisher: 'Dark Reader',
        sourceType: 'official-website',
        reliability: 'primary',
        supports: 'Dark Reader official documentation, GitHub, and development status',
      },
      {
        title: 'Stylus Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/stylus/clngdbkpkpeebahjckkjfoboffhnclfk',
        publisher: 'Stylus',
        sourceType: 'chrome-web-store',
        reliability: 'primary',
        supports: 'Stylus MV3 availability, listing status, and publisher identity',
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
    lastUpdated: '2026-05-24',
    keyTakeaways: [
      'Dark Reader is widely used for automatic dark mode on websites.',
      'Built-in browser appearance settings may be enough for simple needs.',
      'Stylus is better for custom CSS and site-specific style control.',
      'Appearance extensions can affect pages you visit, so permissions matter.',
      'Avoid unknown dark mode extensions with broad permissions and unclear maintenance.',
      'Multiple dark mode extensions can conflict — use one at a time.',
    ],
    currentStatus: [
      { label: 'Dark Reader status', value: 'Widely used dark mode extension — actively maintained MV3 version', variant: 'good' },
      { label: 'Main alternatives', value: 'Browser settings, Stylus, Night Eye, maintained dark mode tools', variant: 'neutral' },
      { label: 'Main risk', value: 'Broad site access permissions', variant: 'bad' },
      { label: 'Best practice', value: 'Use maintained extensions and review permissions', variant: 'good' },
      { label: 'Last reviewed', value: 'May 24, 2026', variant: 'neutral' },
    ],
    comparisonTable: [
      {
        option: 'Dark Reader',
        bestFor: 'Automatic dark mode across many websites',
        mv3Support: 'Yes',
        cost: 'Free',
        openSource: 'Yes',
        setupDifficulty: 'Easy',
        mainTradeoff: 'Can affect site rendering and performance on some pages',
      },
      {
        option: 'Chrome built-in appearance settings',
        bestFor: 'Simple browser theme preference',
        mv3Support: 'N/A',
        cost: 'Free',
        openSource: 'N/A',
        setupDifficulty: 'Very Easy',
        mainTradeoff: 'Does not restyle every website automatically',
      },
      {
        option: 'Stylus',
        bestFor: 'Custom CSS and site-specific styles',
        mv3Support: 'Yes',
        cost: 'Free',
        openSource: 'Yes',
        setupDifficulty: 'Moderate',
        mainTradeoff: 'Requires CSS or userstyle knowledge — does not auto-apply dark mode',
      },
      {
        option: 'Night Eye',
        bestFor: 'Users wanting multiple dark mode algorithms',
        mv3Support: 'Yes',
        cost: 'Free',
        openSource: 'No',
        setupDifficulty: 'Easy',
        mainTradeoff: 'Premium features may require subscription',
      },
    ],
    decisionGuide: [
      {
        choose: 'Dark Reader',
        when: 'You want automatic dark mode across many websites without managing styles manually.',
      },
      {
        choose: 'Chrome built-in appearance settings',
        when: 'You only need simple browser-level theming and do not need per-site dark mode.',
      },
      {
        choose: 'Stylus',
        when: 'You want custom CSS control and are comfortable reviewing or writing styles.',
      },
      {
        choose: 'Night Eye',
        when: 'You want multiple dark mode rendering algorithms and are comfortable with its feature set.',
      },
    ],
    commonFailedFixes: [
      {
        tried: 'Install multiple dark mode extensions at once',
        whyItFails: 'Multiple appearance extensions can conflict, produce duplicate styles, and degrade performance.',
        saferAlternative: 'Use one maintained appearance tool at a time. Disable others before testing a new one.',
      },
      {
        tried: 'Grant broad permissions without checking the extension',
        whyItFails: 'Appearance extensions can interact with page content. Unknown or abandoned extensions with broad permissions pose privacy and security risks.',
        saferAlternative: 'Verify the extension is actively maintained, check reviews, and review permissions before installing.',
      },
      {
        tried: 'Use random userstyles from unknown sources',
        whyItFails: 'Userstyles from unknown mirrors may contain unwanted code, break site layouts, or have maintenance gaps.',
        saferAlternative: 'Use well-known style repositories and review styles before enabling them broadly.',
      },
      {
        tried: 'Assume every website renders correctly in forced dark mode',
        whyItFails: 'Some websites have custom styling that conflicts with forced dark mode, producing poor readability or broken layouts.',
        saferAlternative: 'Use per-site disable controls to exclude sites where forced dark mode causes issues.',
      },
    ],
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
          'https://chromewebstore.google.com/detail/session-buddy/iancjfoljcpenaloeigejedmfpl????',
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
    lastUpdated: '2026-05-21',
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
        supports: 'Official Chrome MV2 deprecation timeline ? Video DownloadHelper was updated to MV3',
      },
    ],
    lastUpdated: '2026-05-21',
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
    lastUpdated: '2026-05-21',
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
      'Grammarly is actively maintained and works in modern Chrome as an MV3-compatible extension. It provides real-time grammar, spelling, and style suggestions. For users who prefer open-source tooling, LanguageTool is an open-source alternative with similar features.',
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
        note: 'LanguageTool is an open-source grammar and style checker that offers both cloud and self-hosted options for users who prefer transparent, open-source tooling.',
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
    lastUpdated: '2026-05-21',
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
        supports: 'Official Chrome MV2 deprecation timeline ? LastPass was updated to MV3',
      },
    ],
    lastUpdated: '2026-05-21',
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
      'Bitwarden is an actively maintained MV3-compatible password manager with full source code transparency. It offers cloud-hosted and self-hosted options, making it popular among users who prefer transparent open-source tooling. LastPass and 1Password are alternatives with different feature sets.',
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
        supports: 'Official Chrome MV2 deprecation timeline ? Bitwarden was updated to MV3',
      },
    ],
    lastUpdated: '2026-05-21',
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
    lastUpdated: '2026-05-21',
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
          'https://chromewebstore.google.com/detail/microsoft-translator/a??bjkfpejawfejgijbbhbcomeghpfbj',
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
          'Uses privacy-respecting data handling policies',
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
    lastUpdated: '2026-05-21',
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
