# 1Luisin — Portfólio pessoal

Landing page de Luis Guilherme, feita com HTML e CSS e fontes locais, sem dependências de instalação.

## Visualização

Abra `index.html` no navegador. Os caminhos relativos permitem visualizar o projeto localmente ou hospedá-lo em uma subpasta.

## Estrutura

- `index.html`: apresentação, sobre, projeto em destaque e contato.
- `assets/css/style.css`: estilos ativos, incluindo adaptações para celular e tablet.
- `assets/img/`: imagens do projeto original.
- `assets/fonts/`: fonte Inter local.

As outras folhas de estilo são arquivos legados e não são carregadas pela página atual.

## Melhorias realizadas

- Apresentação inicial com proposta mais clara e chamadas para projetos e contato.
- Identidade escura com destaque verde, hierarquia tipográfica e espaçamento consistente.
- Navegação por âncoras reais e correção do link do GitHub.
- Layout fluido, sem alturas fixas nas seções de conteúdo.
- Um único título principal, seções semânticas, imagens com descrição, foco visível e link para pular ao conteúdo.
- Respeito à preferência de movimento reduzido e carregamento adiado das imagens abaixo da apresentação.
- Remoção do script externo de botões, que não era utilizado.
- Contato direto no LinkedIn em substituição ao formulário que não possuía serviço de envio.

## Personalização

Edite textos e endereços no HTML. As cores estão nas variáveis de `:root` no CSS.
O projeto em destaque é este portfólio; o botão leva ao perfil do GitHub. Para destacar outros trabalhos, adicione apenas projetos reais e seus links específicos.
Não há formulário nem processamento de mensagens. Para adicionar envio por e-mail, será necessário configurar um serviço e o endereço de destino.

## Verificação

Verificados localmente: destino das âncoras, IDs únicos, título principal, presença dos arquivos e fonte, descrições das imagens e proteção dos links em nova aba. A revisão visual em navegadores e dispositivos reais continua recomendada.
