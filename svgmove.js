(function () {
  'use strict';

  window.svgMove = (options) => {

    window.addEventListener('scroll', () => {

      options = options || {};

      const DOM = {
        docElST: document.documentElement.scrollTop,
        docElSH: document.documentElement.scrollHeight,
        docBST: document.body.scrollTop,
        docElCH: document.documentElement.clientHeight,
        svgPath: document.querySelector(options.pathEl),
        svgMove: document.querySelector(options.moveEL),
      }

      let svgMoveAxis = DOM.svgMove.nodeName;
      let scrollP = (DOM.docElST + DOM.docBST) / (DOM.docElSH - DOM.docElCH);
      let pathL = DOM.svgPath.getTotalLength();
      let mPos = DOM.svgPath.getPointAtLength(scrollP * pathL);

      switch (svgMoveAxis) {
        case 'rect':
          DOM.svgMove.setAttribute('y', mPos.y);
          DOM.svgMove.setAttribute('x', mPos.x);
          break;
        case 'ellipse':
          DOM.svgMove.setAttribute('cy', mPos.y);
          DOM.svgMove.setAttribute('cx', mPos.x);
          break;
        case 'circle':
          DOM.svgMove.setAttribute('cy', mPos.y);
          DOM.svgMove.setAttribute('cx', mPos.x);
      }
    });

  }

})();