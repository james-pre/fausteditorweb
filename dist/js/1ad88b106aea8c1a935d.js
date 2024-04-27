"use strict";
(self["webpackChunkfausteditorweb"] = self["webpackChunkfausteditorweb"] || []).push([["vendors-include-loader_node_modules_monaco-editor_esm_vs_editor_editor_main_js"],{

/***/ "include-loader!./node_modules/monaco-editor/esm/vs/editor/editor.main.js":
/*!********************************************************************************!*\
  !*** include-loader!./node_modules/monaco-editor/esm/vs/editor/editor.main.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CancellationTokenSource: () => (/* reexport safe */ _editor_main_js__WEBPACK_IMPORTED_MODULE_62__.CancellationTokenSource),
/* harmony export */   Emitter: () => (/* reexport safe */ _editor_main_js__WEBPACK_IMPORTED_MODULE_62__.Emitter),
/* harmony export */   KeyCode: () => (/* reexport safe */ _editor_main_js__WEBPACK_IMPORTED_MODULE_62__.KeyCode),
/* harmony export */   KeyMod: () => (/* reexport safe */ _editor_main_js__WEBPACK_IMPORTED_MODULE_62__.KeyMod),
/* harmony export */   MarkerSeverity: () => (/* reexport safe */ _editor_main_js__WEBPACK_IMPORTED_MODULE_62__.MarkerSeverity),
/* harmony export */   MarkerTag: () => (/* reexport safe */ _editor_main_js__WEBPACK_IMPORTED_MODULE_62__.MarkerTag),
/* harmony export */   Position: () => (/* reexport safe */ _editor_main_js__WEBPACK_IMPORTED_MODULE_62__.Position),
/* harmony export */   Range: () => (/* reexport safe */ _editor_main_js__WEBPACK_IMPORTED_MODULE_62__.Range),
/* harmony export */   Selection: () => (/* reexport safe */ _editor_main_js__WEBPACK_IMPORTED_MODULE_62__.Selection),
/* harmony export */   SelectionDirection: () => (/* reexport safe */ _editor_main_js__WEBPACK_IMPORTED_MODULE_62__.SelectionDirection),
/* harmony export */   Token: () => (/* reexport safe */ _editor_main_js__WEBPACK_IMPORTED_MODULE_62__.Token),
/* harmony export */   Uri: () => (/* reexport safe */ _editor_main_js__WEBPACK_IMPORTED_MODULE_62__.Uri),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   editor: () => (/* reexport safe */ _editor_main_js__WEBPACK_IMPORTED_MODULE_62__.editor),
/* harmony export */   languages: () => (/* reexport safe */ _editor_main_js__WEBPACK_IMPORTED_MODULE_62__.languages)
/* harmony export */ });
/* harmony import */ var _contrib_anchorSelect_browser_anchorSelect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contrib/anchorSelect/browser/anchorSelect.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/anchorSelect/browser/anchorSelect.js");
/* harmony import */ var _contrib_bracketMatching_browser_bracketMatching_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contrib/bracketMatching/browser/bracketMatching.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/bracketMatching/browser/bracketMatching.js");
/* harmony import */ var _browser_coreCommands_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browser/coreCommands.js */ "./node_modules/monaco-editor/esm/vs/editor/browser/coreCommands.js");
/* harmony import */ var _contrib_caretOperations_browser_caretOperations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contrib/caretOperations/browser/caretOperations.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/caretOperations/browser/caretOperations.js");
/* harmony import */ var _contrib_caretOperations_browser_transpose_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contrib/caretOperations/browser/transpose.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/caretOperations/browser/transpose.js");
/* harmony import */ var _contrib_clipboard_browser_clipboard_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contrib/clipboard/browser/clipboard.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/clipboard/browser/clipboard.js");
/* harmony import */ var _contrib_codeAction_browser_codeActionContributions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contrib/codeAction/browser/codeActionContributions.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/browser/codeActionContributions.js");
/* harmony import */ var _contrib_codelens_browser_codelensController_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contrib/codelens/browser/codelensController.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/codelens/browser/codelensController.js");
/* harmony import */ var _contrib_colorPicker_browser_colorContributions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contrib/colorPicker/browser/colorContributions.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/colorPicker/browser/colorContributions.js");
/* harmony import */ var _contrib_colorPicker_browser_standaloneColorPickerActions_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contrib/colorPicker/browser/standaloneColorPickerActions.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/colorPicker/browser/standaloneColorPickerActions.js");
/* harmony import */ var _contrib_comment_browser_comment_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contrib/comment/browser/comment.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/comment/browser/comment.js");
/* harmony import */ var _contrib_contextmenu_browser_contextmenu_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contrib/contextmenu/browser/contextmenu.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/contextmenu/browser/contextmenu.js");
/* harmony import */ var _contrib_cursorUndo_browser_cursorUndo_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contrib/cursorUndo/browser/cursorUndo.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/cursorUndo/browser/cursorUndo.js");
/* harmony import */ var _browser_widget_diffEditor_diffEditor_contribution_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./browser/widget/diffEditor/diffEditor.contribution.js */ "./node_modules/monaco-editor/esm/vs/editor/browser/widget/diffEditor/diffEditor.contribution.js");
/* harmony import */ var _contrib_dnd_browser_dnd_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contrib/dnd/browser/dnd.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/dnd/browser/dnd.js");
/* harmony import */ var _contrib_documentSymbols_browser_documentSymbols_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contrib/documentSymbols/browser/documentSymbols.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/documentSymbols/browser/documentSymbols.js");
/* harmony import */ var _contrib_dropOrPasteInto_browser_copyPasteContribution_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contrib/dropOrPasteInto/browser/copyPasteContribution.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/dropOrPasteInto/browser/copyPasteContribution.js");
/* harmony import */ var _contrib_dropOrPasteInto_browser_dropIntoEditorContribution_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contrib/dropOrPasteInto/browser/dropIntoEditorContribution.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/dropOrPasteInto/browser/dropIntoEditorContribution.js");
/* harmony import */ var _contrib_find_browser_findController_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contrib/find/browser/findController.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/find/browser/findController.js");
/* harmony import */ var _contrib_folding_browser_folding_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./contrib/folding/browser/folding.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/folding/browser/folding.js");
/* harmony import */ var _contrib_fontZoom_browser_fontZoom_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./contrib/fontZoom/browser/fontZoom.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/fontZoom/browser/fontZoom.js");
/* harmony import */ var _contrib_format_browser_formatActions_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contrib/format/browser/formatActions.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/format/browser/formatActions.js");
/* harmony import */ var _contrib_gotoError_browser_gotoError_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./contrib/gotoError/browser/gotoError.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/gotoError/browser/gotoError.js");
/* harmony import */ var _standalone_browser_quickAccess_standaloneGotoLineQuickAccess_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./standalone/browser/quickAccess/standaloneGotoLineQuickAccess.js */ "./node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneGotoLineQuickAccess.js");
/* harmony import */ var _contrib_gotoSymbol_browser_goToCommands_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./contrib/gotoSymbol/browser/goToCommands.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/goToCommands.js");
/* harmony import */ var _contrib_gotoSymbol_browser_link_goToDefinitionAtPosition_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./contrib/gotoSymbol/browser/link/goToDefinitionAtPosition.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/link/goToDefinitionAtPosition.js");
/* harmony import */ var _contrib_hover_browser_hover_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./contrib/hover/browser/hover.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hover.js");
/* harmony import */ var _standalone_browser_iPadShowKeyboard_iPadShowKeyboard_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./standalone/browser/iPadShowKeyboard/iPadShowKeyboard.js */ "./node_modules/monaco-editor/esm/vs/editor/standalone/browser/iPadShowKeyboard/iPadShowKeyboard.js");
/* harmony import */ var _contrib_inPlaceReplace_browser_inPlaceReplace_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./contrib/inPlaceReplace/browser/inPlaceReplace.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/inPlaceReplace/browser/inPlaceReplace.js");
/* harmony import */ var _contrib_indentation_browser_indentation_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./contrib/indentation/browser/indentation.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/indentation/browser/indentation.js");
/* harmony import */ var _contrib_inlayHints_browser_inlayHintsContribution_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./contrib/inlayHints/browser/inlayHintsContribution.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/inlayHints/browser/inlayHintsContribution.js");
/* harmony import */ var _contrib_inlineCompletions_browser_inlineCompletions_contribution_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./contrib/inlineCompletions/browser/inlineCompletions.contribution.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/inlineCompletions.contribution.js");
/* harmony import */ var _contrib_inlineProgress_browser_inlineProgress_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./contrib/inlineProgress/browser/inlineProgress.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/inlineProgress/browser/inlineProgress.js");
/* harmony import */ var _standalone_browser_inspectTokens_inspectTokens_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./standalone/browser/inspectTokens/inspectTokens.js */ "./node_modules/monaco-editor/esm/vs/editor/standalone/browser/inspectTokens/inspectTokens.js");
/* harmony import */ var _contrib_lineSelection_browser_lineSelection_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./contrib/lineSelection/browser/lineSelection.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/lineSelection/browser/lineSelection.js");
/* harmony import */ var _contrib_linesOperations_browser_linesOperations_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./contrib/linesOperations/browser/linesOperations.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/linesOperations/browser/linesOperations.js");
/* harmony import */ var _contrib_linkedEditing_browser_linkedEditing_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./contrib/linkedEditing/browser/linkedEditing.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/linkedEditing/browser/linkedEditing.js");
/* harmony import */ var _contrib_links_browser_links_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./contrib/links/browser/links.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/links/browser/links.js");
/* harmony import */ var _contrib_longLinesHelper_browser_longLinesHelper_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./contrib/longLinesHelper/browser/longLinesHelper.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/longLinesHelper/browser/longLinesHelper.js");
/* harmony import */ var _contrib_multicursor_browser_multicursor_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./contrib/multicursor/browser/multicursor.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/multicursor/browser/multicursor.js");
/* harmony import */ var _contrib_parameterHints_browser_parameterHints_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./contrib/parameterHints/browser/parameterHints.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/parameterHints/browser/parameterHints.js");
/* harmony import */ var _standalone_browser_quickAccess_standaloneCommandsQuickAccess_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./standalone/browser/quickAccess/standaloneCommandsQuickAccess.js */ "./node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneCommandsQuickAccess.js");
/* harmony import */ var _standalone_browser_quickAccess_standaloneHelpQuickAccess_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./standalone/browser/quickAccess/standaloneHelpQuickAccess.js */ "./node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneHelpQuickAccess.js");
/* harmony import */ var _standalone_browser_quickAccess_standaloneGotoSymbolQuickAccess_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./standalone/browser/quickAccess/standaloneGotoSymbolQuickAccess.js */ "./node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneGotoSymbolQuickAccess.js");
/* harmony import */ var _contrib_readOnlyMessage_browser_contribution_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./contrib/readOnlyMessage/browser/contribution.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/readOnlyMessage/browser/contribution.js");
/* harmony import */ var _standalone_browser_referenceSearch_standaloneReferenceSearch_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./standalone/browser/referenceSearch/standaloneReferenceSearch.js */ "./node_modules/monaco-editor/esm/vs/editor/standalone/browser/referenceSearch/standaloneReferenceSearch.js");
/* harmony import */ var _contrib_rename_browser_rename_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./contrib/rename/browser/rename.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/rename/browser/rename.js");
/* harmony import */ var _contrib_semanticTokens_browser_documentSemanticTokens_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./contrib/semanticTokens/browser/documentSemanticTokens.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/semanticTokens/browser/documentSemanticTokens.js");
/* harmony import */ var _contrib_semanticTokens_browser_viewportSemanticTokens_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./contrib/semanticTokens/browser/viewportSemanticTokens.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/semanticTokens/browser/viewportSemanticTokens.js");
/* harmony import */ var _contrib_smartSelect_browser_smartSelect_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./contrib/smartSelect/browser/smartSelect.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/smartSelect/browser/smartSelect.js");
/* harmony import */ var _contrib_snippet_browser_snippetController2_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./contrib/snippet/browser/snippetController2.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/snippet/browser/snippetController2.js");
/* harmony import */ var _contrib_stickyScroll_browser_stickyScrollContribution_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./contrib/stickyScroll/browser/stickyScrollContribution.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/stickyScroll/browser/stickyScrollContribution.js");
/* harmony import */ var _contrib_suggest_browser_suggestController_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./contrib/suggest/browser/suggestController.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestController.js");
/* harmony import */ var _contrib_suggest_browser_suggestInlineCompletions_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./contrib/suggest/browser/suggestInlineCompletions.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestInlineCompletions.js");
/* harmony import */ var _standalone_browser_toggleHighContrast_toggleHighContrast_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./standalone/browser/toggleHighContrast/toggleHighContrast.js */ "./node_modules/monaco-editor/esm/vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast.js");
/* harmony import */ var _contrib_toggleTabFocusMode_browser_toggleTabFocusMode_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./contrib/toggleTabFocusMode/browser/toggleTabFocusMode.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/toggleTabFocusMode/browser/toggleTabFocusMode.js");
/* harmony import */ var _contrib_tokenization_browser_tokenization_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./contrib/tokenization/browser/tokenization.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/tokenization/browser/tokenization.js");
/* harmony import */ var _contrib_unicodeHighlighter_browser_unicodeHighlighter_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./contrib/unicodeHighlighter/browser/unicodeHighlighter.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/unicodeHighlighter/browser/unicodeHighlighter.js");
/* harmony import */ var _contrib_unusualLineTerminators_browser_unusualLineTerminators_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./contrib/unusualLineTerminators/browser/unusualLineTerminators.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/unusualLineTerminators/browser/unusualLineTerminators.js");
/* harmony import */ var _contrib_wordHighlighter_browser_wordHighlighter_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./contrib/wordHighlighter/browser/wordHighlighter.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/wordHighlighter/browser/wordHighlighter.js");
/* harmony import */ var _contrib_wordOperations_browser_wordOperations_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./contrib/wordOperations/browser/wordOperations.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/wordOperations/browser/wordOperations.js");
/* harmony import */ var _contrib_wordPartOperations_browser_wordPartOperations_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./contrib/wordPartOperations/browser/wordPartOperations.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/wordPartOperations/browser/wordPartOperations.js");
/* harmony import */ var _editor_main_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! !!./editor.main.js */ "./node_modules/monaco-editor/esm/vs/editor/editor.main.js");
self["MonacoEnvironment"] = (function (paths) {
      function stripTrailingSlash(str) {
        return str.replace(/\/$/, '');
      }
      return {
        globalAPI: false,
        getWorkerUrl: function (moduleId, label) {
          var pathPrefix =  true ? __webpack_require__.p : 0;
          var result = (pathPrefix ? stripTrailingSlash(pathPrefix) + '/' : '') + paths[label];
          if (/^((http:)|(https:)|(file:)|(\/\/))/.test(result)) {
            var currentUrl = String(window.location);
            var currentOrigin = currentUrl.substr(0, currentUrl.length - window.location.hash.length - window.location.search.length - window.location.pathname.length);
            if (result.substring(0, currentOrigin.length) !== currentOrigin) {
              if(/^(\/\/)/.test(result)) {
                result = window.location.protocol + result
              }
              var js = '/*' + label + '*/importScripts("' + result + '");';
              var blob = new Blob([js], { type: 'application/javascript' });
              return URL.createObjectURL(blob);
            }
          }
          return result;
        }
      };
    })({
  "editorWorkerService": "editor.worker.js"
});

































































