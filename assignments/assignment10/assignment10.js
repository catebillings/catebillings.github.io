async function populate() {
    const requestURL = 'assignment10.json';
    const request = new Request(requestURL);

    const resonse = await fetch(request);
    const humanresourcesText = await Response.text();

    const humanresources = JSON.parse
    (humanresourcesText);

    console.log(humanresources);
    // Part 1
    
    console.log(humanresources.employees);
    // Part 2
    
}