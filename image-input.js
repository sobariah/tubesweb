/**
 * @author anas mubarak yasin
 * @see https://github.com/AnasMubarakYasin
 */
document.getElementById('picture-input').addEventListener('input', (event) => {
  console.log(event);
  let accept = /.*\.{jpg|png|svg}$/

  if (accept.test(event.target.value)) {
    console.log(event.target.value);
    let img = document.createElement('img');

    img.src = event.target.value;

    

    let reader = new FileReader();

    reader.readAsBinaryString()
    // event.target.nextElementSibling?.replaceWith(img);
  } else {
    console.warn(event.target.value);
  }
});
