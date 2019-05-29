var table = document.getElementById("mstrTable");
var thead = table.getElementsByTagName("thead")[0];
var tbody = table.getElementsByTagName("tbody")[0];
var ishigh;

function rowindex(row){
	var rows = table.rows, i = rows.length;
	while(--i > -1){
		if(rows[i] === row){return i;}
	}
}


document.onkeydown = function(e){
	e = e || event;
	var code = e.keyCode, rowslim = table.rows.length - 2, newhigh;
	if(code === 38){ //up arraow
		newhigh = rowindex(ishigh) - 2;
		if(!ishigh || newhigh < 0){return GoTo('mstrTable', rowslim);}
		return GoTo('mstrTable', newhigh);
	} else if (code === 40){ //down arrow
		newhigh = rowindex(ishigh);
		if(!ishigh || newhigh > rowslim){return GoTo('mstrTable', 0);}
		return GoTo('mstrTable', newhigh);
	}
};

tbody.onclick = function (e) {
  e = e || window.event;
  var td = e.target || e.srcElement; //assumes there are no other elements inside the td
  var row = td.parentNode;
  if (ishigh&&ishigh!=row){
    ishigh.className='';
  }
  row.className = row.className==="highlighted" ? "" : "highlighted";
  ishigh=row;
}

thead.onclick = function (e) {
  e = e || window.event;
  var th = e.target || e.srcElement;  //assumes there are no other elements in the th
  //alert(th.innerHTML);  ### FOR LATER (DB BACK END USE) ###
}

function GoTo(id,nu){
  var obj=document.getElementById(id),
      trs=obj.getElementsByTagName('TR');
  nu = nu + 1;
  if (trs[nu]){
    if (ishigh&&ishigh!=trs[nu]){
      ishigh.className='';
    }
    trs[nu].className = trs[nu].className=="highlighted" ? "" : "highlighted";
    ishigh=trs[nu];
   }
}
