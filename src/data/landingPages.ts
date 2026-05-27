import type { LandingPageRecord } from '@/lib/types';

export const landingPages: LandingPageRecord[] = [
  {
    slug: 'switchyomega-not-working',
    title: 'SwitchyOmega Not Working in Chrome: What to Do',
    description:
      'Proxy SwitchyOmega not working in Chrome? Learn why older proxy extensions stopped working, how Manifest V2 changes affect users, and which MV3 alternatives to consider.',
    h1: 'SwitchyOmega Not Working in Chrome: What to Do',
    shortAnswer:
      'SwitchyOmega stopped working in Chrome 138 and later because Chrome disabled all Manifest V2 extensions. The best path forward is to export your proxy profiles and migrate to ZeroOmega, which is a community-maintained MV3-compatible fork that can import your existing SwitchyOmega settings directly.',
    aliases: [
      'switchyomega not working',
      'switchyomega chrome not working',
      'proxy switchyomega stopped working',
      'switchyomega disabled',
      'switchyomega chrome 138',
    ],
    sections: [
      {
        type: 'comparison',
        title: 'SwitchyOmega Alternatives Comparison',
        columns: ['Option', 'Best For', 'MV3 Status', 'Import SwitchyOmega Profiles'],
        rows: [
          ['ZeroOmega', 'SwitchyOmega users who want a similar experience', 'Yes', 'Yes (direct import)'],
          ['FoxyProxy Standard', 'Users who need advanced proxy rules', 'Yes', 'Limited'],
          ['Proxy Switcher and Manager', 'Simple proxy switching needs', 'Yes', 'No'],
          ['Browser native settings', 'Basic single proxy use', 'N/A', 'No'],
        ],
      },
      {
        type: 'text',
        title: 'Why SwitchyOmega Stopped Working',
        content:
          'Chrome 138 disabled all Manifest V2 extensions by default. SwitchyOmega was built on Manifest V2 and has not been updated to Manifest V3 by the original developer. This is a Chrome platform change, not a security issue with SwitchyOmega itself.',
      },
      {
        type: 'list',
        title: 'What to Check First',
        items: [
          'Check your Chrome version at chrome://settings/help (Chrome 138+ is affected)',
          'Try opening SwitchyOmega settings to confirm it is unresponsive',
          'Check the Chrome Web Store for any "disabled" or "unsupported" labels',
          'Export your profiles before removing the extension if possible',
        ],
      },
      {
        type: 'callout',
        title: 'Export Your Profiles First',
        content:
          'If SwitchyOmega still opens partially, export your proxy profiles immediately. Go to SwitchyOmega Options > Profiles > Export Profile. Save the file securely. ZeroOmega can import this file directly.',
        variant: 'info',
      },
      {
        type: 'text',
        title: 'Recommended Migration: ZeroOmega',
        content:
          'ZeroOmega is a community-maintained fork specifically designed as a SwitchyOmega successor. It supports the same profile format, proxy protocols (HTTP, HTTPS, SOCKS4, SOCKS5), and auto-switch rules. You can import your existing SwitchyOmega profiles directly into ZeroOmega.',
      },
      {
        type: 'list',
        title: 'Other Alternatives Worth Considering',
        items: [
          'FoxyProxy Standard: Established proxy manager with MV3 support, good for users with complex proxy rules',
          'Proxy Switcher and Manager: Simpler interface for basic proxy switching',
          'Browser native proxy settings: Use Chrome/Edge/Brave built-in proxy configuration for simple setups',
        ],
      },
    ],
    faqs: [
      {
        question: 'Why did SwitchyOmega stop working in Chrome?',
        answer:
          'SwitchyOmega stopped working because Chrome 138 disabled all Manifest V2 extensions by default. SwitchyOmega was built on Manifest V2 and has not been updated to Manifest V3 by its developer. This is a platform change by Chrome, not a problem with the extension itself.',
      },
      {
        question: 'Can I re-enable SwitchyOmega in Chrome?',
        answer:
          'No. Chrome 138 has fully disabled Manifest V2 extension support. There is no setting to re-enable it in regular Chrome. Enterprise policies may allow it on managed devices, but this is not available to individual users.',
      },
      {
        question: 'What is the recommended replacement for SwitchyOmega?',
        answer:
          'ZeroOmega is a practical choice for most users because it is a direct fork that can import your existing SwitchyOmega profiles. Review its GitHub repository and Chrome Web Store listing before installing. FoxyProxy is another established option with MV3 support.',
      },
      {
        question: 'Is ZeroOmega an official SwitchyOmega replacement?',
        answer:
          'No. ZeroOmega is a community fork created by independent developers. The original SwitchyOmega developer has not released an official MV3 version. ZeroOmega aims to provide similar functionality but is not affiliated with the original project.',
      },
      {
        question: 'Is it safe to download old SwitchyOmega CRX files from the internet?',
        answer:
          'No. Downloading CRX files from unofficial sources is risky. These files may contain malware, outdated code with security vulnerabilities, or modified functionality. Only install extensions from the official Chrome Web Store or verified developer sources.',
      },
      {
        question: 'Will my proxy server credentials be preserved when I migrate?',
        answer:
          'Yes, if you export your profiles first. The export includes all proxy server addresses, ports, authentication credentials, and proxy rules. Store the export file securely and import it into your chosen replacement.',
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
        publisher: 'ZeroOmega Community',
      },
    ],
    lastUpdated: '2026-05-13',
    relatedLinks: [
      { label: 'Best SwitchyOmega Alternatives', href: '/switchyomega-alternative' },
      { label: 'SwitchyOmega Alternatives Detail', href: '/alternatives/switchyomega' },
      { label: 'Manifest V2 Disabled Guide', href: '/fix/manifest-v2-disabled' },
    ],
    primaryCta: { label: 'View SwitchyOmega Alternatives', href: '/alternatives/switchyomega' },
    secondaryCta: { label: 'Find Proxy Extensions', href: '/tools/extension-search' },
    bestOptions: [
      { label: 'For most users:', description: 'ZeroOmega (direct SwitchyOmega profile import)' },
      { label: 'For advanced users:', description: 'FoxyProxy Standard (complex proxy rules)' },
      { label: 'For basic needs:', description: 'Browser native proxy settings' },
    ],
  },
  {
    slug: 'switchyomega-alternative',
    title: 'Best Proxy SwitchyOmega Alternatives for Chrome MV3',
    description:
      'Compare MV3-compatible Proxy SwitchyOmega alternatives including ZeroOmega, FoxyProxy, and Proxy Switcher and Manager.',
    h1: 'Best Proxy SwitchyOmega Alternatives for Chrome MV3',
    shortAnswer:
      'The best SwitchyOmega alternatives for Chrome are ZeroOmega (best for SwitchyOmega users with profile import), FoxyProxy Standard (established option with advanced features), and browser native proxy settings (simplest solution). All are MV3-compatible and work with Chrome 138 and later.',
    aliases: [
      'switchyomega alternative',
      'best switchyomega alternative',
      'switchyomega replacement',
      'proxy extension chrome mv3',
    ],
    sections: [
      {
        type: 'comparison',
        title: 'SwitchyOmega Alternatives Comparison',
        columns: ['Extension', 'Best For', 'MV3', 'Profile Import', 'Complexity'],
        rows: [
          ['ZeroOmega', 'SwitchyOmega users', 'Yes', 'Yes (direct)', 'Low'],
          ['FoxyProxy Standard', 'Advanced proxy users', 'Yes', 'Limited', 'Medium'],
          ['Proxy Switcher', 'Basic switching', 'Yes', 'No', 'Low'],
          ['Browser Settings', 'Single proxy use', 'N/A', 'No', 'Very Low'],
        ],
      },
      {
        type: 'text',
        title: 'ZeroOmega: Best for SwitchyOmega Users',
        content:
          'ZeroOmega was created specifically as a SwitchyOmega successor. It supports direct import of SwitchyOmega profile files, maintains the same proxy protocol support (HTTP, HTTPS, SOCKS4, SOCKS5), and includes auto-switch rules based on URL patterns. The interface closely mirrors SwitchyOmega.',
      },
      {
        type: 'text',
        title: 'FoxyProxy Standard: Established Alternative',
        content:
          'FoxyProxy has been available in the Chrome Web Store for years with a solid reputation. It offers pattern-based proxy switching, multiple proxy configurations, and MV3 compatibility. The Standard version works well with Chrome 138 and later.',
      },
      {
        type: 'text',
        title: 'Proxy Switcher and Manager: Simple Option',
        content:
          'For users who only need to switch between a few proxy servers occasionally, Proxy Switcher and Manager provides a straightforward interface. It may lack advanced features but is easier to configure for basic use cases.',
      },
      {
        type: 'list',
        title: 'Migration Checklist',
        items: [
          'Export your SwitchyOmega profiles first (if still accessible)',
          'Install your chosen alternative from the Chrome Web Store',
          'Import SwitchyOmega profiles if using ZeroOmega',
          'Configure and test each proxy profile',
          'Verify connectivity with each profile',
          'Remove SwitchyOmega after confirming the alternative works',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I import my SwitchyOmega profiles into ZeroOmega?',
        answer:
          'Yes. ZeroOmega supports direct import of SwitchyOmega profile files. Go to ZeroOmega Options, select Import, and choose your SwitchyOmega export file. All profiles, proxy servers, and rules should transfer.',
      },
      {
        question: 'Is FoxyProxy compatible with Chrome 138?',
        answer:
          'Yes. FoxyProxy Standard has been updated to support Manifest V3 and works with Chrome 138 and later versions.',
      },
      {
        question: 'Do I need a proxy extension, or can I use browser settings?',
        answer:
          'Browser proxy settings work for basic single-proxy setups but offer less flexibility for switching between multiple profiles or using auto-switch rules. If you manage multiple proxy configurations, an extension is more convenient.',
      },
      {
        question: 'How do I know if a proxy extension is safe?',
        answer:
          'Proxy extensions can access all your browser traffic. Only install from the official Chrome Web Store, verify the developer, and understand the permissions before installing. Review the number of users, ratings, and recent reviews.',
      },
      {
        question: 'What happens to my settings if I switch extensions?',
        answer:
          'If you exported your profiles first, ZeroOmega can import them directly. Other alternatives may require manual reconfiguration of each proxy profile.',
      },
      {
        question: 'Are community forks like ZeroOmega safe?',
        answer:
          'ZeroOmega is a community project. Review its GitHub repository for transparency, check the Chrome Web Store listing, and verify the permissions match the stated functionality. Like any extension, make an informed decision before installing.',
      },
    ],
    sources: [
      {
        title: 'ZeroOmega Chrome Web Store Listing',
        url: 'https://chromewebstore.google.com/detail/proxy-switchyomega-3-zero/pfnededegaaopdmhkdmcofjmoldfiped',
        publisher: 'Chrome Web Store',
      },
      {
        title: 'FoxyProxy Standard Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/foxyproxy-standard/jicccghpmafppfhkpgcdpniancjiiokj',
        publisher: 'Chrome Web Store',
      },
      {
        title: 'Chrome Manifest V2 Deprecation Timeline',
        url: 'https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline',
        publisher: 'Google Chrome Developers',
      },
    ],
    lastUpdated: '2026-05-13',
    relatedLinks: [
      { label: 'SwitchyOmega Not Working Guide', href: '/switchyomega-not-working' },
      { label: 'SwitchyOmega Alternatives Detail', href: '/alternatives/switchyomega' },
      { label: 'Manifest V2 Disabled Guide', href: '/fix/manifest-v2-disabled' },
    ],
    primaryCta: { label: 'View SwitchyOmega Alternatives', href: '/alternatives/switchyomega' },
    secondaryCta: { label: 'Try Extension Search', href: '/tools/extension-search' },
    bestOptions: [
      { label: 'Best for SwitchyOmega users:', description: 'ZeroOmega (direct profile import)' },
      { label: 'Best established option:', description: 'FoxyProxy Standard' },
      { label: 'Simplest solution:', description: 'Browser native proxy settings' },
    ],
  },
  {
    slug: 'ublock-origin-no-longer-supported',
    title: 'uBlock Origin No Longer Supported in Chrome: What Changed?',
    description:
      "Chrome says uBlock Origin is no longer supported? Learn what changed, how uBlock Origin Lite differs, and what options Chrome users have for ad blocking.",
    h1: 'uBlock Origin No Longer Supported in Chrome: What Changed?',
    shortAnswer:
      'Classic uBlock Origin stopped working in Chrome 138 because it uses Manifest V2. The MV3-compatible version developed by the same author is uBlock Origin Lite, available as a free Chrome uBlock Origin Lite extension in the Chrome Web Store. While not a complete one-to-one replacement due to MV3 limitations, uBlock Origin Lite provides strong ad blocking for most users who rely on filter lists.',
    aliases: [
      'ublock origin no longer supported',
      'ublock origin chrome 138',
      'ublock origin disabled',
      'ublock origin not working',
      'ad blocker chrome not working',
      'chrome ublock origin lite',
      'ublock origin lite for chrome',
      'ublock origin alternative',
      'ublock origin alternative for chrome',
    ],
    sections: [
      {
        type: 'comparison',
        title: 'uBlock Origin Options for Chrome Users',
        columns: ['Option', 'Chrome 138 Compatible', 'Features', 'Best For'],
        rows: [
          ['uBlock Origin Lite', 'Yes', 'Static filter lists, limited dynamic rules', 'Most Chrome users'],
          ['Other MV3 ad blockers', 'Yes', 'Varies by extension', 'Users seeking alternatives'],
          ['Firefox + classic uBlock Origin', 'Yes (in Firefox)', 'Full feature set', 'Users needing MV2 features'],
          ['Browser built-in blocking', 'Yes', 'Basic blocking only', 'Minimal needs'],
        ],
      },
      {
        type: 'text',
        title: 'Why Classic uBlock Origin Is Affected',
        content:
          'Classic uBlock Origin was built on Manifest V2. Chrome 138 disabled all Manifest V2 extensions by default. This is not a removal for policy violations or a security issue. The extension simply cannot run in current Chrome versions without MV3 support.',
      },
      {
        type: 'text',
        title: 'What Is uBlock Origin Lite',
        content:
          'uBlock Origin Lite (also referred to as Chrome uBlock Origin Lite) is the Manifest V3-compatible version developed by Raymond Hill, the same developer as classic uBlock Origin. It is available in the Chrome Web Store and provides core ad blocking functionality with MV3 compatibility. As an MV3-based content blocker by the same developer, uBlock Origin Lite offers a trusted path forward for Chrome users.',
      },
      {
        type: 'callout',
        title: 'Important: Not a Complete One-to-One Replacement',
        content:
          'uBlock Origin Lite has some differences from classic uBlock Origin due to Manifest V3 limitations. Static filter lists (EasyList, EasyPrivacy, etc.) work the same, but dynamic filtering rules have restrictions. Review the differences before switching.',
        variant: 'info',
      },
      {
        type: 'list',
        title: 'Options for Chrome Users',
        items: [
          'Install uBlock Origin Lite from the Chrome Web Store',
          'Try other MV3-compatible ad blockers (AdGuard, AdBlock)',
          'Use browser-native ad blocking in Chrome settings',
          'Use Firefox with classic uBlock Origin if MV2 features are needed',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is uBlock Origin dangerous or was it removed for violating Chrome policies?',
        answer:
          'No. uBlock Origin is not dangerous and was not removed for policy violations. Classic uBlock Origin stopped working because it uses Manifest V2 APIs that Chrome has deprecated. This is a platform change, not a quality or safety issue.',
      },
      {
        question: 'Can I re-enable classic uBlock Origin in Chrome?',
        answer:
          'No. Chrome 138 has fully disabled Manifest V2 support. There is no user setting to re-enable it. Enterprise policies may allow MV2 on managed devices, but this is not available to individual users.',
      },
      {
        question: 'What is the recommended path for uBlock Origin users?',
        answer:
          'uBlock Origin Lite is developed by the same trusted developer (Raymond Hill) and is available in the official Chrome Web Store. Other MV3 ad blockers like AdGuard or AdBlock are also available options from established developers.',
      },
      {
        question: 'Is uBlock Origin Lite a recommended alternative from the same developer?',
        answer:
          'Yes. uBlock Origin Lite is developed by Raymond Hill, the same developer who created classic uBlock Origin. It is the MV3-compatible version.',
      },
      {
        question: 'Is it safe to install old CRX copies of classic uBlock Origin?',
        answer:
          'No. Installing CRX files from unofficial sources is risky. These files may contain modified code, security vulnerabilities, or malware. Only install uBlock Origin Lite from the official Chrome Web Store.',
      },
      {
        question: 'Will my uBlock Origin settings transfer to uBlock Origin Lite?',
        answer:
          'Filter list selections can be re-enabled manually in uBlock Origin Lite. Some custom filter rules may need adjustment due to MV3 API limitations. The core filter lists work the same.',
      },
    ],
    sources: [
      {
        title: 'uBlock Origin Lite Chrome Web Store Listing',
        url: 'https://chromewebstore.google.com/detail/ublock-origin-lite/ddkjiahejlhfcafbddmgiahcphecmpfh',
        publisher: 'Chrome Web Store',
      },
      {
        title: 'uBlock Origin Wiki: About Chrome Extension Deprecation',
        url: 'https://github.com/gorhill/uBlock/wiki/About-Google-Chrome%27s-%E2%80%9CThis-extension-may-soon-no-longer-be-supported%E2%80%9D',
        publisher: 'gorhill (uBlock Origin Developer)',
      },
      {
        title: 'Chrome Manifest V2 Deprecation Timeline',
        url: 'https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline',
        publisher: 'Google Chrome Developers',
      },
    ],
    lastUpdated: '2026-05-13',
    relatedLinks: [
      { label: 'uBlock Origin Lite vs Classic', href: '/ublock-origin-lite-vs-ublock-origin' },
      { label: 'uBlock Origin Alternatives Detail', href: '/alternatives/ublock-origin' },
      { label: 'This Extension No Longer Supported', href: '/fix/this-extension-is-no-longer-supported' },
    ],
    primaryCta: { label: 'View uBlock Origin Alternatives', href: '/alternatives/ublock-origin' },
    secondaryCta: { label: 'Compare Lite vs Classic', href: '/ublock-origin-lite-vs-ublock-origin' },
    bestOptions: [
      { label: 'Best Chrome path:', description: 'uBlock Origin Lite (MV3 version by the same author)' },
      { label: 'Best full features:', description: 'Firefox with classic uBlock Origin' },
      { label: 'Other MV3 options:', description: 'AdGuard, AdBlock (Chrome Web Store)' },
    ],
  },
  {
    slug: 'ublock-origin-lite-vs-ublock-origin',
    title: 'uBlock Origin Lite vs uBlock Origin: What\'s Different?',
    description:
      'Compare uBlock Origin Lite and classic uBlock Origin, including Manifest V3 limitations, filtering modes, setup differences, and browser choices.',
    h1: 'uBlock Origin Lite vs uBlock Origin: What\'s Different?',
    shortAnswer:
      'uBlock Origin Lite is the Manifest V3 version with some feature differences. Both are developed by Raymond Hill. Static filter lists work the same in both versions. Dynamic filtering rules are restricted in uBlock Origin Lite due to MV3 limitations. For many Chrome users, uBlock Origin Lite is the closest MV3-compatible option from the same developer, but it is not a feature-identical replacement for classic uBlock Origin.',
    aliases: [
      'ublock origin lite vs ublock origin',
      'ublock origin lite',
      'chrome ublock origin lite',
      'ublock origin lite difference',
      'ublock origin mv3 vs mv2',
      'ublock lite feature differences',
    ],
    sections: [
      {
        type: 'comparison',
        title: 'uBlock Origin Lite vs Classic uBlock Origin',
        columns: ['Feature', 'uBlock Origin (MV2)', 'uBlock Origin Lite (MV3)'],
        rows: [
          ['Manifest Version', 'MV2', 'MV3'],
          ['Static Filter Lists', 'Yes (full)', 'Yes (full)'],
          ['Dynamic Filtering Rules', 'Full support', 'Limited'],
          ['Network Request Blocking', 'Full control', 'Restricted'],
          ['Chrome 138 Support', 'No', 'Yes'],
          ['Firefox Support', 'Yes', 'Limited'],
          ['Permissions Required', 'More (webRequest)', 'Fewer (declarative)'],
        ],
      },
      {
        type: 'text',
        title: 'Manifest V2 vs Manifest V3: The Core Difference',
        content:
          'Manifest V3 limits how extensions can interact with network requests. Classic uBlock Origin uses the webRequest API for detailed network filtering, which is restricted in MV3. uBlock Origin Lite was rewritten to use declarativeNetRequest, which provides good ad blocking within MV3 constraints.',
      },
      {
        type: 'text',
        title: 'Filtering Behavior: What Changes',
        content:
          'Static filter lists, which handle most ad blocking, work identically in both versions. EasyList, EasyPrivacy, and other community filter lists function the same. Dynamic filtering rules, which let users create custom blocking rules, have limitations in uBlock Origin Lite.',
      },
      {
        type: 'text',
        title: 'Who Should Use uBlock Origin Lite',
        content:
          'If you use Chrome 138 or later and primarily rely on pre-made filter lists, uBlock Origin Lite is a practical MV3 option from the same developer. For many Chrome users, it is the closest MV3-compatible option from the same developer, but it is not a feature-identical replacement for classic uBlock Origin. Most users relying on filter lists will find it satisfactory, but advanced users may notice differences in dynamic filtering.',
      },
      {
        type: 'text',
        title: 'Who May Need a Different Approach',
        content:
          'Users who rely heavily on dynamic filtering rules, specific network request blocking, or advanced user scenarios may find uBlock Origin Lite limiting. Firefox with classic uBlock Origin remains an option, though switching browsers has its own tradeoffs.',
      },
    ],
    faqs: [
      {
        question: 'Is uBlock Origin Lite as effective as classic uBlock Origin for blocking ads?',
        answer:
          'For most users, yes. If you primarily rely on filter lists (EasyList, EasyPrivacy, etc.), uBlock Origin Lite blocks the same content. Advanced users with custom dynamic rules may notice differences due to MV3 restrictions.',
      },
      {
        question: 'Why does uBlock Origin Lite need fewer permissions than classic uBlock Origin?',
        answer:
          'Manifest V3 was designed to be more privacy-focused. uBlock Origin Lite uses declarativeNetRequest instead of the webRequest API, which requires fewer broad permissions. This is actually a privacy improvement.',
      },
      {
        question: 'Can I use uBlock Origin Lite in Firefox?',
        answer:
          'Firefox support for uBlock Origin Lite is limited. Firefox still supports Manifest V2, so classic uBlock Origin is recommended for Firefox users. The developer has not prioritized Firefox porting for Lite.',
      },
      {
        question: 'Will more features be added to uBlock Origin Lite over time?',
        answer:
          'Some MV3 restrictions cannot be worked around by design. The developer has stated that uBlock Origin Lite aims to provide the best possible ad blocking within MV3 constraints. Filter list support will continue to improve.',
      },
      {
        question: 'Is uBlock Origin Lite developed by the same person as classic uBlock Origin?',
        answer:
          'Yes. Both versions are developed by Raymond Hill (gorhill), the original creator of uBlock Origin. uBlock Origin Lite is the MV3-compatible version.',
      },
      {
        question: 'What happens if I install uBlock Origin Lite alongside other ad blockers?',
        answer:
          'Running multiple ad blockers simultaneously is generally not recommended as they may conflict or cause performance issues. Choose one MV3 ad blocker that meets your needs.',
      },
    ],
    sources: [
      {
        title: 'uBlock Origin Lite Chrome Web Store Listing',
        url: 'https://chromewebstore.google.com/detail/ublock-origin-lite/ddkjiahejlhfcafbddmgiahcphecmpfh',
        publisher: 'Chrome Web Store',
      },
      {
        title: 'uBlock Origin GitHub Wiki',
        url: 'https://github.com/gorhill/uBlock/wiki',
        publisher: 'gorhill',
      },
      {
        title: 'Chrome Manifest V2 Deprecation Timeline',
        url: 'https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline',
        publisher: 'Google Chrome Developers',
      },
    ],
    lastUpdated: '2026-05-13',
    relatedLinks: [
      { label: 'uBlock Origin No Longer Supported', href: '/ublock-origin-no-longer-supported' },
      { label: 'uBlock Origin Alternatives Detail', href: '/alternatives/ublock-origin' },
      { label: 'Manifest V2 Disabled Guide', href: '/fix/manifest-v2-disabled' },
    ],
    primaryCta: { label: 'Install uBlock Origin Lite', href: 'https://chromewebstore.google.com/detail/ublock-origin-lite/ddkjiahejlhfcafbddmgiahcphecmpfh' },
    secondaryCta: { label: 'View All uBlock Options', href: '/alternatives/ublock-origin' },
    bestOptions: [
      { label: 'Best for Chrome users:', description: 'uBlock Origin Lite (MV3 version by the same author)' },
      { label: 'Best for full features:', description: 'Firefox + classic uBlock Origin' },
      { label: 'Similar alternatives:', description: 'AdGuard, AdBlock (MV3)' },
    ],
  },
  {
    slug: 'this-extension-may-soon-no-longer-be-supported',
    title: 'Fix "This Extension May Soon No Longer Be Supported" in Chrome',
    description:
      "Learn what Chrome's 'This extension may soon no longer be supported' message means and how to safely find maintained alternatives.",
    h1: 'Fix "This Extension May Soon No Longer Be Supported" in Chrome',
    shortAnswer:
      'Chrome shows this message when an extension uses Manifest V2, which Chrome is phasing out. You cannot prevent this change, but you can prepare by exporting settings, checking for MV3 updates, and finding alternatives. This message appears before the extension stops working, giving you time to transition.',
    aliases: [
      'this extension may soon no longer be supported',
      'extension may soon be unsupported',
      'chrome extension warning message',
      'mv2 deprecation warning',
    ],
    sections: [
      {
        type: 'comparison',
        title: 'Common Extensions Affected by MV2 Deprecation',
        columns: ['Extension', 'Type', 'Status', 'Recommended Path'],
        rows: [
          ['SwitchyOmega', 'Proxy Manager', 'Affected', 'ZeroOmega (MV3 fork)'],
          ['uBlock Origin', 'Ad Blocker', 'Affected', 'uBlock Origin Lite (MV3)'],
          ['The Great Suspender', 'Tab Manager', 'Removed', 'Chrome Memory Saver'],
          ['Various others', 'Various', 'Check individually', 'Search Extension Fixes'],
        ],
      },
      {
        type: 'text',
        title: 'What This Chrome Message Means',
        content:
          'This message indicates that the extension uses Manifest V2, an older Chrome extension platform that Google is phasing out. Chrome 138 has disabled MV2 by default. The message is a warning that the extension may stop working in future updates or may already be disabled.',
      },
      {
        type: 'list',
        title: 'Why You Are Seeing This Message',
        items: [
          'The extension was built for Manifest V2 and has not been updated to Manifest V3',
          'Chrome is progressively disabling MV2 extensions with each release',
          'The developer has not released an MV3-compatible version',
          'The extension will eventually stop working unless updated by the developer',
        ],
      },
      {
        type: 'list',
        title: 'What You Can Safely Do Now',
        items: [
          'Export extension settings if the option is available',
          'Check the Chrome Web Store for an updated MV3 version',
          'Search Extension Fixes for your extension name and alternatives',
          'Look for official announcements from the extension developer',
          'Note the extension permissions to verify alternatives later',
          'Test potential alternatives while your current setup still works',
        ],
      },
      {
        type: 'callout',
        title: 'Do Not Wait Until It Stops Working',
        content:
          'Prepare your transition now while the extension still functions. Export settings, research alternatives, and have a backup plan before the extension is disabled.',
        variant: 'warning',
      },
    ],
    faqs: [
      {
        question: 'Does this message mean my extension is malware or dangerous?',
        answer:
          'No. This message indicates Manifest V2 deprecation, not a security issue. Many legitimate, well-maintained extensions show this message because they have not yet been updated to Manifest V3.',
      },
      {
        question: 'Can I prevent Chrome from disabling my extension?',
        answer:
          'No. Chrome controls which extension platforms are supported. Individual users cannot prevent MV2 deprecation. Enterprise administrators on managed devices may have policies to extend MV2 support.',
      },
      {
        question: 'What is the recommended way to find a replacement?',
        answer:
          'Check the Chrome Web Store for MV3 updates from the same developer. Search Extension Fixes for your extension name. Verify alternative developers and permissions before installing. Only install from official sources.',
      },
      {
        question: 'Is the developer official if they have a similar name or logo?',
        answer:
          'Not necessarily. Scammers sometimes create extensions with similar names to popular extensions. Always verify the developer name, reviews, permissions, and install count before installing any extension.',
      },
      {
        question: 'Is it safe to download CRX files from download sites to keep using the old extension?',
        answer:
          'No. Downloading CRX files from unofficial sites is risky. These files may contain malware, outdated security patches, or modified functionality. Only install extensions from the official Chrome Web Store.',
      },
      {
        question: 'What if there is no MV3 alternative for my extension?',
        answer:
          'If no MV3 alternative exists, you may need to use browser-native features, consider alternative browsers that still support MV2 (like Firefox), or adjust your workflow. Some extensions may have community-maintained forks.',
      },
    ],
    sources: [
      {
        title: 'Chrome Manifest V2 Deprecation Timeline',
        url: 'https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline',
        publisher: 'Google Chrome Developers',
      },
      {
        title: 'Chrome Web Store Extension Listings',
        url: 'https://chromewebstore.google.com',
        publisher: 'Chrome Web Store',
      },
      {
        title: 'Extension Fixes Search Tool',
        url: 'https://extensionfixes.com/tools/extension-search',
        publisher: 'Extension Fixes',
      },
    ],
    lastUpdated: '2026-05-13',
    relatedLinks: [
      { label: 'This Extension No Longer Supported', href: '/fix/this-extension-is-no-longer-supported' },
      { label: 'Manifest V2 Disabled Guide', href: '/fix/manifest-v2-disabled' },
      { label: 'Try Extension Search', href: '/tools/extension-search' },
    ],
    primaryCta: { label: 'Find Extension Alternatives', href: '/tools/extension-search' },
    secondaryCta: { label: 'Browse All Guides', href: '/guides' },
    bestOptions: [
      { label: 'Check first:', description: 'Official Chrome Web Store for MV3 updates' },
      { label: 'Search:', description: 'Extension Fixes for known alternatives' },
      { label: 'Export:', description: 'Settings before removing the old extension' },
    ],
  },
  {
    slug: 'fix-this-extension-turned-off-landing',
    title: 'Fix "This Extension Was Turned Off Because It Is No Longer Supported"',
    description:
      'Chrome turned off an extension because it is no longer supported? Learn what the warning means, whether you can re-enable it, and how to find a maintained replacement.',
    h1: 'Fix "This Extension Was Turned Off Because It Is No Longer Supported"',
    shortAnswer:
      'Chrome shows this message when an extension has been turned off because it is no longer supported. This typically happens when the extension uses deprecated APIs or has been removed from the Chrome Web Store. You cannot re-enable the disabled extension, but you can check for MV3 updates, export your settings if possible, and find maintained alternatives from the Chrome Web Store.',
    aliases: [
      'this extension was turned off because it is no longer supported',
      'extension was turned off',
      'chrome turned off extension',
      'extension turned off no longer supported',
    ],
    sections: [
      {
        type: 'text',
        title: 'What This Chrome Message Means',
        content:
          'The message "This extension was turned off because it is no longer supported" appears when Chrome has automatically disabled an extension. This can happen for several reasons: the extension was removed from the Chrome Web Store, the extension uses deprecated Manifest V2 APIs, or Chrome has detected security concerns with the extension.',
      },
      {
        type: 'text',
        title: 'Why Chrome Turned Off the Extension',
        content:
          'Chrome may turn off extensions for different reasons. Understanding why helps you decide on next steps. Common causes include Manifest V2 deprecation (where Chrome 138+ disables all MV2 extensions), removal from the Chrome Web Store (due to policy violations or developer request), and security concerns (where Google proactively disables extensions that may pose risks).',
      },
      {
        type: 'callout',
        title: 'Can You Turn It Back On?',
        content:
          'Generally, no. When Chrome turns off an extension due to deprecation or removal, you cannot re-enable it through Chrome settings. Enterprise administrators on managed devices may have policies to extend support, but this is not available to individual users.',
        variant: 'info',
      },
      {
        type: 'list',
        title: 'What to Do First',
        items: [
          'Check the Chrome Web Store to see if there is an updated MV3 version of the extension',
          'Export your extension settings if the option is still available before removing it',
          'Search Extension Fixes for your extension name to find verified alternatives',
          'Note what the extension did so you can verify alternatives meet your needs',
          'Review the extension permissions to understand what data it had access to',
        ],
      },
      {
        type: 'list',
        title: 'Proxy Extensions',
        items: [
          'SwitchyOmega users: ZeroOmega is a community-maintained MV3 fork with direct profile import support',
          'Other proxy extensions: Check the Chrome Web Store for MV3-compatible alternatives',
        ],
      },
      {
        type: 'list',
        title: 'Ad Blockers',
        items: [
          'uBlock Origin users: uBlock Origin Lite is the MV3 version by the same developer',
          'Other ad blockers: AdGuard and AdBlock have MV3 versions available',
        ],
      },
    ],
    faqs: [
      {
        question: 'Why was my extension turned off by Chrome?',
        answer:
          'Chrome may turn off extensions for several reasons. The most common in recent years is Manifest V2 deprecation, where Chrome 138 disabled all MV2 extensions. Other reasons include removal from the Chrome Web Store for policy violations or developer request, and security concerns where Google proactively disables potentially risky extensions.',
      },
      {
        question: 'Can I re-enable the extension that was turned off?',
        answer:
          'Generally no. If the extension was disabled due to MV2 deprecation, Chrome 138 and later do not support re-enabling MV2 extensions. If it was removed from the Chrome Web Store, you should not attempt to install unofficial copies. Your best path is to find an MV3-compatible alternative.',
      },
      {
        question: 'Is it safe to download the extension as a CRX file from the internet?',
        answer:
          'No. Downloading extensions from unofficial sources is risky. These files may contain malware, outdated security patches, or modified functionality. Only install extensions from the official Chrome Web Store or verified developer sources.',
      },
      {
        question: 'How do I find a replacement for a turned-off extension?',
        answer:
          'Check the Chrome Web Store for updated MV3 versions from the same developer. Search Extension Fixes for your extension name. Verify alternative developers, permissions, and reviews before installing any new extension.',
      },
      {
        question: 'What if there is no MV3 alternative for my extension?',
        answer:
          'If no MV3 alternative exists, you may need to use browser-native features, consider alternative browsers that still support MV2 (like Firefox), or adjust your workflow. Some extensions may have community-maintained forks worth checking.',
      },
      {
        question: 'Will my extension settings be lost?',
        answer:
          'If the extension still opens partially, export your settings first. Many extensions allow you to export profiles or configuration files. After finding a replacement, check if the new extension supports importing your exported settings.',
      },
    ],
    sources: [
      {
        title: 'Chrome Manifest V2 Deprecation Timeline',
        url: 'https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline',
        publisher: 'Google Chrome Developers',
      },
      {
        title: 'Chrome Web Store Developer Policies',
        url: 'https://developer.chrome.com/docs/webstore/program-policies/',
        publisher: 'Google Chrome Developers',
      },
      {
        title: 'Extension Fixes Search Tool',
        url: 'https://extensionfixes.com/tools/extension-search',
        publisher: 'Extension Fixes',
      },
    ],
    lastUpdated: '2026-05-17',
    relatedLinks: [
      { label: 'Extension No Longer Supported', href: '/fix/this-extension-is-no-longer-supported' },
      { label: 'Manifest V2 Disabled Guide', href: '/fix/manifest-v2-disabled' },
      { label: 'Extension May Soon Be Unsupported', href: '/this-extension-may-soon-no-longer-be-supported' },
      { label: 'Extension Search', href: '/tools/extension-search' },
    ],
    primaryCta: { label: 'Search Extension Alternatives', href: '/tools/extension-search' },
    secondaryCta: { label: 'View All Guides', href: '/guides' },
    bestOptions: [
      { label: 'Check first:', description: 'Chrome Web Store for MV3 updates' },
      { label: 'Search:', description: 'Extension Fixes for your extension' },
      { label: 'Export:', description: 'Settings before removing the extension' },
    ],
  },
  {
    slug: 'foxyproxy-alternative-for-chrome',
    title: 'Best FoxyProxy Alternatives for Chrome Proxy Switching',
    description:
      'Looking for a FoxyProxy alternative for Chrome? Compare FoxyProxy, ZeroOmega, Proxy Switcher and Manager, and other proxy switching workflows.',
    h1: 'Best FoxyProxy Alternatives for Chrome Proxy Switching',
    shortAnswer:
      'FoxyProxy Standard remains available in the Chrome Web Store with MV3 support. If you need alternatives, ZeroOmega is best for SwitchyOmega users who want direct profile import, while Proxy Switcher and Manager offers simpler proxy switching. Browser native proxy settings work for basic single-proxy setups.',
    aliases: [
      'foxyproxy alternative for chrome',
      'foxyproxy chrome',
      'foxyproxy alternative',
      'best foxyproxy alternative',
      'proxy switcher chrome',
    ],
    sections: [
      {
        type: 'text',
        title: 'Is FoxyProxy Still Available for Chrome?',
        content:
          'Yes. FoxyProxy Standard is available in the Chrome Web Store with full Manifest V3 support. It works with Chrome 138 and later versions. FoxyProxy is a well-established proxy switching extension used by many users for managing complex proxy configurations.',
      },
      {
        type: 'text',
        title: 'When to Choose FoxyProxy',
        content:
          'FoxyProxy is a solid choice if you need advanced proxy management with pattern-based switching rules, multiple proxy configurations, and established reliability. It has been available for years with a consistent track record.',
      },
      {
        type: 'text',
        title: 'When to Choose ZeroOmega',
        content:
          'ZeroOmega is ideal if you are migrating from SwitchyOmega and want to import your existing proxy profiles directly. It was created specifically as a SwitchyOmega successor and maintains similar functionality with MV3 compatibility.',
      },
      {
        type: 'comparison',
        title: 'Proxy Extension Comparison',
        columns: ['Extension', 'Best For', 'MV3', 'Profile Import', 'Complexity'],
        rows: [
          ['FoxyProxy Standard', 'Advanced proxy users', 'Yes', 'Limited', 'Medium'],
          ['ZeroOmega', 'SwitchyOmega migrants', 'Yes', 'Yes (direct)', 'Low'],
          ['Proxy Switcher', 'Basic switching', 'Yes', 'No', 'Low'],
          ['Browser Settings', 'Single proxy use', 'N/A', 'No', 'Very Low'],
        ],
      },
      {
        type: 'list',
        title: 'Proxy Switching Checklist',
        items: [
          'Export your current proxy profiles if available (FoxyProxy or SwitchyOmega)',
          'Identify which proxy protocols you use (HTTP, HTTPS, SOCKS4, SOCKS5)',
          'Note any authentication requirements for each proxy server',
          'Check if you use auto-switch rules based on URL patterns',
          'Verify the new extension supports all your required features',
          'Test each profile thoroughly after migration',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is FoxyProxy safe to use?',
        answer:
          'Yes. FoxyProxy Standard is available in the official Chrome Web Store with MV3 support. It has been available for years with a solid reputation. As with any proxy extension, review the permissions and only install from the official Chrome Web Store.',
      },
      {
        question: 'Can I import my SwitchyOmega profiles into FoxyProxy?',
        answer:
          'FoxyProxy has limited SwitchyOmega profile import support. If you are migrating from SwitchyOmega and want direct profile import, ZeroOmega is specifically designed for this purpose.',
      },
      {
        question: 'What is the difference between FoxyProxy Standard and FoxyProxy Plus?',
        answer:
          'FoxyProxy Standard provides core proxy switching functionality with pattern-based rules. Plus adds additional features like sync across devices and more advanced options. Standard is sufficient for most users.',
      },
      {
        question: 'Do I need a proxy extension, or can I use browser proxy settings?',
        answer:
          'Browser proxy settings work for basic single-proxy setups but offer less flexibility for switching between multiple profiles or using auto-switch rules. If you manage multiple proxy configurations regularly, an extension is more convenient.',
      },
      {
        question: 'How do I export my FoxyProxy settings?',
        answer:
          'In FoxyProxy, go to Options, select the proxy profiles you want to export, and use the export function. Save the file securely for importing into your chosen replacement extension.',
      },
      {
        question: 'Are there free alternatives to FoxyProxy?',
        answer:
          'Yes. ZeroOmega is free and open source. Browser native proxy settings are free. Proxy Switcher and Manager has both free and paid versions. FoxyProxy Standard itself has a free version with basic features.',
      },
    ],
    sources: [
      {
        title: 'FoxyProxy Standard Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/foxyproxy-standard/jicccghpmafppfhkpgcdpniancjiiokj',
        publisher: 'Chrome Web Store',
      },
      {
        title: 'ZeroOmega Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/proxy-switchyomega-3-zero/pfnededegaaopdmhkdmcofjmoldfiped',
        publisher: 'Chrome Web Store',
      },
      {
        title: 'Chrome Manifest V2 Deprecation Timeline',
        url: 'https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline',
        publisher: 'Google Chrome Developers',
      },
    ],
    lastUpdated: '2026-05-17',
    relatedLinks: [
      { label: 'SwitchyOmega Alternatives', href: '/alternatives/switchyomega' },
      { label: 'SwitchyOmega Not Working', href: '/switchyomega-not-working' },
      { label: 'SwitchyOmega Alternative', href: '/switchyomega-alternative' },
      { label: 'Extension Search', href: '/tools/extension-search' },
    ],
    primaryCta: { label: 'View Proxy Extensions', href: '/tools/extension-search' },
    secondaryCta: { label: 'SwitchyOmega Alternatives', href: '/alternatives/switchyomega' },
    bestOptions: [
      { label: 'For existing FoxyProxy users:', description: 'FoxyProxy Standard (MV3, current)' },
      { label: 'For SwitchyOmega migrants:', description: 'ZeroOmega (direct import)' },
      { label: 'For basic needs:', description: 'Browser native proxy settings' },
    ],
  },
  {
    slug: 'the-great-suspender-malware',
    title: 'The Great Suspender Malware History and Safer Alternatives',
    description:
      'Learn why the original Great Suspender was removed from the Chrome Web Store, what happened in 2021, and which maintained tab management alternatives to consider.',
    h1: 'The Great Suspender Malware History and Safer Alternatives',
    shortAnswer:
      'The original Great Suspender was removed from the Chrome Web Store and disabled by Google in early 2021 after public reports of malware-related concerns. The original extension was transferred to a new owner who introduced code that security researchers flagged as problematic. Chrome Memory Saver is the official built-in solution, while Auto Tab Discard is a well-maintained MV3 alternative.',
    aliases: [
      'the great suspender malware',
      'great suspender malware chrome',
      'the great suspender alternative',
      'great suspender chrome',
      'great suspender removed',
      'great suspender disabled',
    ],
    sections: [
      {
        type: 'text',
        title: 'What Happened to The Great Suspender?',
        content:
          'The original extension was removed from the Chrome Web Store and disabled after public malware-related reports in 2021. The extension was originally developed by one developer and later transferred to a new owner. The new owner introduced code changes that security researchers flagged as problematic. Google proactively disabled the extension to protect users from potential harm.',
      },
      {
        type: 'text',
        title: 'Malware-Related History',
        content:
          'In late 2020, The Great Suspender extension was sold to a new developer. In early 2021, security researchers discovered that the new version contained code that could potentially access user data or perform unwanted actions. Google removed the extension from the Chrome Web Store and disabled it for users who had already installed it. This is why you may see messages about The Great Suspender being disabled in Chrome.',
      },
      {
        type: 'callout',
        title: 'Important Safety Notice',
        content:
          'Do not install any version of The Great Suspender from unofficial sources. CRX files from download sites may contain modified code, malware, or security vulnerabilities. Only use established alternatives from the official Chrome Web Store.',
        variant: 'warning',
      },
      {
        type: 'text',
        title: 'Can You Install Old CRX Copies?',
        content:
          'No. Installing old CRX copies of The Great Suspender is not recommended. These files may contain the problematic code, lack security updates, or include malware. Additionally, Chrome may block loading of extensions from unofficial sources.',
      },
      {
        type: 'text',
        title: 'Safer Alternatives',
        content:
          'Chrome Memory Saver is the official built-in solution for managing memory with inactive tabs. Auto Tab Discard is a well-maintained MV3 extension available in the Chrome Web Store. Both options are safe, actively maintained, and provide similar tab suspension functionality.',
      },
      {
        type: 'comparison',
        title: 'Tab Management Options',
        columns: ['Option', 'Type', 'MV3', 'Best For'],
        rows: [
          ['Chrome Memory Saver', 'Built-in', 'N/A', 'Most Chrome users'],
          ['Auto Tab Discard', 'Extension', 'Yes', 'Customizable tab management'],
          ['Workona', 'Extension', 'Yes', 'Workspace organization'],
          ['OneTab', 'Extension', 'Yes', 'Simple tab consolidation'],
        ],
      },
      {
        type: 'text',
        title: 'How to Recover Old Suspended Tabs If Possible',
        content:
          'If you had suspended tabs when the extension was disabled, some may have been recoverable from Chrome session data. Check chrome://discards/ for information about suspended tabs. Chrome session restoration may have recovered some tabs when the extension was disabled. However, many suspended tabs were likely lost in the process.',
      },
    ],
    faqs: [
      {
        question: 'Was The Great Suspender actually malware?',
        answer:
          'The original Great Suspender was a legitimate extension. However, after ownership changed in late 2020, the new version introduced code that security researchers flagged as potentially harmful. Google disabled the extension proactively to protect users. We recommend using established alternatives instead.',
      },
      {
        question: 'Is it safe to use The Great Suspender if I find it online?',
        answer:
          'No. The original extension was removed and disabled. Unofficial copies from download sites may contain the problematic code or additional malware. Only use established alternatives from the official Chrome Web Store.',
      },
      {
        question: 'What is the best alternative to The Great Suspender?',
        answer:
          'Chrome Memory Saver is the official built-in solution and works well for most users. If you need more customization, Auto Tab Discard is a well-maintained MV3 extension with customizable discard rules.',
      },
      {
        question: 'Can I recover my suspended tabs?',
        answer:
          'Some tabs may have been recoverable from Chrome session data when the extension was disabled. Check chrome://discards/ for information. However, most suspended tabs were likely lost when the extension was disabled. Chrome session restoration may have recovered some tabs.',
      },
      {
        question: 'Are there any legitimate forks of The Great Suspender?',
        answer:
          'Several community projects have attempted to create forks, but we recommend using established alternatives like Chrome Memory Saver or Auto Tab Discard instead. These are actively maintained, available in the official Chrome Web Store, and have transparent development.',
      },
      {
        question: 'Why was The Great Suspender sold in the first place?',
        answer:
          'The original developer chose to transfer ownership. This is common in the Chrome extension ecosystem. However, the new owner introduced code that raised security concerns, leading to the removal and disablement.',
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
        title: 'Auto Tab Discard Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/auto-tab-discard-suspend/jhnleheckmknfcgijgkadoemagpecfol',
        publisher: 'Chrome Web Store',
      },
    ],
    lastUpdated: '2026-05-17',
    relatedLinks: [
      { label: 'Great Suspender Alternatives', href: '/alternatives/great-suspender' },
      { label: 'Chrome Disabled Extension', href: '/fix/chrome-disabled-extension' },
      { label: 'Extension Search', href: '/tools/extension-search' },
    ],
    primaryCta: { label: 'View Tab Management Options', href: '/alternatives/great-suspender' },
    secondaryCta: { label: 'Search Extensions', href: '/tools/extension-search' },
    bestOptions: [
      { label: 'Easiest:', description: 'Chrome Memory Saver (built-in)' },
      { label: 'Most customizable:', description: 'Auto Tab Discard (MV3)' },
      { label: 'For workspaces:', description: 'Workona (MV3)' },
    ],
  },
  {
    slug: 'chrome-extension-error-messages',
    title: 'Chrome Extension Error Messages: What They Mean and How to Fix Them',
    description:
      'Look up common Chrome extension warning messages, including unsupported extensions, Manifest V2 issues, disabled extensions, and removed extensions.',
    h1: 'Chrome Extension Error Messages: What They Mean and How to Fix Them',
    shortAnswer:
      'Chrome extension warnings usually mean the extension is unsupported, disabled, removed, policy-blocked, or affected by Manifest V2 changes. The practical next step is to identify the exact message, check the extension name, avoid unknown CRX downloads, and move to a maintained replacement when needed.',
    aliases: [
      'chrome extension error messages',
      'chrome extension warning',
      'extension error message',
      'chrome extension not working',
      'extension was turned off',
      'chrome disabled my extension',
      'manifest v2',
      'unsupported manifest',
      'cannot install extension',
    ],
    sections: [],
    faqs: [],
    sources: [],
    lastUpdated: '2026-05-17',
    relatedLinks: [
      { label: 'Extension Search', href: '/tools/extension-search' },
      { label: 'Extension Was Turned Off', href: '/this-extension-was-turned-off-because-it-is-no-longer-supported' },
      { label: 'Extension May Soon Be Unsupported', href: '/this-extension-may-soon-no-longer-be-supported' },
    ],
    primaryCta: { label: 'Search Extensions', href: '/tools/extension-search' },
    secondaryCta: { label: 'Browse Alternatives', href: '/alternatives' },
    bestOptions: [],
  },
  {
    slug: 'chrome-userscript-manager-alternatives',
    templateType: 'guide',
    title: 'Chrome Userscript Manager Alternatives: Tampermonkey, Violentmonkey, ScriptCat',
    description:
      'Compare Chrome userscript manager options with a decision guide, safety checklist, and migration steps for Tampermonkey, Violentmonkey, ScriptCat, and similar tools.',
    h1: 'Chrome Userscript Manager Alternatives',
    shortAnswer:
      'The main Chrome userscript manager options are Tampermonkey and Violentmonkey. Tampermonkey is widely used and has a large userscript ecosystem, while Violentmonkey is a common choice for users who prefer an open-source workflow. The right choice depends on script compatibility, permissions, sync needs, and how much control you want over imported scripts. Userscript managers can run code on websites you visit, so choosing the extension is only part of the decision. You should also review script sources, inspect permissions, test scripts on non-sensitive pages, and remove old scripts you no longer use.',
    aliases: [
      'chrome userscript manager alternatives',
      'best userscript manager for chrome',
      'userscript manager chrome alternative',
      'tampermonkey vs violentmonkey',
      'violentmonkey vs tampermonkey',
      'chrome userscript manager manifest v3',
    ],
    sections: [
      {
        type: 'text',
        title: 'How to Choose a Userscript Manager',
        content:
          'Tampermonkey and Violentmonkey are the main options most Chrome users compare. Tampermonkey has a larger script ecosystem and is more widely known. Violentmonkey is fully open source and lightweight. The right choice depends on what you value most: script compatibility, open-source transparency, resource usage, or interface preferences. Userscript managers can run code on websites you visit, so script trust is critical regardless of which extension you choose.',
      },
      {
        type: 'list',
        title: 'Userscript Safety Checklist',
        items: [
          'Check the source of the script before installing.',
          'Review @match rules to see which sites the script will run on.',
          'Review @grant permissions to understand what access the script requests.',
          'Avoid scripts that request access to unrelated sites.',
          'Test scripts on non-sensitive pages before enabling on everyday sites.',
          'Disable scripts you no longer use.',
          'Keep backups of scripts you depend on.',
        ],
      },
      {
        type: 'text',
        title: 'Tampermonkey vs Violentmonkey',
        content:
          'Both Tampermonkey and Violentmonkey support the same Tampermonkey-compatible script format. Scripts from Greasy Fork and OpenUserJS work with either manager. Tampermonkey has more built-in features and a larger community. Violentmonkey is fully open source with a more minimal interface. Neither is objectively better — the choice depends on your priorities.',
      },
      {
        type: 'list',
        title: 'Common Mistakes to Avoid',
        items: [
          'Installing scripts from unknown mirrors or random websites.',
          'Enabling all imported scripts at once without reviewing them.',
          'Ignoring @match permissions and granting scripts broad access.',
          'Using abandoned or unmaintained scripts without review.',
          'Keeping multiple userscript managers enabled at the same time.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is a userscript manager?',
        answer:
          'A userscript manager is a browser extension that lets you install and run custom JavaScript scripts (userscripts) to modify web pages, add features, or automate tasks. Popular managers for Chrome include Tampermonkey and Violentmonkey. Scripts are written in JavaScript and can read or modify page content where they run.',
      },
      {
        question: 'What is the best userscript manager for Chrome?',
        answer:
          'Tampermonkey and Violentmonkey are the two main options. Tampermonkey is more widely used with a larger script ecosystem. Violentmonkey is fully open source and uses fewer system resources. The best choice depends on whether you prioritize script compatibility, open-source tooling, or resource usage.',
      },
      {
        question: 'Is Tampermonkey better than Violentmonkey?',
        answer:
          'Neither is objectively better. Tampermonkey has more built-in features and a larger community with more scripts available. Violentmonkey is fully open source with a lighter interface. Users who prefer open-source tooling often choose Violentmonkey. Users who want the largest script library often choose Tampermonkey.',
      },
      {
        question: 'Is Violentmonkey open source?',
        answer:
          'Yes. Violentmonkey is fully open source with its code available on GitHub. Tampermonkey has a mix of open and closed-source components. Both are legitimate, maintained projects.',
      },
      {
        question: 'Are userscripts safe?',
        answer:
          'Userscript managers themselves are safe when installed from the official Chrome Web Store. However, individual userscripts vary in quality and intent. Scripts run with significant browser access and can read or modify page content. Always review a script\'s code and permissions before installing it, and only use scripts from sources you trust.',
      },
      {
        question: 'Can userscripts steal data?',
        answer:
          'Userscripts can technically access the content of pages where they run. This is their intended purpose — they are designed to modify web pages. A malicious script could read sensitive page content. To stay safe, only install scripts from trusted repositories like Greasy Fork or OpenUserJS, review script permissions before installing, and avoid scripts that request excessive access for their stated purpose.',
      },
      {
        question: 'Should I use more than one userscript manager?',
        answer:
          'No. Running multiple userscript managers simultaneously can cause conflicts, duplicate script execution, and unexpected behavior. Choose one manager and use it consistently. If you want to switch managers, export your scripts first, then install the new manager and import your scripts.',
      },
      {
        question: 'How do I migrate userscripts safely?',
        answer:
          'Export your scripts from your current manager (usually via Options > Scripts > Export). Install your new manager from the official Chrome Web Store. Import scripts a few at a time. Review @match and @grant permissions before enabling. Test on non-sensitive sites first. Remove scripts you no longer use.',
      },
    ],
    sources: [
      {
        title: 'Tampermonkey Official Site',
        url: 'https://tampermonkey.net/',
        publisher: 'Tampermonkey',
      },
      {
        title: 'Tampermonkey Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo',
        publisher: 'Chrome Web Store',
      },
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
    lastUpdated: '2026-05-22',
    relatedLinks: [
      { label: 'Tampermonkey Alternatives', href: '/alternatives/tampermonkey' },
      { label: 'Violentmonkey Alternatives', href: '/alternatives/violentmonkey' },
      { label: 'Chrome Extension Alternatives', href: '/alternatives' },
      { label: 'Unsupported Extension Fix', href: '/fix/cannot-install-extension-unsupported-manifest' },
      { label: 'Tampermonkey vs Violentmonkey', href: '/comparisons/tampermonkey-vs-violentmonkey' },
      { label: 'ScriptCat vs Tampermonkey', href: '/comparisons/scriptcat-vs-tampermonkey' },
      { label: 'Violentmonkey vs ScriptCat', href: '/comparisons/violentmonkey-vs-scriptcat' },
    ],
    primaryCta: { label: 'Compare Tampermonkey vs Violentmonkey', href: '/comparisons/tampermonkey-vs-violentmonkey' },
    secondaryCta: { label: 'View Violentmonkey Alternatives', href: '/alternatives/violentmonkey' },
    bestOptions: [
      { label: 'For script ecosystem:', description: 'Tampermonkey (largest community)' },
      { label: 'For open source:', description: 'Violentmonkey (fully open source)' },
      { label: 'For simple needs:', description: 'Browser bookmarks/snippets' },
    ],
  },
  {
    slug: 'best-custom-css-and-dark-mode-extensions',
    templateType: 'guide',
    title: 'Best Custom CSS and Dark Mode Extensions for Chrome',
    description:
      'Compare Dark Reader, Stylus, and other Chrome appearance tools for dark mode, custom CSS, and userstyle workflows.',
    h1: 'Best Custom CSS and Dark Mode Extensions for Chrome',
    shortAnswer:
      'Chrome users who want to change how websites look usually compare two types of tools: automatic dark mode extensions and custom CSS or userstyle managers. Dark Reader is useful for applying dark mode across many websites, while Stylus is better for users who want site-specific CSS control. Browser built-in appearance settings may be enough for simple browser theming, but they do not replace full website styling tools. The right choice depends on whether you want automatic dark mode, custom CSS, fewer permissions, or simple browser theming.',
    aliases: [
      'dark reader alternative',
      'dark reader alternative chrome',
      'stylus extension alternatives',
      'chrome web store stylus extension custom css',
      'custom css extension chrome',
      'dark mode extension chrome',
      'chrome dark mode extension',
      'custom userstyle chrome',
      'userstyle extension chrome',
    ],
    sections: [
      {
        type: 'comparison',
        title: 'Appearance Extension Comparison',
        columns: ['Option', 'Best for', 'Strength', 'Trade-off'],
        rows: [
          ['Dark Reader', 'Automatic dark mode', 'Easy broad dark mode', 'Can affect rendering or performance on some sites'],
          ['Stylus', 'Custom CSS and userstyles', 'Fine-grained site control', 'Requires CSS knowledge or trusted styles'],
          ['Chrome built-in settings', 'Simple browser appearance', 'No extension needed', 'Does not restyle every website'],
          ['Browser bookmarks/snippets', 'Small personal tweaks', 'Lightweight', 'Not a full style manager'],
        ],
      },
      {
        type: 'text',
        title: 'What Is the Right Choice for You?',
        content:
          'Choose Dark Reader if you want automatic dark mode across many websites without managing CSS. Choose Stylus if you want custom CSS, userstyles, or fine-grained site-specific control. Use Chrome built-in settings for simple browser theming. For very small personal CSS tweaks, browser bookmarks or snippets are lightweight options that require no extension.',
      },
      {
        type: 'list',
        title: 'Selection Criteria',
        items: [
          'Chrome Web Store availability and active maintenance',
          'Permission scope and transparency',
          'Fit for dark mode versus custom CSS use cases',
          'Ability to disable or scope changes per site',
        ],
      },
      {
        type: 'list',
        title: 'Safety Checklist',
        items: [
          'Review extension permissions before installing.',
          'Avoid unknown style mirrors or unofficial dark mode extensions.',
          'Disable styles you no longer use.',
          'Test site-specific styles on non-critical pages first.',
          'Do not run multiple overlapping appearance extensions unless needed.',
          'Review @match rules for any styles you import.',
        ],
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'What to Avoid',
        items: [
          'Unknown style or dark mode extensions with broad permissions and unclear maintenance.',
          'Extensions that claim to be an "official" successor from unknown developers — verify the developer before installing.',
          'Installing multiple dark mode or CSS extensions simultaneously, which can cause conflicts or performance issues.',
          'Using old CRX copies of appearance extensions from unofficial sources.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the best Chrome extension for dark mode?',
        answer:
          'Dark Reader is one of the most widely used and actively maintained dark mode extensions for Chrome. It automatically applies dark themes to websites with minimal setup. For users who want more control or custom dark mode styles, Stylus with dark mode userstyles is another option. The best choice depends on whether you want automatic dark mode or manual CSS control.',
      },
      {
        question: 'Is Stylus a Dark Reader alternative?',
        answer:
          'Stylus is not a direct Dark Reader alternative — it is a custom CSS manager rather than an automatic dark mode tool. Stylus lets you apply custom CSS to websites, which can include dark mode styles, but you need to find or write the styles yourself. Dark Reader automatically detects and applies dark mode across many sites with no manual configuration.',
      },
      {
        question: 'Can Chrome use dark mode without an extension?',
        answer:
          'Chrome has built-in appearance settings under Settings > Appearance that let you switch between Light and Dark themes for the browser interface. However, this only affects the browser chrome itself, not the websites you visit. For website dark mode, an extension like Dark Reader or Stylus with dark mode styles is needed.',
      },
      {
        question: 'Are custom CSS extensions safe?',
        answer:
          'Custom CSS extensions are generally safe when installed from the official Chrome Web Store and when using styles from known repositories. However, appearance extensions need broad site access to apply styles. Review the permissions, check the developer, and for Stylus, review the source of any styles you import. Avoid extensions with broad permissions that have unclear or abandoned development.',
      },
      {
        question: 'Can userstyles break websites?',
        answer:
          'Yes. Poorly written or outdated userstyles can conflict with a website\'s own CSS, causing broken layouts, missing elements, or incorrect formatting. Use per-site disable controls to quickly fix issues, and remove or disable styles that consistently cause problems.',
      },
      {
        question: 'Should I install both Dark Reader and Stylus?',
        answer:
          'You can install both if they serve different purposes — Dark Reader for automatic dark mode and Stylus for custom CSS. However, if both try to modify the same site, they may conflict. Consider whether your needs are met by one tool before adding both. If you only need dark mode, Dark Reader alone is sufficient.',
      },
      {
        question: 'What should I use for simple browser theming?',
        answer:
          'Chrome built-in appearance settings are sufficient for simple browser UI theming. They require no extension and have no additional permissions. If you only want to change how the browser looks without affecting websites, the built-in settings are the simplest option.',
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
        title: 'Stylus GitHub Repository',
        url: 'https://github.com/openstyles/stylus',
        publisher: 'OpenStyles Community',
        sourceType: 'github',
        reliability: 'primary',
        supports: 'Stylus open-source development status and documentation',
      },
      {
        title: 'Chrome Extension Permissions Documentation',
        url: 'https://developer.chrome.com/docs/extensions/mv3/permissions-overview/',
        publisher: 'Google Chrome Developers',
        sourceType: 'chrome-developers',
        reliability: 'secondary',
        supports: 'Why extension permissions matter and what they mean for user security',
      },
    ],
    lastUpdated: '2026-05-26',
    relatedLinks: [
      { label: 'Dark Reader Alternatives', href: '/alternatives/dark-reader' },
      { label: 'Stylus Alternatives', href: '/alternatives/stylus' },
      { label: 'Chrome Extension Alternatives', href: '/alternatives' },
      { label: 'Chrome Userscript Manager Alternatives', href: '/guides/chrome-userscript-manager-alternatives' },
    ],
    primaryCta: { label: 'View Dark Reader Alternatives', href: '/alternatives/dark-reader' },
    secondaryCta: { label: 'View Stylus Alternatives', href: '/alternatives/stylus' },
    bestOptions: [
      { label: 'For automatic dark mode:', description: 'Dark Reader (works across many sites with minimal setup)' },
      { label: 'For custom CSS and userstyles:', description: 'Stylus (fine-grained site control)' },
      { label: 'For simple browser theming:', description: 'Chrome built-in appearance settings (no extension needed)' },
      { label: 'For small personal tweaks:', description: 'Browser bookmarks or snippets (lightweight, no extension)' },
    ],
  },
  {
    slug: 'best-userscript-managers-for-chrome',
    templateType: 'guide',
    title: 'Best Userscript Managers for Chrome: Tampermonkey, Violentmonkey, and More',
    description:
      'Compare practical userscript manager options for Chrome, including Tampermonkey and Violentmonkey, plus safety tips for choosing scripts.',
    h1: 'Best Userscript Managers for Chrome',
    shortAnswer:
      'Tampermonkey and Violentmonkey are the two most practical userscript managers available for Chrome. Both are available as MV3 extensions in the Chrome Web Store and continue to work in Chrome 138 and later. Tampermonkey offers the widest script library and a feature-rich interface, while Violentmonkey is fully open source with direct GitHub Gist sync. For very simple automation, browser bookmarks or the built-in snippets feature are options that do not require any extension. Before installing a userscript manager, verify the extension comes from the official Chrome Web Store and review what permissions each script you install requires.',
    aliases: [
      'best userscript manager for chrome',
      'chrome userscript manager',
      'best userscripts chrome',
      'tampermonkey vs violentmonkey chrome',
    ],
    sections: [
      {
        type: 'text',
        title: 'How We Chose',
        content:
          'We evaluated userscript managers for Chrome based on three practical criteria. First, Chrome Web Store availability — the extension must be listed in the official store and be actively maintained. Second, MV3 compatibility — the extension must work in Chrome 138 and later, which means it needs a current Manifest V3 version. Third, community and script library size — a larger script ecosystem means more scripts are likely to work out of the box with less manual configuration. We excluded extensions that are abandoned, require unofficial installation, or lack a verifiable Chrome Web Store listing.',
      },
      {
        type: 'list',
        title: 'Best Options at a Glance',
        items: [
          'Tampermonkey — largest script library and familiar interface, MV3 version available',
          'Violentmonkey — fully open source, lightweight, and GitHub Gist sync, MV3 version available',
          'ScriptCat — another userscript manager option for users exploring alternative workflows',
          'Browser bookmarks/snippets — for very simple automation, no extension required',
        ],
      },
      {
        type: 'table',
        title: 'Side-by-side Comparison',
        columns: ['Manager', 'Best For', 'MV3 Available', 'Open Source', 'Resource Usage'],
        rows: [
          ['Tampermonkey', 'Users with large script libraries', 'Yes (Chrome Web Store)', 'Partial', 'Moderate'],
          ['Violentmonkey', 'Open-source preference, GitHub sync', 'Yes (Chrome Web Store)', 'Full', 'Low'],
          ['ScriptCat', 'Users exploring alternative workflows', 'Check Chrome Web Store', 'Check project source', 'Low'],
          ['Browser bookmarks', 'Simple static automation', 'N/A', 'N/A', 'Minimal'],
        ],
      },
      {
        type: 'list',
        title: 'Who Should Choose Which Option',
        items: [
          'Choose Tampermonkey if you already use scripts from GreaseMonkey communities or want the widest range of scripts to install with minimal setup.',
          'Choose Violentmonkey if you prefer fully open-source software and want to sync your scripts through your own GitHub account.',
          'Choose ScriptCat if you want to explore an alternative userscript manager workflow — see /comparisons/scriptcat-vs-tampermonkey for a full comparison with Tampermonkey.',
          'Use browser bookmarks or snippets if you only need very simple automation that does not require external libraries or cross-origin requests.',
        ],
      },
      {
        type: 'callout',
        variant: 'warning',
        items: [
          'Random CRX downloads from unknown mirror sites — these can contain modified code that creates privacy or security risks.',
          'Extensions that claim to be an "official" successor to Tampermonkey or Violentmonkey from unknown developers — verify the developer before installing.',
          'Installing multiple userscript managers at the same time — this causes script conflicts and duplicate execution.',
        ],
      },
      {
        type: 'list',
        title: 'Safety Checklist Before Installing Scripts',
        items: [
          'Verify the extension is installed from the official Chrome Web Store.',
          "Check the script's @match rules — confirm it only runs on sites you intend.",
          'Review the @grant directives — avoid scripts that request broad or unnecessary permissions.',
          'Read the script source code before installing if the repository is publicly available.',
          'Test scripts on non-sensitive pages first before enabling them on accounts with personal data.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Are Tampermonkey and Violentmonkey available in the Chrome Web Store?',
        answer:
          'Yes. Both Tampermonkey and Violentmonkey have versions available in the Chrome Web Store. Both have been updated to support Manifest V3, which means they work in Chrome 138 and later. Make sure you install the correct MV3 version.',
      },
      {
        question: 'What is the difference between Tampermonkey and Violentmonkey?',
        answer:
          'Tampermonkey has a larger community and more built-in features, with a script editor and dashboard. Violentmonkey is fully open source, uses fewer resources, and syncs scripts through GitHub Gist. Both support the same userscript format.',
      },
      {
        question: 'Is Violentmonkey safer than Tampermonkey?',
        answer:
          'Both are legitimate, maintained projects. Violentmonkey is fully open source, which makes it more transparent about its code. Tampermonkey has some closed-source components. Neither makes arbitrary scripts safe — you should always review what scripts you install regardless of which manager you use.',
      },
      {
        question: 'Can I use the same scripts in both Tampermonkey and Violentmonkey?',
        answer:
          'Most scripts written for the Tampermonkey API work in Violentmonkey. Scripts that use GM_xmlhttpRequest or GM_setValue require additional configuration in Violentmonkey. Test scripts individually when switching managers.',
      },
      {
        question: 'Do I need a userscript manager if I only need simple page automation?',
        answer:
          "For very simple automation tasks, browser bookmarks with JavaScript or Chrome's built-in snippets feature may be sufficient. These require no extension and have no additional permissions. Userscript managers are needed when you want to install community scripts, use GM_* APIs, or automate across multiple sites with persistent configuration.",
      },
      {
        question: 'How do I migrate scripts between userscript managers safely?',
        answer:
          "Export scripts from your current manager using its built-in export feature. Install the new manager from the official Chrome Web Store. Import scripts a few at a time through the new manager's interface. Review @match and @grant rules for each script before enabling it broadly.",
      },
    ],
    sources: [
      {
        title: 'Tampermonkey — Chrome Web Store',
        url: 'https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo',
        publisher: 'Chrome Web Store',
        sourceType: 'chrome-web-store',
        reliability: 'primary',
        supports: 'Official Tampermonkey Chrome Web Store listing and MV3 availability',
      },
      {
        title: 'Violentmonkey — Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag',
        publisher: 'Chrome Web Store',
        sourceType: 'chrome-web-store',
        reliability: 'primary',
        supports: 'Official Violentmonkey Chrome Web Store listing and MV3 availability',
      },
      {
        title: 'Tampermonkey GitHub Repository',
        url: 'https://github.com/Tampermonkey/tampermonkey',
        publisher: 'Tampermonkey',
        sourceType: 'github',
        reliability: 'primary',
        supports: 'Official source for Tampermonkey development',
      },
      {
        title: 'Violentmonkey GitHub Repository',
        url: 'https://github.com/violentmonkey/violentmonkey',
        publisher: 'Violentmonkey',
        sourceType: 'github',
        reliability: 'primary',
        supports: 'Official source for Violentmonkey development',
      },
    ],
    lastUpdated: '2026-05-25',
    relatedLinks: [
      { label: 'Tampermonkey Alternatives', href: '/alternatives/tampermonkey' },
      { label: 'Violentmonkey Alternatives', href: '/alternatives/violentmonkey' },
      { label: 'Tampermonkey vs Violentmonkey', href: '/comparisons/tampermonkey-vs-violentmonkey' },
      { label: 'ScriptCat vs Tampermonkey', href: '/comparisons/scriptcat-vs-tampermonkey' },
      { label: 'Chrome Userscript Manager Alternatives', href: '/guides/chrome-userscript-manager-alternatives' },
    ],
    primaryCta: { label: 'Compare Tampermonkey vs Violentmonkey', href: '/comparisons/tampermonkey-vs-violentmonkey' },
    secondaryCta: { label: 'View Tampermonkey Alternatives', href: '/alternatives/tampermonkey' },
    bestOptions: [
      { label: 'For largest script library:', description: 'Tampermonkey' },
      { label: 'For fully open source:', description: 'Violentmonkey' },
      { label: 'For alternative workflows:', description: 'ScriptCat — see /comparisons/scriptcat-vs-tampermonkey' },
      { label: 'For simple needs:', description: 'Browser bookmarks/snippets' },
    ],
  },
  {
    slug: 'best-tab-suspender-extensions-chrome',
    templateType: 'guide',
    title: 'Best Tab Suspender Extensions for Chrome: Memory Saver, Auto Tab Discard, OneTab',
    description:
      'Compare Chrome Memory Saver, Auto Tab Discard, OneTab, and Workona for tab suspension, memory saving, and session organization.',
    h1: 'Best Tab Suspender Extensions for Chrome',
    shortAnswer:
      'For Chrome users looking for a tab suspender after The Great Suspender, the best option depends on the workflow. Chrome Memory Saver is the simplest built-in choice for reducing memory use. Auto Tab Discard provides more extension-based control over automatic tab unloading. OneTab is better for manually saving tab groups, while Workona is more useful for workspace and project organization. Users should avoid old Great Suspender CRX files from mirror sites because discontinued or modified extensions can create security and reliability risks.',
    aliases: [
      'best tab suspender extensions chrome',
      'the great suspender alternative',
      'great suspender alternative',
      'chrome tab suspender extension',
      'chrome memory saver',
      'auto tab discard chrome',
      'the great suspender chrome extension',
      'tab suspender chrome extension',
    ],
    sections: [
      {
        type: 'text',
        title: 'Why Tab Suspension Matters',
        content:
          'Opening many browser tabs uses memory even when tabs are inactive. Tab suspenders free up RAM by unloading tab resources while keeping the tab visible in your browser. The Great Suspender was one of the most popular tab management extensions until it was removed from the Chrome Web Store in 2021. Today, Chrome Memory Saver is built into Chrome, and several actively maintained extensions handle tab suspension in different ways.',
      },
      {
        type: 'list',
        title: 'Selection Criteria',
        items: [
          'Maintained Chrome availability — must be on the Chrome Web Store and actively updated',
          'Clear tab and session behavior — how tabs are suspended and how they restore',
          'Ability to export or recover sessions — in case of uninstall or browser reset',
          'Permission transparency — understanding what access the extension requires',
          'Fit for automatic suspension versus manual organization — different tools suit different workflows',
        ],
      },
      {
        type: 'comparison',
        title: 'Tab Suspender Options Comparison',
        columns: ['Option', 'Best for', 'Strength', 'Trade-off'],
        rows: [
          ['Chrome Memory Saver', 'Basic memory saving', 'Built into Chrome — no install needed', 'Less configurable'],
          ['Auto Tab Discard', 'Automatic tab unloading with more control', 'More control over discard behavior', 'Extension permissions required'],
          ['OneTab', 'Manual tab group saving', 'Simple session cleanup', 'Not automatic suspension'],
          ['Workona', 'Workspace organization', 'Project-based tab management', 'More complex than basic memory saving'],
        ],
      },
      {
        type: 'text',
        title: 'Chrome Memory Saver: Built-in Option',
        content:
          'Chrome Memory Saver is built directly into Chrome and turns off inactive tabs automatically without any additional installation. Open Settings > Performance > Memory Saver to enable it. This is the simplest option for most users who want memory savings without installing another extension. The tradeoff is minimal configurability — it is an on/off toggle.',
      },
      {
        type: 'text',
        title: 'Auto Tab Discard: Extension with Fine-Grained Control',
        content:
          'Auto Tab Discard is a well-maintained open-source extension available on the Chrome Web Store. It lets you customize which tabs are discarded, set time thresholds, exclude specific domains, and control discard behavior more precisely than the built-in option. This is the closest extension alternative to The Great Suspender in terms of automatic tab suspension.',
      },
      {
        type: 'text',
        title: 'OneTab: Manual Tab Consolidation',
        content:
          'OneTab works differently from automatic tab suspenders — it converts your open tabs into a list with one click. This manual approach saves memory without automatically suspending anything. OneTab is better for users who prefer to consciously save tab groups, share lists with others, or reduce clutter without background automation.',
      },
      {
        type: 'text',
        title: 'Workona: Workspace Organization',
        content:
          'Workona is a more comprehensive workspace and session management tool. It lets you save tabs as workspaces, organize them by project, and sync across devices. If you manage large numbers of tabs across multiple projects, Workona provides session persistence and cross-device continuity that simple tab suspension tools do not.',
      },
      {
        type: 'list',
        title: 'Decision Guide',
        items: [
          'Choose Chrome Memory Saver if you want the simplest built-in option with no installation.',
          'Choose Auto Tab Discard if you need configurable automatic tab unloading with more control.',
          'Choose OneTab if you manually save and restore tab groups and prefer manual organization.',
          'Choose Workona if you organize tabs by workspace or project and need session persistence.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What replaced The Great Suspender?',
        answer:
          'There is no direct replacement for The Great Suspender. Chrome Memory Saver is the closest built-in option for automatic tab discarding. Auto Tab Discard is the most feature-rich extension alternative for automatic tab suspension. The extension landscape for tab management is different from what The Great Suspender offered, but maintained options exist.',
      },
      {
        question: 'What is the best tab suspender for Chrome?',
        answer:
          'Chrome Memory Saver is the simplest choice for most users because it is built into Chrome. Auto Tab Discard is the best extension-based alternative for users who want more control over which tabs are discarded and when. The best choice depends on whether you need configurability or simplicity.',
      },
      {
        question: 'Is Chrome Memory Saver enough?',
        answer:
          'For most users, Chrome Memory Saver covers the basic need of discarding inactive tabs to save memory. It requires no setup and works automatically. If you need more granular control, Auto Tab Discard offers those options as an extension.',
      },
      {
        question: 'Is Auto Tab Discard a good Great Suspender alternative?',
        answer:
          'Auto Tab Discard is a practical option for users looking for automatic tab suspension controls. It offers customizable discard rules, can exclude specific domains, and is actively maintained. It is not a feature-identical replacement but serves the same core purpose of reducing memory usage from inactive tabs.',
      },
      {
        question: 'Should I use OneTab or Auto Tab Discard?',
        answer:
          'Choose Auto Tab Discard if you want tabs to suspend automatically based on activity. Choose OneTab if you prefer to manually save groups of tabs into lists, share them, or consolidate them at specific moments. Auto Tab Discard is closer to The Great Suspender in its automatic behavior.',
      },
      {
        question: 'Can tab suspension extensions lose tabs?',
        answer:
          'Tabs suspended by Auto Tab Discard or Chrome Memory Saver reload when clicked — they are not deleted. However, if an extension is uninstalled or disabled without saving sessions, some tab references may be lost. Always export important tabs or sessions before switching tools.',
      },
      {
        question: 'Is The Great Suspender still safe to install?',
        answer:
          'The Great Suspender was removed from the Chrome Web Store and disabled by Google in 2021. No official version is available. CRX copies from mirror sites may contain unwanted code, may be modified by third parties, and lack security updates. Do not install The Great Suspender from unofficial sources.',
      },
      {
        question: 'What should I avoid when choosing a tab suspender?',
        answer:
          'Avoid old CRX files of The Great Suspender or similar discontinued tab suspenders from mirror sites. Avoid extensions that request excessive permissions without clear justification. Avoid running multiple tab suspension tools simultaneously, as this can cause conflicts and unexpected behavior. Test restore behavior before relying on a new tool for important sessions.',
      },
    ],
    sources: [
      {
        title: 'Chrome Performance > Memory Saver',
        url: 'https://support.google.com/chrome/answer/12929950',
        publisher: 'Google Chrome Help',
        sourceType: 'chrome-developers',
        reliability: 'primary',
        supports: 'Chrome built-in Memory Saver feature overview and how to enable it',
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
        title: 'Workona Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/workona/ailiggmclmgkjkkkjpdagfknmgogfopb',
        publisher: 'Chrome Web Store',
        sourceType: 'chrome-web-store',
        reliability: 'primary',
        supports: 'Workona MV3 availability and workspace organization features',
      },
      {
        title: '9to5Google — The Great Suspender removed from Chrome Web Store',
        url: 'https://9to5google.com/2021/02/04/the-great-suspender-extension-has-been-removed-from-chrome-web-store-for-containing-malware/',
        publisher: '9to5Google',
        sourceType: 'news',
        reliability: 'primary',
        supports: 'Removal reason, malware concern, and timeline for The Great Suspender',
      },
    ],
    lastUpdated: '2026-05-27',
    relatedLinks: [
      { label: 'Great Suspender Alternatives', href: '/alternatives/great-suspender' },
      { label: 'Auto Tab Discard Alternatives', href: '/alternatives/auto-tab-discard' },
      { label: 'Extension Disabled Fix Guide', href: '/fix/this-extension-was-disabled-due-to-malware-suspicious-behavior-policy-violation' },
      { label: 'Browse All Alternatives', href: '/alternatives' },
    ],
    primaryCta: { label: 'View Great Suspender Alternatives', href: '/alternatives/great-suspender' },
    secondaryCta: { label: 'View Auto Tab Discard Page', href: '/alternatives/auto-tab-discard' },
    bestOptions: [
      { label: 'For simplest use:', description: 'Chrome Memory Saver (built-in)' },
      { label: 'For most control:', description: 'Auto Tab Discard' },
    ],
  },
  {
    slug: 'chrome-extension-manifest-v2-v3-explained',
    templateType: 'guide',
    title: 'Chrome Extension Manifest V2 and V3 Explained for Chrome Users',
    description:
      'Learn what Chrome extension manifest versions mean, why Manifest V2 extensions stopped working, and what unsupported manifest errors usually mean.',
    h1: 'Chrome Extension Manifest V2 and V3 Explained',
    shortAnswer:
      'A Chrome extension manifest is the configuration file that tells Chrome what an extension is allowed to do, which APIs it uses, and how it should run. Manifest V2 and Manifest V3 are different extension platform versions. Many older Chrome extensions stopped working because Chrome phased out ordinary-user support for Manifest V2. If Chrome says an extension uses an unsupported manifest version, changing the manifest number alone usually does not fix the problem because the extension may depend on APIs that no longer work in modern Chrome. A practical path is to check for a maintained MV3 update, find an alternative extension, or use a browser that still supports MV2.',
    aliases: [
      'chrome manifest',
      'chrome manifest v2',
      'chrome v2 manifest',
      'manifest v2',
      'manifest v2 extensions',
      'chrome extension manifest',
      'unsupported manifest version chrome extension',
      'chrome extension manifest unknown keys ignored applications gecko',
      'manifest v3',
      'manifest v3 chrome',
      'chrome manifest v3',
      'mv2 mv3 chrome',
    ],
    sections: [
      {
        type: 'text',
        title: 'What Is a Chrome Extension Manifest?',
        content:
          'Every Chrome extension includes a file called manifest.json. This file tells Chrome the extension\'s name, version, what permissions it needs, which scripts to run, and which websites it can interact with. The manifest version field tells Chrome which extension platform version the extension was built for. Manifest V2 and Manifest V3 are the two major platform versions, and they have important differences in how extensions run.',
      },
      {
        type: 'text',
        title: 'Manifest V2 vs Manifest V3: What Changed?',
        content:
          'Manifest V2 (MV2) is the older Chrome extension platform. Manifest V3 (MV3) is the current platform that Chrome has been transitioning toward. The main differences are in background scripts, API capabilities, and permission handling. MV3 uses service workers instead of persistent background pages, changes how network requests are handled, and introduces a different permissions model. These changes affect how developers build extensions and how those extensions behave in Chrome.',
      },
      {
        type: 'list',
        title: 'Key Takeaways',
        items: [
          'The manifest file defines how a Chrome extension works, including its permissions and API usage.',
          'Manifest V2 and Manifest V3 are different Chrome extension platform versions with different API models.',
          'Many MV2 extensions stopped working because Chrome phased out ordinary-user support for MV2.',
          'Unsupported manifest errors usually require a real extension update, not just editing manifest.json.',
          'Firefox or Gecko-specific manifest keys may be ignored by Chrome and do not fix compatibility issues.',
        ],
      },
      {
        type: 'list',
        title: 'Current Status (as of May 2026)',
        items: [
          'Chrome status: Manifest V3 is the current Chrome extension platform path for ordinary users.',
          'MV2 status: Ordinary-user MV2 support has been phased out in modern Chrome versions.',
          'Developer note: Extensions need real API migration, not only manifest version edits, to work on MV3.',
          'User note: Maintained updates or alternatives are the practical path forward for users.',
          'Last reviewed: May 28, 2026.',
        ],
      },
      {
        type: 'table',
        title: 'Manifest V2 vs Manifest V3 Comparison',
        columns: ['Topic', 'Manifest V2', 'Manifest V3', 'What it means for you'],
        rows: [
          ['Platform status', 'Older Chrome extension platform', 'Current Chrome extension platform path', 'Old extensions may need migration to continue working'],
          ['User impact', 'Some MV2 extensions stopped working', 'Maintained extensions use MV3-compatible design', 'Users need updates or alternatives for discontinued extensions'],
          ['Developer work', 'Older APIs and persistent background pages', 'Service workers and different permissions model', 'Code changes are required beyond just editing manifest_version'],
          ['Common error', 'Unsupported manifest version', 'Extension may need MV3 update', 'Editing manifest.json alone is usually not enough to fix the problem'],
        ],
      },
      {
        type: 'list',
        title: 'How to Handle Unsupported Manifest Errors',
        items: [
          'Check whether the developer has released a maintained MV3 version of the extension.',
          'Search the Chrome Web Store for a similar extension that is actively maintained.',
          'If you are a developer, review which APIs and background behavior must be migrated to MV3.',
          'If Chrome mentions applications or gecko keys in the error, understand those are usually Firefox-related metadata that Chrome ignores.',
          'Avoid old CRX packages from unofficial sources — they can contain unwanted code.',
        ],
      },
      {
        type: 'text',
        title: 'Why Firefox or Gecko Keys Do Not Fix Chrome Errors',
        content:
          'You may see Chrome warnings mentioning "applications" or "gecko" in manifest errors. These keys are Firefox-specific metadata used by Gecko-based browsers and are ignored by Chrome. Adding or modifying these fields in manifest.json does not make an extension compatible with Chrome and may not resolve any errors.',
      },
    ],
    faqs: [
      {
        question: 'What is a Chrome extension manifest?',
        answer:
          'A Chrome extension manifest is a JSON file named manifest.json that is included in every Chrome extension package. It tells Chrome the extension\'s name, version, permissions, background scripts, content scripts, and which websites the extension can access. The manifest_version field specifies which Chrome extension platform version the extension targets.',
      },
      {
        question: 'What is Manifest V2?',
        answer:
          'Manifest V2 (MV2) is the older Chrome extension platform version. Extensions targeting MV2 use persistent background pages and older extension APIs. Chrome has phased out MV2 support for ordinary users, which means many older MV2 extensions stopped working in recent Chrome versions.',
      },
      {
        question: 'What is Manifest V3?',
        answer:
          'Manifest V3 (MV3) is the current Chrome extension platform version. MV3 extensions use service workers instead of persistent background pages, have a different permissions model, and use updated APIs. All maintained Chrome extensions should target MV3.',
      },
      {
        question: 'Why did Manifest V2 extensions stop working?',
        answer:
          'Chrome phased out MV2 support for ordinary users as part of its platform modernization plan. This means extensions built for MV2 no longer load in regular Chrome, even if they are installed. Extensions need to be updated to MV3 by their developers to continue working.',
      },
      {
        question: 'Can I change manifest_version from 2 to 3 myself?',
        answer:
          'Simply changing manifest_version in manifest.json from 2 to 3 does not make an extension work. MV3 extensions may use different APIs and require different background script behavior. An extension that only has its manifest version changed without corresponding code updates will likely still fail or behave incorrectly.',
      },
      {
        question: 'What does "unsupported manifest version" mean?',
        answer:
          'Chrome shows this error when an extension is built for a manifest version that Chrome no longer supports for that user. This most commonly happens with MV2 extensions in modern Chrome. The fix requires a real extension update from the developer, not a manual manifest edit.',
      },
      {
        question: 'What does "manifest unknown keys ignored: applications" mean?',
        answer:
          'This message means Chrome found keys in manifest.json that it does not recognize or use. The "applications" key and related "gecko" keys are Firefox-specific metadata. Chrome ignores these keys, which does not make the extension compatible with Chrome and does not fix manifest errors.',
      },
      {
        question: 'Is this related to Firefox or Gecko extension metadata?',
        answer:
          'Partially. Some extensions that were originally built for Firefox may include Firefox-specific manifest keys that Chrome ignores. These keys do not indicate Chrome compatibility and do not resolve manifest version errors. For Chrome, extensions need to be specifically built or updated for Chrome MV3.',
      },
      {
        question: 'What is the practical path forward for users with MV2 extensions?',
        answer:
          'The practical path is to check for a maintained MV3 version in the Chrome Web Store, find a similar actively maintained extension, or use a browser that still supports MV2. Unofficially modified CRX files from mirror sites are not recommended because they can contain unwanted code.',
      },
    ],
    sources: [
      { title: 'Chrome Extensions Manifest V3', url: 'https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3', publisher: 'Google Chrome Developers', reliability: 'primary', supports: 'Official Chrome MV3 documentation and migration overview' },
      { title: 'Chrome Manifest V2 Deprecation', url: 'https://developer.chrome.com/docs/extensions/develop/migrateMV2', publisher: 'Google Chrome Developers', reliability: 'primary', supports: 'Chrome MV2 deprecation timeline and user guidance' },
      { title: 'Chrome Extension Manifest Documentation', url: 'https://developer.chrome.com/docs/extensions/develop/migrate/manifest-v3', publisher: 'Google Chrome Developers', reliability: 'primary', supports: 'Chrome extension manifest.json reference documentation' },
      { title: 'Chrome Extensions Architecture Overview', url: 'https://developer.chrome.com/docs/extensions/develop/concepts/how-extensions-work', publisher: 'Google Chrome Developers', reliability: 'secondary', supports: 'Understanding how Chrome extensions work and how manifest versions affect them' },
    ],
    lastUpdated: '2026-05-28',
    relatedLinks: [
      { label: 'Unsupported Manifest Version Fix', href: '/fix/cannot-install-extension-unsupported-manifest' },
      { label: 'Manifest V2 Disabled Fix', href: '/fix/manifest-v2-disabled' },
      { label: 'Chrome Extensions Disabled Fix', href: '/fix/chrome-extensions-disabled' },
      { label: 'Browse All Alternatives', href: '/alternatives' },
    ],
    primaryCta: { label: 'View Fix for Unsupported Manifest Version', href: '/fix/cannot-install-extension-unsupported-manifest' },
    secondaryCta: { label: 'Browse Extension Alternatives', href: '/alternatives' },
    bestOptions: [
      { label: 'For maintained extensions:', description: 'Check for MV3 update in the Chrome Web Store' },
      { label: 'For alternatives:', description: 'Find similar actively maintained extensions' },
    ],
  },
];

export function getLandingPageBySlug(slug: string): LandingPageRecord | undefined {
  return landingPages.find((page) => page.slug === slug);
}
