(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{804:function(t,e,a){"use strict";a.r(e);var s=a(1),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"joining-a-testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#joining-a-testnet"}},[t._v("#")]),t._v(" Joining a Testnet")]),t._v(" "),a("p",{attrs:{synopsis:""}},[t._v("This document outlines the steps to join an existing testnet")]),t._v(" "),a("h2",{attrs:{id:"pick-a-testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pick-a-testnet"}},[t._v("#")]),t._v(" Pick a Testnet")]),t._v(" "),a("p",[t._v("You specify the network you want to join by setting the "),a("strong",[t._v("genesis file")]),t._v(" and "),a("strong",[t._v("seeds")]),t._v(".")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Testnet Chain ID")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Version")]),t._v(" "),a("th",[t._v("Status")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("haqq_112357-1")]),t._v(" "),a("td",[t._v("Haqq TestNow")]),t._v(" "),a("td",[t._v("v1.0.0")]),t._v(" "),a("td",[t._v("WIP")]),t._v(" "),a("td",[t._v("This test network is functionally equivalent to the current Haqq Mainnet and it built for developers and exchanges who are integrating with Haqq.")])]),t._v(" "),a("tr",[a("td",[t._v("haqq_53211-1")]),t._v(" "),a("td",[t._v("Haqq TestEdge")]),t._v(" "),a("td",[t._v("v1.0.0")]),t._v(" "),a("td",[t._v("Live")]),t._v(" "),a("td",[t._v("This test network contains features which we plan to release on Haqq Mainnet.")])])])]),t._v(" "),a("h2",{attrs:{id:"install-haqqd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-haqqd"}},[t._v("#")]),t._v(" Install "),a("code",[t._v("haqqd")])]),t._v(" "),a("p",[t._v("Follow the "),a("RouterLink",{attrs:{to:"/testnet/quickstart/installation.html"}},[t._v("installation")]),t._v(" document to install the "+t._s(t.$themeConfig.project.name)+" binary "),a("code",[t._v(t._s(t.$themeConfig.project.binary))]),t._v(".")],1),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"4p2X77iPV2FybmluZ+Kdl++4jwpNYWtlIHN1cmUgeW91IGhhdmUgdGhlIHJpZ2h0IHZlcnNpb24gb2YgYHt7ICR0aGVtZUNvbmZpZy5wcm9qZWN0LmJpbmFyeSB9fWAgaW5zdGFsbGVkLgo="}}),t._v(" "),a("h3",{attrs:{id:"save-chain-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#save-chain-id"}},[t._v("#")]),t._v(" Save Chain ID")]),t._v(" "),a("p",[t._v("We recommend saving the testnet "),a("code",[t._v("chain-id")]),t._v(" into your "),a("code",[t._v(t._s(t.$themeConfig.project.binary))]),t._v("'s "),a("code",[t._v("client.toml")]),t._v(". This will make it so you do not have to manually pass in the "),a("code",[t._v("chain-id")]),t._v(" flag for every CLI command.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("See the Official "),a("RouterLink",{attrs:{to:"/users/technical_concepts/chain_id.html#official-chain-ids"}},[t._v("Chain IDs")]),t._v(" for reference.")],1)]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGFxcWQgY29uZmlnIGNoYWluLWlkIGhhcXFfMTEyMzU3LTEK"}}),t._v(" "),a("h2",{attrs:{id:"initialize-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initialize-node"}},[t._v("#")]),t._v(" Initialize Node")]),t._v(" "),a("p",[t._v("We need to initialize the node to create all the necessary validator and node configuration files:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGFxcWQgaW5pdCAmbHQ7eW91cl9jdXN0b21fbW9uaWtlciZndDsgLS1jaGFpbi1pZCBoYXFxXzExMjM1Ny0xCg=="}}),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",[t._v("Monikers can contain only ASCII characters. Using Unicode characters will render your node unreachable.")])]),t._v(" "),a("p",[t._v("By default, the "),a("code",[t._v("init")]),t._v(" command creates your "),a("code",[t._v("~/.haqqd")]),t._v(" (i.e "),a("code",[t._v("$HOME")]),t._v(") directory with subfolders "),a("code",[t._v("config/")]),t._v(" and "),a("code",[t._v("data/")]),t._v(".\nIn the "),a("code",[t._v("config")]),t._v(" directory, the most important files for configuration are "),a("code",[t._v("app.toml")]),t._v(" and "),a("code",[t._v("config.toml")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"run-a-testnet-validator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-a-testnet-validator"}},[t._v("#")]),t._v(" Run a Testnet Validator")]),t._v(" "),a("p",[t._v("Claim your testnet "+t._s(t.$themeConfig.project.testnet_denom)+" on the "),a("RouterLink",{attrs:{to:"/developers/faucet.html"}},[t._v("faucet")]),t._v(" using your validator account address and submit your validator account address:")],1),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("For more details on how to run your validator, follow "),a("RouterLink",{attrs:{to:"/testnet/setup/run_validator.html"}},[t._v("these")]),t._v(" instructions.")],1)]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGFxcWQgdHggc3Rha2luZyBjcmVhdGUtdmFsaWRhdG9yIFwKICAtLWFtb3VudD0xMDAwMDAwMDAwMDAwYUlTTE0gXAogIC0tcHVia2V5PSQoaGFxcWQgdGVuZGVybWludCBzaG93LXZhbGlkYXRvcikgXAogIC0tbW9uaWtlcj0mcXVvdDtIYXFxV2hhbGUmcXVvdDsgXAogIC0tY2hhaW4taWQ9Jmx0O2NoYWluX2lkJmd0OyBcCiAgLS1jb21taXNzaW9uLXJhdGU9JnF1b3Q7MC4xMCZxdW90OyBcCiAgLS1jb21taXNzaW9uLW1heC1yYXRlPSZxdW90OzAuMjAmcXVvdDsgXAogIC0tY29tbWlzc2lvbi1tYXgtY2hhbmdlLXJhdGU9JnF1b3Q7MC4wMSZxdW90OyBcCiAgLS1taW4tc2VsZi1kZWxlZ2F0aW9uPSZxdW90OzEwMDAwMDAmcXVvdDsgXAogIC0tZ2FzPSZxdW90O2F1dG8mcXVvdDsgXAogIC0tZ2FzLXByaWNlcz0mcXVvdDswLjAyNWFJU0xNJnF1b3Q7IFwKICAtLWZyb209Jmx0O2tleV9uYW1lJmd0Owo="}}),t._v(" "),a("h2",{attrs:{id:"start-testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-testnet"}},[t._v("#")]),t._v(" Start testnet")]),t._v(" "),a("p",[t._v("The final step is to "),a("RouterLink",{attrs:{to:"/testnet/quickstart/run_node.html#start-node"}},[t._v("start the nodes")]),t._v(". Once enough voting power (+2/3) from the genesis validators is up-and-running, the testnet will start producing blocks.")],1),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGFxcWQgc3RhcnQK"}}),t._v(" "),a("h2",{attrs:{id:"upgrading-your-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-your-node"}},[t._v("#")]),t._v(" Upgrading Your Node")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("These instructions are for full nodes that have ran on previous versions of and would like to upgrade to the latest testnet version.")])]),t._v(" "),a("h3",{attrs:{id:"reset-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset-data"}},[t._v("#")]),t._v(" Reset Data")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[t._v("If the version "),a("strong",[t._v("new_version")]),t._v(" you are upgrading to is not breaking from the previous one, you "),a("strong",[t._v("should not")]),t._v(" reset the data. If this is the case you can skip to "),a("a",{attrs:{href:"#restart"}},[t._v("Restart")])])]),t._v(" "),a("p",[t._v("First, remove the outdated files and reset the data.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cm0gJEhPTUUvLmhhcXFkL2NvbmZpZy9hZGRyYm9vay5qc29uICRIT01FLy5oYXFxZC9jb25maWcvZ2VuZXNpcy5qc29uCmhhcXFkIHRlbmRlcm1pbnQgdW5zYWZlLXJlc2V0LWFsbCAtLWhvbWUgJEhPTUUvLmhhcXFkCg=="}}),t._v(" "),a("p",[t._v("Your node is now in a pristine state while keeping the original "),a("code",[t._v("priv_validator.json")]),t._v(" and "),a("code",[t._v("config.toml")]),t._v(". If you had any sentry nodes or full nodes setup before,\nyour node will still try to connect to them, but may fail if they haven't also\nbeen upgraded.")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("Warning")]),t._v(" "),a("p",[t._v("Make sure that every node has a unique "),a("code",[t._v("priv_validator.json")]),t._v(". Do not copy the "),a("code",[t._v("priv_validator.json")]),t._v(" from an old node to multiple new nodes. Running two nodes with the same "),a("code",[t._v("priv_validator.json")]),t._v(" will cause you to double sign.")])]),t._v(" "),a("h3",{attrs:{id:"restart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restart"}},[t._v("#")]),t._v(" Restart")]),t._v(" "),a("p",[t._v("To restart your node, just type:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGFxcWQgc3RhcnQK"}})],1)}),[],!1,null,null,null);e.default=o.exports}}]);