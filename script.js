let table = document.createElement("table");
table.className = "table"

let thead = document.createElement("thead");
thead.className = "thead-dark"

function create_tr(){
    let tr = document.createElement("tr");
    return tr;
}

function create_th(tagname,attrname,attrvalue,content){
    let th = document.createElement(tagname);
    th.setAttribute(attrname,attrvalue);
    th.innerHTML = content;
    return th;
}

function create_td(tagname,content){
    let td = document.createElement(tagname);
    td.innerHTML = content;
    return td;
}

let thead_tr = create_tr();

let th1 = create_th("th","scope","col","#");
let th2 = create_th("th","scope","col","First");
let th3 = create_th("th","scope","col","Last");
let th4 = create_th("th","scope","col","Handle");
 
thead_tr.append(th1,th2,th3,th4);
thead.append(thead_tr);

let tbody = document.createElement("tbody");

let tbody_tr1 = create_tr();

let tbody_th5 = create_th("th","scope","row","1");
let tbody_td1 = create_td("td","Mark");
let tbody_td2 = create_td("td","Otto");
let tbody_td3 = create_td("td","@mdo");
tbody_tr1.append(tbody_th5,tbody_td1,tbody_td2,tbody_td3);
tbody.append(tbody_tr1);

let tbody_tr2 = create_tr();

let tbody_th6 = create_th("th","scope","row","2");
let tbody_td4 = create_td("td","Jacob");
let tbody_td5 = create_td("td","Thornton");
let tbody_td6 = create_td("td","@fat");
tbody_tr2.append(tbody_th6,tbody_td4,tbody_td5,tbody_td6);
tbody.append(tbody_tr2);

let tbody_tr3 = create_tr();

let tbody_th7 = create_th("th","scope","row","3");
let tbody_td7 = create_td("td","Larry");
let tbody_td8 = create_td("td","The Bird");
let tbody_td9 = create_td("td","@twitter");
tbody_tr3.append(tbody_th7,tbody_td7,tbody_td8,tbody_td9);
tbody.append(tbody_tr3);


table.append(thead,tbody);
document.body.append(table);


