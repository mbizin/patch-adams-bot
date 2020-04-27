/**
 *
 * main() will be run when you invoke this action
 *
 * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
 *
 * @return The output of this action, which must be a JSON object.
 *
 */
var request = require("request-promise");
const DiscoveryV1 = require("watson-developer-cloud/discovery/v1");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const dateOptions = {
  year: 'numeric', month: 'numeric', day: 'numeric',
  hour: 'numeric', minute: 'numeric', second: 'numeric',
  hour12: false,
  calendar: 'gregory',
  timeZone: 'America/Sao_Paulo' 
};

const locale = 'pt-BR';

async function main(params) {


  if (params.type === "api") {
   /*
    * Use of the 'Johns Hopkins CSSE' resource
    */
    try {
      const summary = await request({
        method: "GET",
        uri: "https://api.covid19api.com/summary",
        json: true
      });

      if (params.country) {
        for (var i = 0; i < summary.Countries.length; i++) {
          if (
            summary.Countries[i].Country.toLowerCase() ===
            params.country.toLowerCase()
          ) {
              
              const data = {
                NewConfirmed: new Intl.NumberFormat(locale).format(summary.Countries[i].NewConfirmed),
                TotalConfirmed: new Intl.NumberFormat(locale).format(summary.Countries[i].TotalConfirmed),
                NewDeaths: new Intl.NumberFormat(locale).format(summary.Countries[i].NewDeaths),
                TotalDeaths: new Intl.NumberFormat(locale).format(summary.Countries[i].TotalDeaths),
                NewRecovered: new Intl.NumberFormat(locale).format(summary.Countries[i].NewRecovered),
                TotalRecovered: new Intl.NumberFormat(locale).format(summary.Countries[i].TotalRecovered),
                Date: new Intl.DateTimeFormat(locale, dateOptions).format(new Date(summary.Countries[i].Date))
              };
            return {
              result: data
            };
          }
        }
        return { error: `Não consegui encontrar o país informado: ${params.country}` };
      }
      
      let NewConfirmed = 0;
      let TotalConfirmed = 0;
      let NewDeaths = 0;
      let TotalDeaths = 0;
      let NewRecovered = 0;
      let TotalRecovered = 0;
      let DateUpdate = new Date(Date.UTC(2019, 11, 20, 0, 0, 0));

      for (var i = 0; i < summary.Countries.length; i++) {
          NewConfirmed += summary.Countries[i].NewConfirmed;
          TotalConfirmed += summary.Countries[i].TotalConfirmed;
          NewDeaths += summary.Countries[i].NewDeaths;
          TotalDeaths += summary.Countries[i].TotalDeaths;
          NewRecovered += summary.Countries[i].NewRecovered;
          TotalRecovered += summary.Countries[i].TotalRecovered;
          if (summary.Countries[i].Date && new Date(summary.Countries[i].Date).getTime() > DateUpdate.getTime()){
               DateUpdate = new Date(summary.Countries[i].Date);
          }
      }
      
      const data = {
          NewConfirmed: new Intl.NumberFormat(locale).format(NewConfirmed),
          TotalConfirmed: new Intl.NumberFormat(locale).format(TotalConfirmed),
          NewDeaths: new Intl.NumberFormat(locale).format(NewDeaths),
          TotalDeaths: new Intl.NumberFormat(locale).format(TotalDeaths),
          NewRecovered: new Intl.NumberFormat(locale).format(NewRecovered),
          TotalRecovered: new Intl.NumberFormat(locale).format(TotalRecovered),
          Date: new Intl.DateTimeFormat(locale, dateOptions).format(DateUpdate)
      };
      
      return {
        result: data
      };
    } catch (err) {
      return { error: "Falha ao consultar número de casos na Johns Hopkins CSSE: " + err };
    }
  } else if (params.type === "discovery") {
    /*
    * Use of the 'Watson Discovery' as resource
    */
    const discovery = new DiscoveryV1({
      version: "2020-04-21",
      iam_apikey: params.api_key,
      url: params.url
    });

    const offset = getRandomInt(50);

    const queryParams = {
      environment_id: params.env_id,
      collection_id: params.collection_id,
      natural_language_query:
        "corona virus " + params.input || "corona virus news",
      count: 3,
      offset: offset
    };
    try {
      data = await discovery.query(queryParams);
      
      if (data.results == undefined ) {
          return { "Falha ao consultar notícias no Watson Discovery: " : data };
      }
      
      let response = data.results.map((v, i) => {
        return `${v.title}
                 ${v.text}
                 ${v.url}`;
      });
      return {
        result:
          "Aqui estão três notícias que encontrei na internet.\n\n" +
          response.join("\n\n")
      };
    } catch (err) {
      return { error: "Falha ao consultar notícias no Watson Discovery: " + err };
    }
  } else {
      return { error: "Tipo inválido!" };
  }
}