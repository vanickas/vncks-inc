document.addEventListener('DOMContentLoaded', function() {
    function expandProject (proj) {
        proj.style.boxShadow = '1rem 0.7rem #344c43';
        proj.style.padding = '2.5rem 2.5rem 5rem';
        proj.style.height = '31rem';
    
        const fullInfo = proj.getElementsByClassName('project-full-info')[0];
        fullInfo.style.position = 'relative';
        fullInfo.style.opacity = '1';
        fullInfo.style.transition = 'opacity 0.1s ease-out 0.5s';
    
        const projP = proj.getElementsByTagName('p');
        Array.from(projP).forEach(element => {
            element.style.opacity = '1';
            element.style.transition = 'opacity 0.1s ease-out 0.5s';
        });
    
        Array.from(proj.getElementsByTagName('a')).forEach(element => {
            element.style.display = 'inline';
        })
    
        const readMore = proj.getElementsByClassName('read-more')[0];
        readMore.style.opacity = '0';
        readMore.style.transition = 'none';
    
        const collapse = proj.getElementsByClassName('collapse')[0];
        collapse.style.opacity = '1';
        collapse.style.transition = 'opacity 0.1s ease-out 0.55s';
    }

    function collapseProject(proj) {
        // Resetting styles to their initial state as per the original CSS
        proj.style.boxShadow = 'none';
        proj.style.padding = '1rem';
        proj.style.height = '20rem'; // Original height from CSS
    
        const fullInfo = proj.getElementsByClassName('project-full-info')[0];
        fullInfo.style.position = 'absolute'; // Original position
        fullInfo.style.opacity = '0'; // Original opacity
        fullInfo.style.transition = 'opacity 0.1s ease-out 0.1s'; // Original transition
    
        const projP = proj.getElementsByTagName('p');
        Array.from(projP).forEach(element => {
            element.style.opacity = '0.1'; // Original opacity for paragraphs
            element.style.transition = 'opacity 0.1s ease-out 0.45s'; // Original transition
        });
    
        Array.from(proj.getElementsByTagName('a')).forEach(element => {
            element.style.display = 'none'; // Original display state for links
        });
    
        const readMore = proj.getElementsByClassName('read-more')[0];
        readMore.style.opacity = '1'; // Make the read-more visible again
        readMore.style.transition = 'opacity 0.1s ease-out 0.55s'; // Original transition
    
        const collapse = proj.getElementsByClassName('collapse')[0];
        collapse.style.opacity = '0'; // Hide the collapse button
        collapse.style.transition = 'none'; // No transition on hiding
    }

    const proj1 = document.getElementById('proj-1');
    const readMore1 = proj1.getElementsByClassName('read-more')[0];
    const collapse1 = proj1.getElementsByClassName('collapse')[0];

    readMore1.addEventListener('click', function() {
        expandProject(proj1);
    });
    collapse1.addEventListener('click', function() {
        collapseProject(proj1);
    });
})

