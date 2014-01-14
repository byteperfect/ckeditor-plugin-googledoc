CKEDITOR.dialog.add('googledocsDialog', function (editor) {
  return {
    title: 'Abbreviation Properties',
    minWidth: 400,
    minHeight: 200,

    contents: [
      {
        id: 'tab-basic',
        label: 'Basic Settings',
        elements: [

{
    type: 'file',
    id: 'upload',
    label: 'Select file from your computer',
    size: 38,
    action: '/site/imageupload',
},
{
    type: 'fileButton',
    id: 'fileId',
    label: 'Upload file',
    'for': [ 'tab-basic', 'upload' ],
}

        ]
      }
    ]

  };
});