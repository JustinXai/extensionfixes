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
          'https://chromewebstore.google.com/detail/foxyproxy-standard/jicccghpmafppfhkpgcdpniancjiiokj',
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
      },
      {
        title: 'ZeroOmega Chrome Web Store Listing',
        url: 'https://chromewebstore.google.com/detail/proxy-switchyomega-3-zero/pfnededegaaopdmhkdmcofjmoldfiped',
        publisher: 'Chrome Web Store',
      },
      {
        title: 'ZeroOmega GitHub Repository',
        url: 'https://github.com/zero-peak/ZeroOmega',
        publisher: 'ZeroOmega Contributors',
      },
      {
        title: 'FoxyProxy Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/foxyproxy-standard/jicccghpmafppfhkpgcdpniancjiiokj',
        publisher: 'Chrome Web Store',
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
    ],
    sources: [
      {
        title: 'uBlock Origin Wiki - About Chrome\'s "This extension may soon no longer be supported"',
        url: 'https://github.com/gorhill/uBlock/wiki/About-Google-Chrome%27s-%E2%80%9CThis-extension-may-soon-no-longer-be-supported%E2%80%9D',
        publisher: 'Raymond Hill (uBlock Origin Author)',
      },
      {
        title: 'uBlock Origin Lite Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/ublock-origin-lite/ddkjiahejlhfcafbddmgiahcphecmpfh',
        publisher: 'Chrome Web Store',
      },
      {
        title: 'Chrome Manifest V2 Deprecation Timeline',
        url: 'https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline',
        publisher: 'Google Chrome Developers',
      },
    ],
    lastUpdated: '2026-05-13',
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
        title: '9to5Google - The Great Suspender removed from Chrome Web Store for malware',
        url: 'https://9to5google.com/2021/02/04/the-great-suspender-extension-has-been-removed-from-chrome-web-store-for-containing-malware/',
        publisher: '9to5Google',
      },
      {
        title: 'The Verge - Chrome blocks The Great Suspender extension',
        url: 'https://www.theverge.com/2021/2/4/22266798/chrome-blocks-the-great-suspender-disabled-malware-tab-recovery',
        publisher: 'The Verge',
      },
      {
        title: 'Chrome Web Store - Auto Tab Discard',
        url: 'https://chromewebstore.google.com/detail/auto-tab-discard-suspend/jhnleheckmknfcgijgkadoemagpecfol',
        publisher: 'Chrome Web Store',
      },
    ],
    lastUpdated: '2026-05-13',
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
        url: 'https://chromewebstore.google.com/detail/modheader-modify-http-hea/idgpnmonknjnojddfkpgkljpfnnfcklj',
        publisher: 'Chrome Web Store',
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