/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_editor_main_js__WEBPACK_IMPORTED_MODULE_62__);
		

/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadLanguage: () => (/* binding */ loadLanguage),
/* harmony export */   registerLanguage: () => (/* binding */ registerLanguage)
/* harmony export */ });
/* harmony import */ var _editor_editor_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor/editor.api.js */ "include-loader!./node_modules/monaco-editor/esm/vs/editor/editor.api.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));

// src/fillers/monaco-editor-core.ts
var monaco_editor_core_exports = {};
__reExport(monaco_editor_core_exports, _editor_editor_api_js__WEBPACK_IMPORTED_MODULE_0__);


// src/basic-languages/_.contribution.ts
var languageDefinitions = {};
var lazyLanguageLoaders = {};
var LazyLanguageLoader = class {
  static getOrCreate(languageId) {
    if (!lazyLanguageLoaders[languageId]) {
      lazyLanguageLoaders[languageId] = new LazyLanguageLoader(languageId);
    }
    return lazyLanguageLoaders[languageId];
  }
  _languageId;
  _loadingTriggered;
  _lazyLoadPromise;
  _lazyLoadPromiseResolve;
  _lazyLoadPromiseReject;
  constructor(languageId) {
    this._languageId = languageId;
    this._loadingTriggered = false;
    this._lazyLoadPromise = new Promise((resolve, reject) => {
      this._lazyLoadPromiseResolve = resolve;
      this._lazyLoadPromiseReject = reject;
    });
  }
  load() {
    if (!this._loadingTriggered) {
      this._loadingTriggered = true;
      languageDefinitions[this._languageId].loader().then((mod) => this._lazyLoadPromiseResolve(mod), (err) => this._lazyLoadPromiseReject(err));
    }
    return this._lazyLoadPromise;
  }
};
async function loadLanguage(languageId) {
  await LazyLanguageLoader.getOrCreate(languageId).load();
  const model = monaco_editor_core_exports.editor.createModel("", languageId);
  model.dispose();
}
function registerLanguage(def) {
  const languageId = def.id;
  languageDefinitions[languageId] = def;
  monaco_editor_core_exports.languages.register(def);
  const lazyLanguageLoader = LazyLanguageLoader.getOrCreate(languageId);
  monaco_editor_core_exports.languages.registerTokensProviderFactory(languageId, {
    create: async () => {
      const mod = await lazyLanguageLoader.load();
      return mod.language;
    }
  });
  monaco_editor_core_exports.languages.onLanguageEncountered(languageId, async () => {
    const mod = await lazyLanguageLoader.load();
    monaco_editor_core_exports.languages.setLanguageConfiguration(languageId, mod.conf);
  });
}



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/abap/abap.contribution.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/abap/abap.contribution.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/abap/abap.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "abap",
  extensions: [".abap"],
  aliases: ["abap", "ABAP"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_basic-languages_abap_abap_js").then(__webpack_require__.bind(__webpack_require__, /*! ./abap.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/abap/abap.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/apex/apex.contribution.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/apex/apex.contribution.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/apex/apex.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "apex",
  extensions: [".cls"],
  aliases: ["Apex", "apex"],
  mimetypes: ["text/x-apex-source", "text/x-apex"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_apex_apex_js").then(__webpack_require__.bind(__webpack_require__, /*! ./apex.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/apex/apex.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/azcli/azcli.contribution.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/azcli/azcli.contribution.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/azcli/azcli.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "azcli",
  extensions: [".azcli"],
  aliases: ["Azure CLI", "azcli"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_azcli_azcli_js").then(__webpack_require__.bind(__webpack_require__, /*! ./azcli.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/azcli/azcli.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/bat/bat.contribution.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/bat/bat.contribution.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/bat/bat.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "bat",
  extensions: [".bat", ".cmd"],
  aliases: ["Batch", "bat"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_bat_bat_js").then(__webpack_require__.bind(__webpack_require__, /*! ./bat.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/bat/bat.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/bicep/bicep.contribution.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/bicep/bicep.contribution.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/bicep/bicep.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "bicep",
  extensions: [".bicep"],
  aliases: ["Bicep"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_bicep_bicep_js").then(__webpack_require__.bind(__webpack_require__, /*! ./bicep.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/bicep/bicep.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/cameligo/cameligo.contribution.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/cameligo/cameligo.contribution.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/cameligo/cameligo.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "cameligo",
  extensions: [".mligo"],
  aliases: ["Cameligo"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_cameligo_cameligo_js").then(__webpack_require__.bind(__webpack_require__, /*! ./cameligo.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/cameligo/cameligo.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/clojure/clojure.contribution.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/clojure/clojure.contribution.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/clojure/clojure.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "clojure",
  extensions: [".clj", ".cljs", ".cljc", ".edn"],
  aliases: ["clojure", "Clojure"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_basic-languages_clojure_clojure_js").then(__webpack_require__.bind(__webpack_require__, /*! ./clojure.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/clojure/clojure.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/coffee/coffee.contribution.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/coffee/coffee.contribution.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/coffee/coffee.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "coffeescript",
  extensions: [".coffee"],
  aliases: ["CoffeeScript", "coffeescript", "coffee"],
  mimetypes: ["text/x-coffeescript", "text/coffeescript"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_coffee_coffee_js").then(__webpack_require__.bind(__webpack_require__, /*! ./coffee.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/coffee/coffee.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/cpp/cpp.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "c",
  extensions: [".c", ".h"],
  aliases: ["C", "c"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_cpp_cpp_js").then(__webpack_require__.bind(__webpack_require__, /*! ./cpp.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/cpp/cpp.js"));
    }
  }
});
(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "cpp",
  extensions: [".cpp", ".cc", ".cxx", ".hpp", ".hh", ".hxx"],
  aliases: ["C++", "Cpp", "cpp"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_cpp_cpp_js").then(__webpack_require__.bind(__webpack_require__, /*! ./cpp.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/cpp/cpp.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/csharp/csharp.contribution.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/csharp/csharp.contribution.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/csharp/csharp.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "csharp",
  extensions: [".cs", ".csx", ".cake"],
  aliases: ["C#", "csharp"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_csharp_csharp_js").then(__webpack_require__.bind(__webpack_require__, /*! ./csharp.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/csharp/csharp.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/csp/csp.contribution.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/csp/csp.contribution.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/csp/csp.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "csp",
  extensions: [],
  aliases: ["CSP", "csp"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_csp_csp_js").then(__webpack_require__.bind(__webpack_require__, /*! ./csp.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/csp/csp.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/css/css.contribution.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/css/css.contribution.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/css/css.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "css",
  extensions: [".css"],
  aliases: ["CSS", "css"],
  mimetypes: ["text/css"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_css_css_js").then(__webpack_require__.bind(__webpack_require__, /*! ./css.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/css/css.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/cypher/cypher.contribution.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/cypher/cypher.contribution.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/cypher/cypher.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "cypher",
  extensions: [".cypher", ".cyp"],
  aliases: ["Cypher", "OpenCypher"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_cypher_cypher_js").then(__webpack_require__.bind(__webpack_require__, /*! ./cypher.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/cypher/cypher.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/dart/dart.contribution.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/dart/dart.contribution.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/dart/dart.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "dart",
  extensions: [".dart"],
  aliases: ["Dart", "dart"],
  mimetypes: ["text/x-dart-source", "text/x-dart"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_dart_dart_js").then(__webpack_require__.bind(__webpack_require__, /*! ./dart.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/dart/dart.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/dockerfile/dockerfile.contribution.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/dockerfile/dockerfile.contribution.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/dockerfile/dockerfile.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "dockerfile",
  extensions: [".dockerfile"],
  filenames: ["Dockerfile"],
  aliases: ["Dockerfile"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_dockerfile_dockerfile_js").then(__webpack_require__.bind(__webpack_require__, /*! ./dockerfile.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/dockerfile/dockerfile.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/ecl/ecl.contribution.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/ecl/ecl.contribution.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/ecl/ecl.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "ecl",
  extensions: [".ecl"],
  aliases: ["ECL", "Ecl", "ecl"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_ecl_ecl_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ecl.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/ecl/ecl.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/elixir/elixir.contribution.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/elixir/elixir.contribution.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/elixir/elixir.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "elixir",
  extensions: [".ex", ".exs"],
  aliases: ["Elixir", "elixir", "ex"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_basic-languages_elixir_elixir_js").then(__webpack_require__.bind(__webpack_require__, /*! ./elixir.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/elixir/elixir.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/flow9/flow9.contribution.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/flow9/flow9.contribution.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/flow9/flow9.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "flow9",
  extensions: [".flow"],
  aliases: ["Flow9", "Flow", "flow9", "flow"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_flow9_flow9_js").then(__webpack_require__.bind(__webpack_require__, /*! ./flow9.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/flow9/flow9.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/freemarker2/freemarker2.contribution.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/freemarker2/freemarker2.contribution.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/freemarker2/freemarker2.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "freemarker2",
  extensions: [".ftl", ".ftlh", ".ftlx"],
  aliases: ["FreeMarker2", "Apache FreeMarker2"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_basic-languages_freemarker2_freemarker2_js").then(__webpack_require__.bind(__webpack_require__, /*! ./freemarker2.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/freemarker2/freemarker2.js")).then((m) => m.TagAutoInterpolationDollar);
    }
  }
});
(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "freemarker2.tag-angle.interpolation-dollar",
  aliases: ["FreeMarker2 (Angle/Dollar)", "Apache FreeMarker2 (Angle/Dollar)"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_basic-languages_freemarker2_freemarker2_js").then(__webpack_require__.bind(__webpack_require__, /*! ./freemarker2.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/freemarker2/freemarker2.js")).then((m) => m.TagAngleInterpolationDollar);
    }
  }
});
(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "freemarker2.tag-bracket.interpolation-dollar",
  aliases: ["FreeMarker2 (Bracket/Dollar)", "Apache FreeMarker2 (Bracket/Dollar)"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_basic-languages_freemarker2_freemarker2_js").then(__webpack_require__.bind(__webpack_require__, /*! ./freemarker2.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/freemarker2/freemarker2.js")).then((m) => m.TagBracketInterpolationDollar);
    }
  }
});
(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "freemarker2.tag-angle.interpolation-bracket",
  aliases: ["FreeMarker2 (Angle/Bracket)", "Apache FreeMarker2 (Angle/Bracket)"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_basic-languages_freemarker2_freemarker2_js").then(__webpack_require__.bind(__webpack_require__, /*! ./freemarker2.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/freemarker2/freemarker2.js")).then((m) => m.TagAngleInterpolationBracket);
    }
  }
});
(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "freemarker2.tag-bracket.interpolation-bracket",
  aliases: ["FreeMarker2 (Bracket/Bracket)", "Apache FreeMarker2 (Bracket/Bracket)"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_basic-languages_freemarker2_freemarker2_js").then(__webpack_require__.bind(__webpack_require__, /*! ./freemarker2.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/freemarker2/freemarker2.js")).then((m) => m.TagBracketInterpolationBracket);
    }
  }
});
(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "freemarker2.tag-auto.interpolation-dollar",
  aliases: ["FreeMarker2 (Auto/Dollar)", "Apache FreeMarker2 (Auto/Dollar)"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_basic-languages_freemarker2_freemarker2_js").then(__webpack_require__.bind(__webpack_require__, /*! ./freemarker2.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/freemarker2/freemarker2.js")).then((m) => m.TagAutoInterpolationDollar);
    }
  }
});
(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "freemarker2.tag-auto.interpolation-bracket",
  aliases: ["FreeMarker2 (Auto/Bracket)", "Apache FreeMarker2 (Auto/Bracket)"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_basic-languages_freemarker2_freemarker2_js").then(__webpack_require__.bind(__webpack_require__, /*! ./freemarker2.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/freemarker2/freemarker2.js")).then((m) => m.TagAutoInterpolationBracket);
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/fsharp/fsharp.contribution.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/fsharp/fsharp.contribution.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/fsharp/fsharp.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "fsharp",
  extensions: [".fs", ".fsi", ".ml", ".mli", ".fsx", ".fsscript"],
  aliases: ["F#", "FSharp", "fsharp"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_fsharp_fsharp_js").then(__webpack_require__.bind(__webpack_require__, /*! ./fsharp.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/fsharp/fsharp.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/go/go.contribution.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/go/go.contribution.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/go/go.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "go",
  extensions: [".go"],
  aliases: ["Go"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_go_go_js").then(__webpack_require__.bind(__webpack_require__, /*! ./go.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/go/go.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/graphql/graphql.contribution.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/graphql/graphql.contribution.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/graphql/graphql.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "graphql",
  extensions: [".graphql", ".gql"],
  aliases: ["GraphQL", "graphql", "gql"],
  mimetypes: ["application/graphql"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_graphql_graphql_js").then(__webpack_require__.bind(__webpack_require__, /*! ./graphql.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/graphql/graphql.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/handlebars/handlebars.contribution.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/handlebars/handlebars.contribution.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/handlebars/handlebars.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "handlebars",
  extensions: [".handlebars", ".hbs"],
  aliases: ["Handlebars", "handlebars", "hbs"],
  mimetypes: ["text/x-handlebars-template"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_basic-languages_handlebars_handlebars_js").then(__webpack_require__.bind(__webpack_require__, /*! ./handlebars.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/handlebars/handlebars.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/hcl/hcl.contribution.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/hcl/hcl.contribution.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/hcl/hcl.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "hcl",
  extensions: [".tf", ".tfvars", ".hcl"],
  aliases: ["Terraform", "tf", "HCL", "hcl"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_hcl_hcl_js").then(__webpack_require__.bind(__webpack_require__, /*! ./hcl.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/hcl/hcl.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/html/html.contribution.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/html/html.contribution.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/html/html.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "html",
  extensions: [".html", ".htm", ".shtml", ".xhtml", ".mdoc", ".jsp", ".asp", ".aspx", ".jshtm"],
  aliases: ["HTML", "htm", "html", "xhtml"],
  mimetypes: ["text/html", "text/x-jshtm", "text/template", "text/ng-template"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_html_html_js").then(__webpack_require__.bind(__webpack_require__, /*! ./html.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/html/html.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/ini/ini.contribution.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/ini/ini.contribution.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/ini/ini.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "ini",
  extensions: [".ini", ".properties", ".gitconfig"],
  filenames: ["config", ".gitattributes", ".gitconfig", ".editorconfig"],
  aliases: ["Ini", "ini"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_ini_ini_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ini.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/ini/ini.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/java/java.contribution.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/java/java.contribution.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/java/java.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "java",
  extensions: [".java", ".jav"],
  aliases: ["Java", "java"],
  mimetypes: ["text/x-java-source", "text/x-java"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_java_java_js").then(__webpack_require__.bind(__webpack_require__, /*! ./java.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/java/java.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/javascript/javascript.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "javascript",
  extensions: [".js", ".es6", ".jsx", ".mjs", ".cjs"],
  firstLine: "^#!.*\\bnode",
  filenames: ["jakefile"],
  aliases: ["JavaScript", "javascript", "js"],
  mimetypes: ["text/javascript"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_basic-languages_javascript_javascript_js").then(__webpack_require__.bind(__webpack_require__, /*! ./javascript.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/javascript/javascript.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/julia/julia.contribution.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/julia/julia.contribution.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/julia/julia.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "julia",
  extensions: [".jl"],
  aliases: ["julia", "Julia"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_basic-languages_julia_julia_js").then(__webpack_require__.bind(__webpack_require__, /*! ./julia.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/julia/julia.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/kotlin/kotlin.contribution.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/kotlin/kotlin.contribution.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/kotlin/kotlin.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "kotlin",
  extensions: [".kt", ".kts"],
  aliases: ["Kotlin", "kotlin"],
  mimetypes: ["text/x-kotlin-source", "text/x-kotlin"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_kotlin_kotlin_js").then(__webpack_require__.bind(__webpack_require__, /*! ./kotlin.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/kotlin/kotlin.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/less/less.contribution.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/less/less.contribution.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/less/less.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "less",
  extensions: [".less"],
  aliases: ["Less", "less"],
  mimetypes: ["text/x-less", "text/less"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_less_less_js").then(__webpack_require__.bind(__webpack_require__, /*! ./less.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/less/less.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/lexon/lexon.contribution.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/lexon/lexon.contribution.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/lexon/lexon.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "lexon",
  extensions: [".lex"],
  aliases: ["Lexon"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_lexon_lexon_js").then(__webpack_require__.bind(__webpack_require__, /*! ./lexon.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/lexon/lexon.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/liquid/liquid.contribution.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/liquid/liquid.contribution.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/liquid/liquid.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "liquid",
  extensions: [".liquid", ".html.liquid"],
  aliases: ["Liquid", "liquid"],
  mimetypes: ["application/liquid"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_liquid_liquid_js").then(__webpack_require__.bind(__webpack_require__, /*! ./liquid.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/liquid/liquid.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/lua/lua.contribution.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/lua/lua.contribution.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/lua/lua.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "lua",
  extensions: [".lua"],
  aliases: ["Lua", "lua"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_lua_lua_js").then(__webpack_require__.bind(__webpack_require__, /*! ./lua.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/lua/lua.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/m3/m3.contribution.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/m3/m3.contribution.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/m3/m3.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "m3",
  extensions: [".m3", ".i3", ".mg", ".ig"],
  aliases: ["Modula-3", "Modula3", "modula3", "m3"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_m3_m3_js").then(__webpack_require__.bind(__webpack_require__, /*! ./m3.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/m3/m3.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/markdown/markdown.contribution.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/markdown/markdown.contribution.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/markdown/markdown.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "markdown",
  extensions: [".md", ".markdown", ".mdown", ".mkdn", ".mkd", ".mdwn", ".mdtxt", ".mdtext"],
  aliases: ["Markdown", "markdown"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_markdown_markdown_js").then(__webpack_require__.bind(__webpack_require__, /*! ./markdown.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/markdown/markdown.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/mdx/mdx.contribution.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/mdx/mdx.contribution.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/mdx/mdx.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "mdx",
  extensions: [".mdx"],
  aliases: ["MDX", "mdx"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_mdx_mdx_js").then(__webpack_require__.bind(__webpack_require__, /*! ./mdx.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/mdx/mdx.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/mips/mips.contribution.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/mips/mips.contribution.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/mips/mips.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "mips",
  extensions: [".s"],
  aliases: ["MIPS", "MIPS-V"],
  mimetypes: ["text/x-mips", "text/mips", "text/plaintext"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_mips_mips_js").then(__webpack_require__.bind(__webpack_require__, /*! ./mips.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/mips/mips.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/monaco.contribution.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/monaco.contribution.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_editor_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor/editor.api.js */ "include-loader!./node_modules/monaco-editor/esm/vs/editor/editor.api.js");
/* harmony import */ var _abap_abap_contribution_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abap/abap.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/abap/abap.contribution.js");
/* harmony import */ var _apex_apex_contribution_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apex/apex.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/apex/apex.contribution.js");
/* harmony import */ var _azcli_azcli_contribution_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./azcli/azcli.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/azcli/azcli.contribution.js");
/* harmony import */ var _bat_bat_contribution_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bat/bat.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/bat/bat.contribution.js");
/* harmony import */ var _bicep_bicep_contribution_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bicep/bicep.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/bicep/bicep.contribution.js");
/* harmony import */ var _cameligo_cameligo_contribution_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cameligo/cameligo.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/cameligo/cameligo.contribution.js");
/* harmony import */ var _clojure_clojure_contribution_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clojure/clojure.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/clojure/clojure.contribution.js");
/* harmony import */ var _coffee_coffee_contribution_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./coffee/coffee.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/coffee/coffee.contribution.js");
/* harmony import */ var _cpp_cpp_contribution_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cpp/cpp.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution.js");
/* harmony import */ var _csharp_csharp_contribution_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./csharp/csharp.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/csharp/csharp.contribution.js");
/* harmony import */ var _csp_csp_contribution_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./csp/csp.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/csp/csp.contribution.js");
/* harmony import */ var _css_css_contribution_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./css/css.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/css/css.contribution.js");
/* harmony import */ var _cypher_cypher_contribution_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cypher/cypher.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/cypher/cypher.contribution.js");
/* harmony import */ var _dart_dart_contribution_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dart/dart.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/dart/dart.contribution.js");
/* harmony import */ var _dockerfile_dockerfile_contribution_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dockerfile/dockerfile.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/dockerfile/dockerfile.contribution.js");
/* harmony import */ var _ecl_ecl_contribution_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ecl/ecl.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/ecl/ecl.contribution.js");
/* harmony import */ var _elixir_elixir_contribution_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./elixir/elixir.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/elixir/elixir.contribution.js");
/* harmony import */ var _flow9_flow9_contribution_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./flow9/flow9.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/flow9/flow9.contribution.js");
/* harmony import */ var _fsharp_fsharp_contribution_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./fsharp/fsharp.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/fsharp/fsharp.contribution.js");
/* harmony import */ var _freemarker2_freemarker2_contribution_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./freemarker2/freemarker2.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/freemarker2/freemarker2.contribution.js");
/* harmony import */ var _go_go_contribution_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./go/go.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/go/go.contribution.js");
/* harmony import */ var _graphql_graphql_contribution_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./graphql/graphql.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/graphql/graphql.contribution.js");
/* harmony import */ var _handlebars_handlebars_contribution_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./handlebars/handlebars.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/handlebars/handlebars.contribution.js");
/* harmony import */ var _hcl_hcl_contribution_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./hcl/hcl.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/hcl/hcl.contribution.js");
/* harmony import */ var _html_html_contribution_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./html/html.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/html/html.contribution.js");
/* harmony import */ var _ini_ini_contribution_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ini/ini.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/ini/ini.contribution.js");
/* harmony import */ var _java_java_contribution_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./java/java.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/java/java.contribution.js");
/* harmony import */ var _javascript_javascript_contribution_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./javascript/javascript.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution.js");
/* harmony import */ var _julia_julia_contribution_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./julia/julia.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/julia/julia.contribution.js");
/* harmony import */ var _kotlin_kotlin_contribution_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./kotlin/kotlin.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/kotlin/kotlin.contribution.js");
/* harmony import */ var _less_less_contribution_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./less/less.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/less/less.contribution.js");
/* harmony import */ var _lexon_lexon_contribution_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./lexon/lexon.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/lexon/lexon.contribution.js");
/* harmony import */ var _lua_lua_contribution_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./lua/lua.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/lua/lua.contribution.js");
/* harmony import */ var _liquid_liquid_contribution_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./liquid/liquid.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/liquid/liquid.contribution.js");
/* harmony import */ var _m3_m3_contribution_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./m3/m3.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/m3/m3.contribution.js");
/* harmony import */ var _markdown_markdown_contribution_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./markdown/markdown.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/markdown/markdown.contribution.js");
/* harmony import */ var _mdx_mdx_contribution_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./mdx/mdx.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/mdx/mdx.contribution.js");
/* harmony import */ var _mips_mips_contribution_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./mips/mips.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/mips/mips.contribution.js");
/* harmony import */ var _msdax_msdax_contribution_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./msdax/msdax.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/msdax/msdax.contribution.js");
/* harmony import */ var _mysql_mysql_contribution_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./mysql/mysql.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/mysql/mysql.contribution.js");
/* harmony import */ var _objective_c_objective_c_contribution_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./objective-c/objective-c.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/objective-c/objective-c.contribution.js");
/* harmony import */ var _pascal_pascal_contribution_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pascal/pascal.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/pascal/pascal.contribution.js");
/* harmony import */ var _pascaligo_pascaligo_contribution_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pascaligo/pascaligo.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/pascaligo/pascaligo.contribution.js");
/* harmony import */ var _perl_perl_contribution_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./perl/perl.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/perl/perl.contribution.js");
/* harmony import */ var _pgsql_pgsql_contribution_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pgsql/pgsql.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/pgsql/pgsql.contribution.js");
/* harmony import */ var _php_php_contribution_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./php/php.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/php/php.contribution.js");
/* harmony import */ var _pla_pla_contribution_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./pla/pla.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/pla/pla.contribution.js");
/* harmony import */ var _postiats_postiats_contribution_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./postiats/postiats.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/postiats/postiats.contribution.js");
/* harmony import */ var _powerquery_powerquery_contribution_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./powerquery/powerquery.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/powerquery/powerquery.contribution.js");
/* harmony import */ var _powershell_powershell_contribution_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./powershell/powershell.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/powershell/powershell.contribution.js");
/* harmony import */ var _protobuf_protobuf_contribution_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./protobuf/protobuf.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/protobuf/protobuf.contribution.js");
/* harmony import */ var _pug_pug_contribution_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./pug/pug.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/pug/pug.contribution.js");
/* harmony import */ var _python_python_contribution_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./python/python.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/python/python.contribution.js");
/* harmony import */ var _qsharp_qsharp_contribution_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./qsharp/qsharp.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/qsharp/qsharp.contribution.js");
/* harmony import */ var _r_r_contribution_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./r/r.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/r/r.contribution.js");
/* harmony import */ var _razor_razor_contribution_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./razor/razor.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/razor/razor.contribution.js");
/* harmony import */ var _redis_redis_contribution_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./redis/redis.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/redis/redis.contribution.js");
/* harmony import */ var _redshift_redshift_contribution_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./redshift/redshift.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/redshift/redshift.contribution.js");
/* harmony import */ var _restructuredtext_restructuredtext_contribution_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./restructuredtext/restructuredtext.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/restructuredtext/restructuredtext.contribution.js");
/* harmony import */ var _ruby_ruby_contribution_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./ruby/ruby.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/ruby/ruby.contribution.js");
/* harmony import */ var _rust_rust_contribution_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./rust/rust.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/rust/rust.contribution.js");
/* harmony import */ var _sb_sb_contribution_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./sb/sb.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/sb/sb.contribution.js");
/* harmony import */ var _scala_scala_contribution_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./scala/scala.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/scala/scala.contribution.js");
/* harmony import */ var _scheme_scheme_contribution_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./scheme/scheme.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/scheme/scheme.contribution.js");
/* harmony import */ var _scss_scss_contribution_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./scss/scss.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/scss/scss.contribution.js");
/* harmony import */ var _shell_shell_contribution_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./shell/shell.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/shell/shell.contribution.js");
/* harmony import */ var _solidity_solidity_contribution_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./solidity/solidity.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/solidity/solidity.contribution.js");
/* harmony import */ var _sophia_sophia_contribution_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./sophia/sophia.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/sophia/sophia.contribution.js");
/* harmony import */ var _sparql_sparql_contribution_js__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./sparql/sparql.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/sparql/sparql.contribution.js");
/* harmony import */ var _sql_sql_contribution_js__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./sql/sql.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/sql/sql.contribution.js");
/* harmony import */ var _st_st_contribution_js__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./st/st.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/st/st.contribution.js");
/* harmony import */ var _swift_swift_contribution_js__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./swift/swift.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/swift/swift.contribution.js");
/* harmony import */ var _systemverilog_systemverilog_contribution_js__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./systemverilog/systemverilog.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/systemverilog/systemverilog.contribution.js");
/* harmony import */ var _tcl_tcl_contribution_js__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./tcl/tcl.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/tcl/tcl.contribution.js");
/* harmony import */ var _twig_twig_contribution_js__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./twig/twig.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/twig/twig.contribution.js");
/* harmony import */ var _typescript_typescript_contribution_js__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./typescript/typescript.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution.js");
/* harmony import */ var _vb_vb_contribution_js__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./vb/vb.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/vb/vb.contribution.js");
/* harmony import */ var _wgsl_wgsl_contribution_js__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./wgsl/wgsl.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/wgsl/wgsl.contribution.js");
/* harmony import */ var _xml_xml_contribution_js__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./xml/xml.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/xml/xml.contribution.js");
/* harmony import */ var _yaml_yaml_contribution_js__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./yaml/yaml.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/yaml/yaml.contribution.js");

/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/monaco.contribution.ts


















































































/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/msdax/msdax.contribution.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/msdax/msdax.contribution.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/msdax/msdax.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "msdax",
  extensions: [".dax", ".msdax"],
  aliases: ["DAX", "MSDAX"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_msdax_msdax_js").then(__webpack_require__.bind(__webpack_require__, /*! ./msdax.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/msdax/msdax.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/mysql/mysql.contribution.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/mysql/mysql.contribution.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/mysql/mysql.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "mysql",
  extensions: [],
  aliases: ["MySQL", "mysql"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_basic-languages_mysql_mysql_js").then(__webpack_require__.bind(__webpack_require__, /*! ./mysql.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/mysql/mysql.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/objective-c/objective-c.contribution.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/objective-c/objective-c.contribution.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/objective-c/objective-c.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "objective-c",
  extensions: [".m"],
  aliases: ["Objective-C"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_objective-c_objective-c_js").then(__webpack_require__.bind(__webpack_require__, /*! ./objective-c.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/objective-c/objective-c.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/pascal/pascal.contribution.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/pascal/pascal.contribution.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/pascal/pascal.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "pascal",
  extensions: [".pas", ".p", ".pp"],
  aliases: ["Pascal", "pas"],
  mimetypes: ["text/x-pascal-source", "text/x-pascal"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_pascal_pascal_js").then(__webpack_require__.bind(__webpack_require__, /*! ./pascal.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/pascal/pascal.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/pascaligo/pascaligo.contribution.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/pascaligo/pascaligo.contribution.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/pascaligo/pascaligo.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "pascaligo",
  extensions: [".ligo"],
  aliases: ["Pascaligo", "ligo"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_pascaligo_pascaligo_js").then(__webpack_require__.bind(__webpack_require__, /*! ./pascaligo.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/pascaligo/pascaligo.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/perl/perl.contribution.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/perl/perl.contribution.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/perl/perl.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "perl",
  extensions: [".pl", ".pm"],
  aliases: ["Perl", "pl"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_basic-languages_perl_perl_js").then(__webpack_require__.bind(__webpack_require__, /*! ./perl.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/perl/perl.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/pgsql/pgsql.contribution.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/pgsql/pgsql.contribution.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/pgsql/pgsql.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "pgsql",
  extensions: [],
  aliases: ["PostgreSQL", "postgres", "pg", "postgre"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_basic-languages_pgsql_pgsql_js").then(__webpack_require__.bind(__webpack_require__, /*! ./pgsql.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/pgsql/pgsql.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/php/php.contribution.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/php/php.contribution.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/php/php.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "php",
  extensions: [".php", ".php4", ".php5", ".phtml", ".ctp"],
  aliases: ["PHP", "php"],
  mimetypes: ["application/x-php"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_basic-languages_php_php_js").then(__webpack_require__.bind(__webpack_require__, /*! ./php.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/php/php.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/pla/pla.contribution.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/pla/pla.contribution.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/pla/pla.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "pla",
  extensions: [".pla"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_pla_pla_js").then(__webpack_require__.bind(__webpack_require__, /*! ./pla.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/pla/pla.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/postiats/postiats.contribution.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/postiats/postiats.contribution.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/postiats/postiats.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "postiats",
  extensions: [".dats", ".sats", ".hats"],
  aliases: ["ATS", "ATS/Postiats"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_basic-languages_postiats_postiats_js").then(__webpack_require__.bind(__webpack_require__, /*! ./postiats.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/postiats/postiats.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/powerquery/powerquery.contribution.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/powerquery/powerquery.contribution.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/powerquery/powerquery.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "powerquery",
  extensions: [".pq", ".pqm"],
  aliases: ["PQ", "M", "Power Query", "Power Query M"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_basic-languages_powerquery_powerquery_js").then(__webpack_require__.bind(__webpack_require__, /*! ./powerquery.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/powerquery/powerquery.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/powershell/powershell.contribution.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/powershell/powershell.contribution.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/powershell/powershell.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "powershell",
  extensions: [".ps1", ".psm1", ".psd1"],
  aliases: ["PowerShell", "powershell", "ps", "ps1"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_powershell_powershell_js").then(__webpack_require__.bind(__webpack_require__, /*! ./powershell.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/powershell/powershell.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/protobuf/protobuf.contribution.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/protobuf/protobuf.contribution.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/protobuf/protobuf.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "proto",
  extensions: [".proto"],
  aliases: ["protobuf", "Protocol Buffers"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_basic-languages_protobuf_protobuf_js").then(__webpack_require__.bind(__webpack_require__, /*! ./protobuf.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/protobuf/protobuf.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/pug/pug.contribution.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/pug/pug.contribution.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/pug/pug.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "pug",
  extensions: [".jade", ".pug"],
  aliases: ["Pug", "Jade", "jade"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_pug_pug_js").then(__webpack_require__.bind(__webpack_require__, /*! ./pug.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/pug/pug.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/python/python.contribution.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/python/python.contribution.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/python/python.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "python",
  extensions: [".py", ".rpy", ".pyw", ".cpy", ".gyp", ".gypi"],
  aliases: ["Python", "py"],
  firstLine: "^#!/.*\\bpython[0-9.-]*\\b",
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_python_python_js").then(__webpack_require__.bind(__webpack_require__, /*! ./python.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/python/python.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/qsharp/qsharp.contribution.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/qsharp/qsharp.contribution.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/qsharp/qsharp.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "qsharp",
  extensions: [".qs"],
  aliases: ["Q#", "qsharp"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_qsharp_qsharp_js").then(__webpack_require__.bind(__webpack_require__, /*! ./qsharp.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/qsharp/qsharp.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/r/r.contribution.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/r/r.contribution.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/r/r.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "r",
  extensions: [".r", ".rhistory", ".rmd", ".rprofile", ".rt"],
  aliases: ["R", "r"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_r_r_js").then(__webpack_require__.bind(__webpack_require__, /*! ./r.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/r/r.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/razor/razor.contribution.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/razor/razor.contribution.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/razor/razor.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "razor",
  extensions: [".cshtml"],
  aliases: ["Razor", "razor"],
  mimetypes: ["text/x-cshtml"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_basic-languages_razor_razor_js").then(__webpack_require__.bind(__webpack_require__, /*! ./razor.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/razor/razor.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/redis/redis.contribution.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/redis/redis.contribution.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/redis/redis.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "redis",
  extensions: [".redis"],
  aliases: ["redis"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_redis_redis_js").then(__webpack_require__.bind(__webpack_require__, /*! ./redis.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/redis/redis.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/redshift/redshift.contribution.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/redshift/redshift.contribution.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/redshift/redshift.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "redshift",
  extensions: [],
  aliases: ["Redshift", "redshift"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_basic-languages_redshift_redshift_js").then(__webpack_require__.bind(__webpack_require__, /*! ./redshift.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/redshift/redshift.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/restructuredtext/restructuredtext.contribution.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/restructuredtext/restructuredtext.contribution.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/restructuredtext/restructuredtext.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "restructuredtext",
  extensions: [".rst"],
  aliases: ["reStructuredText", "restructuredtext"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_restructuredtext_restructuredtext_js").then(__webpack_require__.bind(__webpack_require__, /*! ./restructuredtext.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/restructuredtext/restructuredtext.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/ruby/ruby.contribution.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/ruby/ruby.contribution.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/ruby/ruby.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "ruby",
  extensions: [".rb", ".rbx", ".rjs", ".gemspec", ".pp"],
  filenames: ["rakefile", "Gemfile"],
  aliases: ["Ruby", "rb"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_basic-languages_ruby_ruby_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ruby.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/ruby/ruby.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/rust/rust.contribution.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/rust/rust.contribution.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/rust/rust.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "rust",
  extensions: [".rs", ".rlib"],
  aliases: ["Rust", "rust"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_rust_rust_js").then(__webpack_require__.bind(__webpack_require__, /*! ./rust.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/rust/rust.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/sb/sb.contribution.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/sb/sb.contribution.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/sb/sb.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "sb",
  extensions: [".sb"],
  aliases: ["Small Basic", "sb"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_sb_sb_js").then(__webpack_require__.bind(__webpack_require__, /*! ./sb.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/sb/sb.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/scala/scala.contribution.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/scala/scala.contribution.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/scala/scala.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "scala",
  extensions: [".scala", ".sc", ".sbt"],
  aliases: ["Scala", "scala", "SBT", "Sbt", "sbt", "Dotty", "dotty"],
  mimetypes: ["text/x-scala-source", "text/x-scala", "text/x-sbt", "text/x-dotty"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_basic-languages_scala_scala_js").then(__webpack_require__.bind(__webpack_require__, /*! ./scala.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/scala/scala.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/scheme/scheme.contribution.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/scheme/scheme.contribution.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/scheme/scheme.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "scheme",
  extensions: [".scm", ".ss", ".sch", ".rkt"],
  aliases: ["scheme", "Scheme"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_scheme_scheme_js").then(__webpack_require__.bind(__webpack_require__, /*! ./scheme.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/scheme/scheme.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/scss/scss.contribution.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/scss/scss.contribution.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/scss/scss.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "scss",
  extensions: [".scss"],
  aliases: ["Sass", "sass", "scss"],
  mimetypes: ["text/x-scss", "text/scss"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_scss_scss_js").then(__webpack_require__.bind(__webpack_require__, /*! ./scss.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/scss/scss.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/shell/shell.contribution.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/shell/shell.contribution.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/shell/shell.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "shell",
  extensions: [".sh", ".bash"],
  aliases: ["Shell", "sh"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_shell_shell_js").then(__webpack_require__.bind(__webpack_require__, /*! ./shell.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/shell/shell.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/solidity/solidity.contribution.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/solidity/solidity.contribution.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/solidity/solidity.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "sol",
  extensions: [".sol"],
  aliases: ["sol", "solidity", "Solidity"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_basic-languages_solidity_solidity_js").then(__webpack_require__.bind(__webpack_require__, /*! ./solidity.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/solidity/solidity.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/sophia/sophia.contribution.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/sophia/sophia.contribution.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/sophia/sophia.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "aes",
  extensions: [".aes"],
  aliases: ["aes", "sophia", "Sophia"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_sophia_sophia_js").then(__webpack_require__.bind(__webpack_require__, /*! ./sophia.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/sophia/sophia.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/sparql/sparql.contribution.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/sparql/sparql.contribution.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/sparql/sparql.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "sparql",
  extensions: [".rq"],
  aliases: ["sparql", "SPARQL"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_sparql_sparql_js").then(__webpack_require__.bind(__webpack_require__, /*! ./sparql.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/sparql/sparql.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/sql/sql.contribution.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/sql/sql.contribution.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/sql/sql.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "sql",
  extensions: [".sql"],
  aliases: ["SQL"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_basic-languages_sql_sql_js").then(__webpack_require__.bind(__webpack_require__, /*! ./sql.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/sql/sql.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/st/st.contribution.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/st/st.contribution.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/st/st.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "st",
  extensions: [".st", ".iecst", ".iecplc", ".lc3lib", ".TcPOU", ".TcDUT", ".TcGVL", ".TcIO"],
  aliases: ["StructuredText", "scl", "stl"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_basic-languages_st_st_js").then(__webpack_require__.bind(__webpack_require__, /*! ./st.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/st/st.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/swift/swift.contribution.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/swift/swift.contribution.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/swift/swift.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "swift",
  aliases: ["Swift", "swift"],
  extensions: [".swift"],
  mimetypes: ["text/swift"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_swift_swift_js").then(__webpack_require__.bind(__webpack_require__, /*! ./swift.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/swift/swift.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/systemverilog/systemverilog.contribution.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/systemverilog/systemverilog.contribution.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/systemverilog/systemverilog.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "systemverilog",
  extensions: [".sv", ".svh"],
  aliases: ["SV", "sv", "SystemVerilog", "systemverilog"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_basic-languages_systemverilog_systemverilog_js").then(__webpack_require__.bind(__webpack_require__, /*! ./systemverilog.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/systemverilog/systemverilog.js"));
    }
  }
});
(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "verilog",
  extensions: [".v", ".vh"],
  aliases: ["V", "v", "Verilog", "verilog"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_basic-languages_systemverilog_systemverilog_js").then(__webpack_require__.bind(__webpack_require__, /*! ./systemverilog.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/systemverilog/systemverilog.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/tcl/tcl.contribution.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/tcl/tcl.contribution.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/tcl/tcl.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "tcl",
  extensions: [".tcl"],
  aliases: ["tcl", "Tcl", "tcltk", "TclTk", "tcl/tk", "Tcl/Tk"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_tcl_tcl_js").then(__webpack_require__.bind(__webpack_require__, /*! ./tcl.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/tcl/tcl.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/twig/twig.contribution.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/twig/twig.contribution.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/twig/twig.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "twig",
  extensions: [".twig"],
  aliases: ["Twig", "twig"],
  mimetypes: ["text/x-twig"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_twig_twig_js").then(__webpack_require__.bind(__webpack_require__, /*! ./twig.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/twig/twig.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/typescript/typescript.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "typescript",
  extensions: [".ts", ".tsx", ".cts", ".mts"],
  aliases: ["TypeScript", "ts", "typescript"],
  mimetypes: ["text/typescript"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_typescript_typescript_js").then(__webpack_require__.bind(__webpack_require__, /*! ./typescript.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/typescript/typescript.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/vb/vb.contribution.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/vb/vb.contribution.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/vb/vb.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "vb",
  extensions: [".vb"],
  aliases: ["Visual Basic", "vb"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_vb_vb_js").then(__webpack_require__.bind(__webpack_require__, /*! ./vb.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/vb/vb.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/wgsl/wgsl.contribution.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/wgsl/wgsl.contribution.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/wgsl/wgsl.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "wgsl",
  extensions: [".wgsl"],
  aliases: ["WebGPU Shading Language", "WGSL", "wgsl"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_wgsl_wgsl_js").then(__webpack_require__.bind(__webpack_require__, /*! ./wgsl.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/wgsl/wgsl.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/xml/xml.contribution.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/xml/xml.contribution.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/xml/xml.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "xml",
  extensions: [
    ".xml",
    ".xsd",
    ".dtd",
    ".ascx",
    ".csproj",
    ".config",
    ".props",
    ".targets",
    ".wxi",
    ".wxl",
    ".wxs",
    ".xaml",
    ".svg",
    ".svgz",
    ".opf",
    ".xslt",
    ".xsl"
  ],
  firstLine: "(\\<\\?xml.*)|(\\<svg)|(\\<\\!doctype\\s+svg)",
  aliases: ["XML", "xml"],
  mimetypes: ["text/xml", "application/xml", "application/xaml+xml", "application/xml-dtd"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_xml_xml_js").then(__webpack_require__.bind(__webpack_require__, /*! ./xml.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/xml/xml.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/yaml/yaml.contribution.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/yaml/yaml.contribution.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_.contribution.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/yaml/yaml.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)({
  id: "yaml",
  extensions: [".yaml", ".yml"],
  aliases: ["YAML", "yaml", "YML", "yml"],
  mimetypes: ["application/x-yaml", "text/x-yaml"],
  loader: () => {
    if (false) {} else {
      return __webpack_require__.e(/*! import() */ "node_modules_monaco-editor_esm_vs_basic-languages_yaml_yaml_js").then(__webpack_require__.bind(__webpack_require__, /*! ./yaml.js */ "./node_modules/monaco-editor/esm/vs/basic-languages/yaml/yaml.js"));
    }
  }
});


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/edcore.main.js":
/*!*****************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/edcore.main.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CancellationTokenSource: () => (/* reexport safe */ _editor_api_js__WEBPACK_IMPORTED_MODULE_9__.CancellationTokenSource),
/* harmony export */   Emitter: () => (/* reexport safe */ _editor_api_js__WEBPACK_IMPORTED_MODULE_9__.Emitter),
/* harmony export */   KeyCode: () => (/* reexport safe */ _editor_api_js__WEBPACK_IMPORTED_MODULE_9__.KeyCode),
/* harmony export */   KeyMod: () => (/* reexport safe */ _editor_api_js__WEBPACK_IMPORTED_MODULE_9__.KeyMod),
/* harmony export */   MarkerSeverity: () => (/* reexport safe */ _editor_api_js__WEBPACK_IMPORTED_MODULE_9__.MarkerSeverity),
/* harmony export */   MarkerTag: () => (/* reexport safe */ _editor_api_js__WEBPACK_IMPORTED_MODULE_9__.MarkerTag),
/* harmony export */   Position: () => (/* reexport safe */ _editor_api_js__WEBPACK_IMPORTED_MODULE_9__.Position),
/* harmony export */   Range: () => (/* reexport safe */ _editor_api_js__WEBPACK_IMPORTED_MODULE_9__.Range),
/* harmony export */   Selection: () => (/* reexport safe */ _editor_api_js__WEBPACK_IMPORTED_MODULE_9__.Selection),
/* harmony export */   SelectionDirection: () => (/* reexport safe */ _editor_api_js__WEBPACK_IMPORTED_MODULE_9__.SelectionDirection),
/* harmony export */   Token: () => (/* reexport safe */ _editor_api_js__WEBPACK_IMPORTED_MODULE_9__.Token),
/* harmony export */   Uri: () => (/* reexport safe */ _editor_api_js__WEBPACK_IMPORTED_MODULE_9__.Uri),
/* harmony export */   editor: () => (/* reexport safe */ _editor_api_js__WEBPACK_IMPORTED_MODULE_9__.editor),
/* harmony export */   languages: () => (/* reexport safe */ _editor_api_js__WEBPACK_IMPORTED_MODULE_9__.languages)
/* harmony export */ });
/* harmony import */ var _editor_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.all.js */ "./node_modules/monaco-editor/esm/vs/editor/editor.all.js");
/* harmony import */ var _standalone_browser_iPadShowKeyboard_iPadShowKeyboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./standalone/browser/iPadShowKeyboard/iPadShowKeyboard.js */ "./node_modules/monaco-editor/esm/vs/editor/standalone/browser/iPadShowKeyboard/iPadShowKeyboard.js");
/* harmony import */ var _standalone_browser_inspectTokens_inspectTokens_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./standalone/browser/inspectTokens/inspectTokens.js */ "./node_modules/monaco-editor/esm/vs/editor/standalone/browser/inspectTokens/inspectTokens.js");
/* harmony import */ var _standalone_browser_quickAccess_standaloneHelpQuickAccess_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./standalone/browser/quickAccess/standaloneHelpQuickAccess.js */ "./node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneHelpQuickAccess.js");
/* harmony import */ var _standalone_browser_quickAccess_standaloneGotoLineQuickAccess_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./standalone/browser/quickAccess/standaloneGotoLineQuickAccess.js */ "./node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneGotoLineQuickAccess.js");
/* harmony import */ var _standalone_browser_quickAccess_standaloneGotoSymbolQuickAccess_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./standalone/browser/quickAccess/standaloneGotoSymbolQuickAccess.js */ "./node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneGotoSymbolQuickAccess.js");
/* harmony import */ var _standalone_browser_quickAccess_standaloneCommandsQuickAccess_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./standalone/browser/quickAccess/standaloneCommandsQuickAccess.js */ "./node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneCommandsQuickAccess.js");
/* harmony import */ var _standalone_browser_referenceSearch_standaloneReferenceSearch_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./standalone/browser/referenceSearch/standaloneReferenceSearch.js */ "./node_modules/monaco-editor/esm/vs/editor/standalone/browser/referenceSearch/standaloneReferenceSearch.js");
/* harmony import */ var _standalone_browser_toggleHighContrast_toggleHighContrast_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./standalone/browser/toggleHighContrast/toggleHighContrast.js */ "./node_modules/monaco-editor/esm/vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast.js");
/* harmony import */ var _editor_api_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editor.api.js */ "include-loader!./node_modules/monaco-editor/esm/vs/editor/editor.api.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/












/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/editor.all.js":
/*!****************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/editor.all.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _browser_coreCommands_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser/coreCommands.js */ "./node_modules/monaco-editor/esm/vs/editor/browser/coreCommands.js");
/* harmony import */ var _browser_widget_codeEditorWidget_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser/widget/codeEditorWidget.js */ "./node_modules/monaco-editor/esm/vs/editor/browser/widget/codeEditorWidget.js");
/* harmony import */ var _browser_widget_diffEditor_diffEditor_contribution_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browser/widget/diffEditor/diffEditor.contribution.js */ "./node_modules/monaco-editor/esm/vs/editor/browser/widget/diffEditor/diffEditor.contribution.js");
/* harmony import */ var _contrib_anchorSelect_browser_anchorSelect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contrib/anchorSelect/browser/anchorSelect.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/anchorSelect/browser/anchorSelect.js");
/* harmony import */ var _contrib_bracketMatching_browser_bracketMatching_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contrib/bracketMatching/browser/bracketMatching.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/bracketMatching/browser/bracketMatching.js");
/* harmony import */ var _contrib_caretOperations_browser_caretOperations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contrib/caretOperations/browser/caretOperations.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/caretOperations/browser/caretOperations.js");
/* harmony import */ var _contrib_caretOperations_browser_transpose_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contrib/caretOperations/browser/transpose.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/caretOperations/browser/transpose.js");
/* harmony import */ var _contrib_clipboard_browser_clipboard_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contrib/clipboard/browser/clipboard.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/clipboard/browser/clipboard.js");
/* harmony import */ var _contrib_codeAction_browser_codeActionContributions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contrib/codeAction/browser/codeActionContributions.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/browser/codeActionContributions.js");
/* harmony import */ var _contrib_codelens_browser_codelensController_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contrib/codelens/browser/codelensController.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/codelens/browser/codelensController.js");
/* harmony import */ var _contrib_colorPicker_browser_colorContributions_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contrib/colorPicker/browser/colorContributions.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/colorPicker/browser/colorContributions.js");
/* harmony import */ var _contrib_colorPicker_browser_standaloneColorPickerActions_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contrib/colorPicker/browser/standaloneColorPickerActions.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/colorPicker/browser/standaloneColorPickerActions.js");
/* harmony import */ var _contrib_comment_browser_comment_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contrib/comment/browser/comment.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/comment/browser/comment.js");
/* harmony import */ var _contrib_contextmenu_browser_contextmenu_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contrib/contextmenu/browser/contextmenu.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/contextmenu/browser/contextmenu.js");
/* harmony import */ var _contrib_cursorUndo_browser_cursorUndo_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contrib/cursorUndo/browser/cursorUndo.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/cursorUndo/browser/cursorUndo.js");
/* harmony import */ var _contrib_dnd_browser_dnd_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contrib/dnd/browser/dnd.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/dnd/browser/dnd.js");
/* harmony import */ var _contrib_dropOrPasteInto_browser_copyPasteContribution_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contrib/dropOrPasteInto/browser/copyPasteContribution.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/dropOrPasteInto/browser/copyPasteContribution.js");
/* harmony import */ var _contrib_dropOrPasteInto_browser_dropIntoEditorContribution_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contrib/dropOrPasteInto/browser/dropIntoEditorContribution.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/dropOrPasteInto/browser/dropIntoEditorContribution.js");
/* harmony import */ var _contrib_find_browser_findController_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contrib/find/browser/findController.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/find/browser/findController.js");
/* harmony import */ var _contrib_folding_browser_folding_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./contrib/folding/browser/folding.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/folding/browser/folding.js");
/* harmony import */ var _contrib_fontZoom_browser_fontZoom_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./contrib/fontZoom/browser/fontZoom.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/fontZoom/browser/fontZoom.js");
/* harmony import */ var _contrib_format_browser_formatActions_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contrib/format/browser/formatActions.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/format/browser/formatActions.js");
/* harmony import */ var _contrib_documentSymbols_browser_documentSymbols_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./contrib/documentSymbols/browser/documentSymbols.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/documentSymbols/browser/documentSymbols.js");
/* harmony import */ var _contrib_inlineCompletions_browser_inlineCompletions_contribution_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./contrib/inlineCompletions/browser/inlineCompletions.contribution.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/inlineCompletions.contribution.js");
/* harmony import */ var _contrib_inlineProgress_browser_inlineProgress_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./contrib/inlineProgress/browser/inlineProgress.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/inlineProgress/browser/inlineProgress.js");
/* harmony import */ var _contrib_gotoSymbol_browser_goToCommands_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./contrib/gotoSymbol/browser/goToCommands.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/goToCommands.js");
/* harmony import */ var _contrib_gotoSymbol_browser_link_goToDefinitionAtPosition_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./contrib/gotoSymbol/browser/link/goToDefinitionAtPosition.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/link/goToDefinitionAtPosition.js");
/* harmony import */ var _contrib_gotoError_browser_gotoError_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./contrib/gotoError/browser/gotoError.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/gotoError/browser/gotoError.js");
/* harmony import */ var _contrib_hover_browser_hover_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./contrib/hover/browser/hover.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hover.js");
/* harmony import */ var _contrib_indentation_browser_indentation_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./contrib/indentation/browser/indentation.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/indentation/browser/indentation.js");
/* harmony import */ var _contrib_inlayHints_browser_inlayHintsContribution_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./contrib/inlayHints/browser/inlayHintsContribution.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/inlayHints/browser/inlayHintsContribution.js");
/* harmony import */ var _contrib_inPlaceReplace_browser_inPlaceReplace_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./contrib/inPlaceReplace/browser/inPlaceReplace.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/inPlaceReplace/browser/inPlaceReplace.js");
/* harmony import */ var _contrib_lineSelection_browser_lineSelection_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./contrib/lineSelection/browser/lineSelection.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/lineSelection/browser/lineSelection.js");
/* harmony import */ var _contrib_linesOperations_browser_linesOperations_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./contrib/linesOperations/browser/linesOperations.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/linesOperations/browser/linesOperations.js");
/* harmony import */ var _contrib_linkedEditing_browser_linkedEditing_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./contrib/linkedEditing/browser/linkedEditing.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/linkedEditing/browser/linkedEditing.js");
/* harmony import */ var _contrib_links_browser_links_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./contrib/links/browser/links.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/links/browser/links.js");
/* harmony import */ var _contrib_longLinesHelper_browser_longLinesHelper_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./contrib/longLinesHelper/browser/longLinesHelper.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/longLinesHelper/browser/longLinesHelper.js");
/* harmony import */ var _contrib_multicursor_browser_multicursor_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./contrib/multicursor/browser/multicursor.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/multicursor/browser/multicursor.js");
/* harmony import */ var _contrib_parameterHints_browser_parameterHints_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./contrib/parameterHints/browser/parameterHints.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/parameterHints/browser/parameterHints.js");
/* harmony import */ var _contrib_rename_browser_rename_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./contrib/rename/browser/rename.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/rename/browser/rename.js");
/* harmony import */ var _contrib_semanticTokens_browser_documentSemanticTokens_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./contrib/semanticTokens/browser/documentSemanticTokens.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/semanticTokens/browser/documentSemanticTokens.js");
/* harmony import */ var _contrib_semanticTokens_browser_viewportSemanticTokens_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./contrib/semanticTokens/browser/viewportSemanticTokens.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/semanticTokens/browser/viewportSemanticTokens.js");
/* harmony import */ var _contrib_smartSelect_browser_smartSelect_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./contrib/smartSelect/browser/smartSelect.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/smartSelect/browser/smartSelect.js");
/* harmony import */ var _contrib_snippet_browser_snippetController2_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./contrib/snippet/browser/snippetController2.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/snippet/browser/snippetController2.js");
/* harmony import */ var _contrib_stickyScroll_browser_stickyScrollContribution_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./contrib/stickyScroll/browser/stickyScrollContribution.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/stickyScroll/browser/stickyScrollContribution.js");
/* harmony import */ var _contrib_suggest_browser_suggestController_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./contrib/suggest/browser/suggestController.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestController.js");
/* harmony import */ var _contrib_suggest_browser_suggestInlineCompletions_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./contrib/suggest/browser/suggestInlineCompletions.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestInlineCompletions.js");
/* harmony import */ var _contrib_tokenization_browser_tokenization_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./contrib/tokenization/browser/tokenization.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/tokenization/browser/tokenization.js");
/* harmony import */ var _contrib_toggleTabFocusMode_browser_toggleTabFocusMode_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./contrib/toggleTabFocusMode/browser/toggleTabFocusMode.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/toggleTabFocusMode/browser/toggleTabFocusMode.js");
/* harmony import */ var _contrib_unicodeHighlighter_browser_unicodeHighlighter_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./contrib/unicodeHighlighter/browser/unicodeHighlighter.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/unicodeHighlighter/browser/unicodeHighlighter.js");
/* harmony import */ var _contrib_unusualLineTerminators_browser_unusualLineTerminators_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./contrib/unusualLineTerminators/browser/unusualLineTerminators.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/unusualLineTerminators/browser/unusualLineTerminators.js");
/* harmony import */ var _contrib_wordHighlighter_browser_wordHighlighter_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./contrib/wordHighlighter/browser/wordHighlighter.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/wordHighlighter/browser/wordHighlighter.js");
/* harmony import */ var _contrib_wordOperations_browser_wordOperations_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./contrib/wordOperations/browser/wordOperations.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/wordOperations/browser/wordOperations.js");
/* harmony import */ var _contrib_wordPartOperations_browser_wordPartOperations_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./contrib/wordPartOperations/browser/wordPartOperations.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/wordPartOperations/browser/wordPartOperations.js");
/* harmony import */ var _contrib_readOnlyMessage_browser_contribution_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./contrib/readOnlyMessage/browser/contribution.js */ "./node_modules/monaco-editor/esm/vs/editor/contrib/readOnlyMessage/browser/contribution.js");
/* harmony import */ var _common_standaloneStrings_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./common/standaloneStrings.js */ "./node_modules/monaco-editor/esm/vs/editor/common/standaloneStrings.js");
/* harmony import */ var _base_browser_ui_codicons_codiconStyles_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../base/browser/ui/codicons/codiconStyles.js */ "./node_modules/monaco-editor/esm/vs/base/browser/ui/codicons/codiconStyles.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/























































// Load up these strings even in VSCode, even if they are not used
// in order to get them translated

 // The codicons are defined here and must be loaded


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/editor.main.js":
/*!*****************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/editor.main.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CancellationTokenSource: () => (/* reexport safe */ _edcore_main__WEBPACK_IMPORTED_MODULE_5__.CancellationTokenSource),
/* harmony export */   Emitter: () => (/* reexport safe */ _edcore_main__WEBPACK_IMPORTED_MODULE_5__.Emitter),
/* harmony export */   KeyCode: () => (/* reexport safe */ _edcore_main__WEBPACK_IMPORTED_MODULE_5__.KeyCode),
/* harmony export */   KeyMod: () => (/* reexport safe */ _edcore_main__WEBPACK_IMPORTED_MODULE_5__.KeyMod),
/* harmony export */   MarkerSeverity: () => (/* reexport safe */ _edcore_main__WEBPACK_IMPORTED_MODULE_5__.MarkerSeverity),
/* harmony export */   MarkerTag: () => (/* reexport safe */ _edcore_main__WEBPACK_IMPORTED_MODULE_5__.MarkerTag),
/* harmony export */   Position: () => (/* reexport safe */ _edcore_main__WEBPACK_IMPORTED_MODULE_5__.Position),
/* harmony export */   Range: () => (/* reexport safe */ _edcore_main__WEBPACK_IMPORTED_MODULE_5__.Range),
/* harmony export */   Selection: () => (/* reexport safe */ _edcore_main__WEBPACK_IMPORTED_MODULE_5__.Selection),
/* harmony export */   SelectionDirection: () => (/* reexport safe */ _edcore_main__WEBPACK_IMPORTED_MODULE_5__.SelectionDirection),
/* harmony export */   Token: () => (/* reexport safe */ _edcore_main__WEBPACK_IMPORTED_MODULE_5__.Token),
/* harmony export */   Uri: () => (/* reexport safe */ _edcore_main__WEBPACK_IMPORTED_MODULE_5__.Uri),
/* harmony export */   editor: () => (/* reexport safe */ _edcore_main__WEBPACK_IMPORTED_MODULE_5__.editor),
/* harmony export */   languages: () => (/* reexport safe */ _edcore_main__WEBPACK_IMPORTED_MODULE_5__.languages)
/* harmony export */ });
/* harmony import */ var _basic_languages_monaco_contribution__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../basic-languages/monaco.contribution */ "./node_modules/monaco-editor/esm/vs/basic-languages/monaco.contribution.js");
/* harmony import */ var _language_css_monaco_contribution__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/css/monaco.contribution */ "./node_modules/monaco-editor/esm/vs/language/css/monaco.contribution.js");
/* harmony import */ var _language_html_monaco_contribution__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language/html/monaco.contribution */ "./node_modules/monaco-editor/esm/vs/language/html/monaco.contribution.js");
/* harmony import */ var _language_json_monaco_contribution__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language/json/monaco.contribution */ "./node_modules/monaco-editor/esm/vs/language/json/monaco.contribution.js");
/* harmony import */ var _language_typescript_monaco_contribution__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language/typescript/monaco.contribution */ "./node_modules/monaco-editor/esm/vs/language/typescript/monaco.contribution.js");
/* harmony import */ var _edcore_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edcore.main */ "./node_modules/monaco-editor/esm/vs/editor/edcore.main.js");








/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/language/css/monaco.contribution.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/css/monaco.contribution.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssDefaults: () => (/* binding */ cssDefaults),
/* harmony export */   lessDefaults: () => (/* binding */ lessDefaults),
/* harmony export */   scssDefaults: () => (/* binding */ scssDefaults)
/* harmony export */ });
/* harmony import */ var _editor_editor_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../editor/editor.api.js */ "include-loader!./node_modules/monaco-editor/esm/vs/editor/editor.api.js");

/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));

// src/fillers/monaco-editor-core.ts
var monaco_editor_core_exports = {};
__reExport(monaco_editor_core_exports, _editor_editor_api_js__WEBPACK_IMPORTED_MODULE_0__);


// src/language/css/monaco.contribution.ts
var LanguageServiceDefaultsImpl = class {
  _onDidChange = new monaco_editor_core_exports.Emitter();
  _options;
  _modeConfiguration;
  _languageId;
  constructor(languageId, options, modeConfiguration) {
    this._languageId = languageId;
    this.setOptions(options);
    this.setModeConfiguration(modeConfiguration);
  }
  get onDidChange() {
    return this._onDidChange.event;
  }
  get languageId() {
    return this._languageId;
  }
  get modeConfiguration() {
    return this._modeConfiguration;
  }
  get diagnosticsOptions() {
    return this.options;
  }
  get options() {
    return this._options;
  }
  setOptions(options) {
    this._options = options || /* @__PURE__ */ Object.create(null);
    this._onDidChange.fire(this);
  }
  setDiagnosticsOptions(options) {
    this.setOptions(options);
  }
  setModeConfiguration(modeConfiguration) {
    this._modeConfiguration = modeConfiguration || /* @__PURE__ */ Object.create(null);
    this._onDidChange.fire(this);
  }
};
var optionsDefault = {
  validate: true,
  lint: {
    compatibleVendorPrefixes: "ignore",
    vendorPrefix: "warning",
    duplicateProperties: "warning",
    emptyRules: "warning",
    importStatement: "ignore",
    boxModel: "ignore",
    universalSelector: "ignore",
    zeroUnits: "ignore",
    fontFaceProperties: "warning",
    hexColorLength: "error",
    argumentsInColorFunction: "error",
    unknownProperties: "warning",
    ieHack: "ignore",
    unknownVendorSpecificProperties: "ignore",
    propertyIgnoredDueToDisplay: "warning",
    important: "ignore",
    float: "ignore",
    idSelector: "ignore"
  },
  data: { useDefaultDataProvider: true },
  format: {
    newlineBetweenSelectors: true,
    newlineBetweenRules: true,
    spaceAroundSelectorSeparator: false,
    braceStyle: "collapse",
    maxPreserveNewLines: void 0,
    preserveNewLines: true
  }
};
var modeConfigurationDefault = {
  completionItems: true,
  hovers: true,
  documentSymbols: true,
  definitions: true,
  references: true,
  documentHighlights: true,
  rename: true,
  colors: true,
  foldingRanges: true,
  diagnostics: true,
  selectionRanges: true,
  documentFormattingEdits: true,
  documentRangeFormattingEdits: true
};
var cssDefaults = new LanguageServiceDefaultsImpl("css", optionsDefault, modeConfigurationDefault);
var scssDefaults = new LanguageServiceDefaultsImpl("scss", optionsDefault, modeConfigurationDefault);
var lessDefaults = new LanguageServiceDefaultsImpl("less", optionsDefault, modeConfigurationDefault);
monaco_editor_core_exports.languages.css = { cssDefaults, lessDefaults, scssDefaults };
function getMode() {
  if (false) {} else {
    return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_language_css_cssMode_js").then(__webpack_require__.bind(__webpack_require__, /*! ./cssMode.js */ "./node_modules/monaco-editor/esm/vs/language/css/cssMode.js"));
  }
}
monaco_editor_core_exports.languages.onLanguage("less", () => {
  getMode().then((mode) => mode.setupMode(lessDefaults));
});
monaco_editor_core_exports.languages.onLanguage("scss", () => {
  getMode().then((mode) => mode.setupMode(scssDefaults));
});
monaco_editor_core_exports.languages.onLanguage("css", () => {
  getMode().then((mode) => mode.setupMode(cssDefaults));
});



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/language/html/monaco.contribution.js":
/*!********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/html/monaco.contribution.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handlebarDefaults: () => (/* binding */ handlebarDefaults),
/* harmony export */   handlebarLanguageService: () => (/* binding */ handlebarLanguageService),
/* harmony export */   htmlDefaults: () => (/* binding */ htmlDefaults),
/* harmony export */   htmlLanguageService: () => (/* binding */ htmlLanguageService),
/* harmony export */   razorDefaults: () => (/* binding */ razorDefaults),
/* harmony export */   razorLanguageService: () => (/* binding */ razorLanguageService),
/* harmony export */   registerHTMLLanguageService: () => (/* binding */ registerHTMLLanguageService)
/* harmony export */ });
/* harmony import */ var _editor_editor_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../editor/editor.api.js */ "include-loader!./node_modules/monaco-editor/esm/vs/editor/editor.api.js");

/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));

// src/fillers/monaco-editor-core.ts
var monaco_editor_core_exports = {};
__reExport(monaco_editor_core_exports, _editor_editor_api_js__WEBPACK_IMPORTED_MODULE_0__);


// src/language/html/monaco.contribution.ts
var LanguageServiceDefaultsImpl = class {
  _onDidChange = new monaco_editor_core_exports.Emitter();
  _options;
  _modeConfiguration;
  _languageId;
  constructor(languageId, options, modeConfiguration) {
    this._languageId = languageId;
    this.setOptions(options);
    this.setModeConfiguration(modeConfiguration);
  }
  get onDidChange() {
    return this._onDidChange.event;
  }
  get languageId() {
    return this._languageId;
  }
  get options() {
    return this._options;
  }
  get modeConfiguration() {
    return this._modeConfiguration;
  }
  setOptions(options) {
    this._options = options || /* @__PURE__ */ Object.create(null);
    this._onDidChange.fire(this);
  }
  setModeConfiguration(modeConfiguration) {
    this._modeConfiguration = modeConfiguration || /* @__PURE__ */ Object.create(null);
    this._onDidChange.fire(this);
  }
};
var formatDefaults = {
  tabSize: 4,
  insertSpaces: false,
  wrapLineLength: 120,
  unformatted: 'default": "a, abbr, acronym, b, bdo, big, br, button, cite, code, dfn, em, i, img, input, kbd, label, map, object, q, samp, select, small, span, strong, sub, sup, textarea, tt, var',
  contentUnformatted: "pre",
  indentInnerHtml: false,
  preserveNewLines: true,
  maxPreserveNewLines: void 0,
  indentHandlebars: false,
  endWithNewline: false,
  extraLiners: "head, body, /html",
  wrapAttributes: "auto"
};
var optionsDefault = {
  format: formatDefaults,
  suggest: {},
  data: { useDefaultDataProvider: true }
};
function getConfigurationDefault(languageId) {
  return {
    completionItems: true,
    hovers: true,
    documentSymbols: true,
    links: true,
    documentHighlights: true,
    rename: true,
    colors: true,
    foldingRanges: true,
    selectionRanges: true,
    diagnostics: languageId === htmlLanguageId,
    documentFormattingEdits: languageId === htmlLanguageId,
    documentRangeFormattingEdits: languageId === htmlLanguageId
  };
}
var htmlLanguageId = "html";
var handlebarsLanguageId = "handlebars";
var razorLanguageId = "razor";
var htmlLanguageService = registerHTMLLanguageService(htmlLanguageId, optionsDefault, getConfigurationDefault(htmlLanguageId));
var htmlDefaults = htmlLanguageService.defaults;
var handlebarLanguageService = registerHTMLLanguageService(handlebarsLanguageId, optionsDefault, getConfigurationDefault(handlebarsLanguageId));
var handlebarDefaults = handlebarLanguageService.defaults;
var razorLanguageService = registerHTMLLanguageService(razorLanguageId, optionsDefault, getConfigurationDefault(razorLanguageId));
var razorDefaults = razorLanguageService.defaults;
monaco_editor_core_exports.languages.html = {
  htmlDefaults,
  razorDefaults,
  handlebarDefaults,
  htmlLanguageService,
  handlebarLanguageService,
  razorLanguageService,
  registerHTMLLanguageService
};
function getMode() {
  if (false) {} else {
    return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_language_html_htmlMode_js").then(__webpack_require__.bind(__webpack_require__, /*! ./htmlMode.js */ "./node_modules/monaco-editor/esm/vs/language/html/htmlMode.js"));
  }
}
function registerHTMLLanguageService(languageId, options = optionsDefault, modeConfiguration = getConfigurationDefault(languageId)) {
  const defaults = new LanguageServiceDefaultsImpl(languageId, options, modeConfiguration);
  let mode;
  const onLanguageListener = monaco_editor_core_exports.languages.onLanguage(languageId, async () => {
    mode = (await getMode()).setupMode(defaults);
  });
  return {
    defaults,
    dispose() {
      onLanguageListener.dispose();
      mode?.dispose();
      mode = void 0;
    }
  };
}



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/language/json/monaco.contribution.js":
/*!********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/json/monaco.contribution.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   jsonDefaults: () => (/* binding */ jsonDefaults)
/* harmony export */ });
/* harmony import */ var _editor_editor_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../editor/editor.api.js */ "include-loader!./node_modules/monaco-editor/esm/vs/editor/editor.api.js");

/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));

// src/fillers/monaco-editor-core.ts
var monaco_editor_core_exports = {};
__reExport(monaco_editor_core_exports, _editor_editor_api_js__WEBPACK_IMPORTED_MODULE_0__);


// src/language/json/monaco.contribution.ts
var LanguageServiceDefaultsImpl = class {
  _onDidChange = new monaco_editor_core_exports.Emitter();
  _diagnosticsOptions;
  _modeConfiguration;
  _languageId;
  constructor(languageId, diagnosticsOptions, modeConfiguration) {
    this._languageId = languageId;
    this.setDiagnosticsOptions(diagnosticsOptions);
    this.setModeConfiguration(modeConfiguration);
  }
  get onDidChange() {
    return this._onDidChange.event;
  }
  get languageId() {
    return this._languageId;
  }
  get modeConfiguration() {
    return this._modeConfiguration;
  }
  get diagnosticsOptions() {
    return this._diagnosticsOptions;
  }
  setDiagnosticsOptions(options) {
    this._diagnosticsOptions = options || /* @__PURE__ */ Object.create(null);
    this._onDidChange.fire(this);
  }
  setModeConfiguration(modeConfiguration) {
    this._modeConfiguration = modeConfiguration || /* @__PURE__ */ Object.create(null);
    this._onDidChange.fire(this);
  }
};
var diagnosticDefault = {
  validate: true,
  allowComments: true,
  schemas: [],
  enableSchemaRequest: false,
  schemaRequest: "warning",
  schemaValidation: "warning",
  comments: "error",
  trailingCommas: "error"
};
var modeConfigurationDefault = {
  documentFormattingEdits: true,
  documentRangeFormattingEdits: true,
  completionItems: true,
  hovers: true,
  documentSymbols: true,
  tokens: true,
  colors: true,
  foldingRanges: true,
  diagnostics: true,
  selectionRanges: true
};
var jsonDefaults = new LanguageServiceDefaultsImpl("json", diagnosticDefault, modeConfigurationDefault);
monaco_editor_core_exports.languages.json = { jsonDefaults };
function getMode() {
  if (false) {} else {
    return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_language_json_jsonMode_js").then(__webpack_require__.bind(__webpack_require__, /*! ./jsonMode.js */ "./node_modules/monaco-editor/esm/vs/language/json/jsonMode.js"));
  }
}
monaco_editor_core_exports.languages.register({
  id: "json",
  extensions: [".json", ".bowerrc", ".jshintrc", ".jscsrc", ".eslintrc", ".babelrc", ".har"],
  aliases: ["JSON", "json"],
  mimetypes: ["application/json"]
});
monaco_editor_core_exports.languages.onLanguage("json", () => {
  getMode().then((mode) => mode.setupMode(jsonDefaults));
});



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/language/typescript/monaco.contribution.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/typescript/monaco.contribution.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JsxEmit: () => (/* binding */ JsxEmit),
/* harmony export */   ModuleKind: () => (/* binding */ ModuleKind),
/* harmony export */   ModuleResolutionKind: () => (/* binding */ ModuleResolutionKind),
/* harmony export */   NewLineKind: () => (/* binding */ NewLineKind),
/* harmony export */   ScriptTarget: () => (/* binding */ ScriptTarget),
/* harmony export */   getJavaScriptWorker: () => (/* binding */ getJavaScriptWorker),
/* harmony export */   getTypeScriptWorker: () => (/* binding */ getTypeScriptWorker),
/* harmony export */   javascriptDefaults: () => (/* binding */ javascriptDefaults),
/* harmony export */   typescriptDefaults: () => (/* binding */ typescriptDefaults),
/* harmony export */   typescriptVersion: () => (/* binding */ typescriptVersion2)
/* harmony export */ });
/* harmony import */ var _editor_editor_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../editor/editor.api.js */ "include-loader!./node_modules/monaco-editor/esm/vs/editor/editor.api.js");

/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));

// src/language/typescript/lib/typescriptServicesMetadata.ts
var typescriptVersion = "5.0.2";

// src/fillers/monaco-editor-core.ts
var monaco_editor_core_exports = {};
__reExport(monaco_editor_core_exports, _editor_editor_api_js__WEBPACK_IMPORTED_MODULE_0__);


// src/language/typescript/monaco.contribution.ts
var ModuleKind = /* @__PURE__ */ ((ModuleKind2) => {
  ModuleKind2[ModuleKind2["None"] = 0] = "None";
  ModuleKind2[ModuleKind2["CommonJS"] = 1] = "CommonJS";
  ModuleKind2[ModuleKind2["AMD"] = 2] = "AMD";
  ModuleKind2[ModuleKind2["UMD"] = 3] = "UMD";
  ModuleKind2[ModuleKind2["System"] = 4] = "System";
  ModuleKind2[ModuleKind2["ES2015"] = 5] = "ES2015";
  ModuleKind2[ModuleKind2["ESNext"] = 99] = "ESNext";
  return ModuleKind2;
})(ModuleKind || {});
var JsxEmit = /* @__PURE__ */ ((JsxEmit2) => {
  JsxEmit2[JsxEmit2["None"] = 0] = "None";
  JsxEmit2[JsxEmit2["Preserve"] = 1] = "Preserve";
  JsxEmit2[JsxEmit2["React"] = 2] = "React";
  JsxEmit2[JsxEmit2["ReactNative"] = 3] = "ReactNative";
  JsxEmit2[JsxEmit2["ReactJSX"] = 4] = "ReactJSX";
  JsxEmit2[JsxEmit2["ReactJSXDev"] = 5] = "ReactJSXDev";
  return JsxEmit2;
})(JsxEmit || {});
var NewLineKind = /* @__PURE__ */ ((NewLineKind2) => {
  NewLineKind2[NewLineKind2["CarriageReturnLineFeed"] = 0] = "CarriageReturnLineFeed";
  NewLineKind2[NewLineKind2["LineFeed"] = 1] = "LineFeed";
  return NewLineKind2;
})(NewLineKind || {});
var ScriptTarget = /* @__PURE__ */ ((ScriptTarget2) => {
  ScriptTarget2[ScriptTarget2["ES3"] = 0] = "ES3";
  ScriptTarget2[ScriptTarget2["ES5"] = 1] = "ES5";
  ScriptTarget2[ScriptTarget2["ES2015"] = 2] = "ES2015";
  ScriptTarget2[ScriptTarget2["ES2016"] = 3] = "ES2016";
  ScriptTarget2[ScriptTarget2["ES2017"] = 4] = "ES2017";
  ScriptTarget2[ScriptTarget2["ES2018"] = 5] = "ES2018";
  ScriptTarget2[ScriptTarget2["ES2019"] = 6] = "ES2019";
  ScriptTarget2[ScriptTarget2["ES2020"] = 7] = "ES2020";
  ScriptTarget2[ScriptTarget2["ESNext"] = 99] = "ESNext";
  ScriptTarget2[ScriptTarget2["JSON"] = 100] = "JSON";
  ScriptTarget2[ScriptTarget2["Latest"] = 99 /* ESNext */] = "Latest";
  return ScriptTarget2;
})(ScriptTarget || {});
var ModuleResolutionKind = /* @__PURE__ */ ((ModuleResolutionKind2) => {
  ModuleResolutionKind2[ModuleResolutionKind2["Classic"] = 1] = "Classic";
  ModuleResolutionKind2[ModuleResolutionKind2["NodeJs"] = 2] = "NodeJs";
  return ModuleResolutionKind2;
})(ModuleResolutionKind || {});
var LanguageServiceDefaultsImpl = class {
  _onDidChange = new monaco_editor_core_exports.Emitter();
  _onDidExtraLibsChange = new monaco_editor_core_exports.Emitter();
  _extraLibs;
  _removedExtraLibs;
  _eagerModelSync;
  _compilerOptions;
  _diagnosticsOptions;
  _workerOptions;
  _onDidExtraLibsChangeTimeout;
  _inlayHintsOptions;
  _modeConfiguration;
  constructor(compilerOptions, diagnosticsOptions, workerOptions, inlayHintsOptions, modeConfiguration) {
    this._extraLibs = /* @__PURE__ */ Object.create(null);
    this._removedExtraLibs = /* @__PURE__ */ Object.create(null);
    this._eagerModelSync = false;
    this.setCompilerOptions(compilerOptions);
    this.setDiagnosticsOptions(diagnosticsOptions);
    this.setWorkerOptions(workerOptions);
    this.setInlayHintsOptions(inlayHintsOptions);
    this.setModeConfiguration(modeConfiguration);
    this._onDidExtraLibsChangeTimeout = -1;
  }
  get onDidChange() {
    return this._onDidChange.event;
  }
  get onDidExtraLibsChange() {
    return this._onDidExtraLibsChange.event;
  }
  get modeConfiguration() {
    return this._modeConfiguration;
  }
  get workerOptions() {
    return this._workerOptions;
  }
  get inlayHintsOptions() {
    return this._inlayHintsOptions;
  }
  getExtraLibs() {
    return this._extraLibs;
  }
  addExtraLib(content, _filePath) {
    let filePath;
    if (typeof _filePath === "undefined") {
      filePath = `ts:extralib-${Math.random().toString(36).substring(2, 15)}`;
    } else {
      filePath = _filePath;
    }
    if (this._extraLibs[filePath] && this._extraLibs[filePath].content === content) {
      return {
        dispose: () => {
        }
      };
    }
    let myVersion = 1;
    if (this._removedExtraLibs[filePath]) {
      myVersion = this._removedExtraLibs[filePath] + 1;
    }
    if (this._extraLibs[filePath]) {
      myVersion = this._extraLibs[filePath].version + 1;
    }
    this._extraLibs[filePath] = {
      content,
      version: myVersion
    };
    this._fireOnDidExtraLibsChangeSoon();
    return {
      dispose: () => {
        let extraLib = this._extraLibs[filePath];
        if (!extraLib) {
          return;
        }
        if (extraLib.version !== myVersion) {
          return;
        }
        delete this._extraLibs[filePath];
        this._removedExtraLibs[filePath] = myVersion;
        this._fireOnDidExtraLibsChangeSoon();
      }
    };
  }
  setExtraLibs(libs) {
    for (const filePath in this._extraLibs) {
      this._removedExtraLibs[filePath] = this._extraLibs[filePath].version;
    }
    this._extraLibs = /* @__PURE__ */ Object.create(null);
    if (libs && libs.length > 0) {
      for (const lib of libs) {
        const filePath = lib.filePath || `ts:extralib-${Math.random().toString(36).substring(2, 15)}`;
        const content = lib.content;
        let myVersion = 1;
        if (this._removedExtraLibs[filePath]) {
          myVersion = this._removedExtraLibs[filePath] + 1;
        }
        this._extraLibs[filePath] = {
          content,
          version: myVersion
        };
      }
    }
    this._fireOnDidExtraLibsChangeSoon();
  }
  _fireOnDidExtraLibsChangeSoon() {
    if (this._onDidExtraLibsChangeTimeout !== -1) {
      return;
    }
    this._onDidExtraLibsChangeTimeout = window.setTimeout(() => {
      this._onDidExtraLibsChangeTimeout = -1;
      this._onDidExtraLibsChange.fire(void 0);
    }, 0);
  }
  getCompilerOptions() {
    return this._compilerOptions;
  }
  setCompilerOptions(options) {
    this._compilerOptions = options || /* @__PURE__ */ Object.create(null);
    this._onDidChange.fire(void 0);
  }
  getDiagnosticsOptions() {
    return this._diagnosticsOptions;
  }
  setDiagnosticsOptions(options) {
    this._diagnosticsOptions = options || /* @__PURE__ */ Object.create(null);
    this._onDidChange.fire(void 0);
  }
  setWorkerOptions(options) {
    this._workerOptions = options || /* @__PURE__ */ Object.create(null);
    this._onDidChange.fire(void 0);
  }
  setInlayHintsOptions(options) {
    this._inlayHintsOptions = options || /* @__PURE__ */ Object.create(null);
    this._onDidChange.fire(void 0);
  }
  setMaximumWorkerIdleTime(value) {
  }
  setEagerModelSync(value) {
    this._eagerModelSync = value;
  }
  getEagerModelSync() {
    return this._eagerModelSync;
  }
  setModeConfiguration(modeConfiguration) {
    this._modeConfiguration = modeConfiguration || /* @__PURE__ */ Object.create(null);
    this._onDidChange.fire(void 0);
  }
};
var typescriptVersion2 = typescriptVersion;
var modeConfigurationDefault = {
  completionItems: true,
  hovers: true,
  documentSymbols: true,
  definitions: true,
  references: true,
  documentHighlights: true,
  rename: true,
  diagnostics: true,
  documentRangeFormattingEdits: true,
  signatureHelp: true,
  onTypeFormattingEdits: true,
  codeActions: true,
  inlayHints: true
};
var typescriptDefaults = new LanguageServiceDefaultsImpl({ allowNonTsExtensions: true, target: 99 /* Latest */ }, { noSemanticValidation: false, noSyntaxValidation: false, onlyVisible: false }, {}, {}, modeConfigurationDefault);
var javascriptDefaults = new LanguageServiceDefaultsImpl({ allowNonTsExtensions: true, allowJs: true, target: 99 /* Latest */ }, { noSemanticValidation: true, noSyntaxValidation: false, onlyVisible: false }, {}, {}, modeConfigurationDefault);
var getTypeScriptWorker = () => {
  return getMode().then((mode) => mode.getTypeScriptWorker());
};
var getJavaScriptWorker = () => {
  return getMode().then((mode) => mode.getJavaScriptWorker());
};
monaco_editor_core_exports.languages.typescript = {
  ModuleKind,
  JsxEmit,
  NewLineKind,
  ScriptTarget,
  ModuleResolutionKind,
  typescriptVersion: typescriptVersion2,
  typescriptDefaults,
  javascriptDefaults,
  getTypeScriptWorker,
  getJavaScriptWorker
};
function getMode() {
  if (false) {} else {
    return __webpack_require__.e(/*! import() */ "vendors-node_modules_monaco-editor_esm_vs_language_typescript_tsMode_js").then(__webpack_require__.bind(__webpack_require__, /*! ./tsMode.js */ "./node_modules/monaco-editor/esm/vs/language/typescript/tsMode.js"));
  }
}
monaco_editor_core_exports.languages.onLanguage("typescript", () => {
  return getMode().then((mode) => mode.setupTypeScript(typescriptDefaults));
});
monaco_editor_core_exports.languages.onLanguage("javascript", () => {
  return getMode().then((mode) => mode.setupJavaScript(javascriptDefaults));
});



/***/ })

}]);
//# sourceMappingURL=1ad88b106aea8c1a935d.js.map