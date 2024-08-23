---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Headless_Rendering/150/Sitecore_Headless_Rendering_1500/Release_Notes
---

**October 2020 – released Sitecore Headless Rendering 15.0.0**

## New features/improvements

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​​​​​​​​​A new tag helper that outputs `Number` fields has been added to the ASP.NET Core Rendering SDK. |  | 410445 |
 | ​​​​​​​​​The JSS Forms submit handler now assigns `Sitecore.Context.Item` for use in submit actions. | CS0186805 | 416311 |
 | ​​​​​​​​​The Layout Service now includes host names in cross-site link URLs. |  | 418256, 413419 |
 | When the Layout Service serializes single and multi-item link fields, it now includes item ID, name, display name, URL, and fields. |  | 427896 |
 | ​​​​​​​​​The Layout request debug/trace logs in the Layout Service Client of the ASP.NET Core Rendering SDK have been improved. |  | 428483 |
 | The Date field tag helper in the ASP.NET Core Rendering SDK now accepts a culture when it formats a date. |  | 428400 |
 | The HTTP-based integration with the Experience Editor now provides better messaging/logging for an incorrect rendering host URL.​​​​​​​​​ |  | 427153 |
 | The Layout Service now includes item URLs when it uses an item selector query with the default Rendering Contents Resolver. |  | 423331 |

## Resolved issues

The following issues have been fixed:

 | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- |
 | ​​​​​​​​​If you run content search queries via GraphQL, a `GraphQL.ExecutionError exception can occur`. | CS0180810 | 394515 |
 | If a configured placeholder is missing a placeholder key, the Layout Service can throw a `CyclicRenderingException`. | CS0181086 | 397385 |
 | ​​​​​​​​​If you send requests to `Node.js` in `Integrated` mode, a `SocketException` can be thrown. | CS0194813, CS0190329, CS0184724, CS0184452 | 414123 |
 | If you use the `Context Item Children Resolver`, the `Layout Service Etag` header does not change. | CS0186319 | 414270 |
 | ​​​​​​​​​Some tag helpers do not output values correctly for the Experience Editor. |  | 435263 |
 | Scavenging of cached JSON renderings can cause the cache to be inconsistent, which in turn causes the Layout Service to throw an `InvalidOperationException`. | CS0190867, CS0194743, CS0196110, CS0196644 | 435084 |
 | ​​​​​​​​​Using the ASP.NET Core Rendering SDK to hide renderings via personalization in the Experience Editor can result in an error. |  | 426902 |
 | If the Headless application starts with a heavy load, the configuration can throw an `ArgumentNullException`. | CS0187670 | 423311 |
 | The Experience Editor may preview the wrong personalization variant under certain conditions with the ASP.NET Core Rendering SDK.​​​​​​​​​ |  | 423263 |
 | ​​​​​​​​​If you invoke the Layout Service with `tracking=false` and analytics disabled, it throws an exception. | CS0188080 | 421231 |
 | The Layout Service cannot start content test correctly for JSON renderings.​​​​​​​​​ | CS0183268, CS0189935 | 418676 |