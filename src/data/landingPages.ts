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
    title: 'Chrome Userscript Manager Alternatives: Tampermonkey vs Violentmonkey',
    description:
      'Compare Chrome userscript manager options including Tampermonkey and Violentmonkey. Learn how to choose, migrate, and avoid unsafe scripts.',
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
    ],
    primaryCta: { label: 'Compare Tampermonkey vs Violentmonkey', href: '/alternatives/tampermonkey' },
    secondaryCta: { label: 'View Violentmonkey Alternatives', href: '/alternatives/violentmonkey' },
    bestOptions: [
      { label: 'For script ecosystem:', description: 'Tampermonkey (largest community)' },
      { label: 'For open source:', description: 'Violentmonkey (fully open source)' },
      { label: 'For simple needs:', description: 'Browser bookmarks/snippets' },
    ],
  },
];

export function getLandingPageBySlug(slug: string): LandingPageRecord | undefined {
  return landingPages.find((page) => page.slug === slug);
}
