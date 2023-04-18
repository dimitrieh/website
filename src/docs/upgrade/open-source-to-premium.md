---
originalPath: upgrade/open-source-to-premium.md
updated: 2023-04-17 10:54:59 +0200
version: 1.6.0
navTitle: Upgrading to Premium
---

## Upgrading to Premium

For self-managed FlowForge installations without a license you can unlock more
features with a premium license. As an admin a license can be uploaded to
FlowForge in the admin panel, under the settings tab. When a license is uploaded
a restart of the `forge` app is required.

After the forge application has restarted, the Node-RED runtimes need to be
updated to leverage these features. As restarting Node-RED might need to be
coordinated, FlowForge will not automatically restart all instances.
