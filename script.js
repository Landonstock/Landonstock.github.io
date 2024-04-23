function menuClick (whichdivtoshow) {

  alldivs = document.getElementsByClassName('main show')

  for (let data of alldivs) {
    document.getElementById(data.id).className="main noshow"
  }

  document.getElementById(whichdivtoshow).className="main show"
  
}

function showthediv(var1) {
  console.log(var1)
  document.getElementsByClassName('showit')[0].className='hideit';
  document.getElementById(var1).className="showit";
}
