const render = (n) => {
  var container = document.getElementById("container");
  container.innerHTML = "";
  var s = "";
  for (let i = 0; i < Object.keys(merit).length; i++) {
    var c = merit[i + 1];
    var display = "none";
    var status = c.status;
    if (status == "Fail") {
      status = "red";
    } else {
      status = "green";
    }

    s += `<div id="no${i + 1}" style="display:${display}">
      <table class="table_main">
        <tr>
          <th colspan="5">Roll: ${c.roll}</th>
        </tr>
        <tr>
          <th colspan="5" style="color:${status} !important">${c.status}</th>
        </tr>
        <tr>
          <th colspan="5">Merit:${c.merit}</th>
        </tr>
        <tr>
          <td>Subject</td>
          <td>Total</td>
          <td>Grade</td>
          <td>CQ</td>
          <td>MCQ</td>
        </tr>
        <tr>
          <td class="sub">Bangla</td>
          <td>${c.marks.Bangla[2]}</td>
          <td>${c.marks.Bangla[3]}</td>
          <td>${c.marks.Bangla[0]}</td>
          <td>${c.marks.Bangla[1]}</td>
        </tr>
        <tr>
          <td class="sub">English</td>
          <td>${c.marks.English[0]}</td>
          <td colspan="4">${c.marks.English[1]}</td>
        </tr>
        <tr>
          <td class="sub">ICT</td>
          <td>${c.marks.ICT[2]}</td>
          <td>${c.marks.ICT[3]}</td>
          <td>${c.marks.ICT[0]}</td>
          <td>${c.marks.ICT[1]}</td>
        </tr>
        <tr>
          <td class="sub">Physics</td>
          <td>${c.marks.Physics[2]}</td>
          <td>${c.marks.Physics[3]}</td>
          <td>${c.marks.Physics[0]}</td>
          <td>${c.marks.Physics[1]}</td>
        </tr>
        <tr>
          <td class="sub">Chemistry</td>
          <td>${c.marks.Chemistry[2]}</td>
          <td>${c.marks.Chemistry[3]}</td>
          <td>${c.marks.Chemistry[0]}</td>
          <td>${c.marks.Chemistry[1]}</td>
        </tr>
        <tr>
          <td class="sub">Math</td>
          <td>${c.marks.Math[2]}</td>
          <td>${c.marks.Math[3]}</td>
          <td>${c.marks.Math[0]}</td>
          <td>${c.marks.Math[1]}</td>
        </tr>
        <tr>
          <td class="sub">Botany (Bio-1)</td>
          <td>${c.marks.Botany[2]}</td>
          <td>${c.marks.Botany[3]}</td>
          <td>${c.marks.Botany[0]}</td>
          <td>${c.marks.Botany[1]}</td>
        </tr>
        <tr>
          <td class="sub">Zoology (Bio-2)</td>
          <td>${c.marks.Zoology[2]}</td>
          <td>${c.marks.Zoology[3]}</td>
          <td>${c.marks.Zoology[0]}</td>
          <td>${c.marks.Zoology[1]}</td>
        </tr>

        <tr>
          <td class="sub">Total</td>
          <td colspan="5">${c.total}</td>
        </tr>
        <tr>
          <td class="sub">Grade</td>
          <td>${c.grade}</td>
          <td colspan="4">${c.letter_grade}</td>
        </tr>
      </table>
    </div>`;
  }

  container.innerHTML = s;
};

const render2 = (merit1) => {
  var container = document.getElementById("container1");
  container.innerHTML = "";
  var s = `<table id='merit_table' style="display:none"><tr>
    <th>Merit</td>
    <th>Roll</td>
    <th>Grade</td>
    <th>Total</td>
    </tr>`;
  for (let i = 0; i < merit1.length; i++) {
    var c = merit1[i];
    var status = c.status;
    if (status == "Fail") {
      status = "red";
    } else {
      status = "green";
    }

    s += `<tr>
    <td>${c.merit}</td>
    <td>${c.roll}</td>
    <td>${c.grade}</td>
    <td>${c.total}</td>
    </tr>`;
  }
  s += "</table>";

  container.innerHTML = s;
};

render();
render2(merit_list);

var visible = [];

const getinput = document.getElementById("button");
getinput.addEventListener("click", function (e) {
  {
    var input = document.getElementById("input");
    var val = parseInt(input.value);
    if ((0 < val) & (1245 >= val)) {
      if (visible.length != 0) {
        visible[0].style.display = "none";
        visible = [];
      }
      var current = document.getElementById(`no${val}`);
      current.style.display = "block";
      visible = [current];

      var container = document.getElementById("not_found");
      container.innerHTML = ``;
      var merit = document.getElementById("merit_table");
      merit.style.display = "none";
    } else {
      if (visible.length != 0) {
        visible[0].style.display = "none";
        visible = [];
      }
      var container = document.getElementById("not_found");
      container.innerHTML = `<h1 id="not">Not Found! <h1/>`;
      var merit = document.getElementById("merit_table");
      merit.style.display = "none";
    }
  }
});

const getmerit = document.getElementById("merit_list");

getmerit.addEventListener("click", function (e) {
  var merit = document.getElementById("merit_table");
  merit.style.display = "block";
  var container = document.getElementById("not_found");
  container.innerHTML = ``;
  if (visible.length != 0) {
    visible[0].style.display = "none";
    visible = [];
  }
});
