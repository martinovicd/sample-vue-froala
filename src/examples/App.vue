<template>
  <div id="app">
    <froala :tag="'textarea'" :config="config"></froala>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      config: {
        language: "de",
        toolbarButtons: {
          // Key represents the more button from the toolbar.
          moreText: {
            // List of buttons used in the  group.
            buttons: [
              "bold",
              "italic",
              "underline",
              "strikeThrough",
              "subscript",
              "superscript",
              "fontFamily",
              "fontSize",
              "textColor",
              "backgroundColor",
              "inlineClass",
              "inlineStyle",
              "clearFormatting"
            ],

            // Alignment of the group in the toolbar.
            align: "left",

            // By default, 3 buttons are shown in the main toolbar. The rest of them are available when using the more button.
            buttonsVisible: 3
          },

          moreParagraph: {
            buttons: [
              "alignLeft",
              "alignCenter",
              "formatOLSimple",
              "alignRight",
              "alignJustify",
              "formatOL",
              "formatUL",
              "paragraphFormat",
              "paragraphStyle",
              "lineHeight",
              "outdent",
              "indent",
              "quote"
            ],
            align: "left",
            buttonsVisible: 3
          },

          moreRich: {
            buttons: [
              "insertLink",
              "insertImage",
              "insertVideo",
              "insertTable",
              "emoticons",
              "fontAwesome",
              "specialCharacters",
              "embedly",
              "insertFile",
              "insertHR"
            ],
            align: "left",
            buttonsVisible: 3
          },

          moreMisc: {
            buttons: [
              "undo",
              "redo",
              "fullscreen",
              "print",
              "getPDF",
              "spellChecker",
              "selectAll",
              "html",
              "help"
            ],
            align: "right",
            buttonsVisible: 2
          }
        }
      }
    };
  }
};
</script>
