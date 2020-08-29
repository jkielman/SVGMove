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
            svgPath: document.querySelector(options.path),
            svgMove: document.querySelector(options.moveEL)
          }

          let scrollP = (DOM.docElST + DOM.docBST) / (DOM.docElSH - DOM.docElCH);
          let pathL = DOM.svgPath.getTotalLength();
          let mPos = DOM.svgPath.getPointAtLength(scrollP * pathL);

          DOM.svgMove.setAttribute('cy', mPos.y);
          DOM.svgMove.setAttribute('cx', mPos.x);

        });

      }

    })();