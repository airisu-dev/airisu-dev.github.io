---
layout: page
title: Política de Privacidade do No More HDR
permalink: /no-more-hdr/privacy/
lang: pt-BR
---

Data de vigência: 4 de outubro de 2026

O No More HDR ("o app") é feito pela airisu.dev ("nós"). O app encontra fotos HDR na sua biblioteca de fotos e cria cópias de faixa padrão (SDR) delas. Esta política explica o que o app faz com as suas informações.

**Em resumo:** suas fotos são lidas e processadas no seu dispositivo e nunca são enviadas por nós. Não temos contas. O app exibe anúncios, fornecidos por um parceiro de publicidade terceirizado e que envolvem os dados descritos abaixo. Ele também usa o Google Firebase Analytics para entender como o app é usado, envia uma pequena quantidade de dados anônimos de desempenho e verifica se há atualizações do app.

## Suas fotos

- **As fotos ficam no seu dispositivo.** O app lê suas fotos apenas para verificar se contêm dados HDR e para criar cópias SDR. Isso acontece no seu dispositivo. Não enviamos suas fotos, não as copiamos para um servidor nem as visualizamos, e não temos nenhum servidor que as receba.
- **iCloud.** Se uma foto está armazenada no iCloud e não no seu dispositivo, o app pode pedir ao sistema que a baixe para que possa ser verificada. Esse download é feito pelo sistema Fotos da Apple, entre o seu dispositivo e a sua conta do iCloud. Ele não é enviado para nós.
- **Permissão para a biblioteca de fotos.** O app pede acesso à sua biblioteca de fotos. Ele usa o acesso de leitura para encontrar fotos HDR e o acesso de gravação para salvar as cópias SDR que você cria. Você pode escolher "Acesso Limitado" e dar ao app apenas as fotos que selecionar; o app passa então a trabalhar somente com essas fotos. Você pode alterar isso a qualquer momento no app Ajustes do iOS, em No More HDR > Fotos. O app também permite importar fotos individuais com o seletor de fotos do sistema, em vez de conceder acesso à biblioteca; apenas as fotos que você escolher ficam disponíveis para o app.
- **Seus originais.** O app não edita suas fotos originais. Ele adiciona novas cópias SDR. Apagar um original só é feito se você escolher, e o iOS pede que você confirme.

## O que o app armazena no seu dispositivo

O app mantém o seguinte apenas no seu dispositivo, dentro do armazenamento do próprio app:

- **Um índice de verificação (cache).** Para cada foto verificada pelo app, um registro com o identificador dela na biblioteca de fotos, a data de modificação, se tem HDR e quando foi verificada. Ele também mantém uma lista dos seus álbuns (identificador, título e quantidade de fotos) e de quais fotos pertencem a eles, para poder mostrar a contagem de HDR por álbum. Esse índice não contém conteúdo de imagem.
- **Um registro das cópias que o app criou** (cópias "Corrigidas"): qual foto é uma cópia e de qual foto ela veio.
- **Cópias privadas do app.** As cópias que você cria podem ficar guardadas dentro do app até você escolher salvá-las na sua biblioteca de fotos. As fotos que você importa com o seletor também são copiadas para o armazenamento do app, junto com o nome do arquivo, o tamanho e uma impressão digital (hash) usada para evitar importar a mesma foto duas vezes.
- **Ajustes e pequenas preferências**, como o idioma escolhido, as opções de salvamento e se você já viu a introdução.

Nada disso é enviado para nós. Tudo é apagado quando você desinstala o app.

## Informações enviadas para fora do seu dispositivo

### Publicidade

O app exibe anúncios do Google AdMob ("nosso parceiro de publicidade"). Para carregar e exibir anúncios, e para medir e limitar a frequência com que aparecem, o software do parceiro no app pode coletar e usar:

