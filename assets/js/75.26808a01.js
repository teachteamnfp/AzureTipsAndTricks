(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{385:function(t,a,s){"use strict";s.r(a);var e=s(43),r=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("💡 Learn more : "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-resource-manager/resource-group-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("An introduction to Azure Automation"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("📺 Watch the video : "),s("a",{attrs:{href:"https://www.youtube.com/watch?v=pQ9dQ13B2vM&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=50?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to use Azure Automation with PowerShell"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("h4",{attrs:{id:"azure-tips-and-tricks-arm-templates-demystified"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#azure-tips-and-tricks-arm-templates-demystified","aria-hidden":"true"}},[t._v("#")]),t._v(" Azure Tips and Tricks - ARM Templates Demystified")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"./tip162.html"}},[t._v("Part 1 - This Post")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"./tip163.html"}},[t._v("Part 2")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"./tip164.html"}},[t._v("Part 3")])],1)]),t._v(" "),s("h4",{attrs:{id:"intro"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#intro","aria-hidden":"true"}},[t._v("#")]),t._v(" Intro")]),t._v(" "),s("p",[t._v("I’ve been hearing that a lot of people are having trouble with ARM templates. Either they don’t understand them and don’t know how to use them, or they do use them but the templates are too hard to use. This feedback really surprised me and calls out for a quick demystification. In this post, I’m going to explain what ARM templates are and why you should care.")]),t._v(" "),s("h4",{attrs:{id:"arm-templates-demystified"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arm-templates-demystified","aria-hidden":"true"}},[t._v("#")]),t._v(" ARM Templates Demystified")]),t._v(" "),s("p",[t._v("First off, it occurred to me that the name might be confusing. "),s("strong",[t._v("ARM")]),t._v(" here doesn’t have anything to do with CPU architecture such as what is used in phones and tablets, which would be an honest misunderstanding. ARM stands for "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-resource-manager/resource-group-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Resource Manager"),s("OutboundLink")],1),t._v(", which is how you organize all your stuff on Azure—virtual machines, databases, storage accounts, containers, web apps, bots, and more. In Azure, we call your stuff resources.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/resources_page.PNG")}}),t._v(" "),s("p",[t._v("You will tend to create many related items together in Azure, like a web app and a database will be contained in a single resource group. But what if you had to do this frequently for many different clients? Wouldn’t it be nice to have an easy way to keep track of all the repeatable groups of resources you are creating for people? Good news, this is exactly what ARM Templates do!")]),t._v(" "),s("h4",{attrs:{id:"what-are-some-real-world-scenarios-for-using-arm-templates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-are-some-real-world-scenarios-for-using-arm-templates","aria-hidden":"true"}},[t._v("#")]),t._v(" What are some real-world scenarios for using ARM Templates?")]),t._v(" "),s("p",[t._v("When you need an easy way to repeat infrastructure deployments on Azure, ARM templates are going to save you a lot of time. If you ever need to share your infrastructure with other people—like for open source projects or for blogs, tutorials, and documentation—ARM templates will be a lifesaver and will let your readers and users replicate what you did. Finally, if you just need a way to keep track of what you deployed on Azure, ARM templates are a great way to help you remember.")]),t._v(" "),s("h4",{attrs:{id:"an-arm-template-is-just-a-json-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#an-arm-template-is-just-a-json-file","aria-hidden":"true"}},[t._v("#")]),t._v(" An ARM Template is just a JSON file")]),t._v(" "),s("p",[t._v("This is where ARM templates come in. ARM templates are "),s("strong",[t._v("JSON files")]),t._v(" that act like blueprints for the related resources you want to deploy together. You’ll also hear this called “infrastructure as code,” which is geek speak for being able to upload your infrastructure notes to GitHub if you want to. It’s a structured format for keeping track of your Azure infrastructure with some superpowers. The biggest ARM template superpower is that you can use templates to automate your infrastructure deployments because Azure knows how to read them.")]),t._v(" "),s("p",[t._v("In the example below, we are creating an ARM template that creates a Notification Hub. You'll see that it contains things that the deployment needs such as Name, Location, etc.")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"$schema"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contentVersion"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"parameters"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"namespaceName"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"metadata"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The name of the Notification Hubs namespace."')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"location"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"defaultValue"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[resourceGroup().location]"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"metadata"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The location in which the Notification Hubs resources should be deployed."')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"variables"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hubName"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyHub"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"resources"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"apiVersion"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2014-09-01"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"[parameters('namespaceName')]\"")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Microsoft.NotificationHubs/namespaces"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"location"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"[parameters('location')]\"")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"kind"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NotificationHub"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"resources"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"[concat(parameters('namespaceName'), '/', variables('hubName'))]\"")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"apiVersion"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2014-09-01"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Microsoft.NotificationHubs/namespaces/notificationHubs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"location"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"[parameters('location')]\"")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dependsOn"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"[parameters('namespaceName')]\"")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br")])]),s("p",[t._v("But more on that later!")]),t._v(" "),s("h4",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),s("p",[t._v("You can make an ARM template in Visual Studio, in Visual Studio Code, or in the Azure portal. The last way is probably the easiest since it walks you through the process. Start creating a resource through the portal the way you normally would, by clicking on the "),s("strong",[t._v("Create Resource")]),t._v(" on your Azure Portal Dashboard. Now select what you'd like to create. I'm going to create a "),s("strong",[t._v("Web App")]),t._v(". Look at the bottom of this page and you'll see "),s("strong",[t._v("Automation options")]),t._v(".")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/new_webapp.png")}}),t._v(" "),s("p",[t._v("But what does that unassuming link labeled "),s("strong",[t._v("Automation options")]),t._v(" next to it do? You’ve probably never noticed it before or been afraid to mess with it, but if you click on that link, you will be on the road to creating an ARM template for your resource. But you'll have to come back tomorrow for Part 2!")])])},[],!1,null,null,null);a.default=r.exports}}]);