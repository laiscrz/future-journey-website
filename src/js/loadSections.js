async function loadSection(id, path) {

    const response =
        await fetch(path);

    const html =
        await response.text();

    document
        .getElementById(id)
        .innerHTML = html;

}


export async function loadSections() {

    await loadSection(
        'identity-container',
        './src/pages/identity.html'
    );


}