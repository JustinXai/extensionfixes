import type { ErrorRecord } from '@/lib/types';

export const errors: ErrorRecord[] = [
  {
    slug: 'this-extension-was-turned-off-because-it-is-no-longer-supported',
    title: 'This Extension Was Turned Off Because It Is No Longer Supported',
    aliases: [
      'this extension was turned off because it is no longer supported',
      'chrome turned off extension',
      'extension was turned off no longer supported',
      'extension turned off automatically',
      'chrome disabled extension automatically',
    ],
    shortAnswer:
      'Chrome shows "This extension was turned off because it is no longer supported" when an extension has been automatically disabled. This happens when the extension uses deprecated APIs, was removed from the Web Store, or violates current Chrome policies. You generally cannot re-enable it — check the Chrome Web Store for an MV3 update or find a maintained alternative.',
    whyItHappens: [
      'Chrome 138+ disabled all Manifest V2 extensions by default for regular users.',
      'The extension was removed from the Chrome Web Store by the developer or due to policy violations.',
      'Google proactively disabled the extension due to detected security concerns.',
      'The extension became incompatible with your current Chrome version.',
    ],
    whatYouCanDo: [
      'Check the Chrome Web Store for an official MV3-compatible version of the extension.',
      'Search Extension Fixes for your extension name to find verified alternatives.',
      'Export any remaining extension settings if the option is still accessible.',
      'Look for official announcements from the extension developer.',
      'Contact the extension developer to ask about MV3 updates.',
      'Consider Firefox as an alternative browser if you need specific extension functionality.',
    ],
    whatNotToDo: [
      'Do not search for and download CRX files of the old extension.',
      'Do not install extensions with similar names assuming they are from the same developer.',
      'Do not disable Chrome security features to force-install unsupported extensions.',
      'Do not grant broad permissions to unknown replacement extensions.',
    ],
    relatedExtensionSlugs: ['ublock-origin', 'great-suspender', 'switchyomega'],
    faqs: [
      {
        question: 'Why did Chrome turn off my extension?',
        answer:
          'The most common reason in 2026 is Manifest V2 deprecation — Chrome 138 and later disabled all MV2 extensions by default. Other reasons include Web Store removal (policy violations, developer request, or malware detection) and proactive security disablement by Google.',
      },
      {
        question: 'Can I re-enable the extension that was turned off?',
        answer:
          'Generally no. If the extension was disabled due to MV2 deprecation, Chrome 138+ does not support re-enabling MV2 extensions. If it was removed from the Web Store, Chrome will not allow reinstallation. Your best option is to find an MV3-compatible alternative.',
      },
      {
        question: 'What does this message mean for my browser security?',
        answer:
          'Chrome proactively disables extensions that pose risks. If the extension was disabled for security reasons, it is best to not attempt to reinstall it from unofficial sources. Use verified alternatives from the Chrome Web Store instead.',
      },
      {
        question: 'How do I find a replacement for my turned-off extension?',
        answer:
          'Check the Chrome Web Store for MV3 updates from the same developer. Search Extension Fixes for your extension name and category. Verify alternative developers and permissions before installing any new extension.',
      },
      {
        question: 'Will my extension settings be lost?',
        answer:
          'If the extension still opens partially, export your settings immediately. Many extensions allow exporting profiles or configuration files. After finding a replacement, check if it supports importing your exported settings.',
      },
      {
        question: 'What if there is no MV3 alternative for my extension?',
        answer:
          'Consider browser-native features, alternative browsers that still support MV2 (like Firefox), or workflow adjustments. Some extensions have community-maintained forks worth checking on GitHub.',
      },
      {
        question: 'Why does Chrome say "these extensions were turned off because they\'re no longer supported"?',
        answer:
          'Chrome may display the plural "these extensions" version of this message when multiple extensions are disabled at the same time, typically during a Chrome update or batch disable event. Each extension listed was disabled independently — some may be MV2 extensions caught in the same deprecation wave, others may have been removed from the Web Store or flagged for security reasons. Check each extension individually: remove unsupported ones, look for MV3 updates, and use maintained alternatives from the Chrome Web Store.',
      },
    ],
    sources: [
      {
        title: 'Chrome Manifest V2 Deprecation Timeline',
        url: 'https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline',
        publisher: 'Google Chrome Developers',
        sourceType: 'chrome-developers',
        reliability: 'primary',
        supports: 'Chrome MV2 deprecation timeline, which Chrome versions disabled MV2, and what extensions are affected',
      },
      {
        title: 'Chrome Web Store Program Policies',
        url: 'https://developer.chrome.com/docs/webstore/program-policies/policies',
        publisher: 'Google Chrome Developers',
        sourceType: 'chrome-developers',
        reliability: 'secondary',
        supports: 'Why extensions are removed from the Chrome Web Store and what policies apply',
      },
      {
        title: 'Extension Fixes Search Tool',
        url: 'https://extensionfixes.com/tools/extension-search',
        publisher: 'Extension Fixes',
        sourceType: 'alternative-directory',
        reliability: 'discovery',
        supports: 'Finding MV3 alternatives for common affected extensions',
      },
    ],
    lastUpdated: '2026-05-22',
    keyTakeaways: [
      'Chrome shows this message when an extension has been automatically disabled — usually due to MV2 deprecation or Web Store removal.',
      'You generally cannot re-enable a turned-off extension in regular Chrome.',
      'Check the Chrome Web Store for an official MV3 update from the same developer.',
      'Extension Fixes provides verified alternatives for commonly affected extensions.',
      'Do not download CRX files from unofficial sources — they may contain unwanted code.',
      'Export any accessible settings before the extension stops working entirely.',
    ],
    currentStatus: [
      { label: 'MV2 extensions', value: 'Disabled in Chrome 138+ for regular users', variant: 'bad' },
      { label: 'Firefox', value: 'Still supports MV2 extensions', variant: 'good' },
      { label: 'Chrome Web Store', value: 'Check for official MV3 updates', variant: 'neutral' },
    ],
    commonFailedFixes: [
      {
        tried: 'Search for and install the old version as a CRX file',
        whyItFails: 'Chrome may block loading MV2 extensions from unofficial sources. Even if it loads, the extension will not function in modern Chrome.',
      },
      {
        tried: 'Wait for Chrome to restore the extension automatically',
        whyItFails: 'Chrome does not automatically restore disabled extensions. The deprecation is permanent for regular Chrome users.',
      },
      {
        doesNotWork: 'Finding an identical extension with a different name — always verify the developer before installing.',
      },
    ],
  },
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
      'this extension was turned off because it is no longer supported',
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
      {
        question: 'What does "This extension was turned off because it is no longer supported" mean?',
        answer:
          'Chrome may display this message when an extension uses deprecated APIs, was removed from the Web Store, is no longer maintained, or violates current extension platform requirements. The practical next steps are: check whether the developer has a current version, use a maintained alternative from the Chrome Web Store, or remove the extension if it asks for unexpected permissions.',
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
      {
        question: 'Does Chrome 140 support Manifest V2 extensions?',
        answer:
          'No. Chrome 140 does not bring back Manifest V2 support for ordinary users. Manifest V2 extensions were disabled earlier in the Chrome MV2 phase-out. Users should use maintained Manifest V3 extensions or suitable alternatives.',
      },
    ],
    sources: [
      {
        title: 'Chrome Manifest V2 Deprecation Timeline',
        url: 'https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline',
        publisher: 'Google Chrome Developers',
        sourceType: 'chrome-developers',
        reliability: 'primary',
        supports: 'Chrome MV2 deprecation schedule, which Chrome versions disabled MV2, and what extensions are affected',
      },
      {
        title: 'Manifest V3 Migration Guide',
        url: 'https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3',
        publisher: 'Google Chrome Developers',
        sourceType: 'chrome-developers',
        reliability: 'primary',
        supports: 'What Manifest V3 is, why it replaced MV2, and what changes extensions must make',
      },
      {
        title: 'Chrome Web Store Program Policies',
        url: 'https://developer.chrome.com/docs/webstore/program-policies/policies',
        publisher: 'Google Chrome Developers',
        sourceType: 'chrome-developers',
        reliability: 'secondary',
        supports: 'Why extensions are removed from the Chrome Web Store and what policies apply',
      },
      {
        title: 'Manage extensions on work or school Chromebooks',
        url: 'https://support.google.com/chrome/a/answer/9296680',
        publisher: 'Google Chrome Help',
        sourceType: 'documentation',
        reliability: 'secondary',
        supports: 'Why managed devices may have different extension policies than consumer Chrome',
      },
    ],
    lastUpdated: '2026-05-21',
    keyTakeaways: [
      'Chrome 138 disabled MV2 extensions by default for all regular users.',
      'Chrome 139 and later remove MV2 support more completely.',
      'Ordinary users generally cannot permanently restore MV2 support in modern Chrome.',
      'Enterprise-managed devices are a special case with the ExtensionManifestV2Enabled policy.',
      'The recommended path is to find MV3-compatible replacements or official updates.',
      'Firefox remains an option if you need specific MV2 extension functionality.',
    ],
    currentStatus: [
      { label: 'MV2 in Chrome 138+', value: 'Fully disabled for regular users', variant: 'bad' },
      { label: 'Enterprise policy', value: 'ExtensionManifestV2Enabled available for managed devices', variant: 'neutral' },
      { label: 'Firefox', value: 'Still supports MV2 extensions', variant: 'good' },
    ],
    commonFailedFixes: [
      {
        tried: 'Use Chrome flags to re-enable MV2 extensions',
        whyItFails: 'Chrome flags do not provide a working path to restore MV2 extensions in Chrome 138+. The flags related to MV2 were removed or disabled.',
      },
      {
        tried: 'Download MV2 extensions as CRX files and load them unpacked',
        whyItFails: 'Chrome blocks loading MV2 extensions from unofficial sources. Even if loaded, they will not function in modern Chrome.',
      },
      {
        doesNotWork: 'Waiting for Chrome to restore MV2 support — it will not happen in regular Chrome.',
      },
    ],
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
        sourceType: 'chrome-developers',
        reliability: 'primary',
        supports: 'Why MV2 extensions are disabled, which Chrome versions apply, and what the deprecation timeline is',
      },
      {
        title: 'Chrome Web Store Program Policies',
        url: 'https://developer.chrome.com/docs/webstore/program-policies/policies',
        publisher: 'Google Chrome Developers',
        sourceType: 'chrome-developers',
        reliability: 'primary',
        supports: 'Why Chrome removes extensions from the Web Store and what policies developers must follow',
      },
      {
        title: 'Manage extensions on work or school Chromebooks',
        url: 'https://support.google.com/chrome/a/answer/9296680',
        publisher: 'Google Chrome Help',
        sourceType: 'documentation',
        reliability: 'secondary',
        supports: 'Why IT administrators can disable extensions on managed devices',
      },
    ],
    lastUpdated: '2026-05-18',
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
  {
    slug: 'cannot-install-extension-unsupported-manifest',
    title: 'Cannot Install Extension Because It Uses an Unsupported Manifest Version',
    aliases: [
      'cannot install extension unsupported manifest',
      'unsupported manifest version chrome extension',
      'this extension is not supported because it uses an unsupported manifest version',
      'chrome cannot install extension manifest v2',
      'extension uses an unsupported manifest version',
    ],
    shortAnswer:
      'Chrome shows an unsupported manifest version error when an extension package uses an older extension format that modern Chrome no longer accepts, most commonly Manifest V2. In current Chrome versions, ordinary users generally cannot fix this by changing a simple setting. Reinstalling the same extension, downloading random CRX files, or disabling security protections can create privacy and malware risks. The safer path is to check whether the developer provides a Manifest V3 version, install a maintained alternative from the Chrome Web Store, or use a browser that still supports the extension you need.',
    whyItHappens: [
      'Chrome extensions use manifest files to declare permissions, scripts, background behavior, and APIs.',
      'Older Manifest V2 packages may no longer be accepted by modern Chrome.',
      'The Chrome Web Store itself may block installation of packages using unsupported manifest formats.',
      'This error happens during installation, not after an extension has been working normally.',
      'It typically means the extension package has not been updated to the Manifest V3 format.',
    ],
    whatYouCanDo: [
      'Check the Chrome Web Store listing for an updated Manifest V3 version of the extension.',
      'Visit the developer\'s official website or GitHub release page for migration notes.',
      'Search for a maintained alternative from the Chrome Web Store.',
      'Export settings from any old extension package before removing it, if possible.',
      'Consider Firefox as an alternative browser if you need specific MV2 extension functionality.',
    ],
    whatNotToDo: [
      'Do not download the same extension from a random CRX mirror.',
      'Do not enable Developer Mode and load an old unpacked extension as a fix.',
      'Do not change Chrome flags to allow legacy MV2 extensions as a permanent fix.',
      'Do not reinstall the same old package repeatedly.',
      'Do not disable browser security protections to install unsupported extensions.',
    ],
    relatedExtensionSlugs: ['ublock-origin', 'great-suspender', 'switchyomega', 'foxyproxy'],
    faqs: [
      {
        question: 'What does "could not load manifest" mean?',
        answer:
          '"Could not load manifest" typically means Chrome found an extension package but could not parse its manifest.json file. This can happen when the manifest file is corrupted, uses invalid syntax, or declares a manifest version that Chrome does not recognize. It often appears alongside the unsupported manifest version error. If the manifest file itself is readable, check for syntax errors, missing required fields, or unrecognized version numbers.',
      },
      {
        question: 'What does unsupported manifest version mean in Chrome?',
        answer:
          'Chrome shows this error when an extension package declares a manifest version that modern Chrome no longer accepts, typically Manifest V2. The manifest file tells Chrome how the extension works, what permissions it needs, and which APIs it uses. If the manifest version is no longer supported, Chrome will block the installation.',
      },
      {
        question: 'Can I force Chrome to install a Manifest V2 extension?',
        answer:
          'Ordinary users generally cannot permanently force Chrome to install unsupported MV2 extensions. Developer Mode allows loading unpacked extensions but does not make unsupported APIs compatible with modern Chrome. Flags are temporary and version-dependent. The recommended path is to find a maintained MV3 version or an alternative.',
      },
      {
        question: 'Is it safe to download an old CRX file?',
        answer:
          'Downloading old CRX files from random third-party mirrors is not safe. These packages may be outdated, modified, or contain unwanted code. They may request broad browsing permissions and could be used to collect your browsing data. Always use the official Chrome Web Store or the developer\'s verified release page.',
      },
      {
        question: 'Is this the same as the "extension was turned off" message?',
        answer:
          'No. The "unsupported manifest version" error appears during installation — Chrome refuses to install the package. The "extension was turned off" message appears after an extension is already installed — Chrome disabled a previously working extension. Both are related to MV2 deprecation but happen at different stages.',
      },
      {
        question: 'Can the original developer fix this?',
        answer:
          'Yes, if the developer releases a Manifest V3 version of the extension. Many popular extensions have already been updated. Check the Chrome Web Store for the extension\'s current listing, or visit the developer\'s official website or GitHub page for migration announcements.',
      },
      {
        question: 'Are Manifest V3 extensions always worse?',
        answer:
          'Not necessarily. MV3 has stricter security constraints, which means some powerful APIs are limited or removed. For most users, well-maintained MV3 extensions provide equivalent functionality. Some niche features may not be available in MV3 versions, but this depends on the specific extension.',
      },
      {
        question: 'What should I do if I need this extension for work?',
        answer:
          'Check whether the developer has released an MV3 version or announced migration plans. If no official MV3 version exists, look for a maintained alternative from the Chrome Web Store. For enterprise-managed Chrome devices, your IT administrator may be able to use enterprise extension policies. Always verify any replacement extension\'s developer identity and permissions before installing.',
      },
      {
        question: 'Why does Chrome say an extension uses an unsupported manifest version?',
        answer:
          'Chrome shows this error when the extension\'s manifest.json declares a manifest version that modern Chrome no longer accepts. This usually means the extension uses Manifest V2, which is no longer supported for ordinary users. The manifest file controls the extension\'s permissions, background scripts, and API usage. When the manifest version is no longer in Chrome\'s supported list, Chrome blocks installation regardless of the extension\'s other contents.',
      },
      {
        question: 'What does "manifest unknown keys ignored: applications" mean?',
        answer:
          'The "applications" key in a manifest.json file is a Gecko-specific field used by Firefox to declare browser compatibility. Chrome does not recognize this key and ignores it. If Chrome also shows an unsupported manifest version error, the extension package is using a manifest format that Chrome does not accept — typically Manifest V2. Simply removing the applications key does not make an MV2 extension compatible with modern Chrome.',
      },
      {
        question: 'Is this related to Firefox or Gecko manifest keys?',
        answer:
          'Yes, partially. Some extension packages include Firefox-specific manifest fields like "applications" (in Manifest V2) or "browser_specific_settings" (in Manifest V3). Chrome ignores these fields because they are Gecko-specific. However, if the manifest version itself is unsupported in Chrome, removing Firefox-specific keys alone will not resolve the issue.',
      },
      {
        question: 'Can I edit manifest.json to make the extension install?',
        answer:
          'Changing the manifest version number in manifest.json does not make an MV2 extension compatible with modern Chrome. The underlying APIs, background script behavior, and permissions that the extension uses are still based on MV2 design. Developers who want to support Chrome need to rewrite extension code to use the MV3 API. Editing manifest.json to bump the version number without corresponding code changes is not a proper migration and will not result in a working extension.',
      },
    ],
    sources: [
      {
        title: 'Chrome Manifest V2 Deprecation Timeline',
        url: 'https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline',
        publisher: 'Google Chrome Developers',
        sourceType: 'chrome-developers',
        reliability: 'primary',
        supports: 'Chrome MV2 deprecation timeline, which Chrome versions disabled MV2, and what extensions are affected',
      },
      {
        title: 'Manifest V3 Migration Guide',
        url: 'https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3',
        publisher: 'Google Chrome Developers',
        sourceType: 'chrome-developers',
        reliability: 'primary',
        supports: 'What Manifest V3 is, why it replaced MV2, and what changes extensions must make',
      },
      {
        title: 'Chrome Web Store Program Policies',
        url: 'https://developer.chrome.com/docs/webstore/program-policies/policies',
        publisher: 'Google Chrome Developers',
        sourceType: 'chrome-developers',
        reliability: 'secondary',
        supports: 'Why unsupported extension packages may be blocked from the Chrome Web Store',
      },
    ],
    lastUpdated: '2026-05-24',
    keyTakeaways: [
      'This error usually appears before installation, not after an extension is already enabled.',
      'It often means the extension package uses Manifest V2 or another outdated manifest format.',
      'Reinstalling the same CRX usually does not solve the underlying compatibility problem.',
      'Random CRX downloads can expose your browser data and should be avoided.',
      'The best long-term fix is a maintained Manifest V3 version or a trusted alternative.',
    ],
    currentStatus: [
      { label: 'Chrome status', value: 'Modern Chrome blocks unsupported manifest formats', variant: 'bad' },
      { label: 'User control', value: 'Ordinary users generally cannot permanently re-enable MV2 installation', variant: 'bad' },
      { label: 'Safer path', value: 'Use an official MV3 update or a maintained alternative', variant: 'good' },
      { label: 'Last reviewed', value: 'May 23, 2026', variant: 'neutral' },
    ],
    commonFailedFixes: [
      {
        tried: 'Download the same extension from a random CRX mirror',
        whyItFails: 'It may be outdated, modified, or malicious.',
        saferAlternative: 'Use the Chrome Web Store or the developer\'s official release page.',
      },
      {
        tried: 'Enable Developer Mode and load an old unpacked extension',
        whyItFails: 'Developer Mode does not make unsupported APIs compatible with modern Chrome.',
        saferAlternative: 'Use an MV3-compatible build.',
      },
      {
        tried: 'Change Chrome flags to allow legacy MV2 extensions',
        whyItFails: 'Flags are temporary, version-dependent, and may disappear after Chrome updates.',
        saferAlternative: 'Treat this only as a short-term data export path, not a fix.',
      },
      {
        tried: 'Reinstall the same old package repeatedly',
        whyItFails: 'The manifest version remains unsupported regardless of how many times you reinstall.',
        saferAlternative: 'Install a maintained MV3 version.',
      },
      {
        tried: 'Disable browser security protections',
        whyItFails: 'It increases the risk of malicious extensions reading pages, cookies, or credentials.',
        saferAlternative: 'Replace the extension with a maintained alternative.',
      },
    ],
  },
  {
    slug: 'chrome-140-manifest-v2',
    title: 'Chrome 140 and Manifest V2 Extensions',
    aliases: [
      'chrome 140 manifest v2',
      'chrome v2 manifest',
      'chrome manifest v2 extensions',
      'manifest v2 chrome 140',
      'chrome 140 mv2',
      'chrome 140 extensions disabled',
      'chrome 140 old extensions not working',
    ],
    shortAnswer:
      'Chrome 140 does not bring back Manifest V2 support for ordinary users. Manifest V2 extensions were disabled earlier in the MV2 phase-out, so old extensions that depend on MV2 usually do not work in modern Chrome. Users should check for maintained Manifest V3 updates, use trusted alternatives, or consider another browser only when they specifically need classic extension behavior. Avoid installing old CRX files or disabling browser protections, because unsupported extensions can request broad access to pages you visit.',
    whyItHappens: [
      'Chrome 140 is part of the ongoing Manifest V2 deprecation and does not restore MV2 support for regular users.',
      'Chrome 138 fully disabled MV2 extensions by default for all non-enterprise users.',
      'Chrome 140 follows the same MV2 deprecation schedule with no special exception for regular users.',
      'The MV2-to-MV3 migration is a platform-level change, not a per-extension setting.',
      'Chrome enterprise administrators can still use enterprise extension policies to manage MV2 on managed devices.',
    ],
    whatYouCanDo: [
      'Identify which extensions stopped working and check whether MV3 updates are available.',
      'Search the Chrome Web Store for maintained MV3-compatible versions from the same developer.',
      'Use Extension Fixes to find verified alternatives for affected extensions.',
      'Export settings from old extensions if possible before removing them.',
      'Consider Firefox as a secondary browser for specific extensions that only work with MV2.',
      'Report extension migration issues to the developer\'s official support channels.',
    ],
    whatNotToDo: [
      'Do not install old CRX files from mirror sites.',
      'Do not keep using an outdated Chrome build to preserve MV2 support.',
      'Do not enable developer flags to try to force MV2 support — flags are temporary and version-dependent.',
      'Do not disable browser protections to run old extensions, because this exposes your browsing data.',
    ],
    relatedExtensionSlugs: ['ublock-origin', 'foxyproxy', 'switchyomega', 'great-suspender'],
    faqs: [
      {
        question: 'Does Chrome 140 support Manifest V2 extensions?',
        answer:
          'No. Chrome 140 does not restore Manifest V2 support for ordinary users. MV2 extensions were disabled at Chrome 138. Chrome 140 follows the same platform behavior with no special exception for regular users.',
      },
      {
        question: 'Why did my Chrome extensions stop working?',
        answer:
          'Most extensions that stopped working in Chrome 138 and later are Manifest V2 extensions. Chrome 138 disabled MV2 by default for all non-enterprise users as part of the platform migration. Chrome 140 follows the same policy.',
      },
      {
        question: 'Can I turn Manifest V2 back on?',
        answer:
          'Ordinary users generally cannot restore MV2 support. Chrome does not provide a user-accessible setting to re-enable MV2. Flags and developer mode do not make unsupported APIs compatible with modern Chrome.',
      },
      {
        question: 'Is Chrome 140 different from Chrome 138 for MV2?',
        answer:
          'Chrome 138 fully disabled MV2. Chrome 140 follows the same policy without restoring MV2 support. The practical difference for users is that some extensions may now be unavailable in additional contexts compared to earlier versions.',
      },
      {
        question: 'Can enterprise-managed devices still use MV2?',
        answer:
          'Enterprise Chrome administrators can use the ExtensionManifestV2Enabled policy to extend MV2 support on managed devices. However, this is only available for organizational deployments, not individual users.',
      },
      {
        question: 'Should I install old CRX files?',
        answer:
          'No. Old CRX files from unofficial sources are not recommended. They may be outdated, modified, or incompatible with modern Chrome. Using unsupported extensions from unverified sources creates security risks without guaranteeing functionality.',
      },
      {
        question: 'What should I use instead of old MV2 extensions?',
        answer:
          'Look for MV3-compatible updates from the same developer, or find maintained alternatives in the Chrome Web Store. Extension Fixes tracks alternatives for commonly affected extensions including ad blockers, proxy managers, and userscript managers.',
      },
    ],
    sources: [
      {
        title: 'Chrome Manifest V2 Deprecation Timeline',
        url: 'https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline',
        publisher: 'Google Chrome Developers',
        sourceType: 'chrome-developers',
        reliability: 'primary',
        supports: 'Chrome MV2 deprecation schedule, which versions disabled MV2, and enterprise policy options',
      },
      {
        title: 'Manifest V3 Migration Guide',
        url: 'https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3',
        publisher: 'Google Chrome Developers',
        sourceType: 'chrome-developers',
        reliability: 'primary',
        supports: 'What MV3 is, why it replaced MV2, and how extensions must migrate',
      },
      {
        title: 'Chrome Extension Installation',
        url: 'https://developer.chrome.com/docs/extensions/install/',
        publisher: 'Google Chrome Developers',
        sourceType: 'chrome-developers',
        reliability: 'primary',
        supports: 'Chrome extension installation requirements and manifest version policies',
      },
    ],
    lastUpdated: '2026-05-24',
    keyTakeaways: [
      'Chrome 140 does not restore ordinary-user Manifest V2 support.',
      'Many old Chrome extensions stopped working because of the MV2 phase-out.',
      'Reinstalling the same extension usually does not solve the compatibility issue.',
      'Maintained MV3 alternatives are the long-term path for Chrome users.',
      'Old CRX files from mirror sites are not recommended and can be unsafe.',
    ],
    currentStatus: [
      { label: 'Chrome status', value: 'MV2 support no longer available for ordinary users', variant: 'bad' },
      { label: 'User control', value: 'No simple toggle restores old MV2 support', variant: 'bad' },
      { label: 'Recommended path', value: 'Use MV3 updates or maintained alternatives', variant: 'good' },
      { label: 'Last reviewed', value: 'May 23, 2026', variant: 'neutral' },
    ],
    commonFailedFixes: [
      {
        tried: 'Install old CRX files from mirror sites',
        whyItFails: 'Old CRX packages may be outdated, modified, or incompatible with Chrome 140. Chrome does not support MV2 extensions regardless.',
        saferAlternative: 'Use MV3-compatible alternatives from the Chrome Web Store.',
      },
      {
        tried: 'Keep using an outdated Chrome build',
        whyItFails: 'Outdated Chrome builds do not receive security patches. The security risk outweighs any benefit from preserving MV2 extension access.',
        saferAlternative: 'Use a modern Chrome build and migrate to MV3-compatible extensions.',
      },
      {
        tried: 'Enable developer mode and expect old APIs to work',
        whyItFails: 'Developer Mode does not re-enable MV2 APIs. It only allows loading unpacked extensions that still use the supported platform.',
        saferAlternative: 'Look for MV3-compatible versions of the extensions you need.',
      },
      {
        tried: 'Change Chrome flags to re-enable MV2',
        whyItFails: 'MV2 removal flags are temporary, version-dependent, and removed in later Chrome versions. They do not make unsupported APIs functional.',
        saferAlternative: 'Use this only as a short-term data export path, not a permanent workaround.',
      },
      {
        tried: 'Disable browser protections to run old extensions',
        whyItFails: 'Disabling browser protections exposes your pages, cookies, and credentials to any extension loaded, including old or unverified ones.',
        saferAlternative: 'Use only verified extensions from the Chrome Web Store.',
      },
    ],
  },
  {
    slug: 'chrome-enable-unsupported-extensions',
    title: 'Can You Enable Unsupported Extensions in Chrome?',
    aliases: [
      'chrome enable unsupported extensions',
      'chrome extensions disabled',
      'chrome disabled extension',
      'these extensions were turned off because they are no longer supported',
      'this extension was turned off because it is no longer supported',
      'this extension was disabled due to malware suspicious behavior or a policy violation',
      'enable unsupported chrome extension',
      'chrome cannot enable unsupported extensions',
    ],
    shortAnswer:
      'Chrome may disable extensions when they use deprecated APIs, violate Web Store policies, or show suspicious behavior. Ordinary users generally cannot permanently re-enable unsupported extensions in modern Chrome with a simple setting. If an extension was disabled because of malware, suspicious behavior, or a policy violation, the safer path is to remove it and use a maintained alternative from the Chrome Web Store. Avoid downloading old CRX files or disabling browser protections, because extensions can request broad access to pages you visit.',
    whyItHappens: [
      'The extension uses Manifest V2, which Chrome 138+ disabled by default for regular users.',
      'Chrome removed the extension from the Web Store for policy violations or security concerns.',
      'Chrome proactively disabled the extension due to detected malware or suspicious behavior.',
      'The extension became incompatible with the current Chrome version.',
      'An administrator applied policy restrictions on managed devices.',
    ],
    whatYouCanDo: [
      'Open chrome://extensions and read the specific warning shown by Chrome.',
      'Check whether the developer has a current Chrome Web Store listing or MV3 update.',
      'Export settings from the extension before removing it, if the option is still accessible.',
      'Search Extension Fixes for maintained alternatives to your affected extension.',
      'Contact the developer to ask about official MV3 updates or migration paths.',
      'Consider Firefox as a secondary browser if you need specific extension functionality.',
    ],
    whatNotToDo: [
      'Do not download old extension packages from mirror or CRX download sites.',
      'Do not expect Developer Mode to make unsupported APIs compatible with modern Chrome.',
      'Do not change Chrome flags after the extension support has been removed.',
      'Do not keep using an outdated Chrome build to preserve old extension behavior.',
      'Do not re-enable extensions disabled for malware, suspicious behavior, or policy violations.',
      'Do not disable browser protections to load unverified extension packages.',
    ],
    relatedExtensionSlugs: ['great-suspender', 'switchyomega', 'foxyproxy'],
    faqs: [
      {
        question: 'Can I enable unsupported extensions in Chrome?',
        answer:
          'Ordinary users generally cannot permanently re-enable unsupported extensions in modern Chrome. Chrome 138+ disabled all Manifest V2 extensions by default for regular users. If the extension was disabled for security or policy reasons, attempting to re-enable it is not recommended.',
      },
      {
        question: 'Why did Chrome disable my extension?',
        answer:
          'Chrome may disable extensions for several reasons: the extension uses deprecated Manifest V2 APIs, the developer removed it from the Web Store, Google detected malware or suspicious behavior, or the extension became incompatible with your Chrome version. Check the specific warning shown in chrome://extensions for the exact reason.',
      },
      {
        question: 'Can Developer Mode re-enable old Manifest V2 extensions?',
        answer:
          'Developer Mode allows you to load unpacked extension packages but does not make unsupported APIs compatible with modern Chrome. Even if an old MV2 extension loads in Developer Mode, it may not function correctly because the underlying APIs have been removed from Chrome.',
      },
      {
        question: 'What if Chrome says the extension was disabled for malware or suspicious behavior?',
        answer:
          'If Chrome disabled an extension due to malware, suspicious behavior, or a policy violation, do not attempt to re-enable it. Remove the extension and use a maintained alternative from the Chrome Web Store. Downloading and reinstalling problematic extensions can expose your browsing data and credentials.',
      },
      {
        question: 'Is it safe to install an old CRX file?',
        answer:
          'Installing old CRX files from unofficial sources is not safe. These packages may be outdated, modified, or contain unwanted code. They may request broad browsing permissions and could collect your browsing data. Always use the official Chrome Web Store or the developer\'s verified release page.',
      },
      {
        question: 'Can enterprise devices still enable unsupported extensions?',
        answer:
          'Enterprise Chrome administrators can use the ExtensionManifestV2Enabled policy to extend MV2 support on managed devices. However, this is only available for organizational deployments, not individual users. Regular Chrome users do not have this option.',
      },
      {
        question: 'What should I do if I need the extension for work?',
        answer:
          'Check whether the developer has released an official MV3 version in the Chrome Web Store. If no official update exists, look for a maintained alternative from the Chrome Web Store. For enterprise environments, contact your IT administrator about extension policies. Always verify any replacement extension\'s developer identity and permissions before installing.',
      },
      {
        question: 'Is this the same as the unsupported manifest version error?',
        answer:
          'These are related but different. The "unsupported manifest version" error appears during installation — Chrome refuses to install the package. The "extension was turned off" message appears after an extension is already installed — Chrome disabled a previously working extension. Both are commonly related to MV2 deprecation but happen at different stages.',
      },
    ],
    sources: [
      {
        title: 'Chrome Manifest V2 Deprecation Timeline',
        url: 'https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline',
        publisher: 'Google Chrome Developers',
        sourceType: 'chrome-developers',
        reliability: 'primary',
        supports: 'Chrome MV2 deprecation timeline, which Chrome versions disabled MV2, and what extensions are affected',
      },
      {
        title: 'Manifest V3 Migration Guide',
        url: 'https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3',
        publisher: 'Google Chrome Developers',
        sourceType: 'chrome-developers',
        reliability: 'primary',
        supports: 'What Manifest V3 is, why it replaced MV2, and how extensions must migrate',
      },
      {
        title: 'Chrome Web Store Program Policies',
        url: 'https://developer.chrome.com/docs/webstore/program-policies/policies',
        publisher: 'Google Chrome Developers',
        sourceType: 'chrome-developers',
        reliability: 'secondary',
        supports: 'Why extensions are removed from the Chrome Web Store and what policies apply',
      },
    ],
    lastUpdated: '2026-05-24',
    keyTakeaways: [
      'Chrome can disable extensions for compatibility, policy, or security reasons.',
      'Unsupported Manifest V2 extensions generally cannot be permanently re-enabled by ordinary users.',
      'Extensions disabled for malware, suspicious behavior, or policy violations should not be forced back on.',
      'Developer Mode does not make unsupported APIs compatible with modern Chrome.',
      'Maintained Manifest V3 alternatives are the long-term path for Chrome users.',
      'Old CRX files from unofficial sources can be unsafe and should be avoided.',
      'Export settings from disabled extensions before removing them if possible.',
    ],
    currentStatus: [
      { label: 'Chrome status', value: 'Unsupported extensions may be blocked or disabled', variant: 'bad' },
      { label: 'User control', value: 'No simple permanent toggle for ordinary users', variant: 'bad' },
      { label: 'Security note', value: 'Policy-disabled or malware-related extensions should be removed', variant: 'bad' },
      { label: 'Recommended path', value: 'Use maintained alternatives or official updates', variant: 'good' },
      { label: 'Last reviewed', value: 'May 24, 2026', variant: 'neutral' },
    ],
    commonFailedFixes: [
      {
        tried: 'Download an old extension package from a mirror site',
        whyItFails: 'Mirror packages may be outdated, modified, or contain unwanted code. Chrome may block loading MV2 extensions from unofficial sources. Even if it loads, the extension will not function in modern Chrome.',
        saferAlternative: 'Use a maintained MV3 alternative from the Chrome Web Store.',
      },
      {
        tried: 'Enable Developer Mode and expect unsupported APIs to work',
        whyItFails: 'Developer Mode does not re-enable MV2 APIs. It only allows loading unpacked extensions that still use the supported platform.',
        saferAlternative: 'Look for MV3-compatible versions of the extensions you need.',
      },
      {
        tried: 'Change temporary Chrome flags after support has been removed',
        whyItFails: 'Chrome flags related to MV2 removal are temporary, version-dependent, and may disappear after Chrome updates.',
        saferAlternative: 'Use this only as a short-term data export path, not a permanent workaround.',
      },
      {
        tried: 'Keep using an outdated Chrome version',
        whyItFails: 'Outdated Chrome builds do not receive security patches. The security risk outweighs any benefit from preserving old extension access.',
        saferAlternative: 'Use a modern Chrome build and migrate to MV3-compatible extensions.',
      },
      {
        tried: 'Re-enable an extension disabled for suspicious behavior',
        whyItFails: 'Extensions disabled for malware, suspicious behavior, or policy violations pose ongoing risks. Re-enabling them can expose your browsing data and credentials.',
        saferAlternative: 'Remove the extension and use a maintained alternative from the Chrome Web Store.',
      },
    ],
  },
  {
    slug: 'this-extension-was-disabled-due-to-malware-suspicious-behavior-policy-violation',
    title: 'This Extension Was Disabled Due to Malware, Suspicious Behavior, or a Policy Violation',
    aliases: [
      'this extension was disabled due to malware suspicious behavior or a policy violation',
      'chrome extension disabled due to malware',
      'chrome extension suspicious behavior',
      'chrome extension policy violation',
      'chrome disabled extension malware',
      'extension disabled policy violation',
      'chrome extensions disabled malware',
    ],
    shortAnswer:
      'Chrome may disable an extension when it detects malware, suspicious behavior, a Chrome Web Store policy violation, or a serious security concern. If you see this warning, do not try to force the same extension back into Chrome or download an old CRX copy from an unofficial source. Extensions can request broad access to pages you visit, so a policy-disabled extension should be treated as unsafe until the developer provides a clear, maintained update. The safer path is to remove the extension, check for an official update, and use a maintained alternative from a trusted source.',
    whyItHappens: [
      'Chrome detected that the extension contains malware, a virus, or unwanted software.',
      'The extension performed suspicious behavior such as modifying browser settings without consent.',
      'The extension violated Chrome Web Store policies on data collection, advertising, or user consent.',
      'Google proactively disabled the extension due to detected security concerns.',
      'The extension was flagged by Safe Browsing or other Chrome security systems.',
      'The extension was reported and reviewed as violating developer program policies.',
    ],
    whatYouCanDo: [
      'Open chrome://extensions and read the exact warning shown by Chrome.',
      'Identify the extension name and developer from the warning message.',
      'Check the Chrome Web Store listing for updated versions or official developer statements.',
      'Remove the extension from Chrome if it is flagged as malware or suspicious.',
      'Search Extension Fixes for a maintained alternative to your affected extension.',
      'Report the extension if you believe it was incorrectly flagged or if you found genuine malware.',
      'Review extension permissions before installing any replacement.',
    ],
    whatNotToDo: [
      'Do not try to force the same extension back into Chrome using Developer Mode.',
      'Do not download the same extension from an unofficial mirror or CRX download site.',
      'Do not reinstall the extension and ignore the warning because it used to work.',
      'Do not install a lookalike extension from a different developer without verifying credentials.',
      'Do not keep the disabled extension installed while searching for a workaround.',
    ],
    relatedExtensionSlugs: ['great-suspender'],
    faqs: [
      {
        question: 'Why did Chrome disable my extension for malware or suspicious behavior?',
        answer:
          'Chrome disables extensions when its security systems detect malware, unwanted software, policy violations, or suspicious behavior. This can happen when an extension is updated with malicious code, when it was originally published with deceptive practices, or when it manipulates browser settings without consent. The warning is designed to protect users from potentially harmful software.',
      },
      {
        question: 'Can I re-enable an extension disabled for a policy violation?',
        answer:
          'Generally no. Extensions disabled for malware, suspicious behavior, or policy violations should not be re-enabled. Even if the developer later releases an update, reinstall the extension only after verifying the update is legitimate and the developer identity matches the original trusted source.',
      },
      {
        question: 'Is it safe to download the old CRX file?',
        answer:
          'No. Downloading old CRX files from unofficial mirrors is not safe. These packages may contain the same malicious code that caused the original disablement, may be modified by third parties, or may lack security updates. Always use the official Chrome Web Store or the developer\'s verified release page.',
      },
      {
        question: 'What should I do if I still need the extension?',
        answer:
          'First, verify the developer\'s official website or Chrome Web Store listing for an official update that resolves the issue. If a legitimate update is available, install it from the official source. If no update exists, search Extension Fixes for a maintained alternative. Avoid unofficial copies or lookalike extensions from unknown developers.',
      },
      {
        question: 'Can a Chrome extension read pages I visit?',
        answer:
          'Yes. Extensions can request permission to access pages you visit. When an extension is flagged for malware or suspicious behavior, this permission access is a significant concern. Do not re-enable or reinstall suspicious extensions, and review the permissions of any replacement extension before installing.',
      },
      {
        question: 'How do I check whether a replacement extension is trustworthy?',
        answer:
          'Verify the extension is listed in the official Chrome Web Store, check the developer name and verify it matches expected credentials, read recent user reviews, review the permissions the extension requests, and check whether the extension is actively maintained.',
      },
      {
        question: 'Is this the same as the "no longer supported" warning?',
        answer:
          'No. The "no longer supported" warning typically means an extension uses deprecated APIs. The "disabled due to malware, suspicious behavior, or policy violation" warning means Chrome detected a more serious security or policy concern. Both require action, but the malware/policy warning is a higher-severity signal.',
      },
      {
        question: 'Should I remove the disabled extension?',
        answer:
          'Yes. If Chrome shows a malware, suspicious behavior, or policy violation warning, remove the extension from Chrome. Do not keep it installed while looking for workarounds. Extensions flagged for these reasons can continue to access pages you visit while installed, even if they are disabled.',
      },
    ],
    sources: [
      {
        title: 'Chrome Web Store Program Policies',
        url: 'https://developer.chrome.com/docs/webstore/program-policies/policies',
        publisher: 'Google Chrome Developers',
        sourceType: 'chrome-developers',
        reliability: 'primary',
        supports: 'Chrome Web Store policy rules that extensions must follow and what triggers policy violations',
      },
      {
        title: 'Chrome Extension Safety',
        url: 'https://developer.chrome.com/docs/extensions/safety/',
        publisher: 'Google Chrome Developers',
        sourceType: 'chrome-developers',
        reliability: 'primary',
        supports: 'How Chrome detects unsafe extensions and what happens when an extension is flagged',
      },
      {
        title: 'Chrome Extension Permissions',
        url: 'https://developer.chrome.com/docs/extensions/mv3/permissions-overview/',
        publisher: 'Google Chrome Developers',
        sourceType: 'chrome-developers',
        reliability: 'secondary',
        supports: 'What extension permissions mean and why they matter for user security',
      },
    ],
    lastUpdated: '2026-05-25',
    keyTakeaways: [
      'Chrome can disable extensions for malware, suspicious behavior, or policy violations.',
      'Policy-disabled extensions should not be forced back into Chrome.',
      'Old CRX copies from mirror sites can be modified or unsafe.',
      'Users should check whether the developer has published a maintained update.',
      'The safer path is to remove the extension and use a trusted alternative.',
    ],
    currentStatus: [
      { label: 'Chrome status', value: 'Policy-disabled extensions may be blocked', variant: 'bad' },
      { label: 'User control', value: 'Ordinary users should not force suspicious extensions back on', variant: 'bad' },
      { label: 'Security note', value: 'Extensions can access browsing data depending on permissions', variant: 'bad' },
      { label: 'Recommended path', value: 'Remove the extension and use maintained alternatives', variant: 'good' },
      { label: 'Last reviewed', value: 'May 25, 2026', variant: 'neutral' },
    ],
    commonFailedFixes: [
      {
        tried: 'Download the same extension from an unofficial mirror',
        whyItFails: 'Mirror copies may contain the same malicious code, be modified by third parties, or lack security updates. Chrome may also block loading extensions from unofficial sources.',
        saferAlternative: 'Remove the extension and use an official update or a maintained alternative from the Chrome Web Store.',
      },
      {
        tried: 'Enable Developer Mode to load a disabled extension package',
        whyItFails: 'Developer Mode does not remove the malware, suspicious behavior, or policy violation detection. Re-enabling a flagged extension keeps it active in Chrome with its original permissions.',
        saferAlternative: 'Remove the extension and verify with an official developer source before reinstalling.',
      },
      {
        tried: 'Ignore the warning because the extension used to work',
        whyItFails: 'Extensions can be updated with malicious code after installation. Chrome detects changes after the fact. An extension that worked previously may have been modified.',
        saferAlternative: 'Treat the warning as a legitimate security signal and remove the extension.',
      },
      {
        tried: 'Install a lookalike extension without checking publisher and reviews',
        whyItFails: 'Scammers create extensions with similar names to popular extensions. Without verifying the developer identity, you may install a different and potentially harmful extension.',
        saferAlternative: 'Verify the developer name, read reviews, and check the extension\'s listing carefully before installing any replacement.',
      },
      {
        tried: 'Keep the disabled extension installed while searching for a fix',
        whyItFails: 'Disabled extensions may still retain some level of access depending on Chrome\'s implementation. If the extension was flagged for malware or policy violations, keeping it installed is not recommended.',
        saferAlternative: 'Remove the extension first, then research alternatives before installing any replacement.',
      },
    ],
  },
];

export function getErrorBySlug(slug: string): ErrorRecord | undefined {
  return errors.find((err) => err.slug === slug);
}

export function getAllErrorSlugs(): string[] {
  return errors.map((err) => err.slug);
}
