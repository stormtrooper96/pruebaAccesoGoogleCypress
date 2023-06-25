# pruebaAccesoGoogleCypress

En la carpeta `cypress\e2e\navegargoogle.cy.js` se encuentra la descripcion del codigo de automatizacion para la busqueda de un termino en google que contiene lo siguiente

```js
describe('Google Search', () => {
  it('performs a successful search and validates the results', () => {
    cy.visit('https://www.google.com');
    cy.get('textarea[name="q"]').type('Blossom company {enter}');
    cy.get('#result-stats').should('be.visible');
    cy.contains('About').should('be.visible');
  });
});
```
Estos pasos buscan el termino Blossom Company, presionando enter seguido de esto verifica si es visible la cantidad de resultados y tiempo de busqueda, adicional tambien valida si las pestañas de configuracion son visibles


Para ver el resultado y pasos usados para las pruebas manuales remitirse a este pdf
https://github.com/stormtrooper96/pruebaAccesoGoogleCypress/blob/master/resultadosetde%20pruebas.pdf
Ejecucion en plataforma Cypress.io

https://cloud.cypress.io/projects/zv66yc/runs/2/test-results/98058ba8-252b-490f-b5e9-0309f284f00f
