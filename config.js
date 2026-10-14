/* Configuração da conexão do app com o Fabric e o SharePoint.
 * CLIENT_ID e TENANT_ID: a TI passa depois de registrar o app (tipo SPA,
 * redirect https://westbrasilbi.github.io/pesquisa_precos/). Enquanto estiverem vazios, o login não aparece.
 * SHAREPOINT: biblioteca das fotos. Enquanto estiver vazio, as fotos ficam no celular e sobem depois. */
window.CONFIG = {
  VERSAO: '2026.10.13-teste',
  MODO_TESTE: true,   // link pesquisa_precos_teste: sem login, clientes fictícios, nada vai ao banco

  TENANT_ID: '1516fbda-e5c5-429f-8c31-bf8dc4dedc55',   // WEST (13/10/2026)
  CLIENT_ID: '',   // aguardando a TI

  // API for GraphQL "api_pesquisa_preco" (banco sqldb_west_coleta_preco, workspace Banco Fabric - B.I)
  GRAPHQL_URL: 'https://api.fabric.microsoft.com/v1/workspaces/c20fb156-4b2c-4186-b729-eda76f5da581/graphqlapis/7cfcfbde-396a-473e-ac8c-a54b8fdda2f3/graphql',
  ESCOPO_API: ['https://analysis.windows.net/powerbi/api/GraphQLApi.Execute.All'],
  ESCOPO_FOTOS: ['https://graph.microsoft.com/Files.ReadWrite.All'],

  // Biblioteca das fotos no site RepositorioBI (definida pelo Steven em 14/10/2026).
  // Se ainda não existir, a pesquisa sobe normalmente e as fotos tentam de novo no próximo envio.
  SHAREPOINT: { host: 'westbrasil.sharepoint.com', site: '/sites/RepositorioBI', biblioteca: 'Pesquisa de Preço - Fotos' },

  // Lista de clientes guardada no celular: recarrega do banco depois deste tempo (horas)
  CLIENTES_VALIDADE_H: 12,
};
