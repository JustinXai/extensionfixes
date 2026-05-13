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
      "Chrome says uBlock Origin is no longer supported? Learn what changed, how uBlock Origin Lite differs, and what options Chrome users have.",
    h1: 'uBlock Origin No Longer Supported in Chrome: What Changed?',
    shortAnswer:
      'Classic uBlock Origin stopped working in Chrome 138 because it uses Manifest V2. The MV3-compatible version developed by the same author is uBlock Origin Lite, available in the Chrome Web Store. While not a complete one-to-one replacement due to MV3 limitations, uBlock Origin Lite provides strong ad blocking for most users who rely on filter lists.',
    aliases: [
      'ublock origin no longer supported',
      'ublock origin chrome 138',
      'ublock origin disabled',
      'ublock origin not working',
      'ad blocker chrome not working',
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
          'uBlock Origin Lite is the Manifest V3-compatible version developed by Raymond Hill, the same developer as classic uBlock Origin. It is available in the Chrome Web Store and provides core ad blocking functionality with MV3 compatibility.',
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
        question: 'Is uBlock Origin Lite an official replacement from the same developer?',
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
      'uBlock Origin Lite is the Manifest V3 version with some feature differences. Both are developed by Raymond Hill. Static filter lists work the same in both versions. Dynamic filtering rules are restricted in uBlock Origin Lite due to MV3 limitations. Most users who rely on filter lists will find uBlock Origin Lite equivalent.',
    aliases: [
      'ublock origin lite vs ublock origin',
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
          'If you use Chrome 138 or later and primarily rely on pre-made filter lists, uBlock Origin Lite provides equivalent blocking. Most users will not notice a difference. The reduced permissions in Lite are actually a privacy improvement.',
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
];

export function getLandingPageBySlug(slug: string): LandingPageRecord | undefined {
  return landingPages.find((page) => page.slug === slug);
}
