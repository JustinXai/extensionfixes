import type { ErrorRecord } from '@/lib/types';

export const errors: ErrorRecord[] = [
  {
    slug: 'this-extension-is-no-longer-supported',
    title: 'Fix "This Extension Is No Longer Supported" in Chrome',
    aliases: [
      'this extension is no longer supported',
      'no longer supported chrome extension',
      'chrome says extension no longer supported',
      'extension disabled after chrome update',
      'extension may soon no longer be supported',
      'chrome extension not working anymore',
    ],
    shortAnswer:
      'Chrome shows "This extension is no longer supported" when an extension uses outdated APIs, was removed from the Web Store, or is incompatible with your Chrome version. Recommended approach: find a maintained replacement from the Chrome Web Store. Avoid downloading old copies from unofficial sources.',
    whyItHappens: [
      'The extension relies on Manifest V2, which Chrome has fully deprecated in Chrome 138.',
      'The extension was removed from the Chrome Web Store for policy violations.',
      'The developer stopped maintaining the extension and it became incompatible with updates.',
      'Chrome proactively disabled the extension due to detected security concerns.',
      'The extension is incompatible with your specific Chrome version.',
    ],
    whatYouCanDo: [
      'Search for the extension name in the Chrome Web Store for its current status.',
      'Check Extension Fixes for alternatives to common affected extensions.',
      'Look for official MV3 versions or community-maintained forks.',
      'Export your extension settings if still accessible before removing it.',
      'Consider alternative browsers like Firefox if you need specific extension functionality.',
      'Contact the extension developer to inquire about MV3 updates.',
    ],
    whatNotToDo: [
      'Do not download CRX files from unofficial download sites.',
      'Do not install extensions with similar names assuming they are successors.',
      'Do not disable Chrome security features to force-install unsupported extensions.',
      'Do not give excessive permissions to unknown replacement extensions.',
      'Do not assume an extension is safe just because it appears legitimate.',
    ],
    relatedExtensionSlugs: ['switchyomega', 'ublock-origin', 'great-suspender'],
    faqs: [
      {
        question: 'Why does Chrome say my extension is no longer supported?',
        answer:
          'Chrome displays this message when an extension uses deprecated Manifest V2 APIs, was removed from the Chrome Web Store, or has become incompatible with your Chrome version. The specific reason depends on the extension.',
      },
      {
        question: 'Can I find an official MV3 update for my extension?',
        answer:
          'Some developers have released MV3-compatible updates or successors. Check the Chrome Web Store listing or the developer website for official updates. If no official update exists, look for community-maintained alternatives.',
      },
      {
        question: 'Can I still use my extension in another browser?',
        answer:
          'Some extensions work in Firefox, Edge, or other Chromium browsers. Firefox still supports Manifest V2 extensions. Check if your extension is available for other browsers.',
      },
      {
        question: 'What is Manifest V2 and why does it matter?',
        answer:
          'Manifest V2 (MV2) and Manifest V3 (MV3) are Chrome extension platform versions. MV3 is the newer standard with improved security. Chrome 138 disabled MV2 extensions by default, affecting extensions that have not updated to MV3.',
      },
      {
        question: 'How do I find a safe alternative?',
        answer:
          'Look for alternatives in the Chrome Web Store with good reviews, check developer credibility, and verify the permissions match the stated functionality. Extension Fixes provides recommendations for common affected extensions.',
      },
    ],
    sources: [
      {
        title: 'Chrome Manifest V2 Deprecation Timeline',
        url: 'https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline',
        publisher: 'Google Chrome Developers',
      },
      {
        title: 'Chrome Web Store Program Policies',
        url: 'https://developer.chrome.com/docs/webstore/program-policies/policies',
        publisher: 'Google Chrome Developers',
      },
    ],
    lastUpdated: '2026-05-13',
  },
  {
    slug: 'manifest-v2-disabled',
    title: 'Manifest V2 Disabled in Chrome: What You Can Do',
    aliases: [
      'manifest v2 disabled',
      'mv2 disabled chrome',
      'manifest v2 no longer supported',
      'chrome 138 mv2 disabled',
      'chrome disabled mv2',
      'mv2 deprecation',
      'manifest v3 migration',
    ],
    shortAnswer:
      'Chrome disabled Manifest V2 extensions starting with Chrome 138. This affects extensions not updated to Manifest V3. If your extensions stopped working, look for MV3-compatible replacements, check for official updates from developers, or consider using Firefox which still supports MV2 extensions.',
    whyItHappens: [
      'Google announced Manifest V2 deprecation in 2020, beginning gradual phase-out.',
      'Chrome 127-137 displayed warnings for MV2 extensions.',
      'Chrome 138 fully disabled MV2 extensions by default for all users.',
      'Manifest V3 offers improved security, privacy, and performance.',
      'Enterprise policies may allow extended MV2 support on managed devices only.',
    ],
    whatYouCanDo: [
      'Search for MV3-compatible replacements in the Chrome Web Store.',
      'Check if your extension developer has released an official MV3 version.',
      'Look for community-maintained forks designed as MV3 successors.',
      'Consider Firefox if you need specific MV2 extension functionality.',
      'Use browser-native features that may have replaced extension capabilities.',
      'Check Extension Fixes for alternatives to commonly affected extensions.',
    ],
    whatNotToDo: [
      'Do not try to force-enable MV2 through Chrome flags.',
      'Do not download bypass tools from untrusted sources.',
      'Do not assume all MV2 extensions are unsafe; they simply need updating.',
      'Do not disable Chrome security features to install old extensions.',
    ],
    relatedExtensionSlugs: ['switchyomega', 'ublock-origin'],
    faqs: [
      {
        question: 'What is Manifest V3?',
        answer:
          'Manifest V3 (MV3) is the latest Chrome extension platform, replacing Manifest V2. Key changes include the declarativeNetRequest API replacing the webRequest API and modifications to background script handling. MV3 provides better security, privacy controls, and performance improvements.',
      },
      {
        question: 'When exactly did Chrome disable MV2?',
        answer:
          'Chrome began phasing out MV2 in 2023 with warnings in Chrome 127-137. Chrome 138 (released in early 2026) fully disabled MV2 extensions by default for all users.',
      },
      {
        question: 'Can I still use MV2 extensions in any Chrome version?',
        answer:
          'Chrome enterprise administrators can enable the ExtensionManifestV2Enabled policy for managed devices, extending MV2 support. However, this is only available for enterprise and educational organizations, not individual users.',
      },
      {
        question: 'Why did Google deprecate MV2?',
        answer:
          'Google states that MV3 provides better security by limiting extension capabilities, improves privacy with user-controlled permissions, and enhances performance by reducing resource usage.',
      },
      {
        question: 'Will all my extensions stop working?',
        answer:
          'Popular extensions have been updated to MV3 or have MV3-compatible alternatives. Some less-maintained extensions may stop working permanently. Check Extension Fixes for alternatives to affected extensions.',
      },
    ],
    sources: [
      {
        title: 'Chrome Manifest V2 Deprecation Timeline',
        url: 'https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline',
        publisher: 'Google Chrome Developers',
      },
      {
        title: 'Manifest V3 Migration Guide',
        url: 'https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3',
        publisher: 'Google Chrome Developers',
      },
    ],
    lastUpdated: '2026-05-13',
  },
  {
    slug: 'chrome-disabled-extension',
    title: 'Chrome Disabled My Extension: Causes and Safe Fixes',
    aliases: [
      'chrome disabled my extension',
      'extension disabled by chrome',
      'extension disabled by administrator',
      'chrome removed extension',
      'extension disappeared from chrome',
      'chrome turned off my extension',
    ],
    shortAnswer:
      'Chrome disables extensions for various reasons: deprecated APIs, removal from the Web Store, security concerns, or administrator policies. Identify the exact error message and extension name, then search for maintained replacements or MV3-compatible alternatives.',
    whyItHappens: [
      'The extension uses Manifest V2 which Chrome has deprecated.',
      'The extension was removed from the Chrome Web Store for policy violations.',
      'Chrome flagged the extension for security or privacy concerns.',
      'An administrator on managed devices has disabled the extension.',
      'The extension is incompatible with your current Chrome version.',
      'The extension was proactively disabled due to detected threats.',
    ],
    whatYouCanDo: [
      'Note the exact error message and extension name.',
      'Check the Chrome Web Store to see if the extension is still listed.',
      'Search for official MV3 versions or developer announcements.',
      'Look for alternatives on Extension Fixes.',
      'If on a managed device, contact your IT administrator about policies.',
      'Review Chrome settings if you previously disabled extension safety features.',
    ],
    whatNotToDo: [
      'Do not disable Chrome security features to install problematic extensions.',
      'Do not download extensions from third-party sites claiming to fix issues.',
      'Do not ignore security warnings about extensions.',
      'Do not reinstall removed extensions from unofficial sources.',
    ],
    relatedExtensionSlugs: ['great-suspender', 'switchyomega', 'ublock-origin'],
    faqs: [
      {
        question: 'Why did Chrome disable an extension I trust?',
        answer:
          'Chrome may disable extensions for technical reasons (deprecated APIs) or security concerns, regardless of your trust level. Extensions can become problematic due to ownership changes, abandoned development, or compatibility issues.',
      },
      {
        question: 'Can my IT administrator see which extensions I use?',
        answer:
          'Yes, on managed devices (work or school computers), administrators can install, disable, and monitor extensions. Contact your IT department if you believe an extension was incorrectly disabled.',
      },
      {
        question: 'How can I tell if an extension is safe to reinstall?',
        answer:
          'Verify the extension is still in the Chrome Web Store, read recent reviews, check the developer website, and ensure permissions are appropriate. For extensions removed due to security concerns, do not reinstall.',
      },
      {
        question: 'What should I do if Chrome disabled multiple extensions?',
        answer:
          'Multiple extensions being disabled typically indicates Chrome MV2 deprecation. Check Extension Fixes for MV3 alternatives to your affected extensions.',
      },
    ],
    sources: [
      {
        title: 'Chrome Manifest V2 Deprecation Timeline',
        url: 'https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline',
        publisher: 'Google Chrome Developers',
      },
      {
        title: 'Chrome Web Store Program Policies',
        url: 'https://developer.chrome.com/docs/webstore/program-policies/policies',
        publisher: 'Google Chrome Developers',
      },
      {
        title: 'Manage extensions on work or school Chromebooks',
        url: 'https://support.google.com/chrome/a/answer/9296680',
        publisher: 'Google Chrome Help',
      },
    ],
    lastUpdated: '2026-05-13',
  },
  {
    slug: 'extension-removed-from-chrome-web-store',
    title: 'Chrome Extension Removed from Web Store: What to Do Next',
    aliases: [
      'extension removed from chrome web store',
      'extension removed from store',
      'chrome web store removed extension',
      'extension no longer in web store',
      'developer removed extension',
    ],
    shortAnswer:
      'Chrome removes extensions from the Web Store for policy violations, developer request, or malware detection. Do not install unofficial copies of removed extensions. Check for official alternatives, community forks, or browser-native features as your next step.',
    whyItHappens: [
      'The developer voluntarily removed the extension from the Chrome Web Store.',
      'The extension violated Chrome Web Store policies (spam, misleading content, or deceptive practices).',
      'Google detected malware, phishing, or security threats associated with the extension.',
      'The extension made unauthorized use of user data or violated privacy policies.',
      'The developer stopped maintaining the extension and it was auto-removed after a period of inactivity.',
    ],
    whatYouCanDo: [
      'Check the Chrome Web Store for an official alternative by the same developer.',
      'Search Extension Fixes for known alternatives to common removed extensions.',
      'Look for community-maintained forks that continue development.',
      'Check if Firefox or other browsers have the extension available.',
      'Use browser-native features that may replace the extension\'s functionality.',
      'Export settings from any remaining installed version before it is also disabled.',
      'Report the extension if you believe it was incorrectly removed or if you found malware.',
    ],
    whatNotToDo: [
      'Do not download CRX files from unofficial download sites for removed extensions.',
      'Do not install similar-looking extensions from unknown developers as replacements.',
      'Do not disable Chrome security features to load unpacked extensions.',
      'Do not assume a removed extension was malicious — some are removed for policy or maintenance reasons.',
    ],
    relatedExtensionSlugs: ['great-suspender'],
    faqs: [
      {
        question: 'Why was my extension removed from the Chrome Web Store?',
        answer:
          'Extensions are removed for several reasons: developer request (voluntary removal), policy violations (spam, misleading content, or deceptive practices), malware detection (security threats or unauthorized data collection), or prolonged inactivity (Chrome auto-removes extensions not updated for extended periods). The specific reason depends on the extension.',
      },
      {
        question: 'Is a removed extension dangerous to keep using?',
        answer:
          'Not necessarily. Extensions can be removed for non-security reasons like developer request or policy violations. However, if an extension was removed due to malware or security concerns, Chrome may proactively disable installed copies. Check the Chrome Web Store listing and news sources for context.',
      },
      {
        question: 'Can I reinstall a removed extension?',
        answer:
          'No. Once removed from the Chrome Web Store, the extension cannot be reinstalled. If you still have the extension installed, it may continue to work temporarily, but you should not expect long-term support or updates. Chrome may also proactively disable removed extensions.',
      },
      {
        question: 'How do I find a safe replacement for a removed extension?',
        answer:
          'Check if the developer released an alternative in the Chrome Web Store. Search Extension Fixes for known alternatives. Look for community forks on GitHub. Verify the replacement developer and permissions before installing. Use browser-native features as a fallback.',
      },
      {
        question: 'What if the extension was removed by mistake?',
        answer:
          'If you believe an extension was incorrectly removed, you can appeal through the Chrome Web Store developer dashboard. For general users, you can file feedback through Chrome settings. However, the appeals process is primarily available to extension developers.',
      },
    ],
    sources: [
      {
        title: 'Chrome Web Store Program Policies',
        url: 'https://developer.chrome.com/docs/webstore/program-policies/policies',
        publisher: 'Google Chrome Developers',
      },
      {
        title: 'Chrome Web Store Developer Distribution Agreement',
        url: 'https://developer.chrome.com/docs/webstore/program-policies/',
        publisher: 'Google Chrome Developers',
      },
      {
        title: 'Manage extensions on work or school Chromebooks',
        url: 'https://support.google.com/chrome/a/answer/9296680',
        publisher: 'Google Chrome Help',
      },
    ],
    lastUpdated: '2026-05-18',
  },
];

export function getErrorBySlug(slug: string): ErrorRecord | undefined {
  return errors.find((err) => err.slug === slug);
}

export function getAllErrorSlugs(): string[] {
  return errors.map((err) => err.slug);
}
