(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{351:function(e,t,s){"use strict";s.r(t);var a=s(43),n=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("💡 Learn more : "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("App Service Documentation"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("h4",{attrs:{id:"increase-the-timeout-of-asp-net-core-2-0-api-hosted-in-azure-app-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#increase-the-timeout-of-asp-net-core-2-0-api-hosted-in-azure-app-service","aria-hidden":"true"}},[e._v("#")]),e._v(" Increase the timeout of ASP.NET Core 2.0 API hosted in Azure App Service")]),e._v(" "),s("p",[e._v("There are reasons that you "),s("strong",[e._v("might")]),e._v(" have a request that takes 2-3 minutes to complete and this post is for you. For most, you should probably look at decoupling these long running request.")]),e._v(" "),s("p",[e._v("If you're using ASP.NET Core 2.0 API and deploying to an Azure App Service, then you might run into an issue where it takes a process request longer than 2 minutes to complete. You'll typically get a "),s("code",[e._v("502 Bad Gateway")]),e._v(" with the following info:")]),e._v(" "),s("p",[s("code",[e._v('"The specified CGI application encountered an error and the server terminated the process".')])]),e._v(" "),s("p",[e._v("If you check your diagnostic logfile you might see:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("018-06-15 03:47:03.232 +00:00 [Error] Microsoft.AspNetCore.Diagnostics.DeveloperExceptionPageMiddleware: An unhandled exception has occurred while executing the request\nSystem.Threading.Tasks.TaskCanceledException: A task was canceled.\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("You can fix this by going into your web.config in your sites/wwwroot folder and adding a "),s("code",[e._v('requestTimeout="00:20:00')]),e._v(" to the file as shown below.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<?xml version="1.0" encoding="utf-8"?>\n<configuration>\n  <system.webServer>\n    <handlers>\n      <add name="aspNetCore" path="*" verb="*" modules="AspNetCoreModule" resourceType="Unspecified" />\n    </handlers>\n    <aspNetCore processPath="dotnet" arguments=".\\WebApplication1.dll" stdoutLogEnabled="false" stdoutLogFile=".\\logs\\stdout" requestTimeout="00:20:00" />\n  </system.webServer>\n</configuration>\n\x3c!--ProjectGuid: 3b93921c-f843-46c8-914e-xxx--\x3e\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br")])])])},[],!1,null,null,null);t.default=n.exports}}]);