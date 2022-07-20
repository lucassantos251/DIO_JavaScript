//const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const BASE_URL = 'https://api.thecatapi.com/v1/images/search/';
//const BASE_URL = 'https://dog.ceo/api/breeds/image/random';
const button = document.getElementById('troca-gatinhu');
const imagem = document.getElementById('gato');

const getGatinho = async () =>
{
    try
    {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json[0].url;
        //return json.message;
    }
    catch(e)
    {
        console.log(e.message);
    }
}

const loadImg = async () =>
{
    imagem.src = await getGatinho();
}


button.addEventListener('click', loadImg);

loadImg();