- o identificador de publicidade do seu dispositivo (IDFA), somente se você permitir o rastreamento quando o app perguntar;
- seu endereço IP e a localização aproximada derivada dele (não a localização precisa);
- informações do dispositivo, como modelo, sistema operacional e idioma, e informações sobre como você interage com os anúncios;
- identificadores e dados de uso sobre o app e os anúncios que você vê.

Os anúncios podem ser personalizados se você permitir o rastreamento, e não são personalizados se você recusar. Você pode alterar isso a qualquer momento em Ajustes do iOS > Privacidade e Segurança > Rastreamento e limitar a personalização de anúncios em Ajustes do iOS > Privacidade e Segurança > Publicidade da Apple. Se você estiver no Espaço Econômico Europeu, no Reino Unido ou em outra região que exija isso, o app pede seu consentimento antes de exibir anúncios personalizados. O parceiro de publicidade trata esses dados de acordo com a própria política de privacidade: [https://policies.google.com/technologies/partner-sites](https://policies.google.com/technologies/partner-sites). Nenhuma das suas fotos nem informações sobre elas é compartilhada com o parceiro de publicidade.

### Análise de uso

O app usa o Google Firebase Analytics, fornecido pelo Google, para nos ajudar a entender quais recursos são usados e como o app se comporta, para que possamos melhorá-lo. O Firebase Analytics pode coletar:

- um identificador da instância do app gerado para esta instalação e o identificador de fornecedor (IDFV) do seu dispositivo;
- eventos sobre como você usa o app (por exemplo, telas abertas e recursos usados). Não enviamos fotos, nomes de fotos nem qualquer coisa de dentro das suas fotos;
- informações do dispositivo e do app, como modelo, sistema operacional e versão, idioma, versão do app e localização aproximada derivada do seu endereço IP (não a localização precisa);
- se você permitir o rastreamento quando o app perguntar, seu identificador de publicidade (IDFA).

Esses dados são usados para análise e, quando você permite, para ajudar a medir e personalizar anúncios. O Google os processa de acordo com os próprios termos: [https://firebase.google.com/support/privacy](https://firebase.google.com/support/privacy) e [https://policies.google.com/privacy](https://policies.google.com/privacy). Você pode limitá-los em Ajustes do iOS > Privacidade e Segurança > Rastreamento.

### Dados de desempenho

O app envia medições anônimas de desempenho (por exemplo, quanto tempo o app leva para iniciar e abrir telas) a um de nossos prestadores de serviço, onde podemos vê-las. Cada relatório inclui:

- o nome, a versão e o build do app, e a atualização do app que está em execução;
- o modelo do seu dispositivo, a versão do iOS e o ajuste de idioma;
- o nome das telas visitadas, valores de tempo e um identificador aleatório criado pelo app no seu dispositivo na primeira execução, usado para agrupar relatórios da mesma instalação.

Esse identificador não é o seu Apple ID, o seu identificador de publicidade nem qualquer coisa ligada a quem você é. Não o combinamos com nenhum outro dado e não o usamos para rastreá-lo. Ele não é enviado quando o app é executado em desenvolvimento. Nosso prestador de serviço trata esses dados de acordo com os próprios termos e política de privacidade.

### Verificação de atualizações

O app pode receber pequenas atualizações do seu código pelo ar, para que possamos corrigir bugs sem uma nova versão na App Store. Quando o app inicia, ele contata nosso serviço de atualizações para perguntar se há uma atualização disponível e a baixa, se houver. Como qualquer solicitação pela internet, isso revela seu endereço IP ao servidor, e a solicitação inclui a versão do app, a plataforma e detalhes da atualização. Nenhuma foto nem informação sobre fotos é incluída. As atualizações nunca alteram as permissões que o app tem.

### Relatos e mensagens que você escolhe enviar

O app tem links "Relatar um problema" e "Falar com o desenvolvedor" nos Ajustes. Eles abrem seu app de e-mail com um rascunho endereçado a [airisu-dev@gmail.com](mailto:airisu-dev@gmail.com). O rascunho de relato de problema vem preenchido com a versão do app e a sua versão do iOS para que possamos ajudá-lo. Nada é enviado até você pressionar Enviar no seu app de e-mail, e você pode editar ou apagar qualquer coisa no rascunho antes, inclusive o que anexar. Veremos seu endereço de e-mail e tudo o que você escolher incluir, e os usamos apenas para responder a você e corrigir o problema. Não adicionamos você a nenhuma lista.

### Compartilhamento

Se você usar Compartilhar em uma foto, o app a entrega à folha de compartilhamento do iOS, e a foto vai para onde você escolher enviá-la. O app em si não a envia a lugar nenhum.

### Links

Os links de Política de Privacidade e Suporte nos Ajustes abrem uma página da web no seu navegador. Esses sites têm suas próprias práticas.

## O que não fazemos

- Não temos contas de usuário.
- Não vendemos suas informações.
- Não compartilhamos o conteúdo das suas fotos com ninguém.
- Não rastreamos você em apps e sites de outras empresas, a menos que você permita quando o app perguntar (veja Publicidade acima).
- Não coletamos seu nome, seus contatos, sua localização precisa nem o conteúdo das suas fotos.

## Suas escolhas e controle

- **Acesso às fotos:** altere ou revogue em Ajustes do iOS > No More HDR > Fotos.
- **Limpar dados da verificação:** no app, vá em Ajustes > Cache. "Limpar cache da verificação" apaga o índice de verificação e verifica sua biblioteca novamente. "Limpar cache do app" também apaga as cópias privadas do app ainda não salvas na sua biblioteca e esquece quais fotos estão marcadas como Corrigidas. As fotos que você já salvou na biblioteca não são apagadas.
- **Fotos importadas:** Ajustes > Fotos importadas > "Remover todas as fotos importadas" apaga as cópias mantidas dentro do app. Sua biblioteca de fotos não é alterada.
- **Apagar tudo:** desinstalar o app apaga todos os dados que ele mantém no seu dispositivo. As cópias que você salvou na sua biblioteca de fotos são suas fotos e permanecem lá até você apagá-las.
- **Análise de uso:** você pode impedir que o app compartilhe o identificador de publicidade a qualquer momento em Ajustes do iOS > Privacidade e Segurança > Rastreamento. Se quiser que seus dados de análise sejam apagados, entre em contato conosco em [airisu-dev@gmail.com](mailto:airisu-dev@gmail.com) com as informações de que precisamos para encontrá-los.
- **Anúncios e rastreamento:** altere sua escolha em Ajustes do iOS > Privacidade e Segurança > Rastreamento ou desative os anúncios personalizados lá. Redefina seu identificador de publicidade no mesmo lugar.
- **Dados de desempenho:** como os dados são anônimos e não estão vinculados a você, não podemos consultar nem apagar os registros de uma pessoa específica. Se tiver dúvidas, entre em contato conosco em [airisu-dev@gmail.com](mailto:airisu-dev@gmail.com).

## Crianças

O app não é direcionado a crianças menores de 13 anos (ou à idade mínima em seu país), e não coletamos intencionalmente informações pessoais de ninguém. Ele não tem contas e não pede dados pessoais. Os anúncios exibidos no app não são direcionados a crianças. Se você acredita que uma criança nos enviou informações pessoais, por exemplo em um e-mail, entre em contato conosco em [airisu-dev@gmail.com](mailto:airisu-dev@gmail.com) e as apagaremos.

## Alterações nesta política

Se mudarmos a forma como o app trata as informações, atualizaremos esta página e a data de vigência acima. Se a mudança for significativa, também avisaremos nas notas de versão do app.

## Contato

Dúvidas ou solicitações sobre esta política: [airisu-dev@gmail.com](mailto:airisu-dev@gmail.com)

airisu.dev

