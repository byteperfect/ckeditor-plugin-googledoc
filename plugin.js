CKEDITOR.plugins.add('googledocs', {
  icons: 'googledocs',
  init: function(editor) {
    editor.addCommand('googledocsDialog', new CKEDITOR.dialogCommand('googledocsDialog'));

    editor.ui.addButton('Googledocs', {
      label: 'Googledocs',
      command: 'googledocsDialog',
      toolbar: 'insert'
    });

    CKEDITOR.dialog.add('googledocsDialog', this.path + 'dialogs/googledocs.js');
  }
});