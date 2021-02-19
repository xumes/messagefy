const keys = require('../../config/keys');

module.exports = survey => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>Eu gostaria muito da sua atenção!</h3>
          <p>Por favor, responda a seguinte pergunta:</p>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Sim</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">Não</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
