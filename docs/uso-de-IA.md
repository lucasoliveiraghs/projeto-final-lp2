---
titulo: Uso de IA no projeto
descricao: Registro de todas as conversas com chatbot usadas no projeto, com data, etapa e finalidade.
autores: Thiago Henrique, Lucas Gabriel, Pedro Almeida
versao: v1.0
ultima_atualizacao: 2026-11-23
arquivos_relacionados: docs/04-versoes/ site/css/style.css
---

Cada uso de IA deve ser documentado neste documento. Caso haja uso de IA além do que for documentado, será atribuída nota zero para o trabalho.

A documentação ERRADA também será penalizada.

O uso de IA deve ser para assistencia, não execução do projeto. Os alunos ainda deverão responder a questões relacionadas ao desenvolvimento e código. A resposta incorreta será considerada como erro durante a avaliação e penalizará a nota.

## Regras de uso

- A IA responde dúvidas. O código é escrito pelo grupo.
- Cada integrante deve explicar, com as próprias palavras, qualquer trecho que tenha surgido de uma conversa.
- Copiar código gerado pela IA sem entendê-lo não é permitido. Se um trecho for usado, ele deve ser registrado na tabela.
- Ferramentas que editam o repositório ou geram código de forma autônoma (Claude Code, agentes do Copilot, Cursor agent e similares) não são permitidas. Se identificado, a nota do trabalho será zero.
- Linhas da tabela sem a respectiva print serão consideradas **ERROS** do grupo.

O modelo de dúvidas tiradas com a assistencia de IA deverão ter o seguinte formato:

| Data | Ferramenta | Etapa | Arquivo(s) afetado(s) | Motivo do uso e erro antes do uso | O que foi feito com a resposta | Link ou print |
|---|---|---|---|---|---|---|
| 2026-11-05 | Ia mode do google | Estrutura HTML e javascript | site/index.html | Dúvida sobre a diferença entre `section` e `div`; a página tinha tudo dentro de `div`, o que dificultava ler a estrutura | Reorganizei o cabeçalho e as seções da página e testei no navegador | `site/docs/PrintsdepromptsdeTexto/ia1 `, `site/docs/PrintsdepromptsdeTexto/ia2 `, `site/docs/PrintsdepromptsdeTexto/ia3 `, `site/docs/PrintsdepromptsdeTexto/ia4 ` |
| 2026-11-12 | copilot | Responsividade | site/css/estilo.css | O menu sumia no celular e não sabíamos como adaptar o layout; tentamos ajustar larguras fixas sem sucesso | Entendi o uso de `@media` e escrevi a regra do menu hambúrguer por conta própria | `site/docs/PrintsdepromptsdeTexto/ia4 `, `site/docs/PrintsdepromptsdeTexto/ia5 ` |
| 2026-11-19 | copilot | Validação do formulário | site/js/main.js | O envio aceitava campos vazios e e-mail inválido; não tínhamos certeza de como validar em JavaScript | Não usei o trecho sugerido; implementei a validação com `required` no HTML e revisei a lógica com o professor | `site/docs/PrintsdepromptsdeTexto/ia7 `, `site/docs/PrintsdepromptsdeTexto/ia8 `, `site/docs/PrintsdepromptsdeTexto/ia9 ` |



