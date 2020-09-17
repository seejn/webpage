const change = () =>
{
    let button = document.querySelector('button');
    let paragraph = document.querySelectorAll('p');

    button.addEventListener("click", () =>
    {
        let i;
        for(i = 0; i < paragraph.length; i++)
        {
            paragraph[i].innerHTML = 'SEEJN';
            paragraph[i].style.color = 'red';
            button.style.display = 'none';
        }
    });
}
change();