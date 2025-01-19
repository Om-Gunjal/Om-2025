// Api fetching 

const url ="https://cat-fact.herokuapp.com";

const factpara = document.querySelector("#fact");
const btn=document.querySelector("#btn");


const getfacts = async () =>
{
    console.log("getting data . . .");
    let response = await fetch(url);
    console.log(response); // JSON format
    // let data = await response.json();
    // factpara.innerText = data[1].text;
};

btn.addEventListener("click",getfacts);
