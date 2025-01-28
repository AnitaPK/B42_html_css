// 5X5 
function printSquare(n){
for(i=0;i<n;i++){
    row = ''
    for(j=0;j<n;j++){
        row+=" *"
    }
    console.log(row)
}
}
// printSquare(5);

function printTriangle(n){
    for(i=0;i<n;i++){
        row = ''
        for(j=0;j<=i;j++){
            row+=" *"
        }
        console.log(row)
    }
}
// printTriangle(5);

function printInvertedTriangle(n){
    for(let i=n; i>0; i--){
        row = '';
        for(j=0; j<i; j++){
            row+= ' *';
        }
        console.log(row)
    }
}
// printInvertedTriangle(5);

// ite          n  i  row   j    row              console row 
// i =1, j=1    5  5  ''    0     ' *'              
//       j=2                1    ' * *'              
//       j=3                2    ' * * *'           
//       j=4                3    ' * * * *'         
//       j=5                4    ' * * * * *'       ' * * * * *'
//                                                  ' * * * *'
//                                                  ' * * *'
//                                                  ' * *'
//                                                  ' *'
//       j=6       5        5

// i=2   j=1   5   4  ''    0   ' *'
//                          1   ' * *'
//                          2   ' * * *'
//                          3   ' * * * *'
//                          4 
// i=3         5   3  ''    0   ' *'
//                          1   ' * *'
//                          2   ' * * *'
//                          3  
// i=4         5   2  ''    0   ' *'
//                          1   ' * *'
//                          2
// i=5         5   1 ''     0   ' *'
//                          1
// i=6         5   0


function printPyramid(n){
    for(i=1;i<=n;i++){
        row = ''
        for(j=0;j<n;j++){
            if(j<n-i){
            row += ' '
            }else{
                row += ' *'
            }
        }
        console.log(row)
    }
}
printPyramid(5)

function printDiamond(n){
    for(i=1;i<=n;i++){
        row = ''
        for(j=0;j<n;j++){
            if(j<n-i){
            row += ' '
            }else{
                row += ' *'
            }
        }
        console.log(row)
    }
    for(i=n-1;i>0;i--){
        row = ''
        for(j=0;j<n;j++){
            if(j<n-i){
            row += ' '
            }else{
                row += ' *'
            }
        }
        console.log(row)
    }
}

printDiamond(5);
