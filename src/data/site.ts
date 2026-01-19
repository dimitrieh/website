// Site configuration - migrated from _data/site.json
export const site = {
  baseURL: 'https://flowfuse.com',
  appURL: 'https://app.flowfuse.com',
  onboardingURL: '/get-started/',
  jobBoard: 'https://boards.greenhouse.io/flowfuse',
  openings: {
    em: 'https://job-boards.greenhouse.io/flowfuse/jobs/5566913004',
  },
  messaging: {
    tagLine: 'Connect, Collect, Build, and Scale with FlowFuse',
    subtitle:
      'FlowFuse is the Industrial Application Platform that connects any machine, moves data across any protocol, models it in any data platform, and operates industrial applications at scale—accelerated by an LLM-powered copilot that uses Model Context Protocol (MCP) to connect AI directly to your live industrial data.',
    title:
      'Build workflows and integrations that optimize your industrial operations',
    keywords:
      'Node-RED, Application Development, IoT, IIoT, Low-Code, open source, Integration, Workflow, Automation, Data Processing, Data Integration, Data Transformation, Data Visualization, Industrial Automation, Industrial IoT, Industry 4.0',
  },
}

export const navigation = {
  main: [
    {
      name: 'Platform',
      children: [
        { name: 'Features', href: '/platform/features/' },
        { name: 'Integrations', href: '/integrations/' },
        { name: 'Blueprint Library', href: '/blueprints/' },
        { name: 'Security Statement', href: '/platform/security/' },
        { name: 'FlowFuse Dashboard', href: '/platform/dashboard/' },
        { name: 'Device Agent', href: '/platform/device-agent/' },
        { name: 'Why FlowFuse', href: '/platform/why-flowfuse/' },
      ],
    },
    {
      name: 'Solutions',
      children: [
        { name: 'IT/OT middleware', href: '/solutions/it-ot-middleware/' },
        { name: 'Unified Namespace', href: '/solutions/uns/' },
        { name: 'SCADA', href: '/solutions/scada/' },
        { name: 'MES', href: '/solutions/mes/' },
        { name: 'Edge Connectivity', href: '/solutions/edge-connectivity/' },
        { name: 'Data integration', href: '/solutions/data-integration/' },
      ],
    },
    {
      name: 'Resources',
      children: [
        { name: 'Blog', href: '/blog/' },
        { name: 'Webinars', href: '/webinars/' },
        { name: 'Publications', href: '/resources/publications/' },
        { name: 'Changelog', href: '/changelog/' },
        { name: 'Github', href: 'https://github.com/FlowFuse/flowfuse', external: true },
        { name: 'Docs', href: '/docs/' },
        { name: 'Support forums', href: 'https://discourse.nodered.org/c/vendors/flowfuse/24/', external: true },
        { name: 'Customer Stories', href: '/customer-stories/' },
        { name: 'Node-RED Academy', href: 'https://node-red-academy.learnworlds.com/', external: true },
        { name: 'Educational License', href: '/education/' },
      ],
    },
    { name: 'AI', href: '/ai/' },
    { name: 'Node-RED', href: '/node-red/' },
    { name: 'Docs', href: '/docs/' },
    { name: 'Pricing', href: '/pricing/' },
  ],
  footer: [
    { name: 'About', href: '/about/' },
    { name: 'Team', href: '/team/' },
    { name: 'Jobs', href: 'https://boards.greenhouse.io/flowfuse', external: true },
    { name: 'Handbook', href: '/handbook/' },
    { name: 'Privacy', href: '/privacy-policy/' },
    { name: 'Partnerships', href: '/partners/' },
    { name: 'Professional Services', href: '/professional-services/' },
    { name: 'Service Status', href: 'https://status.flowfuse.com/', external: true },
    { name: 'Request Support', href: '/support/' },
    { name: 'Contact Us', href: '/contact-us/' },
    { name: 'Sign Up to Mailing List', href: '/blog/#sign-up' },
  ],
  social: [
    { name: 'Facebook', href: 'https://www.facebook.com/FlowFuse/', icon: 'mdi:facebook' },
    { name: 'GitHub', href: 'https://github.com/FlowFuse', icon: 'mdi:github' },
    { name: 'Discord', href: 'https://discord.gg/2RrvW8dkrF', icon: 'mdi:discord' },
    { name: 'Reddit', href: 'https://www.reddit.com/r/flowfuse', icon: 'mdi:reddit' },
    { name: 'RSS', href: '/blog/index.xml', icon: 'mdi:rss' },
  ],
}
