/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/*jshint esversion: 6*/

const app = (() => {

  function getImageName(country) {

 
	country	=	country.toLowerCase();
	var	promiseOfImageName	=	new	Promise(function(resolve,	reject)	{
		setTimeout(function()	{
			// jika country(yang diketikan sesuai dengan nama dibawah maka diterima)
				if	(country	===	'spain'	||	country	===	'chile'	||	country	===	'peru')	{
						resolve(country	+	'.png');
						//selain itu maka akan ditolak dan ditampilkan pda console
				}	else	{
						reject(Error('Didn\'t	receive	a	valid	country	name!'));
				}
		},	1000);
});
//menampilkan log pada console
console.log(promiseOfImageName); // pesan akan ditampilkan pada console
//return yang dipakai dalam function getImageName
return	promiseOfImageName;

  }

  function isSpain(country) {

    // Optional - create and return a promise that resolves if input is "Spain"

  }

  function flagChain(country) {

    //function dari flagChain dengan isi country
return	getImageName(country)
.then(fetchFlag)// jika berhasil / sesuai maka akan mengambil dari fetchFlag
.then(processFlag) // memproses gambar sesuai dengan country
.then(appendFlag) // menampilkan gambar
.catch(logError);
  }

  function allFlags(promiseList) {

    // use promise.all

  }


  // call the allFlags function


  // use Promise.race


  /* Helper functions */

  function logSuccess(result) {
    console.log('Success!:\n' + result);
  }

  function logError(err) {
    console.log('Oh no!:\n' + err);
  }

  function returnFalse() {
    return false;
  }

  function fetchFlag(imageName) {
    return fetch('flags/' + imageName); // fetch returns a promise
  }

  function processFlag(flagResponse) {
    if (!flagResponse.ok) {
      throw Error('Bad response for flag request!'); // This will implicitly reject
    }
    return flagResponse.blob(); // blob() returns a promise
  }

  function appendFlag(flagBlob) {
    const flagImage = document.createElement('img');
    const flagDataURL = URL.createObjectURL(flagBlob);
    flagImage.src = flagDataURL;
    const imgContainer = document.getElementById('img-container');
    imgContainer.appendChild(flagImage);
    imgContainer.style.visibility = 'visible';
  }

  function fallbackName() {
    return 'chile.png';
  }

  // Don't worry if you don't understand this, it's not part of Promises.
  // We are using the JavaScript Module Pattern to enable unit testing of
  // our functions.
  return {
    getImageName: (getImageName),
    flagChain: (flagChain),
    isSpain: (isSpain),
    fetchFlag: (fetchFlag),
    processFlag: (processFlag),
    appendFlag: (appendFlag),
    allFlags: (allFlags)
  };

})();
