(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{405:function(e,t,o){"use strict";o.r(t);var r=o(43),a=Object(r.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("div",{staticClass:"tip custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("💡 Learn more : "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/introduction?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cosmos DB"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("h4",{attrs:{id:"performance-testing-on-cosmos-db"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#performance-testing-on-cosmos-db","aria-hidden":"true"}},[e._v("#")]),e._v(" Performance Testing on Cosmos DB")]),e._v(" "),o("p",[e._v("Although "),o("a",{attrs:{href:"https://azure.microsoft.com/services/cosmos-db?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos DB"),o("OutboundLink")],1),e._v(" comes with global availability and guaranteed performance, it's still incumbent on the developer and architect to understand the implication of application and database design choices on performance. Central to the discussion of performance in Cosmos DB is the concept of a "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/request-units?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("request unit (RU)"),o("OutboundLink")],1),e._v(", which is canonically defined as the processing capacity (CPU, memory, and IOPS) to perform a GET (retrieve) on a 1-KB document with 10 properties. Requests to delete, insert, or update require more capacity and so result in a higher RU cost. For instance, an insert of that same 1-KB document would incur a cost of 5 RUs.")]),e._v(" "),o("p",[e._v("RUs are also the currency of scale in Cosmos DB and, given that the RU cost of a single operation is deterministic, it is possible to estimate the cost of anticipated operations as well as to monitor the actual cost of completed operations. Armed with this information, you will be able to better assess the performance and scalability of your data architecture from planning to implementation to monitoring the production system.")]),e._v(" "),o("h5",{attrs:{id:"capacity-planning"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#capacity-planning","aria-hidden":"true"}},[e._v("#")]),e._v(" Capacity Planning")]),e._v(" "),o("p",[e._v("In the planning stages, you can make use of the "),o("a",{attrs:{href:"https://www.documentdb.com/capacityplanner",target:"_blank",rel:"noopener noreferrer"}},[e._v("capacity planner"),o("OutboundLink")],1),e._v(" to provide a rough estimate of required RUs given your sample document profile and the expected number of operations per second.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/cosmos-planner.png")}}),e._v(" "),o("p",[e._v("Here we can see that a query-heavy app storing 50,000 documents (of which "),o("strong",[e._v("sample.json")]),e._v(" was a representation) and expecting 20 new documents and 4 updates per second needs a database provisioned with just over 1,300 RUs.")]),e._v(" "),o("h5",{attrs:{id:"development-insight"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#development-insight","aria-hidden":"true"}},[e._v("#")]),e._v(" Development Insight")]),e._v(" "),o("p",[e._v("While developing your data access strategies, take a look at "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/performance-testing?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Performance and scale testing with Azure Cosmos DB"),o("OutboundLink")],1),e._v(". It describes an "),o("a",{attrs:{href:"https://github.com/Azure/azure-cosmosdb-dotnet/tree/master/samples/documentdb-benchmark?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("open-source benchmarking project"),o("OutboundLink")],1),e._v(" that you can adapt to your own domain to get a more precise accounting of RUs and thus the expected performance of your application. The code uses the .NET SDK and specifically applies to inserts into a document database (versus tables or graphs), but the concepts in the code can be adapted to your specific data model and query profiles. A key part of the processing is accumulating the "),o("strong",[e._v("RequestCharge")]),e._v(" from each operation:")]),e._v(" "),o("div",{staticClass:"language-C# line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("ResourceResponse<Document> response = await client.CreateDocumentAsync(\n\tUriFactory.CreateDocumentCollectionUri(DatabaseName, DataCollectionName),\n\tnewDictionary, new RequestOptions() { });\nrequestUnitsConsumed[taskId] += response.RequestCharge;\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br"),o("span",{staticClass:"line-number"},[e._v("2")]),o("br"),o("span",{staticClass:"line-number"},[e._v("3")]),o("br"),o("span",{staticClass:"line-number"},[e._v("4")]),o("br")])]),o("p",[e._v("For the execution captured below, the exact cost of inserting 10,000 test documents is slightly less 4,000 RU/s or 4 percent of the provisioned throughput for this collection (as noted in the collection summary line at the top of the console output).")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/benchmarkapp.png")}}),e._v(" "),o("p",[e._v("It's important to note, too, that "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/partition-data?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("partitioning"),o("OutboundLink")],1),e._v(", "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/consistency-levels?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("consistency levels"),o("OutboundLink")],1),e._v(", and "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/indexing-policies?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("indexing"),o("OutboundLink")],1),e._v(" will also have an impact on performance, so you may want to establish a baseline benchmark application and judiciously modify various configuration options and settings to determine their effect on performance.")]),e._v(" "),o("p",[e._v("Also consider using the "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/local-emulator?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cosmos DB Emulator"),o("OutboundLink")],1),e._v(" as the target of the performance testing application. It only supports document style databases and doesn't simulate different consistency levels, but it will provide insight into RU costs without incurring actual charges for running your performance tests against your Azure instance.")]),e._v(" "),o("h5",{attrs:{id:"production-monitoring"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#production-monitoring","aria-hidden":"true"}},[e._v("#")]),e._v(" Production Monitoring")]),e._v(" "),o("p",[e._v("For an operational database, the Azure portal Monitoring -> Metrics blade provides in-depth statistics on throughput, storage, availability, and latency. The Storage tab is of particular interest in that it lends insight into the partitioning of the data. Be sure to drill down into a specific database and collection to see the partition-specific metrics.")]),e._v(" "),o("p",[e._v("In the snapshot captured here, partitions are relatively evenly distributed, which indicates a good choice for a partition key. Had one partition been exceedingly large (or 'hot'), it could well be a performance bottleneck, and the accompanying list of the predominant keys in that partition could provide some suggestions for tweaking the partitioning strategy.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/partitions.png")}}),e._v(" "),o("p",[e._v("As you use the insight from these metrics to resolve potential bottlenecks, take a look at the performance tips offered by Microsoft in the following links:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/performance-tips?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Performance tips for .NET SDK"),o("OutboundLink")],1),e._v(" (or "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/performance-tips-async-java?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/key-value-store-cost?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cost-effective reads and writes"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/sql-api-partition-data?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("SQL data partitioning"),o("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=a.exports}}]);