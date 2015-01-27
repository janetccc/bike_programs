var no1 = "System Size";
var no2 = "Cost";
var no3 = "Convenience";
var no4 = "Area";
var no5 = "Activity";

//---------------------------------------------
//------------------CITIES---------------------
var newyork = [
  { className: 'single', // optional can be used for styling
    axes: [
      {axis: no1,value:7},
      {axis: no2,value:9},
      {axis: no3,value:9},
      {axis: no4,value:5},
      {axis: no5,value:9}   ]
  }
];

var austin = [
  { className: 'multi', // optional can be used for styling
    axes: [
      {axis: no1,value:4},
      {axis: no2,value:6},
      {axis: no3,value:4},
      {axis: no4,value:3},
      {axis: no5,value:3}   ]
  }
];

var boston = [
  { className: 'multi', // optional can be used for styling
    axes: [
      {axis: no1,value:10},
      {axis: no2,value:9},
      {axis: no3,value:4},
      {axis: no4,value:6},
      {axis: no5,value:7}   ]
  }
];

var chattanoga = [
  { className: 'multi', // optional can be used for styling
    axes: [
      {axis: no1,value:10},
      {axis: no2,value:2},
      {axis: no3,value:6},
      {axis: no4,value:1},
      {axis: no5,value:2}   ]
  }
];

var chicago = [
  { className: 'multi', // optional can be used for styling
    axes: [
      {axis: no1,value:8},
      {axis: no2,value:10},
      {axis: no3,value:5},
      {axis: no4,value:10},
      {axis: no5,value:5}   ]
  }
];

var columbus = [
  { className: 'multi', // optional can be used for styling
    axes: [
      {axis: no1,value:2},
      {axis: no2,value:1},
      {axis: no3,value:7},
      {axis: no4,value:1},
      {axis: no5,value:2}   ]
  }
];

var denver = [
  { className: 'multi', // optional can be used for styling
    axes: [
      {axis: no1,value:8},
      {axis: no2,value:8},
      {axis: no3,value:5},
      {axis: no4,value:2},
      {axis: no5,value:3}   ]
  }
];

var houston = [
  { className: 'multi', // optional can be used for styling
    axes: [
      {axis: no1,value:1},
      {axis: no2,value:4},
      {axis: no3,value:4},
      {axis: no4,value:1},
      {axis: no5,value:3}   ]
  }
];

var minneapolis = [
  { className: 'multi', // optional can be used for styling
    axes: [
      {axis: no1,value:10},
      {axis: no2,value:10},
      {axis: no3,value:4},
      {axis: no4,value:8},
      {axis: no5,value:2}   ]
  }
];

var sanfrancisco = [
  { className: 'multi', // optional can be used for styling
    axes: [
      {axis: no1,value:7},
      {axis: no2,value:5},
      {axis: no3,value:7},
      {axis: no4,value:2},
      {axis: no5,value:3}   ]
  }
];
var washington = [
  { className: 'multi', // optional can be used for styling
    axes: [
      {axis: no1,value:10},
      {axis: no2,value:10},
      {axis: no3,value:3},
      {axis: no4,value:10},
      {axis: no5,value:7}   ]
  }
];

var barcelona = [
  { className: 'multi', // optional can be used for styling
    axes: [
      {axis: no1,value:10},
      {axis: no2,value:10},
      {axis: no3,value:9},
      {axis: no4,value:3},
      {axis: no5,value:10}   ]
  }
];
var london = [
  { className: 'multi', // optional can be used for styling
    axes: [
      {axis: no1,value:9},
      {axis: no2,value:10},
      {axis: no3,value:8},
      {axis: no4,value:9},
      {axis: no5,value:6}   ]
  }
];

var paris = [
  { className: 'multi', // optional can be used for styling
    axes: [
      {axis: no1,value:10},
      {axis: no2,value:10},
      {axis: no3,value:10},
      {axis: no4,value:9},
      {axis: no5,value:9}   ]
  }
];

//---------------------------------------------
//------------------AVERAGE--------------------
var avg = [
  {className: 'multi m1', //austin
    axes: [
      {axis: no1,value:10},
      {axis: no2,value:9},
      {axis: no3,value:4},
      {axis: no4,value:6},
      {axis: no5,value:7}   ]
  },{className: 'multi m2', //boston
    axes: [
      {axis: no1,value:14},
      {axis: no2,value:12},
      {axis: no3,value:10},
      {axis: no4,value:13},
      {axis: no5,value:3}
    ]
  },{className: 'multi m3', //chicago
    axes: [
      {axis: no1,value:10},
      {axis: no2,value:2},
      {axis: no3,value:6},
      {axis: no4,value:1},
      {axis: no5,value:2}   ]
  },{className: 'multi m4', //chattanoga
    axes: [
      {axis: no1,value:8},
      {axis: no2,value:10},
      {axis: no3,value:5},
      {axis: no4,value:10},
      {axis: no5,value:5}   ]
  },{className: 'multi m5', //columbus
    axes: [
      {axis: no1,value:2},
      {axis: no2,value:1},
      {axis: no3,value:7},
      {axis: no4,value:1},
      {axis: no5,value:2}   ]
  },{className: 'multi m6', //denver
    axes: [
      {axis: no1,value:8},
      {axis: no2,value:8},
      {axis: no3,value:5},
      {axis: no4,value:2},
      {axis: no5,value:3}   ]
  },{className: 'multi m7', //houston
    axes: [
      {axis: no1,value:1},
      {axis: no2,value:4},
      {axis: no3,value:4},
      {axis: no4,value:1},
      {axis: no5,value:3}   ]
  },{className: 'multi m8', //minneapolis
    axes: [
      {axis: no1,value:10},
      {axis: no2,value:10},
      {axis: no3,value:4},
      {axis: no4,value:8},
      {axis: no5,value:2}   ]
  },{className: 'multi m9', //sanfran
    axes: [
      {axis: no1,value:7},
      {axis: no2,value:5},
      {axis: no3,value:7},
      {axis: no4,value:2},
      {axis: no5,value:3}   ]
  },{className: 'multi m10', //washington
    axes: [
      {axis: no1,value:10},
      {axis: no2,value:10},
      {axis: no3,value:3},
      {axis: no4,value:10},
      {axis: no5,value:7}   ]
  },{className: 'multi m11', //barcelona
    axes: [
      {axis: no1,value:10},
      {axis: no2,value:10},
      {axis: no3,value:9},
      {axis: no4,value:3},
      {axis: no5,value:10}   ]
  },{className: 'multi m12', //london
    axes: [
      {axis: no1,value:9},
      {axis: no2,value:10},
      {axis: no3,value:8},
      {axis: no4,value:9},
      {axis: no5,value:6}   ]
  },{className: 'multi m13', //paris
    axes: [
      {axis: no1,value:10},
      {axis: no2,value:10},
      {axis: no3,value:10},
      {axis: no4,value:9},
      {axis: no5,value:9}   ]
  },{className: 'single', //newyork
    axes: [
      {axis: no1,value:7},
      {axis: no2,value:9},
      {axis: no3,value:9},
      {axis: no4,value:5},
      {axis: no5,value:9}   ]
    }
];




function randomDataset() {
  return argentina.map(function(d) {
    return {
      className: d.className,
      axes: d.axes.map(function(axis) {
        return {axis: axis.axis, value: Math.ceil(Math.random() * 10)};
      })
    };
  });
}