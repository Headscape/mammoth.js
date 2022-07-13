//exports.customStyleMap = [
var customStyleMap = [
    "p[style-name='Heading 1'] => h2:fresh",
    "p[style-name='Heading 2'] => h3:fresh",
    "p[style-name='Heading 3'] => h4:fresh",
    "p[style-name='Heading 4'] => h5:fresh",
    "p[style-name='Heading 5'] => h6:fresh",
    "p[style-name='Head1'] => h2:fresh",
    "p[style-name='Head2'] => h3:fresh",
    "p[style-name='Section Title'] => h2:fresh",
    "p[style-name='Subsection Title'] => h3:fresh",
    "p[style-name='_Head2-Notes'] => h3:fresh",
    "p[style-name^='toc'] => !",
    "p[style-name^='TOC'] => !",
    "small-caps => span.small-caps"
];

function transformAllZWAdobeF(run) {
    if (run.font && run.font.toLowerCase() == 'zwadobef') {
        return {}
    } else {
        return run;
    }
}
