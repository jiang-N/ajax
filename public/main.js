getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
        console.log(1);
      } else {
        alert("失败了");
      }
    }
  };
  request.send();
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const script = document.createElement("script");
        script.innerHTML = request.response;
        document.body.appendChild(script);
      } else {
        alert("失败了");
      }
    }
  };
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const myDiv = document.createElement("div");
        myDiv.innerHTML = request.response;
        document.body.appendChild(myDiv);
      } else {
        alert("失败了");
      }
    }
  };
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const myDom = request.responseXML;

        const text = myDom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      } else {
        alert("失败了");
      }
    }
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const myObj = JSON.parse(request.response);
        myName.textContent = myObj.secondName;
      } else {
        alert("失败了");
      }
    }
  };
  request.send();
};

let n = 1;
nextPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const array = JSON.parse(request.response);
        pageUl.innerHTML = "";
        array.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item.id;
          pageUl.appendChild(li);
        });
        n += 1;
      } else {
        alert("没有更多了");
      }
    }
  };
  request.send();
};
