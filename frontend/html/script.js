

function toggleLayout (layout) {
    document.querySelectorAll('.options button').forEach((element, index) => {
        if (layout == index) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    })

    const className = layout == 0 ? 'grid' : 'flex'
    document.getElementById('content').className = className
}