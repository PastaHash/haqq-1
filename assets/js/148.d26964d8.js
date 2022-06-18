(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{747:function(e,t,r){"use strict";r.r(t);var a=r(1),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"parameters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),r("p",[e._v("The evm module contains the following parameters:")]),e._v(" "),r("h2",{attrs:{id:"params"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#params"}},[e._v("#")]),e._v(" Params")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Key")]),e._v(" "),r("th",[e._v("Type")]),e._v(" "),r("th",[e._v("Default Value")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("code",[e._v("EVMDenom")])]),e._v(" "),r("td",[e._v("string")]),e._v(" "),r("td",[r("code",[e._v('"aphoton"')])])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("EnableCreate")])]),e._v(" "),r("td",[e._v("bool")]),e._v(" "),r("td",[r("code",[e._v("true")])])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("EnableCall")])]),e._v(" "),r("td",[e._v("bool")]),e._v(" "),r("td",[r("code",[e._v("true")])])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("ExtraEIPs")])]),e._v(" "),r("td",[e._v("[]int")]),e._v(" "),r("td",[e._v("TBD")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("ChainConfig")])]),e._v(" "),r("td",[e._v("ChainConfig")]),e._v(" "),r("td",[e._v("See ChainConfig")])])])]),e._v(" "),r("h2",{attrs:{id:"evm-denom"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#evm-denom"}},[e._v("#")]),e._v(" EVM denom")]),e._v(" "),r("p",[e._v("The evm denomination parameter defines the token denomination used on the EVM state transitions and gas consumption for EVM messages.")]),e._v(" "),r("p",[e._v("For example, on Ethereum, the "),r("code",[e._v("evm_denom")]),e._v(" would be "),r("code",[e._v("ETH")]),e._v(". In the case of Ethermint, the default denomination is the "),r("strong",[r("RouterLink",{attrs:{to:"notion://www.notion.so/docs/basics/photon.html"}},[e._v("atto photon")])],1),e._v(" (used on the Evmos testnets). In terms of precision, the "),r("code",[e._v("PHOTON")]),e._v(" and "),r("code",[e._v("ETH")]),e._v(" share the same value, "),r("em",[e._v("i.e")]),e._v(" "),r("code",[e._v("1 PHOTON = 10^18 atto photon")]),e._v(" and "),r("code",[e._v("1 ETH = 10^18 wei")]),e._v(".")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",[e._v("Note: SDK applications that want to import the EVM module as a dependency will need to set their own "),r("code",[e._v("evm_denom")]),e._v(" (i.e not "),r("code",[e._v('"aphoton"')]),e._v(").")])]),e._v(" "),r("h2",{attrs:{id:"enable-create"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#enable-create"}},[e._v("#")]),e._v(" Enable Create")]),e._v(" "),r("p",[e._v("The enable create parameter toggles state transitions that use the "),r("code",[e._v("vm.Create")]),e._v(" function. When the parameter is disabled, it will prevent all contract creation functionality.")]),e._v(" "),r("h2",{attrs:{id:"enable-transfer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#enable-transfer"}},[e._v("#")]),e._v(" Enable Transfer")]),e._v(" "),r("p",[e._v("The enable transfer toggles state transitions that use the "),r("code",[e._v("vm.Call")]),e._v(" function. When the parameter is disabled, it will prevent transfers between accounts and executing a smart contract call.")]),e._v(" "),r("h2",{attrs:{id:"extra-eips"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#extra-eips"}},[e._v("#")]),e._v(" Extra EIPs")]),e._v(" "),r("p",[e._v("The extra EIPs parameter defines the set of activateable Ethereum Improvement Proposals ("),r("strong",[r("a",{attrs:{href:"https://ethereum.org/en/eips/",target:"_blank",rel:"noopener noreferrer"}},[e._v("EIPs"),r("OutboundLink")],1)]),e._v(")\non the Ethereum VM "),r("code",[e._v("Config")]),e._v(" that apply custom jump tables.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",[e._v("NOTE: some of these EIPs are already enabled by the chain configuration, depending on the hard fork number.")])]),e._v(" "),r("p",[e._v("The supported activateable EIPS are:")]),e._v(" "),r("ul",[r("li",[r("strong",[r("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-1344",target:"_blank",rel:"noopener noreferrer"}},[e._v("EIP 1344"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-1884",target:"_blank",rel:"noopener noreferrer"}},[e._v("EIP 1884"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-2200",target:"_blank",rel:"noopener noreferrer"}},[e._v("EIP 2200"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-2315",target:"_blank",rel:"noopener noreferrer"}},[e._v("EIP 2315"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-2929",target:"_blank",rel:"noopener noreferrer"}},[e._v("EIP 2929"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-3198",target:"_blank",rel:"noopener noreferrer"}},[e._v("EIP 3198"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-3529",target:"_blank",rel:"noopener noreferrer"}},[e._v("EIP 3529"),r("OutboundLink")],1)])])]),e._v(" "),r("h2",{attrs:{id:"chain-config"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#chain-config"}},[e._v("#")]),e._v(" Chain Config")]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("ChainConfig")]),e._v(" is a protobuf wrapper type that contains the same fields as the go-ethereum "),r("code",[e._v("ChainConfig")]),e._v(" parameters, but using "),r("code",[e._v("*sdk.Int")]),e._v(" types instead of "),r("code",[e._v("*big.Int")]),e._v(".")]),e._v(" "),r("p",[e._v("By default, all block configuration fields but "),r("code",[e._v("ConstantinopleBlock")]),e._v(", are enabled at genesis (height 0).")]),e._v(" "),r("h3",{attrs:{id:"chainconfig-defaults"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#chainconfig-defaults"}},[e._v("#")]),e._v(" ChainConfig Defaults")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Name")]),e._v(" "),r("th",[e._v("Default Value")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("HomesteadBlock")]),e._v(" "),r("td",[e._v("0")])]),e._v(" "),r("tr",[r("td",[e._v("DAOForkBlock")]),e._v(" "),r("td",[e._v("0")])]),e._v(" "),r("tr",[r("td",[e._v("DAOForkSupport")]),e._v(" "),r("td",[r("code",[e._v("true")])])]),e._v(" "),r("tr",[r("td",[e._v("EIP150Block")]),e._v(" "),r("td",[e._v("0")])]),e._v(" "),r("tr",[r("td",[e._v("EIP150Hash")]),e._v(" "),r("td",[r("code",[e._v("0x0000000000000000000000000000000000000000000000000000000000000000")])])]),e._v(" "),r("tr",[r("td",[e._v("EIP155Block")]),e._v(" "),r("td",[e._v("0")])]),e._v(" "),r("tr",[r("td",[e._v("EIP158Block")]),e._v(" "),r("td",[e._v("0")])]),e._v(" "),r("tr",[r("td",[e._v("ByzantiumBlock")]),e._v(" "),r("td",[e._v("0")])]),e._v(" "),r("tr",[r("td",[e._v("ConstantinopleBlock")]),e._v(" "),r("td",[e._v("0")])]),e._v(" "),r("tr",[r("td",[e._v("PetersburgBlock")]),e._v(" "),r("td",[e._v("0")])]),e._v(" "),r("tr",[r("td",[e._v("IstanbulBlock")]),e._v(" "),r("td",[e._v("0")])]),e._v(" "),r("tr",[r("td",[e._v("MuirGlacierBlock")]),e._v(" "),r("td",[e._v("0")])]),e._v(" "),r("tr",[r("td",[e._v("BerlinBlock")]),e._v(" "),r("td",[e._v("0")])]),e._v(" "),r("tr",[r("td",[e._v("LondonBlock")]),e._v(" "),r("td",[e._v("0")])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);